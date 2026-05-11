import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Наверх"
      title="Наверх"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`liquid-glass fixed left-4 sm:left-6 z-50 flex h-12 w-12 sm:h-12 sm:w-12 items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-90 pointer-events-none"
      }`}
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