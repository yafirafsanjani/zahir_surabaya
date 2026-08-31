import Link from "next/link";

const surabayaServices = [
  "Pendampingan awal untuk memilih paket Zahir Accounting yang tepat",
  "Informasi alur peningkatan versi (upgrade) serta opsi Zahir Online",
  "Jalur komunikasi terarah untuk kebutuhan implementasi dan training staf",
  "Pusat rujukan resmi bagi pelaku usaha di Jawa Timur dan sekitarnya",
];

export function CompanySurabayaServiceSection() {
  return (
    <section className="border-b border-border bg-background bg-grid-pattern py-16 sm:py-20 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-xs">
            <div className="pointer-events-none absolute top-0 right-0 size-72 rounded-full bg-primary/10 blur-3xl" />
            <p className="relative text-xs font-bold tracking-widest text-primary uppercase">Zahir Surabaya</p>
            <h2 className="relative mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Titik temu kebutuhan software akuntansi di Jawa Timur.
            </h2>
            <p className="relative mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Sebagai perwakilan resmi, Zahir Surabaya menjembatani pemilik bisnis, konsultan keuangan, dan tim operasional untuk mendapatkan solusi pembukuan yang sesuai dengan konteks dan alur kerja di lapangan.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Link className="rounded-full bg-primary px-6 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-primary-hover hover:shadow-md hover:shadow-primary/20" href="/contact-us">
                Konsultasi Kebutuhan Anda
              </Link>
              <Link className="rounded-full border border-border bg-surface px-6 py-3 text-xs font-semibold text-foreground shadow-xs transition hover:border-primary/40 hover:bg-surface-raised hover:text-primary" href="/support-centre">
                Pusat Dukungan Teknis
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-primary/25 bg-primary/5 dark:bg-primary/10 p-8 backdrop-blur-xl sm:p-10 transition-colors">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Yang Bisa Dieksplorasi</p>
            <ul className="mt-6 space-y-4">
              {surabayaServices.map((item, index) => (
                <li className="flex items-start gap-3" key={item}>
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-xs font-bold text-primary">0{index + 1}</span>
                  <p className="pt-0.5 text-xs font-medium leading-relaxed text-foreground/80">{item}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-border pt-5 text-xs leading-relaxed text-muted">
              Didukung referensi resmi dan pengalaman implementasi nyata di berbagai sektor usaha.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

