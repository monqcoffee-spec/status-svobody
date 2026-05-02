import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

/**
 * Sun/moon toggle. Single button, fully accessible, with a smooth
 * cross-fade + rotate animation between the two icons. Uses brand
 * gold accent and adapts automatically to the active theme.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
      title={isDark ? "Светлая тема" : "Тёмная тема"}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-sm",
        "border border-cyan/30 bg-cyan/5 text-cyan-glow",
        "hover:border-cyan hover:bg-cyan/10 hover:text-cyan-glow",
        "transition-all duration-300",
        className,
      )}
      style={{
        boxShadow:
          "0 0 14px color-mix(in oklab, var(--cyan) 18%, transparent), inset 0 0 10px color-mix(in oklab, var(--cyan) 6%, transparent)",
      }}
    >
      {/* Sun */}
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className={cn(
          "absolute transition-all duration-500 ease-out",
          isDark
            ? "opacity-0 -rotate-90 scale-50"
            : "opacity-100 rotate-0 scale-100",
        )}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
      </svg>
      {/* Moon */}
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className={cn(
          "absolute transition-all duration-500 ease-out",
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-50",
        )}
      >
        <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
      </svg>
    </button>
  );
}
