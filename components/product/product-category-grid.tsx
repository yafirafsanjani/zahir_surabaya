"use client";

import Link from "next/link";
import Image from "next/image";
import { productCategories } from "@/data/site";
import { ProductIcon } from "@/components/product/product-icon";

const productLogos: Record<string, string> = {
  "zahir-accounting": "/images/Zahir accounting .png",
  "zahir-online": "/images/zahir online.png",
  "zahir-ai": "/images/Zajir ai.png",
  "zahir-hr": "/images/Zahir HR-Icon.png",
  "zahir-erp": "/images/Zahir ERP.png",
  "zahir-crm": "/images/Zahir CRM.png",
  "zahir-capital-hub": "/images/Zahir Capital.png",
  "zahir-accounting-services": "/images/Zahir accounting service.png",
  "zahir-posx": "/images/zahir posx.png",
};

export function ProductCategoryGrid() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="badge-minimal">Katalog Produk Zahir</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Jelajahi Portofolio Produk &amp; Layanan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-body">
            Pilih kategori produk utama untuk membuka daftar paket, harga, dan fitur yang tersedia di dalamnya.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat) => {
            const planCount = cat.pricingSections.reduce((n, s) => n + s.plans.length, 0);
            const samplePlans = cat.pricingSections[0]?.plans.slice(0, 3) ?? [];
            const logo = productLogos[cat.slug];
            return (
              <Link
                key={cat.slug}
                href={`/product/${cat.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/30 hover:bg-surface-raised"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-full items-center">
                    {logo ? (
                      <Image
                        src={logo}
                        alt={`Logo ${cat.name}`}
                        width={160}
                        height={48}
                        className="h-12 w-auto max-w-[180px] object-contain object-left"
                      />
                    ) : (
                      <span
                        className="inline-flex size-11 items-center justify-center rounded-xl text-white"
                        style={{ backgroundColor: cat.color }}
                      >
                        <ProductIcon name={cat.icon} className="size-6" />
                      </span>
                    )}
                  </div>
                  <span className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted">
                    {planCount} paket
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">{cat.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{cat.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{cat.description}</p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {samplePlans.map((sp) => (
                    <span key={sp.slug} className="rounded-md bg-surface-raised px-2.5 py-1 text-xs font-medium text-body">
                      {sp.name}
                    </span>
                  ))}
                  {planCount > 3 && (
                    <span className="rounded-md bg-surface-raised px-2.5 py-1 text-xs font-medium text-muted">
                      +{planCount - 3} lainnya
                    </span>
                  )}
                </div>

                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  <span>Lihat Paket</span>
                  <svg className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
