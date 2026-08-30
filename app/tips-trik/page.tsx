import type { Metadata } from "next";
import { TipsTrikView } from "@/components/views/tips-trik-view";

export const metadata: Metadata = { 
  title: "Tips & Trik | Zahir Surabaya",
  description: "Artikel dan panduan praktis akuntansi, manajemen stok, dan efisiensi pembukuan bisnis."
};

/**
 * Rute: /tips-trik (Halaman Tips & Trik Pembukuan)
 * Menggunakan komponen spesifik: TipsTrikView
 */
export default function TipsTrikPage() {
  return <TipsTrikView />;
}
