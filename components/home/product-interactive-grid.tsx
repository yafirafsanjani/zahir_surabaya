"use client";

import { useState } from "react";
import Link from "next/link";
import { productCatalog } from "@/data/site";

type CategoryFilter = "all" | "ukm" | "enterprise" | "online";

const filters: { key: CategoryFilter; label: string }[] = [
  { key: "all", label: "Semua Paket" },
  { key: "ukm", label: "UKM & Dagang" },
  { key: "enterprise", label: "Enterprise & Proyek" },
  { key: "online", label: "Cloud / Online" },
];

export function ProductInteractiveGrid() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredProducts = productCatalog.filter((product) => {
    if (filter === "all") return true;
    if (filter === "ukm") return ["zahir-small-business", "zahir-flexy-trade", "zahir-personal", "zahir-standart"].includes(product.slug);
    if (filter === "enterprise") return product.slug.includes("enterprise");
    return product.slug.includes("online");
  });

  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="badge-minimal">Katalog Produk Resmi</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Pilihan Paket Zahir Accounting
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-body">
              Seluruh harga resmi sudah termasuk paket training dan dukungan teknis resmi dari Zahir Surabaya.
            </p>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-lg border border-border bg-card">
            {filters.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setFilter(opt.key)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                  filter === opt.key
                    ? "bg-primary text-white"
                    : "text-body hover:bg-surface-raised hover:text-foreground"
                }`}
                type="button"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {filteredProducts.map((product) => (
            <article
              key={product.slug}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_32px_-12px_rgba(0,98,255,0.18)]"
            >
              {/* Header */}
              <div className="flex flex-1 flex-col px-5 pb-5 pt-6 sm:px-6">
                <span className="inline-flex w-fit rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium text-body">
                  {product.audience}
                </span>

                <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">
                  {product.name}
                </h3>

                <p className="mt-1.5 text-[13px] leading-relaxed text-body">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mt-6 border-t border-border/70 pt-5">
                  <p className="text-[11px] font-medium uppercase tracking-widest text-muted">
                    Harga
                  </p>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-primary">
                    {product.price}
                  </p>
                  {product.priceNote && (
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {product.priceNote}
                    </p>
                  )}
                </div>

                {/* Benefits */}
                <ul className="mt-6 space-y-2.5">
                  {product.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm leading-snug text-body">
                      <svg className="mt-0.5 size-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA */}
              <div className="border-t border-border bg-background/60 px-5 py-4 sm:px-6">
                <Link
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
                  href={`/product/${product.slug}`}
                >
                  <span>Lihat Detail</span>
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}