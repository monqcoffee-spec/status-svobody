import { cn } from "@/lib/utils";

export function Monogram({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-10 w-10", className)}
      aria-hidden
    >
      {/* Concentric rings */}
      <circle cx="32" cy="32" r="30.5" fill="none" stroke={color} strokeWidth="0.6" opacity="0.45" />
      <circle cx="32" cy="32" r="27" fill="none" stroke={color} strokeWidth="0.4" opacity="0.3" />
      {/* serif initials Ю · А, drawn as text for crispness */}
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="22"
        fontStyle="italic"
        fontWeight="500"
        fill={color}
        letterSpacing="0.5"
      >
        ЮА
      </text>
      {/* tiny gold dot above */}
      <circle cx="32" cy="14" r="0.9" fill="#B9986A" />
    </svg>
  );
}