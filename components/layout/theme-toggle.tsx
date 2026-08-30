"use client";

import { useState } from "react";

type Theme = "light" | "dark";

const storageKey = "zahir-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  });

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  }

  const isDark = theme === "dark";

  return (
    <button
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-zinc-400 transition hover:bg-surface-raised hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      onClick={toggleTheme}
      suppressHydrationWarning
      title={isDark ? "Mode terang" : "Mode gelap"}
      type="button"
    >
      {isDark ? (
        <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="3.5" strokeWidth="1.8" />
          <path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      ) : (
        <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      )}
    </button>
  );
}
