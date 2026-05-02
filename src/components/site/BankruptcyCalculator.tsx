import { useMemo, useState } from "react";
import { z } from "zod";
import { ArrowRight, ArrowLeft, RotateCcw, Check, AlertTriangle, X, Sparkles, MessageSquare } from "lucide-react";

/**
 * Калькулятор «Подходит ли мне банкротство».
 * 6 вопросов, локальный вердикт. Никакие данные не отправляются на сервер.
 */

const answerSchema = z.object({
  debt: z.enum(["lt300", "300-500", "500-1m", "1m-3m", "gt3m"]),
  income: z.enum(["none", "below-min", "stable", "high"]),
  property: z.enum(["only-home", "home-plus", "no-home", "nothing"]),
  transfers: z.enum(["none", "minor", "major"]),
  pressure: z.enum(["calls", "fssp", "court", "none"]),
  goal: z.enum(["clean", "stop-pressure", "save-property", "explore"]),
});

type Answers = Partial<z.infer<typeof answerSchema>>;
type Key = keyof z.infer<typeof answerSchema>;

type Option = { value: string; label: string; hint?: string };
type Question = { key: Key; label: string; sub: string; options: Option[] };

const questions: Question[] = [
  {
    key: "debt",
    label: "Сумма долга",
    sub: "Общая задолженность по всем кредиторам — банки, МФО, ФНС, поручительство.",
    options: [
      { value: "lt300", label: "Менее 300 000 ₽", hint: "Внесудебная процедура через МФЦ" },
      { value: "300-500", label: "300 000 – 500 000 ₽" },
      { value: "500-1m", label: "500 тыс. – 1 млн ₽" },
      { value: "1m-3m", label: "1 – 3 млн ₽" },
      { value: "gt3m", label: "Более 3 млн ₽" },
    ],
  },
  {
    key: "income",
    label: "Доход",
    sub: "Официальный или фактический ежемесячный доход после обязательных трат.",
    options: [
      { value: "none", label: "Дохода нет" },
      { value: "below-min", label: "Ниже прожиточного минимума" },
      { value: "stable", label: "Стабильный, средний" },
      { value: "high", label: "Высокий, могу платить часть долга" },
    ],
  },
  {
    key: "property",
    label: "Имущество",
    sub: "Что есть в собственности на сегодня — кроме предметов быта.",
    options: [
      { value: "only-home", label: "Только единственное жильё" },
      { value: "home-plus", label: "Жильё + машина / дача / 2-я квартира" },
      { value: "no-home", label: "Машина / другое, но без своего жилья" },
      { value: "nothing", label: "Ничего нет" },
    ],
  },
  {
    key: "transfers",
    label: "Сделки за 3 года",
    sub: "Передача имущества родственникам, продажи ниже рынка, дарение.",
    options: [
      { value: "none", label: "Не было" },
      { value: "minor", label: "Были мелкие — по рыночной цене" },
      { value: "major", label: "Переписали имущество на близких" },
    ],
  },
  {
    key: "pressure",
    label: "Что происходит сейчас",
    sub: "Текущая ситуация со взысканием.",
    options: [
      { value: "calls", label: "Звонят коллекторы и кредиторы" },
      { value: "fssp", label: "Приставы списывают со счетов" },
      { value: "court", label: "Уже идут судебные процессы" },
      { value: "none", label: "Пока тихо" },
    ],
  },
  {
    key: "goal",
    label: "Главная цель",
    sub: "Что важнее всего получить в результате.",
    options: [
      { value: "clean", label: "Полностью списать долги" },
      { value: "stop-pressure", label: "Остановить взыскание и звонки" },
      { value: "save-property", label: "Сохранить максимум имущества" },
      { value: "explore", label: "Просто понять — подходит ли мне" },
    ],
  },
];

type Verdict = {
  status: "fit" | "mfc" | "risky" | "review";
  title: string;
  headline: string;
  message: string;
  bullets: string[];
  cta: { primary: string; ghost: string };
};

