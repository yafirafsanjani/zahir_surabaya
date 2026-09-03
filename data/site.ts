export type NavigationItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type PricingMode = "subscription" | "license" | "contact";

export type FeatureItem = {
  name: string;
  included?: boolean;
};

export type ComparisonGroup = {
  title: string;
  features: FeatureItem[];
};

export type Plan = {
  slug: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  recommendedFor?: string;
  price: string;
  pricePeriod?: string;
  priceNote?: string;
  users: string;
  description: string;
  features: string[];
  cta: { label: string; href: string; variant?: "primary" | "secondary" };
  highlights?: string[];
};

export type Recommendation = {
  businessType: string;
  icon: string;
  planSlug: string;
  reason: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type PlanDetail = {
  slug: string;
  name: string;
  tagline: string;
  valueProposition: string;
  price: string;
  pricePeriod?: string;
  priceNote?: string;
  users: string;
  highlights: { title: string; description: string }[];
  features: string[];
  comparison: ComparisonGroup[];
  specifications: { label: string; value: string }[];
  support: string[];
  faq: FaqItem[];
  cta: { label: string; href: string };
};

export type PricingSection = {
  mode: PricingMode;
  title: string;
  description: string;
  plans: Plan[];
  planDetails: PlanDetail[];
  comparison?: ComparisonGroup[];
  addons?: { label: string; price: string; note?: string }[];
};

export type ProductCategory = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  hero: string;
  icon: string;
  color: string;
  pricingIntro: string;
  pricingIntroDescription: string;
  pricingSections: PricingSection[];
  recommendations: Recommendation[];
  faq?: FaqItem[];
  screenshots?: string[];
  notes?: string[];
};

export type SupportVersion = {
  name: string;
  slug: string;
  description: string;
};

