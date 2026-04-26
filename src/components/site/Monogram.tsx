import { cn } from "@/lib/utils";

export function Monogram({ className, color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      className={cn("h-9 w-9", className)}
      aria-hidden
    >
      <circle cx="32" cy="32" r="30" strokeWidth="0.75" opacity="0.5" />
      <circle cx="32" cy="32" r="26" strokeWidth="0.5" opacity="0.35" />
      {/* Я · A monogram */}
      <path
        d="M22 44 V20 H30 Q38 20 38 28 Q38 35 31 36 L40 44 M22 36 H31"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}