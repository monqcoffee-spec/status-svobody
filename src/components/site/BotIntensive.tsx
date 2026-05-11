import { ArrowUpRight } from "lucide-react";
import { Section, SectionLabel, H2 } from "./Section";
import { IconArt } from "./IconArt";
import iconBot from "@/assets/icons-3d/bot.png";

export function BotIntensive() {
  const benefits = [
    "Вся правда о процедуре банкротства",
    "Пошаговая дорожная карта",
    "Честная оценка: подходит ли вам процедура",
    "Без воды, практика, которая работает в 2026 году",
  ];
  return (
    <Section variant="darker" id="bot-intensive">
      <SectionLabel n="06" title="Интенсив и бот" />
      <H2 className="mt-8 max-w-4xl uppercase">
        БЕСПЛАТНЫЙ <span className="text-cyan">ИНТЕНСИВ</span>
      </H2>

      <ul className="mt-10 grid gap-4 md:grid-cols-2 max-w-4xl">
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

      <div className="card-lux relative mt-14 overflow-hidden p-4 md:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-40 animate-drift"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 35%, transparent), transparent)",
          }}
        />
        <div className="relative grid gap-3 md:gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <h3 className="font-display uppercase text-[0.9375rem] md:text-2xl leading-tight" style={{ color: "var(--text)" }}>
              ТЕЛЕГРАМ-БОТ
            </h3>
            <p className="mt-2 text-base md:text-lg leading-snug" style={{ color: "var(--text-muted)" }}>
              Пошаговая дорожная карта и доступ к интенсиву — в одном боте.
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
                className="btn-ghost group"
              >
                <span>Получить интенсив</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-5 relative order-first md:order-none">
            <div
              className="relative mx-auto w-full max-w-xs overflow-hidden flex flex-col items-center justify-center p-3 md:p-6 backdrop-blur-md"
              style={{
                borderRadius: "32px",
                border: "1px solid color-mix(in oklab, var(--gold) 40%, transparent)",
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--wine) 8%, white) 0%, color-mix(in oklab, var(--gold) 10%, white) 100%)",
                boxShadow:
                  "0 30px 60px -30px color-mix(in oklab, var(--wine) 35%, transparent), inset 0 1px 0 0 color-mix(in oklab, white 60%, transparent)",
              }}
            >
              <IconArt src={iconBot} alt="" size="sm" />
              <div className="mt-2 text-center font-display text-[0.625rem] md:text-xs" style={{ color: "var(--text)" }}>
                @status_svobody_bot
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}