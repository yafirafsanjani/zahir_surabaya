import { ProductInteractiveGrid } from "@/components/home/product-interactive-grid";
import { HeroBanner } from "@/components/sections/hero-banner";

export function ProductCatalogView() {
  return (
    <div className="min-h-screen text-zinc-100">
      {/* Hero Katalog Produk */}
      <HeroBanner
        compact
        eyebrow="Katalog Produk"
        title="Pilihan Solusi Software Akuntansi Zahir"
        description="Jelajahi seluruh varian produk Zahir yang dirancang spesifik untuk mendukung efisiensi operasional dan ketepatan pembukuan bisnis Anda."
      />
      {/* Grid Interaktif dengan Filter Produk */}
      <ProductInteractiveGrid />
    </div>
  );
}
