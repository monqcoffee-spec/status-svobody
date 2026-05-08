import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingContacts } from "./FloatingContacts";
import { ScrollTopButton } from "./ScrollTopButton";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-ink-deep text-silver">
      {/* Global ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, color-mix(in oklab, var(--cyan) 6%, transparent), transparent 60%), var(--ink-deep)",
        }}
      />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <FloatingContacts />
      <ScrollTopButton />
    </div>
  );
}
