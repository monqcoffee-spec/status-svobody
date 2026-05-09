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
          "linear-gradient(215deg, #6a2735 0%, #9a5563 22%, #c0838c 45%, #dca99f 65%, #ecc8b5 82%, #f5e2cf 100%)",
      }}
    >
      {/* Cinematic gold + accent glow overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 55% 38% at 50% 8%, color-mix(in oklab, var(--champagne-glow) 80%, transparent), transparent 60%)," +
            "radial-gradient(ellipse 70% 45% at 50% 12%, color-mix(in oklab, var(--champagne) 65%, transparent), transparent 70%)," +
            "radial-gradient(ellipse 85% 55% at 100% 88%, color-mix(in oklab, var(--champagne-glow) 55%, transparent), transparent 70%)," +
            "radial-gradient(ellipse 75% 50% at 0% 55%, color-mix(in oklab, var(--champagne) 45%, transparent), transparent 72%)," +
            "radial-gradient(ellipse 50% 30% at 50% 100%, color-mix(in oklab, var(--champagne-glow) 35%, transparent), transparent 70%)",
        }}
      />
      {/* Floating blur-glow orbs — cinematic bokeh */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-24 -left-24 h-[42rem] w-[42rem] rounded-full opacity-90 mix-blend-screen animate-drift"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--champagne-glow) 70%, transparent) 0%, color-mix(in oklab, var(--champagne) 30%, transparent) 35%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="absolute top-1/3 -right-32 h-[38rem] w-[38rem] rounded-full opacity-80 mix-blend-screen animate-float"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--champagne) 55%, transparent) 0%, color-mix(in oklab, var(--cyan) 25%, transparent) 45%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full opacity-85 mix-blend-screen animate-drift"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--champagne-glow) 75%, transparent) 0%, color-mix(in oklab, var(--champagne) 35%, transparent) 40%, transparent 65%)",
            filter: "blur(90px)",
            animationDelay: "4s",
          }}
        />
        {/* Rotating gold light rays */}
        <div
          className="absolute left-1/2 top-[-20%] h-[140vh] w-[140vh] opacity-[0.38] mix-blend-screen"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, color-mix(in oklab, var(--champagne-glow) 65%, transparent) 6deg, transparent 14deg, transparent 60deg, color-mix(in oklab, var(--champagne) 55%, transparent) 66deg, transparent 74deg, transparent 130deg, color-mix(in oklab, var(--champagne-glow) 50%, transparent) 138deg, transparent 146deg, transparent 210deg, color-mix(in oklab, var(--champagne) 50%, transparent) 218deg, transparent 226deg, transparent 290deg, color-mix(in oklab, var(--champagne-glow) 60%, transparent) 298deg, transparent 306deg, transparent 360deg)",
            transform: "translate(-50%, -50%)",
            transformOrigin: "center",
            animation: "ray-spin 90s linear infinite",
            filter: "blur(40px)",
            maskImage: "radial-gradient(circle, black 0%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 70%)",
          }}
        />
        {/* Counter-rotating second ray layer */}
        <div
          className="absolute left-[30%] bottom-[-30%] h-[120vh] w-[120vh] opacity-[0.28] mix-blend-screen"
          style={{
            background:
              "conic-gradient(from 45deg, transparent 0deg, color-mix(in oklab, var(--champagne) 60%, transparent) 8deg, transparent 18deg, transparent 90deg, color-mix(in oklab, var(--champagne-glow) 50%, transparent) 98deg, transparent 108deg, transparent 200deg, color-mix(in oklab, var(--champagne) 55%, transparent) 208deg, transparent 218deg, transparent 360deg)",
            transform: "translate(-50%, -50%)",
            animation: "ray-spin 140s linear infinite reverse",
            filter: "blur(50px)",
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