export const productCategories: ProductCategory[] = [
  {
    name: "Zahir Accounting",
    slug: "zahir-accounting",
    tagline: "Aplikasi Keuangan & Bisnis Hybrid Pertama di Indonesia",
    description:
      "Software akuntansi yang memadukan kekuatan online dan offline, dirancang untuk membantu UMKM hingga enterprise mencatat transaksi, mengelola keuangan, dan mengambil keputusan berbasis data.",
    hero:
      "Kelola keuangan bisnis Anda dengan mudah — pencatatan transaksi, persediaan, kas & bank, hingga laporan keuangan lengkap dalam satu aplikasi hybrid yang bekerja online maupun offline.",
    icon: "calculator",
    color: "#e33a33",
    pricingIntro:
      "Pilih model pembayaran yang paling sesuai — berlangganan untuk fleksibilitas atau beli putus untuk kepemilikan penuh.",
    pricingIntroDescription:
      "Semua paket Zahir Accounting tersedia dalam model Berlangganan maupun Beli Putus. Pilih yang paling cocok: berlangganan untuk fleksibilitas dan perangkat selalu terbaru, atau beli putus untuk kepemilikan lisensi penuh.",
    recommendations: [
      {
        businessType: "UMKM & Bisnis Pemula",
        icon: "users",
        planSlug: "small-business",
        reason:
          "Cocok untuk bisnis yang baru memulai pembukuan digital dan membutuhkan fitur akuntansi dasar.",
      },
      {
        businessType: "Usaha Jasa & Nirlaba",
        icon: "briefcase",
        planSlug: "personal",
        reason:
          "Cocok untuk usaha jasa, yayasan, organisasi, atau bisnis yang membutuhkan pengelolaan proyek dan laporan.",
      },
      {
        businessType: "Dagang & Distribusi",
        icon: "shopping-cart",
        planSlug: "flexy-trade",
        reason:
          "Cocok untuk bisnis perdagangan dan distribusi yang membutuhkan pengelolaan persediaan lebih lengkap.",
      },
      {
        businessType: "Bisnis Berkembang",
        icon: "building",
        planSlug: "standard",
        reason:
          "Pilih paket yang sesuai kebutuhan operasional dan kompleksitas bisnis yang semakin berkembang.",
      },
      {
        businessType: "Perusahaan Besar & Kompleks",
        icon: "landmark",
        planSlug: "enterprise",
        reason:
          "Cocok untuk perusahaan dengan kebutuhan multi-gudang, multi-cabang, manufaktur, procurement, dan pengelolaan bisnis yang kompleks.",
      },
    ],
    pricingSections: [
      {
        mode: "subscription",
        title: "Berlangganan",
        description: "Bayar per bulan atau per tahun, selalu dapat versi terbaru dan dukungan berkelanjutan.",
        plans: [
          {
            slug: "small-business",
            name: "Small Business",
            tagline: "Solusi Awal Bisnis & UMKM",
            price: "Rp 150.000",
            pricePeriod: "/bulan",
            priceNote: "Harga mulai dari, 1 user",
            users: "1 User",
            description:
              "Paket akuntansi dasar untuk memulai pencatatan keuangan bisnis Anda dengan sederhana dan cepat.",
            features: [
              "Pencatatan transaksi keuangan",
              "Kas & bank",
              "Persediaan dasar",
              "Pelaporan keuangan",
              "Training & support",
            ],
            cta: { label: "Mulai Berlangganan", href: "/contact-us", variant: "secondary" },
          },
          {
            slug: "professional",
            name: "Professional",
            tagline: "Best for Business yang Tumbuh",
            popular: true,
            price: "Rp 878.750",
            pricePeriod: "/bulan",
            priceNote: "Harga mulai dari, 3 user",
            users: "3 User",
            description:
              "Paket akuntansi lengkap untuk bisnis yang terus berkembang dengan kebutuhan pencatatan lebih kompleks.",
            features: [
              "Semua fitur Small Business",
              "Persediaan & proyek",
              "Multi user hingga 3",
              "Fitur akuntansi lengkap",
              "Support prioritas",
            ],
            cta: { label: "Mulai Berlangganan", href: "/contact-us", variant: "primary" },
          },
          {
            slug: "zahir-erp",
            name: "ZahirERP",
            tagline: "Untuk Perusahaan Besar & Kompleks",
            price: "Rp 17 Juta",
            pricePeriod: "/tahun",
            priceNote: "Harga mulai dari, 5 user",
            users: "5 User",
            description:
              "Solusi ERP untuk trade/retail/distribution, manufaktur, yayasan/non-profit, dan kontraktor.",
            features: [
              "Manajemen inventori lengkap",
              "Multi cabang & multi gudang",
              "Manufaktur & produksi",
              "Procurement & konsinyasi",
              "Custom report",
            ],
            cta: { label: "Mulai Berlangganan", href: "/contact-us", variant: "secondary" },
          },
        ],
        planDetails: [
          {
            slug: "small-business",
            name: "Zahir Accounting Small Business",
            tagline: "Solusi Awal Bisnis",
            valueProposition:
              "Mulai pencatatan keuangan digital dengan mudah. Khusus untuk UMKM dan bisnis awal yang membutuhkan pembukuan sederhana namun akurat.",
            price: "Rp 150.000",
            pricePeriod: "/bulan",
            users: "1 User",
            highlights: [
              { title: "Pencatatan Praktis", description: "Input transaksi pembelian dan penjualan harian dengan cepat." },
              { title: "Kas & Bank", description: "Kelola aliran kas, mutasi bank, dan rekonsiliasi dengan mudah." },
              { title: "Persediaan Dasar", description: "Pantau stok barang dan nilai persediaan secara sederhana." },
              { title: "Laporan Keuangan", description: "Laporan laba rugi dan neraca otomatis untuk keputusan bisnis." },
            ],
            features: [
              "Pembelian & Penjualan Barang",
              "Mengelola Hutang-Piutang",
              "Kas & Bank",
              "Rekonsiliasi Bank",
              "Customer Payment",
              "Payment to Supplier",
              "Persediaan Barang",
              "Business Analysis",
              "Reminder",
              "Grafik",
              "Ekspor Laporan",
              "Laporan Bisa Diklik",
              "Faktur Pajak",
            ],
            comparison: [
              {
                title: "Transaksi & Persediaan",
                features: [
                  { name: "Pembelian & penjualan barang", included: true },
                  { name: "Kas dan bank", included: true },
                  { name: "Rekonsiliasi bank", included: true },
                  { name: "Persediaan barang", included: true },
                  { name: "Nomor seri barang", included: false },
                ],
              },
              {
                title: "Laporan & Analisis",
                features: [
                  { name: "Ekspor laporan", included: true },
                  { name: "Laporan bisa diklik", included: true },
                  { name: "Faktur pajak", included: true },
                  { name: "Analisis bisnis", included: true },
                  { name: "Desain laporan kustom", included: false },
                ],
              },
            ],
            specifications: [
              { label: "Jumlah User", value: "1 User" },
              { label: "Model Pembayaran", value: "Berlangganan" },
              { label: "Billing Period", value: "Per bulan" },
              { label: "Rekomendasi untuk", value: "UKM & bisnis awal" },
              { label: "Mode Operasi", value: "Hybrid (online & offline)" },
            ],
            support: [
              "Training pengenalan produk",
              "Support by phone",
              "Panduan & basis pengetahuan",
              "Update versi terbaru",
            ],
            faq: [
              { q: "Apakah bisa offline?", a: "Ya, Zahir Accounting bersifat hybrid sehingga tetap bisa digunakan saat tidak ada koneksi internet." },
              { q: "Berapa user yang didapat?", a: "Paket Small Business mencakup 1 user." },
              { q: "Apakah ada biaya tambahan?", a: "Harga sudah termasuk biaya berlangganan. Opsional menambah add-on seperti Zahir HR atau POSX." },
            ],
            cta: { label: "Mulai Berlangganan", href: "/contact-us" },
          },
          {
            slug: "professional",
            name: "Zahir Accounting Professional",
            tagline: "Best for Business yang Tumbuh",
            valueProposition:
              "Paket akuntansi lengkap dengan fitur komprehensif dan dukungan multi-user — ideal untuk bisnis yang semakin kompleks.",
            price: "Rp 878.750",
            pricePeriod: "/bulan",
            users: "3 User",
            highlights: [
              { title: "Multi User", description: "Sampai 3 user dapat mengerjakan pencatatan secara bersamaan." },
              { title: "Fitur Lengkap", description: "Semua fitur Small Business plus modul persediaan dan proyek." },
              { title: "Persediaan & Proyek", description: "Kontrol stok lengkap dan pelacakan biaya proyek/departemen." },
              { title: "Laporan Komprehensif", description: "Desain laporan kustom dan analisis bisnis yang mendalam." },
            ],
            features: [
              "Semua fitur Small Business",
              "Persediaan barang lengkap",
              "Mengelola Hutang-Piutang",
              "Proyek & Departemen",
              "Fixed Asset",
              "Rekonsiliasi Bank",
              "Reminder & Grafik",
              "Desain Laporan",
              "Transaksi Berulang",
              "Ekspor Laporan",
              "Multi user hingga 3",
              "Analisis Bisnis",
            ],
            comparison: [
              {
                title: "Transaksi & Persediaan",
                features: [
                  { name: "Pembelian & penjualan barang", included: true },
                  { name: "Kas dan bank", included: true },
                  { name: "Rekonsiliasi bank", included: true },
                  { name: "Persediaan barang lengkap", included: true },
                  { name: "Proyek & departemen", included: true },
                  { name: "Fixed asset", included: true },
                ],
              },
              {
                title: "Laporan & Analisis",
                features: [
                  { name: "Desain laporan kustom", included: true },
                  { name: "Analisis bisnis", included: true },
                  { name: "Reminder & Grafik", included: true },
                  { name: "Transaksi berulang", included: true },
                  { name: "Predictive entry", included: true },
                ],
              },
            ],
            specifications: [
              { label: "Jumlah User", value: "3 User" },
              { label: "Model Pembayaran", value: "Berlangganan" },
              { label: "Billing Period", value: "Per bulan" },
              { label: "Rekomendasi untuk", value: "Bisnis yang tumbuh" },
              { label: "Mode Operasi", value: "Hybrid (online & offline)" },
            ],
            support: [
              "Training pengenalan produk",
              "Support by phone prioritas",
              "Panduan & basis pengetahuan",
              "Update versi terbaru",
            ],
            faq: [
              { q: "Berapa user yang didapat?", a: "Paket Professional mencakup 3 user." },
              { q: "Apakah mendukung multi cabang?", a: "Fitur multi cabang tersedia pada level ZahirERP / Enterprise." },
              { q: "Apakah harga sudah termasuk training?", a: "Harga sudah termasuk training pengenalan produk dan dukungan." },
            ],
            cta: { label: "Mulai Berlangganan", href: "/contact-us" },
          },
          {
            slug: "zahir-erp",
            name: "ZahirERP",
            tagline: "Untuk Perusahaan Besar & Kompleks",
            valueProposition:
              "Solusi ERP skala enterprise yang mengintegrasikan seluruh operasi bisnis dalam satu platform terpusat.",
            price: "Rp 17 Juta",
            pricePeriod: "/tahun",
            users: "5 User",
            highlights: [
              { title: "Skala Enterprise", description: "Menangani kompleksitas operasional perusahaan besar & multi-entitas." },
              { title: "Industri Luas", description: "Trade, manufaktur, distribusi, yayasan, non-profit, dan kontraktor." },
              { title: "Integrasi Penuh", description: "Finance, inventory, production, hingga laporan konsolidasi." },
              { title: "Multi Cabang", description: "Kelola banyak cabang dan gudang dari satu sistem." },
            ],
            features: [
              "Manajemen inventori lengkap",
              "Multi cabang & multi gudang",
              "Multi currency & multi price",
              "Manufaktur & produksi",
              "Procurement & konsinyasi",
              "Project & department costing",
              "Assembly & disassembly",
              "Delivery status & notes",
              "Custom report builder",
              "Hingga 5 user",
            ],
            comparison: [
              {
                title: "Enterprise Features",
                features: [
                  { name: "Multi warehouse", included: true },
                  { name: "Multi currency", included: true },
                  { name: "Multi price & discount", included: true },
                  { name: "Assembly / disassembly", included: true },
                  { name: "Procurement (PR/PO/SO/SQ)", included: true },
                  { name: "Production", included: true },
                ],
              },
              {
                title: "Fasilitas Multi",
                features: [
                  { name: "Multi fase proyek", included: true },
                  { name: "Multi satuan", included: true },
                  { name: "Multi tax", included: true },
                  { name: "Multi freight", included: true },
                  { name: "Multi delivery order", included: true },
                ],
              },
            ],
            specifications: [
              { label: "Jumlah User", value: "5 User" },
              { label: "Model Pembayaran", value: "Berlangganan" },
              { label: "Billing Period", value: "Per tahun" },
              { label: "Rekomendasi untuk", value: "Perusahaan besar & kompleks" },
              { label: "Mode Operasi", value: "Hybrid (online & offline)" },
            ],
            support: [
              "Training resmi perusahaan",
              "Support prioritas",
              "Konsultasi alur kerja",
              "Update versi terbaru",
            ],
            faq: [
              { q: "Berapa user yang didapat?", a: "Paket ZahirERP mencakup 5 user." },
              { q: "Apakah cocok untuk manufaktur?", a: "Ya, ZahirERP mendukung manufaktur, trade, distribusi, yayasan, dan kontraktor." },
              { q: "Apakah ada opsi custom?", a: "Untuk kebutuhan khusus, tim konsultan kami siap membantu." },
            ],
            cta: { label: "Konsultasikan Kebutuhan", href: "/contact-us" },
          },
        ],
        comparison: [
          {
            title: "Perbandingan Paket",
            features: [
              { name: "Harga mulai dari", included: true },
            ],
          },
        ],
        addons: [
          { label: "Zahir HR", price: "+Rp 20.000/bulan", note: "Aplikasi payroll & absensi" },
          { label: "Zahir POSX", price: "+Rp 2,5 Juta/tahun", note: "Aplikasi kasir POS" },
        ],
      },
      {
        mode: "license",
        title: "Beli Putus",
        description: "Bayar sekali untuk kepemilikan lisensi software secara permanen.",
        plans: [
          {
            slug: "small-business",
            name: "Small Business",
            tagline: "Solusi Awal Bisnis & UMKM",
            price: "Rp 2,5 Juta",
            priceNote: "Harga mulai dari, 1 user",
            users: "1 User",
            description:
              "Lisensi akuntansi sekali bayar untuk memulai pembukuan digital yang rapi dan akurat.",
            features: [
              "Pencatatan transaksi keuangan",
              "Kas & bank",
              "Persediaan dasar",
              "Pelaporan keuangan",
              "Lisensi permanen",
            ],
            cta: { label: "Beli Sekarang", href: "/contact-us", variant: "secondary" },
          },
          {
            slug: "flexy-trade",
            name: "Flexy Trade",
            tagline: "Untuk Dagang & Distribusi",
            price: "Rp 7,5 Juta",
            priceNote: "Harga mulai dari, 1 user, termasuk training",
            users: "1 User",
            description:
              "Lisensi akuntansi untuk bisnis perdagangan dan distribusi dengan pengelolaan persediaan yang lebih lengkap.",
            features: [
              "Pembelian & penjualan barang",
              "Manajemen persediaan lengkap",
              "Multi satuan & multi harga",
              "Hutang-piutang dagang",
              "Lisensi permanen",
            ],
            cta: { label: "Beli Sekarang", href: "/contact-us", variant: "secondary" },
          },
          {
            slug: "standard",
            name: "Standard",
            tagline: "Untuk Jasa, Dagang & Kontraktor",
            price: "Rp 12 Juta",
            priceNote: "Harga mulai dari, 1 user, termasuk training",
            users: "1 User",
            description:
              "Lisensi versi lengkap untuk berbagai jenis bisnis — jasa, dagang, hingga kontraktor.",
            features: [
              "Semua fitur Flexy Trade",
              "Proyek & departemen",
              "Fitur akuntansi lengkap",
              "Desain laporan kustom",
              "Lisensi permanen",
            ],
            cta: { label: "Beli Sekarang", href: "/contact-us", variant: "secondary" },
          },
          {
            slug: "personal",
            name: "Personal",
            tagline: "Untuk Usaha Jasa & Nirlaba",
            price: "Rp 7,5 Juta",
            priceNote: "Harga mulai dari, 1 user, termasuk training",
            users: "1 User",
            description:
              "Lisensi akuntansi untuk usaha jasa, yayasan, organisasi, dan bisnis non-profit.",
            features: [
              "Pencatatan transaksi & laporan",
              "Pengelolaan proyek & kegiatan",
              "Kas & bank",
              "Laporan keuangan lengkap",
              "Lisensi permanen",
            ],
            cta: { label: "Beli Sekarang", href: "/contact-us", variant: "secondary" },
          },
          {
            slug: "professional",
            name: "Professional",
            tagline: "Best for Business yang Tumbuh",
            popular: true,
            price: "Rp 5 Juta",
            priceNote: "Harga mulai dari, 1 user",
            users: "1 User",
            description:
              "Lisensi akuntansi lengkap untuk bisnis yang berkembang dengan fitur persediaan & proyek.",
            features: [
              "Semua fitur Small Business",
              "Persediaan & proyek",
              "Fitur akuntansi lengkap",
              "Fixed asset",
              "Lisensi permanen",
            ],
            cta: { label: "Beli Sekarang", href: "/contact-us", variant: "primary" },
          },
          {
            slug: "enterprise",
            name: "Enterprise",
            tagline: "Untuk Perusahaan Besar",
            price: "Diskusi Dengan Kami",
            priceNote: "1 user, hubungi konsultan",
            users: "1 User",
            description:
              "Lisensi versi enterprise dengan fitur lengkap dan laporan kustom untuk perusahaan besar.",
            features: [
              "Semua fitur Standard",
              "Manufaktur & produksi",
              "Multi cabang & multi gudang",
              "Custom report builder",
              "Lisensi permanen",
            ],
            cta: { label: "Beli Sekarang", href: "/contact-us", variant: "primary" },
          },
          {
            slug: "zahir-erp",
            name: "ZahirERP",
            tagline: "Untuk Perusahaan Besar & Kompleks",
            price: "Diskusi Dengan Kami",
            priceNote: "2 user, hubungi konsultan",
            users: "2 User",
            description:
              "Lisensi ERP skala enterprise untuk perusahaan besar dengan kebutuhan kompleks.",
            features: [
              "Manajemen inventori lengkap",
              "Multi cabang & multi gudang",
              "Manufaktur & produksi",
              "Procurement & konsinyasi",
              "Custom report",
            ],
            cta: { label: "Hubungi Konsultan", href: "/contact-us", variant: "primary" },
          },
        ],
        planDetails: [
          {
            slug: "small-business",
            name: "Zahir Accounting Small Business (Beli Putus)",
            tagline: "Solusi Awal Bisnis",
            valueProposition:
              "Kepemilikan lisensi penuh untuk memulai pembukuan digital UMKM Anda — bayar sekali, gunakan selamanya.",
            price: "Rp 2,5 Juta",
            users: "1 User",
            highlights: [
              { title: "Kepemilikan Penuh", description: "Lisensi sekali bayar tanpa langganan bulanan." },
              { title: "Kas & Bank", description: "Kelola aliran kas dan rekonsiliasi bank." },
              { title: "Persediaan Dasar", description: "Pantau stok dan nilai persediaan." },
              { title: "Pelatihan", description: "Training dan 1 tahun support by phone." },
            ],
            features: [
              "Pembelian & Penjualan Barang",
              "Kas & Bank",
              "Rekonsiliasi Bank",
              "Customer Payment",
              "Payment to Supplier",
              "Persediaan Barang",
              "Business Analysis",
              "Reminder & Grafik",
              "Laporan Keuangan",
              "Ekspor Laporan",
            ],
            comparison: [
              {
                title: "Transaksi & Persediaan",
                features: [
                  { name: "Pembelian & penjualan barang", included: true },
                  { name: "Kas & bank", included: true },
                  { name: "Rekonsiliasi bank", included: true },
                  { name: "Persediaan barang", included: true },
                ],
              },
            ],
            specifications: [
              { label: "Jumlah User", value: "1 User" },
              { label: "Model Pembayaran", value: "Beli Putus" },
              { label: "Rekomendasi untuk", value: "UKM & bisnis awal" },
              { label: "Pelatihan", value: "Training + 1 tahun support" },
            ],
            support: [
              "Training pengenalan produk",
              "1 tahun support by phone",
              "Panduan & basis pengetahuan",
            ],
            faq: [
              { q: "Apakah bisa upgrade?", a: "Ya, dapat di-upgrade ke paket yang lebih tinggi sesuai kebutuhan." },
              { q: "Ada biaya tahunan?", a: "Dukungan lanjutan tersedia dengan biaya opsional." },
            ],
            cta: { label: "Beli Sekarang", href: "/contact-us" },
          },
          {
            slug: "professional",
            name: "Zahir Accounting Professional (Beli Putus)",
            tagline: "Best for Business yang Tumbuh",
            valueProposition:
              "Lisensi akuntansi lengkap untuk bisnis yang berkembang — fitur persediaan, proyek, dan fixed asset dalam satu paket.",
            price: "Rp 5 Juta",
            users: "1 User",
            highlights: [
              { title: "Fitur Lengkap", description: "Semua fitur Small Business plus persediaan & proyek." },
              { title: "Proyek & Departemen", description: "Pelacakan biaya per proyek dan departemen." },
              { title: "Fixed Asset", description: "Manajemen aset tetap dengan berbagai metode penyusutan." },
              { title: "Pelatihan", description: "Training dan 1 tahun support by phone." },
            ],
            features: [
              "Persediaan Barang Lengkap",
              "Proyek & Departemen",
              "Fixed Asset",
              "Rekonsiliasi Bank",
              "Reminder & Grafik",
              "Desain Laporan",
              "Analisis Bisnis",
              "Predictive Entry",
            ],
            comparison: [],
            specifications: [
              { label: "Jumlah User", value: "1 User" },
              { label: "Model Pembayaran", value: "Beli Putus" },
              { label: "Rekomendasi untuk", value: "Bisnis yang tumbuh" },
              { label: "Pelatihan", value: "Training + 1 tahun support" },
            ],
            support: [
              "Training pengenalan produk",
              "1 tahun support by phone",
              "Panduan & basis pengetahuan",
            ],
            faq: [],
            cta: { label: "Beli Sekarang", href: "/contact-us" },
          },
          {
            slug: "zahir-erp",
            name: "ZahirERP (Beli Putus)",
            tagline: "Untuk Perusahaan Besar & Kompleks",
            valueProposition:
              "Lisensi ERP skala enterprise untuk perusahaan besar dengan kebutuhan operasional kompleks.",
            price: "Diskusi Dengan Kami",
            users: "2 User",
            highlights: [
              { title: "Skala Enterprise", description: "Menangani kompleksitas perusahaan besar & multi-entitas." },
              { title: "Integrasi Penuh", description: "Finance, inventory, production dalam satu platform." },
              { title: "Industri Luas", description: "Trade, manufaktur, yayasan, kontraktor, dan non-profit." },
            ],
            features: [
              "Manajemen inventori lengkap",
              "Multi cabang & multi gudang",
              "Multi currency & multi price",
              "Manufaktur & produksi",
              "Procurement & konsinyasi",
              "Project & department costing",
              "Custom report builder",
            ],
            comparison: [],
            specifications: [
              { label: "Jumlah User", value: "2 User" },
              { label: "Model Pembayaran", value: "Beli Putus" },
              { label: "Rekomendasi untuk", value: "Perusahaan besar" },
              { label: "Pricing", value: "Contact sales" },
            ],
            support: ["Konsultasi kebutuhan", "Training resmi perusahaan", "Support prioritas"],
            faq: [],
            cta: { label: "Hubungi Konsultan", href: "/contact-us" },
          },
        ],
        addons: [
          { label: "Zahir POSX", price: "+Rp 5 Juta", note: "Bundling lisensi POS" },
        ],
      },
    ],
    faq: [
      { q: "Apa beda Berlangganan dan Beli Putus?", a: "Berlangganan membayar per bulan/tahun dan selalu mendapat update, sedangkan Beli Putus adalah kepemilikan lisensi sekali bayar." },
      { q: "Apakah tersedia training?", a: "Ya, setiap paket sudah termasuk training dan dukungan resmi." },
    ],
  },
  {
    name: "Zahir Online",
    slug: "zahir-online",
    tagline: "Akuntansi Cloud Modern",
    description:
      "Software akuntansi berbasis cloud yang bisa diakses kapan saja dan di mana saja — akurat, real-time, dan terintegrasi.",
    hero:
      "Akses keuangan bisnis Anda secara cloud dengan dashboard keuntungan real-time, kontrol persediaan, dan laporan otomatis.",
    icon: "cloud",
    color: "#0ea5e9",
    pricingIntro: "Pilih paket langganan cloud sesuai ukuran bisnis Anda.",
    pricingIntroDescription:
      "Akuntansi cloud dengan akses real-time kapan saja dan dari mana saja. Pilih berdasarkan jumlah user dan skala operasional bisnis Anda.",
    recommendations: [
      {
        businessType: "UMKM & Bisnis Pemula",
        icon: "users",
        planSlug: "small-business",
        reason:
          "Cocok untuk bisnis kecil yang ingin mulai membukukan keuangan secara cloud tanpa ribet.",
      },
      {
        businessType: "Bisnis Berkembang",
        icon: "building",
        planSlug: "professional",
        reason:
          "Cocok untuk bisnis menengah yang butuh persediaan, proyek, dan multi-user (hingga 3 user).",
      },
      {
        businessType: "Perusahaan Skala Menengah-Besar",
        icon: "landmark",
        planSlug: "enterprise",
        reason:
          "Cocok untuk perusahaan dengan kebutuhan multi user, multi cabang, dan laporan konsolidasi.",
      },
    ],
    pricingSections: [
      {
        mode: "subscription",
        title: "Berlangganan Cloud",
        description: "Akuntansi cloud dengan akses real-time, multi-perangkat, dan selalu terupdate.",
        plans: [
          {
            slug: "small-business",
            name: "Small Business",
            tagline: "Untuk Bisnis Kecil",
            price: "Rp 150.000",
            pricePeriod: "/bulan",
            priceNote: "1 user, langganan tahunan (termasuk PPN)",
            users: "1 User",
            description: "Akuntansi cloud dasar untuk bisnis kecil dengan pencatatan keuangan sederhana.",
            features: [
              "Pencatatan transaksi",
              "Kas & bank",
              "Laporan keuangan",
              "Akses cloud real-time",
              "Dashboard keuntungan",
            ],
            cta: { label: "Mulai Berlangganan", href: "/contact-us", variant: "secondary" },
          },
          {
            slug: "professional",
            name: "Professional",
            tagline: "Best for Medium Business",
            popular: true,
            price: "Rp 878.750",
            pricePeriod: "/bulan",
            priceNote: "3 user, langganan tahunan, gratis training 6 jam",
            users: "3 User",
            description: "Paket akuntansi cloud lengkap untuk bisnis menengah dengan fitur persediaan & proyek.",
            features: [
              "Semua fitur Small Business",
              "Persediaan & proyek",
              "Multi user hingga 3",
              "Fixed asset",
              "Gratis training 6 jam",
            ],
            cta: { label: "Mulai Berlangganan", href: "/contact-us", variant: "primary" },
          },
          {
            slug: "enterprise",
            name: "Enterprise",
            tagline: "Best for Enterprise",
            price: "Rp 1,5 Juta",
            pricePeriod: "/bulan",
            priceNote: "5 user, langganan tahunan",
            users: "5 User",
            description: "Paket akuntansi cloud untuk perusahaan dengan kebutuhan multi user dan multi cabang.",
            features: [
              "Semua fitur Professional",
              "Multi user hingga 5",
              "Multi cabang",
              "Laporan konsolidasi",
              "Letak prioritas",
            ],
            cta: { label: "Mulai Berlangganan", href: "/contact-us", variant: "secondary" },
          },
        ],
        planDetails: [
          {
            slug: "small-business",
            name: "Zahir Online Small Business",
            tagline: "Untuk Bisnis Kecil",
            valueProposition:
              "Akuntansi cloud yang mudah untuk memulai pencatatan keuangan digital bisnis kecil Anda dari mana saja.",
            price: "Rp 150.000",
            pricePeriod: "/bulan",
            users: "1 User",
            highlights: [
              { title: "Akses Cloud", description: "Kelola keuangan dari mana saja via internet." },
              { title: "Dashboard Keuntungan", description: "Pantau keuntungan secara real-time." },
              { title: "Kas & Bank", description: "Kelola aliran kas dan rekonsiliasi." },
              { title: "Laporan Otomatis", description: "Laporan keuangan tergenerate otomatis." },
            ],
            features: [
              "Dashboard keuntungan realtime",
              "Inventory control",
              "Sales & purchasing",
              "Kas & bank",
              "Fixed assets",
              "Rekonsiliasi bank",
              "Recurring transaction",
            ],
            comparison: [
              {
                title: "Fitur Cloud",
                features: [
                  { name: "Dashboard keuntungan realtime", included: true },
                  { name: "Inventory control", included: true },
                  { name: "Sales & purchasing", included: true },
                  { name: "Kas & bank", included: true },
                  { name: "Rekonsiliasi bank", included: true },
                ],
              },
            ],
            specifications: [
              { label: "Jumlah User", value: "1 User" },
              { label: "Model", value: "Subscription cloud" },
              { label: "Akses", value: "Multi-perangkat" },
            ],
            support: ["Dukungan cloud", "Basis pengetahuan", "Update otomatis"],
            faq: [],
            cta: { label: "Mulai Berlangganan", href: "/contact-us" },
          },
          {
            slug: "professional",
            name: "Zahir Online Professional",
            tagline: "Best for Medium Business",
            valueProposition:
              "Akuntansi cloud lengkap untuk bisnis menengah — fitur persediaan, proyek, dan dashboard real-time.",
            price: "Rp 878.750",
            pricePeriod: "/bulan",
            users: "3 User",
            highlights: [
              { title: "Tiga User", description: "Kolaborasi tim penuh dalam satu akun cloud." },
              { title: "Gratis Training", description: "Termasuk training 6 jam." },
              { title: "Fitur Lengkap", description: "Persediaan, proyek, dan fixed asset." },
              { title: "Real-time", description: "Data selalu sinkron antar perangkat." },
            ],
            features: [
              "Dashboard keuntungan realtime",
              "Inventory control",
              "Sales & purchasing",
              "Kas & bank",
              "Fixed assets",
              "Rekonsiliasi bank",
              "Department",
              "Project",
              "Recurring transaction",
            ],
            comparison: [],
            specifications: [
              { label: "Jumlah User", value: "3 User" },
              { label: "Model", value: "Subscription cloud" },
              { label: "Training", value: "Gratis 6 jam" },
            ],
            support: ["Training 6 jam", "Dukungan cloud", "Update otomatis"],
            faq: [],
            cta: { label: "Mulai Berlangganan", href: "/contact-us" },
          },
          {
            slug: "enterprise",
            name: "Zahir Online Enterprise",
            tagline: "Best for Enterprise",
            valueProposition:
              "Akuntansi cloud skala enterprise dengan multi user, multi cabang, dan laporan konsolidasi.",
            price: "Rp 1,5 Juta",
            pricePeriod: "/bulan",
            users: "5 User",
            highlights: [
              { title: "Lima User", description: "Kapasitas tim besar dalam akun cloud." },
              { title: "Multi Cabang", description: "Kelola banyak cabang dari satu sistem." },
              { title: "Konsolidasi", description: "Laporan konsolidasi antar cabang." },
            ],
            features: [
              "Dashboard keuntungan realtime",
              "Inventory control",
              "Sales & purchasing",
              "Kas & bank",
              "Fixed assets",
              "Department",
              "Project",
              "Multi cabang",
              "Laporan konsolidasi",
              "Recurring transaction",
            ],
            comparison: [],
            specifications: [
              { label: "Jumlah User", value: "5 User" },
              { label: "Model", value: "Subscription cloud" },
              { label: "Rekomendasi", value: "Perusahaan / enterprise" },
            ],
            support: ["Dukungan cloud prioritas", "Update otomatis", "Basis pengetahuan"],
            faq: [],
            cta: { label: "Mulai Berlangganan", href: "/contact-us" },
          },
        ],
      },
    ],
    faq: [
      { q: "Apakah bisa blokir akses saat offline?", a: "Zahir Online berbasis cloud, akses memerlukan internet." },
    ],
  },
  {
    name: "Zahir AI",
    slug: "zahir-ai",
    tagline: "AI Business Intelligence",
    description:
      "Asisten AI yang menganalisis data keuangan bisnis Anda dan memberikan insight, laporan, serta rekomendasi melalui chat.",
    hero:
      "Dapatkan insight bisnis cerdas melalui chat — analisis data real-time, analisis prediktif, dan laporan otomatis berbasis AI.",
    icon: "cpu",
    color: "#8b5cf6",
    pricingIntro: "Pilih paket AI sesuai jumlah user dan kebutuhan analisis data Anda.",
    pricingIntroDescription:
      "Zahir AI membantu Anda membaca dan menganalisis data keuangan lewat percakapan. Pilih kapasitas user dan token sesuai kebutuhan tim.",
    recommendations: [
      {
        businessType: "Tim Kecil & Pemula Analisis",
        icon: "users",
        planSlug: "basic",
        reason:
          "Cocok untuk tim kecil yang baru memanfaatkan fitur analisis data lewat chat.",
      },
      {
        businessType: "Bisnis Berkembang",
        icon: "building",
        planSlug: "profesional",
        reason:
          "Cocok untuk tim yang tumbuh dengan kebutuhan analisis prediktif dan dashboard interaktif.",
      },
      {
        businessType: "Perusahaan Besar",
        icon: "landmark",
        planSlug: "enterprise",
        reason:
          "Cocok untuk perusahaan besar dengan kapasitas big data dan kebutuhan integrasi kustom.",
      },
    ],
    pricingSections: [
      {
        mode: "subscription",
        title: "Berlangganan",
        description: "Berlangganan bulanan dengan diskon untuk periode lebih lama.",
        plans: [
          {
            slug: "basic",
            name: "Basic",
            tagline: "Untuk Tim Kecil",
            price: "Rp 500.000",
            pricePeriod: "/bulan",
            priceNote: "3 user, 2.000 token",
            users: "3 User",
            description: "Paket AI dasar dengan kapasitas analisis data standar.",
            features: [
              "3 user",
              "2.000 token",
              "Analisis data dasar",
              "Laporan otomatis",
              "Akses via chat",
            ],
            cta: { label: "Mulai Berlangganan", href: "/contact-us", variant: "secondary" },
          },
          {
            slug: "profesional",
            name: "Profesional",
            tagline: "Untuk Tim yang Tumbuh",
            popular: true,
            price: "Rp 1 Juta",
            pricePeriod: "/bulan",
            priceNote: "5 user, 4.000 token",
            users: "5 User",
            description: "Paket AI dengan kapasitas analisis lebih besar untuk bisnis berkembang.",
            features: [
              "5 user",
              "4.000 token",
              "Analisis data lengkap",
              "Analisis prediktif",
              "Dashboard interaktif",
            ],
            cta: { label: "Mulai Berlangganan", href: "/contact-us", variant: "primary" },
          },
          {
            slug: "enterprise",
            name: "Enterprise",
            tagline: "Untuk Perusahaan Besar",
            price: "Rp 5 Juta",
            pricePeriod: "/bulan",
            priceNote: "10 user, 20.000 token",
            users: "10 User",
            description: "Paket AI skala enterprise dengan kapasitas analisis maksimal.",
            features: [
              "10 user",
              "20.000 token",
              "Analisis lanjutan",
              "Dedicated support",
              "Custom integrasi",
            ],
            cta: { label: "Hubungi Konsultan", href: "/contact-us", variant: "secondary" },
          },
        ],
        planDetails: [
          {
            slug: "basic",
            name: "Zahir AI Basic",
            tagline: "Untuk Tim Kecil",
            valueProposition:
              "Mulai manfaatkan kecerdasan buatan untuk membaca data keuangan bisnis Anda melalui chat.",
            price: "Rp 500.000",
            pricePeriod: "/bulan",
            users: "3 User",
            highlights: [
              { title: "3 User", description: "Akses untuk tiga pengguna tim." },
              { title: "2.000 Token", description: "Kapasitas analisis data per bulan." },
              { title: "Akses Via Chat", description: "Insight bisnis lewat WhatsApp / Telegram." },
              { title: "Laporan Otomatis", description: "Generate laporan dari pertanyaan sederhana." },
            ],
            features: [
              "Data-driven insights",
              "Analisis data real-time",
              "Laporan otomatis",
              "Insight bisnis melalui prompt",
              "Integrasi dengan data keuangan",
            ],
            comparison: [],
            specifications: [
              { label: "User", value: "3 User" },
              { label: "Token", value: "2.000" },
              { label: "Akses", value: "Via chat" },
            ],
            support: ["Dukungan standar", "Panduan penggunaan"],
            faq: [],
            cta: { label: "Mulai Berlangganan", href: "/contact-us" },
          },
          {
            slug: "profesional",
            name: "Zahir AI Profesional",
            tagline: "Untuk Tim yang Tumbuh",
            valueProposition:
              "Analisis AI yang lebih dalam untuk bisnis berkembang — prediksi tren dan insight strategis.",
            price: "Rp 1 Juta",
            pricePeriod: "/bulan",
            users: "5 User",
            highlights: [
              { title: "5 User", description: "Akses untuk lima pengguna tim." },
              { title: "4.000 Token", description: "Kapasitas analisis lebih besar." },
              { title: "Analisis Prediktif", description: "Prediksi tren dan skenario masa depan." },
              { title: "Dashboard Interaktif", description: "Visualisasi data yang mudah dipahami." },
            ],
            features: [
              "Data-driven insights",
              "Analisis data real-time",
              "Analisis prediktif",
              "Dashboard interaktif",
              "Otomatisasi pengolahan data",
              "Insight bisnis melalui prompt",
            ],
            comparison: [],
            specifications: [
              { label: "User", value: "5 User" },
              { label: "Token", value: "4.000" },
              { label: "Akses", value: "Via chat" },
            ],
            support: ["Dukungan prioritas", "Panduan penggunaan"],
            faq: [],
            cta: { label: "Mulai Berlangganan", href: "/contact-us" },
          },
          {
            slug: "enterprise",
            name: "Zahir AI Enterprise",
            tagline: "Untuk Perusahaan Besar",
            valueProposition:
              "Kapasitas AI maksimal untuk enterprise dengan token besar dan dukungan khusus.",
            price: "Rp 5 Juta",
            pricePeriod: "/bulan",
            users: "10 User",
            highlights: [
              { title: "10 User", description: "Akses untuk sepuluh pengguna tim." },
              { title: "20.000 Token", description: "Kapasitas analisis data terbesar." },
              { title: "Custom Integrasi", description: "Integrasi dengan sistem perusahaan." },
              { title: "Dedicated Support", description: "Dukungan khusus untuk enterprise." },
            ],
            features: [
              "Data-driven insights",
              "Analisis data real-time",
              "Analisis prediktif",
              "Dashboard interaktif",
              "Otomatisasi pengolahan data",
              "Custom integrasi",
              "Dedicated support",
            ],
            comparison: [],
            specifications: [
              { label: "User", value: "10 User" },
              { label: "Token", value: "20.000" },
              { label: "Akses", value: "Via chat" },
            ],
            support: ["Dedicated support", "Custom integrasi", "Panduan penggunaan"],
            faq: [],
            cta: { label: "Hubungi Konsultan", href: "/contact-us" },
          },
        ],
      },
    ],
    faq: [
      { q: "Bagaimana cara mendapatkan insight AI?", a: "Insight didapat melalui chat dengan AI yang menganalisis data keuangan bisnis Anda." },
      { q: "Apa itu token?", a: "Token adalah unit kapasitas untuk analisis data dalam periode berlangganan." },
    ],
  },
  {
    name: "Zahir HR",
    slug: "zahir-hr",
    tagline: "HRIS Payroll & Absensi",
    description:
      "Sistem HR cloud yang mengelola payroll, absensi (face recognition & geo-tagging), cuti, PPh 21/BPJS, dan approval terintegrasi.",
    hero:
      "Kelola payroll dan absensi karyawan dengan cepat dan terintegrasi — dari database karyawan, absensi, hingga penggajian otomatis.",
    icon: "users",
    color: "#ea580c",
    pricingIntro: "Bayar per karyawan per bulan — fleksibel sesuai ukuran tim Anda.",
    pricingIntroDescription:
      "Kelola payroll, absensi, dan data karyawan secara digital. Biaya dihitung per karyawan per bulan sehingga sangat fleksibel.",
    recommendations: [
      {
        businessType: "UMKM & Tim Kecil",
        icon: "users",
        planSlug: "hr-essential",
        reason:
          "Cocok untuk tim kecil yang butuh digitalisasi payroll dan absensi esensial dengan biaya terjangkau.",
      },
      {
        businessType: "Bisnis Berkembang & HR Lengkap",
        icon: "building",
        planSlug: "hr-profesional",
        reason:
          "Cocok untuk perusahaan yang membutuhkan fitur HR menyeluruh seperti absensi face recognition dan ESS.",
      },
      {
        businessType: "Perusahaan dengan Server Privat",
        icon: "landmark",
        planSlug: "on-premise",
        reason:
          "Cocok untuk perusahaan yang menginginkan data di server sendiri dengan support VIP.",
      },
    ],
    pricingSections: [
      {
        mode: "subscription",
        title: "Berlangganan",
        description: "Bayar per karyawan per bulan, bebas memilih sesuai jumlah karyawan.",
        plans: [
          {
            slug: "hr-essential",
            name: "HR Essential",
            tagline: "Fitur Esensial HR",
            price: "Rp 15.000",
            pricePeriod: "/bulan/karyawan",
            priceNote: "10 fitur unggulan",
            users: "Per Karyawan",
            description: "Paket HR dasar untuk payroll dan absensi penting.",
            features: [
              "Database karyawan",
              "Absensi dasar",
              "Payroll sederhana",
              "PPh 21 & BPJS",
              "10 fitur unggulan",
            ],
            cta: { label: "Mulai Berlangganan", href: "/contact-us", variant: "secondary" },
          },
          {
            slug: "hr-profesional",
            name: "HR Profesional",
            tagline: "Fitur HR Lengkap",
            popular: true,
            price: "Rp 20.000",
            pricePeriod: "/bulan/karyawan",
            priceNote: "30 fitur unggulan",
            users: "Per Karyawan",
            description: "Paket HR lengkap dengan 30 fitur unggulan untuk kebutuhan HR menyeluruh.",
            features: [
              "Database karyawan",
              "Absensi face recognition",
              "Payroll lengkap",
              "Cuti & approval",
              "ESS & 30 fitur unggulan",
            ],
            cta: { label: "Mulai Berlangganan", href: "/contact-us", variant: "primary" },
          },
          {
            slug: "on-premise",
            name: "On Premise",
            tagline: "Server Privat Perusahaan",
            price: "Hubungi Kami",
            priceNote: "Private cloud server & VIP support",
            users: "Kustom",
            description: "Deployment on-premise khusus perusahaan dengan server privat dan dukungan VIP.",
            features: [
              "Private cloud server",
              "Data di server sendiri",
              "VIP support",
              "Kustomisasi",
            ],
            cta: { label: "Hubungi Konsultan", href: "/contact-us", variant: "secondary" },
          },
        ],
        planDetails: [
          {
            slug: "hr-essential",
            name: "Zahir HR Essential",
            tagline: "Fitur Esensial HR",
            valueProposition:
              "Mulai digitalisasi payroll dan absensi dengan paket HR esensial yang terjangkau.",
            price: "Rp 15.000",
            pricePeriod: "/bulan/karyawan",
            users: "Per Karyawan",
            highlights: [
              { title: "Database Karyawan", description: "Kelola data karyawan terpusat." },
              { title: "Absensi Dasar", description: "Pencatatan kehadiran karyawan." },
              { title: "Payroll", description: "Kalkulasi gaji otomatis." },
              { title: "PPh 21 & BPJS", description: "Perhitungan pajak dan iuran." },
            ],
            features: [
              "Database karyawan",
              "Absensi",
              "Payroll",
              "PPh 21",
              "BPJS",
              "Administrasi HR",
            ],
            comparison: [],
            specifications: [
              { label: "Model", value: "Per karyawan / bulan" },
              { label: "Fitur", value: "10 fitur unggulan" },
              { label: "Deployment", value: "Cloud" },
            ],
            support: ["Dukungan standar", "Basis pengetahuan"],
            faq: [],
            cta: { label: "Mulai Berlangganan", href: "/contact-us" },
          },
          {
            slug: "hr-profesional",
            name: "Zahir HR Profesional",
            tagline: "Fitur HR Lengkap",
            valueProposition:
              "Solusi HR menyeluruh dengan 30 fitur unggulan — absensi cerdas, payroll, dan approval terintegrasi.",
            price: "Rp 20.000",
            pricePeriod: "/bulan/karyawan",
            users: "Per Karyawan",
            highlights: [
              { title: "30 Fitur Unggulan", description: "Kebutuhan HR lengkap dalam satu platform." },
              { title: "Face Recognition", description: "Absensi dengan pengenalan wajah." },
              { title: "Geo-tagging", description: "Validasi lokasi kehadiran." },
              { title: "ESS", description: "Self-service untuk karyawan." },
            ],
            features: [
              "Database karyawan",
              "Absensi face recognition & geo-tagging",
              "Payroll lengkap",
              "PPh 21 & BPJS",
              "Cuti & izin",
              "Approval management",
              "ESS (Employee Self Service)",
              "30 fitur unggulan",
            ],
            comparison: [],
            specifications: [
              { label: "Model", value: "Per karyawan / bulan" },
              { label: "Fitur", value: "30 fitur unggulan" },
              { label: "Deployment", value: "Cloud" },
            ],
            support: ["Dukungan prioritas", "Basis pengetahuan", "Panduan implementasi"],
            faq: [],
            cta: { label: "Mulai Berlangganan", href: "/contact-us" },
          },
          {
            slug: "on-premise",
            name: "Zahir HR On Premise",
            tagline: "Server Privat Perusahaan",
            valueProposition:
              "Deployment on-premise dengan server privat memberikan kontrol penuh atas data HR perusahaan Anda.",
            price: "Hubungi Kami",
            users: "Kustom",
            highlights: [
              { title: "Server Privat", description: "Data tersimpan di infrastruktur perusahaan." },
              { title: "VIP Support", description: "Dukungan prioritas khusus." },
              { title: "Kustomisasi", description: "Disesuaikan dengan kebutuhan perusahaan." },
            ],
            features: [
              "Private cloud server",
              "VIP support",
              "Kustomisasi",
              "Keamanan data maksimal",
            ],
            comparison: [],
            specifications: [
              { label: "Model", value: "Contact sales" },
              { label: "Deployment", value: "On-premise" },
              { label: "Support", value: "VIP support" },
            ],
            support: ["VIP support", "Kustomisasi", "Implementasi on-site"],
            faq: [],
            cta: { label: "Hubungi Konsultan", href: "/contact-us" },
          },
        ],
      },
    ],
    faq: [
      { q: "Bagaimana jika perusahaan saya kecil?", a: "Paket Essential cocok untuk kebutuhan HR awal dan terjangkau." },
      { q: "Apakah bisa integrasi akuntansi?", a: "Ya, Zahir HR terintegrasi dengan Zahir Accounting." },
    ],
  },
  {
    name: "Zahir POSX",
    slug: "zahir-posx",
    tagline: "Powerful & Integrated POS",
    description:
      "Aplikasi kasir point of sale online untuk ritel — multi-outlet, inventory real-time, dan terintegrasi dengan Zahir Online/ERP/HR.",
    hero:
      "Monitor omset penjualan, kontrol persediaan, dan penjualan antar cabang — semua terintegrasi dengan laporan keuangan.",
    icon: "shopping-cart",
    color: "#d946ef",
    pricingIntro: "Pilih paket POS sesuai jumlah outlet dan integrasi yang dibutuhkan.",
    pricingIntroDescription:
      "Aplikasi kasir modern untuk usaha retail dan kuliner — monitor omset real-time dan kontrol persediaan, dengan atau tanpa integrasi akuntansi.",
    recommendations: [
      {
        businessType: "Retail & Kuliner 1 Outlet",
        icon: "shopping-cart",
        planSlug: "posx",
        reason:
          "Cocok untuk toko atau gerai tunggal yang butuh aplikasi kasir lengkap dengan akses online & offline.",
      },
      {
        businessType: "Bisnis Butuh Integrasi Akuntansi",
        icon: "calculator",
        planSlug: "posx-zoom",
        reason:
          "Cocok untuk bisnis yang ingin laporan kasir terhubung langsung dengan akuntansi cloud.",
      },
    ],
    pricingSections: [
      {
        mode: "subscription",
        title: "Berlangganan",
        description: "Berlangganan per tahun dengan akses online & offline.",
        plans: [
          {
            slug: "posx",
            name: "Zahir POSX",
            tagline: "Aplikasi Kasir Stand-alone",
            popular: true,
            price: "Rp 2,5 Juta",
            pricePeriod: "/tahun",
            priceNote: "1 user, 1 outlet, 1 company",
            users: "1 User",
            description: "Aplikasi kasir POS untuk satu outlet dengan fitur lengkap.",
            features: [
              "1 user & 1 outlet",
              "Monitor omset penjualan",
              "Akses online & offline",
              "Kontrol persediaan",
              "Produk & transaksi unlimited",
            ],
            cta: { label: "Beli Sekarang", href: "/contact-us", variant: "primary" },
          },
          {
            slug: "posx-zoom",
            name: "POSX + Zahir Online Professional",
            tagline: "POS Terintegrasi Akuntansi",
            price: "Rp 5 Juta",
            pricePeriod: "/tahun",
            priceNote: "1 user ZO, 1 outlet, 1 kasir",
            users: "1 Kasir",
            description: "Bundling POS dengan akuntansi cloud professional.",
            features: [
              "1 user Zahir Online",
              "POS terintegrasi akuntansi",
              "1 outlet & 1 kasir",
              "Integrasi laporan keuangan",
              "Kontrol persediaan",
            ],
            cta: { label: "Beli Sekarang", href: "/contact-us", variant: "secondary" },
          },
        ],
        planDetails: [
          {
            slug: "posx",
            name: "Zahir POSX",
            tagline: "Aplikasi Kasir Stand-alone",
            valueProposition:
              "Kasir modern dengan monitor omset penjualan dan kontrol persediaan real-time — akses online & offline.",
            price: "Rp 2,5 Juta",
            pricePeriod: "/tahun",
            users: "1 User",
            highlights: [
              { title: "Monitor Omset", description: "Pantau penjualan secara real-time." },
              { title: "Online & Offline", description: "Tetap bisa bertransaksi tanpa koneksi." },
              { title: "Kontrol Persediaan", description: "Stok terupdate otomatis." },
              { title: "Multi Outlet", description: "Kelola beberapa outlet (level lebih tinggi)." },
            ],
            features: [
              "Monitor omset penjualan",
              "Akses online & offline",
              "Penjualan antar cabang",
              "Integrasi laporan keuangan",
              "Kontrol persediaan",
              "1 user, 1 outlet, 1 company",
              "Unlimited produk & transaksi",
            ],
            comparison: [],
            specifications: [
              { label: "User", value: "1 User" },
              { label: "Outlet", value: "1 Outlet" },
              { label: "Model", value: "Tahunan" },
            ],
            support: ["Dukungan aplikasi", "Panduan penggunaan"],
            faq: [],
            cta: { label: "Beli Sekarang", href: "/contact-us" },
          },
          {
            slug: "posx-zoom",
            name: "POSX + Zahir Online Professional",
            tagline: "POS Terintegrasi Akuntansi",
            valueProposition:
              "Gabungkan kasir POS dengan akuntansi cloud professional untuk laporan keuangan terintegrasi otomatis.",
            price: "Rp 5 Juta",
            pricePeriod: "/tahun",
            users: "1 Kasir",
            highlights: [
              { title: "Integrasi Akuntansi", description: "Transaksi POS otomatis masuk pembukuan." },
              { title: "Satu Ekosistem", description: "POS, akuntansi, dan HR dalam satu alur." },
              { title: "Laporan Terpadu", description: "Laporan keuangan terintegrasi." },
            ],
            features: [
              "1 user Zahir Online",
              "1 outlet & 1 kasir",
              "Integrasi laporan keuangan",
              "Monitor omset penjualan",
              "Kontrol persediaan",
            ],
            comparison: [],
            specifications: [
              { label: "User ZO", value: "1 User" },
              { label: "Outlet", value: "1 Outlet" },
              { label: "Kasir", value: "1 Kasir" },
            ],
            support: ["Dukungan aplikasi", "Panduan penggunaan", "Integrasi akuntansi"],
            faq: [],
            cta: { label: "Beli Sekarang", href: "/contact-us" },
          },
        ],
      },
    ],
    faq: [
      { q: "Apakah bisa untuk multiple outlet?", a: "Ya, tersedia opsi untuk penjualan antar cabang." },
      { q: "Apakah terintegrasi laporan keuangan?", a: "Ya, POSX terintegrasi dengan laporan keuangan Zahir." },
    ],
  },
  {
    name: "Zahir ERP",
    slug: "zahir-erp",
    tagline: "Enterprise Resource Planning",
    description:
      "Platform ERP lengkap untuk mengintegrasikan finance, inventory, produksi, distribusi, dan pelaporan konsolidasi perusahaan.",
    hero:
      "Integrasikan seluruh operasi perusahaan Anda — finance, inventory, production, hingga multi-cabang — dalam satu platform enterprise.",
    icon: "building",
    color: "#dc2626",
    pricingIntro: "Solusi ERP untuk skala enterprise — hubungi konsultan untuk kebutuhan Anda.",
    pricingIntroDescription:
      "Platform ERP terpadu untuk perusahaan skala menengah hingga besar. Harga custom, disesuaikan dengan modul dan skala operasional perusahaan.",
    recommendations: [
      {
        businessType: "Perusahaan Manufaktur & Distribusi",
        icon: "building",
        planSlug: "erp-subscription",
        reason:
          "Cocok untuk perusahaan dengan kebutuhan produksi, inventory, dan distribusi yang kompleks dan selalu terupdate.",
      },
      {
        businessType: "Perusahaan Butuh Kepemilikan Penuh",
        icon: "landmark",
        planSlug: "erp-license",
        reason:
          "Cocok untuk perusahaan yang menginginkan lisensi ERP on-premise dengan kendali penuh atas data.",
      },
    ],
    pricingSections: [
      {
        mode: "contact",
        title: "Hubungi Konsultan",
        description: "Pricing custom disesuaikan dengan kebutuhan dan skala perusahaan Anda.",
        plans: [
          {
            slug: "erp-subscription",
            name: "Zahir ERP Subscription",
            tagline: "ERP Cloud Berlangganan",
            price: "Hubungi Kami",
            priceNote: "Harga custom disesuaikan kebutuhan",
            users: "Kustom",
            description: "Langganan ERP cloud dengan semua modul terbuka sesuai paket.",
            features: [
              "Finance & inventory",
              "Produksi & distribusi",
              "Multi cabang",
              "Laporan konsolidasi",
              "Custom workflow",
            ],
            cta: { label: "Hubungi Konsultan", href: "/contact-us", variant: "primary" },
          },
          {
            slug: "erp-license",
            name: "Zahir ERP Beli Putus",
            tagline: "Lisensi ERP On-premise",
            price: "Diskusi Dengan Kami",
            priceNote: "2 user, disesuaikan kebutuhan",
            users: "2 User",
            description: "Lisensi ERP on-premise untuk kepemilikan penuh perusahaan.",
            features: [
              "Finance & inventory",
              "Produksi",
              "Multi cabang & gudang",
              "Custom report",
              "Lisensi permanen",
            ],
            cta: { label: "Hubungi Konsultan", href: "/contact-us", variant: "secondary" },
          },
        ],
        planDetails: [
          {
            slug: "erp-subscription",
            name: "Zahir ERP Subscription",
            tagline: "ERP Cloud Berlangganan",
            valueProposition:
              "Solusi ERP cloud terintegrasi dengan semua modul terbuka sesuai paket — fleksibel dan scalable.",
            price: "Hubungi Kami",
            users: "Kustom",
            highlights: [
              { title: "Semua Modul", description: "Finance, inventory, produksi, dan lainnya." },
              { title: "Cloud", description: "Deployment cloud dengan akses terpusat." },
              { title: "Konsultasi Bisnis", description: "Pendampingan implementasi dari konsultan." },
            ],
            features: [
              "Finance & inventory",
              "Produksi & distribusi",
              "Multi cabang",
              "Procurement",
              "Laporan konsolidasi",
              "Custom workflow",
            ],
            comparison: [],
            specifications: [
              { label: "Model", value: "Subscription cloud" },
              { label: "User", value: "Kustom" },
              { label: "Pricing", value: "Contact sales" },
            ],
            support: ["Konsultasi bisnis", "Implementasi", "Support prioritas"],
            faq: [],
            cta: { label: "Hubungi Konsultan", href: "/contact-us" },
          },
          {
            slug: "erp-license",
            name: "Zahir ERP Beli Putus",
            tagline: "Lisensi ERP On-premise",
            valueProposition:
              "Lisensi ERP on-premise untuk kontrol penuh atas data dan sistem perusahaan Anda.",
            price: "Diskusi Dengan Kami",
            users: "2 User",
            highlights: [
              { title: "Kepemilikan Penuh", description: "Lisensi permanen tanpa langganan." },
              { title: "On-premise", description: "Data tersimpan di infrastruktur sendiri." },
              { title: "Skala Enterprise", description: "Dibangun untuk kebutuhan perusahaan besar." },
            ],
            features: [
              "Finance & inventory",
              "Produksi",
              "Multi cabang & gudang",
              "Multi currency",
              "Procurement",
              "Custom report",
            ],
            comparison: [],
            specifications: [
              { label: "Model", value: "Beli Putus" },
              { label: "User", value: "2 User" },
              { label: "Pricing", value: "Contact sales" },
            ],
            support: ["Konsultasi kebutuhan", "Implementasi on-site", "Support prioritas"],
            faq: [],
            cta: { label: "Hubungi Konsultan", href: "/contact-us" },
          },
        ],
        addons: [
          { label: "ERP Cloud Dedicated", price: "Rp 150 Juta/tahun", note: "10 user, dedicated server, training 18 jam" },
        ],
      },
    ],
    faq: [
      { q: "Berapa harga ERP?", a: "Harga ERP bersifat custom dan disesuaikan kebutuhan — silakan hubungi konsultan kami." },
    ],
  },
  {
    name: "Zahir Accounting Services",
    slug: "zahir-accounting-services",
    tagline: "Outsourced Accounting",
    description:
      "Layanan pembukuan dan akuntansi outsourced oleh tim konsultan berpengalaman — siapkan laporan keuangan dan analisis bisnis tanpa membeli software.",
    hero:
      "Serahkan pengelolaan pembukuan kepada tim profesional — laporan keuangan dan analisis bisnis disiapkan untuk Anda.",
    icon: "briefcase",
    color: "#0891b2",
    pricingIntro: "Pilih tingkat layanan pembukuan sesuai kebutuhan perusahaan.",
    pricingIntroDescription:
      "Layanan pembukuan outsourced oleh tim konsultan Zahir — mulai dari pendampingan laporan keuangan hingga layanan akuntansi menyeluruh dengan tim dedicated.",
    recommendations: [
      {
        businessType: "Bisnis Butuh Pendampingan",
        icon: "users",
        planSlug: "basic",
        reason:
          "Cocok untuk perusahaan yang ingin laporan keuangannya didampingi tim konsultan berpengalaman.",
      },
      {
        businessType: "Bisnis Butuh Pembukuan Penuh",
        icon: "calculator",
        planSlug: "full-service",
        reason:
          "Cocok untuk perusahaan yang menyerahkan seluruh pembukuan, rekonsiliasi, dan pelaporan pajak kepada tim akuntan.",
      },
      {
        businessType: "Perusahaan Butuh Tim Dedicated",
        icon: "landmark",
        planSlug: "all-package",
        reason:
          "Cocok untuk perusahaan yang membutuhkan layanan akuntansi menyeluruh dengan dedicated team dan analisis mendalam.",
      },
    ],
    pricingSections: [
      {
        mode: "subscription",
        title: "Paket Layanan",
        description: "Layanan pembukuan outsourced dengan beberapa tingkat keterlibatan.",
        plans: [
          {
            slug: "basic",
            name: "Basic",
            tagline: "Pendampingan Laporan Keuangan",
            popular: true,
            price: "Rp 5 Juta",
            pricePeriod: "/bulan",
            priceNote: "Pendampingan laporan keuangan",
            users: "Tim Konsultan",
            description: "Pendampingan penyusunan laporan keuangan perusahaan Anda.",
            features: [
              "Pendampingan laporan keuangan",
              "Konsultasi akuntansi",
              "Analisis keuangan",
              "Tim berpengalaman",
            ],
            cta: { label: "Hubungi Konsultan", href: "/contact-us", variant: "primary" },
          },
          {
            slug: "full-service",
            name: "Full Service",
            tagline: "Full Accounting Service",
            price: "Rp 50 Juta",
            pricePeriod: "/tahun",
            priceNote: "Harga mulai dari",
            users: "Tim Konsultan",
            description: "Layanan pembukuan penuh oleh tim akuntan profesional.",
            features: [
              "Pembukuan penuh",
              "Laporan keuangan berkala",
              "Rekonsiliasi",
              "Pelaporan pajak",
            ],
            cta: { label: "Hubungi Konsultan", href: "/contact-us", variant: "secondary" },
          },
          {
            slug: "all-package",
            name: "All Package",
            tagline: "All In One Accounting Service",
            price: "Rp 150 Juta",
            pricePeriod: "/tahun",
            priceNote: "Layanan menyeluruh",
            users: "Dedicated Team",
            description: "Layanan akuntansi menyeluruh dengan tim dedicated.",
            features: [
              "Pembukuan menyeluruh",
              "Dedicated team",
              "Analisis bisnis mendalam",
              "Pelaporan lengkap",
            ],
            cta: { label: "Hubungi Konsultan", href: "/contact-us", variant: "secondary" },
          },
        ],
        planDetails: [
          {
            slug: "basic",
            name: "Basic Accounting Service",
            tagline: "Pendampingan Laporan Keuangan",
            valueProposition:
              "Pendampingan laporan keuangan dari tim konsultan Zahir berpengalaman untuk bisnis Anda.",
            price: "Rp 5 Juta",
            pricePeriod: "/bulan",
            users: "Tim Konsultan",
            highlights: [
              { title: "Tim Berpengalaman", description: "10.000+ jam pengalaman konsultan." },
              { title: "Pendampingan", description: "Bimbingan penyusunan laporan keuangan." },
              { title: "Analisis Bisnis", description: "Insight untuk keputusan bisnis." },
            ],
            features: [
              "Pendampingan laporan keuangan",
              "Konsultasi akuntansi",
              "Analisis keuangan",
              "Dukungan tim konsultan",
            ],
            comparison: [],
            specifications: [
              { label: "Model", value: "Per bulan" },
              { label: "Tim", value: "Konsultan berpengalaman" },
            ],
            support: ["Konsultasi", "Pendampingan"],
            faq: [],
            cta: { label: "Hubungi Konsultan", href: "/contact-us" },
          },
        ],
      },
    ],
    faq: [],
  },
  {
    name: "Zahir Capital Hub",
    slug: "zahir-capital-hub",
    tagline: "Fasilitas Pembiayaan Syariah",
    description:
      "Layanan fasilitas pembiayaan modal kerja & pembiayaan bisnis berbasis prinsip syariah, didukung lembaga keuangan syariah mitra di bawah OJK.",
    hero:
      "Akses pembiayaan modal kerja dan pembiayaan bisnis sesuai prinsip syariah untuk mendukung pertumbuhan usaha Anda.",
    icon: "landmark",
    color: "#059669",
    pricingIntro: "Layanan fasilitas pembiayaan — ajukan melalui konsultan untuk informasi lebih lanjut.",
    pricingIntroDescription:
      "Akses pembiayaan modal kerja dan pembiayaan bisnis sesuai prinsip syariah. Ajukan kebutuhan Anda melalui konsultan untuk solusi yang tepat.",
    recommendations: [
      {
        businessType: "Bisnis Butuh Modal Kerja",
        icon: "landmark",
        planSlug: "pembiayaan",
        reason:
          "Cocok untuk bisnis yang membutuhkan tambahan likuiditas modal kerja dengan prinsip syariah.",
      },
    ],
    pricingSections: [
      {
        mode: "contact",
        title: "Ajukan Pembiayaan",
        description: "Hubungi konsultan untuk informasi produk pembiayaan dan proses pengajuan.",
        plans: [
          {
            slug: "pembiayaan",
            name: "Pembiayaan Modal Kerja",
            tagline: "Pembiayaan Syariah",
            price: "Hubungi Kami",
            priceNote: "Custom sesuai kebutuhan",
            users: "Perusahaan",
            description: "Fasilitas pembiayaan modal kerja berprinsip syariah untuk bisnis Anda.",
            features: [
              "Prinsip syariah",
              "Pembiayaan modal kerja",
              "Mitra lembaga keuangan syariah",
              "Di bawah pengawasan OJK",
            ],
            cta: { label: "Ajukan Pembiayaan", href: "/contact-us", variant: "primary" },
          },
        ],
        planDetails: [
          {
            slug: "pembiayaan",
            name: "Pembiayaan Modal Kerja",
            tagline: "Pembiayaan Syariah",
            valueProposition:
              "Dapatkan kemudahan pembiayaan modal kerja sesuai prinsip syariah dengan mitra lembaga keuangan syariah terpercaya.",
            price: "Hubungi Kami",
            users: "Perusahaan",
            highlights: [
              { title: "Prinsip Syariah", description: "Pembiayaan sesuai kaidah syariah." },
              { title: "Mitra Terpercaya", description: "Lembaga keuangan syariah di bawah OJK." },
              { title: "Modal Kerja", description: "Dukungan likuiditas untuk usaha Anda." },
            ],
            features: [
              "Pembiayaan modal kerja",
              "Prinsip syariah",
              "Mitra lembaga syariah",
              "Di bawah pengawasan OJK",
            ],
            comparison: [],
            specifications: [{ label: "Model", value: "Contact-based" }],
            support: ["Konsultasi pembiayaan", "Proses pengajuan"],
            faq: [],
            cta: { label: "Ajukan Pembiayaan", href: "/contact-us" },
          },
        ],
      },
    ],
    faq: [],
  },
  {
    name: "Zahir CRM",
    slug: "zahir-crm",
    tagline: "Solusi CRM Online",
    description:
      "CRM online untuk mengelola prospek, pipeline penjualan, dan follow-up — terhubung langsung dengan sistem akuntansi, tanpa input ganda.",
    hero:
      "Kelola lead dan pipeline penjualan Anda, serta hubungkan langsung dengan pembukuan — tanpa data ganda.",
    icon: "heart-handshake",
    color: "#f59e0b",
    pricingIntro: "Hubungi konsultan untuk demo dan penawaran harga sesuai kebutuhan tim penjualan Anda.",
    pricingIntroDescription:
      "Kelola prospek, pipeline penjualan, dan follow-up secara terpusat — terhubung langsung dengan pembukuan Anda tanpa input ganda.",
    recommendations: [
      {
        businessType: "Tim Penjualan & Bisnis Service",
        icon: "heart-handshake",
        planSlug: "crm",
        reason:
          "Cocok untuk tim yang ingin mengelola prospek dan follow-up terintegrasi dengan akuntansi.",
      },
    ],
    pricingSections: [
      {
        mode: "contact",
        title: "Hubungi Konsultan",
        description: "Request demo atau konsultasi gratis untuk kebutuhan CRM bisnis Anda.",
        plans: [
          {
            slug: "crm",
            name: "Zahir CRM",
            tagline: "Solusi CRM Online",
            popular: true,
            price: "Hubungi Kami",
            priceNote: "Demo & konsultasi gratis",
            users: "Tim Penjualan",
            description: "CRM online untuk kelola prospek dan pipeline penjualan terintegrasi akuntansi.",
            features: [
              "Kelola prospek & pipeline",
              "Jadwal follow-up",
              "Terhubung akuntansi",
              "Laporan rapi",
              "Tanpa input ganda",
            ],
            cta: { label: "Request Demo", href: "/contact-us", variant: "primary" },
          },
        ],
        planDetails: [
          {
            slug: "crm",
            name: "Zahir CRM",
            tagline: "Solusi CRM Online",
            valueProposition:
              "Kelola seluruh kebutuhan prospek dan penjualan, terintegrasi langsung dengan pembukuan Anda.",
            price: "Hubungi Kami",
            users: "Tim Penjualan",
            highlights: [
              { title: "Kelola Prospek", description: "Lead dan pipeline penjualan terstruktur." },
              { title: "Follow-up Terjadwal", description: "Tidak ada prospek yang terlewat." },
              { title: "Integrasi Akuntansi", description: "Tanpa input ganda, data sinkron." },
            ],
            features: [
              "Kelola prospek",
              "Pipeline penjualan",
              "Jadwal follow-up",
              "Terhubung akuntansi",
              "Laporan penjualan",
            ],
            comparison: [],
            specifications: [{ label: "Model", value: "Contact sales" }],
            support: ["Konsultasi gratis", "Demo produk"],
            faq: [],
            cta: { label: "Request Demo", href: "/contact-us" },
          },
        ],
      },
    ],
    faq: [],
  },
];

