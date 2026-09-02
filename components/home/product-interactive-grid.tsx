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
          <div className="flex flex-wrap gap-1.5 p-1 rounded-lg border-2 border-primary bg-card">
            {filters.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setFilter(opt.key)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                  filter === opt.key
                    ? "bg-primary text-white"
                    : "text-primary hover:bg-primary-soft"
                }`}
                type="button"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
          {filteredProducts.map((product) => (
            <article
              key={product.slug}
              className="flex flex-col justify-between overflow-hidden rounded-xl border-2 border-primary bg-card transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-primary px-2.5 py-1 text-[11px] font-semibold text-white">
                    {product.audience}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground">
                  {product.name}
                </h3>

                <p className="mt-1.5 text-sm text-body leading-snug">
                  {product.description}
                </p>

                {/* Highlighted Price */}
                <div className="mt-4 rounded-lg bg-primary px-4 py-4 text-center">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-white/90">
                    Harga Resmi
                  </p>
                  <p className="mt-1.5 text-2xl sm:text-3xl font-extrabold leading-tight text-white whitespace-nowrap">
                    {product.price}
                  </p>
                </div>

                <ul className="mt-4 space-y-2">
                  {product.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm text-body leading-snug">
                      <span className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary">
                        <svg className="size-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-2 border-primary bg-card px-4 py-3 sm:px-5">
                <Link
                  className="inline-flex items-center justify-center gap-1.5 w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-hover"
                  href={`/product/${product.slug}`}
                >
                  <span>Lihat Detail Modul</span>
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