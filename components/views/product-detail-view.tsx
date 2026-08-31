import Link from "next/link";
import { HeroBanner } from "@/components/sections/hero-banner";
import { Product } from "@/data/site";

type ProductDetailViewProps = {
  product: Product;
};

const brochureAdvantages = [
  {
    title: "Keputusan lebih cepat",
    description: "Tampilan grafik analisis bisnis membantu membaca laporan keuangan secara lebih fleksibel dan informatif.",
    icon: "chart",
  },
  {
    title: "Kondisi keuangan terpantau",
    description: "Brosur menekankan kemudahan memantau laporan keuangan secara aman kapan pun dibutuhkan.",
    icon: "device",
  },
  {
    title: "Piutang lebih terkendali",
    description: "Reminder serta grafik membantu mengingat giro dan piutang usaha yang mendekati jatuh tempo.",
    icon: "clock",
  },
  {
    title: "Persediaan lebih akurat",
    description: "Alur pembelian dan penjualan memperbarui stok serta HPP secara otomatis, dilengkapi stock opname.",
    icon: "box",
  },
  {
    title: "Antarmuka yang nyaman",
    description: "Zahir Accounting 6 dirancang dengan tampilan baru yang membantu aktivitas administrasi bisnis sehari-hari.",
    icon: "sparkle",
  },
  {
    title: "Training & layanan purna jual",
    description: "Brosur mencantumkan ketersediaan training penggunaan dan dukungan purna jual untuk pelanggan.",
    icon: "support",
  },
] as const;

