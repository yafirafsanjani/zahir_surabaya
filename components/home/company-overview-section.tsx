"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";

const highlights = [
  {
    title: "Alur Kerja Praktis & Terintegrasi",
    description:
      "Semua alur dari order pembelian, penerimaan gudang, kas/bank, hingga penjualan terhubung otomatis ke jurnal pembukuan.",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-5.25a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v5.25m12 0v-5.25a3 3 0 0 1 3-3h3.75a3 3 0 0 1 3 3v5.25M3.75 21h16.5" />
      </svg>
    ),
  },
  {
    title: "Laporan Keuangan Cepat & Akurat",
    description:
      "Dapatkan laporan laba rugi, neraca saldo, arus kas, dan analisis piutang usaha secara real-time kapan pun dibutuhkan.",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: "Pendampingan Resmi di Surabaya",
    description:
      "Tim ahli Zahir Surabaya siap mendampingi kebutuhan setup COA, migrasi data, serta pelatihan operator dan staf akuntansi Anda.",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

const logos = [
  "cst.jpg",
  "elit.jpg",
  "gubug.jpg",
  "inti.jpg",
  "kapin.jpg",
  "kuno.jpg",
  "lv.jpg",
  "metrai.jpg",
  "multi.jpg",
  "samkang.jpg",
  "sinko.jpg",
  "sumber.jpg",
  "wahana.jpg",
  "212-Mart-1.png",
  "Abunawas-1.png",
  "Adventurer-Indonesia-1.png",
  "Alia-Go-1.png",
  "AMCF-1.png",
  "Arthatel-1.png",
  "Bakrie-1.png",
  "Bakso-Boedjangan-1.png",
  "Bayas-Biofuels-1.png",
  "Baznas-1.png",
  "Bhinneka.com_-1.png",
  "Brodo-1.png",
  "Bukalapak-2.png",
  "Bumi-Laksamana-1.png",
  "Buttonscarves-1-1.png",
  "D_Cost-1.png",
  "Dago-Bakery-1.png",
  "Dahana-1.png",
  "Dapur-Cokelat-1.png",
  "Delima-Jaya-1.png",
  "IAS-1.png",
  "Igasar-1.png",
  "IKPP-1.png",
  "Indah-Logistik-2.png",
  "Indika-Energy-3.png",
  "Kayana-2.png",
  "KCIC-3.png",
  "Kitabisa-2.png",
  "Lazada-2.png",
  "Lisaboy-2.png",
  "Mola-2.png",
  "MRI-2.png",
  "Muamalat-2.png",
  "Nusantara-Regas-2.png",
];

// Split the client logos into three flowing rows. The source data is kept
// untouched; duplication happens only at render time for a seamless loop.
const marqueeRows = [
  { logos: logos.slice(0, 16), anim: "animate-marquee-left-1" },
  { logos: logos.slice(16, 32), anim: "animate-marquee-right-2" },
  { logos: logos.slice(32, 48), anim: "animate-marquee-left-3" },
];

const edgeMask = {
  maskImage:
    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function CompanyOverviewSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 border-b border-border/80">
      {/* Subtle dot pattern */}
      <div className="pointer-events-none absolute inset-0 bg-dot-minimal opacity-30" />

      <div ref={ref} className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="badge-minimal">Tentang Zahir</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Mengubah Transaksi Harian
            <br />
            Menjadi Keputusan Bisnis
            <span className="text-primary"> yang Jelas.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-body leading-relaxed max-w-xl">
            PT Zahir Internasional berdedikasi membangun software akuntansi bisnis yang menyatukan pencatatan keuangan, kontrol stok multi-gudang, dan pengawasan operasional ke dalam satu sistem yang mudah digunakan.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              custom={idx}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/25"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Company Logos — animated client logo wall */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <div className="text-center">
            <h3 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Dipercaya oleh 100.000+ Bisnis
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted leading-relaxed">
              Ribuan perusahaan &amp; institusi di Indonesia telah menjalankan operasionalnya dengan Zahir Accounting.
            </p>
          </div>

          {prefersReducedMotion ? (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
              {logos.map((logo) => (
                <Image
                  key={logo}
                  src={`/images/${logo}`}
                  alt="Logo perusahaan pengguna Zahir"
                  width={200}
                  height={60}
                  sizes="200px"
                  className="h-12 w-auto max-w-40 object-contain opacity-80 sm:h-14 sm:max-w-44"
                />
              ))}
            </div>
          ) : (
            <div className="mt-14 space-y-8 sm:space-y-10">
              {marqueeRows.map((row) => (
                <div
                  key={row.anim}
                  className="relative overflow-hidden"
                  style={edgeMask}
                >
                  <div className={`marquee-track gap-10 pr-10 sm:gap-14 sm:pr-14 ${row.anim}`}>
                    {[...row.logos, ...row.logos].map((logo, idx) => (
                      <Image
                        key={`${row.anim}-${idx}`}
                        src={`/images/${logo}`}
                        alt="Logo perusahaan pengguna Zahir"
                        width={200}
                        height={60}
                        sizes="200px"
                        className="h-12 w-auto max-w-40 object-contain opacity-80 hover:opacity-100 sm:h-14 sm:max-w-44"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
