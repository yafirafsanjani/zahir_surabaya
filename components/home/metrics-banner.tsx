export function MetricsBanner() {
  const metrics = [
    { value: "30+ Tahun", label: "Pengalaman Solusi Akuntansi" },
    { value: "80.000+", label: "Pengusaha & Perusahaan di Indonesia" },
    { value: "Versi 5, 6, Online", label: "Fleksibilitas Platform Lengkap" },
    { value: "Surabaya Hub", label: "Layanan & Training Tatap Muka" },
  ];

  return (
    <div className="border-b border-white/[0.07] bg-[#0c0d14]/70">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col border-l border-emerald-500/30 pl-5 transition-all hover:border-emerald-400"
            >
              <span className="text-2xl font-black tracking-tight text-white lg:text-3xl">
                {item.value}
              </span>
              <span className="mt-1 text-xs text-zinc-400">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

