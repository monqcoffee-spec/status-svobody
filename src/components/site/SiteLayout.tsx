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
        // Static, lightweight sunrise — no JS, no animation, single paint.
        backgroundColor: "#FFF7F2",
        backgroundImage: [
          "radial-gradient(ellipse 90% 55% at 50% 18%, color-mix(in oklab, var(--gold) 26%, transparent) 0%, transparent 65%)",
          "radial-gradient(ellipse 70% 90% at 0% 60%, color-mix(in oklab, var(--rose-quartz) 28%, transparent) 0%, transparent 60%)",
          "radial-gradient(ellipse 70% 90% at 100% 55%, color-mix(in oklab, var(--rose-mist) 38%, transparent) 0%, transparent 60%)",
          "linear-gradient(180deg, #FFF8F3 0%, #FBEEE9 50%, #FFFFFF 100%)",
        ].join(", "),
        backgroundAttachment: "fixed, fixed, fixed, fixed",
      }}
    >
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <FloatingContacts />
      <ScrollTopButton />
    </div>
  );
}
