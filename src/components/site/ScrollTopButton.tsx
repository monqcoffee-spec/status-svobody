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
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center border border-cyan/50 bg-ink-deep/85 text-cyan backdrop-blur-md transition-all duration-500 hover:text-silver hover:border-cyan ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        borderRadius: "2px",
        boxShadow:
          "0 0 24px color-mix(in oklab, var(--cyan) 35%, transparent), inset 0 0 12px color-mix(in oklab, var(--cyan) 10%, transparent)",
      }}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}