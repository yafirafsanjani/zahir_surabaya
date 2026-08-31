import Link from "next/link";

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
    title: "Keputusan bisnis lebih tepat dan cepat",
    description: "Grafik analisis bisnis dibuat lebih fleksibel dan informatif untuk membantu membaca kondisi usaha.",
  },
  {
    title: "Kondisi keuangan terpantau setiap saat",
    description: "Brosur menekankan kemudahan memantau laporan keuangan secara aman saat dibutuhkan.",
  },
  {
    title: "Antarmuka kerja lebih nyaman",
    description: "Tampilan Zahir Accounting 6 dirancang agar pengelolaan bisnis dan laporan terasa lebih mudah.",
  },
  {
    title: "Utang dan piutang lebih terkontrol",
    description: "Reminder dan grafik membantu memantau giro maupun tagihan yang sudah atau mendekati jatuh tempo.",
  },
  {
    title: "Pengelolaan persediaan lengkap",
    description: "Pembelian dan penjualan dapat memperbarui stok serta HPP otomatis, dilengkapi pengelompokan dan stock opname.",
  },
  {
    title: "Training dan layanan purna jual",
    description: "E-brosur mencantumkan training penggunaan dan layanan dukungan sebagai bagian dari pengalaman pelanggan.",
  },
];

const brochureUsers = [
  "Bhakti Karya - Mini Market",
  "d'bestO - Franchise Makanan",
  "Cardig Air & Logistic - Jasa Cargo",
  "Dompet Dhuafa - Yayasan/Lembaga Nirlaba",
  "Rumah Zakat - Yayasan/Lembaga Nirlaba",
  "PT Kapuas Prima Coal - Manufaktur Pertambangan",
  "PT Bakrie Metal Industries - Manufaktur Baja",
  "Koperasi Syariah AHM Honda - Koperasi",
];

function AvailabilityCell({ included, packageName, featureName }: { included: boolean; packageName: string; featureName: string }) {
  return (
    <td className="border-l border-border px-3 py-2.5 text-center">
      {included ? (
        <span aria-label={`${featureName} tersedia pada ${packageName}`} className="inline-flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
          <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </span>
      ) : (
        <span aria-label={`${featureName} tidak tercantum pada ${packageName}`} className="text-muted/45">-</span>
      )}
    </td>
  );
}

export function ZahirAccountingComparisonSection() {
  return (
    <section className="border-b border-border bg-surface-raised py-16 sm:py-20 lg:py-24 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Informasi E-Brosur Zahir Accounting 6
          </div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">Bandingkan modul Zahir Accounting 6 sesuai kebutuhan bisnis.</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Gunakan ringkasan manfaat dan matriks modul berikut untuk memahami perbedaan cakupan paket sebelum berkonsultasi dengan tim Zahir Surabaya.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brochureBenefits.map((benefit, index) => (
            <article key={benefit.title} className="rounded-2xl border border-border bg-card p-5 shadow-xs transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-bold text-primary">0{index + 1}</span>
              <h3 className="mt-4 text-sm font-bold text-foreground">{benefit.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{benefit.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-card shadow-xs">
          <div className="flex flex-col gap-3 border-b border-border px-6 py-6 sm:px-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest text-primary uppercase">Tabel Perbandingan Modul</p>
              <h3 className="mt-1 text-xl font-black tracking-tight text-foreground sm:text-2xl">Matriks produk Zahir Accounting 6</h3>
            </div>
            <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary dark:text-primary-text">Geser tabel ke samping di perangkat mobile</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left text-xs">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="min-w-70 px-5 py-4 text-left text-xs font-bold sm:px-6">Modul &amp; Fasilitas</th>
                  {packages.map((productPackage) => (
                    <th key={productPackage.key} className="min-w-34 border-l border-white/20 px-3 py-4 text-center text-xs font-bold leading-snug">
                      Zahir {productPackage.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonGroups.map((group) => (
                  <ComparisonTableGroup group={group} key={group.title} />
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-border bg-surface-muted">
                  <th className="px-5 py-4 text-left text-xs font-bold text-foreground sm:px-6">Durasi training dalam e-brosur</th>
                  {packages.map((productPackage) => (
                    <td className="border-l border-border px-3 py-4 text-center text-xs font-black text-primary" key={productPackage.key}>
                      {productPackage.training}
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="border-t border-border bg-surface-raised px-6 py-4 text-[11px] leading-relaxed text-muted sm:px-8">
            Tanda centang menunjukkan modul yang tercantum pada matriks E-Brosur Zahir Accounting 6. Harga pada brosur tidak ditampilkan di tabel ini karena harga dan ketentuan paket dapat berubah; gunakan harga pada katalog di atas atau hubungi tim Zahir Surabaya untuk konfirmasi terbaru.
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl border border-border bg-card p-6 shadow-xs sm:p-8">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Tambahan yang tercantum di brosur</p>
            <h3 className="mt-2 text-xl font-black tracking-tight text-foreground">Ekstensi untuk kebutuhan operasional.</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface-raised p-4">
                <p className="text-sm font-bold text-foreground">Zahir Point of Sale (POS) 6</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">Tambahan untuk mendukung aktivitas kasir dan penjualan ritel.</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface-raised p-4">
                <p className="text-sm font-bold text-foreground">Zahir Report Server 6</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">Tambahan untuk kebutuhan distribusi serta penyajian laporan bisnis.</p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-primary/25 bg-primary/5 p-6 sm:p-8 dark:bg-primary/10">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Catatan Paket Small Business</p>
            <h3 className="mt-2 text-xl font-black tracking-tight text-foreground">Batasan yang tercantum pada e-brosur.</h3>
            <ul className="mt-5 space-y-2.5 text-xs leading-relaxed text-foreground/80">
              <li className="flex gap-2"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />Tidak dapat mengatur klasifikasi akun.</li>
              <li className="flex gap-2"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />Maksimal 5 user concurrent.</li>
              <li className="flex gap-2"><span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />Maksimal omzet penjualan Rp100 juta, 1.000 item barang, dan 1.000 transaksi.</li>
            </ul>
          </article>
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-xs sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest text-primary uppercase">Beberapa Pengguna Zahir di E-Brosur</p>
              <h3 className="mt-2 text-xl font-black tracking-tight text-foreground">Digunakan di beragam jenis organisasi.</h3>
            </div>
            <Link className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-primary-hover hover:shadow-md hover:shadow-primary/20" href="/contact-us">
              Konsultasikan Paket Anda
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {brochureUsers.map((user) => (
              <div key={user} className="rounded-xl border border-border bg-surface-raised px-3 py-2.5 text-xs font-medium leading-relaxed text-foreground/80">
                {user}
              </div>
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
      <tr className="bg-surface-muted">
        <th className="px-5 py-3 text-left text-xs font-black text-foreground sm:px-6" colSpan={packages.length + 1}>{group.title}</th>
      </tr>
      {group.rows.map((row) => (
        <tr className="border-t border-border/80 transition hover:bg-primary/5" key={row.label}>
          <th className="px-5 py-2.5 text-left text-xs font-medium text-foreground/85 sm:px-6">{row.label}</th>
          {packages.map((productPackage) => (
            <AvailabilityCell
              featureName={row.label}
              included={row.packages.includes(productPackage.key)}
              key={productPackage.key}
              packageName={`Zahir ${productPackage.label}`}
            />
          ))}
        </tr>
      ))}
    </>
  );
}
