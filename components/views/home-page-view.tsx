import { HeroInteractive } from "@/components/home/hero-interactive";
import { MetricsBanner } from "@/components/home/metrics-banner";
import { IndustryMarquee } from "@/components/home/industry-marquee";
import { ProductInteractiveGrid } from "@/components/home/product-interactive-grid";
import { FeaturesWorkflow } from "@/components/home/features-workflow";
import { SupportAndHubCta } from "@/components/home/support-cta";

export function HomePageView() {
  return (
    <div className="relative min-h-screen bg-[#090a0f] text-zinc-100 bg-grid-pattern">
      {/* 1. Bagian Hero Beranda Interaktif */}
      <HeroInteractive />

      {/* 2. Bagian Banner Metrik & Kredibilitas */}
      <MetricsBanner />

      {/* 3. Bagian Marquee Ticker Industri */}
      <IndustryMarquee />

      {/* 4. Bagian Katalog Produk Interaktif */}
      <ProductInteractiveGrid />

      {/* 5. Bagian Alur Kerja Terintegrasi */}
      <FeaturesWorkflow />

      {/* 6. Bagian Dukungan & Aksi Konsultasi Hub */}
      <SupportAndHubCta />
    </div>
  );
}
