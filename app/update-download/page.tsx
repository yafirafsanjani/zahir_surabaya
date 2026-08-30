import type { Metadata } from "next";
import { UpdateDownloadView } from "@/components/views/update-download-view";

export const metadata: Metadata = { 
  title: "Update & Download | Zahir Surabaya",
  description: "Unduh pembaruan rilis terbaru, patch sistem, dan installer resmi Zahir Accounting."
};

/**
 * Rute: /update-download (Halaman Update & Download)
 * Menggunakan komponen spesifik: UpdateDownloadView
 */
export default function UpdateDownloadPage() {
  return <UpdateDownloadView />;
}
