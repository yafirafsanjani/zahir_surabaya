import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlanDetailView } from "@/components/views/plan-detail-view";
import { findPlan, flattenProducts, PricingMode, PlanDetail } from "@/data/site";

type Params = { params: Promise<{ slug: string; mode: PricingMode; planSlug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug, mode, planSlug } = await params;
  const found = findPlan(slug, mode, planSlug);
  if (!found) return { title: "Produk Tidak Ditemukan | Zahir Surabaya" };
  const detail = found.detail ?? synthesizeDetail(found.plan);
  return {
    title: `${detail.name} | Zahir Surabaya`,
    description: detail.valueProposition,
  };
}

export function generateStaticParams() {
  return flattenProducts().map((p) => ({
    slug: p.categorySlug,
    mode: p.mode,
    planSlug: p.planSlug,
  }));
}

export default async function PlanDetailPage({ params }: Params) {
  const { slug, mode, planSlug } = await params;
  const found = findPlan(slug, mode, planSlug);
  if (!found) notFound();

  const detail = found.detail ?? synthesizeDetail(found.plan);

  const otherPlans = found.section.plans
    .filter((p) => p.slug !== planSlug)
    .map((p) => ({ slug: p.slug, name: p.name, price: p.price }));

  return (
    <PlanDetailView
      category={found.cat}
      detail={detail}
      mode={found.section.mode}
      otherPlans={otherPlans}
      sectionTitle={found.section.title}
    />
  );
}

function synthesizeDetail(plan: {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  pricePeriod?: string;
  priceNote?: string;
  users: string;
  description: string;
  features: string[];
  cta: { label: string; href: string; variant?: string };
}): PlanDetail {
  return {
    slug: plan.slug,
    name: plan.name,
    tagline: plan.tagline,
    valueProposition: plan.description,
    price: plan.price,
    pricePeriod: plan.pricePeriod,
    priceNote: plan.priceNote,
    users: plan.users,
    highlights: plan.features.slice(0, 4).map((f, i) => ({
      title: ["Fitur Utama", "Cakupan Lengkap", "Skalabilitas", "Dukungan Resmi"][i] ?? "Fitur Utama",
      description: `Tersedia dalam paket ${plan.name}: ${f}. Mendukung operasional bisnis Anda secara menyeluruh.`,
    })),
    features: plan.features,
    comparison: [
      {
        title: "Fitur Utama",
        features: plan.features.map((f) => ({ name: f, included: true })),
      },
    ],
    specifications: [
      { label: "Jumlah User", value: plan.users },
      { label: "Model Pembayaran", value: plan.cta.label },
      { label: "Rekomendasi untuk", value: plan.tagline },
    ],
    support: [
      "Dukungan resmi dari tim Zahir Surabaya",
      "Panduan & basis pengetahuan",
      "Konsultasi alur kerja",
    ],
    faq: [
      {
        q: "Apakah paket ini sesuai untuk kebutuhan saya?",
        a: `${plan.name} dirancang untuk: ${plan.tagline}. Hubungi konsultan kami untuk memastikannya sesuai.`,
      },
      {
        q: "Bagaimana cara memulai?",
        a: `Silakan klik "${plan.cta.label}" dan tim kami akan menghubungi Anda untuk panduan lebih lanjut.`,
      },
    ],
    cta: plan.cta,
  };
}
