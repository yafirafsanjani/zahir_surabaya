import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPricingView } from "@/components/views/category-pricing-view";
import { findCategory, productCategories } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const category = findCategory(slug);
  if (!category) return { title: "Produk Tidak Ditemukan | Zahir Surabaya" };
  return {
    title: `${category.name} | Zahir Surabaya`,
    description: category.description,
  };
}

export function generateStaticParams() {
  return productCategories.map((cat) => ({ slug: cat.slug }));
}

export default async function ProductCategoryPage({ params }: Params) {
  const { slug } = await params;
  const category = findCategory(slug);
  if (!category) notFound();
  return <CategoryPricingView category={category} />;
}
