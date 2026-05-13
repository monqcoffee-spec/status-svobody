import { useEffect } from "react";

/**
 * Sets document.title and meta[name="description"] on mount.
 * Used as a SPA replacement for TanStack Start's route-level head() metadata.
 */
export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const prevTitle = document.title;
    document.title = title;

    let metaEl: HTMLMetaElement | null = null;
    let prevDescription: string | null = null;
    if (description) {
      metaEl = document.querySelector('meta[name="description"]');
      if (metaEl) {
        prevDescription = metaEl.getAttribute("content");
        metaEl.setAttribute("content", description);
      }
    }

    return () => {
      document.title = prevTitle;
      if (metaEl && prevDescription !== null) {
        metaEl.setAttribute("content", prevDescription);
      }
    };
  }, [title, description]);
}