import Link from "next/link";
import { HeroBanner } from "@/components/sections/hero-banner";
import { SupportVersion } from "@/data/site";

type SupportDetailViewProps = {
  support: SupportVersion;
};

export function SupportDetailView({ support }: SupportDetailViewProps) {
  const sections = [
    { title: "Dokumentasi & Panduan", desc: "Instruksi langkah demi langkah konfigurasi database, COA, dan modul." },
    { title: "Troubleshooting & FAQ", desc: "Solusi kendala teknis umum yang sering dihadapi pengguna saat operasional." },
    { title: "Konsultasi & Remote Support", desc: "Jalur eskalasi bantuan langsung dari tim pendamping Zahir Surabaya." },
  ];

  return (
    <div className="min-h-screen text-zinc-100">
      {/* Hero Detail Versi Support */}
      <HeroBanner
        compact
        eyebrow="Support Centre"
        title={support.name}
        description={support.description}
        primaryAction={{ href: "/contact-us", label: "Hubungi Dukungan Teknis" }}
        secondaryAction={{ href: "/support-centre", label: "Pusat Dukungan" }}
      />

      {/* Grid Panduan & Eskalasi */}
      <section className="bg-background"><div className="mx-auto max-w-6xl px-6 py-18 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          {sections.map((sec, idx) => (
            <article className="rounded-2xl border border-white/10 bg-[#12131a] p-6" key={sec.title}>
              <span className="font-mono text-xs text-zinc-500">0{idx + 1}</span>
              <h2 className="mt-3 text-base font-bold text-white">{sec.title}</h2>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">{sec.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <Link className="text-xs font-semibold text-emerald-400 hover:text-emerald-300" href="/contact-us">
            Butuh asistensi langsung di tempat kerja? Hubungi kami ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢
          </Link>
        </div>
      </div></section>
    </div>
  );
}
