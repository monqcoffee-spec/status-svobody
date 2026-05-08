import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

type Variant = "up" | "left" | "right" | "zoom";

/**
 * Wrap any block to fade/slide it in when scrolled into view.
 * Uses IntersectionObserver, runs once, respects reduced motion.
 */
export function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
  style,
}: {
  children: ReactNode;
  variant?: Variant;
  /** delay step 1–5 → 80ms..400ms */
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "ol" | "ul";
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("sr-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("sr-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantClass =
    variant === "left" ? "sr-left" : variant === "right" ? "sr-right" : variant === "zoom" ? "sr-zoom" : "";
  const delayClass = delay ? `sr-d${delay}` : "";

  return (
    <Tag
      ref={ref as never}
      className={`sr ${variantClass} ${delayClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}