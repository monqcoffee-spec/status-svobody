import { cn } from "@/lib/utils";

type Props = {
  variant?: "default" | "glow" | "darker" | "wine" | "tint";
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export function Section({ variant = "default", className, children, id }: Props) {
  const isDim = variant === "wine" || variant === "darker";
  return (
    <section
      id={id}
      data-variant={variant}
      className={cn(
        "relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden [contain:paint]",
        // Light variants stay fully transparent so the unified white base
        // background shows through. Only wine/darker get a tinted wash,
        // applied via the overlay div below.
        "bg-transparent",
        // On dim variants, lift child text contrast (see styles.css).
        isDim && "section-dim",
        className,
      )}
    >
      {/* Auto wash — solid translucent layer (no backdrop-filter, GPU-cheap) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          background: isDim ? "var(--grad-section-dim)" : "transparent",
          contain: "paint style",
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
