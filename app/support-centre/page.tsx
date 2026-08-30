import type { Metadata } from "next";
import { SupportCentreView } from "@/components/views/support-centre-view";

export const metadata: Metadata = { 
  title: "Support Centre | Zahir Surabaya",
  description: "Pusat bantuan teknis dan panduan penggunaan software Zahir Versi 5, Versi 6, dan Zahir Online."
};

/**
 * Rute: /support-centre (Halaman Support Centre)
 * Menggunakan komponen spesifik: SupportCentreView
 */
export default function SupportCentrePage() {
  return <SupportCentreView />;
}
