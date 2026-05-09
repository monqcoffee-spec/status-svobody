import { useState } from "react";
import { Plus } from "lucide-react";
import { Section, SectionLabel, H2 } from "./Section";
import { IconArt } from "./IconArt";
import iconFaq from "@/assets/icons-3d/faq.png";

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
      <div className="mt-8 flex flex-col items-start gap-4 max-w-3xl sm:flex-row sm:items-center sm:gap-5">
        <IconArt src={iconFaq} alt="FAQ" size="md" className="sm:!h-24 sm:!w-24 md:!h-28 md:!w-28" />
        <H2 className="!mt-0">
          Часто задаваемые <span className="text-cyan italic">вопросы</span>
        </H2>
      </div>
      <ul className="mt-12 max-w-4xl space-y-3">
        {ITEMS.map((it, i) => {
          const isOpen = open === i;
          return (
            <li
              key={it.q}
              className="card-lux relative overflow-hidden transition-all duration-500"
              style={isOpen ? {
                borderColor: "color-mix(in oklab, var(--gold-heading) 70%, transparent)",
                boxShadow:
                  "0 0 0 1px color-mix(in oklab, var(--gold-heading) 45%, transparent), 0 18px 40px -20px color-mix(in oklab, #6a2735 50%, transparent)",
              } : undefined}
            >
              {isOpen && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold-heading) 80%, transparent), transparent)",
                  }}
                />
              )}
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
              >
                <span
                  className="font-display text-lg md:text-xl leading-snug transition-colors duration-500"
                  style={{ color: isOpen ? "var(--gold-heading)" : "var(--gold-heading-deep)" }}
                >
                  {it.q}
                </span>
                <Plus
                  className={`h-5 w-5 shrink-0 transition-all duration-500 ${
                    isOpen ? "rotate-[135deg] scale-110" : ""
                  }`}
                  style={{
                    color: "var(--gold-heading-deep)",
                    filter: isOpen ? "drop-shadow(0 0 8px var(--gold-heading))" : undefined,
                  }}
                />
              </button>
              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0">
                  <p
                    className={`px-7 pb-6 text-base md:text-lg leading-relaxed transition-all duration-700 ${
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