import { HeroBanner } from "@/components/sections/hero-banner";

export function PartnerView() {
  const cards = [
    {
      title: "Mitra Konsultan Akuntansi",
      description: "Kerja sama bagi akuntan publik, biro jasa pembukuan, dan konsultan bisnis dalam mendampingi tata kelola keuangan klien.",
    },
    {
      title: "Hardware & Integrator IT",
      description: "Kolaborasi penyediaan perangkat kasir POS, barcode scanner, server database, dan jaringan LAN kantor.",
    },
    {
      title: "Akademisi & Pendidikan",
      description: "Dukungan laboratorium praktikum komputer akuntansi dan program sertifikasi keahlian Zahir bagi institusi pendidikan.",
    },
  ];

  return (
    <div className="min-h-screen text-foreground">
      <HeroBanner
        compact
        eyebrow="Ekosistem Kemitraan"
        title="Kolaborasi Strategis untuk Mitra Bisnis"
        description="Kami membuka peluang kemitraan bersama konsultan akuntansi, penyedia infrastruktur IT, dan institusi pendidikan di Jawa Timur."
        primaryAction={{ href: "/contact-us", label: "Ajukan Sinergi Mitra" }}
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card, idx) => (
              <div key={card.title} className="clean-card p-6">
                <span className="text-xs font-mono font-bold text-primary">0{idx + 1}</span>
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