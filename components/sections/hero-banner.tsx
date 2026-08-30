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
    <section className="relative border-b border-white/[0.07] bg-grid-pattern">
      <div className="pointer-events-none absolute -top-12 left-1/2 -z-10 h-56 w-full max-w-4xl -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />
      
      <div className={"mx-auto max-w-6xl px-6 lg:px-8 " + (compact ? "pt-8 pb-14 sm:pt-10 sm:pb-18" : "pt-10 pb-16 sm:pt-12 sm:pb-20")}>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-[11px] font-semibold text-emerald-300">
            {eyebrow}
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl sm:leading-[1.12]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {description}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {primaryAction && (
                <Link
                  className="rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-zinc-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
                  href={primaryAction.href}
                >
                  {primaryAction.label}
                </Link>
              )}
              {secondaryAction && (
                <Link
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-zinc-200 backdrop-blur-md transition hover:border-white/30 hover:bg-white/10 hover:text-white"
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