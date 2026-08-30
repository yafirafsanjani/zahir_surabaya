export function IndustryMarquee() {
  const industries = [
    "Distribusi & Trading",
    "Manufaktur & Pabrik",
    "Retail & Swalayan",
    "F&B & Restoran",
    "Kontraktor & Proyek",
    "Jasa & Konsultan",
    "Klinik & Apotek",
    "Logistik & Ekspedisi"
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.06] bg-[#090a0f] py-6">
      {/* Side gradient fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#090a0f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#090a0f] to-transparent" />

      <div className="animate-marquee flex items-center gap-8">
        {[...industries, ...industries, ...industries].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2 text-xs font-medium text-zinc-400"
          >
            <span className="size-1.5 rounded-full bg-emerald-400" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

