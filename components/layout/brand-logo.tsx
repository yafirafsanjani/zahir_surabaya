import Link from "next/link";

type BrandLogoProps = { light?: boolean };

export function BrandLogo({ light = true }: BrandLogoProps) {
  return (
    <Link aria-label="Zahir Surabaya" className="group inline-flex items-center gap-3" href="/">
      <div className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 p-[1px] shadow-lg shadow-emerald-950/40">
        <div className="flex size-full items-center justify-center rounded-[11px] bg-[#090a0f] transition group-hover:bg-[#12131a]">
          <span className="font-mono text-xs font-black tracking-wider text-emerald-400">
            ZS
          </span>
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight text-white transition group-hover:text-emerald-300">
          Zahir <span className="text-emerald-400">Surabaya</span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium tracking-wide text-zinc-400 uppercase">
          Official Hub Jatim
        </span>
      </div>
    </Link>
  );
}
