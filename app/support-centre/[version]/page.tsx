import type { Metadata } from "next";
import { PromoEventView } from "@/components/views/promo-event-view";

export const metadata: Metadata = { 
  title: "Promo & Event | Zahir Surabaya",
  description: "Program promo upgrade lisensi, workshop akuntansi, dan jadwal user gathering Zahir Surabaya."
};

/**
 * Rute: /promo-event (Halaman Promo & Event)
 * Menggunakan komponen spesifik: PromoEventView
 */
export default function PromoEventPage() {
  return <PromoEventView />;
}
