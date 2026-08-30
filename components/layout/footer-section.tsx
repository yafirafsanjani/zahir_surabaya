import Link from "next/link";
import { publicNavigation } from "@/data/site";
import { BrandLogo } from "@/components/layout/brand-logo";

export function FooterSection() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#090a0f] text-zinc-400">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1.8fr] lg:px-8">
        {/* Kolom Informasi Brand Footer */}
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-sm text-xs leading-relaxed text-zinc-400">
            Pusat representasi dan layanan resmi Zahir Accounting di Surabaya. Membantu digitalisasi dan otomatisasi laporan keuangan bisnis skala UKM hingga Enterprise.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="flex size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium text-zinc-400">Layanan Aktif Area Surabaya & Jatim</span>
          </div>
        </div>

        {/* Kolom Link Navigasi Footer */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold tracking-widest text-zinc-200 uppercase">Navigasi Utama</p>
            <div className="mt-4 grid gap-2.5">
              {publicNavigation.slice(0, 4).map((item) => (
                <Link className="text-xs text-zinc-400 transition hover:text-emerald-400" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-widest text-zinc-200 uppercase">Bantuan & Legal</p>
            <div className="mt-4 grid gap-2.5">
              {publicNavigation.slice(4).map((item) => (
                <Link className="text-xs text-zinc-400 transition hover:text-emerald-400" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Copyright Bar Bawah */}
      <div className="border-t border-white/[0.05]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-[11px] text-zinc-400 sm:flex-row sm:justify-between lg:px-8">
          <span>© 2026 Zahir Surabaya. Seluruh hak cipta dilindungi.</span>
          <span className="font-mono text-emerald-400/80">Crafted for Excellence & Precision</span>
        </div>
      </div>
    </footer>
  );
}
