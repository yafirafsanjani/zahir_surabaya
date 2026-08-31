import Link from "next/link";
import { HeroBanner } from "@/components/sections/hero-banner";
import { SupportVersion } from "@/data/site";

type SupportDetailViewProps = {
  support: SupportVersion;
};

export function SupportDetailView({ support }: SupportDetailViewProps) {
  const sections = [
    {
      title: "Panduan Modul & Setup Awal",
      desc: "Langkah terstruktur untuk input saldo awal, konfigurasi akun perkiraan, dan pengaturan hak akses pengguna.",
    },
    {
      title: "Troubleshooting Database & Jaringan",
      desc: "Solusi kendala konektivitas multi-user, backup berkala, dan penanganan perbaikan data transaksi.",
    },
    {
      title: "Konsultasi Pendampingan Surabaya",
      desc: "Layanan onsite dan remote untuk pelatihan tim, implementasi alur baru, dan migrasi versi.",
    },
  ];

  return (
    <div className="min-h-screen text-foreground">
      {/* Hero Detail Versi Support */}
      <HeroBanner
        compact
        eyebrow={"Pusat Bantuan - " + support.name}
        title={support.name}
        description={support.description}
        primaryAction={{ href: "/contact-us", label: "Hubungi Tim Support Surabaya" }}
        secondaryAction={{ href: "/support-centre", label: "Kembali ke Pusat Dukungan" }}
      />

      {/* Konten Kategori Dukungan */}
      <section className="bg-background py-16 sm:py-20 lg:py-24 transition-colors duration-200">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {sections.map((sec, idx) => (
              <article className="rounded-3xl border border-border bg-card p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5" key={sec.title}>
                <span className="inline-flex size-7 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-bold text-primary">0{idx + 1}</span>
                <h2 className="mt-4 text-base font-bold text-foreground">{sec.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{sec.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-border pt-8 text-center sm:text-left">
            <Link className="group inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-hover" href="/contact-us">
              <span>Butuh bantuan khusus untuk sistem Anda? Hubungi kami langsung</span>
              <svg className="size-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