function evaluate(a: z.infer<typeof answerSchema>): Verdict {
  // 1. Внесудебка через МФЦ
  if (a.debt === "lt300") {
    return {
      status: "mfc",
      title: "Внесудебная процедура через МФЦ",
      headline: "Бесплатный путь",
      message:
        "При долге до 500 000 ₽ и отсутствии имущества выгоднее идти через МФЦ — процедура бесплатна и занимает 6 месяцев. Помощь арбитражного управляющего здесь не требуется.",
      bullets: [
        "Срок процедуры: 6 месяцев",
        "Стоимость: 0 ₽",
        "Подаётся через МФЦ по месту жительства",
      ],
      cta: { primary: "Узнать как подать в МФЦ", ghost: "Задать вопрос лично" },
    };
  }

  // 2. Высокий риск отказа
  if (a.transfers === "major") {
    return {
      status: "risky",
      title: "Риск отказа в списании долгов",
      headline: "Нужен предварительный разбор",
      message:
        "Передача имущества близким за последние 3 года — частая причина оспаривания сделок и отказа в освобождении от долгов. Здесь нужен индивидуальный разбор стратегии до подачи заявления.",
      bullets: [
        "Финуправляющий обязан проверить все сделки",
        "Сделка может быть оспорена и возвращена в массу",
        "При недобросовестности — суд не освобождает от долгов",
      ],
      cta: { primary: "Записаться на разбор кейса", ghost: "Открыть интенсив" },
    };
  }

  // 3. Высокий доход — сначала смотрим реструктуризацию
  if (a.income === "high" && (a.debt === "300-500" || a.debt === "500-1m")) {
    return {
      status: "review",
      title: "Возможна реструктуризация",
      headline: "Не реализация — а план погашения",
      message:
        "При высоком стабильном доходе суд скорее введёт план реструктуризации на 3 года, а не реализацию имущества. Это другая стратегия, другие сроки, другой итог. Разбираем индивидуально.",
      bullets: [
        "Срок: до 3 лет фиксированных платежей",
        "Имущество не продаётся",
        "Часть долгов возвращается по графику",
      ],
      cta: { primary: "Разобрать мою стратегию", ghost: "Открыть интенсив" },
    };
  }

  // 4. Подходит — стандартная процедура
  return {
    status: "fit",
    title: "Процедура подходит",
    headline: "Можно идти в банкротство по 127-ФЗ",
    message:
      "По вашим вводным — это стандартная судебная процедура с реализацией имущества. Срок 6–12 месяцев, единственное жильё сохраняется, взыскание останавливается с момента введения процедуры.",
    bullets: [
      a.pressure === "fssp" || a.pressure === "court"
        ? "Взыскания и аресты замораживаются в день введения"
        : "Звонки коллекторов прекращаются по закону",
      "Единственное жильё защищено статьёй 446 ГПК",
      "Срок процедуры: 6–12 месяцев до решения суда",
    ],
    cta: { primary: "Узнать стоимость сопровождения", ghost: "Открыть интенсив" },
  };
}

