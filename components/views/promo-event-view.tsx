import { HeroBanner } from "@/components/sections/hero-banner";

export function PromoEventView() {
  const cards = [
    {
      title: "Program Transisi & Upgrade Lisensi",
      description: "Penawaran terstruktur untuk peningkatan versi atau ekspansi jumlah user operasional.",
    },
    {
      title: "Webinar Akuntansi Bisnis",
      description: "Sesi sharing berkala membahas praktik tata kelola finansial untuk pemilik usaha dan staf finance.",
    },
    {
      title: "User Gathering & Diskusi Komunitas",
      description: "Ruang temu praktisi bisnis di wilayah Jawa Timur untuk berbagi pengalaman implementasi sistem.",
    },
  ];

  return (
    <div className="min-h-screen text-foreground">
      {/* Hero Promo & Event */}
      <HeroBanner
        compact
        eyebrow="Agenda &amp; Program"
        title="Program Khusus, Workshop, &amp; Agenda Temu Pengguna"
        description="Informasi pembaruan program promosi lisensi resmi, jadwal webinar akuntansi bisnis, dan sesi klinik pembukuan di Surabaya."
        primaryAction={{ href: "/contact-us", label: "Tanyakan Jadwal Terdekat" }}
      />

      {/* Kartu Daftar Promo & Event */}
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

