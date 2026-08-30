const historyMilestones = [
  {
    year: "1996",
    title: "Versi pertama dikembangkan",
    description: "Zahir Accounting versi 1.0 mulai dikembangkan sebagai dasar perjalanan produk.",
  },
  {
    year: "1997",
    title: "Pengembangan versi berikutnya",
    description: "Zahir Accounting versi 2.0 dikembangkan untuk melanjutkan penyempurnaan solusi.",
  },
  {
    year: "1999",
    title: "Mulai dipasarkan",
    description: "Zahir Accounting mulai dipasarkan untuk mendukung kebutuhan pengguna bisnis.",
  },
  {
    year: "2014",
    title: "Ekspansi lini enterprise",
    description: "Zahir Accounting 6 dan Zahir Enterprise Plus menandai pengembangan kebutuhan organisasi yang lebih luas.",
  },
  {
    year: "2015",
    title: "Zahir Online diperkenalkan",
    description: "Zahir Online memperluas pilihan penggunaan untuk cara kerja bisnis yang semakin terhubung.",
  },
];

export function CompanyHistoryTimelineSection() {
  return (
    <section className="border-b border-white/[0.07] bg-grid-pattern py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Sejarah Zahir</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Perjalanan yang tumbuh bersama kebutuhan bisnis Indonesia.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            Ringkasan kronologi ini memperlihatkan evolusi Zahir dari pengembangan awal software akuntansi hingga hadirnya lini versi dan solusi online.
          </p>
        </div>

        <ol className="relative mt-10 grid gap-4 md:grid-cols-5">
          {historyMilestones.map((milestone, index) => (
            <li className="relative rounded-2xl border border-white/10 bg-[#12131a] p-5" key={milestone.year}>
              <span className="absolute -top-2 left-5 flex size-4 items-center justify-center rounded-full border-2 border-background bg-emerald-400" />
              <span className="font-mono text-sm font-bold text-emerald-400">{milestone.year}</span>
              <h3 className="mt-4 text-sm font-bold leading-snug text-white">{milestone.title}</h3>
              <p className="mt-3 text-[11px] leading-relaxed text-zinc-400">{milestone.description}</p>
              <span className="mt-5 block font-mono text-[10px] text-zinc-600">MILESTONE / 0{index + 1}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}