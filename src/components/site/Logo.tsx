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
        mixBlendMode: onDark ? "screen" : "normal",
        filter: onDark
          ? "drop-shadow(0 0 10px rgba(212, 175, 110, 0.65)) drop-shadow(0 0 22px rgba(216, 166, 170, 0.45)) drop-shadow(0 0 40px rgba(176, 83, 95, 0.35))"
          : "drop-shadow(0 1px 0 rgba(255,255,255,0.6)) drop-shadow(0 2px 6px rgba(74, 20, 30, 0.25)) drop-shadow(0 0 14px rgba(212, 175, 110, 0.45))",
        imageRendering: "auto",
      }}
      className={cn("block w-auto object-contain shrink-0 select-none", className)}
      height={size}
    />
  );
}
