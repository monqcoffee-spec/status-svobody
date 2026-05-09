import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Наверх"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center backdrop-blur-md transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        borderRadius: "2px",
        border: "1px solid color-mix(in oklab, var(--gold-heading) 55%, transparent)",
        background: "color-mix(in oklab, white 75%, var(--silver) 25%)",
        color: "var(--gold-heading-deep)",
        boxShadow:
          "0 8px 22px -8px color-mix(in oklab, var(--gold-heading) 50%, transparent), inset 0 1px 0 0 color-mix(in oklab, white 70%, transparent)",
      }}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}