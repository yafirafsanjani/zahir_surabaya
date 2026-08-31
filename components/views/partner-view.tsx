import { HeroBanner } from "@/components/sections/hero-banner";

export function PartnerView() {
  const cards = [
    {
      title: "Mitra Konsultan Keuangan",
      description: "Skema kolaborasi untuk praktisi akuntan publik dan konsultan manajemen yang mendampingi klien.",
    },
    {
      title: "Solusi Hardware & Integrator IT",
      description: "Kerja sama penyediaan infrastruktur POS, server database, dan jaringan untuk implementasi ritel.",
    },
    {
      title: "Akademisi & Pelatihan Vokasi",
      description: "Dukungan laboratorium komputer akuntansi dan sertifikasi praktis bagi institusi pendidikan.",
    },
  ];

  return (
    <div className="min-h-screen text-foreground">
      {/* Hero Partner */}
      <HeroBanner
        compact
        eyebrow="Ekosistem Kemitraan"
        title="Kolaborasi Strategis untuk Konsultan &amp; Mitra Bisnis"
        description="Kami membuka sinergi bersama konsultan akuntansi, penyedia infrastruktur IT, dan institusi pendidikan untuk memajukan tata kelola usaha."
        primaryAction={{ href: "/contact-us", label: "Ajukan Sinergi Kemitraan" }}
      />

      {/* Kartu Mitra */}
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

