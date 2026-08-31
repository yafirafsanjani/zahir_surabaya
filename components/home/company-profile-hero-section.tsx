import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

export const HERO_LOGO_CONFIG = {
  mobileWidth: "100%",   // Ukuran logo pada layar HP / Mobile
  desktopWidth: "140%",  // Ukuran logo pada layar Laptop / Desktop
};

export function CompanyProfileHeroSection() {
  const logoStyle = {
    "--hero-logo-mobile-width": HERO_LOGO_CONFIG.mobileWidth,
    "--hero-logo-desktop-width": HERO_LOGO_CONFIG.desktopWidth,
  } as CSSProperties;

  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background bg-grid-pattern transition-colors duration-200">
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[32rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-8rem] bottom-[-10rem] -z-10 size-80 rounded-full bg-sky-500/10 blur-[110px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8 lg:pt-16 lg:pb-24">
        {/* Kolom Teks Informasi (Kiri) */}
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Company Profile &middot; Zahir Surabaya
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-raised px-3 py-1 text-xs font-bold text-foreground">
              <span className="text-primary font-black">100.000+</span> Pengguna Aktif
            </div>
          </div>

          <h1 className="mt-4 max-w-2xl text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.06]">
            Mengenal Zahir,
            <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 dark:from-blue-400 dark:via-sky-300 dark:to-blue-500 bg-clip-text text-transparent">
              solusi akuntansi untuk bisnis Indonesia.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            PT Zahir Internasional adalah pionir software akuntansi bisnis yang telah dipercaya lebih dari 100.000 perusahaan selama 28 tahun untuk mengelola transaksi, stok, pajak, dan laporan keuangan secara terstruktur.
          </p>
          <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-muted">
            Zahir Surabaya siap menjadi mitra strategis Anda dalam konsultasi varian produk, setup implementasi, pelatihan staf, dan integrasi sistem bisnis di wilayah Jawa Timur.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25"
              href="/product"
            >
              <span>Jelajahi Produk Zahir</span>
              <svg className="size-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              className="rounded-full border border-border bg-surface px-6 py-3 text-xs font-semibold text-foreground shadow-xs transition hover:border-primary/40 hover:bg-surface-raised hover:text-primary"
              href="/contact-us"
            >
              Bicara dengan Zahir Surabaya
            </Link>
          </div>
        </div>

        {/* Kolom Logo Zahir (Kanan, sejajar dengan teks) */}
        <div
          style={logoStyle}
          className="relative z-10 flex min-h-[200px] items-center justify-center lg:min-h-[300px] lg:justify-center"
        >
          <Image
            alt="Logo Zahir"
            className="h-auto w-[var(--hero-logo-mobile-width)] max-w-full shrink-0 object-contain transition-all duration-300 lg:max-w-none lg:w-[var(--hero-logo-desktop-width)] lg:translate-x-10"
            height={360}
            priority
            src="/zahir-logo.svg"
            width={1280}
          />
        </div>
      </div>
    </section>
  );
}

