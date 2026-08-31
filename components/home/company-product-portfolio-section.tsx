import Link from "next/link";

const googleMapsLocationUrl = "https://share.google/en5SdkJwDWySfDT6t";
const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=Zahir%20Accounting%20%7C%20Software%20Akuntansi%20Online%2C%20HR%2C%20POS%2C%20ERP%2C%20Terbaik%20Surabaya&output=embed";

const officeServices = [
  "Konsultasi kebutuhan software akuntansi & ERP",
  "Demo produk Zahir Accounting dan Zahir Online",
  "Pendampingan implementasi, migrasi data, dan training",
];

export function CompanyOfficeLocationSection() {
  return (
    <section className="border-b border-border bg-surface-raised py-16 sm:py-20 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          {/* Informasi Kantor */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xs sm:p-10">
            <div className="pointer-events-none absolute -top-16 -right-16 size-56 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                Lokasi Kantor
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                Temui Tim Zahir Accounting Surabaya
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Kunjungi kantor layanan Zahir Accounting di Surabaya untuk berdiskusi langsung mengenai kebutuhan pembukuan, implementasi sistem, hingga pengembangan operasional bisnis Anda.
              </p>

              <div className="mt-7 rounded-2xl border border-primary/20 bg-primary/5 p-5 dark:bg-primary/10">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm shadow-primary/20">
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8.25 8.25 0 008.25-8.25c0-4.264-3.53-8.25-8.25-8.25S3.75 8.486 3.75 12.75A8.25 8.25 0 0012 21z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary dark:text-primary-text">Zahir Accounting Surabaya</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">Surabaya, Jawa Timur</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      Buka Google Maps untuk melihat alamat lengkap, titik kantor, dan rute perjalanan terbaru.
                    </p>
                  </div>
                </div>
              </div>

              <ul className="mt-7 space-y-3">
                {officeServices.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-xs leading-relaxed text-foreground/80 sm:text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-primary-hover hover:shadow-md hover:shadow-primary/20"
                  href={googleMapsLocationUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>Buka di Google Maps</span>
                  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
                <Link
                  className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-3 text-xs font-semibold text-foreground shadow-xs transition hover:border-primary/40 hover:bg-surface-raised hover:text-primary"
                  href="/contact-us"
                >
                  Buat Janji Konsultasi
                </Link>
              </div>
            </div>
          </div>

          {/* Peta Google */}
          <div className="relative min-h-90 overflow-hidden rounded-3xl border border-border bg-card shadow-xs lg:min-h-full">
            <iframe
              aria-label="Peta lokasi kantor Zahir Accounting Surabaya"
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.15] contrast-[0.98] dark:brightness-75 dark:contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={googleMapsEmbedUrl}
              title="Lokasi Zahir Accounting Surabaya"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent p-6 pt-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-blue-400" />
                Navigasi langsung dengan Google Maps
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

