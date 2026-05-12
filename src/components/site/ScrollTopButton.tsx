import { ArrowUp } from "lucide-react";

export function ScrollTopButton() {
  return (
    <button
      type="button"
      aria-label="Наверх"
      title="Наверх"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="liquid-glass fixed left-4 sm:left-6 z-50 flex h-12 w-12 items-center justify-center transition-transform duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:scale-105"
      style={{
        borderRadius: "999px",
        color: "var(--gold-heading-deep)",
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)",
        minHeight: 44,
        minWidth: 44,
      }}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}