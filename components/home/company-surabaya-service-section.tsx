import Link from "next/link";

const services = [
  {
    title: "Konsultasi Paket & Modul",
    desc: "Penyesuaian varian software dengan model bisnis, jumlah user, dan kompleksitas operasional.",
  },
  {
    title: "Setup COA & Saldo Awal",
    desc: "Perancangan struktur bagan akun, master data persediaan, dan format formulir transaksi bisnis.",
  },
  {
    title: "Migrasi & Implementasi",
    desc: "Pendampingan pemindahan database historis dan konfigurasi multi-user di jaringan lokal kantor.",
  },
  {
    title: "Pelatihan & Dukungan Teknis",
    desc: "Training operator finance, panduan tutup buku bulanan, dan bantuan teknis responsif.",
  },
];

export function CompanySurabayaServiceSection() {
  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="badge-minimal">Pendampingan Ahli</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Implementasi Tepat untuk Hasil Maksimal
            </h2>
          </div>
          <Link className="btn-primary self-start sm:self-auto" href="/contact-us">
            <span>Diskusikan Kebutuhan</span>
            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((item, idx) => (
            <div className="clean-card p-6" key={item.title}>
              <span className="text-xs font-mono font-bold text-primary">0{idx + 1}</span>
              <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}