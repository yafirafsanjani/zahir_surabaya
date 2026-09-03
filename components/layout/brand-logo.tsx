import Link from "next/link";
import Image from "next/image";

export function BrandLogo() {
  return (
    <Link aria-label="Zahir Surabaya" className="group inline-flex items-center gap-2.5" href="/">
      <Image
        src="/images/ZAHIR ONE Modif.png"
        alt="Zahir ONE"
        width={420}
        height={84}
        priority
        className="h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
      />
    </Link>
  );
}