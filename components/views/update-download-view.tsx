import { HeroBanner } from "@/components/sections/hero-banner";

export function UpdateDownloadView() {
  const cards = [
    {
      title: "Patch & Build Terbaru",
      description: "Catatan rilis peningkatan performa dan penyesuaian regulasi perpajakan atau laporan.",
    },
    {
      title: "Installer Resmi",
      description: "Distribusi paket instalasi untuk implementasi awal maupun pemindahan perangkat kerja.",
    },
    {
      title: "Prasyarat Lingkungan Sistem",
      description: "Panduan spesifikasi server, jaringan lokal, dan database untuk stabilitas operasional maksimal.",
    },
  ];

  return (
    <div className="min-h-screen text-foreground">
      {/* Hero Update & Download */}
      <HeroBanner
        compact
        eyebrow="Rilis &amp; Unduhan"
        title="Pembaruan Sistem &amp; Berkas Instalasi Terverifikasi"
        description="Akses catatan rilis resmi, patch perbaikan, serta tautan unduhan installer yang telah divalidasi keamanannya."
      />

      {/* Kartu Update & Download */}
      <section className="bg-background py-16 sm:py-20 lg:py-24 transition-colors duration-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card, idx) => (
              <article
                key={card.title}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
              >
                <div>
                  <span className="inline-flex size-7 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-bold text-primary">0{idx + 1}</span>
                  <h2 className="mt-4 text-lg font-bold text-foreground">{card.title}</h2>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

