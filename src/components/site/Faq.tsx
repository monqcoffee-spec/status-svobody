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
      <SectionLabel n="08" title="Вопросы и ответы" />
      <H2 className="mt-8 max-w-3xl">
        Часто задаваемые <span className="text-cyan italic">вопросы</span>
      </H2>
      <ul className="mt-12 max-w-4xl space-y-3">
        {ITEMS.map((it, i) => {
          const isOpen = open === i;
          return (
            <li
              key={it.q}
              className="border border-white/8 bg-ink-soft/60 transition-all hover:border-cyan/40"
              style={{ borderRadius: "2px" }}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
              >
                <span className="font-display text-lg md:text-xl text-silver leading-snug">
                  {it.q}
                </span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-cyan transition-transform duration-500 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0">
                  <p className="px-7 pb-6 text-base md:text-lg leading-relaxed text-silver-dim">
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