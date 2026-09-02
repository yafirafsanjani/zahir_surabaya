import Link from "next/link";
import type { ReactNode } from "react";

type HeroBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: { href: string; label: string };
  secondaryAction?: { href: string; label: string };
  children?: ReactNode;
  compact?: boolean;
};

export function HeroBanner({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
  compact = false,
}: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden bg-background border-b border-border/80">
      <div className="pointer-events-none absolute inset-0 bg-dot-minimal opacity-40" />

      <div className={`relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${compact ? "py-12 sm:py-16" : "py-16 sm:py-20"}`}>
        <div className="max-w-3xl">
          <span className="badge-minimal">{eyebrow}</span>
          <h1 className={`mt-4 font-bold tracking-tight text-foreground ${compact ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"}`}>
            {title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-body leading-relaxed">{description}</p>

          {(primaryAction || secondaryAction) && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {primaryAction && (
                <Link className="btn-primary" href={primaryAction.href}>
                  <span>{primaryAction.label}</span>
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              )}
              {secondaryAction && (
                <Link className="btn-secondary" href={secondaryAction.href}>
                  <span>{secondaryAction.label}</span>
                </Link>
              )}
            </div>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  );
}