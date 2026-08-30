export type NavigationItem = { label: string; href: string; children?: { label: string; href: string }[] };
export type Product = { name: string; slug: string; audience: string; description: string; benefits: string[] };
export type SupportVersion = { name: string; slug: string; description: string };

export const productCatalog: Product[] = [
  { name: "Zahir Small Business", slug: "zahir-small-business", audience: "Usaha berkembang", description: "Fondasi pencatatan keuangan untuk bisnis yang sedang bertumbuh.", benefits: ["Pencatatan transaksi terstruktur", "Laporan keuangan lebih mudah", "Alur kerja bisnis yang rapi"] },
  { name: "Zahir Flexy Trade", slug: "zahir-flexy-trade", audience: "Bisnis perdagangan", description: "Dukungan pengelolaan transaksi untuk kebutuhan usaha perdagangan.", benefits: ["Pencatatan transaksi perdagangan", "Pemantauan operasional", "Informasi bisnis yang terorganisir"] },
  { name: "Zahir Personal", slug: "zahir-personal", audience: "Pengelolaan pribadi", description: "Mulai membangun kebiasaan finansial yang lebih tertata.", benefits: ["Pencatatan keuangan personal", "Ringkasan aktivitas keuangan", "Pengelolaan yang sederhana"] },
  { name: "Zahir Standart", slug: "zahir-standart", audience: "Usaha kecil", description: "Solusi awal untuk membantu bisnis menangani administrasi keuangannya.", benefits: ["Alur administrasi keuangan", "Pencatatan bisnis yang konsisten", "Informasi siap ditinjau"] },
  { name: "Zahir Enterprise", slug: "zahir-enterprise", audience: "Bisnis skala besar", description: "Pondasi pengelolaan untuk kebutuhan bisnis dengan operasi yang lebih luas.", benefits: ["Pengelolaan proses yang terstruktur", "Kebutuhan bisnis yang berkembang", "Visibilitas informasi yang lebih baik"] },
  { name: "Zahir Enterprise Plus", slug: "zahir-enterprise-plus", audience: "Organisasi kompleks", description: "Untuk organisasi yang membutuhkan dukungan pengelolaan lebih menyeluruh.", benefits: ["Dukungan kebutuhan yang lebih kompleks", "Alur kerja yang dapat dikembangkan", "Landasan untuk pertumbuhan organisasi"] },
  { name: "Zahir Online", slug: "zahir-online", audience: "Bisnis modern", description: "Akses solusi Zahir yang selaras dengan cara kerja bisnis masa kini.", benefits: ["Aksesibilitas yang fleksibel", "Pengelolaan bisnis yang praktis", "Siap mendukung mobilitas kerja"] },
];

export const supportVersions: SupportVersion[] = [
  { name: "Support Zahir Versi 5", slug: "zahir-versi-5", description: "Pusat informasi dan jalur dukungan untuk pengguna Zahir Versi 5." },
  { name: "Support Zahir Versi 6", slug: "zahir-versi-6", description: "Pusat informasi dan jalur dukungan untuk pengguna Zahir Versi 6." },
];

export const publicNavigation: NavigationItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Product", href: "/product", children: productCatalog.map((product) => ({ label: product.name, href: "/product/" + product.slug })) },
  { label: "Support Centre", href: "/support-centre", children: supportVersions.map((support) => ({ label: support.name, href: "/support-centre/" + support.slug })) },
  { label: "Tips & Trik", href: "/tips-trik" },
  { label: "Promo & Event", href: "/promo-event" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Update & Download", href: "/update-download" },
  { label: "Partner", href: "/partner" },
];

export function findProduct(slug: string) { return productCatalog.find((product) => product.slug === slug); }
export function findSupportVersion(slug: string) { return supportVersions.find((support) => support.slug === slug); }