function BrochureAdvantageIcon({ icon }: { icon: (typeof brochureAdvantages)[number]["icon"] }) {
  if (icon === "chart") {
    return <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />;
  }

  if (icon === "device") {
    return <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.25A2.25 2.25 0 016.75 3h10.5a2.25 2.25 0 012.25 2.25v13.5A2.25 2.25 0 0117.25 21H6.75a2.25 2.25 0 01-2.25-2.25V5.25zM9 18h6" />;
  }

  if (icon === "clock") {
    return <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2.25m5.25-2.25a9.25 9.25 0 11-18.5 0 9.25 9.25 0 0118.5 0z" />;
  }

  if (icon === "box") {
    return <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.5V7.708a2.25 2.25 0 00-1.125-1.949l-6.75-3.896a2.25 2.25 0 00-2.25 0l-6.75 3.896A2.25 2.25 0 003 7.708V16.5a2.25 2.25 0 001.125 1.949l6.75 3.896a2.25 2.25 0 002.25 0l6.75-3.896A2.25 2.25 0 0021 16.5zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />;
  }

  if (icon === "sparkle") {
    return <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18l-.813-2.096a4.5 4.5 0 00-2.591-2.591L3.5 12.5l2.096-.813a4.5 4.5 0 002.591-2.591L9 7l.813 2.096a4.5 4.5 0 002.591 2.591l2.096.813-2.096.813a4.5 4.5 0 00-2.591 2.591zM18.25 7.875L18 9l-.25-1.125a3.375 3.375 0 00-2.625-2.625L14 5l1.125-.25a3.375 3.375 0 002.625-2.625L18 1l.25 1.125a3.375 3.375 0 002.625 2.625L22 5l-1.125.25a3.375 3.375 0 00-2.625 2.625z" />;
  }

  return <path strokeLinecap="round" strokeLinejoin="round" d="M18 8.25V6a6 6 0 00-12 0v2.25m-1.5 0h15A1.5 1.5 0 0121 9.75v9a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 18.75v-9a1.5 1.5 0 011.5-1.5zM9 14.25l2 2 4-4" />;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  return (
    <div className="min-h-screen text-foreground">
      <HeroBanner
        compact
        eyebrow={"Katalog Produk - " + product.name}
        title={product.name}
        description={product.description}
        primaryAction={{ href: "/contact-us", label: "Konsultasikan Varian Ini" }}
        secondaryAction={{ href: "/product", label: "Kembali ke Katalog" }}
      />

      <section className="bg-background py-16 sm:py-20 lg:py-24 transition-colors duration-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-xs sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">Harga Paket</span>
                  <div className="mt-1 text-3xl font-black text-foreground sm:text-4xl">{product.price}</div>
                </div>
                <div className="rounded-xl border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold text-primary">
                  {product.audience}
                </div>
              </div>

              {product.priceNote && <p className="mt-4 text-xs text-muted">{product.priceNote}</p>}

              <h2 className="mt-8 text-xl font-bold tracking-tight text-foreground">Fitur &amp; Modul {product.name}</h2>
              <ul className="mt-6 space-y-3.5">
                {product.benefits.map((benefit) => (
                  <li className="flex items-start gap-3 text-xs leading-relaxed text-foreground/80 sm:text-sm" key={benefit}>
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between rounded-3xl border border-primary/25 bg-primary/5 p-8 backdrop-blur-xl transition-colors dark:bg-primary/10 sm:p-10">
              <div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">Pendampingan Surabaya</span>
                <h3 className="mt-2 text-xl font-bold text-foreground">Implementasi &amp; Training On-site</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                  Tim kami siap mendampingi pengaturan chart of accounts (COA), migrasi saldo awal, dan pelatihan staf operasional di tempat kerja Anda.
                </p>
                <div className="mt-6 space-y-2.5 border-t border-border pt-5 text-xs font-medium text-foreground/80">
                  <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" />Layanan resmi area Surabaya &amp; Jawa Timur</div>
                  <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" />Konsultasi kebutuhan alur kerja bisnis</div>
                  <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" />Dukungan teknis responsif</div>
                </div>
              </div>
              <Link className="mt-8 block w-full rounded-full bg-primary py-3.5 text-center text-xs font-bold text-white shadow-xs transition hover:bg-primary-hover hover:shadow-md hover:shadow-primary/20" href="/contact-us">
                Jadwalkan Demo &amp; Konsultasi
              </Link>
            </div>
          </div>

          {product.brochure && (
            <div className="mt-12 rounded-3xl border border-border bg-surface-raised p-6 shadow-xs sm:p-8 lg:p-10">
              <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">
                    Detail E-Brosur Zahir Accounting 6
                  </div>
                  <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl">Modul yang tercantum untuk {product.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{product.brochure.overview}</p>
                </div>
                <div className="shrink-0 rounded-2xl border border-primary/20 bg-card px-4 py-3 text-left shadow-xs md:text-right">
                  <span className="block text-[11px] font-bold tracking-wider text-muted uppercase">Training dalam brosur</span>
                  <span className="mt-0.5 block text-lg font-black text-primary">{product.brochure.trainingHours}</span>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {product.brochure.featureGroups.map((group) => (
                  <article key={group.title} className="rounded-2xl border border-border bg-card p-5 shadow-xs">
                    <h3 className="text-sm font-bold text-foreground">{group.title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-muted">
                          <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <p className="mt-6 text-[11px] leading-relaxed text-muted">
                Rincian modul dan durasi training di atas merujuk pada E-Brosur Zahir Accounting 6 yang dibagikan. Harga dan ketentuan pembelian mengikuti informasi paket yang tercantum pada halaman ini serta konfirmasi dari tim Zahir Surabaya.
              </p>
            </div>
          )}

          {product.brochure && (
            <div className="mt-12">
              <div className="max-w-2xl">
                <p className="text-xs font-bold tracking-widest text-primary uppercase">Manfaat Zahir Accounting 6</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-foreground sm:text-3xl">Pembukuan yang lebih mudah untuk aktivitas bisnis sehari-hari.</h2>
              </div>
              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {brochureAdvantages.map((advantage) => (
                  <article key={advantage.title} className="rounded-2xl border border-border bg-card p-5 shadow-xs transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <BrochureAdvantageIcon icon={advantage.icon} />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-foreground">{advantage.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">{advantage.description}</p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
