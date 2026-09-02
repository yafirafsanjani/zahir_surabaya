import { HeroBanner } from "@/components/sections/hero-banner";

export function ContactUsView() {
  return (
    <div className="min-h-screen text-foreground">
      <HeroBanner
        compact
        eyebrow="Kontak &amp; Konsultasi"
        title="Hubungi Perwakilan Resmi Zahir Surabaya"
        description="Tim konsultan kami siap membantu pemilihan varian software, migrasi data, upgrade lisensi, serta pelatihan staf langsung di kantor Anda."
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="clean-card p-6 sm:p-8">
              <span className="badge-minimal">Layanan Resmi Jawa Timur</span>
              <h2 className="mt-3 text-xl font-bold text-foreground">
                Cakupan Layanan Surabaya &amp; Sekitarnya
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
                Dukungan teknis responsif dan pendampingan implementasi langsung di lokasi usaha Anda di Surabaya, Sidoarjo, Gresik, Malang, dan kota lainnya.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-lg border border-border bg-surface-raised p-4">
                  <p className="text-xs font-semibold text-foreground">1. Konsultasi Paket &amp; Presentasi Demo</p>
                  <p className="mt-1 text-xs text-muted">Eksplorasi fitur, perbandingan modul, dan rekomendasi paket yang paling efisien.</p>
                </div>
                <div className="rounded-lg border border-border bg-surface-raised p-4">
                  <p className="text-xs font-semibold text-foreground">2. Setup, Migrasi Data, &amp; Pelatihan</p>
                  <p className="mt-1 text-xs text-muted">Pendampingan pengguna Versi 5, Versi 6 desktop, maupun migrasi ke Zahir Online cloud.</p>
                </div>
              </div>
            </div>

            <div className="clean-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="badge-minimal">Persiapan Konsultasi</span>
                <h3 className="mt-3 text-xl font-bold text-foreground">
                  Informasi yang Membantu Diskusi
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
                  Untuk mempercepat proses konsultasi, Anda dapat menyiapkan poin-poin dasar berikut:
                </p>

                <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-body">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary" />
                    <span>Perkiraan jumlah user kasir, staf gudang, dan finance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary" />
                    <span>Kebutuhan modul utama (kasir POS, inventory, manufaktur)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary" />
                    <span>Format database pembukuan yang saat ini digunakan</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-lg border border-border bg-surface-raised p-4 text-center">
                <p className="text-xs font-medium text-primary">
                  Silakan hubungi kontak resmi kami untuk menjadwalkan pertemuan hari ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}