import { useEffect, useMemo, useRef } from "react";

/**
 * Floating gold sparks — drift upward across the page.
 * Pure CSS keyframe animation; positions/sizes randomized once on mount.
 */
export function GoldParticles({ count = 22 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sparkRefs = useRef<Array<HTMLSpanElement | null>>([]);

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let raf = 0;
    const radius = 220; // px — influence range
    const maxShift = 22; // px — strongest displacement

    const tick = () => {
      raf = 0;
      sparkRefs.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = cx - mx;
        const dy = cy - my;
        const dist = Math.hypot(dx, dy);
        if (dist > radius) {
          el.style.setProperty("--mx", "0px");
          el.style.setProperty("--my", "0px");
          return;
        }
        const falloff = 1 - dist / radius;
        const force = falloff * falloff * maxShift;
        const nx = dist === 0 ? 0 : (dx / dist) * force;
        const ny = dist === 0 ? 0 : (dy / dist) * force;
        el.style.setProperty("--mx", `${nx.toFixed(2)}px`);
        el.style.setProperty("--my", `${ny.toFixed(2)}px`);
      });
    };

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparks.map((s, i) => (
        <span
          key={s.key}
          ref={(el) => { sparkRefs.current[i] = el; }}
          className="absolute bottom-[-10vh] rounded-full spark-cursor"
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
