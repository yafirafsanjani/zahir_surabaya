import type { Metadata } from "next";
import { PartnerView } from "@/components/views/partner-view";

export const metadata: Metadata = { 
  title: "Partner & Kemitraan | Zahir Surabaya",
  description: "Program kemitraan untuk konsultan keuangan, integrator IT, dan institusi pendidikan."
};

/**
 * Rute: /partner (Halaman Partner & Kemitraan)
 * Menggunakan komponen spesifik: PartnerView
 */
export default function PartnerPage() {
  return <PartnerView />;
}
