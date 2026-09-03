"use client";

import Image from "next/image";
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
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Play Store Style Rating Header */}
        <div className="max-w-2xl text-center mx-auto">
          <span className="badge-minimal">Ulasan Pengguna</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Dipercaya Pelaku Usaha di Seluruh Sektor
          </h2>
          <p className="mt-2 text-sm sm:text-base text-body">
            Kisah nyata bagaimana Zahir membantu merapikan administrasi transaksi dan mempercepat keputusan bisnis.
          </p>

          {/* Play Store Rating Card */}
          <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-2 shadow-xs">
            {/* Play logo image */}
            <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-primary">
              <Image
                src="/images/Logo playstore.png"
                alt="Logo Google Play"
                width={44}
                height={44}
                className="size-full object-contain"
              />
            </div>

            <div className="text-left">
              <p className="text-sm font-semibold text-muted">Zahir Apps di Google Play</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5" aria-label="Rating 4.0 dari 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`size-4 ${i < 4 ? "text-amber-400" : "text-border"}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">4.0</span>
              </div>
              <p className="text-xs text-muted">204 ulasan · Zahir Internasional</p>
            </div>
          </div>
        </div>

        {/* 3D Perspective Card Carousel */}
        <div className="mt-4">
          <CardCarousel3D autoPlay={false}>
            {testimonials.map((item) => (
              <div
                key={item.author}
                className="clean-card flex flex-col justify-between p-5 sm:p-6 bg-card"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                    <span className="text-sm font-semibold text-primary">{item.sector}</span>
                    {/* Play Store styled stars */}
                    <div className="flex items-center gap-0.5" aria-label="5 bintang">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className="size-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm sm:text-base text-foreground leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{item.author}</p>
                    <p className="text-xs text-muted">{item.role}</p>
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