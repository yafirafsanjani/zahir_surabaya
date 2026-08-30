import Link from "next/link";

const servicePillars = [
  "Konsultasi pemilihan produk",
  "Arah implementasi sesuai kebutuhan bisnis",
  "Rujukan dukungan untuk Zahir Versi 5 & Versi 6",
];

export function CompanySurabayaServiceSection() {
  return (
    <section className="border-b border-white/[0.07] bg-grid-pattern py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#12131a] to-[#181924] p-8 sm:p-10">
            <div className="pointer-events-none absolute top-0 right-0 size-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <p className="relative text-xs font-semibold tracking-widest text-emerald-400 uppercase">Zahir Surabaya</p>
            <h2 className="relative mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Titik awal untuk memilih solusi yang relevan bagi bisnis Anda.
            </h2>
            <p className="relative mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
              Dari pemetaan kebutuhan awal hingga penentuan produk, halaman Zahir Surabaya dirancang untuk memudahkan Anda menemukan informasi, dukungan, dan langkah konsultasi berikutnya.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <Link className="rounded-full bg-emerald-500 px-5 py-3 text-xs font-bold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400" href="/contact-us">
                Mulai Konsultasi
              </Link>
              <Link className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-xs font-semibold text-zinc-200 transition hover:border-white/30 hover:bg-white/[0.08]" href="/support-centre">
                Buka Support Centre
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 backdrop-blur-xl sm:p-10">
            <p className="text-xs font-semibold tracking-widest text-emerald-300 uppercase">Yang Bisa Dieksplorasi</p>
            <div className="mt-6 space-y-4">
              {servicePillars.map((item, index) => (
                <div className="flex gap-3" key={item}>
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-[10px] font-bold text-emerald-300">0{index + 1}</span>
                  <p className="pt-0.5 text-xs leading-relaxed text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-white/10 pt-5 text-[11px] leading-relaxed text-zinc-500">
              Informasi kanal kontak resmi akan ditambahkan setelah data operasional terverifikasi.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}