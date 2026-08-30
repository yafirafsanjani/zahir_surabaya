import Link from "next/link";
import { supportVersions } from "@/data/site";

export function SupportAndHubCta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Support Versions Box */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#12131a] to-[#181924] p-8 shadow-2xl sm:p-10">
          <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
          
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
            Pusat Bantuan & Layanan
          </span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Dukungan Teknis Pengguna Zahir Versi 5 & Versi 6
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-zinc-400 sm:text-sm">
            Tim teknis kami di Surabaya siap membantu penanganan kendala database, 
            upgrade sistem, pelatihan staff baru, maupun setup printer & POS di lokasi.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {supportVersions.map((support) => (
              <Link
                key={support.slug}
                href={`/support-centre/${support.slug}`}
                className="group flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-zinc-200 transition hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-white"
              >
                <span>{support.name}</span>
                <span className="text-emerald-400 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Contact / Schedule Demo Card */}
        <div className="flex flex-col justify-between rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 sm:p-10 backdrop-blur-xl">
          <div>
            <span className="text-xs font-semibold tracking-widest text-emerald-300 uppercase">
              Konsultasi Langsung
            </span>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
              Jadwalkan Presentasi & Demo Gratis
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-zinc-300">
              Pelajari kecocokan software Zahir dengan proses bisnis Anda bersama tim konsultan Zahir Surabaya.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <Link
              href="/contact-us"
              className="block w-full rounded-full bg-emerald-500 py-3 text-center text-xs font-bold text-zinc-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
            >
              Hubungi Tim Konsultan Kami
            </Link>
            <p className="text-center text-[11px] text-zinc-500">
              Respon cepat pada jam kerja operasional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

