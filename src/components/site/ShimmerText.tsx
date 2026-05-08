import { createElement } from "react";
import type { ElementType } from "react";

/**
 * Splits text into per-letter spans for a cinematic letter-by-letter
 * shimmer reveal (driven by .shimmer-letters CSS in styles.css).
 *
 * Usage:
 *   <ShimmerText as="span" className="text-gradient-cyan">Юлии Арминой</ShimmerText>
 */
export function ShimmerText({
  children,
  as = "span",
  className = "",
  delayStart = 0,
  delayStep = 60,
}: {
  children: string;
  as?: ElementType;
  className?: string;
  delayStart?: number;
  delayStep?: number;
}) {
  const chars = Array.from(children);
  return createElement(
    as,
    { className: `shimmer-letters ${className}`, "aria-label": children },
    chars.map((ch, i) => {
        const isSpace = ch === " " || ch === "\u00A0";
      return (
          <span
            key={i}
            aria-hidden
            className={isSpace ? "space" : undefined}
            style={
              {
                ["--i" as never]: i,
                animationDelay: `${delayStart + i * delayStep}ms`,
              } as React.CSSProperties
            }
          >
            {isSpace ? "\u00A0" : ch}
          </span>
      );
    })
  );
}
