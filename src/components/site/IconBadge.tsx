import type { ReactNode } from "react";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { box: string; corner: number }> = {
  sm: { box: "h-12 w-12", corner: 6 },
  md: { box: "h-14 w-14", corner: 7 },
  lg: { box: "h-16 w-16", corner: 8 },
};

/**
 * Premium wine-luxury icon badge.
 *  - rotated square frame with double border
 *  - gradient wine fill + inner highlight
 *  - 4 corner accent ticks
 *  - soft outer glow + glint on hover (inherits from .glass sheen if wrapped)
 */
export function IconBadge({
  children,
  size = "sm",
  className = "",
}: {
  children: ReactNode;
  size?: Size;
  className?: string;
}) {
  const { box, corner } = sizes[size];
  return (
    <div
      className={`relative shrink-0 ${box} ${className}`}
      style={{ filter: "drop-shadow(0 6px 18px color-mix(in oklab, var(--cyan-soft) 35%, transparent))" }}
    >
      {/* Outer rotated frame */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          transform: "rotate(45deg)",
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--cyan-glow) 18%, transparent) 0%, color-mix(in oklab, var(--cyan-soft) 28%, transparent) 100%)",
          border: "1px solid color-mix(in oklab, var(--cyan-glow) 45%, transparent)",
          boxShadow:
            "inset 0 0 14px color-mix(in oklab, var(--cyan-glow) 18%, transparent), 0 0 24px color-mix(in oklab, var(--cyan) 28%, transparent)",
        }}
      />
      {/* Inner rotated highlight */}
      <div
        aria-hidden
        className="absolute"
        style={{
          inset: "5px",
          transform: "rotate(45deg)",
          border: "1px solid color-mix(in oklab, var(--cyan-glow) 30%, transparent)",
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--cyan-glow) 8%, transparent), transparent 70%)",
        }}
      />
      {/* Corner ticks */}
      {[
        { top: 0, left: 0, br: corner },
        { top: 0, right: 0, bl: corner },
        { bottom: 0, left: 0, tr: corner },
        { bottom: 0, right: 0, tl: corner },
      ].map((p, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute h-1.5 w-1.5"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            bottom: p.bottom,
            borderTop: p.top === 0 ? "1px solid var(--cyan-glow)" : undefined,
            borderBottom: p.bottom === 0 ? "1px solid var(--cyan-glow)" : undefined,
            borderLeft: p.left === 0 ? "1px solid var(--cyan-glow)" : undefined,
            borderRight: p.right === 0 ? "1px solid var(--cyan-glow)" : undefined,
            boxShadow: "0 0 6px color-mix(in oklab, var(--cyan-glow) 60%, transparent)",
          }}
        />
      ))}
      {/* Icon */}
      <div
        className="relative flex h-full w-full items-center justify-center"
        style={{ color: "var(--cyan-glow)" }}
      >
        {children}
      </div>
    </div>
  );
}
