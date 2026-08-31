import Link from "next/link";
import { HeroBanner } from "@/components/sections/hero-banner";
import { supportVersions } from "@/data/site";

export function SupportCentreView() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Hero Support Centre */}
      <HeroBanner
        compact
        eyebrow="Pusat Bantuan"
        title="Dukungan Teknis Berbasis Versi Zahir"
        description="Pilih lini versi yang Anda gunakan untuk mengakses panduan modul, referensi troubleshooting kendala, dan jalur eskalasi ke tim support Surabaya."
      />

      {/* Pilihan Versi Support */}
      <section className="bg-background py-16 sm:py-20 lg:py-24 transition-colors duration-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {supportVersions.map((support, index) => (
              <article
                key={support.slug}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div>
                  <span className="inline-flex size-7 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-bold text-primary">0{index + 1}</span>
                  <h2 className="mt-4 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{support.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{support.description}</p>
                </div>

                <Link
                  href={`/support-centre/${support.slug}`}
                  className="mt-8 inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-xs"
                >
                  <span>Buka Pusat Dukungan Ini</span>
                  <svg className="size-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

