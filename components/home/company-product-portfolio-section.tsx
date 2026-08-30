import Link from "next/link";
import { productCatalog } from "@/data/site";

export function CompanyProductPortfolioSection() {
  return (
    <section className="border-b border-white/[0.07] bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Portofolio Produk</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Satu ekosistem, pilihan yang menyesuaikan tahap bisnis.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Struktur produk Zahir Surabaya mencakup solusi untuk kebutuhan personal, bisnis yang berkembang, perdagangan, dan organisasi enterprise.
            </p>
          </div>
          <Link className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 transition hover:text-emerald-300" href="/product">
            Bandingkan seluruh produk <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productCatalog.map((product, index) => (
            <Link
              className="group flex min-h-56 flex-col justify-between rounded-2xl border border-white/10 bg-[#12131a]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-[#181924] hover:shadow-xl hover:shadow-emerald-950/20"
              href={"/product/" + product.slug}
              key={product.slug}
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-primary bg-primary px-2.5 py-1 text-[10px] font-bold text-on-primary shadow-sm shadow-primary/20">
                    {product.audience}
                  </span>
                  <span className="font-mono text-xs text-zinc-600">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-white group-hover:text-emerald-300">{product.name}</h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-400">{product.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-zinc-200 group-hover:text-emerald-300">
                Lihat profil produk <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}