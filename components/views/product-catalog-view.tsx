import { HeroBanner } from "@/components/sections/hero-banner";
import { ProductCategoryGrid } from "@/components/product/product-category-grid";

export function ProductCatalogView() {
  return (
    <div className="min-h-screen text-foreground">
      <HeroBanner
        compact
        eyebrow="Katalog Produk"
        title="Solusi Bisnis Modern Zahir"
        description="Jelajahi portofolio lengkap produk dan layanan Zahir — dari akuntansi, ERP, HR, POS, hingga solusi berbasis AI — dirancang untuk mendukung efisiensi operasional dan pertumbuhan bisnis Anda."
        primaryAction={{ href: "/contact-us", label: "Konsultasikan Kebutuhan" }}
        backgroundImage="/images/business-people-shaking-hands-together-1-1024x701.jpg"
        backgroundAlt="Kemitraan bisnis profesional"
      />

      <ProductCategoryGrid />
    </div>
  );
}
