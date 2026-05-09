import { useEffect } from "react";

export type BgQuality = "low" | "medium" | "high";

/** Detect device capability once and write data-bg-quality on <html>. */
export function useBgQuality() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;

    const compute = (): BgQuality => {
      const nav = navigator as Navigator & { deviceMemory?: number };
      const mem = nav.deviceMemory ?? 8;
      const cores = nav.hardwareConcurrency ?? 8;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const coarse = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
      const narrow = window.innerWidth < 768;

      if (reduce || mem <= 2 || cores <= 2) return "low";
      if (coarse || narrow || mem <= 4 || cores <= 4) return "medium";
      return "high";
    };

    const apply = () => root.setAttribute("data-bg-quality", compute());
    apply();

    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqCoarse = window.matchMedia("(hover: none) and (pointer: coarse)");
    mqMotion.addEventListener("change", apply);
    mqCoarse.addEventListener("change", apply);
    window.addEventListener("resize", apply, { passive: true });

    return () => {
      mqMotion.removeEventListener("change", apply);
      mqCoarse.removeEventListener("change", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);
}