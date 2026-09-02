import { HeroBanner } from "@/components/sections/hero-banner";

export function UpdateDownloadView() {
  const cards = [
    {
      title: "Patch & Build Pembaruan Terkini",
      description: "Catatan rilis peningkatan performa, optimasi database, dan penyesuaian regulasi perpajakan Indonesia terbaru.",
      tag: "Patch Update",
    },
    {
      title: "Installer Resmi Terverifikasi",
      description: "Distribusi file instalasi bersih dan berlisensi untuk implementasi komputer baru maupun pemindahan server database.",
      tag: "Installer",
    },
    {
      title: "Prasyarat Lingkungan & Hardware",
      description: "Panduan spesifikasi server, sistem operasi Windows, dan konfigurasi jaringan LAN untuk stabilitas operasional multi-user.",
      tag: "Spesifikasi",
    },
  ];

  return (
    <div className="min-h-screen text-foreground">
      <HeroBanner
        compact
        eyebrow="Rilis &amp; Unduhan"
        title="Pembaruan Sistem &amp; Berkas Instalasi Resmi"
        description="Akses catatan rilis pembaruan, patch perbaikan resmi, serta bantuan teknis instalasi langsung dari perwakilan resmi Zahir di Surabaya."
        primaryAction={{ href: "/contact-us", label: "Minta Bantuan Instalasi" }}
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