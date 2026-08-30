import type { Metadata } from "next";
import { HomePageView } from "@/components/views/home-page-view";

export const metadata: Metadata = {
  title: "Zahir Surabaya | Software Akuntansi & Bisnis Modern",
  description:
    "Hub resmi Zahir di Surabaya & Jawa Timur. Solusi pembukuan, POS kasir, inventori stok, dan laporan keuangan terintegrasi untuk bisnis UKM hingga Enterprise.",
};

/**
 * Rute: / (Halaman Utama / Beranda)
 * Menggunakan komponen spesifik: HomePageView
 */
export default function HomePage() {
  return <HomePageView />;
}
