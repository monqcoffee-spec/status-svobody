import { ArrowUpRight } from "lucide-react";
import { Section, SectionLabel, H2 } from "./Section";
import intensiveBanner from "@/assets/intensive-banner.png";

export function BotIntensive() {
  return (
    <Section variant="darker" id="bot-intensive">
      <SectionLabel n="06" title="Открытый чат-бот" />
      <H2 className="mt-8 max-w-3xl">
        Телеграм <span className="text-cyan italic">интенсив</span>
      </H2>
      <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-silver/75">
        Пошаговая дорожная карта банкротства. Рассказываю всю правду о
        процедуре: подходите вы или нет. Без воды — практика, которая
        работает в 2026 году.
      </p>

      <div className="card-lux relative mt-14 overflow-hidden p-8 md:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-40 animate-drift"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 35%, transparent), transparent)",
          }}
        />
        <div className="relative grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <h3 className="font-display text-3xl md:text-5xl leading-tight" style={{ color: "var(--text)" }}>
              Получите доступ <br />
              к закрытому интенсиву
            </h3>
            <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Без воды — практика, которая работает в 2026 году.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
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
          <div className="md:col-span-5 relative">
            <div
              className="relative mx-auto w-full max-w-sm overflow-hidden aspect-[2/3]"
              style={{
                borderRadius: "32px",
                border: "1px solid color-mix(in oklab, var(--gold) 40%, transparent)",
                boxShadow:
                  "0 30px 60px -30px color-mix(in oklab, var(--wine) 35%, transparent), 0 0 0 1px color-mix(in oklab, var(--gold) 18%, transparent)",
              }}
            >
              <img
                src={intensiveBanner}
                alt="Бесплатный интенсив «Статус Свободы» — Юлия Армина"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top select-none"
                style={{ borderRadius: "inherit" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}