import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingContacts } from "./FloatingContacts";
import { ScrollTopButton } from "./ScrollTopButton";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative isolate flex min-h-screen flex-col"
      style={{ color: "var(--text)" }}
    >
      {/*
        iOS-safe sunrise background.
        - position: fixed (no `background-attachment: fixed`, which is buggy in iOS Safari).
        - Parent has `isolate` so this -z-10 layer reliably stays behind siblings
          but in front of the document root (and is not hidden by a parent bg).
        - Uses rgba fallbacks (no color-mix) so it renders on older iOS too.
      */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-reduced-tint"
        style={{
          backgroundColor: "#FFFFFF",
          backgroundImage: [
            "radial-gradient(ellipse 90% 55% at 50% 12%, rgba(201, 168, 106, 0.22) 0%, rgba(201, 168, 106, 0) 65%)",
            "radial-gradient(ellipse 70% 80% at 0% 60%, rgba(189, 147, 173, 0.18) 0%, rgba(189, 147, 173, 0) 60%)",
            "radial-gradient(ellipse 70% 80% at 100% 55%, rgba(217, 200, 213, 0.28) 0%, rgba(217, 200, 213, 0) 60%)",
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
