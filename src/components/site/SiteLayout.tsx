import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingContacts } from "./FloatingContacts";
import { ScrollTopButton } from "./ScrollTopButton";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex min-h-screen flex-col"
      style={{
        color: "var(--text)",
        backgroundColor: "#FFF7F2",
      }}
    >
      {/* Fixed sunrise background — visible on every device (iOS-safe, no background-attachment: fixed). */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundColor: "#FFFFFF",
          backgroundImage: [
            "radial-gradient(ellipse 90% 55% at 50% 12%, color-mix(in oklab, var(--gold) 22%, transparent) 0%, transparent 65%)",
            "radial-gradient(ellipse 70% 80% at 0% 60%, color-mix(in oklab, var(--rose-quartz) 18%, transparent) 0%, transparent 60%)",
            "radial-gradient(ellipse 70% 80% at 100% 55%, color-mix(in oklab, var(--rose-mist) 24%, transparent) 0%, transparent 60%)",
            "linear-gradient(180deg, #FFFFFF 0%, #FFF8F3 55%, #FFFFFF 100%)",
          ].join(", "),
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
