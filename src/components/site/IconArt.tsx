import { cn } from "@/lib/utils";

type Size = "xs" | "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  xs: "h-[3.25rem] w-[3.25rem]",                          /* 40 → 52 (+30%) */
  sm: "h-[5.25rem] w-[5.25rem]",                          /* 64 → 84 (+30%) */
  md: "h-[6.5rem] w-[6.5rem]",                            /* 80 → 104 (+30%) */
  lg: "h-[7.75rem] w-[7.75rem] md:h-[9.125rem] md:w-[9.125rem]", /* 96/112 → 124/146 (+30%) */
};

/**
 * Volumetric 3D icon: pre-rendered PNG with a soft champagne halo,
 * gentle float idle, and an airy lift + shimmer on hover (also
 * triggered when the parent card is hovered via `group/card`).
 */
export function IconArt({
  src,
  alt,
  size = "md",
  className,
}: {
  src: string;
  alt: string;
  size?: Size;
  className?: string;
}) {
  const decorative = alt.trim() === "";
  return (
    <div
      aria-hidden={decorative ? true : undefined}
      className={cn(
        "icon-art group/icon relative shrink-0 select-none",
        "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        "hover:-translate-y-1.5 hover:scale-[1.04]",
        "group-hover/card:-translate-y-1.5 group-hover/card:scale-[1.04]",
        sizes[size],
        className,
      )}
    >
      {/* Floating idle wrapper (separate so hover transform stays clean) */}
      <div
        className="relative h-full w-full"
        style={{ animation: "float 6s ease-in-out infinite" }}
      >
      {/* Soft warm halo behind the icon — intensifies on hover */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-500 -z-[1] group-hover/icon:opacity-90 group-hover/card:opacity-90"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--champagne) 22%, transparent), transparent 72%)",
          filter: "blur(8px)",
          opacity: 0.45,
        }}
      />
      <img
        src={src}
        alt={alt}
        role={decorative ? "presentation" : undefined}
        loading="lazy"
        decoding="async"
        width={256}
        height={256}
        className="relative h-full w-full object-contain transition-[filter] duration-500"
        style={{
          filter:
            "drop-shadow(0 14px 22px color-mix(in oklab, var(--ink-deep) 55%, transparent)) drop-shadow(0 0 14px color-mix(in oklab, var(--champagne-glow) 28%, transparent))",
        }}
      />
      {/* Diagonal shimmer sweep — only on hover, masked to icon bounds */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[18%] opacity-0 transition-opacity duration-300 group-hover/icon:opacity-100 group-hover/card:opacity-100"
      >
        <div
          className="absolute -inset-2 icon-art-shimmer"
          style={{
            background:
              "linear-gradient(115deg, transparent 38%, color-mix(in oklab, var(--champagne-glow) 55%, transparent) 49%, color-mix(in oklab, white 75%, transparent) 50%, color-mix(in oklab, var(--champagne-glow) 55%, transparent) 51%, transparent 62%)",
            mixBlendMode: "screen",
          }}
        />
      </div>
      </div>
    </div>
  );
}