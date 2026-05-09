import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingContacts } from "./FloatingContacts";
import { ScrollTopButton } from "./ScrollTopButton";
import { GoldParticles } from "./GoldParticles";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex min-h-screen flex-col text-silver"
      style={{
        background:
          "linear-gradient(210deg, #c89aa1 0%, #dcb1ad 25%, #ecc8b5 55%, #f3dcc7 80%, #faecd9 100%)",
      }}
    >
      {/* Cinematic gold + accent glow overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 6%, color-mix(in oklab, var(--champagne-glow) 35%, transparent), transparent 70%)," +
            "radial-gradient(ellipse 80% 55% at 100% 90%, color-mix(in oklab, var(--champagne) 22%, transparent), transparent 75%)",
        }}
      />
      {/* Floating blur-glow orbs — cinematic bokeh */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-24 -left-24 h-[36rem] w-[36rem] rounded-full opacity-40 mix-blend-screen animate-drift"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--champagne-glow) 70%, transparent) 0%, color-mix(in oklab, var(--champagne) 30%, transparent) 35%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full opacity-35 mix-blend-screen animate-float"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--champagne) 55%, transparent) 0%, color-mix(in oklab, var(--cyan) 25%, transparent) 45%, transparent 65%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full opacity-35 mix-blend-screen animate-drift"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--champagne-glow) 75%, transparent) 0%, color-mix(in oklab, var(--champagne) 35%, transparent) 40%, transparent 65%)",
            filter: "blur(100px)",
            animationDelay: "4s",
          }}
        />
        {/* Rotating gold light rays */}
        <div
          className="absolute left-1/2 top-[-20%] h-[140vh] w-[140vh] opacity-[0.14] mix-blend-screen"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, color-mix(in oklab, var(--champagne-glow) 65%, transparent) 6deg, transparent 14deg, transparent 60deg, color-mix(in oklab, var(--champagne) 55%, transparent) 66deg, transparent 74deg, transparent 130deg, color-mix(in oklab, var(--champagne-glow) 50%, transparent) 138deg, transparent 146deg, transparent 210deg, color-mix(in oklab, var(--champagne) 50%, transparent) 218deg, transparent 226deg, transparent 290deg, color-mix(in oklab, var(--champagne-glow) 60%, transparent) 298deg, transparent 306deg, transparent 360deg)",
            transform: "translate(-50%, -50%)",
            transformOrigin: "center",
            animation: "ray-spin 90s linear infinite",
            filter: "blur(60px)",
            maskImage: "radial-gradient(circle, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 70%)",
          }}
        />
        {/* Floating gold sparks */}
        <GoldParticles />
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
