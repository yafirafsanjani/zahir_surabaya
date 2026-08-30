import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findProduct, productCatalog } from "@/data/site";
import { ProductDetailView } from "@/components/views/product-detail-view";

type ProductDetailPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productCatalog.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const product = findProduct((await params).slug);
  return { title: product?.name ? `${product.name} | Zahir Surabaya` : "Detail Produk | Zahir Surabaya" };
}

/**
 * Rute Dinamis: /product/[slug] (Halaman Detail Produk Spesifik)
 * Menggunakan komponen spesifik: ProductDetailView
 */
export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = findProduct((await params).slug);
  if (!product) notFound();

  return <ProductDetailView product={product} />;
}
