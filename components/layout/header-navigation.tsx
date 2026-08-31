"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { publicNavigation } from "@/data/site";
import { BrandLogo } from "@/components/layout/brand-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function HeaderNavigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setExpandedItems({});
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  function toggleSubmenu(href: string) {
    setExpandedItems((prev) => ({
      ...prev,
      [href]: !prev[href],
    }));
  }

  return (
    <div className="sticky top-0 z-50 w-full px-3 py-2.5 sm:px-6 sm:py-3 transition-all duration-300">
      <header
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-border/90 bg-background/90 shadow-lg shadow-slate-900/5 dark:shadow-black/30 backdrop-blur-xl py-1.5 px-4 lg:px-6"
            : "border-border/60 bg-background/80 shadow-sm backdrop-blur-lg py-2 px-4 lg:px-6"
        }`}
      >
        <div className="flex h-11 items-center justify-between gap-2 lg:gap-4">
          {/* Logo Bagian Kiri */}
          <div className="shrink-0">
            <BrandLogo />
          </div>

          {/* Menu Navigasi Utama (Desktop 1 Baris Penuh / Single-Row Flow) */}
          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-0.5 xl:gap-1 lg:flex flex-nowrap whitespace-nowrap overflow-visible"
          >
            {publicNavigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <div className="group relative shrink-0" key={item.href}>
                  <Link
                    className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-semibold tracking-tight transition-all duration-150 xl:px-3 ${
                      isActive
                        ? "bg-primary/10 text-primary font-bold dark:bg-primary/15"
                        : "text-muted hover:bg-surface-raised hover:text-foreground"
                    }`}
                    href={item.href}
                  >
                    <span>{item.label}</span>
                    {item.children && (
                      <svg
                        className="size-2.5 text-muted/70 transition-transform duration-200 group-hover:rotate-180 group-hover:text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu Sub-kategori (Desktop) */}
                  {item.children && (
                    <div className="invisible absolute top-full left-1/2 -translate-x-1/2 w-64 translate-y-2 rounded-2xl border border-border bg-card p-1.5 opacity-0 shadow-2xl backdrop-blur-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            className={`block whitespace-nowrap rounded-xl px-3 py-2 text-xs font-medium transition ${
                              isChildActive
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-muted hover:bg-surface-raised hover:text-foreground"
                            }`}
                            href={child.href}
                            key={child.href}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Tombol Aksi Kanan (Desktop) */}
          <div className="hidden items-center gap-2 lg:flex shrink-0">
            <ThemeToggle />
            <Link
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-primary-hover hover:shadow-md hover:shadow-primary/20"
              href="/contact-us"
            >
              <span>Konsultasi</span>
              <svg
                className="size-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          {/* Navigasi Mobile / Tablet (Bar Atas) */}
          <div className="flex items-center gap-1.5 lg:hidden shrink-0">
            <ThemeToggle />
            <button
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-xs transition hover:bg-surface-raised active:scale-95"
              type="button"
            >
              {mobileMenuOpen ? (
                <svg className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="size-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-18 z-40 lg:hidden px-3 pb-6 flex flex-col justify-start">
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Floating Mobile Menu Card */}
          <div className="relative z-50 max-h-[82vh] overflow-y-auto rounded-3xl border border-border bg-card p-5 shadow-2xl backdrop-blur-2xl transition-all duration-200">
            {/* Header Mini di dalam Menu */}
            <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-3">
              <span className="text-[11px] font-bold tracking-wider text-muted uppercase">
                Menu Navigasi
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                Zahir Surabaya
              </span>
            </div>

            {/* List Menu Items */}
            <nav className="flex flex-col gap-1">
              {publicNavigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isExpanded = expandedItems[item.href] || isActive;

                return (
                  <div key={item.href} className="rounded-2xl transition-colors">
                    <div className="flex items-center justify-between">
                      <Link
                        onClick={() => {
                          if (!hasChildren) setMobileMenuOpen(false);
                        }}
                        className={`flex-1 rounded-xl px-3.5 py-2.5 text-xs font-bold transition ${
                          isActive
                            ? "bg-primary/10 text-primary font-extrabold"
                            : "text-foreground hover:bg-surface-raised hover:text-primary"
                        }`}
                        href={item.href}
                      >
                        {item.label}
                      </Link>

                      {hasChildren && (
                        <button
                          type="button"
                          aria-label={`Toggle sub-menu ${item.label}`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleSubmenu(item.href);
                          }}
                          className="flex size-9 items-center justify-center rounded-xl text-muted hover:bg-surface-raised hover:text-foreground"
                        >
                          <svg
                            className={`size-4 transition-transform duration-200 ${
                              isExpanded ? "rotate-180 text-primary" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Submenu Accordion */}
                    {hasChildren && isExpanded && (
                      <div className="my-1 ml-3 space-y-1 border-l-2 border-primary/20 pl-2.5 py-1">
                        {item.children?.map((child) => {
                          const isChildActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block rounded-xl px-3 py-2 text-xs transition ${
                                isChildActive
                                  ? "bg-primary/10 text-primary font-bold"
                                  : "text-muted hover:bg-surface-raised hover:text-foreground"
                              }`}
                              href={child.href}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Tombol CTA Bawah */}
            <div className="mt-4 border-t border-border pt-4">
              <Link
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-3 text-center text-xs font-bold text-white shadow-xs transition hover:bg-primary-hover active:scale-[0.98]"
                href="/contact-us"
              >
                <span>Konsultasi Kebutuhan Anda</span>
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