export const supportVersions: SupportVersion[] = [
  {
    name: "Support Zahir Versi 5",
    slug: "zahir-versi-5",
    description: "Pusat informasi dan jalur dukungan untuk pengguna Zahir Versi 5.",
  },
  {
    name: "Support Zahir Versi 6",
    slug: "zahir-versi-6",
    description: "Pusat informasi dan jalur dukungan untuk pengguna Zahir Versi 6.",
  },
];

export const publicNavigation: NavigationItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Product",
    href: "/product",
    children: productCategories.map((cat) => ({
      label: cat.name,
      href: "/product/" + cat.slug,
    })),
  },
  {
    label: "Support Centre",
    href: "/support-centre",
    children: supportVersions.map((support) => ({
      label: support.name,
      href: "/support-centre/" + support.slug,
    })),
  },
  { label: "Update & Download", href: "/update-download" },
  { label: "Hubungi Kami", href: "/contact-us" },
];

export function findCategory(slug: string) {
  return productCategories.find((cat) => cat.slug === slug);
}

export function findPlan(categorySlug: string, sectionMode: PricingMode, planSlug: string) {
  const cat = findCategory(categorySlug);
  if (!cat) return undefined;
  const section = cat.pricingSections.find((s) => s.mode === sectionMode);
  if (!section) return undefined;
  const plan = section.plans.find((p) => p.slug === planSlug);
  if (!plan) return undefined;
  const detail = section.planDetails.find((d) => d.slug === planSlug);
  return { cat, section, plan, detail };
}

export function flattenProducts() {
  return productCategories.flatMap((cat) =>
    cat.pricingSections.flatMap((section) =>
      section.plans.map((p) => ({ categorySlug: cat.slug, mode: section.mode, planSlug: p.slug }))
    )
  );
}

export function findSupportVersion(slug: string) {
  return supportVersions.find((support) => support.slug === slug);
}
