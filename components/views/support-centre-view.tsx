import Link from "next/link";
import { HeroBanner } from "@/components/sections/hero-banner";
import { supportVersions } from "@/data/site";

export function SupportCentreView() {
  return (
    <div className="min-h-screen text-foreground">
      <HeroBanner
        compact
        eyebrow="Pusat Bantuan"
        title="Dukungan Teknis Berbasis Versi Zahir"
        description="Pilih lini versi yang Anda gunakan untuk mengakses panduan modul, referensi troubleshooting kendala, dan jalur eskalasi ke tim support Surabaya."
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {supportVersions.map((support) => (
              <div key={support.slug} className="clean-card p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="badge-minimal">Versi Resmi</span>
                  <h2 className="mt-3 text-xl font-bold text-foreground">{support.name}</h2>
                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">{support.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <Link
                    href={`/support-centre/${support.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover"
                  >
                    <span>Buka Panduan &amp; Troubleshooting</span>
                    <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}