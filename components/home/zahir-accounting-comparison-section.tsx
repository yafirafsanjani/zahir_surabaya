
type PackageKey = "smallBusiness" | "flexyTrade" | "personal" | "standard" | "enterprise";

type ComparisonRow = {
  label: string;
  packages: PackageKey[];
};

type ComparisonGroup = {
  title: string;
  rows: ComparisonRow[];
};

const packages: { key: PackageKey; label: string; training: string }[] = [
  { key: "smallBusiness", label: "Small Business", training: "4 jam" },
  { key: "flexyTrade", label: "Flexy Trade", training: "6 jam" },
  { key: "personal", label: "Personal", training: "6 jam" },
  { key: "standard", label: "Standard", training: "8 jam" },
  { key: "enterprise", label: "Enterprise", training: "15 jam" },
];

const comparisonGroups: ComparisonGroup[] = [
  {
    title: "A. Modul Standar",
    rows: [
      { label: "Transaksi Jasa", packages: ["personal", "standard", "enterprise"] },
      { label: "Inventory", packages: ["smallBusiness", "flexyTrade", "standard", "enterprise"] },
      { label: "Proyek", packages: ["personal", "standard", "enterprise"] },
      { label: "Departemen", packages: ["personal", "standard", "enterprise"] },
      { label: "Fixed Asset", packages: ["personal", "standard", "enterprise"] },
      { label: "Giro Mundur", packages: ["flexyTrade", "personal", "standard", "enterprise"] },
      { label: "Retur", packages: ["standard", "enterprise"] },
      { label: "Assembly", packages: ["standard", "enterprise"] },
      { label: "Disassembly", packages: ["enterprise"] },
      { label: "Inventory Movement", packages: ["standard", "enterprise"] },
      { label: "Kas dan Bank", packages: ["smallBusiness", "flexyTrade", "personal", "standard", "enterprise"] },
      { label: "Rekonsiliasi Bank", packages: ["smallBusiness", "flexyTrade", "personal", "standard", "enterprise"] },
    ],
  },
  {
    title: "B. Fasilitas Data",
    rows: [
      { label: "Klasifikasi Data", packages: ["flexyTrade", "personal", "standard", "enterprise"] },
      { label: "Serial Number", packages: ["flexyTrade", "standard", "enterprise"] },
      { label: "Lot Number", packages: ["enterprise"] },
      { label: "Account Alias Name", packages: ["enterprise"] },
      { label: "Product Alias Name", packages: ["enterprise"] },
      { label: "Grup Barang", packages: ["enterprise"] },
      { label: "Standar Term of Sales", packages: ["enterprise"] },
      { label: "FIFO dan LIFO", packages: ["flexyTrade", "standard", "enterprise"] },
    ],
  },
  {
    title: "C. Fasilitas Multi",
    rows: [
      { label: "Multi Fase Proyek", packages: ["personal", "standard", "enterprise"] },
      { label: "Multi Satuan", packages: ["enterprise"] },
      { label: "Multi Currency", packages: ["enterprise"] },
      { label: "Multi Warehouse", packages: ["enterprise"] },
      { label: "Multi Tax", packages: ["enterprise"] },
      { label: "Multi Price", packages: ["enterprise"] },
      { label: "Multi Discount", packages: ["enterprise"] },
      { label: "Multi Freight", packages: ["enterprise"] },
      { label: "Multi Komisi Penjualan", packages: ["enterprise"] },
      { label: "Multi Biaya Kirim", packages: ["enterprise"] },
      { label: "Multi Delivery Order", packages: ["enterprise"] },
    ],
  },
  {
    title: "D. Fasilitas Laporan",
    rows: [
      { label: "Satuan Laporan", packages: ["enterprise"] },
      { label: "Desain Laporan", packages: ["flexyTrade", "personal", "standard", "enterprise"] },
      { label: "Custom Aging Schedule", packages: ["enterprise"] },
      { label: "Ekspor Laporan", packages: ["smallBusiness", "flexyTrade", "personal", "standard", "enterprise"] },
      { label: "Laporan Bisa Diklik", packages: ["smallBusiness", "flexyTrade", "personal", "standard", "enterprise"] },
      { label: "Faktur Pajak", packages: ["smallBusiness", "flexyTrade", "personal", "standard", "enterprise"] },
    ],
  },
  {
    title: "E. Fasilitas Ekstra",
    rows: [
      { label: "Konsinyasi", packages: ["enterprise"] },
      { label: "Purchase Request", packages: ["enterprise"] },
      { label: "Purchase Order", packages: ["enterprise"] },
      { label: "Sales Quotation", packages: ["enterprise"] },
      { label: "Sales Order", packages: ["enterprise"] },
      { label: "Analisis Bisnis", packages: ["smallBusiness", "flexyTrade", "personal", "standard", "enterprise"] },
      { label: "Reminder", packages: ["smallBusiness", "flexyTrade", "personal", "standard", "enterprise"] },
      { label: "Grafik", packages: ["smallBusiness", "flexyTrade", "personal", "standard", "enterprise"] },
      { label: "Predictive Entry", packages: ["personal", "standard", "enterprise"] },
      { label: "Auto Purchase Order", packages: ["enterprise"] },
    ],
  },
  {
    title: "F. Fasilitas Transaksi Ekstra",
    rows: [
      { label: "Nomor Bukti Transaksi", packages: ["enterprise"] },
      { label: "Delivery Status", packages: ["enterprise"] },
      { label: "Delivery Notes", packages: ["enterprise"] },
      { label: "Distribusi Biaya Impor", packages: ["enterprise"] },
      { label: "Transaksi Berulang", packages: ["flexyTrade", "personal", "standard", "enterprise"] },
      { label: "Final Discount", packages: ["enterprise"] },
      { label: "Produksi", packages: ["enterprise"] },
    ],
  },
];

