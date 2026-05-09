import { Send, Sparkles, ArrowUpRight } from "lucide-react";
import { Section, SectionLabel, H2 } from "./Section";
import { IconArt } from "./IconArt";
import iconBot from "@/assets/icons-3d/bot.png";

export function BotIntensive() {
  return (
    <Section variant="darker" id="bot-intensive">
      <SectionLabel n="06" title="Telegram-интенсив" />
      <H2 className="mt-8 max-w-3xl">
        Бесплатный <span className="text-cyan italic">интенсив по банкротству</span>
      </H2>
      <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-silver/75">
        Закрытый Telegram-бот: пошаговое сопровождение, чек-листы и
        материалы от финансового поверенного. Без воды — практика, которая
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
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 smallcaps rounded-full"
              style={{
                border: "1px solid color-mix(in oklab, var(--gold) 45%, transparent)",
                background: "color-mix(in oklab, white 80%, var(--paper-tint))",
                color: "var(--wine-deep)",
              }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Premium digital product
            </div>
            <h3 className="mt-6 font-display text-3xl md:text-5xl leading-tight" style={{ color: "var(--text)" }}>
              Получите доступ <br />
              к закрытому интенсиву
            </h3>
            <ul className="mt-8 space-y-3 text-base md:text-lg" style={{ color: "var(--text-muted)" }}>
              {[
                "Пошаговая дорожная карта банкротства",
                "Шаблоны заявлений и расчётов",
                "Видео-разборы реальных кейсов",
                "Прямые ответы поверенного в боте",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1 w-3 shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, var(--gold), var(--wine))" }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://t.me/status_svobody_bot"
                target="_blank"
                rel="noopener"
                className="btn-cyan group"
              >
                <Send className="h-4 w-4" />
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
              className="relative mx-auto aspect-square w-full max-w-sm backdrop-blur-md"
              style={{
                borderRadius: "32px",
                border: "1px solid color-mix(in oklab, var(--gold) 40%, transparent)",
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.85) 0%, color-mix(in oklab, var(--paper-tint) 65%, white) 100%)",
                boxShadow:
                  "inset 0 1px 0 0 rgba(255,255,255,0.95), 0 30px 60px -30px color-mix(in oklab, var(--wine) 35%, transparent), 0 0 0 1px color-mix(in oklab, var(--gold) 18%, transparent)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <IconArt src={iconBot} alt="" size="lg" />
                <div className="font-display text-2xl" style={{ color: "var(--text)" }}>@status_svobody_bot</div>
                <div className="smallcaps" style={{ color: "var(--gold-soft)" }}>Закрытый канал</div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Доступ открывается лично — после короткого диалога с поверенным.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}