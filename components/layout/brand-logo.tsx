import Link from "next/link";

export function BrandLogo() {
  return (
    <Link aria-label="Zahir Surabaya" className="group inline-flex items-center gap-3" href="/">
      <div className="relative flex size-9 items-center justify-center rounded-xl bg-primary p-[1px] shadow-sm shadow-primary/20">
        <div className="flex size-full items-center justify-center rounded-[11px] bg-white dark:bg-slate-900 transition group-hover:bg-blue-50 dark:group-hover:bg-slate-800">
          <span className="font-mono text-xs font-black tracking-wider text-primary">
            ZS
          </span>
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-bold tracking-tight text-foreground transition group-hover:text-primary">
          Zahir <span className="text-primary">Surabaya</span>
        </span>
        <span className="mt-0.5 text-[10px] font-semibold tracking-wider text-muted uppercase">
          Official Hub Jatim
        </span>
      </div>
    </Link>
  );
}

