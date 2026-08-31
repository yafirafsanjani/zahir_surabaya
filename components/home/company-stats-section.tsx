export function CompanyStatsSection() {
  const stats = [
    {
      value: "100.000+",
      label: "Pengguna & Perusahaan",
      description: "Telah dipercaya oleh ratusan ribu pebisnis UKM, startup, hingga korporasi besar di Indonesia.",
    },
    {
      value: "28+ Tahun",
      label: "Dedikasi & Inovasi",
      description: "Konsisten mengembangkan software akuntansi terbaik sejak 1996 di Indonesia dan Asia Tenggara.",
    },
    {
      value: "30+ Kota",
      label: "Jangkauan Layanan & Hub",
      description: "Didukung representasi resmi dan mitra konsultan berpengalaman di seluruh wilayah Nusantara.",
    },
    {
      value: "15+ Penghargaan",
      label: "Prestasi & Sertifikasi",
      description: "Pemenang Juara 1 APICTA (Asia Pacific ICT Awards), Rekor MURI, dan sertifikasi ISO 9001:2015.",
    },
  ];

  const clientHighlights = [
    "Manufaktur & Pabrikasi",
    "Distribusi & Grosir",
    "Kontraktor & Proyek",
    "Ritel & Minimarket",
    "Jasa Profesional & F&B",
    "Klinik & Lembaga Nirlaba",
  ];

  return (
    <section className="border-b border-border bg-surface-raised/60 py-14 sm:py-18 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Kredibilitas */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Kredibilitas &amp; Kepercayaan Pasar
          </div>
          <h2 className="mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Solusi yang Menggerakkan Ratusan Ribu Bisnis di Indonesia
          </h2>
          <p className="mt-2.5 max-w-2xl text-xs leading-relaxed text-muted sm:text-sm">
            PT Zahir Internasional membuktikan komitmen lebih dari dua dekade dalam menghadirkan software akuntansi yang aman, intuitif, dan siap mendukung pertumbuhan usaha di segala skala.
          </p>
        </div>

        {/* Statistik Utama */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div>
                <span className="text-3xl font-black tracking-tight text-primary sm:text-4xl">
                  {stat.value}
                </span>
                <h3 className="mt-2 text-sm font-bold text-foreground">{stat.label}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sektor Industri yang Menggunakan Zahir */}
        <div className="mt-10 rounded-2xl border border-border/80 bg-card p-4 sm:p-5 shadow-xs">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <span className="text-[11px] font-bold tracking-wider text-muted uppercase">
                Sektor Industri yang Didukung:
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {clientHighlights.map((sector) => (
                <span
                  key={sector}
                  className="rounded-xl border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary dark:text-primary-text"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

