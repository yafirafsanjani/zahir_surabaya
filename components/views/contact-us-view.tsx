import { HeroBanner } from "@/components/sections/hero-banner";

export function ContactUsView() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Hero Kontak & Konsultasi */}
      <HeroBanner
        compact
        eyebrow="Kontak &amp; Konsultasi"
        title="Mari Diskusikan Kebutuhan Software Bisnis Anda"
        description="Tim Zahir Surabaya siap membantu pemilihan paket produk, migrasi data, upgrade versi, maupun pelatihan staf akuntansi."
      />

      {/* Detail Informasi Kontak & Checklist Persiapan */}
      <section className="bg-background py-16 sm:py-20 lg:py-24 transition-colors duration-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-xs">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Layanan Resmi
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                Cakupan Wilayah Surabaya &amp; Jawa Timur
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                Dukungan teknis responsif dan pendampingan implementasi langsung di lokasi usaha Anda.
              </p>

              <div className="mt-8 space-y-4 text-xs sm:text-sm">
                <div className="rounded-2xl border border-border bg-surface-raised p-5">
                  <p className="font-bold text-foreground">Konsultasi Produk &amp; Demo</p>
                  <p className="mt-1 text-xs text-muted">Eksplorasi fitur, perbandingan modul, dan rekomendasi varian tepat.</p>
                </div>
                <div className="rounded-2xl border border-border bg-surface-raised p-5">
                  <p className="font-bold text-foreground">Dukungan Teknis &amp; Migrasi</p>
                  <p className="mt-1 text-xs text-muted">Pendampingan pengguna Versi 5, Versi 6, dan Zahir Online.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl border border-primary/25 bg-primary/5 dark:bg-primary/10 p-8 sm:p-10 backdrop-blur-xl transition-colors">
              <div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">
                  Persiapan Konsultasi
                </span>
                <h3 className="mt-2 text-xl font-bold text-foreground">
                  Hal yang Dapat Disiapkan
                </h3>
                <ul className="mt-5 space-y-3 text-xs sm:text-sm text-foreground/80">
                  <li className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-primary shrink-0" />
                    <span>Perkiraan jumlah user kasir &amp; staf finance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-primary shrink-0" />
                    <span>Kebutuhan modul utama (kasir POS, inventory multi-gudang, manufaktur)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="size-2 rounded-full bg-primary shrink-0" />
                    <span>Format database eksisting jika ada rencana migrasi data</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-2xl border border-primary/20 bg-card p-5 text-center shadow-xs">
                <p className="text-xs font-semibold text-primary">
                  Kanal komunikasi langsung &amp; formulir akan segera terhubung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

