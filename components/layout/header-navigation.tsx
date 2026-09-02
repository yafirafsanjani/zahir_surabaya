"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { publicNavigation } from "@/data/site";
import { BrandLogo } from "@/components/layout/brand-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function HeaderNavigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (mobileMenuOpen) {
      body.style.overflow = "hidden";
      root.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
      root.style.overflow = "";
    }
    return () => {
      body.style.overflow = "";
      root.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setExpandedItems({});
  }

  function isActiveRoute(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-md">
      {/* Subtle flowing top line */}
      <div className="h-[2px] w-full flow-border" />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo />

        {/* Desktop Nav */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 md:flex">
          {publicNavigation.map((item) => {
            const active = isActiveRoute(item.href);
            return (
              <div className="group relative" key={item.href}>
                <Link
                  className={`inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? "bg-primary-soft text-primary font-semibold"
                      : "text-body hover:bg-surface-raised hover:text-foreground"
                  }`}
                  href={item.href}
                >
                  <span>{item.label}</span>
                  {item.children && (
                    <svg className="size-3 text-muted transition-transform duration-150 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute top-full left-0 w-56 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-lg border border-border bg-card p-1.5 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          className={`block rounded-md px-3 py-2 text-xs transition-colors ${
                            pathname === child.href
                              ? "bg-primary text-white font-medium"
                              : "text-body hover:bg-surface-raised hover:text-foreground"
                          }`}
                          href={child.href}
                          key={child.href}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2.5 md:flex">
          <ThemeToggle />
          <Link className="btn-primary" href="/contact-us">
            <span>Konsultasi</span>
            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            className="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-card text-foreground"
            onClick={() => setMobileMenuOpen((val) => !val)}
            type="button"
          >
            {mobileMenuOpen ? (
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>
      </header>

      {/* Mobile Menu Dropdown - rendered outside <header> to avoid backdrop-filter containing-block
          making position:fixed behave like absolute (which let page content bleed through / clip). */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[66px] z-[9999] overflow-y-auto overscroll-contain bg-background px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2 md:hidden animate-subtle-in border-t border-border">
          <nav aria-label="Navigasi mobile" className="mx-auto max-w-md space-y-0.5">
            {publicNavigation.map((item) => {
              const active = isActiveRoute(item.href);
              const hasChildren = Boolean(item.children?.length);
              const expanded = expandedItems[item.href] || active;

              return (
                <div key={item.href} className="border-b border-border/50 py-3.5">
                  {hasChildren ? (
                    <div className="flex items-center justify-between gap-3">
                      <Link
                        className={`text-[15px] font-semibold transition-colors ${
                          active ? "text-primary" : "text-foreground"
                        }`}
                        href={item.href}
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                      <button
                        aria-expanded={expanded}
                        className="inline-flex size-6 shrink-0 items-center justify-center rounded text-muted"
                        onClick={() => setExpandedItems((curr) => ({ ...curr, [item.href]: !curr[item.href] }))}
                        type="button"
                      >
                        <svg className={`size-4 transition-transform duration-150 ${expanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <Link
                      className={`block text-[15px] font-semibold transition-colors ${
                        active ? "text-primary" : "text-foreground"
                      }`}
                      href={item.href}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                  {hasChildren && expanded && (
                    <div className="mt-3 space-y-1 border-l-2 border-primary/25 pl-3">
                      {item.children?.map((child) => (
                        <Link
                          className={`block rounded-md py-1.5 pl-2 pr-2 text-sm font-medium ${
                            pathname === child.href ? "text-primary" : "text-body"
                          }`}
                          href={child.href}
                          key={child.href}
                          onClick={closeMobileMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="mx-auto max-w-md pt-6 pb-2">
            <Link className="btn-primary w-full justify-center py-3" href="/contact-us" onClick={closeMobileMenu}>
              Jadwalkan Konsultasi
            </Link>
          </div>
        </div>
      )}
    </>
  );
}