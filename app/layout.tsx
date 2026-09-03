import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HeaderNavigation } from "@/components/layout/header-navigation";
import { FooterSection } from "@/components/layout/footer-section";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Zahir Surabaya | Solusi Akuntansi & Bisnis Modern", template: "%s | Zahir Surabaya" },
  description: "Pusat layanan resmi Zahir Accounting di Surabaya. Konsultasi produk, pelatihan, dan dukungan teknis sistem manajemen bisnis.",
};

const themeInitializer = `
  (function() {
    try {
      var savedTheme = localStorage.getItem("zahir-theme");
      var isDark = savedTheme === "dark";
      if (isDark) {
        document.documentElement.dataset.theme = "dark";
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.dataset.theme = "light";
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {
      document.documentElement.dataset.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">
        {/* 1. Komponen Header & Navigasi Atas */}
        <HeaderNavigation />

        {/* 2. Konten Halaman Aktif */}
        <main className="flex-1">{children}</main>

        {/* 3. Komponen Footer Bawah */}
        <FooterSection />
      </body>
    </html>
  );
}

