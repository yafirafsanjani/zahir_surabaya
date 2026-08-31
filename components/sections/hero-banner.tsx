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
    <section className="relative border-b border-border bg-background bg-grid-pattern overflow-hidden transition-colors duration-200">
      <div className="pointer-events-none absolute -top-12 left-1/2 -z-10 h-56 w-full max-w-4xl -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
      
      <div className={"mx-auto max-w-6xl px-6 lg:px-8 " + (compact ? "pt-10 pb-16 sm:pt-14 sm:pb-20" : "pt-12 pb-20 sm:pt-16 sm:pb-24")}>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            {eyebrow}
          </div>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-[1.12]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {primaryAction && (
                <Link
                  className="rounded-full bg-primary px-5.5 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-primary-hover hover:shadow-md hover:shadow-primary/20"
                  href={primaryAction.href}
                >
                  {primaryAction.label}
                </Link>
              )}
              {secondaryAction && (
                <Link
                  className="rounded-full border border-border bg-surface px-5.5 py-2.5 text-xs font-semibold text-foreground shadow-xs transition hover:border-primary/40 hover:bg-surface-raised hover:text-primary"
                  href={secondaryAction.href}
                >
                  {secondaryAction.label}
                </Link>
              )}
            </div>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}

