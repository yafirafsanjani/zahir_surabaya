import type { Metadata } from "next";
import { ProductCatalogView } from "@/components/views/product-catalog-view";

export const metadata: Metadata = { 
  title: "Katalog Produk | Zahir Surabaya",
  description: "Daftar lengkap solusi perangkat lunak akuntansi Zahir untuk berbagai skala usaha di Surabaya."
};

/**
 * Rute: /product (Halaman Katalog Produk)
 * Menggunakan komponen spesifik: ProductCatalogView
 */
export default function ProductCatalogPage() {
  return <ProductCatalogView />;
}
