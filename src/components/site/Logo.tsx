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
}: {
  className?: string;
  /** Default rendered height in px (can be overridden via className, e.g. md:h-[44px]). */
  size?: number;
}) {
  return (
    <img
      src={logo}
      alt="Статус Свободы"
      decoding="async"
      loading="eager"
      style={{
        mixBlendMode: "screen",
        filter:
          "drop-shadow(0 0 10px rgba(212, 175, 110, 0.65)) drop-shadow(0 0 22px rgba(216, 166, 170, 0.45)) drop-shadow(0 0 40px rgba(176, 83, 95, 0.35))",
        imageRendering: "auto",
      }}
      className={cn("block w-auto object-contain shrink-0 select-none", className)}
      height={size}
    />
  );
}
