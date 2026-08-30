import Link from "next/link";

export function BrandLogo() {
  return (
    <Link aria-label="Zahir Surabaya" className="group inline-flex items-center gap-3" href="/">
      <div className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-strong p-[1px] shadow-lg shadow-primary-deep/40">
        <div className="flex size-full items-center justify-center rounded-[11px] bg-surface transition group-hover:bg-surface-raised">
          <span className="font-mono text-xs font-black tracking-wider text-primary">
            ZS
          </span>
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight text-foreground transition group-hover:text-primary">
          Zahir <span className="text-primary">Surabaya</span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium tracking-wide text-zinc-400 uppercase">
          Official Hub Jatim
        </span>
      </div>
    </Link>
  );
}
