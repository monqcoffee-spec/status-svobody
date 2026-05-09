import { cn } from "@/lib/utils";

type Props = {
  variant?: "default" | "glow" | "darker" | "wine" | "tint";
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export function Section({ variant = "default", className, children, id }: Props) {
  const isDim = variant === "wine" || variant === "darker";
  const isLight = variant === "default" || variant === "glow" || variant === "tint";
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32 overflow-hidden",
        variant === "default" && "bg-transparent",
        variant === "glow" && "bg-aurora-soft",
        variant === "darker" && "bg-transparent",
        variant === "wine" && "bg-transparent",
        variant === "tint" && "bg-transparent",
        className,
      )}
    >
      {/* Auto backdrop wash — dims bg under dark blocks, lifts readability under light blocks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          background: isDim
            ? "linear-gradient(180deg, color-mix(in oklab, var(--wine-deep) 78%, transparent) 0%, color-mix(in oklab, var(--wine) 70%, transparent) 100%)"
            : isLight
              ? "linear-gradient(180deg, color-mix(in oklab, var(--paper) 70%, transparent) 0%, color-mix(in oklab, var(--paper-tint) 78%, transparent) 100%)"
              : "transparent",
          backdropFilter: isDim
            ? "brightness(0.55) saturate(0.85) blur(2px)"
            : isLight
              ? "brightness(1.04) saturate(1.02) blur(0.5px)"
              : "none",
          WebkitBackdropFilter: isDim
            ? "brightness(0.55) saturate(0.85) blur(2px)"
            : isLight
              ? "brightness(1.04) saturate(1.02) blur(0.5px)"
              : "none",
        }}
      />
      <div aria-hidden className="section-divider section-divider-top" />
      <div className="container-tight relative">{children}</div>
      <div aria-hidden className="section-divider section-divider-bottom" />
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <span className="hairline-tight" />
      <span className="smallcaps text-cyan">{children}</span>
    </div>
  );
}

export function H2({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={cn("display text-4xl md:text-6xl lg:text-7xl", className)}
      style={{ color: "var(--text)", letterSpacing: "-0.035em" }}
    >
      {children}
    </h2>
  );
}

export function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-display text-xs tabular tracking-[0.3em]" style={{ color: "var(--gold-soft)" }}>{n}</span>
      <span className="hairline-tight" />
      <span className="smallcaps" style={{ color: "var(--wine-deep)" }}>{title}</span>
    </div>
  );
}
