import Link from "next/link";
import Image from "next/image";

export function CompanyProfileHeroSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-border/70">
      {/* Background Image with Clean Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          alt="Office desk business background"
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/images/hero-bg.jpg"
        />
        {/* Semi-transparent Backdrop for Contrast & Clean Look */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px] dark:bg-[#090d16]/92" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Reference Layout */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="badge-minimal">Coverage Resmi</span>
              <span className="text-sm font-medium text-body">
                Konsultasi &amp; Demo Sistem{" "}
                <span className="font-bold text-primary">100% Gratis</span>
              </span>
            </div>

            {/* Massive 3-Line Headline */}
            <h1 className="mt-7 text-5xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.02]">
              Software Akuntansi
              <span className="block font-black">Terbaik untuk</span>
              <span className="block font-black text-primary">Bisnis Anda.</span>
            </h1>

            {/* Paragraph Description */}
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg max-w-xl">
              Kelola pencatatan keuangan, kontrol persediaan barang, rekonsiliasi kas/bank, hingga laporan laba rugi otomatis. Dapatkan pendampingan implementasi dan pelatihan staf resmi di Surabaya.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-white transition-all duration-180 hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0"
                href="/product"
              >
                <span>Lihat Solusi</span>
                <span className="text-base font-bold leading-none">↗</span>
              </Link>

              <Link
                className="inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary group"
                href="/contact-us"
              >
                <span>Konsultasi Gratis</span>
                <span className="text-base font-bold transition-transform duration-180 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Trust Metrics */}
            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-border/80 pt-6">
              <div>
                <p className="text-2xl font-black text-foreground">100.000+</p>
                <p className="text-sm font-medium text-muted">Pengguna Bisnis</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="text-2xl font-black text-foreground">28+ Tahun</p>
                <p className="text-sm font-medium text-muted">Inovasi Software</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="text-2xl font-black text-foreground">Official Hub</p>
                <p className="text-sm font-medium text-muted">Surabaya &amp; Jatim</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Layered Dashboard Visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative">
              <Image
                alt="Zahir Accounting Dashboard"
                className="rounded-2xl border border-border shadow-sm"
                width={800}
                height={500}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                src="https://zahiraccounting.com/id/wp-content/uploads/2023/01/Desktop-Hero-Section.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}