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
    <div className="min-h-screen text-zinc-100">
      {/* Hero Partner */}
      <HeroBanner
        compact
        eyebrow="Ekosistem Kemitraan"
        title="Kolaborasi Strategis untuk Konsultan & Mitra Bisnis"
        description="Kami membuka sinergi bersama konsultan akuntansi, penyedia infrastruktur IT, dan institusi pendidikan untuk memajukan tata kelola usaha."
        primaryAction={{ href: "/contact-us", label: "Ajukan Sinergi Kemitraan" }}
      />

      {/* Kartu Mitra */}
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
