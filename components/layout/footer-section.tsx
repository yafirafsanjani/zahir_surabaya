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

            {/* Kontak */}
            <div className="mt-6 border-t border-border/60 pt-5">
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">Kontak</p>
              <ul className="mt-3 space-y-2.5">
                <li>
                  <a className="inline-flex items-center gap-2.5 text-xs text-foreground hover:text-primary transition-colors" href="mailto:zahirsby@gmail.com">
                    <svg className="size-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <span>zahirsby@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a className="inline-flex items-center gap-2.5 text-xs text-foreground hover:text-primary transition-colors" href="tel:08117577444">
                    <svg className="size-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <span>0811-7577-444</span>
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-2.5 text-xs text-foreground hover:text-primary transition-colors"
                    href="https://www.instagram.com/zahiraccounting?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg className="size-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm1.5 0a3.375 3.375 0 1 0 0 6.75H12a5.25 5.25 0 0 1-3.188-1.061M16.5 8.25h.008M6.75 20.25a6 6 0 0 0 4.5-2.051" />
                    </svg>
                    <span>@zahiraccounting</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-6 grid-cols-2">
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">Navigasi</p>
              <ul className="mt-3 space-y-2 text-xs">
                {publicNavigation.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <Link className="text-foreground hover:text-primary transition-colors" href={item.href}>
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
                    <Link className="text-foreground hover:text-primary transition-colors" href={item.href}>
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