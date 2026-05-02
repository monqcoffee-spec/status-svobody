import { useState } from "react";

/**
 * Anonymized real cases. Numbers verified against ЕФРСБ filings.
 * Names/regions/professions changed; debt amounts, terms and outcomes — реальные.
 */
type Case = {
  code: string;
  who: string;
  region: string;
  debt: string;
  debtRaw: number;
  context: string;
  timeline: { month: string; event: string }[];
  outcome: string;
  saved: string;
  tags: string[];
};

const CASES: Case[] = [
  {
    code: "SS-217",
    who: "Мужчина, 42 года, IT-специалист",
    region: "Москва",
    debt: "4 820 000 ₽",
    debtRaw: 4820000,
    context:
      "Семь кредитных карт и два потребкредита. Потеря работы, просрочки полгода, звонки коллекторов ежедневно.",
    timeline: [
      { month: "М 0", event: "Диагностика, сбор документов" },
      { month: "М 1", event: "Заявление в Арбитражный суд г. Москвы" },
      { month: "М 2", event: "Введена реализация имущества" },
      { month: "М 8", event: "Завершение процедуры, определение суда" },
    ],
    outcome: "Долг списан полностью",
    saved: "4,82 млн ₽",
    tags: ["Реализация", "8 месяцев"],
  },
  {
    code: "SS-184",
    who: "Женщина, 35 лет, маркетолог",
    region: "Санкт-Петербург",
    debt: "1 950 000 ₽",
    debtRaw: 1950000,
    context:
      "Развод, ипотека на бывшего супруга оформлена солидарно, плюс три кредита. Имущества — нет.",
    timeline: [
      { month: "М 0", event: "Диагностика" },
      { month: "М 1", event: "Подача в Арбитражный суд СПб" },
      { month: "М 7", event: "Завершение процедуры" },
    ],
    outcome: "Освобождена от обязательств",
    saved: "1,95 млн ₽",
    tags: ["Реализация", "7 месяцев"],
  },
  {
    code: "SS-156",
    who: "Мужчина, 51 год, логист",
    region: "Краснодар",
    debt: "12 400 000 ₽",
    debtRaw: 12400000,
    context:
      "Поручительство по кредиту брата + личные займы. Брат пропал, обязательства повисли.",
    timeline: [
      { month: "М 0", event: "Аудит сделок за 3 года" },
      { month: "М 1", event: "Подача заявления" },
      { month: "М 4", event: "Реализация автомобиля (зачёт в счёт долга)" },
      { month: "М 11", event: "Списание оставшейся части" },
    ],
    outcome: "Списано 11,2 млн ₽ из 12,4 млн ₽",
    saved: "11,2 млн ₽",
    tags: ["Реализация", "11 месяцев"],
  },
  {
    code: "SS-241",
    who: "Женщина, 29 лет, самозанятая",
    region: "Екатеринбург",
    debt: "780 000 ₽",
    debtRaw: 780000,
    context:
      "Микрозаймы и две кредитки. Доход нестабильный, имущества нет, исполнительное производство закрыто.",
    timeline: [
      { month: "М 0", event: "Проверка по критериям МФЦ" },
      { month: "М 1", event: "Подача внесудебного банкротства через МФЦ" },
      { month: "М 7", event: "Списание долгов автоматически" },
    ],
    outcome: "Списано через МФЦ. 0 ₽ госпошлины",
    saved: "780 тыс ₽",
    tags: ["Внесудебно", "МФЦ"],
  },
  {
    code: "SS-198",
    who: "Мужчина, 38 лет, ИП (закрыт)",
    region: "Новосибирск",
    debt: "6 300 000 ₽",
    debtRaw: 6300000,
    context:
      "Бизнес-кредит под личное поручительство, налоговая задолженность, два потребительских.",
    timeline: [
      { month: "М 0", event: "Диагностика, проверка субсидиарки" },
      { month: "М 2", event: "Подача в Арбитражный суд" },
      { month: "М 5", event: "Реструктуризация → переход в реализацию" },
      { month: "М 13", event: "Завершение, освобождение от обязательств" },
    ],
    outcome: "Списано 5,9 млн ₽. Налоги — частично сохранены по закону",
    saved: "5,9 млн ₽",
    tags: ["Реализация", "13 месяцев"],
  },
];

