import Link from "next/link";
import { publicNavigation } from "@/data/site";
import { BrandLogo } from "@/components/layout/brand-logo";

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-surface-raised text-muted transition-colors duration-200">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1.8fr] lg:px-8">
        {/* Kolom Informasi Brand Footer */}
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-sm text-xs leading-relaxed text-muted">
            Pusat representasi dan layanan resmi Zahir Accounting di Surabaya. Membantu digitalisasi dan otomatisasi laporan keuangan bisnis skala UKM hingga Enterprise.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <span className="flex size-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-medium text-muted">Layanan Aktif Area Surabaya &amp; Jatim</span>
          </div>
        </div>

        {/* Kolom Link Navigasi Footer */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold tracking-widest text-foreground uppercase">Navigasi Utama</p>
            <div className="mt-4 grid gap-2.5">
              {publicNavigation.slice(0, 4).map((item) => (
                <Link className="text-xs text-muted transition hover:text-primary" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-widest text-foreground uppercase">Bantuan &amp; Legal</p>
            <div className="mt-4 grid gap-2.5">
              {publicNavigation.slice(4).map((item) => (
                <Link className="text-xs text-muted transition hover:text-primary" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Copyright Bar Bawah */}
      <div className="border-t border-border/60 bg-background/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-[11px] text-muted sm:flex-row sm:justify-between lg:px-8">
          <span>&copy; 2026 Zahir Surabaya. Seluruh hak cipta dilindungi.</span>
          <span className="font-mono text-primary font-medium">Crafted for Excellence &amp; Precision</span>
        </div>
      </div>
    </footer>
  );
}

