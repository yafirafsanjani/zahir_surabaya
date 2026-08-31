"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "zahir-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem(storageKey) as Theme | null;
    const currentTheme =
      savedTheme ||
      (document.documentElement.dataset.theme === "dark" ||
      document.documentElement.classList.contains("dark")
        ? "dark"
        : "light");
    setTheme(currentTheme);
    document.documentElement.dataset.theme = currentTheme;
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  }

  const isDark = mounted && theme === "dark";

  return (
    <button
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      className="inline-flex size-9 items-center justify-center rounded-xl border border-border bg-surface text-muted transition hover:border-primary/40 hover:bg-surface-raised hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-xs"
      onClick={toggleTheme}
      suppressHydrationWarning
      title={isDark ? "Mode terang" : "Mode gelap"}
      type="button"
    >
      {isDark ? (
        <svg aria-hidden="true" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="4" strokeWidth="2" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" strokeLinecap="round" strokeWidth="2" />
        </svg>
      ) : (
        <svg aria-hidden="true" className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      )}
    </button>
  );
}

