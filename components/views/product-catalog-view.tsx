import { ProductInteractiveGrid } from "@/components/home/product-interactive-grid";
import { ZahirAccountingComparisonSection } from "@/components/home/zahir-accounting-comparison-section";
import { HeroBanner } from "@/components/sections/hero-banner";

export function ProductCatalogView() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Hero Katalog Produk */}
      <HeroBanner
        compact
        eyebrow="Katalog Produk"
        title="Pilihan Solusi Software Akuntansi Zahir"
        description="Jelajahi seluruh varian produk Zahir yang dirancang spesifik untuk mendukung efisiensi operasional dan ketepatan pembukuan bisnis Anda."
      />

      {/* Harga & Filter Paket Produk */}
      <ProductInteractiveGrid />

      {/* Informasi E-Brosur, Manfaat, dan Tabel Perbandingan Modul */}
      <ZahirAccountingComparisonSection />
    </div>
  );
}
