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
        "hover:-translate-y-1.5 hover:scale-[1.04] hover:rotate-[6deg]",
        "group-hover/card:-translate-y-1.5 group-hover/card:scale-[1.04] group-hover/card:rotate-[6deg]",
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
      {/* Contact ground shadow under the icon */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[10%] w-[95%] rounded-[50%] pointer-events-none transition-all duration-500 group-hover/icon:w-[78%] group-hover/icon:translate-y-1 group-hover/card:w-[78%] group-hover/card:translate-y-1"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(20, 8, 16, 0.65) 0%, rgba(20, 8, 16, 0.35) 35%, rgba(20, 8, 16, 0) 75%)",
          filter: "blur(7px)",
        }}
      />
      {/* Wider, softer floor shadow halo */}
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[16%] w-[120%] rounded-[50%] pointer-events-none transition-all duration-500 group-hover/icon:opacity-80 group-hover/card:opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(20, 8, 16, 0.28) 0%, rgba(20, 8, 16, 0) 70%)",
          filter: "blur(14px)",
          opacity: 0.7,
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
            "drop-shadow(0 6px 4px rgba(20, 8, 16, 0.25)) drop-shadow(0 2px 2px rgba(20, 8, 16, 0.2))",
        }}
      />
      </div>
    </div>
  );
}