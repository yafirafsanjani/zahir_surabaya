import { HeroBanner } from "@/components/sections/hero-banner";

export function ContactUsView() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100">
      {/* Hero Kontak & Konsultasi */}
      <HeroBanner
        compact
        eyebrow="Kontak & Konsultasi"
        title="Mari Diskusikan Kebutuhan Software Bisnis Anda"
        description="Tim Zahir Surabaya siap membantu pemilihan paket produk, migrasi data, upgrade versi, maupun pelatihan staf akuntansi."
      />

      {/* Detail Informasi Kontak & Checklist Persiapan */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#12131a] p-8 sm:p-10">
            <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
              Layanan Resmi
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
              Cakupan Wilayah Surabaya & Jawa Timur
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-zinc-400">
              Dukungan teknis responsif dan pendampingan implementasi langsung di lokasi usaha Anda.
            </p>

            <div className="mt-6 space-y-3 text-xs">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <p className="font-bold text-white">Konsultasi Produk & Demo</p>
                <p className="mt-1 text-zinc-400">Eksplorasi fitur, perbandingan modul, dan rekomendasi varian tepat.</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <p className="font-bold text-white">Dukungan Teknis & Migrasi</p>
                <p className="mt-1 text-zinc-400">Pendampingan pengguna Versi 5, Versi 6, dan Zahir Online.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 sm:p-10 backdrop-blur-xl">
            <div>
              <span className="text-xs font-semibold tracking-widest text-emerald-300 uppercase">
                Persiapan Konsultasi
              </span>
              <h3 className="mt-2 text-xl font-bold text-white">
                Hal yang Dapat Disiapkan
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Perkiraan jumlah user kasir & staf finance
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Kebutuhan modul utama (kasir POS, inventory multi-gudang, manufaktur)
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Format database eksisting jika ada rencana migrasi data
                </li>
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-black/40 p-4 text-center">
              <p className="text-xs font-medium text-emerald-300">
                Kanal komunikasi langsung & formulir akan segera terhubung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
