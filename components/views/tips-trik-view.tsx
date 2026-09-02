import { HeroBanner } from "@/components/sections/hero-banner";

export function TipsTrikView() {
  const cards = [
    {
      title: "Otomatisasi Laporan Keuangan",
      description: "Menghubungkan alur transaksi kas, bank, dan penjualan agar laporan neraca serta laba rugi tersaji otomatis secara real-time.",
    },
    {
      title: "Kontrol Stok & Nomor Seri Barang",
      description: "Praktik pelacakan mutasi barang gudang, stock opname berkala, dan pencatatan serial number untuk mencegah selisih stok.",
    },
    {
      title: "Manajemen Piutang Usaha Tepat Waktu",
      description: "Pemanfaatan fitur aging piutang dan reminder penagihan pelanggan untuk menjaga kesehatan arus kas bisnis.",
    },
  ];

  return (
    <div className="min-h-screen text-foreground">
      <HeroBanner
        compact
        eyebrow="Wawasan &amp; Praktik Terbaik"
        title="Praktik Efektif Pengelolaan Keuangan &amp; Pembukuan"
        description="Kumpulan panduan ringkas untuk mempercepat operasional, menstandarkan pencatatan harian, dan memaksimalkan fitur software Zahir."
        primaryAction={{ href: "/contact-us", label: "Konsultasi Pembukuan" }}
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card, idx) => (
              <div key={card.title} className="clean-card p-6">
                <span className="text-xs font-mono font-bold text-primary">0{idx + 1}</span>
                <h2 className="mt-3 text-base font-semibold text-foreground">{card.title}</h2>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}