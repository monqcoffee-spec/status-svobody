import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import {
  ArrowRight,
  RotateCcw,
  Sparkles,
  MessageSquare,
  Flame,
  Check,
  ArrowUpRight,
  Loader2,
} from "lucide-react";
function scrollToContact() {
  const el = document.getElementById("contact");
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  // brief highlight pulse so it's clear the user landed in the right place
  el.classList.remove("is-flashing");
  // force reflow to restart the animation if it was already applied
  void el.offsetWidth;
  el.classList.add("is-flashing");
  window.setTimeout(() => el.classList.remove("is-flashing"), 1800);
}

import {
  saveConsultation,
  submitLeadWithConsultation,
} from "@/server/consultations.functions";

/* ============================================================
 * AI-диагностика для лендинга
 * - 3–5 уточняющих вопросов от модели (по одному, динамически)
 * - финальный вердикт + рекомендация
 * - если AI пометил лид как «горячий» — показываем форму контактов
 *   и привязываем заявку к сохранённой консультации
 * ============================================================ */

type ChatMsg = { role: "assistant" | "user"; content: string };

type AiQuestion = {
  type: "question";
  question: { text: string; options: string[] };
};

type AiVerdict = {
  type: "verdict";
  verdict: {
    title: string;
    summary: string;
    recommendation: string;
    hot: boolean;
  };
};

type AiResponse = AiQuestion | AiVerdict | { error: string };

