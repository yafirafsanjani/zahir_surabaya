import type { Metadata } from "next";
import { ContactUsView } from "@/components/views/contact-us-view";

export const metadata: Metadata = { 
  title: "Hubungi Kami | Zahir Surabaya",
  description: "Konsultasikan kebutuhan software akuntansi dan jadwalkan demo langsung dengan konsultan Zahir Surabaya."
};

/**
 * Rute: /contact-us (Halaman Kontak & Konsultasi)
 * Menggunakan komponen spesifik: ContactUsView
 */
export default function ContactUsPage() {
  return <ContactUsView />;
}
