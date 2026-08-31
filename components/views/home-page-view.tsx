import { CompanyProfileHeroSection } from "@/components/home/company-profile-hero-section";
import { CompanyStatsSection } from "@/components/home/company-stats-section";
import { CompanyOverviewSection } from "@/components/home/company-overview-section";
import { ZahirAccountingFeaturesSection } from "@/components/home/zahir-accounting-features-section";
import { CompanyHistoryTimelineSection } from "@/components/home/company-history-timeline-section";
import { CompanyOfficeLocationSection } from "@/components/home/company-product-portfolio-section";
import { CompanySurabayaServiceSection } from "@/components/home/company-surabaya-service-section";
import { CompanyProfileCallToActionSection } from "@/components/home/company-profile-call-to-action-section";

export function HomePageView() {
  return (
    <div className="min-h-screen text-foreground">
      {/* 1. Hero Company Profile Zahir */}
      <CompanyProfileHeroSection />

      {/* 2. Statistik & Bukti Kepercayaan Pasar (100.000+ Pengguna, 28+ Tahun, Penghargaan) */}
      <CompanyStatsSection />

      {/* 3. Penjelasan Profil PT Zahir Internasional & Peran Zahir Surabaya */}
      <CompanyOverviewSection />

      {/* 4. Fitur Utama & Informasi Umum Zahir Accounting (Pilar Keunggulan) */}
      <ZahirAccountingFeaturesSection />

      {/* 5. Kronologi Sejarah Perjalanan Inovasi Zahir */}
      <CompanyHistoryTimelineSection />

      {/* 6. Lokasi Kantor Zahir Accounting Surabaya */}
      <CompanyOfficeLocationSection />

      {/* 7. Layanan & Pendampingan Resmi Area Surabaya */}
      <CompanySurabayaServiceSection />

      {/* 8. Call to Action Beranda */}
      <CompanyProfileCallToActionSection />
    </div>
  );
}



