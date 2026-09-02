import { HeroBanner } from "@/components/sections/hero-banner";

export function PromoEventView() {
  const cards = [
    {
      title: "Program Transisi & Upgrade Lisensi",
      description: "Penawaran terstruktur untuk peningkatan versi software ke Zahir 6, penambahan user license, atau ekspansi multi-cabang.",
      tag: "Lisensi",
    },
    {
      title: "Webinar & Klinik Akuntansi Bisnis",
      description: "Sesi sharing berkala membahas praktik tata kelola finansial, rekonsiliasi kas, dan kepatuhan faktur pajak untuk pemilik usaha.",
      tag: "Workshop",
    },
    {
      title: "User Gathering & Diskusi Komunitas",
      description: "Ruang temu praktisi dan pelaku bisnis di wilayah Jawa Timur untuk berbagi best practice implementasi sistem.",
      tag: "Komunitas",
    },
  ];

  return (
    <div className="min-h-screen text-foreground">
      <HeroBanner
        compact
        eyebrow="Agenda &amp; Program"
        title="Program Khusus, Workshop, &amp; Agenda Temu Pengguna"
        description="Informasi pembaruan program promosi lisensi resmi, jadwal webinar akuntansi bisnis, dan sesi klinik pembukuan di Surabaya."
        primaryAction={{ href: "/contact-us", label: "Tanyakan Jadwal Terdekat" }}
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <div key={card.title} className="clean-card p-6">
                <span className="rounded-md bg-primary-soft px-2 py-0.5 text-[11px] font-semibold text-primary">
                  {card.tag}
                </span>
                <h2 className="mt-3 text-base font-semibold text-foreground">{card.title}</h2>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}