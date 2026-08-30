import Link from "next/link";

export function CompanyProfileCallToActionSection() {
  return (
    <section className="border-b border-white/[0.07] bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-emerald-950/20 px-8 py-10 text-center sm:px-16 sm:py-14">
          <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-50" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-emerald-300 uppercase">Langkah Berikutnya</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Mulai dari mengenal produk, lanjutkan dengan percakapan yang tepat.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              Jelajahi portofolio Zahir untuk menemukan fokus solusi yang paling relevan, atau hubungi tim Zahir Surabaya untuk membahas kebutuhan bisnis Anda.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link className="rounded-full bg-emerald-500 px-5 py-3 text-xs font-bold text-zinc-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400" href="/product">
                Lihat Semua Produk
              </Link>
              <Link className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-xs font-semibold text-zinc-100 transition hover:border-white/30 hover:bg-white/[0.08]" href="/contact-us">
                Hubungi Zahir Surabaya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}