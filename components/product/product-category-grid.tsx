"use client";

import Link from "next/link";
import { productCategories } from "@/data/site";
import { ProductIcon } from "@/components/product/product-icon";

export function ProductCategoryGrid() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="badge-minimal">Katalog Produk Zahir</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Jelajahi Portofolio Produk &amp; Layanan
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-body">
            Pilih kategori produk utama untuk membuka daftar paket, harga, dan fitur yang tersedia di dalamnya.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {productCategories.map((cat) => {
            const planCount = cat.pricingSections.reduce((n, s) => n + s.plans.length, 0);
            const samplePlans = cat.pricingSections[0]?.plans.slice(0, 3) ?? [];
            return (
              <Link
                key={cat.slug}
                href={`/product/${cat.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_32px_-12px_rgba(0,98,255,0.18)]"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex size-11 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: cat.color }}
                  >
                    <ProductIcon name={cat.icon} className="size-6" />
                  </span>
                  <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted">
                    {planCount} paket
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">{cat.name}</h3>
                <p className="mt-0.5 text-xs font-semibold text-primary">{cat.tagline}</p>
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-body">{cat.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {samplePlans.map((sp) => (
                    <span key={sp.slug} className="rounded-md bg-surface-raised px-2 py-1 text-[11px] font-medium text-body">
                      {sp.name}
                    </span>
                  ))}
                  {planCount > 3 && (
                    <span className="rounded-md bg-surface-raised px-2 py-1 text-[11px] font-medium text-muted">
                      +{planCount - 3} lainnya
                    </span>
                  )}
                </div>

                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <span>Lihat Paket</span>
                  <svg className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
