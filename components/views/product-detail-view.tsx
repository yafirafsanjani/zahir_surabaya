import Link from "next/link";
import { HeroBanner } from "@/components/sections/hero-banner";
import { Product } from "@/data/site";

type ProductDetailViewProps = {
  product: Product;
};

export function ProductDetailView({ product }: ProductDetailViewProps) {
  return (
    <div className="min-h-screen text-zinc-100">
      {/* Hero Detail Produk Spesifik */}
      <HeroBanner
        compact
        eyebrow={"Katalog ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ " + product.audience}
        title={product.name}
        description={product.description}
        primaryAction={{ href: "/contact-us", label: "Konsultasikan Varian Ini" }}
        secondaryAction={{ href: "/product", label: "Kembali ke Katalog" }}
      />

      {/* Konten Rincian Fitur & Pendampingan Surabaya */}
      <section className="bg-background"><div className="mx-auto max-w-6xl px-6 py-18 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-[#12131a] p-8 sm:p-10">
            <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
              Kapabilitas Utama
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
              Fitur & Keunggulan {product.name}
            </h2>
            <ul className="mt-6 space-y-4">
              {product.benefits.map((benefit) => (
                <li className="flex items-start gap-3.5 text-xs text-zinc-300 sm:text-sm" key={benefit}>
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">
                    ÃƒÂ¢Ã…â€œÃ¢â‚¬Å“
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 sm:p-10 backdrop-blur-xl">
            <div>
              <span className="text-xs font-semibold tracking-widest text-emerald-300 uppercase">
                Pendampingan Surabaya
              </span>
              <h3 className="mt-2 text-xl font-bold text-white">
                Implementasi & Training On-site
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                Tim kami siap mendampingi pengaturan chart of accounts (COA), migrasi saldo awal, dan pelatihan staf operasional di tempat kerja Anda.
              </p>
            </div>
            <Link
              className="mt-8 block w-full rounded-full bg-emerald-500 py-3 text-center text-xs font-bold text-zinc-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
              href="/contact-us"
            >
              Jadwalkan Demo & Konsultasi
            </Link>
          </div>
        </div>
      </div></section>
    </div>
  );
}
