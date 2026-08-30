const companyHighlights = [
  {
    number: "01",
    title: "Apa itu Zahir?",
    description:
      "Zahir adalah software akuntansi dan manajemen bisnis yang dirancang untuk membantu proses pencatatan keuangan menjadi lebih rapi, mudah dibaca, dan siap ditinjau.",
  },
  {
    number: "02",
    title: "Untuk siapa Zahir?",
    description:
      "Pilihan produknya mencakup kebutuhan pengelolaan personal, UKM, perdagangan, hingga perusahaan dengan proses dan organisasi yang lebih kompleks.",
  },
  {
    number: "03",
    title: "Peran Zahir Surabaya",
    description:
      "Zahir Surabaya menjadi halaman awal untuk mengenal produk, memperoleh dukungan versi, serta memulai percakapan mengenai kebutuhan implementasi bisnis Anda.",
  },
];

export function CompanyOverviewSection() {
  return (
    <section className="border-b border-white/[0.07] bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Tentang Zahir</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Dari pencatatan sehari-hari hingga keputusan bisnis yang lebih terarah.
            </h2>
          </div>
          <div className="border-l border-white/10 pl-6 text-sm leading-relaxed text-zinc-400 sm:pl-8 sm:text-base">
            Zahir memosisikan sistem akuntansi sebagai fondasi operasional: transaksi tercatat, informasi keuangan tersusun, dan pemilik bisnis dapat memperoleh gambaran usaha yang lebih utuh. Pilihan produk disusun agar kebutuhan tersebut dapat diikuti seiring perkembangan skala bisnis.
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {companyHighlights.map((item) => (
            <article className="rounded-2xl border border-white/10 bg-[#12131a]/80 p-6 transition hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-[#181924]" key={item.title}>
              <span className="font-mono text-xs text-emerald-400">{item.number}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}