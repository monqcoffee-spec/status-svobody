import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingContacts } from "./FloatingContacts";
import { ScrollTopButton } from "./ScrollTopButton";
import { GoldParticles } from "./GoldParticles";
import bgSunriseVeil from "@/assets/bg-sunrise-veil.jpg";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex min-h-screen flex-col"
      style={{ background: "var(--paper)", color: "var(--text)" }}
    >
      {/* Premium ambient layer — seamless sunrise gradient + animated golden rays */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Seamless sunrise gradient base — pure CSS, no edges, no tiles */}
        <div
          className="absolute inset-0 animate-bg-shift"
          style={{
            backgroundImage: [
              // warm sun glow center
              "radial-gradient(ellipse 80% 60% at 50% 38%, color-mix(in oklab, var(--gold) 30%, transparent) 0%, color-mix(in oklab, var(--gold-mist) 16%, transparent) 35%, transparent 70%)",
              // rose veil left
              "radial-gradient(ellipse 50% 80% at 0% 60%, color-mix(in oklab, var(--rose-quartz) 30%, transparent) 0%, transparent 60%)",
              // rose veil right
              "radial-gradient(ellipse 50% 80% at 100% 55%, color-mix(in oklab, var(--rose-mist) 36%, transparent) 0%, transparent 60%)",
              // wine whisper top-left
              "radial-gradient(ellipse 60% 50% at 15% 0%, color-mix(in oklab, var(--wine-soft) 20%, transparent) 0%, transparent 65%)",
              // soft cream wash
              "linear-gradient(180deg, color-mix(in oklab, var(--paper-tint) 90%, white) 0%, color-mix(in oklab, var(--rose-mist) 35%, white) 45%, color-mix(in oklab, var(--paper) 95%, white) 100%)",
            ].join(", "),
            backgroundSize: "200% 200%, 180% 180%, 180% 180%, 160% 160%, 100% 100%",
          }}
        />
        {/* Veil photograph — softly blended on top, masked at edges so it never looks like a chunk */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${bgSunriseVeil})`,
            opacity: 0.35,
            mixBlendMode: "soft-light",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 80% at 50% 45%, black 30%, transparent 85%)",
            maskImage:
              "radial-gradient(ellipse 90% 80% at 50% 45%, black 30%, transparent 85%)",
          }}
        />
        {/* Animated sun glow + rotating rays */}
        <div className="sun-glow" />
        <div className="sunrays" />
        {/* Top-left wine light shaft */}
        <div
          className="absolute -top-40 -left-40 h-[44rem] w-[44rem] rounded-full opacity-[0.35] animate-drift"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--wine) 22%, transparent) 0%, color-mix(in oklab, var(--wine-soft) 10%, transparent) 40%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        {/* Right gold orb */}
        <div
          className="absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full opacity-[0.30] animate-float"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--gold) 22%, transparent) 0%, color-mix(in oklab, var(--gold-mist) 14%, transparent) 45%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        {/* Bottom rose orb */}
        <div
          className="absolute bottom-[-10rem] left-1/3 h-[36rem] w-[36rem] rounded-full opacity-[0.28] animate-drift"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--rose-quartz) 30%, transparent) 0%, transparent 65%)",
            filter: "blur(120px)",
            animationDelay: "4s",
          }}
        />
        {/* Floating gold sparks (existing component) */}
        <GoldParticles />
        {/* Whisper noise for depth */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, var(--wine) 0.5px, transparent 1px), radial-gradient(circle at 70% 60%, var(--gold) 0.5px, transparent 1px)",
            backgroundSize: "200px 200px, 240px 240px",
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
