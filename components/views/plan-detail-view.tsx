import Link from "next/link";
import { PlanDetail, PricingMode, ProductCategory } from "@/data/site";
import { ProductIcon } from "@/components/product/product-icon";

type PlanDetailViewProps = {
  category: ProductCategory;
  detail: PlanDetail;
  mode: PricingMode;
  otherPlans: { slug: string; name: string; price: string }[];
  sectionTitle: string;
};

const modeLabels: Record<PricingMode, string> = {
  subscription: "Berlangganan",
  license: "Beli Putus",
  contact: "Hubungi Konsultan",
};

export function PlanDetailView({ category, detail, mode, otherPlans, sectionTitle }: PlanDetailViewProps) {
  return (
    <div className="min-h-screen text-foreground">
      {/* Hero + pricing summary */}
      <section className="relative overflow-hidden bg-background border-b border-border/80">
        <div className="pointer-events-none absolute inset-0 bg-dot-minimal opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted">
            <Link href="/product" className="hover:text-primary">Product</Link>
            <span>/</span>
            <Link href={`/product/${category.slug}`} className="hover:text-primary">{category.name}</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">{detail.name}</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            {/* Left: name + value prop */}
            <div>
              <div className="flex items-center gap-4">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: category.color }}>
                  <ProductIcon name={category.icon} className="size-6" />
                </span>
                <span className="badge-minimal">{modeLabels[mode]}</span>
              </div>
              <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{detail.name}</h1>
              <p className="mt-1 text-sm font-semibold text-primary">{detail.tagline}</p>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-body leading-relaxed">{detail.valueProposition}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link className="btn-primary" href={detail.cta.href}>
                  <span>{detail.cta.label}</span>
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link className="btn-secondary" href={`/product/${category.slug}`}>
                  Lihat Semua Paket
                </Link>
              </div>
            </div>

            {/* Right: pricing summary card */}
            <div className="rounded-2xl border border-primary/50 bg-card p-6 shadow-[0_16px_40px_-16px_rgba(0,98,255,0.25)]">
              <span className="text-xs font-semibold text-muted uppercase tracking-wider">Harga {detail.name}</span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">{detail.price}</span>
                {detail.pricePeriod && <span className="text-sm font-medium text-muted">{detail.pricePeriod}</span>}
              </div>
              {detail.priceNote && <p className="mt-1 text-xs text-muted">{detail.priceNote}</p>}

              <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm text-body">
                <div className="flex items-center gap-2">
                  <svg className="size-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  {detail.users}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="size-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {modeLabels[mode]}
                </div>
              </div>

              <Link className="btn-primary mt-6 w-full justify-center" href={detail.cta.href}>
                {detail.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="badge-minimal">Mengapa {detail.name}</span>
          <h2 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-foreground">Keunggulan Utama</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {detail.highlights.map((h) => (
              <div key={h.title} className="clean-card p-5">
                <h3 className="text-sm font-bold text-foreground">{h.title}</h3>
                <p className="mt-1.5 text-xs text-muted leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison + specs */}
      <section className="bg-surface-raised py-12 sm:py-16 border-y border-border/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <span className="badge-minimal">Fitur &amp; Modul</span>
          <h2 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-foreground">Fitur yang Tersedia</h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Features list */}
            <div>
              <ul className="space-y-3">
                {detail.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 rounded-lg border border-border bg-card px-4 py-3 text-sm text-body">
                    <svg className="mt-0.5 size-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs / support */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-bold text-foreground">Spesifikasi &amp; Detail</h3>
                <dl className="mt-4 space-y-3">
                  {detail.specifications.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between gap-3 border-b border-border/60 pb-3 text-sm">
                      <dt className="text-muted">{spec.label}</dt>
                      <dd className="text-right font-semibold text-foreground">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-bold text-foreground">Layanan Purnajual &amp; Dukungan</h3>
                <ul className="mt-3 space-y-2 text-sm text-body">
                  {detail.support.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Comparison table */}
          {detail.comparison.length > 0 && (
            <div className="mt-10">
              <h3 className="text-sm font-bold text-foreground">Perbandingan Fitur</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {detail.comparison.map((group) => (
                  <div key={group.title} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-xs font-bold text-primary uppercase tracking-wide">{group.title}</p>
                    <ul className="mt-3 space-y-2">
                      {group.features.map((f) => (
                        <li key={f.name} className="flex items-center gap-2 text-sm text-body">
                          {f.included ? (
                            <svg className="size-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          ) : (
                            <svg className="size-4 shrink-0 text-muted/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          <span>{f.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Other plans in mode */}
      {otherPlans.length > 0 && (
        <section className="bg-background py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <span className="badge-minimal">Bandingkan</span>
            <h2 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Paket Lain dalam {sectionTitle}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {otherPlans.map((p) => (
                <Link
                  key={p.slug}
                  href={`/product/${category.slug}/${mode}/${p.slug}`}
                  className="group rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40"
                >
                  <p className="text-sm font-bold text-foreground">{p.name}</p>
                  <p className="mt-0.5 text-xs font-semibold text-primary">{p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {detail.faq.length > 0 && (
        <section className="bg-background py-12 sm:py-16 border-t border-border/80">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Pertanyaan Umum</h2>
            <div className="mt-6 space-y-3">
              {detail.faq.map((f) => (
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
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-surface-raised py-12 sm:py-16 border-t border-border/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Siap Memulai dengan {detail.name}?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-body">
            Konsultasikan kebutuhan Anda dengan tim konsultan Zahir Surabaya untuk memulai.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link className="btn-primary" href={detail.cta.href}>
              <span>{detail.cta.label}</span>
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link className="btn-secondary" href={`/product/${category.slug}`}>
              Lihat Semua Paket
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
