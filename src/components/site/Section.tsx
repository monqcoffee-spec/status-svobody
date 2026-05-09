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
        variant === "wine" && "section-wine",
        variant === "tint" && "section-tint",
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
    <h2 className={cn("display text-4xl md:text-6xl", className)} style={{ color: "var(--gold-heading)" }}>
      {children}
    </h2>
  );
}

export function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-display text-xs tabular text-cyan tracking-[0.3em]">{n}</span>
      <span className="hairline-tight" />
      <span className="smallcaps text-silver-dim">{title}</span>
    </div>
  );
}
