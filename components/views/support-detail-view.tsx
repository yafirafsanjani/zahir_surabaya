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
      desc: "Langkah terstruktur untuk input saldo awal neraca, konfigurasi akun perkiraan (COA), dan pengaturan hak akses pengguna.",
    },
    {
      title: "Troubleshooting Database & Jaringan",
      desc: "Solusi kendala konektivitas multi-user, backup berkala, optimasi database, dan penanganan perbaikan data transaksi.",
    },
    {
      title: "Konsultasi Pendampingan Surabaya",
      desc: "Layanan onsite dan remote untuk pelatihan tim baru, implementasi alur modul tambahan, dan migrasi versi.",
    },
  ];

  return (
    <div className="min-h-screen text-foreground">
      <HeroBanner
        compact
        eyebrow={"Pusat Bantuan · " + support.name}
        title={support.name}
        description={support.description}
        primaryAction={{ href: "/contact-us", label: "Hubungi Tim Support Surabaya" }}
        secondaryAction={{ href: "/support-centre", label: "Kembali ke Pusat Bantuan" }}
      />

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {sections.map((sec, idx) => (
              <div key={sec.title} className="clean-card p-6">
                <span className="text-xs font-mono font-bold text-primary">0{idx + 1}</span>
                <h2 className="mt-3 text-base font-semibold text-foreground">{sec.title}</h2>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">{sec.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-border bg-surface-raised p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-foreground">Butuh bantuan langsung teknisi Zahir Surabaya?</p>
              <p className="text-xs text-muted">Kami menyediakan pendampingan remote via AnyDesk / TeamViewer serta kunjungan onsite.</p>
            </div>
            <Link className="btn-primary shrink-0" href="/contact-us">
              Hubungi Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}