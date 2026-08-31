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
    <section className="border-b border-border bg-background bg-grid-pattern py-16 sm:py-20 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Sejarah Zahir</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Perjalanan yang tumbuh bersama kebutuhan bisnis Indonesia.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Ringkasan kronologi ini memperlihatkan evolusi Zahir dari pengembangan awal software akuntansi hingga hadirnya lini versi dan solusi online.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-5 md:grid-cols-5">
          {historyMilestones.map((milestone, index) => (
            <li className="relative rounded-3xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5" key={milestone.year}>
              <span className="font-mono text-base font-black text-primary">{milestone.year}</span>
              <h3 className="mt-3 text-sm font-bold leading-snug text-foreground">{milestone.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{milestone.description}</p>
              <span className="mt-6 block font-mono text-[10px] font-semibold text-muted/70">MILESTONE / 0{index + 1}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

