import { CompanyProfileHeroSection } from "@/components/home/company-profile-hero-section";
import { CompanyOverviewSection } from "@/components/home/company-overview-section";
import { CompanyHistoryTimelineSection } from "@/components/home/company-history-timeline-section";
import { CompanyProductPortfolioSection } from "@/components/home/company-product-portfolio-section";
import { CompanySurabayaServiceSection } from "@/components/home/company-surabaya-service-section";
import { CompanyProfileCallToActionSection } from "@/components/home/company-profile-call-to-action-section";

/**
 * Komposisi utama Beranda.
 * Fokus halaman: company profile Zahir, sejarah, portofolio produk,
 * peran Zahir Surabaya, dan ajakan konsultasi.
 */
export function HomePageView() {
  return (
    <div className="min-h-screen text-zinc-100">
      {/* 1. Hero Company Profile Zahir */}
      <CompanyProfileHeroSection />

      {/* 2. Penjelasan: Apa itu Zahir dan peran Zahir Surabaya */}
      <CompanyOverviewSection />

      {/* 3. Kronologi Sejarah Zahir */}
      <CompanyHistoryTimelineSection />

      {/* 4. Portofolio Produk Zahir */}
      <CompanyProductPortfolioSection />

      {/* 5. Layanan dan arah konsultasi Zahir Surabaya */}
      <CompanySurabayaServiceSection />

      {/* 6. Call to Action Beranda */}
      <CompanyProfileCallToActionSection />
    </div>
  );
}