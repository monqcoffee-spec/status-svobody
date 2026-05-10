import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--rose-mist) 55%, var(--paper)) 0%, color-mix(in oklab, var(--paper-tint) 80%, white) 60%, var(--paper) 100%)",
        color: "var(--text)",
        borderTop: "1px solid color-mix(in oklab, var(--gold) 28%, transparent)",
      }}
    >
      {/* Top gold hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 80%, transparent) 50%, transparent)",
        }}
      />
      {/* Soft gold halo top-center */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 35%, transparent), transparent)",
          filter: "blur(40px)",
        }}
      />

      <div className="container-tight relative grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-5">
            <Logo size={72} className="h-14 sm:h-16 md:h-20 shrink-0" />
            <div className="leading-tight">
              <div
                className="font-display uppercase tracking-[0.18em] text-2xl sm:text-3xl md:text-[2rem] leading-tight"
                style={{ color: "var(--wine-deep)" }}
              >
                Статус Свободы
              </div>
              <div
                className="text-xs sm:text-sm tracking-[0.32em] uppercase mt-1.5"
                style={{ color: "var(--gold-soft)" }}
              >
                Юлия Арминова
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Юридические решения для вашей свободы.
          </p>
          <div
            className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide"
            style={{
              background: "color-mix(in oklab, var(--gold) 14%, transparent)",
              border: "1px solid color-mix(in oklab, var(--gold) 35%, transparent)",
              color: "var(--wine-deep)",
            }}
          >
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: "var(--gold)", boxShadow: "0 0 8px var(--gold)" }}
            />
            Работаем онлайн по всей России (дистанционно)
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="smallcaps" style={{ color: "var(--gold-soft)" }}>Навигация</div>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[
              ["/#about", "О бренде"],
              ["/#services", "Услуги"],
              ["/#pricing", "Тарифы"],
              ["/bankruptcy", "Банкротство"],
              ["/#faq", "FAQ"],
              ["/#contacts", "Контакты"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:opacity-80" style={{ color: "var(--text-muted)" }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="smallcaps" style={{ color: "var(--gold-soft)" }}>Связь</div>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li><a href="https://t.me/zakon_127" target="_blank" rel="noopener" className="transition-colors hover:opacity-80" style={{ color: "var(--text-muted)" }}>Канал · t.me/zakon_127</a></li>
            <li><a href="https://vk.com/statussvobody" target="_blank" rel="noopener" className="transition-colors hover:opacity-80" style={{ color: "var(--text-muted)" }}>ВКонтакте · /statussvobody</a></li>
            <li><a href="https://max.ru/statussvobody" target="_blank" rel="noopener" className="transition-colors hover:opacity-80" style={{ color: "var(--text-muted)" }}>Max · /statussvobody</a></li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid color-mix(in oklab, var(--gold) 22%, transparent)" }}>
        <div className="container-tight flex flex-col gap-3 py-6 text-[11px] tracking-wider md:flex-row md:items-center md:justify-between" style={{ color: "var(--text-muted)" }}>
          <div>© {new Date().getFullYear()} STATUS SVOBODY · Юлия Армина</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="/privacy" className="transition-colors hover:opacity-80">Политика конфиденциальности</a>
            <span aria-hidden style={{ opacity: 0.5 }}>·</span>
            <a href="/consent" className="transition-colors hover:opacity-80">Согласие на обработку персональных данных</a>
          </div>
          <div>Сайт носит информационный характер</div>
        </div>
      </div>
    </footer>
  );
}
