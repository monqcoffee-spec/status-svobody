import { useState } from "react";
import { Plus } from "lucide-react";
import { Section, SectionLabel, H2 } from "./Section";

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: "Законно ли оспаривание данных в кредитной истории?",
    a: "Да. 218-ФЗ «О кредитных историях» прямо разрешает субъекту КИ оспаривать недостоверные записи в БКИ. Мы работаем строго в рамках закона: подаём заявления, жалобы, при необходимости — иск.",
  },
  {
    q: "Сколько времени занимает процесс?",
    a: "Оспаривание одной записи в БКИ — до 30 дней. Комплексное восстановление кредитной истории и репутации — от 2 до 6 месяцев в зависимости от состояния Цифрового профиля.",
  },
  {
    q: "Можно ли удалить негативные записи?",
    a: "Удаляются недостоверные, ошибочные и незаконные записи. Корректные просрочки удалить нельзя, но их влияние можно нейтрализовать: закрытие производств, корректировка статусов, выкуп долга с дисконтом.",
  },
  {
    q: "Как проходит сопровождение?",
    a: "Прямой контакт с финансовым поверенным. Защищённый канал, ежемесячный отчёт, единая точка ответственности. Никаких колл-центров и менеджеров.",
  },
  {
    q: "Что входит в первичную консультацию?",
    a: "Аудит запроса, экспресс-оценка перспектив, честный ответ — нужны ли вам наши услуги вообще. Если задача решается проще — скажем об этом сразу. Бесплатно.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section variant="darker" id="faq">
      <SectionLabel n="07" title="Вопросы и ответы" />
      <H2 className="mt-8 max-w-3xl">
        Часто задаваемые <span className="text-cyan italic">вопросы</span>
      </H2>
      <ul className="mt-12 max-w-4xl space-y-3">
        {ITEMS.map((it, i) => {
          const isOpen = open === i;
          return (
            <li
              key={it.q}
              className="glass relative overflow-hidden border border-white/10 transition-all duration-500 hover:border-cyan/40"
              style={{
                borderRadius: "2px",
                boxShadow: isOpen
                  ? "0 0 32px color-mix(in oklab, var(--cyan) 22%, transparent), inset 0 1px 0 0 color-mix(in oklab, white 8%, transparent)"
                  : undefined,
              }}
            >
              {isOpen && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, color-mix(in oklab, var(--cyan) 70%, transparent), transparent)",
                  }}
                />
              )}
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
              >
                <span
                  className={`font-display text-lg md:text-xl leading-snug transition-colors duration-500 ${
                    isOpen ? "text-cyan-glow" : "text-silver"
                  }`}
                >
                  {it.q}
                </span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-cyan transition-all duration-500 ${
                    isOpen ? "rotate-[135deg] scale-110" : ""
                  }`}
                  style={isOpen ? { filter: "drop-shadow(0 0 8px var(--cyan))" } : undefined}
                />
              </button>
              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0">
                  <p
                    className={`px-7 pb-6 text-base md:text-lg leading-relaxed text-silver-dim transition-all duration-700 ${
                      isOpen
                        ? "translate-y-0 opacity-100 blur-0"
                        : "-translate-y-2 opacity-0 blur-sm"
                    }`}
                  >
                    {it.a}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}