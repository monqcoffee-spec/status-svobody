import { Send, Sparkles, ArrowUpRight } from "lucide-react";
import { Section, SectionLabel, H2 } from "./Section";

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

      <div
        className="relative mt-14 overflow-hidden border border-cyan/40 p-10 md:p-14"
        style={{
          borderRadius: "2px",
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--cyan) 10%, var(--ink-soft)) 0%, var(--ink-soft) 60%)",
          boxShadow:
            "0 0 80px color-mix(in oklab, var(--cyan) 25%, transparent), inset 0 0 60px color-mix(in oklab, var(--cyan) 8%, transparent)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-30 animate-drift"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--cyan) 50%, transparent), transparent)",
          }}
        />
        <div className="relative grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 border border-cyan/40 bg-cyan/10 px-3 py-1.5 smallcaps text-cyan-glow" style={{ borderRadius: "2px" }}>
              <Sparkles className="h-3.5 w-3.5" />
              Premium digital product
            </div>
            <h3 className="mt-6 font-display text-3xl md:text-5xl text-silver leading-tight">
              Получите доступ <br />
              к закрытому интенсиву
            </h3>
            <ul className="mt-8 space-y-3 text-base md:text-lg text-silver/85">
              {[
                "Пошаговая дорожная карта банкротства",
                "Шаблоны заявлений и расчётов",
                "Видео-разборы реальных кейсов",
                "Прямые ответы поверенного в боте",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1 w-3 bg-cyan shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://t.me/status_svobody_bot"
                target="_blank"
                rel="noopener"
                className="btn-cyan group rounded-sm"
              >
                <Send className="h-4 w-4" />
                <span>Перейти в бот</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://t.me/status_svobody_bot"
                target="_blank"
                rel="noopener"
                className="btn-ghost group rounded-sm"
              >
                <span>Получить интенсив</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div
              className="relative mx-auto aspect-square w-full max-w-sm border border-cyan/30 bg-ink-deep/60 backdrop-blur-md"
              style={{
                borderRadius: "2px",
                boxShadow: "0 0 60px color-mix(in oklab, var(--cyan) 30%, transparent)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <div
                  className="flex h-20 w-20 items-center justify-center border border-cyan/50 bg-cyan/10 text-cyan-glow animate-pulse-glow"
                  style={{ borderRadius: "2px", boxShadow: "0 0 30px color-mix(in oklab, var(--cyan) 60%, transparent)" }}
                >
                  <Send className="h-9 w-9" />
                </div>
                <div className="font-display text-2xl text-silver">@status_svobody_bot</div>
                <div className="smallcaps text-cyan">Закрытый канал</div>
                <div className="text-sm text-silver-dim">
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