import { ArrowUpRight } from "lucide-react";
import { Section, SectionLabel, H2 } from "./Section";

export function BotIntensive() {
  const benefits = [
    "Вся правда о процедуре банкротства",
    "Пошаговая дорожная карта",
    "Честная оценка: подходит ли вам процедура",
    "Без воды, практика, которая работает в 2026 году",
  ];
  return (
    <Section variant="darker" id="bot-intensive" className="!py-8 sm:!py-12 md:!py-16">
      <SectionLabel n="06" title="Интенсив и бот" />
      <H2 className="mt-4 max-w-4xl uppercase">
        БЕСПЛАТНЫЙ <span className="text-cyan">ИНТЕНСИВ</span>
      </H2>

      <ul className="mt-5 grid gap-3 md:grid-cols-2 max-w-4xl">
        {benefits.map((b) => (
          <li
            key={b}
            className="card-lux p-6 md:p-7 font-display uppercase text-lg md:text-xl leading-snug"
            style={{ color: "#000" }}
          >
            {b}
          </li>
        ))}
      </ul>

      <div className="relative mt-5">
        <div className="relative">
          <div>
            <h3 className="display uppercase text-2xl md:text-4xl lg:text-5xl leading-[1.05]" style={{ color: "var(--text)", letterSpacing: "-0.01em" }}>
              ТЕЛЕГРАМ<span className="text-cyan">-БОТ</span>
            </h3>
            <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Пошаговая дорожная карта и доступ к интенсиву — <span className="text-gradient-gold" style={{ fontWeight: 600 }}>в одном боте</span>.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://t.me/status_svobody_bot"
                target="_blank"
                rel="noopener"
                className="btn-cyan group"
              >
                <span>Перейти в бот</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://t.me/status_svobody_bot"
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-display uppercase text-sm tracking-wider"
                style={{ color: "var(--wine-deep)", border: "1px solid color-mix(in oklab, var(--gold) 50%, transparent)" }}
              >
                <span>Получить интенсив</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}