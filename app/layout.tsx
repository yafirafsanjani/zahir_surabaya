import type { Metadata } from "next";
import { HeaderNavigation } from "@/components/layout/header-navigation";
import { FooterSection } from "@/components/layout/footer-section";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Zahir Surabaya | Solusi Akuntansi & Bisnis Modern", template: "%s | Zahir Surabaya" },
  description: "Pusat layanan resmi Zahir Accounting di Surabaya. Konsultasi produk, pelatihan, dan dukungan teknis sistem manajemen bisnis.",
};

const themeInitializer = `
  try {
    const savedTheme = localStorage.getItem("zahir-theme");
    document.documentElement.dataset.theme = savedTheme === "dark" ? "dark" : "light";
  } catch {
    document.documentElement.dataset.theme = "light";
  }
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-primary selection:text-on-primary">
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
