export type NavigationItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type ProductFeatureGroup = {
  title: string;
  items: string[];
};

export type ProductBrochureDetails = {
  overview: string;
  trainingHours: string;
  featureGroups: ProductFeatureGroup[];
};

export type Product = {
  name: string;
  slug: string;
  price: string;
  priceNote?: string;
  audience: string;
  description: string;
  benefits: string[];
  brochure?: ProductBrochureDetails;
};

export type SupportVersion = {
  name: string;
  slug: string;
  description: string;
};

export const productCatalog: Product[] = [
  {
    name: "Zahir Small Business",
    slug: "zahir-small-business",
    price: "Rp 2 Juta",
    priceNote: "Harga sudah termasuk Training & Support by Phone. Belum termasuk PPN 10%",
    audience: "Untuk Bidang Usaha Perdagangan Kecil (UKM)",
    description: "Paket software akuntansi praktis untuk mengelola pembelian, penjualan, persediaan, dan buku besar usaha UKM.",
    benefits: [
      "Pembelian & Penjualan Barang",
      "Mengelola Hutang-Piutang",
      "Mengelola Persediaan Barang",
      "Buku Besar",
      "Kas & Bank",
    ],
    brochure: {
      overview: "Paket dasar untuk bisnis dagang yang membutuhkan pencatatan transaksi, kontrol persediaan, kas/bank, dan laporan keuangan yang mudah dibaca.",
      trainingHours: "4 jam",
      featureGroups: [
        {
          title: "Transaksi & Persediaan",
          items: ["Pembelian dan penjualan barang", "Inventori", "Kas dan bank", "Rekonsiliasi bank"],
        },
        {
          title: "Laporan & Analisis",
          items: ["Ekspor laporan", "Laporan bisa diklik", "Faktur pajak", "Analisis bisnis, reminder, dan grafik"],
        },
      ],
    },
  },
  {
    name: "Zahir Flexy Trade",
    slug: "zahir-flexy-trade",
    price: "Rp 5 Juta",
    priceNote: "Harga sudah termasuk Training & Support by Phone. Belum termasuk PPN 10%",
    audience: "Untuk Bidang Usaha Perdagangan Umum & Distribusi",
    description: "Solusi terintegrasi untuk bisnis perdagangan umum dan distribusi dengan nomor serial & pengelompokan barang.",
    benefits: [
      "Pembelian & Penjualan Barang",
      "Mengelola Hutang-Piutang",
      "Mengelola Persediaan Barang Secara Lengkap",
      "Pencatatan Barang Dengan Nomor Serial",
      "Pengelompokan Barang",
    ],
    brochure: {
      overview: "Pilihan untuk perdagangan dan distribusi yang membutuhkan kontrol stok lebih lengkap, barang berserial, giro mundur, serta metode nilai persediaan.",
      trainingHours: "6 jam",
      featureGroups: [
        {
          title: "Perdagangan & Stok",
          items: ["Pembelian dan penjualan barang", "Inventori lengkap", "Klasifikasi data", "Nomor seri barang", "Giro mundur"],
        },
        {
          title: "Pengendalian & Pelaporan",
          items: ["Metode FIFO dan LIFO", "Kas, bank, dan rekonsiliasi bank", "Desain laporan", "Transaksi berulang"],
        },
      ],
    },
  },
  {
    name: "Zahir Standard",
    slug: "zahir-standart",
    price: "Rp 8 Juta",
    priceNote: "Harga sudah termasuk Training & Support by Phone. Belum termasuk PPN 10%",
    audience: "Untuk Bidang Usaha Kontraktor, Jasa, dan Dagang",
    description: "Software akuntansi lengkap untuk kontraktor, jasa, dan dagang dengan manajemen anggaran proyek & perakitan.",
    benefits: [
      "Pembelian & Penjualan",
      "Mengelola Persediaan Barang Secara Lengkap",
      "Mengelola Hutang-Piutang",
      "Mengelola Anggaran Proyek & Departemen",
      "Assembly/ Perakitan Barang & Stock Opname",
    ],
    brochure: {
      overview: "Paket komprehensif untuk bisnis jasa, kontraktor, dan dagang dengan proyek, departemen, aktiva tetap, anggaran, serta alur perakitan persediaan.",
      trainingHours: "8 jam",
      featureGroups: [
        {
          title: "Operasional Bisnis",
          items: ["Transaksi jasa dan barang", "Proyek dan departemen", "Fixed asset", "Giro mundur dan retur", "Inventory movement"],
        },
        {
          title: "Kontrol Proyek & Stok",
          items: ["Multi fase proyek", "Biaya anggaran proyek dan departemen", "Assembly/perakitan", "Stock opname", "Nomor seri dan metode FIFO/LIFO"],
        },
      ],
    },
  },
  {
    name: "Zahir Personal",
    slug: "zahir-personal",
    price: "Rp 5 Juta",
    priceNote: "Harga sudah termasuk Training & Support by Phone. Belum termasuk PPN 10%",
    audience: "Untuk Bidang Usaha Jasa, Yayasan, dan Nirlaba",
    description: "Dirancang spesifik untuk perusahaan jasa, yayasan, dan organisasi nirlaba dengan job costing & aktiva tetap.",
    benefits: [
      "Mengelola Proyek",
      "Project & Job Costing",
      "Laporan L/R Per Proyek dan Departemen",
      "Mengelola Harta Tetap Dengan Berbagai Metode Penyusutan",
      "Buku Besar",
    ],
    brochure: {
      overview: "Paket bagi perusahaan jasa, yayasan, dan organisasi nirlaba yang memerlukan pelacakan proyek, biaya departemen, aktiva tetap, serta piutang jatuh tempo.",
      trainingHours: "6 jam",
      featureGroups: [
        {
          title: "Jasa & Proyek",
          items: ["Transaksi jasa", "Proyek dan departemen", "Multi fase proyek", "Project department costing", "Giro mundur"],
        },
        {
          title: "Aset & Laporan",
          items: ["Fixed asset dengan metode penyusutan", "Kas, bank, dan rekonsiliasi bank", "Desain laporan", "Predictive entry", "Transaksi berulang"],
        },
      ],
    },
  },
  {
    name: "Zahir Enterprise",
    slug: "zahir-enterprise",
    price: "Rp 25 Juta*",
    priceNote: "Harga sudah termasuk Training & Support by Phone. Belum termasuk PPN 10%",
    audience: "Untuk Bidang Usaha Skala Besar Seperti Manufaktur",
    description: "Sistem manajemen bisnis komprehensif untuk industri skala besar dan manufaktur dengan pengadaan barang lengkap.",
    benefits: [
      "Pengadaan Barang (Purchase Request, Purchase Order, Sales Quotation, Sales Order)",
      "Kelola Stok Secara Lengkap",
      "Mengelola Hutang-Piutang",
      "Fasilitas Multi",
      "Assembly, Disassembly, & Stock Opname",
    ],
    brochure: {
      overview: "Solusi paling lengkap untuk manufaktur dan perusahaan skala besar, mencakup proses pengadaan, penjualan, multi-cabang, multi-gudang, hingga transaksi logistik dan produksi.",
      trainingHours: "15 jam",
      featureGroups: [
        {
          title: "Pengadaan & Penjualan",
          items: ["Purchase request dan purchase order", "Sales quotation dan sales order", "Konsinyasi", "Delivery status dan delivery notes", "Auto purchase order"],
        },
        {
          title: "Multi Operasional",
          items: ["Multi currency, warehouse, tax, price, discount, dan freight", "Multi delivery order", "Multi fase proyek", "Multi satuan", "Multi komisi penjualan"],
        },
        {
          title: "Manufaktur & Kontrol",
          items: ["Assembly dan disassembly", "Produksi", "Distribusi biaya impor", "Lot number dan serial number", "Audit pelaporan dengan custom aging schedule"],
        },
      ],
    },
  },
  {
    name: "Zahir Enterprise Plus",
    slug: "zahir-enterprise-plus",
    price: "Call 0811-9866-999",
    priceNote: "Layanan kustomisasi & support prioritas khusus perusahaan",
    audience: "Solusi Software ERP dan Online Antarcabang",
    description: "Solusi ERP terpadu untuk integrasi operasional antarcabang secara online dengan dukungan prioritas.",
    benefits: [
      "Online Antarcabang",
      "Mengelola Persediaan Barang Secara Lengkap",
      "Pengadaan Barang (Purchase Request, Purchase Order, Sales Quotation, Sales Order)",
      "Fasilitas Multi Lengkap",
      "Layanan Support Prioritas",
    ],
  },
  {
    name: "Zahir Online",
    slug: "zahir-online",
    price: "Sesuai Kebutuhan",
    priceNote: "Paket langganan bulanan / tahunan fleksibel",
    audience: "Solusi Akuntansi Cloud & Bisnis Modern",
    description: "Akses solusi Zahir berbasis cloud yang selaras dengan mobilitas kerja dan operasional bisnis masa kini.",
    benefits: [
      "Aksesibilitas Multi-Device Cloud",
      "Pengelolaan Bisnis Praktis & Real-time",
      "Siap Mendukung Mobilitas Kerja Antarcabang",
      "Pencatatan Otomatis & Terintegrasi",
      "Keamanan Data Terenkripsi",
    ],
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
    children: productCatalog.map((product) => ({
      label: product.name,
      href: "/product/" + product.slug,
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
  { label: "Tips & Trik", href: "/tips-trik" },
  { label: "Promo & Event", href: "/promo-event" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Update & Download", href: "/update-download" },
  { label: "Partner", href: "/partner" },
];

export function findProduct(slug: string) {
  return productCatalog.find((product) => product.slug === slug);
}

export function findSupportVersion(slug: string) {
  return supportVersions.find((support) => support.slug === slug);
}
