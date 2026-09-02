const highlights = [
  {
    title: "Alur Kerja Praktis & Terintegrasi",
    description: "Semua alur dari order pembelian, penerimaan gudang, kas/bank, hingga penjualan terhubung otomatis ke jurnal pembukuan.",
  },
  {
    title: "Laporan Keuangan Cepat & Akurat",
    description: "Dapatkan laporan laba rugi, neraca saldo, arus kas, dan analisis piutang usaha secara real-time kapan pun dibutuhkan.",
  },
  {
    title: "Pendampingan Resmi di Surabaya",
    description: "Tim ahli Zahir Surabaya siap mendampingi kebutuhan setup COA, migrasi data, serta pelatihan operator dan staf akuntansi Anda.",
  },
];

export function CompanyOverviewSection() {
  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="badge-minimal">Tentang Zahir</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Mengubah Transaksi Harian Menjadi Keputusan Bisnis yang Jelas.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-body sm:text-base">
            PT Zahir Internasional berdedikasi membangun software akuntansi bisnis yang menyatukan pencatatan keuangan, kontrol stok multi-gudang, dan pengawasan operasional ke dalam satu sistem yang mudah digunakan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item, idx) => (
            <div className="clean-card p-6" key={item.title}>
              <div className="flex size-7 items-center justify-center rounded-md bg-primary-soft text-xs font-bold text-primary font-mono">
                0{idx + 1}
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}