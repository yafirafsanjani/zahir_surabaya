import { CompanyProfileHeroSection } from "@/components/home/company-profile-hero-section";
import { CompanyOverviewSection } from "@/components/home/company-overview-section";
import { ZahirAccountingFeaturesSection } from "@/components/home/zahir-accounting-features-section";
import { CompanyTestimonialsSection } from "@/components/home/company-testimonials-section";
import { CompanyHistoryTimelineSection } from "@/components/home/company-history-timeline-section";
import { CompanyOfficeLocationSection } from "@/components/home/company-product-portfolio-section";
import { CompanySurabayaServiceSection } from "@/components/home/company-surabaya-service-section";

export function HomePageView() {
  return (
    <div className="min-h-screen text-foreground">
      {/* 1. Hero Company Profile Zahir */}
      <CompanyProfileHeroSection />

      {/* 3. Penjelasan Profil PT Zahir Internasional & Peran Zahir Surabaya */}
      <CompanyOverviewSection />

      {/* 4. Fitur Utama & Informasi Umum Zahir Accounting */}
      <ZahirAccountingFeaturesSection />

      {/* 5. 3D Perspective Testimonial Carousel */}
      <CompanyTestimonialsSection />

      {/* 6. Kronologi Sejarah Perjalanan Inovasi Zahir */}
      <CompanyHistoryTimelineSection />

      {/* 7. Lokasi Kantor & Hub Layanan Zahir dengan Fly-To Map */}
      <CompanyOfficeLocationSection />

      {/* 8. Layanan & Pendampingan Resmi Area Surabaya */}
      <CompanySurabayaServiceSection />

    </div>
  );
}