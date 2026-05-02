import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { getRequestHeader } from "@tanstack/react-start/server";

const LeadSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Имя слишком короткое")
      .max(80, "Имя слишком длинное"),
    phone: z
      .string()
      .trim()
      .max(32, "Телефон слишком длинный")
      .regex(/^[+\d\s\-()]*$/, "Допустимы только цифры и +-() ")
      .optional()
      .or(z.literal("")),
    email: z
      .string()
      .trim()
      .max(255, "Слишком длинный e-mail")
      .email("Некорректный e-mail")
      .optional()
      .or(z.literal("")),
    preferredTime: z
      .string()
      .trim()
      .max(120, "Слишком длинный текст")
      .optional()
      .or(z.literal("")),
    message: z
      .string()
      .trim()
      .max(1000, "Сообщение слишком длинное")
      .optional()
      .or(z.literal("")),
    debtAmount: z
      .number()
      .int()
      .min(10000)
      .max(1_000_000_000)
      .optional(),
    source: z.string().trim().max(40).default("index"),
  })
  .refine(
    (v) => (v.phone && v.phone.length >= 7) || (v.email && v.email.length > 3),
    { message: "Укажите телефон или e-mail", path: ["phone"] },
  );

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    const userAgent = getRequestHeader("user-agent") ?? null;

    const { error } = await supabaseAdmin.from("lead_requests").insert({
      name: data.name,
      phone: data.phone || "",
      email: data.email || null,
      preferred_time: data.preferredTime || null,
      message: data.message || null,
      debt_amount: data.debtAmount ?? null,
      source: data.source,
      user_agent: userAgent,
    });

    if (error) {
      console.error("submitLead insert error:", error);
      return {
        ok: false as const,
        error: "Не удалось отправить заявку. Попробуйте ещё раз.",
      };
    }

    return { ok: true as const };
  });