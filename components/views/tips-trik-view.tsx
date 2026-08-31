import { HeroBanner } from "@/components/sections/hero-banner";

export function TipsTrikView() {
  const cards = [
    {
      title: "Otomatisasi Laporan Keuangan",
      description: "Menghubungkan alur transaksi kas, bank, dan penjualan agar laporan laba rugi tersaji akurat setiap akhir periode.",
    },
    {
      title: "Kontrol Stok & Nomor Seri Barang",
      description: "Praktik pelacakan mutasi barang gudang dan pencatatan serial number untuk meminimalkan selisih stok.",
    },
    {
      title: "Manajemen Piutang Usaha Tepat Waktu",
      description: "Pemanfaatan fitur aging piutang dan reminder penagihan pelanggan untuk menjaga kesehatan arus kas bisnis.",
    },
  ];

  return (
    <div className="min-h-screen text-foreground">
      {/* Hero Tips & Trik */}
      <HeroBanner
        compact
        eyebrow="Wawasan Praktis"
        title="Praktik Terbaik Pengelolaan Keuangan &amp; Pembukuan"
        description="Kumpulan panduan ringkas untuk mempercepat operasional, menstandarkan pencatatan harian, dan memaksimalkan fitur software Zahir."
      />

      {/* Kartu Artikel Tips */}
      <section className="bg-background py-16 sm:py-20 lg:py-24 transition-colors duration-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card, idx) => (
              <article
                key={card.title}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div>
                  <span className="inline-flex size-7 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-bold text-primary">0{idx + 1}</span>
                  <h2 className="mt-4 text-lg font-bold text-foreground">{card.title}</h2>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

