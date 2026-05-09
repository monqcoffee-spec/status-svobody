import logo from "@/assets/status-svobody-logo.png";
import { cn } from "@/lib/utils";

/**
 * Logo renders the brand mark with a fixed HEIGHT and auto width,
 * so the natural aspect ratio (≈3:2) is preserved across header/footer.
 * `size` controls the rendered height in px.
 */
export function Logo({
  className,
  size = 40,
  onDark = false,
}: {
  className?: string;
  /** Default rendered height in px (can be overridden via className, e.g. md:h-[44px]). */
  size?: number;
  /** Set to true when rendered over a dark surface (uses screen blend for glow). */
  onDark?: boolean;
}) {
  return (
    <img
      src={logo}
      alt="Статус Свободы"
      decoding="async"
      loading="eager"
      style={{
        // Keep colors true — no blend modes that muddy mid-tones.
        mixBlendMode: "normal",
        filter: onDark
          ? // Dark theme: tight bright champagne core + warm rose halo.
            // Layer order: crisp inner contrast → focused gold → soft warm wash.
            [
              "drop-shadow(0 0 0.5px rgba(255, 232, 190, 0.9))",
              "drop-shadow(0 0 6px rgba(232, 196, 132, 0.75))",
              "drop-shadow(0 0 14px rgba(212, 175, 110, 0.55))",
              "drop-shadow(0 0 28px rgba(176, 102, 110, 0.28))",
            ].join(" ")
          : // Light theme: thin dark separation keeps edges crisp,
            // then a focused gold bloom — no wide blur to avoid haze.
            [
              "drop-shadow(0 0 0.5px rgba(74, 20, 30, 0.55))",
              "drop-shadow(0 1px 1px rgba(74, 20, 30, 0.18))",
              "drop-shadow(0 0 8px rgba(212, 175, 110, 0.55))",
              "drop-shadow(0 0 18px rgba(212, 175, 110, 0.28))",
            ].join(" "),
        imageRendering: "auto",
      }}
      className={cn(
        "block w-auto max-w-full max-h-full object-contain shrink-0 select-none",
        className,
      )}
      // Hint native aspect ratio (~3:2) so the browser reserves space before
      // load and avoids layout shift; actual size is driven by className/CSS.
      height={size}
      width={Math.round(size * 1.5)}
    />
  );
}
