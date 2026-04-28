import logo from "@/assets/status-svobody-logo.png";
import { cn } from "@/lib/utils";

export function Logo({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <img
      src={logo}
      alt="Статус Свободы"
      width={size}
      height={size}
      className={cn("object-contain", className)}
      style={{ filter: "drop-shadow(0 0 12px rgba(120, 220, 240, 0.45))" }}
    />
  );
}
