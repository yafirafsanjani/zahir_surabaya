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
    <div className="min-h-screen text-zinc-100">
      {/* Hero Update & Download */}
      <HeroBanner
        compact
        eyebrow="Rilis & Unduhan"
        title="Pembaruan Sistem & Berkas Instalasi Terverifikasi"
        description="Akses catatan rilis resmi, patch perbaikan, serta tautan unduhan installer yang telah divalidasi keamanannya."
      />

      {/* Kartu Update & Download */}
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
