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
    <section className="border-b border-white/[0.07] bg-background pt-16 pb-32 sm:pt-20 sm:pb-40 lg:pt-24 lg:pb-48">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold text-emerald-400">
              Katalog Lengkap Zahir
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Solusi yang Disesuaikan dengan Skala Anda
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
              Pilih varian Zahir sesuai kebutuhan spesifik industri dan alur kerja perusahaan.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-1.5 rounded-xl border border-white/10 bg-[#12131a] p-1.5 backdrop-blur-md">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-lg px-4 py-2 text-xs font-medium transition ${
                filter === "all"
                  ? "bg-emerald-500 text-zinc-950 shadow-sm font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Semua (7)
            </button>
            <button
              onClick={() => setFilter("ukm")}
              className={`rounded-lg px-4 py-2 text-xs font-medium transition ${
                filter === "ukm"
                  ? "bg-emerald-500 text-zinc-950 shadow-sm font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              UKM & Dagang
            </button>
            <button
              onClick={() => setFilter("enterprise")}
              className={`rounded-lg px-4 py-2 text-xs font-medium transition ${
                filter === "enterprise"
                  ? "bg-emerald-500 text-zinc-950 shadow-sm font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Enterprise
            </button>
            <button
              onClick={() => setFilter("online")}
              className={`rounded-lg px-4 py-2 text-xs font-medium transition ${
                filter === "online"
                  ? "bg-emerald-500 text-zinc-950 shadow-sm font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Cloud / Online
            </button>
          </div>
        </div>

        {/* Grid of Products with Modern Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, idx) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#12131a]/80 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/40 hover:bg-[#181924] hover:shadow-xl hover:shadow-emerald-950/20"
            >
              {/* Top Badge & Number */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md border border-primary bg-primary px-2.5 py-1 text-[10px] font-bold text-on-primary shadow-sm shadow-primary/20">
                    {product.audience}
                  </span>
                  <span className="font-mono text-xs text-zinc-600 group-hover:text-emerald-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="mt-5 text-xl font-bold tracking-tight text-white group-hover:text-emerald-300">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                  {product.description}
                </p>

                {/* Feature Highlights */}
                <div className="mt-6 space-y-2 border-t border-white/[0.06] pt-4">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-zinc-300">
                      <span className="size-1 rounded-full bg-emerald-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom link callout */}
              <div className="mt-8 flex items-center justify-between border-t border-white/[0.04] pt-4">
                <span className="text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                  Detail Spesifikasi
                </span>
                <span className="flex size-7 items-center justify-center rounded-full bg-white/5 text-xs text-zinc-300 transition-all group-hover:bg-emerald-500 group-hover:text-zinc-950 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}