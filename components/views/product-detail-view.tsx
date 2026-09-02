import Link from "next/link";
import { HeroBanner } from "@/components/sections/hero-banner";
import { Product } from "@/data/site";

type ProductDetailViewProps = {
  product: Product;
};

const brochureAdvantages = [
  {
    title: "Keputusan Lebih Cepat",
    description: "Tampilan grafik analisis bisnis membantu membaca laporan keuangan secara lebih fleksibel dan informatif.",
  },
  {
    title: "Monitoring Real-Time",
    description: "Memantau posisi neraca, saldo kas, dan laba rugi secara aman dan terstruktur saat dibutuhkan.",
  },
  {
    title: "Piutang Terkontrol",
    description: "Reminder serta grafik penagihan membantu mengingat giro dan piutang usaha mendekati jatuh tempo.",
  },
  {
    title: "Persediaan Akurat",
    description: "Alur pembelian dan penjualan memperbarui stok serta HPP secara otomatis, dilengkapi stock opname.",
  },
  {
    title: "Antarmuka Nyaman",
    description: "Zahir Accounting dirancang intuitif untuk mempercepat input transaksi administrasi harian.",
  },
  {
    title: "Pelatihan Resmi",
    description: "Pendampingan langsung dari tim support Surabaya dengan training dan konsultasi berkelanjutan.",
  },
];

export function ProductDetailView({ product }: ProductDetailViewProps) {
  return (
    <div className="min-h-screen text-foreground">
      <HeroBanner
        compact
        eyebrow={"Katalog Produk · " + product.name}
        title={product.name}
        description={product.description}
        primaryAction={{ href: "/contact-us", label: "Konsultasikan Varian Ini" }}
        secondaryAction={{ href: "/product", label: "Kembali ke Katalog" }}
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Specs Card */}
            <div className="clean-card p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
                <div>
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">Harga Lisensi Resmi</span>
                  <div className="mt-1 text-2xl sm:text-3xl font-bold text-foreground">{product.price}</div>
                </div>
                <div className="rounded-md bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary">
                  {product.audience}
                </div>
              </div>

              {product.priceNote && <p className="mt-3 text-xs text-muted">{product.priceNote}</p>}

              <h2 className="mt-6 text-base font-bold text-foreground">Cakupan Fitur &amp; Modul</h2>
              <ul className="mt-4 space-y-2.5">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-xs sm:text-sm text-body leading-relaxed">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Card */}
            <div className="clean-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="badge-minimal">Pendampingan Surabaya</span>
                <h3 className="mt-3 text-lg font-bold text-foreground">Implementasi &amp; Training On-site</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                  Tim kami siap mendampingi pengaturan chart of accounts (COA), migrasi saldo awal, dan pelatihan staf operasional langsung di kantor Anda.
                </p>
                <div className="mt-5 space-y-2 text-xs text-body border-t border-border pt-4">
                  <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" />Layanan resmi wilayah Jawa Timur</div>
                  <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" />Konsultasi alur kerja &amp; integrasi modul</div>
                  <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" />Dukungan teknis onsite &amp; remote</div>
                </div>
              </div>

              <Link className="btn-primary mt-6 w-full justify-center" href="/contact-us">
                Jadwalkan Demo &amp; Konsultasi
              </Link>
            </div>
          </div>

          {/* Brochure Modules */}
          {product.brochure && (
            <div className="mt-10 rounded-xl border border-border bg-surface-raised p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-5">
                <div>
                  <span className="badge-minimal">Detail E-Brosur Zahir 6</span>
                  <h2 className="mt-2 text-xl font-bold text-foreground">Modul Tercantum untuk {product.name}</h2>
                  <p className="mt-1 text-xs text-muted">{product.brochure.overview}</p>
                </div>
                <div className="shrink-0 rounded-lg border border-border bg-card px-4 py-2.5 text-left sm:text-right">
                  <span className="block text-[10px] font-semibold text-muted uppercase">Training Resmi</span>
                  <span className="block text-base font-bold text-primary">{product.brochure.trainingHours}</span>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {product.brochure.featureGroups.map((group) => (
                  <div key={group.title} className="clean-card p-5">
                    <h3 className="text-xs font-bold text-foreground">{group.title}</h3>
                    <ul className="mt-3 space-y-2 text-xs text-muted">
                      {group.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <span className="mt-1 size-1 rounded-full bg-primary" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Advantages */}
          {product.brochure && (
            <div className="mt-10">
              <h2 className="text-lg font-bold text-foreground">Keunggulan Zahir Accounting</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {brochureAdvantages.map((adv) => (
                  <div key={adv.title} className="clean-card p-5">
                    <h3 className="text-xs font-bold text-foreground">{adv.title}</h3>
                    <p className="mt-1 text-xs text-muted leading-relaxed">{adv.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}