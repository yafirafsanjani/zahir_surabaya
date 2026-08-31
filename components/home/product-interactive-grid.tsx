"use client";

import { useState } from "react";
import Link from "next/link";
import { productCatalog } from "@/data/site";

type CategoryFilter = "all" | "ukm" | "enterprise" | "online";

export function ProductInteractiveGrid() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredProducts = productCatalog.filter((item) => {
    if (filter === "all") return true;
    if (filter === "ukm") {
      return (
        item.slug.includes("small-business") ||
        item.slug.includes("flexy-trade") ||
        item.slug.includes("personal") ||
        item.slug.includes("standart")
      );
    }
    if (filter === "enterprise") {
      return item.slug.includes("enterprise");
    }
    if (filter === "online") {
      return item.slug.includes("online");
    }
    return true;
  });

  return (
    <section className="border-b border-border bg-background pt-14 pb-24 sm:pt-18 sm:pb-32 lg:pt-20 lg:pb-36 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Section: Harga Paket Produk Zahir Accounting 6 */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Katalog Lengkap &amp; Harga Resmi
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Harga
            </h2>
            <p className="mt-2 text-base font-semibold text-foreground/90 sm:text-lg">
              Berikut daftar harga paket produk Zahir Accounting 6
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
              (Harga sudah termasuk{" "}
              <span className="font-semibold text-foreground/80">Training &amp; Support by Phone</span>.{" "}
              <span className="font-semibold text-foreground/80">Belum termasuk PPN 10%</span>)
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-1 rounded-2xl border border-border bg-surface-muted p-1.5 shadow-xs backdrop-blur-md">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                filter === "all"
                  ? "bg-primary text-white shadow-xs font-bold"
                  : "text-muted hover:text-foreground hover:bg-surface"
              }`}
            >
              Semua (7)
            </button>
            <button
              onClick={() => setFilter("ukm")}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                filter === "ukm"
                  ? "bg-primary text-white shadow-xs font-bold"
                  : "text-muted hover:text-foreground hover:bg-surface"
              }`}
            >
              UKM &amp; Dagang
            </button>
            <button
              onClick={() => setFilter("enterprise")}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                filter === "enterprise"
                  ? "bg-primary text-white shadow-xs font-bold"
                  : "text-muted hover:text-foreground hover:bg-surface"
              }`}
            >
              Enterprise
            </button>
            <button
              onClick={() => setFilter("online")}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                filter === "online"
                  ? "bg-primary text-white shadow-xs font-bold"
                  : "text-muted hover:text-foreground hover:bg-surface"
              }`}
            >
              Cloud / Online
            </button>
          </div>
        </div>

        {/* Grid of Product Pricing Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.slug}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10"
            >
              {/* Card Top: Price Display */}
              <div className="border-b border-border/80 bg-surface-raised px-6 py-6 text-center transition-colors">
                <span className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                  {product.price}
                </span>
              </div>

              {/* Product Title Bar (Zahir Blue accent) */}
              <div className="bg-primary px-4 py-2.5 text-center">
                <h3 className="text-sm font-bold tracking-wide text-white">
                  {product.name}
                </h3>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 bg-card">
                <div>
                  {/* Category / Target Subtitle Box */}
                  <div className="rounded-xl border border-primary/20 bg-primary/5 dark:bg-primary/10 px-4 py-2.5 text-center transition-colors">
                    <p className="text-xs font-semibold leading-snug text-primary dark:text-primary-text">
                      {product.audience}
                    </p>
                  </div>

                  {/* Feature Checklist with Zahir Blue Checkmarks */}
                  <ul className="mt-6 space-y-3">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-body sm:text-[13px] leading-relaxed">
                        <div className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                          <svg
                            className="size-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </div>
                        <span className="text-foreground/90 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action / Link */}
                <div className="mt-8 border-t border-border pt-4">
                  <Link
                    href={`/product/${product.slug}`}
                    className="group/btn flex items-center justify-between text-xs font-bold text-primary transition hover:text-primary-hover"
                  >
                    <span>Lihat Detail Spesifikasi</span>
                    <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-200 group-hover/btn:bg-primary group-hover/btn:text-white group-hover/btn:translate-x-1">
                      <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

