import Link from "next/link";

export function BrandLogo() {
  return (
    <Link aria-label="Zahir Surabaya" className="group inline-flex items-center gap-2.5" href="/">
      <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white shadow-xs transition-transform duration-200 group-hover:scale-105">
        ZS
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold tracking-tight text-foreground">
          Zahir <span className="text-primary font-semibold">Surabaya</span>
        </span>
        <span className="text-[9px] font-medium tracking-wider text-muted uppercase">
          Official Hub Jatim
        </span>
      </div>
    </Link>
  );
}