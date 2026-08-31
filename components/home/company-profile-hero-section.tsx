import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

/**
 * ============================================================================
 * PENGATURAN UKURAN LOGO HERO (Bisa Anda ganti-ganti nilainya di sini)
 * ============================================================================
 * Anda bisa mengubah ukuran logo sesuai kebutuhan:
 * - Persentase: "100%", "110%", "120%", "130%", dll.
 * - Ukuran pixel: "360px", "420px", "480px", "520px", dll.
 */
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
    <section className="relative isolate overflow-hidden border-b border-white/[0.07] bg-grid-pattern">
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[32rem] w-[40rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-8rem] bottom-[-10rem] -z-10 size-80 rounded-full bg-teal-500/10 blur-[110px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 pt-6 pb-14 sm:pt-8 sm:pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8 lg:pt-8 lg:pb-18">
        {/* Kolom Teks Informasi (Kiri) */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Company Profile Â· Zahir Surabaya
          </div>
          <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.06]">
            Mengenal Zahir,
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
              solusi akuntansi untuk bisnis Indonesia.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Zahir adalah ekosistem software akuntansi dan manajemen bisnis yang membantu perusahaan mengelola transaksi, persediaan, serta laporan keuangan dengan lebih terstruktur.
          </p>
          <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-zinc-400">
            Beranda ini merangkum perjalanan Zahir, pilihan produknya, dan bagaimana Zahir Surabaya dapat menjadi titik awal untuk konsultasi kebutuhan bisnis Anda.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-xs font-bold text-zinc-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400 hover:shadow-emerald-500/35"
              href="/product"
            >
              Jelajahi Produk Zahir
              <span className="transition-transform group-hover:translate-x-1">â†’</span>
            </Link>
            <Link
              className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-xs font-semibold text-zinc-200 transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
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
            className="h-auto w-[var(--hero-logo-mobile-width)] max-w-full shrink-0 object-contain transition-all duration-300 lg:max-w-none lg:w-[var(--hero-logo-desktop-width)] lg:translate-x-15"
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