import { cn } from "@/lib/utils";

type Props = {
  variant?: "default" | "glow" | "darker" | "wine" | "tint";
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export function Section({ variant = "default", className, children, id }: Props) {
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
      className={cn("display text-4xl md:text-6xl", className)}
      style={{
        color: "var(--gold-heading-deep)",
        textShadow:
          "0 1px 0 color-mix(in oklab, white 50%, transparent), 0 0 24px color-mix(in oklab, var(--gold-heading) 25%, transparent)",
      }}
    >
      {children}
    </h2>
  );
}

export function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-display text-xs tabular tracking-[0.3em]" style={{ color: "var(--gold-heading-deep)" }}>{n}</span>
      <span className="hairline-tight" style={{ background: "var(--gold-heading)", boxShadow: "0 0 12px color-mix(in oklab, var(--gold-heading) 60%, transparent)" }} />
      <span className="smallcaps" style={{ color: "#5a3540" }}>{title}</span>
    </div>
  );
}
