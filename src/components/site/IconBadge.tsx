import type { ReactNode } from "react";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { box: string }> = {
  sm: { box: "h-14 w-14" },
  md: { box: "h-16 w-16" },
  lg: { box: "h-20 w-20" },
};

/**
 * Volumetric champagne-rose icon medallion.
 *  - layered radial gradients for a sphere/dome look
 *  - top highlight + bottom shadow → 3D feel
 *  - rotates on hover, swaps to rose accent
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
  const { box } = sizes[size];
  return (
    <div
      className={`group/badge relative shrink-0 ${box} ${className}`}
      style={{
        filter:
          "drop-shadow(0 10px 22px color-mix(in oklab, var(--cyan-soft) 50%, transparent)) drop-shadow(0 0 18px color-mix(in oklab, var(--champagne) 25%, transparent))",
      }}
    >
      {/* Outer disc — sphere with rose-burgundy gradient + gold rim */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full transition-transform duration-700 group-hover/badge:rotate-12 group-hover/badge:scale-[1.04]"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, var(--cyan-glow) 0%, var(--cyan) 40%, var(--cyan-soft) 75%, var(--teal) 100%)",
          boxShadow:
            "inset 0 2px 4px color-mix(in oklab, var(--cyan-glow) 70%, transparent), inset 0 -8px 14px color-mix(in oklab, var(--teal) 70%, transparent), inset 0 0 0 1px color-mix(in oklab, var(--champagne) 60%, transparent), 0 6px 20px -4px color-mix(in oklab, var(--ink-deep) 80%, transparent)",
        }}
      />
      {/* Glossy top highlight */}
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: "8%",
          background:
            "radial-gradient(ellipse 70% 45% at 50% 18%, color-mix(in oklab, var(--champagne-glow) 80%, transparent) 0%, transparent 60%)",
          opacity: 0.8,
        }}
      />
      {/* Gold accent ring — appears on hover */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover/badge:opacity-100 pointer-events-none"
        style={{
          boxShadow:
            "0 0 0 1px color-mix(in oklab, var(--champagne) 80%, transparent), 0 0 28px color-mix(in oklab, var(--champagne) 55%, transparent)",
        }}
      />
      {/* Icon */}
      <div
        className="relative flex h-full w-full items-center justify-center transition-colors duration-500 group-hover/badge:text-[color:var(--champagne-glow)]"
        style={{
          color: "var(--champagne)",
          filter: "drop-shadow(0 1px 0 color-mix(in oklab, var(--ink-deep) 45%, transparent)) drop-shadow(0 0 6px color-mix(in oklab, var(--champagne-glow) 40%, transparent))",
        }}
      >
        {children}
      </div>
    </div>
  );
}
