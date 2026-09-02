import Link from "next/link";
import { publicNavigation } from "@/data/site";
import { BrandLogo } from "@/components/layout/brand-logo";

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-card text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Brand Info */}
          <div>
            <BrandLogo />
            <p className="mt-4 max-w-sm text-xs text-muted leading-relaxed">
              Hub representasi dan layanan resmi Zahir Accounting di Surabaya. Melayani konsultasi produk, instalasi sistem, setup chart of accounts (COA), serta pelatihan staf bisnis di Jawa Timur.
            </p>
            <div className="mt-5">
              <Link className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline" href="/contact-us">
                <span>Hubungi Tim Zahir Surabaya</span>
                <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-6 grid-cols-2">
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">Navigasi</p>
              <ul className="mt-3 space-y-2 text-xs">
                {publicNavigation.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <Link className="text-body hover:text-primary transition-colors" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">Layanan</p>
              <ul className="mt-3 space-y-2 text-xs">
                {publicNavigation.slice(4).map((item) => (
                  <li key={item.href}>
                    <Link className="text-body hover:text-primary transition-colors" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-muted">
          <span>&copy; {new Date().getFullYear()} Zahir Surabaya. Seluruh hak cipta dilindungi.</span>
          <span>Software Akuntansi &amp; Manajemen Bisnis Terpercaya.</span>
        </div>
      </div>
    </footer>
  );
}