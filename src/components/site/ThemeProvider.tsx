import { createContext, useContext, useEffect, useState, useCallback } from "react";

export type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "status-svobody-theme";

/**
 * Pre-hydration script — runs in <head> during SSR, applies the saved
 * theme to <html data-theme="..."> before React hydrates so there's no
 * flash of the wrong theme. Defaults to "dark".
 */
export const themeBootstrapScript = `(function(){try{
  var t = localStorage.getItem("${STORAGE_KEY}");
  if(t !== "light" && t !== "dark") t = "dark";
  document.documentElement.setAttribute("data-theme", t);
}catch(e){
  document.documentElement.setAttribute("data-theme","dark");
}})();`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Read the actual attribute set by the bootstrap script on mount.
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light" || current === "dark") {
      setThemeState(current);
    }
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    // Safe fallback if used outside provider (e.g., before hydration)
    return { theme: "dark" as Theme, toggleTheme: () => {}, setTheme: () => {} };
  }
  return ctx;
}
