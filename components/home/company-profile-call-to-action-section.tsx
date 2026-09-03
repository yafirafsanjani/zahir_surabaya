import Link from "next/link";

export function CompanyProfileCallToActionSection() {
  return (
    <section className="bg-primary text-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Siap Merapikan Pembukuan Bisnis Anda?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/85 leading-relaxed">
              Konsultasikan kebutuhan software akuntansi bersama tim representasi resmi Zahir di Surabaya.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary transition hover:bg-red-50 shadow-xs"
              href="/contact-us"
            >
              <span>Jadwalkan Konsultasi</span>
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/10"
              href="/product"
            >
              Lihat Produk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}