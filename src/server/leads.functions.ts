import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { getRequestHeader } from "@tanstack/react-start/server";

const LeadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Имя слишком короткое")
    .max(80, "Имя слишком длинное"),
  phone: z
    .string()
    .trim()
    .min(7, "Телефон слишком короткий")
    .max(32, "Телефон слишком длинный")
    .regex(/^[+\d\s\-()]+$/, "Допустимы только цифры и +-() "),
  debtAmount: z
    .number({ message: "Укажите сумму долга" })
    .int()
    .min(10000, "Сумма должна быть не меньше 10 000 ₽")
    .max(1_000_000_000, "Слишком большая сумма"),
  source: z.string().trim().max(40).default("index"),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    const userAgent = getRequestHeader("user-agent") ?? null;

    const { error } = await supabaseAdmin.from("lead_requests").insert({
      name: data.name,
      phone: data.phone,
      debt_amount: data.debtAmount,
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