const brochureBenefits = [
  {
    title: "Keputusan Bisnis Cepat",
    description: "Grafik analisis keuangan fleksibel untuk membaca tren pendapatan dan efisiensi biaya secara visual.",
  },
  {
    title: "Monitoring Real-Time",
    description: "Pantau posisi kas, saldo bank, dan performa laba rugi kapan pun diperlukan secara aman.",
  },
  {
    title: "Antarmuka Sederhana",
    description: "Desain visual yang memudahkan penginputan transaksi tanpa butuh pemahaman akuntansi rumit.",
  },
  {
    title: "Pengawasan Piutang",
    description: "Grafik aging piutang dan reminder jatuh tempo untuk menjaga kesehatan cashflow usaha.",
  },
  {
    title: "Kontrol Stok Akurat",
    description: "Pembaruan saldo stok otomatis setiap ada transaksi beli atau jual, lengkap dengan stock opname.",
  },
  {
    title: "Pelatihan & Layanan Resmi",
    description: "Sesi training menyeluruh dan jaminan pendampingan teknis purna jual dari tim Zahir Surabaya.",
  },
];

const brochureUsers = [
  "Bhakti Karya",
  "d'bestO",
  "Cardig Air & Logistic",
  "Dompet Dhuafa",
  "Rumah Zakat",
  "PT Kapuas Prima Coal",
  "PT Bakrie Metal Industries",
  "Koperasi Syariah AHM Honda",
];

function AvailabilityCell({ included, packageName, featureName }: { included: boolean; packageName: string; featureName: string }) {
  return (
    <td className="border-l border-border px-3 py-2 text-center">
      {included ? (
        <span aria-label={`${featureName} tersedia pada ${packageName}`} className="inline-flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
          <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </span>
      ) : (
        <span aria-label={`${featureName} tidak tercantum`} className="text-muted/30 text-xs">
          -
        </span>
      )}
    </td>
  );
}

export function ZahirAccountingComparisonSection() {
  return (
    <section className="bg-surface-raised py-16 sm:py-20 border-b border-border/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="badge-minimal">Matriks E-Brosur</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Bandingkan Fitur &amp; Modul Zahir 6
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-body">
            Gunakan tabel perbandingan modul resmi untuk memastikan pilihan software sesuai dengan alur kerja tim Anda.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brochureBenefits.map((b, idx) => (
            <div className="clean-card p-5" key={b.title}>
              <span className="text-xs font-mono font-bold text-primary">0{idx + 1}</span>
              <h3 className="mt-2 text-sm font-semibold text-foreground">{b.title}</h3>
              <p className="mt-1 text-xs text-muted leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-hidden rounded-xl border border-border bg-card shadow-xs">
          <div className="flex items-center justify-between border-b border-border bg-surface-raised px-6 py-4">
            <div>
              <p className="text-xs font-bold text-foreground">Tabel Perbandingan Modul Zahir Accounting 6</p>
            </div>
            <span className="text-[11px] text-muted">Geser ke kanan pada layar kecil â†’</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-xs">
              <thead className="bg-surface-muted text-foreground font-semibold border-b border-border">
                <tr>
                  <th className="min-w-64 px-5 py-3 font-semibold">Modul &amp; Fasilitas</th>
                  {packages.map((pkg) => (
                    <th key={pkg.key} className="border-l border-border px-3 py-3 text-center font-semibold">
                      Zahir {pkg.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonGroups.map((group) => (
                  <ComparisonTableGroup group={group} key={group.title} />
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-border bg-surface-muted">
                  <th className="px-5 py-3 text-foreground font-semibold">Durasi Training Resmi</th>
                  {packages.map((pkg) => (
                    <td className="border-l border-border px-3 py-3 text-center font-bold text-primary" key={pkg.key}>
                      {pkg.training}
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Extensions */}
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="clean-card p-6">
            <h3 className="text-sm font-bold text-foreground">Modul Tambahan (Ekstensi)</h3>
            <p className="mt-1 text-xs text-muted">Tersedia integrasi Point of Sale (POS 6) untuk kasir toko ritel dan Zahir Report Server 6 untuk pelaporan terpusat multi-cabang.</p>
          </div>
          <div className="clean-card p-6">
            <h3 className="text-sm font-bold text-foreground">Konsultasi Spesifikasi Khusus</h3>
            <p className="mt-1 text-xs text-muted">Butuh penambahan user multi-user, integrasi database cabang, atau kustomisasi format formulir? Tim Zahir Surabaya siap membantu.</p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider">Dipercaya Oleh Berbagai Perusahaan &amp; Institusi</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {brochureUsers.map((u) => (
              <span key={u} className="rounded-md border border-border bg-surface-raised px-3 py-1 text-xs font-medium text-body">
                {u}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonTableGroup({ group }: { group: ComparisonGroup }) {
  return (
    <>
      <tr className="bg-surface-raised">
        <th className="px-5 py-2.5 text-xs font-bold text-primary" colSpan={packages.length + 1}>
          {group.title}
        </th>
      </tr>
      {group.rows.map((row) => (
        <tr className="hover:bg-surface-raised transition-colors" key={row.label}>
          <th className="px-5 py-2 font-normal text-body">{row.label}</th>
          {packages.map((pkg) => (
            <AvailabilityCell
              featureName={row.label}
              included={row.packages.includes(pkg.key)}
              key={pkg.key}
              packageName={`Zahir ${pkg.label}`}
            />
          ))}
        </tr>
      ))}
    </>
  );
}