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
          <div className="flex flex-wrap gap-1.5 p-1 rounded-lg border border-border bg-surface-raised">
            {filters.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setFilter(opt.key)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  filter === opt.key
                    ? "bg-card text-foreground shadow-xs font-semibold"
                    : "text-muted hover:text-foreground"
                }`}
                type="button"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.slug}
              className="clean-card flex flex-col justify-between p-6 sm:p-7"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <span className="rounded-md bg-primary-soft px-2.5 py-1 text-[11px] font-semibold text-primary">
                    {product.audience}
                  </span>
                  <span className="text-sm font-bold text-foreground">{product.price}</span>
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  {product.description}
                </p>

                <ul className="mt-6 space-y-2 border-t border-border/60 pt-4">
                  {product.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-xs text-body leading-relaxed">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60">
                <Link
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition hover:text-primary-hover"
                  href={`/product/${product.slug}`}
                >
                  <span>Lihat Detail Modul</span>
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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