import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findSupportVersion, supportVersions } from "@/data/site";
import { SupportDetailView } from "@/components/views/support-detail-view";

type SupportDetailPageProps = { params: Promise<{ version: string }> };

export function generateStaticParams() {
  return supportVersions.map((support) => ({ version: support.slug }));
}

export async function generateMetadata({ params }: SupportDetailPageProps): Promise<Metadata> {
  const support = findSupportVersion((await params).version);
  return { title: support?.name ? `${support.name} | Zahir Surabaya` : "Pusat Dukungan | Zahir Surabaya" };
}

/**
 * Rute Dinamis: /support-centre/[version] (Halaman Detail Versi Dukungan Teknis)
 * Menggunakan komponen spesifik: SupportDetailView
 */
export default async function SupportDetailPage({ params }: SupportDetailPageProps) {
  const support = findSupportVersion((await params).version);
  if (!support) notFound();

  return <SupportDetailView support={support} />;
}
