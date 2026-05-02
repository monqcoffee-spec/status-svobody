import { useState } from "react";

/**
 * Анонимизированные кейсы по работе с кредитной историей.
 * Имена/регионы изменены; динамика рейтинга и итоги — реальные.
 */
type Case = {
  code: string;
  who: string;
  region: string;
  startScore: string;
  startScoreRaw: number;
  context: string;
  timeline: { month: string; event: string }[];
  outcome: string;
  finalScore: string;
  tags: string[];
};

const CASES: Case[] = [
  {
    code: "SS-217",
    who: "Мужчина, 42 года, IT-специалист",
    region: "Москва",
    startScore: "412",
    startScoreRaw: 412,
    context:
      "Серия просрочек после потери работы. Несколько закрытых кредитов с поздними платежами. Хотел подать на ипотеку — получил отказ.",
    timeline: [
      { month: "М 0", event: "Диагностика, запрос отчётов в трёх БКИ" },
      { month: "М 1", event: "Обращения на исправление трёх некорректных записей" },
      { month: "М 4", event: "Открыта дебетовая карта с лимитом, чистая дисциплина" },
      { month: "М 14", event: "Малый потребкредит закрыт без просрочек" },
      { month: "М 22", event: "Одобрение ипотеки в одном из топ-5 банков" },
    ],
    outcome: "Ипотека одобрена",
    finalScore: "742",
    tags: ["Ипотека", "22 месяца"],
  },
  {
    code: "SS-184",
    who: "Женщина, 35 лет, маркетолог",
    region: "Санкт-Петербург",
    startScore: "385",
    startScoreRaw: 385,
    context:
      "После развода — солидарная ипотека на бывшего супруга и три кредита. Долги закрыты, но рейтинг низкий, банки отказывают.",
    timeline: [
      { month: "М 0", event: "Диагностика, разбор отчётов" },
      { month: "М 2", event: "Удалены две дублирующие записи в НБКИ и ОКБ" },
      { month: "М 6", event: "Карта рассрочки, регулярные мелкие траты и платежи" },
      { month: "М 18", event: "Автокредит одобрен, ставка ниже среднерыночной" },
    ],
    outcome: "Рейтинг вырос на 290 пунктов",
    finalScore: "675",
    tags: ["Чистка БКИ", "18 месяцев"],
  },
  {
    code: "SS-156",
    who: "Мужчина, 51 год, логист",
    region: "Краснодар",
    startScore: "298",
    startScoreRaw: 298,
    context:
      "Поручительство по чужому кредиту с серьёзной просрочкой. После закрытия долга рейтинг остался очень низким, в БКИ — некорректные данные.",
    timeline: [
      { month: "М 0", event: "Аудит трёх отчётов БКИ" },
      { month: "М 2", event: "Удалена ошибочная запись о текущей просрочке" },
      { month: "М 8", event: "Регулярные платежи по карте, рост рейтинга" },
      { month: "М 16", event: "Одобрение крупного потребкредита под объективную ставку" },
    ],
    outcome: "Рейтинг восстановлен",
    finalScore: "688",
    tags: ["Поручительство", "16 месяцев"],
  },
  {
    code: "SS-241",
    who: "Женщина, 29 лет, самозанятая",
    region: "Екатеринбург",
    startScore: "454",
    startScoreRaw: 454,
    context:
      "Просрочки по микрозаймам в студенческие годы. Сейчас стабильный доход, хочет одобрение по карте под путешествия.",
    timeline: [
      { month: "М 0", event: "Диагностика, план на 12 месяцев" },
      { month: "М 1", event: "Закрыта спорная запись в Скоринг Бюро" },
      { month: "М 6", event: "Безопасный финансовый продукт, чистая история" },
      { month: "М 12", event: "Одобрение премиум-карты с высоким лимитом" },
    ],
    outcome: "Доступ к нормальным банковским продуктам",
    finalScore: "702",
    tags: ["Микрозаймы", "12 месяцев"],
  },
  {
    code: "SS-198",
    who: "Мужчина, 38 лет, бывший ИП",
    region: "Новосибирск",
    startScore: "352",
    startScoreRaw: 352,
    context:
      "После закрытия бизнеса остались просрочки по бизнес-кредиту под личное поручительство. Сейчас работает по найму, хочет ипотеку.",
    timeline: [
      { month: "М 0", event: "Диагностика, согласование стратегии" },
      { month: "М 3", event: "Чистка ошибок по двум БКИ" },
      { month: "М 10", event: "Ипотека первичка с минимальным взносом — одобрение" },
    ],
    outcome: "Ипотека через 10 месяцев работы",
    finalScore: "684",
    tags: ["ИП в прошлом", "10 месяцев"],
  },
];

export function Cases() {
  const [active, setActive] = useState(0);
  const c = CASES[active];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
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
                    (isActive ? "bg-cyan/5" : "hover:bg-white/5")
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
                      Старт: {item.startScore} → {item.finalScore}
                    </span>
                    <span className="mt-1 block text-[11px] uppercase tracking-[0.2em] text-silver-dim">
                      {item.tags.join(" · ")}
                    </span>
                  </span>
                  {isActive && (
                    <span aria-hidden className="font-display text-cyan text-glow">→</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-silver-dim">
          Имена и регионы изменены · цифры рейтинга реальные
        </p>
      </div>

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

          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="font-display text-xs tabular tracking-[0.3em] text-cyan">
                КЕЙС {c.code}
              </div>
              <h3 className="mt-3 font-display text-xl text-silver md:text-2xl">{c.who}</h3>
              <div className="mt-1 text-sm text-silver-dim">{c.region}</div>
            </div>
            <div className="text-right">
              <div className="text-[11px] uppercase tracking-[0.2em] text-silver-dim">
                Рейтинг на старте
              </div>
              <div className="mt-1 font-display tabular text-2xl text-silver md:text-3xl">
                {c.startScore}
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-silver-dim leading-relaxed">{c.context}</p>

          <div className="mt-10">
            <div className="text-[11px] uppercase tracking-[0.2em] text-silver-dim">Таймлайн</div>
            <ol className="mt-5 space-y-0">
              {c.timeline.map((t, i) => {
                const isLast = i === c.timeline.length - 1;
                return (
                  <li key={i} className="relative flex gap-5 pb-6 last:pb-0">
                    {!isLast && (
                      <span
                        aria-hidden
                        className="absolute left-[7px] top-4 h-full w-px bg-white/10"
                      />
                    )}
                    <span
                      aria-hidden
                      className={
                        "relative z-10 mt-1 h-[15px] w-[15px] flex-none rounded-full border " +
                        (isLast ? "border-cyan bg-cyan" : "border-cyan/60 bg-ink-deep")
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

          <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-silver-dim">Итог</div>
              <div className="mt-2 font-display text-lg text-silver">{c.outcome}</div>
            </div>
            <div className="text-right">
              <div className="text-[11px] uppercase tracking-[0.2em] text-silver-dim">
                Рейтинг сейчас
              </div>
              <div className="mt-1 font-display tabular text-3xl text-gradient-cyan text-glow md:text-4xl">
                {c.finalScore}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
