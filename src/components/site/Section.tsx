import { cn } from "@/lib/utils";

type Props = {
  variant?: "cream" | "navy" | "white";
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export function Section({ variant = "cream", className, children, id }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        variant === "cream" && "bg-cream text-navy",
        variant === "navy" && "bg-navy text-cream",
        variant === "white" && "bg-card text-navy",
        className,
      )}
    >
      <div className="container-tight">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("text-[11px] font-medium uppercase tracking-[0.22em] text-gold", className)}>
      {children}
    </div>
  );
}

export function H2({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight", className)}>
      {children}
    </h2>
  );
}