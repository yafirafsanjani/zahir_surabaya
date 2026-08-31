const companyHighlights = [
  {
    number: "01",
    title: "Profil PT Zahir Internasional",
    description:
      "Perusahaan teknologi pengembang software akuntansi dan solusi manajemen bisnis terkemuka di Indonesia sejak 1996, yang telah mengantongi berbagai penghargaan nasional dan sertifikasi mutu ISO 9001:2015.",
  },
  {
    number: "02",
    title: "Filosofi Desain Intuitif",
    description:
      "Zahir memelopori pendekatan antarmuka visual berbasis formulir transaksi bisnis sehari-hari, memungkinkan siapa pun membuat laporan keuangan tanpa harus ahli di bidang debit-kredit akuntansi.",
  },
  {
    number: "03",
    title: "Peran Strategis Zahir Surabaya",
    description:
      "Bertindak sebagai pusat layanan resmi untuk wilayah Surabaya dan Jawa Timur, menyediakan konsultasi pemilihan paket, setup bagan akun (COA), migrasi data, hingga pelatihan intensif staf perusahaan.",
  },
];

export function CompanyOverviewSection() {
  return (
    <section className="border-b border-border bg-surface-raised py-16 sm:py-20 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Company Profile</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Dedikasi Membangun Ekosistem Bisnis yang Tangguh dan Terintegrasi.
            </h2>
          </div>
          <div className="border-l border-border pl-6 text-sm leading-relaxed text-muted sm:pl-8 sm:text-base">
            Sebagai pionir software akuntansi di Indonesia, PT Zahir Internasional terus berinovasi mengubah kerumitan pembukuan konvensional menjadi otomatisasi cerdas. Dari pengelolaan kas harian hingga pengambilan keputusan strategis berbasis data, Zahir mendampingi perjalanan bisnis dari skala rintisan hingga korporasi besar.
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {companyHighlights.map((item) => (
            <article className="rounded-3xl border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5" key={item.title}>
              <span className="inline-flex size-7 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-bold text-primary">{item.number}</span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

