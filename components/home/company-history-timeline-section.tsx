const timeline = [
  { year: "1996", title: "Versi Perdana 1.0", desc: "Zahir Accounting lahir sebagai pionir software akuntansi visual yang mudah digunakan di Indonesia." },
  { year: "1999", title: "Ekspansi Nasional", desc: "Dipercaya puluhan ribu pelaku usaha dan mendapatkan sambutan luas di berbagai sektor bisnis." },
  { year: "2014", title: "Generasi Zahir 6", desc: "Performa database tangguh, arsitektur multi-user andal, dan modul enterprise yang fleksibel." },
  { year: "2015+", title: "Ekosistem Cloud & Mobile", desc: "Integrasi hybrid desktop dan Zahir Online untuk mobilitas dan kemudahan monitoring bisnis." },
];

export function CompanyHistoryTimelineSection() {
  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="badge-minimal">Rekam Jejak</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Perjalanan Konsisten Mendukung Bisnis Indonesia
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item) => (
            <div className="clean-card p-5" key={item.year}>
              <span className="inline-block rounded-md bg-primary-soft px-2 py-0.5 font-mono text-xs font-bold text-primary">
                {item.year}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-xs text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}