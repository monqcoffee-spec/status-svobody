import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingContacts } from "./FloatingContacts";
import { ScrollTopButton } from "./ScrollTopButton";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex min-h-screen flex-col text-silver"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #f4dbe0 18%, #d8a6ad 42%, #a8606e 70%, #874255 100%)",
      }}
    >
      {/* Cinematic gold + accent glow overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 5%, color-mix(in oklab, var(--champagne) 45%, transparent), transparent 65%)," +
            "radial-gradient(ellipse 80% 50% at 100% 90%, color-mix(in oklab, var(--champagne-glow) 28%, transparent), transparent 70%)," +
            "radial-gradient(ellipse 70% 45% at 0% 60%, color-mix(in oklab, var(--champagne-soft) 22%, transparent), transparent 70%)",
        }}
      />
      {/* Floating blur-glow orbs — cinematic bokeh */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-24 -left-24 h-[42rem] w-[42rem] rounded-full opacity-60 mix-blend-screen animate-drift"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--champagne) 30%, transparent) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-1/3 -right-32 h-[38rem] w-[38rem] rounded-full opacity-55 mix-blend-screen animate-float"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--cyan) 32%, transparent) 0%, transparent 60%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full opacity-50 mix-blend-screen animate-drift"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--champagne-glow) 26%, transparent) 0%, transparent 60%)",
            filter: "blur(100px)",
            animationDelay: "4s",
          }}
        />
        {/* Subtle film grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 0.5px, transparent 1px), radial-gradient(circle at 70% 60%, white 0.5px, transparent 1px), radial-gradient(circle at 40% 80%, white 0.5px, transparent 1px)",
            backgroundSize: "180px 180px, 220px 220px, 160px 160px",
          }}
        />
      </div>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <FloatingContacts />
      <ScrollTopButton />
    </div>
  );
}
