"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Plan, ProductCategory, PricingMode } from "@/data/site";
import { ProductIcon } from "@/components/product/product-icon";

type CategoryPricingViewProps = {
  category: ProductCategory;
};

export function CategoryPricingView({ category }: CategoryPricingViewProps) {
  const [activeMode, setActiveMode] = useState<PricingMode>(() =>
    category.pricingSections[0]?.mode ?? "subscription"
  );

  const activeSection = useMemo(
    () => category.pricingSections.find((s) => s.mode === activeMode) ?? category.pricingSections[0],
    [category, activeMode]
  );

  const sortedPlans = useMemo(
    () => [...(activeSection?.plans ?? [])].sort((a, b) => parsePriceNum(a.price) - parsePriceNum(b.price)),
    [activeSection]
  );

  const modeLabels: Record<PricingMode, string> = {
    subscription: "Berlangganan",
    license: "Beli Putus",
    contact: "Hubungi Konsultan",
  };

  return (
    <div className="min-h-screen text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-background border-b border-border/80">
        <div className="pointer-events-none absolute inset-0 bg-dot-minimal opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Link href="/product" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover">
            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Kembali ke Katalog
          </Link>

          <div className="mt-6 flex items-center gap-4">
            <span className="inline-flex size-14 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: category.color }}>
              <ProductIcon name={category.icon} className="size-7" />
            </span>
            <span className="badge-minimal">{category.tagline}</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{category.name}</h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-body leading-relaxed">{category.hero}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/contact-us">
              <span>Konsultasikan Kebutuhan</span>
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing select + cards */}
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="badge-minimal">Pilihan Paket</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Pilih Paket {category.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-body">{category.pricingIntroDescription}</p>
            </div>

            {/* Segmented control for modes */}
            {category.pricingSections.length > 1 && (
              <div className="flex rounded-xl border border-border bg-card p-1 shadow-xs">
                {category.pricingSections.map((section) => (
                  <button
                    key={section.mode}
                    onClick={() => setActiveMode(section.mode)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${
                      activeMode === section.mode
                        ? "bg-primary text-white"
                        : "text-body hover:text-foreground"
                    }`}
                    type="button"
                  >
                    {modeLabels[section.mode]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Section description */}
          {activeSection && (
            <p className="mt-6 max-w-2xl text-sm text-muted">{activeSection.description}</p>
          )}

          {/* Pricing cards */}
          {activeSection && (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {sortedPlans.map((plan) => (
                <PlanCard
                  key={plan.slug}
                  category={category}
                  mode={activeSection.mode}
                  plan={plan}
                />
              ))}
            </div>
          )}

          {/* Addons */}
          {activeSection?.addons && activeSection.addons.length > 0 && (
            <div className="mt-10">
              <h3 className="text-sm font-bold text-foreground">Add-on &amp; Ekstensi</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {activeSection.addons.map((addon) => (
                  <div key={addon.label} className="clean-card p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{addon.label}</p>
                      {addon.note && <p className="text-xs text-muted">{addon.note}</p>}
                    </div>
                    <span className="shrink-0 text-sm font-bold text-primary">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommendations */}
          {category.recommendations && category.recommendations.length > 0 && (
            <div className="mt-12 rounded-2xl border border-border bg-surface-raised/40 p-6 sm:p-8">
              <span className="badge-minimal">Bantuan Memilih</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Rekomendasi Paket untuk Bisnis Anda
              </h2>
              <p className="mt-2 max-w-2xl text-xs sm:text-sm text-body">
                Tidak yakin memilih paket yang tepat? Pilih berdasarkan jenis dan skala bisnis Anda. Klik rekomendasi untuk melihat detail paket yang paling sesuai.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.recommendations.map((rec) => {
                  const resolved = category.pricingSections
                    .flatMap((s) => s.plans.map((p) => ({ plan: p, mode: s.mode })))
                    .find((r) => r.plan.slug === rec.planSlug);
                  const href = resolved
                    ? `/product/${category.slug}/${resolved.mode}/${rec.planSlug}`
                    : "/contact-us";
                  return (
                    <Link
                      key={rec.businessType}
                      href={href}
                      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/50 hover:bg-card"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg text-white"
                          style={{ backgroundColor: category.color }}
                        >
                          <ProductIcon name={rec.icon} className="size-5" />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-foreground">{rec.businessType}</p>
                          {resolved && (
                            <p className="text-xs font-semibold text-primary">→ {resolved.plan.name}</p>
                          )}
                        </div>
                      </div>
                      <p className="mt-3 flex-1 text-[13px] leading-relaxed text-body">{rec.reason}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all">
                        Lihat detail paket
                        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Category FAQ */}
          {category.faq && category.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="text-lg font-bold text-foreground">Pertanyaan Umum</h2>
              <div className="mt-4 space-y-3">
                {category.faq.map((f) => (
                  <details key={f.q} className="clean-card p-5">
                    <summary className="cursor-pointer text-sm font-semibold text-foreground list-none">
                      <span className="flex items-center justify-between gap-3">
                        {f.q}
                        <svg className="size-4 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Notes (info verification) */}
          {category.notes && category.notes.length > 0 && (
            <div className="mt-8 rounded-xl border border-primary-border bg-primary-soft p-5 text-xs text-primary">
              {category.notes.join(" ")}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function parsePriceNum(price: string): number {
  const lowered = price.toLowerCase();
  if (/diskus|hubungi|hubung|custom/i.test(price)) {
    return Number.POSITIVE_INFINITY;
  }
  const isPlus = lowered.startsWith("+");
  const hasJuta = lowered.includes("juta");
  const hasMiliar = lowered.includes("miliar");
  const cleaned = lowered
    .replace(isPlus ? /^\+/ : "", "")
    .replace(/[^\d.,]/g, "");
  const normalized = cleaned.replace(/\./g, "").replace(",", ".");
  const base = parseFloat(normalized) || 0;
  if (hasMiliar) return base * 1000000000;
  if (hasJuta) return base * 1000000;
  return base;
}

function PlanCard({
  category,
  mode,
  plan,
}: {
  category: ProductCategory;
  mode: PricingMode;
  plan: Plan;
}) {
  const isMostPopular = plan.popular === true;
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-200 hover:-translate-y-1 ${
        isMostPopular ? "border-primary/50" : "border-border"
      }`}
    >
      {isMostPopular && (
        <span className="inline-flex w-fit items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
          </svg>
          Paling Populer
        </span>
      )}

      <h3 className="text-lg font-bold tracking-tight text-foreground">{plan.name}</h3>
      <p className="mt-0.5 text-xs font-semibold text-muted">{plan.tagline}</p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-3xl font-bold tracking-tight text-foreground">{plan.price}</span>
        {plan.pricePeriod && <span className="text-sm font-medium text-muted">{plan.pricePeriod}</span>}
      </div>
      {plan.priceNote && <p className="mt-1 text-xs text-muted">{plan.priceNote}</p>}

      <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-surface-raised px-2.5 py-1 text-xs font-semibold text-body">
        <svg className="size-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
        {plan.users}
      </div>

      <p className="mt-4 flex-1 text-[13px] leading-relaxed text-body">{plan.description}</p>

      <ul className="mt-5 flex-1 space-y-2 border-t border-border pt-5">
        {plan.features.slice(0, 5).map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-body">
            <svg className="mt-0.5 size-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/product/${category.slug}/${mode}/${plan.slug}`}
        className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
      >
        <span>{plan.cta.label}</span>
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>
  );
}
