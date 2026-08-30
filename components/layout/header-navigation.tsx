import Link from "next/link";
import { publicNavigation } from "@/data/site";
import { BrandLogo } from "@/components/layout/brand-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function HeaderNavigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#090a0f]/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Logo Bagian Kiri */}
        <BrandLogo />
        
        {/* Menu Navigasi Utama (Desktop) */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">
          {publicNavigation.map((item) => (
            <div className="group relative" key={item.href}>
              <Link 
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white" 
                href={item.href}
              >
                {item.label}
                {item.children && (
                  <span aria-hidden="true" className="text-[10px] text-zinc-500 transition-transform duration-200 group-hover:rotate-180">
                    ▾
                  </span>
                )}
              </Link>
              
              {/* Dropdown Menu Sub-kategori */}
              {item.children && (
                <div className="invisible absolute top-full left-0 w-64 translate-y-2 rounded-2xl border border-white/10 bg-[#12131a]/95 p-1.5 opacity-0 shadow-2xl backdrop-blur-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link 
                      className="block rounded-xl px-3 py-2 text-xs font-medium text-zinc-400 transition hover:bg-emerald-500/10 hover:text-emerald-300" 
                      href={child.href} 
                      key={child.href}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Tombol CTA Bagian Kanan */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link 
            className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] text-xs font-medium text-white transition focus:outline-none"
            href="/contact-us"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-80" />
            <span className="relative flex items-center gap-1.5 rounded-full bg-surface px-4 py-1.5 text-xs font-medium text-primary transition hover:bg-transparent hover:text-on-primary">
              Konsultasi
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>

        {/* Menu Navigasi Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <details className="relative">
          <summary aria-label="Buka navigasi" className="flex cursor-pointer list-none items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-xs font-medium text-zinc-300">
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </summary>
          <nav aria-label="Navigasi mobile" className="absolute top-12 right-0 w-72 rounded-2xl border border-white/10 bg-[#12131a] p-3 shadow-2xl backdrop-blur-2xl">
            {publicNavigation.map((item) => (
              <div className="py-1" key={item.href}>
                <Link className="block rounded-lg px-3 py-2 text-xs font-semibold text-zinc-200 hover:bg-white/5 hover:text-emerald-400" href={item.href}>
                  {item.label}
                </Link>
                {item.children && (
                  <div className="my-1 ml-3 space-y-1 border-l border-white/10 pl-2">
                    {item.children.map((child) => (
                      <Link className="block rounded-md px-2 py-1.5 text-[11px] text-zinc-400 hover:text-emerald-300" href={child.href} key={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 border-t border-white/10 pt-3">
              <Link className="block rounded-xl bg-emerald-500 py-2.5 text-center text-xs font-bold text-zinc-950" href="/contact-us">
                Konsultasi Kebutuhan
              </Link>
            </div>
          </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
