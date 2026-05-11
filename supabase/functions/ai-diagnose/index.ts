import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Allowlist of origins permitted to call this function.
// Use exact matches + a regex for *.lovable.app / *.lovableproject.com previews.
const ALLOWED_ORIGINS = [
  "https://status-svobody.lovable.app",
  "http://localhost:3000",
  "http://localhost:5173",
];
const ALLOWED_ORIGIN_RX = /^https:\/\/[a-z0-9-]+\.(lovable\.app|lovableproject\.com)$/i;

function corsFor(origin: string | null) {
  const allow =
    origin && (ALLOWED_ORIGINS.includes(origin) || ALLOWED_ORIGIN_RX.test(origin))
      ? origin
      : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Vary": "Origin",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
  };
}

// Per-IP rate limit (best-effort; resets per isolate).
const RATE_LIMIT = 30; // requests
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const buckets = new Map<string, { count: number; resetAt: number }>();
function rateLimitOk(key: string) {
  const now = Date.now();
  const b = buckets.get(key);
  if (!b || b.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (b.count >= RATE_LIMIT) return false;
  b.count += 1;
  return true;
}

const SYSTEM_PROMPT = `Ты — опытный российский финансовый консультант, специализация — кредитная история и работа с БКИ. Веди первичную диагностику: задавай ровно один уточняющий вопрос за раз, человеческим языком, без жаргона. Никогда не упоминай услуги банкротства, арбитражного управляющего, 127-ФЗ, ЕФРСБ, МФЦ, ФССП — это вне твоей зоны.

Цели диагностики:
1. Понять текущий кредитный рейтинг и историю (есть ли просрочки, отказы банков).
2. Понять структуру обязательств (действующие кредиты, карты, микрозаймы, поручительство).
3. Понять доход и стабильность (источник, регулярность).
4. Понять цель клиента в горизонте 1–3 лет (одобрение карты, потребкредита, автокредита, ипотеки).
5. Понять, делал ли клиент уже шаги (запрашивал отчёты в БКИ, оспаривал записи).

Правила:
- Задай 3–5 вопросов всего. Никогда больше 5.
- Каждый следующий вопрос строй на предыдущих ответах. Не дублируй.
- Если уже достаточно информации для рекомендации — выдавай вердикт, не растягивай.
- Вопросы — краткие (≤140 символов), варианты ответа — 2–4 коротких опции.

Когда готов вердикт:
- title: короткий заголовок (≤60 символов), напр. "Нужна чистка БКИ перед ипотекой".
- summary: 2–3 предложения, что мы поняли о ситуации.
- recommendation: что делать дальше (1–2 предложения), в терминах работы с КИ.
- hot: true если ситуация требует индивидуального разбора (низкий рейтинг + конкретная цель в ближайший год, спорные записи в БКИ, серия отказов банков). false если человек только присматривается или ему достаточно общего совета.

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
  const origin = req.headers.get("origin");
  const corsHeaders = corsFor(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Reject calls from disallowed origins (browsers send Origin on cross-site fetches).
    if (origin && !ALLOWED_ORIGINS.includes(origin) && !ALLOWED_ORIGIN_RX.test(origin)) {
      return new Response(JSON.stringify({ error: "Origin not allowed" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Best-effort per-IP rate limit.
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("cf-connecting-ip") ??
      "anon";
    if (!rateLimitOk(ip)) {
      return new Response(
        JSON.stringify({ error: "Слишком много запросов. Попробуйте через минуту." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { messages } = await req.json();
    if (
      !Array.isArray(messages) ||
      messages.length === 0 ||
      messages.length > 40 ||
      !messages.every(
        (m) =>
          m &&
          typeof m === "object" &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.length <= 2000,
      )
    ) {
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