export function CompanyStatsSection() {
  const stats = [
    { value: "100.000+", label: "Pengguna & Perusahaan", detail: "Dipercaya dari skala UMKM hingga holding enterprise di seluruh Indonesia." },
    { value: "1996", label: "Awal Inovasi", detail: "Dedikasi berkelanjutan mengembangkan software akuntansi yang mudah digunakan." },
    { value: "30+", label: "Kota Layanan", detail: "Representasi dan pendampingan implementasi langsung yang dekat dengan usaha Anda." },
    { value: "ISO", label: "Standar Mutu", detail: "Sertifikasi mutu proses dan jaminan layanan purna jual yang terstandarisasi." },
  ];

  const sectors = ["Ritel & Swalayan", "Manufaktur", "Distribusi & Grosir", "Jasa Profesional", "Konstruksi & Proyek", "Yayasan / Nirlaba"];

  return (
    <section className="bg-surface-raised py-16 sm:py-20 border-b border-border/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="badge-minimal">Kepercayaan Pasar</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Fondasi Kuat untuk Bisnis yang Ingin Tumbuh Pasti
          </h2>
          <p className="mt-2 text-sm text-body">
            Pengalaman lebih dari 28 tahun membantu bisnis mengotomatisasi transaksi, merapikan pembukuan, dan mengontrol inventori secara akurat.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div className="clean-card p-5" key={stat.label}>
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <h3 className="mt-2 text-sm font-semibold text-foreground">{stat.label}</h3>
              <p className="mt-1.5 text-xs text-muted leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-border">
          <span className="text-xs font-semibold text-muted mr-2">Sektor Industri:</span>
          {sectors.map((sec) => (
            <span
              key={sec}
              className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-body font-medium transition hover:border-primary/40 hover:text-foreground"
            >
              {sec}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}