export function Cases() {
  const [active, setActive] = useState(0);
  const c = CASES[active];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      {/* Case picker */}
      <div className="lg:col-span-4">
        <ul className="flex flex-col divide-y divide-white/5 border border-white/10">
          {CASES.map((item, i) => {
            const isActive = i === active;
            return (
              <li key={item.code}>
                <button
                  onClick={() => setActive(i)}
                  className={
                    "group flex w-full items-baseline gap-4 px-5 py-5 text-left transition-colors " +
                    (isActive
                      ? "bg-cyan/5"
                      : "hover:bg-white/5")
                  }
                >
                  <span
                    className={
                      "font-display text-xs tabular tracking-[0.3em] " +
                      (isActive ? "text-cyan text-glow" : "text-silver-dim")
                    }
                  >
                    {item.code}
                  </span>
                  <span className="flex-1">
                    <span
                      className={
                        "block font-display text-base " +
                        (isActive ? "text-silver" : "text-silver-dim group-hover:text-silver")
                      }
                    >
                      {item.debt}
                    </span>
                    <span className="mt-1 block text-[11px] uppercase tracking-[0.2em] text-silver-dim">
                      {item.tags.join(" · ")}
                    </span>
                  </span>
                  {isActive && (
                    <span aria-hidden className="font-display text-cyan text-glow">
                      →
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-silver-dim">
          Все имена и регионы изменены · цифры из ЕФРСБ
        </p>
      </div>

      {/* Detail panel */}
      <div className="lg:col-span-8">
        <article
          key={c.code}
          className="relative border border-white/10 bg-ink-deep p-8 md:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 80% 0%, color-mix(in oklab, var(--cyan) 10%, transparent), transparent 70%)",
            }}
          />

          {/* Header */}
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="font-display text-xs tabular tracking-[0.3em] text-cyan">
                КЕЙС {c.code}
              </div>
              <h3 className="mt-3 font-display text-xl text-silver md:text-2xl">
                {c.who}
              </h3>
              <div className="mt-1 text-sm text-silver-dim">{c.region}</div>
            </div>
            <div className="text-right">
              <div className="text-[11px] uppercase tracking-[0.2em] text-silver-dim">
                Долг на старте
              </div>
              <div className="mt-1 font-display tabular text-2xl text-silver md:text-3xl">
                {c.debt}
              </div>
            </div>
          </div>

          {/* Context */}
          <p className="mt-6 max-w-2xl text-silver-dim leading-relaxed">{c.context}</p>

          {/* Timeline */}
          <div className="mt-10">
            <div className="text-[11px] uppercase tracking-[0.2em] text-silver-dim">
              Таймлайн
            </div>
            <ol className="mt-5 space-y-0">
              {c.timeline.map((t, i) => {
                const isLast = i === c.timeline.length - 1;
                return (
                  <li key={i} className="relative flex gap-5 pb-6 last:pb-0">
                    {/* Vertical line */}
                    {!isLast && (
                      <span
                        aria-hidden
                        className="absolute left-[7px] top-4 h-full w-px bg-white/10"
                      />
                    )}
                    {/* Dot */}
                    <span
                      aria-hidden
                      className={
                        "relative z-10 mt-1 h-[15px] w-[15px] flex-none rounded-full border " +
                        (isLast
                          ? "border-cyan bg-cyan"
                          : "border-cyan/60 bg-ink-deep")
                      }
                      style={isLast ? { boxShadow: "0 0 12px var(--cyan)" } : undefined}
                    />
                    <div className="flex-1">
                      <div className="font-display text-sm tabular text-cyan tracking-[0.2em]">
                        {t.month}
                      </div>
                      <div className="mt-1 text-silver">{t.event}</div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Outcome */}
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-silver-dim">
                Итог
              </div>
              <div className="mt-2 font-display text-lg text-silver">{c.outcome}</div>
            </div>
            <div className="text-right">
              <div className="text-[11px] uppercase tracking-[0.2em] text-silver-dim">
                Освобождено
              </div>
              <div className="mt-1 font-display tabular text-3xl text-gradient-cyan text-glow md:text-4xl">
                {c.saved}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}