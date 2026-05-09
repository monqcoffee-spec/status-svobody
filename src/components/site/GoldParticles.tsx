import { useMemo } from "react";

/**
 * Floating gold sparks — drift upward across the page.
 * Pure CSS keyframe animation; positions/sizes randomized once on mount.
 */
export function GoldParticles({ count = 22 }: { count?: number }) {
  const sparks = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const seed = (i + 1) * 9301;
        const rand = (n: number) => ((Math.sin(seed * (n + 1)) + 1) / 2);
        const left = rand(1) * 100;
        const size = 1.5 + rand(2) * 3;
        const duration = 14 + rand(3) * 18;
        const delay = -rand(4) * duration;
        const drift = rand(5) > 0.5;
        const isStar = i % 5 === 0;
        return { left, size, duration, delay, drift, isStar, key: i };
      }),
    [count],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparks.map((s) => (
        <span
          key={s.key}
          className="absolute bottom-[-10vh] rounded-full"
          style={{
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: s.isStar
              ? "radial-gradient(circle, color-mix(in oklab, white 90%, transparent) 0%, color-mix(in oklab, var(--champagne-glow) 80%, transparent) 35%, transparent 70%)"
              : "radial-gradient(circle, color-mix(in oklab, var(--champagne-glow) 95%, transparent) 0%, color-mix(in oklab, var(--champagne) 70%, transparent) 50%, transparent 75%)",
            boxShadow:
              "0 0 6px color-mix(in oklab, var(--champagne-glow) 80%, transparent), 0 0 14px color-mix(in oklab, var(--champagne) 50%, transparent)",
            animation: `spark-float ${s.duration}s linear ${s.delay}s infinite${s.drift ? ", twinkle 2.6s ease-in-out infinite" : ""}`,
            mixBlendMode: "screen",
          }}
        />
      ))}
    </div>
  );
}
