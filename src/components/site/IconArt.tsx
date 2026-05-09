import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-16 w-16",
  md: "h-20 w-20",
  lg: "h-24 w-24 md:h-28 md:w-28",
};

/**
 * Volumetric 3D icon: shows a pre-rendered PNG with a soft champagne glow
 * and a gentle float animation. Used for service / process cards.
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
        "relative shrink-0 select-none",
        sizes[size],
        className,
      )}
      style={{ animation: "float 6s ease-in-out infinite" }}
    >
      {/* Soft warm halo behind the icon */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--champagne) 32%, transparent), transparent 70%)",
          filter: "blur(10px)",
          opacity: 0.85,
        }}
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={256}
        height={256}
        className="relative h-full w-full object-contain"
        style={{
          filter:
            "drop-shadow(0 14px 22px color-mix(in oklab, var(--ink-deep) 55%, transparent)) drop-shadow(0 0 14px color-mix(in oklab, var(--champagne-glow) 28%, transparent))",
        }}
      />
    </div>
  );
}