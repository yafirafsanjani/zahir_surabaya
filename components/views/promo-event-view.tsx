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
    <div className="min-h-screen text-zinc-100">
      {/* Hero Promo & Event */}
      <HeroBanner
        compact
        eyebrow="Agenda & Program"
        title="Program Khusus, Workshop, & Agenda Temu Pengguna"
        description="Informasi pembaruan program promosi lisensi resmi, jadwal webinar akuntansi bisnis, dan sesi klinik pembukuan di Surabaya."
        primaryAction={{ href: "/contact-us", label: "Tanyakan Jadwal Terdekat" }}
      />

      {/* Kartu Daftar Promo & Event */}
      <section className="bg-background"><div className="mx-auto max-w-6xl px-6 py-18 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, idx) => (
            <article
              key={card.title}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#12131a] p-7 transition hover:border-emerald-500/40 hover:bg-[#181924]"
            >
              <div>
                <span className="font-mono text-xs text-zinc-500">0{idx + 1}</span>
                <h2 className="mt-3 text-lg font-bold text-white">{card.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div></section>
    </div>
  );
}
