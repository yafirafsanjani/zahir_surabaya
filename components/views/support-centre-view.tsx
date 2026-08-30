import Link from "next/link";
import { HeroBanner } from "@/components/sections/hero-banner";
import { supportVersions } from "@/data/site";

export function SupportCentreView() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100">
      {/* Hero Support Centre */}
      <HeroBanner
        compact
        eyebrow="Pusat Bantuan"
        title="Dukungan Teknis Berbasis Versi Zahir"
        description="Pilih lini versi yang Anda gunakan untuk mengakses panduan modul, referensi troubleshooting kendala, dan jalur eskalasi ke tim support Surabaya."
      />

      {/* Pilihan Versi Support */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {supportVersions.map((support, index) => (
            <article
              key={support.slug}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#12131a] p-8 transition-all hover:border-emerald-500/40 hover:bg-[#181924]"
            >
              <div>
                <span className="font-mono text-xs text-emerald-400">Versi 0{index + 1}</span>
                <h2 className="mt-3 text-2xl font-bold text-white">{support.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{support.description}</p>
              </div>

              <Link
                href={`/support-centre/${support.slug}`}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-400 hover:text-emerald-300 text-xs"
              >
                Buka Pusat Dukungan Ini <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
