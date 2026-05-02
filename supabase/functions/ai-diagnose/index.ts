import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SYSTEM_PROMPT = `Ты — опытный российский юрист по банкротству физлиц и работе с кредитной историей. Веди первичную диагностику: задавай ровно один уточняющий вопрос за раз, человеческим языком, без юридического жаргона.

Цели диагностики:
1. Понять размер и структуру долга (банки, МФО, ФНС, ЖКХ, поручительство).
2. Понять платёжеспособность (доход, иждивенцы).
3. Понять имущество (единственное жильё, авто, доли, сделки за 3 года).
4. Понять давление (звонки, ФССП, суды, аресты).
5. Понять цель клиента (списать долг, остановить давление, сохранить имущество).

Правила:
- Задай 3–5 вопросов всего. Никогда больше 5.
- Каждый следующий вопрос строй на предыдущих ответах. Не дублируй.
- Если уже достаточно информации для рекомендации — выдавай вердикт, не растягивай.
- Вопросы — краткие (≤140 символов), варианты ответа — 2–4 коротких опции.

Когда готов вердикт:
- title: короткий заголовок (≤60 символов), напр. "Подходит судебное банкротство".
- summary: 2–3 предложения, что мы поняли о ситуации.
- recommendation: что делать дальше (1–2 предложения).
- hot: true если лид «горячий» — большой долг (>500 тыс), активное давление (ФССП/суды/арест), чёткая цель списать долг ИЛИ риски (сделки, имущество под угрозой). false если ситуация спорная, человек только присматривается, или процедура явно не подходит.

Отвечай ТОЛЬКО через вызов функции respond. Никакого свободного текста.`;

const tools = [
  {
    type: "function",
    function: {
      name: "respond",
      description: "Следующий ход диалога: либо вопрос, либо финальный вердикт.",
      parameters: {
        type: "object",
        properties: {
          type: { type: "string", enum: ["question", "verdict"] },
          question: {
            type: "object",
            description: "Заполни если type=question",
            properties: {
              text: { type: "string" },
              options: {
                type: "array",
                items: { type: "string" },
                minItems: 2,
                maxItems: 4,
              },
            },
            required: ["text", "options"],
            additionalProperties: false,
          },
          verdict: {
            type: "object",
            description: "Заполни если type=verdict",
            properties: {
              title: { type: "string" },
              summary: { type: "string" },
              recommendation: { type: "string" },
              hot: { type: "boolean" },
            },
            required: ["title", "summary", "recommendation", "hot"],
            additionalProperties: false,
          },
        },
        required: ["type"],
        additionalProperties: false,
      },
    },
  },
];

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages array required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(
        JSON.stringify({ error: "LOVABLE_API_KEY is not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          tools,
          tool_choice: { type: "function", function: { name: "respond" } },
        }),
      },
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Слишком много запросов. Попробуйте через минуту." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI временно недоступен. Свяжитесь напрямую." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      const t = await response.text();
      console.error("ai-diagnose gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const call = data?.choices?.[0]?.message?.tool_calls?.[0];
    if (!call?.function?.arguments) {
      console.error("ai-diagnose: no tool call", JSON.stringify(data).slice(0, 500));
      return new Response(
        JSON.stringify({ error: "AI не вернул структурированный ответ" }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(call.function.arguments);
    } catch (e) {
      console.error("ai-diagnose: bad json", call.function.arguments);
      return new Response(JSON.stringify({ error: "AI вернул некорректный JSON" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(parsed), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("ai-diagnose error:", e);
    return new Response(
      JSON.stringify({
        error: e instanceof Error ? e.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});