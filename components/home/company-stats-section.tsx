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
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Fondasi Kuat untuk Bisnis yang Ingin Tumbuh Pasti
          </h2>
          <p className="mt-3 text-base text-body">
            Pengalaman lebih dari 28 tahun membantu bisnis mengotomatisasi transaksi, merapikan pembukuan, dan mengontrol inventori secara akurat.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div className="clean-card p-6" key={stat.label}>
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <h3 className="mt-2 text-base font-semibold text-foreground">{stat.label}</h3>
              <p className="mt-1.5 text-sm text-muted leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-border">
          <span className="text-sm font-semibold text-foreground">Sektor Industri</span>
          {sectors.map((sec, i) => (
            <span key={sec} className="flex items-center text-sm text-muted">
              {i > 0 && <span className="mr-6 size-1 rounded-full bg-border-strong" />}
              {sec}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}