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
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/95 px-3 py-1 text-xs shadow-2xs backdrop-blur-sm">
              <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                RESMI JATIM
              </span>
              <span className="text-muted text-[11px] font-medium">
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
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-primary/25 transition-all duration-180 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0"
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
                <p className="text-xs font-medium text-muted">Pengguna Bisnis</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="text-2xl font-black text-foreground">28+ Tahun</p>
                <p className="text-xs font-medium text-muted">Inovasi Software</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="text-2xl font-black text-foreground">Official Hub</p>
                <p className="text-xs font-medium text-muted">Surabaya &amp; Jatim</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Layered Dashboard Visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative space-y-4">
              {/* Main Card */}
              <div className="rounded-2xl border border-border bg-card/95 p-6 shadow-xl shadow-primary/5 transition hover:border-primary/30 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-border/60 pb-3.5">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
                      ZS
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">Zahir Accounting 6</p>
                      <p className="text-[10px] text-muted">Ringkasan Finansial Real-Time</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                    ● Sistem Aktif
                  </span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-surface-raised p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted">Saldo Kas &amp; Bank</p>
                    <p className="mt-1 text-2xl font-black text-foreground">Rp 184,5 jt</p>
                    <p className="mt-1 text-[11px] font-semibold text-primary">↑ 18,4% bulan ini</p>
                  </div>

                  <div className="rounded-xl border border-border bg-surface-raised p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted">Laba Bersih</p>
                    <p className="mt-1 text-2xl font-black text-primary">Rp 92,4 jt</p>
                    <p className="mt-1 text-[11px] font-medium text-muted">Margin 25,1%</p>
                  </div>
                </div>

                {/* Minimal Chart Bar */}
                <div className="mt-4 rounded-xl border border-border bg-surface-raised p-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-foreground">Grafik Arus Kas &amp; Penjualan</span>
                    <span className="text-[11px] text-muted">2026</span>
                  </div>
                  <div className="mt-4 flex h-20 items-end gap-2 px-1">
                    {[40, 65, 50, 85, 70, 95, 80, 100].map((h, i) => (
                      <div className="flex flex-1 flex-col items-center gap-1" key={i}>
                        <div
                          className="w-full rounded-t bg-primary transition-all duration-200 hover:bg-primary-hover"
                          style={{ height: `${h}%`, opacity: 0.4 + i * 0.08 }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Sub Card */}
              <div className="rounded-xl border border-border bg-card/95 p-4 shadow-lg sm:flex sm:items-center sm:justify-between backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary-soft text-primary font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Pendampingan Onsite &amp; Remote</p>
                    <p className="text-[11px] text-muted">Setup Chart of Accounts &amp; Pelatihan Staf</p>
                  </div>
                </div>
                <span className="mt-2 sm:mt-0 text-[11px] font-bold text-primary">
                  Surabaya &amp; Jatim
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}