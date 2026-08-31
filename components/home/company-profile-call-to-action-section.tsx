import Link from "next/link";

export function CompanyProfileCallToActionSection() {
  return (
    <section className="border-b border-border bg-surface-raised py-16 sm:py-20 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-primary/5 dark:bg-primary/10 px-8 py-12 text-center sm:px-16 sm:py-16 transition-colors">
          <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-40" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Langkah Berikutnya</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Mulai dari mengenal produk, lanjutkan dengan percakapan yang tepat.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Jelajahi portofolio Zahir untuk menemukan fokus solusi yang paling relevan, atau hubungi tim Zahir Surabaya untuk membahas kebutuhan bisnis Anda.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link className="rounded-full bg-primary px-6 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20" href="/product">
                Lihat Semua Produk
              </Link>
              <Link className="rounded-full border border-border bg-surface px-6 py-3 text-xs font-semibold text-foreground shadow-xs transition hover:border-primary/40 hover:bg-surface-raised hover:text-primary" href="/contact-us">
                Hubungi Zahir Surabaya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

