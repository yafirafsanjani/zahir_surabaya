import Link from "next/link";

const features = [
  {
    title: "Keuangan & Laporan Akuntansi",
    description: "Pembelian, kas & bank, jurnal umum, buku besar, neraca saldo, laba rugi, dan arus kas otomatis tersusun dari aktivitas harian.",
    target: "Cocok untuk: Usaha yang membutuhkan laporan keuangan terstandar, cepat, dan siap audit.",
  },
  {
    title: "Stok Gudang & Operasional Dagang",
    description: "Kontrol stok multi-gudang, batch number, serial number, stock opname, perhitungan HPP otomatis, dan purchase order.",
    target: "Cocok untuk: Ritel, distributor, toko grosir, dan usaha manufaktur.",
  },
  {
    title: "Proyek, Aset, & Skala Enterprise",
    description: "Fasilitas profit center per proyek, depresiasi aset tetap, multi-cabang, otorisasi berjenjang, dan integrasi departemen.",
    target: "Cocok untuk: Kontraktor, jasa konsultasi, holding company, dan korporasi.",
  },
];

export function ZahirAccountingFeaturesSection() {
  return (
    <section className="bg-surface-raised py-16 sm:py-20 border-b border-border/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="badge-minimal">Pilar Keunggulan</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Modul Terstruktur Sesuai Tahapan Usaha
            </h2>
          </div>
          <Link className="btn-secondary self-start sm:self-auto" href="/product">
            <span>Bandingkan Semua Varian</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feat, idx) => (
            <div className="clean-card flex flex-col justify-between p-6" key={feat.title}>
              <div>
                <span className="text-sm font-mono font-bold text-primary">0{idx + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{feat.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-body leading-relaxed">{feat.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-sm text-muted font-medium">
                {feat.target}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}