const AI_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-diagnose`;
const AUTH_HEADER = `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`;

const MAX_QUESTIONS = 5;

async function askAI(messages: ChatMsg[]): Promise<AiResponse> {
  const resp = await fetch(AI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH_HEADER,
    },
    body: JSON.stringify({ messages }),
  });
  const data = await resp.json().catch(() => ({ error: "Bad response" }));
  if (!resp.ok) {
    return { error: (data as { error?: string })?.error ?? "AI недоступен" };
  }
  return data as AiResponse;
}

type Stage =
  | { kind: "intro" }
  | {
      kind: "asking";
      question: { text: string; options: string[] };
      qIndex: number;
    }
  | { kind: "loading"; qIndex: number }
  | {
      kind: "verdict";
      verdict: AiVerdict["verdict"];
      consultationId: string | null;
      sessionToken: string | null;
    }
  | { kind: "error"; message: string };

export function AiDiagnostic() {
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [stage, setStage] = useState<Stage>({ kind: "intro" });
  const saveConsultationFn = useServerFn(saveConsultation);

  async function startOrAdvance(history: ChatMsg[], qIndex: number) {
    setStage({ kind: "loading", qIndex });
    const res = await askAI(history);
    if ("error" in res) {
      setStage({ kind: "error", message: res.error });
      return;
    }
    if (res.type === "question" && qIndex < MAX_QUESTIONS) {
      const next = [
        ...history,
        { role: "assistant" as const, content: res.question.text },
      ];
      setMessages(next);
      setStage({ kind: "asking", question: res.question, qIndex });
      return;
    }
    // verdict (or hit cap — model should have already returned verdict)
    const v: AiVerdict["verdict"] =
      res.type === "verdict"
        ? res.verdict
        : {
            title: "Нужен индивидуальный разбор",
            summary:
              "По имеющимся данным однозначный вывод сделать сложно — нужен живой разбор с юристом.",
            recommendation:
              "Оставьте контакты — соберём документы и предложим стратегию в течение часа.",
            hot: false,
          };
    const finalHistory = [
      ...history,
      {
        role: "assistant" as const,
        content: `${v.title}. ${v.summary} ${v.recommendation}`,
      },
    ];
    setMessages(finalHistory);

    let consultationId: string | null = null;
    let sessionToken: string | null = null;
    try {
      const saved = await saveConsultationFn({
        data: {
          transcript: finalHistory,
          verdictTitle: v.title,
          verdictSummary: v.summary,
          recommendation: v.recommendation,
          hot: v.hot,
          source: "index",
        },
      });
      if (saved.ok) {
        consultationId = saved.id;
        sessionToken = saved.sessionToken;
      }
    } catch (e) {
      console.error("save consultation failed:", e);
    }
    setStage({ kind: "verdict", verdict: v, consultationId, sessionToken });
  }

  function handleStart() {
    const history: ChatMsg[] = [
      {
        role: "user",
        content:
          "Здравствуйте. Хочу разобраться со своей кредитной историей и понять следующий шаг. Задайте первый уточняющий вопрос.",
      },
    ];
    setMessages(history);
    void startOrAdvance(history, 0);
  }

  function handleAnswer(option: string) {
    if (stage.kind !== "asking") return;
    const next: ChatMsg[] = [
      ...messages,
      { role: "user", content: option },
    ];
    setMessages(next);
    void startOrAdvance(next, stage.qIndex + 1);
  }

  function reset() {
    setMessages([]);
    setStage({ kind: "intro" });
  }

  return (
    <div className="card-lux relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 100% 0%, color-mix(in oklab, var(--gold) 14%, transparent), transparent 70%), radial-gradient(ellipse 60% 60% at 0% 100%, color-mix(in oklab, var(--rose-quartz) 18%, transparent), transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 px-6 py-5 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan/40 bg-cyan/10">
            <Sparkles className="h-4 w-4 text-cyan" />
          </div>
          <div>
            <div className="font-display text-[11px] tabular tracking-[0.3em] text-cyan">
              AI-ДИАГНОСТИКА
            </div>
            <div className="text-sm text-silver">Финансовый консультант задаёт уточняющие вопросы</div>
          </div>
        </div>
        {stage.kind !== "intro" && (
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-sm border border-white/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-silver-dim transition hover:border-white/30 hover:text-silver"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Заново
          </button>
        )}
      </div>

      <div className="p-6 md:p-8">
        {stage.kind === "intro" && <IntroPanel onStart={handleStart} />}

        {stage.kind !== "intro" && stage.kind !== "verdict" && (
          <Transcript messages={messages} />
        )}

        {stage.kind === "loading" && <LoadingBubble />}

        {stage.kind === "asking" && (
          <OptionsPanel
            options={stage.question.options}
            onSelect={handleAnswer}
            qIndex={stage.qIndex}
          />
        )}

        {stage.kind === "verdict" && (
          <VerdictPanel
            verdict={stage.verdict}
            consultationId={stage.consultationId}
            onReset={reset}
          />
        )}

        {stage.kind === "error" && (
          <div className="rounded-sm border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-200">
            {stage.message}
            <button
              onClick={reset}
              className="ml-3 underline-offset-4 hover:underline"
            >
              Попробовать снова
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────── Intro ─────────── */
function IntroPanel({ onStart }: { onStart: () => void }) {
  return (
    <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
      <div>
        <h3 className="display text-2xl text-silver md:text-3xl">
          За 3–5 вопросов поймём,{" "}
          <span className="text-cyan italic text-glow">что вам подходит</span>
        </h3>
        <p className="mt-4 max-w-md text-silver-dim">
          AI-консультант задаст уточняющие вопросы и сформулирует персональную
          рекомендацию: с чего начать работу с кредитной историей, какие шаги
          дадут максимальный рост рейтинга. Анонимно. Контакты — только
          если нужен живой разбор.
        </p>
        <button
          onClick={onStart}
          className="btn-cyan group mt-8 inline-flex rounded-sm"
        >
          <span>Начать диагностику</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-silver-dim">
          Занимает ~2 минуты · ничего не отправляется без вашего согласия
        </p>
      </div>
      <ul className="grid gap-3 text-sm text-silver-dim">
        {[
          "Учитываем текущий рейтинг и записи в БКИ",
          "Учитываем доход, цели и горизонт планирования",
          "Подсказываем стратегию под вашу цель — карта, кредит, ипотека",
        ].map((t) => (
          <li
            key={t}
            className="flex items-start gap-3 rounded-sm border border-white/5 bg-white/[0.02] px-4 py-3"
          >
            <Check className="mt-0.5 h-4 w-4 flex-none text-cyan" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────── Transcript ─────────── */
function Transcript({ messages }: { messages: ChatMsg[] }) {
  // skip the synthetic kickoff user message
  const visible = messages.slice(1);
  if (visible.length === 0) return null;
  return (
    <div className="mb-6 space-y-3">
      {visible.map((m, i) => (
        <div
          key={i}
          className={
            m.role === "assistant"
              ? "max-w-[85%] rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-silver"
              : "ml-auto max-w-[85%] rounded-sm border border-cyan/30 bg-cyan/5 px-4 py-3 text-sm text-silver"
          }
        >
          {m.role === "assistant" && (
            <div className="mb-1 text-[10px] uppercase tracking-[0.25em] text-cyan/80">
              Консультант
            </div>
          )}
          {m.content}
        </div>
      ))}
    </div>
  );
}

function LoadingBubble() {
  return (
    <div className="flex items-center gap-3 rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-silver-dim">
      <Loader2 className="h-4 w-4 animate-spin text-cyan" />
      Консультант формулирует следующий вопрос…
    </div>
  );
}

/* ─────────── Options ─────────── */
function OptionsPanel({
  options,
  onSelect,
  qIndex,
}: {
  options: string[];
  onSelect: (v: string) => void;
  qIndex: number;
}) {
  return (
    <div className="mt-2">
      <div className="mb-3 text-[11px] uppercase tracking-[0.2em] text-silver-dim">
        Вопрос {qIndex + 1} · выберите подходящий вариант
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className="group flex items-center justify-between gap-3 rounded-sm border border-white/10 bg-white/[0.02] px-4 py-3 text-left text-sm text-silver transition hover:border-cyan/40 hover:bg-cyan/5"
          >
            <span>{opt}</span>
            <ArrowRight className="h-4 w-4 flex-none text-silver-dim transition group-hover:translate-x-0.5 group-hover:text-cyan" />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─────────── Verdict ─────────── */
function VerdictPanel({
  verdict,
  consultationId,
  onReset,
}: {
  verdict: AiVerdict["verdict"];
  consultationId: string | null;
  onReset: () => void;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
      <div>
        <div className="flex items-center gap-2">
          {verdict.hot ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-cyan">
              <Flame className="h-3 w-3" />
              Требует разбора
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-silver-dim">
              Предварительный вывод
            </span>
          )}
        </div>
        <h3 className="display mt-4 text-2xl text-silver md:text-3xl">
          {verdict.title}
        </h3>
        <p className="mt-4 text-silver-dim">{verdict.summary}</p>
        <div className="mt-6 rounded-sm border border-white/10 bg-white/[0.02] p-4 text-sm text-silver">
          <div className="text-[10px] uppercase tracking-[0.25em] text-cyan">
            Что делать
          </div>
          <p className="mt-2 leading-relaxed">{verdict.recommendation}</p>
        </div>
        {!verdict.hot && (
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={scrollToContact}
              className="btn-cyan group inline-flex rounded-sm"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Уточнить у консультанта</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button onClick={onReset} className="btn-ghost rounded-sm">
              <RotateCcw className="h-4 w-4" />
              <span>Пройти заново</span>
            </button>
          </div>
        )}
      </div>

      {verdict.hot && (
        <HotLeadForm consultationId={consultationId} verdictTitle={verdict.title} />
      )}
    </div>
  );
}

/* ─────────── Hot lead inline form ─────────── */
function HotLeadForm({
  consultationId,
  verdictTitle,
}: {
  consultationId: string | null;
  verdictTitle: string;
}) {
  const submitFn = useServerFn(submitLeadWithConsultation);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [debt, setDebt] = useState("");
  const [errors, setErrors] = useState<
    Partial<Record<"name" | "phone" | "debtAmount" | "system", string>>
  >({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  function formatDebt(value: string) {
    const digits = value.replace(/[^\d]/g, "").slice(0, 12);
    if (!digits) return "";
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = "Введите имя";
    if (phone.trim().length < 7) next.phone = "Введите телефон";
    else if (!/^[+\d\s\-()]+$/.test(phone.trim()))
      next.phone = "Только цифры и +-() ";
    const cleaned = debt.replace(/[^\d]/g, "");
    const amount = Number(cleaned);
    if (!cleaned || !Number.isFinite(amount) || amount < 10000)
      next.debtAmount = "Минимум 10 000 ₽";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    if (!consultationId) {
      setErrors({ system: "Не удалось привязать консультацию. Попробуйте ещё раз." });
      return;
    }

    setLoading(true);
    try {
      const res = await submitFn({
        data: {
          consultationId,
          name: name.trim(),
          phone: phone.trim(),
          debtAmount: amount,
          source: "ai-diagnostic",
        },
      });
      if (res.ok) {
        setDone(true);
        toast.success("Заявка принята. Свяжемся в течение часа.");
      } else {
        toast.error(res.error ?? "Не удалось отправить");
      }
    } catch (err) {
      console.error(err);
      toast.error("Сетевая ошибка. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="flex h-full flex-col justify-center rounded-sm border border-cyan/30 bg-cyan/5 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan/40 bg-cyan/10">
          <Check className="h-5 w-5 text-cyan" />
        </div>
        <div className="mt-4 font-display text-lg text-silver">Заявка принята</div>
        <p className="mt-2 text-sm text-silver-dim">
          Консультант свяжется с вами в течение часа в рабочее время. Транскрипт
          диагностики уже у нас — повторно ничего рассказывать не нужно.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-cyan/30 bg-gradient-to-br from-cyan/[0.05] to-transparent p-5"
    >
      <div className="font-display text-[11px] tabular tracking-[0.3em] text-cyan">
        НУЖЕН ЖИВОЙ РАЗБОР
      </div>
      <div className="mt-2 font-display text-base text-silver">
        Передадим контекст консультанту
      </div>
      <p className="mt-1 text-xs text-silver-dim">
        Мы уже знаем «{verdictTitle.toLowerCase()}». Оставьте контакты — перезвоним в
        течение часа.
      </p>

      <div className="mt-5 space-y-4">
        <Field
          label="Имя"
          error={errors.name}
          input={
            <input
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="lead-input"
              placeholder="Как к вам обращаться"
            />
          }
        />
        <Field
          label="Телефон"
          error={errors.phone}
          input={
            <input
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="lead-input tabular"
              placeholder="+7 ___ ___ __ __"
            />
          }
        />
        <Field
          label="Сумма долга, ₽"
          error={errors.debtAmount}
          input={
            <input
              type="text"
              inputMode="numeric"
              value={debt}
              onChange={(e) => setDebt(formatDebt(e.target.value))}
              className="lead-input tabular"
              placeholder="например, 1 500 000"
            />
          }
        />
      </div>

      {errors.system && (
        <div className="mt-3 text-xs text-red-300">{errors.system}</div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-cyan group mt-5 w-full justify-center rounded-sm disabled:opacity-60"
      >
        <span>{loading ? "Отправляем…" : "Связаться с консультантом"}</span>
        {!loading && (
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )}
      </button>

      <p className="mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-silver-dim">
        Данные защищены · не передаём третьим лицам
      </p>
    </form>
  );
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.2em] text-silver-dim">
        {label}
      </span>
      <div className="mt-2">{input}</div>
      {error ? (
        <span className="mt-1 block text-xs text-red-400">{error}</span>
      ) : null}
    </label>
  );
}