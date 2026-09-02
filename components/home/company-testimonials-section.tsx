"use client";

import { CardCarousel3D } from "@/components/ui/card-carousel-3d";

const testimonials = [
  {
    quote: "Sejak migrasi ke Zahir Accounting 6, laporan keuangan cabang dan rekonsiliasi kas harian selesai lebih cepat tanpa selisih.",
    author: "Bhakti Karya",
    role: "Operational Manager",
    sector: "Ritel & Swalayan",
  },
  {
    quote: "Modul persediaan multi-gudang dan otomatisasi HPP sangat membantu mengontrol stok di puluhan outlet kami di Jawa Timur.",
    author: "d'bestO Franchise",
    role: "Finance Director",
    sector: "Franchise F&B",
  },
  {
    quote: "Pendampingan tim Zahir Surabaya sangat responsif saat implementasi awal dan pelatihan tim akuntan kami.",
    author: "Cardig Air & Logistic",
    role: "Accounting Lead",
    sector: "Logistik & Kargo",
  },
  {
    quote: "Sistem pelaporan audit dan pencatatan dana amanah yayasan kami menjadi jauh lebih transparan dan akuntabel.",
    author: "Dompet Dhuafa",
    role: "Financial Controller",
    sector: "Lembaga Nirlaba",
  },
  {
    quote: "Kontrol serial number barang dan penagihan piutang usaha tertata rapi, cashflow operasional terjaga dengan baik.",
    author: "Koperasi Syariah AHM",
    role: "Kepala Pembukuan",
    sector: "Koperasi & Jasa",
  },
];

export function CompanyTestimonialsSection() {
  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center mx-auto">
          <span className="badge-minimal">Pengalaman Pengguna</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Dipercaya Pelaku Usaha di Seluruh Sektor
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-body">
            Kisah nyata bagaimana Zahir membantu merapikan administrasi transaksi dan mempercepat keputusan bisnis.
          </p>
        </div>

        {/* 3D Perspective Card Carousel */}
        <div className="mt-8">
          <CardCarousel3D autoPlay={false}>
            {testimonials.map((item) => (
              <div
                key={item.author}
                className="clean-card flex flex-col justify-between p-6 sm:p-7 shadow-md bg-card"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border/60 pb-3">
                    <span className="text-[11px] font-semibold text-primary">{item.sector}</span>
                    <span className="text-amber-500 text-xs">★★★★★</span>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm text-foreground leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">{item.author}</p>
                    <p className="text-[11px] text-muted">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardCarousel3D>
        </div>
      </div>
    </section>
  );
}