export function BankruptcyCalculator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = questions.length;
  const current = questions[step];
  const progress = ((step + (done ? 1 : 0)) / total) * 100;

  const verdict = useMemo<Verdict | null>(() => {
    if (!done) return null;
    const parsed = answerSchema.safeParse(answers);
    if (!parsed.success) return null;
    return evaluate(parsed.data);
  }, [done, answers]);

  const select = (value: string) => {
    setError(null);
    const next = { ...answers, [current.key]: value } as Answers;
    setAnswers(next);

    if (step < total - 1) {
      setTimeout(() => setStep(step + 1), 180);
    } else {
      const parsed = answerSchema.safeParse(next);
      if (parsed.success) {
        setTimeout(() => setDone(true), 180);
      } else {
        setError("Заполните все шаги, чтобы получить вердикт.");
      }
    }
  };

  const back = () => {
    setError(null);
    if (step > 0) setStep(step - 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
    setError(null);
  };

  return (
    <div
      className="relative overflow-hidden border border-white/10 bg-ink-soft/60 backdrop-blur-sm"
      style={{ borderRadius: "2px" }}
    >
      {/* Top progress */}
      <div className="relative h-px w-full bg-white/5">
        <div
          className="h-full bg-cyan transition-all duration-500"
          style={{
            width: `${progress}%`,
            boxShadow: "0 0 12px var(--cyan)",
          }}
        />
      </div>

      <div className="grid gap-0 md:grid-cols-12">
        {/* Side panel */}
        <aside className="border-b border-white/5 bg-ink/40 p-7 md:col-span-4 md:border-b-0 md:border-r md:p-9">
          <div className="smallcaps text-cyan">Диагностика</div>
          <h3 className="display mt-5 text-2xl text-silver md:text-3xl">
            Подходит ли мне <span className="text-cyan italic">банкротство?</span>
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-silver-dim">
            6 вопросов · 2 минуты · персональный вердикт без звонков и регистраций.
          </p>

          <ul className="mt-8 space-y-3 text-xs">
            {[
              "Никакие данные не сохраняются",
              "Без email и телефона",
              "Расчёт по 127-ФЗ и практике АУ",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-silver/70">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan" />
                {t}
              </li>
            ))}
          </ul>

          {!done && (
            <div className="mt-10 flex items-baseline gap-3">
              <span className="font-display text-5xl tabular text-cyan text-glow">
                {String(step + 1).padStart(2, "0")}
              </span>
              <span className="smallcaps text-silver-dim">из {String(total).padStart(2, "0")}</span>
            </div>
          )}
        </aside>

        {/* Body */}
        <div className="p-7 md:col-span-8 md:p-10">
          {!done && current && (
            <div key={current.key} className="reveal">
              <div className="smallcaps text-silver-dim">Шаг {String(step + 1).padStart(2, "0")} · {current.label}</div>
              <h4 className="mt-4 font-display text-2xl text-silver md:text-3xl">{current.sub}</h4>

              <div className="mt-8 grid gap-2.5">
                {current.options.map((opt) => {
                  const selected = answers[current.key] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => select(opt.value)}
                      className={
                        "group flex items-center justify-between gap-4 border px-5 py-4 text-left transition-all " +
                        (selected
                          ? "border-cyan bg-cyan/10 text-cyan-glow"
                          : "border-white/10 bg-ink/40 text-silver hover:border-cyan/40 hover:bg-ink")
                      }
                      style={{ borderRadius: "2px" }}
                    >
                      <span className="flex flex-col">
                        <span className="font-display text-base">{opt.label}</span>
                        {opt.hint && (
                          <span className="mt-1 text-[11px] tracking-wider text-silver-dim">{opt.hint}</span>
                        )}
                      </span>
                      <ArrowRight
                        className={
                          "h-4 w-4 shrink-0 transition-all " +
                          (selected
                            ? "text-cyan translate-x-0.5"
                            : "text-silver-dim group-hover:text-cyan group-hover:translate-x-0.5")
                        }
                      />
                    </button>
                  );
                })}
              </div>

              {error && (
                <div className="mt-5 flex items-center gap-2 text-xs text-cyan-glow">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  {error}
                </div>
              )}

              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={back}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-silver-dim transition-colors hover:text-cyan disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Назад
                </button>
                <span className="smallcaps text-[9px] text-silver-dim">
                  Ответ · клик
                </span>
              </div>
            </div>
          )}

          {done && verdict && <VerdictView verdict={verdict} onReset={reset} />}
        </div>
      </div>
    </div>
  );
}

function VerdictView({ verdict, onReset }: { verdict: Verdict; onReset: () => void }) {
  const tone =
    verdict.status === "fit"
      ? { Icon: Sparkles, color: "text-cyan", glow: "ring-glow" }
      : verdict.status === "mfc"
        ? { Icon: Check, color: "text-cyan", glow: "" }
        : verdict.status === "risky"
          ? { Icon: X, color: "text-silver-dim", glow: "" }
          : { Icon: AlertTriangle, color: "text-cyan", glow: "" };

  const Icon = tone.Icon;

  return (
    <div className="reveal">
      <div className="flex items-center gap-3">
        <div
          className={"inline-flex h-10 w-10 items-center justify-center border border-cyan/40 " + tone.color + " " + tone.glow}
          style={{ borderRadius: "2px" }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="smallcaps text-cyan">{verdict.headline}</div>
      </div>

      <h4 className="display mt-6 text-3xl text-silver md:text-4xl">
        {verdict.title}
      </h4>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-silver/80">
        {verdict.message}
      </p>

      <ul className="mt-8 space-y-3 border-y border-white/8 py-6 text-sm">
        {verdict.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-silver/85">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" style={{ boxShadow: "0 0 8px var(--cyan)" }} />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="https://t.me/status_svobody_bot"
          target="_blank"
          rel="noopener"
          className="btn-cyan rounded-sm"
        >
          {verdict.cta.primary}
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#contact"
          className="btn-ghost rounded-sm"
          onClick={(e) => {
            const el = document.getElementById("contact");
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          <MessageSquare className="h-4 w-4 text-cyan" />
          Уточнить у юриста
        </a>
        <button type="button" onClick={onReset} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-silver-dim hover:text-cyan transition-colors">
          <RotateCcw className="h-3.5 w-3.5" /> Пройти заново
        </button>
      </div>

      <p className="mt-8 text-[11px] tracking-wider text-silver-dim">
        Это предварительная оценка по введённым данным. Точный сценарий определяется на индивидуальном разборе с арбитражным управляющим.
      </p>
    </div>
  );
}
