import { useEffect, useState } from "react";

const STORAGE_KEY = "ss-consent-accepted-v1";

export function ConsentGate() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setClosing(true);
    setTimeout(() => setOpen(false), 320);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
      style={{
        background: "color-mix(in oklab, #0a0306 78%, transparent)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        animation: closing
          ? "consent-fade-out 280ms ease forwards"
          : "consent-fade-in 320ms ease forwards",
      }}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden"
        style={{
          borderRadius: 24,
          padding: "1px",
          background:
            "linear-gradient(140deg, color-mix(in oklab, var(--gold) 65%, transparent) 0%, color-mix(in oklab, var(--gold) 12%, transparent) 45%, color-mix(in oklab, var(--gold) 55%, transparent) 100%)",
          boxShadow:
            "0 30px 80px -30px rgba(0,0,0,0.85), 0 0 60px -20px color-mix(in oklab, var(--gold) 35%, transparent)",
          animation: closing
            ? "consent-pop-out 280ms ease forwards"
            : "consent-pop-in 360ms cubic-bezier(0.2, 0.9, 0.2, 1) forwards",
        }}
      >
        <div
          className="liquid-glass relative px-6 py-7 sm:px-8 sm:py-9"
          style={{
            borderRadius: 23,
            background:
              "linear-gradient(180deg, color-mix(in oklab, #1a0810 70%, transparent) 0%, color-mix(in oklab, #0a0306 78%, transparent) 100%)",
            boxShadow:
              "inset 0 1px 0 color-mix(in oklab, var(--gold) 30%, transparent), inset 0 0 60px color-mix(in oklab, var(--gold) 6%, transparent)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[420px] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 22%, transparent), transparent)",
              filter: "blur(30px)",
            }}
          />

          <div
            id="consent-title"
            className="font-display uppercase tracking-[0.32em] text-[11px] sm:text-xs text-center"
            style={{ color: "color-mix(in oklab, var(--gold) 85%, white)" }}
          >
            Информационное уведомление
          </div>
          <div
            aria-hidden
            className="mx-auto mt-3 h-px w-16"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 75%, transparent), transparent)",
            }}
          />

          <div
            className="mt-5 space-y-3 text-[13px] leading-relaxed sm:text-sm"
            style={{ color: "rgba(240, 224, 200, 0.86)" }}
          >
            <p>
              Вся информация, размещённая на данном сайте, носит исключительно справочный характер и не
              является публичной офертой согласно положениям статьи 437 Гражданского кодекса Российской
              Федерации.
            </p>
            <p>
              Отправляя данные через формы сайта, вы даёте согласие на обработку персональных данных.
            </p>
            <p>
              Финансово-юридическое сопровождение осуществляется в рамках действующего законодательства
              Российской Федерации.
            </p>
            <p>
              Банкротство влечёт правовые и финансовые последствия. Перед принятием решения рекомендуется
              получить индивидуальную консультацию специалиста.
            </p>
            <p>
              <a
                href="/privacy"
                target="_blank"
                rel="noopener"
                className="underline-offset-4 hover:underline transition-colors"
                style={{ color: "color-mix(in oklab, var(--gold) 90%, white)" }}
              >
                Политика обработки персональных данных
              </a>
            </p>
          </div>

          <button
            type="button"
            onClick={accept}
            className="group mt-7 w-full rounded-full px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.28em] transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #B07A3D 0%, #8B5A63 50%, #6A2A35 100%)",
              color: "#fff8ec",
              border: "1px solid color-mix(in oklab, var(--gold) 60%, transparent)",
              boxShadow:
                "0 12px 32px -10px color-mix(in oklab, var(--gold) 45%, transparent), inset 0 1px 0 color-mix(in oklab, white 25%, transparent)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow =
                "0 18px 40px -10px color-mix(in oklab, var(--gold) 60%, transparent), inset 0 1px 0 color-mix(in oklab, white 35%, transparent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 12px 32px -10px color-mix(in oklab, var(--gold) 45%, transparent), inset 0 1px 0 color-mix(in oklab, white 25%, transparent)";
            }}
          >
            Ознакомлен(а)
          </button>
        </div>
      </div>

      <style>{`
        @keyframes consent-fade-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes consent-fade-out { from { opacity: 1 } to { opacity: 0 } }
        @keyframes consent-pop-in {
          from { opacity: 0; transform: scale(0.94) translateY(8px) }
          to { opacity: 1; transform: scale(1) translateY(0) }
        }
        @keyframes consent-pop-out {
          from { opacity: 1; transform: scale(1) translateY(0) }
          to { opacity: 0; transform: scale(0.96) translateY(4px) }
        }
      `}</style>
    </div>
  );
}