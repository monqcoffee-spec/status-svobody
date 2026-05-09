import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { generateText } from "ai";
import { z } from "zod";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway";

const BUREAU_LABELS: Record<string, string> = {
  nbki: "НБКИ (Национальное Бюро Кредитных Историй)",
  okb: "ОКБ (Объединённое Кредитное Бюро)",
  sb: "Скоринг Бюро (СБ)",
};

export const verifyCreditReport = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { reportId: string }) =>
    z.object({ reportId: z.string().uuid() }).parse(data)
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context as { supabase: any; userId: string };

    const { data: report, error } = await supabase
      .from("credit_reports")
      .select("*")
      .eq("id", data.reportId)
      .eq("user_id", userId)
      .single();
    if (error || !report) throw new Error("Отчёт не найден");

    // Download file
    const { data: file, error: dlErr } = await supabase.storage
      .from("portal-docs")
      .download(report.file_path);
    if (dlErr || !file) throw new Error("Не удалось загрузить файл");

    const ab = await file.arrayBuffer();
    const base64 = Buffer.from(ab).toString("base64");
    const mime = file.type || "application/pdf";

    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      // Fallback: mark as ok without AI
      await supabase.from("credit_reports").update({
        verified: true, verification_status: "ok",
        verification_notes: "Принят без AI-проверки (ключ AI недоступен)."
      }).eq("id", report.id);
      return { status: "ok", notes: "Принят без AI-проверки." };
    }

    const expected = BUREAU_LABELS[report.bureau];
    const gateway = createLovableAiGatewayProvider(apiKey);
    const model = gateway("google/gemini-2.5-flash");

    let status: "ok" | "mismatch" | "unreadable" = "ok";
    let notes = "";
    try {
      const { text } = await generateText({
        model,
        messages: [
          {
            role: "system",
            content: `Ты проверяешь, что загруженный документ — это действительно отчёт ${expected}. Ответь СТРОГО в формате JSON: {"is_match": boolean, "is_complete": boolean, "notes": "краткий комментарий по-русски"}. is_match=true только если в документе есть явные признаки бюро ${expected}.`,
          },
          {
            role: "user",
            content: [
              { type: "text", text: `Это отчёт ${expected}? Все ли страницы читаются?` },
              { type: "file", data: `data:${mime};base64,${base64}`, mediaType: mime },
            ],
          },
        ],
      });
      const m = text.match(/\{[\s\S]*\}/);
      const parsed = m ? JSON.parse(m[0]) : null;
      if (!parsed) {
        status = "unreadable";
        notes = "Не удалось разобрать ответ модели";
      } else if (!parsed.is_match) {
        status = "mismatch";
        notes = parsed.notes ?? `Документ не похож на ${expected}.`;
      } else if (!parsed.is_complete) {
        status = "unreadable";
        notes = parsed.notes ?? "Документ читается частично.";
      } else {
        notes = parsed.notes ?? "Документ распознан корректно.";
      }
    } catch (e: any) {
      status = "unreadable";
      notes = "Ошибка проверки: " + (e?.message ?? "неизвестно");
    }

    await supabase.from("credit_reports").update({
      verified: status === "ok",
      verification_status: status,
      verification_notes: notes,
    }).eq("id", report.id);

    return { status, notes };
  });