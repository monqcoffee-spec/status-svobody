import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { getRequestHeader } from "@tanstack/react-start/server";

// Simple in-memory rate limiter (per Worker isolate).
// Limits anonymous AI-consultation saves to prevent storage / cost amplification abuse.
const SAVE_RATE_LIMIT = 8; // saves per window
const SAVE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const saveBuckets = new Map<string, { count: number; resetAt: number }>();

function clientKey(): string {
  const xff = getRequestHeader("x-forwarded-for") ?? "";
  const ip = xff.split(",")[0]?.trim();
  if (ip) return ip;
  const real = getRequestHeader("x-real-ip");
  if (real) return real;
  // Fall back to user-agent as a weak signal.
  return getRequestHeader("user-agent") ?? "anon";
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const bucket = saveBuckets.get(key);
  if (!bucket || bucket.resetAt < now) {
    saveBuckets.set(key, { count: 1, resetAt: now + SAVE_WINDOW_MS });
    return true;
  }
  if (bucket.count >= SAVE_RATE_LIMIT) return false;
  bucket.count += 1;
  return true;
}

const TranscriptItem = z.object({
  role: z.enum(["assistant", "user"]),
  content: z.string().max(2000),
});

const SaveSchema = z.object({
  transcript: z.array(TranscriptItem).min(1).max(40),
  verdictTitle: z.string().trim().min(1).max(200),
  verdictSummary: z.string().trim().min(1).max(2000),
  recommendation: z.string().trim().min(1).max(2000),
  hot: z.boolean(),
  source: z.string().trim().max(40).default("index"),
});

export const saveConsultation = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => SaveSchema.parse(input))
  .handler(async ({ data }) => {
    const userAgent = getRequestHeader("user-agent") ?? null;

    if (!checkRateLimit(clientKey())) {
      return { ok: false as const, error: "rate_limited" as const };
    }

    // Generate a session token returned only to this caller; later proves ownership.
    const sessionToken = crypto.randomUUID();

    const { data: row, error } = await supabaseAdmin
      .from("ai_consultations")
      .insert({
        transcript: data.transcript,
        verdict_title: data.verdictTitle,
        verdict_summary: data.verdictSummary,
        recommendation: data.recommendation,
        hot: data.hot,
        source: data.source,
        user_agent: userAgent,
        session_token: sessionToken,
      })
      .select("id")
      .single();

    if (error || !row) {
      console.error("saveConsultation error:", error);
      return { ok: false as const };
    }
    return { ok: true as const, id: row.id as string, sessionToken };
  });

const AttachSchema = z.object({
  consultationId: z.string().uuid(),
  sessionToken: z.string().uuid(),
  name: z.string().trim().min(2).max(80),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(32)
    .regex(/^[+\d\s\-()]+$/),
  debtAmount: z.number().int().min(10000).max(1_000_000_000),
  source: z.string().trim().max(40).default("index"),
});

export const submitLeadWithConsultation = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AttachSchema.parse(input))
  .handler(async ({ data }) => {
    const userAgent = getRequestHeader("user-agent") ?? null;

    // Verify the caller actually owns the consultation they want to link to.
    // Without this check, an unauthenticated attacker could attach their lead
    // to any existing consultation row by guessing its UUID (IDOR).
    const { data: consultation, error: lookupErr } = await supabaseAdmin
      .from("ai_consultations")
      .select("id, session_token, lead_id")
      .eq("id", data.consultationId)
      .maybeSingle();

    if (lookupErr || !consultation || consultation.session_token !== data.sessionToken) {
      return {
        ok: false as const,
        error: "Не удалось подтвердить сессию. Обновите страницу и пройдите диагностику заново.",
      };
    }

    const { data: lead, error } = await supabaseAdmin
      .from("lead_requests")
      .insert({
        name: data.name,
        phone: data.phone,
        debt_amount: data.debtAmount,
        source: data.source,
        user_agent: userAgent,
      })
      .select("id")
      .single();

    if (error || !lead) {
      console.error("submitLeadWithConsultation insert lead error:", error);
      return {
        ok: false as const,
        error: "Не удалось отправить заявку. Попробуйте ещё раз.",
      };
    }

    const { error: linkErr } = await supabaseAdmin
      .from("ai_consultations")
      .update({ lead_id: lead.id })
      .eq("id", data.consultationId)
      .eq("session_token", data.sessionToken);

    if (linkErr) {
      // Non-fatal: lead is already saved.
      console.error("link consultation->lead error:", linkErr);
    }

    return { ok: true as const };
  });