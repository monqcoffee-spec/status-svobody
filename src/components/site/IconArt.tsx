import { cn } from "@/lib/utils";

type Size = "xs" | "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  xs: "h-10 w-10",
  sm: "h-16 w-16",
  md: "h-20 w-20",
  lg: "h-24 w-24 md:h-28 md:w-28",
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
  return (
    <div
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
        className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-500 group-hover/icon:opacity-100 group-hover/card:opacity-100"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--champagne) 32%, transparent), transparent 70%)",
          filter: "blur(12px)",
          opacity: 0.7,
        }}
      />
      <img
        src={src}
        alt={alt}
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