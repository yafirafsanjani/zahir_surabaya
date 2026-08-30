import type { Metadata } from "next";
import { HeaderNavigation } from "@/components/layout/header-navigation";
import { FooterSection } from "@/components/layout/footer-section";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Zahir Surabaya | Solusi Akuntansi & Bisnis Modern", template: "%s | Zahir Surabaya" },
  description: "Pusat layanan resmi Zahir Accounting di Surabaya. Konsultasi produk, pelatihan, dan dukungan teknis sistem manajemen bisnis.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body className="bg-[#090a0f] text-zinc-100 antialiased selection:bg-emerald-500 selection:text-zinc-950">
        {/* 1. Komponen Header & Navigasi Atas */}
        <HeaderNavigation />

        {/* 2. Konten Halaman Aktif */}
        <main>{children}</main>

        {/* 3. Komponen Footer Bawah */}
        <FooterSection />
      </body>
    </html>
  );
}
