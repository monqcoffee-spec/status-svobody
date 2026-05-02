import logo from "@/assets/status-svobody-logo.png";
import { cn } from "@/lib/utils";

/**
 * Logo renders the brand mark with a fixed HEIGHT and auto width,
 * so the natural aspect ratio (≈3:2) is preserved across header/footer.
 * `size` controls the rendered height in px.
 */
export function Logo({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <img
      src={logo}
      alt="Статус Свободы"
      className={cn("block w-auto object-contain shrink-0", className)}
      style={{
        height: `${size}px`,
        filter: "drop-shadow(0 0 14px rgba(201, 166, 107, 0.45))",
      }}
    />
  );
}
