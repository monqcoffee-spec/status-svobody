import { useEffect } from "react";

/**
 * Sets `data-reduce-transparency="true"` on <html> when the user has asked the
 * OS for reduced transparency. Mirrors the CSS `prefers-reduced-transparency`
 * media query for browsers that already implement it, and provides a single
 * attribute hook so we can target the same state from CSS uniformly.
 */
export function useReducedTransparency() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const root = document.documentElement;
    const mq = window.matchMedia("(prefers-reduced-transparency: reduce)");
    const apply = () => {
      if (mq.matches) root.setAttribute("data-reduce-transparency", "true");
      else root.removeAttribute("data-reduce-transparency");
    };
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);
}