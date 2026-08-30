import { HeroBanner } from "@/components/sections/hero-banner";

export function TipsTrikView() {
  const cards = [
    {
      title: "Standardisasi Jurnal & Transaksi",
      description: "Membangun disiplin pencatatan harian agar laporan laba rugi dan neraca selalu siap dianalisis.",
    },
    {
      title: "Manajemen Stok & Penyesuaian",
      description: "Metode kontrol pergerakan barang agar mutasi gudang dan nilai persediaan tetap akurat.",
    },
    {
      title: "Efisiensi Tutup Buku Bulanan",
      description: "Langkah terstruktur untuk mempercepat rekonsiliasi bank dan laporan berkala tanpa selisih.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100">
      {/* Hero Tips & Trik */}
      <HeroBanner
        compact
        eyebrow="Wawasan Praktis"
        title="Praktik Terbaik Pengelolaan Keuangan & Pembukuan"
        description="Kumpulan panduan ringkas untuk mempercepat operasional, menstandarkan pencatatan harian, dan memaksimalkan fitur software Zahir."
      />

      {/* Kartu Artikel Tips */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, idx) => (
            <article
              key={card.title}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#12131a] p-7 transition hover:border-emerald-500/40 hover:bg-[#181924]"
            >
              <div>
                <span className="font-mono text-xs text-zinc-500">0{idx + 1}</span>
                <h2 className="mt-3 text-lg font-bold text-white">{card.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
