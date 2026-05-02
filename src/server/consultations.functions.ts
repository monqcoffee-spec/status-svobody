import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { getRequestHeader } from "@tanstack/react-start/server";

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
      })
      .select("id")
      .single();

    if (error || !row) {
      console.error("saveConsultation error:", error);
      return { ok: false as const };
    }
    return { ok: true as const, id: row.id as string };
  });

const AttachSchema = z.object({
  consultationId: z.string().uuid(),
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
      .eq("id", data.consultationId);

    if (linkErr) {
      // Non-fatal: lead is already saved.
      console.error("link consultation->lead error:", linkErr);
    }

    return { ok: true as const };
  });