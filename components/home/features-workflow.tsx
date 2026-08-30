"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    id: "input",
    title: "1. Transaksi & POS",
    desc: "Catat faktur penjualan, pembelian supplier, kas masuk & keluar dengan sistem terpadu tanpa selisih.",
    details: [
      "Scan barcode kasir langsung potong stok",
      "Multi-termin pembayaran & tempo piutang",
      "Pajak PPN & e-Faktur terhitung otomatis"
    ],
    metric: "Kecepatan Kasir 2x Lebih Cepat"
  },
  {
    id: "inventory",
    title: "2. Kontrol Persediaan",
    desc: "Pantau pergerakan mutasi barang antar gudang dengan penomoran lot, serial number, dan peringatan batas minimum.",
    details: [
      "Metode HPP FIFO & Rata-rata akurat",
      "Otomatisasi Purchase Order (PO)",
      "Stock opname real-time per lokasi cabang"
    ],
    metric: "Akurasi Stok Hingga 99.8%"
  },
  {
    id: "reports",
    title: "3. Laporan Finansial",
    desc: "Dapatkan laporan Laba Rugi, Neraca, Arus Kas, dan Analisis Rasio Bisnis secara instan dalam 1 kali klik.",
    details: [
      "Standar akuntansi Indonesia (PSAK)",
      "Grafik performa profitabilitas per divisi",
      "Export Excel, PDF, atau direct print"
    ],
    metric: "Tutup Buku Hemat Waktu 80%"
  },
  {
    id: "cloud",
    title: "4. Akses Multi-Device",
    desc: "Pantau omzet dan stok dari mana saja lewat smartphone, tablet, atau desktop untuk mobilitas manajemen tinggi.",
    details: [
      "Sinkronisasi data antar cabang lancar",
      "Hak akses user bertingkat & terenkripsi",
      "Backup otomatis lokal & cloud storage"
    ],
    metric: "Monitoring Bisnis 24/7"
  }
];

export function FeaturesWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="border-y border-white/[0.07] bg-[#0c0d14] py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
            Alur Terintegrasi
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Satu Sistem untuk Seluruh Siklus Operasional
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Dari input transaksi kasir hingga laporan keuangan siap audit, semuanya berjalan otomatis dan sinkron.
          </p>
        </div>

        {/* Step Tabs */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`text-left rounded-2xl border p-5 transition-all ${
                activeStep === idx
                  ? "border-emerald-500/50 bg-[#161824] shadow-lg shadow-emerald-950/20"
                  : "border-white/5 bg-[#12131a]/60 hover:border-white/15 hover:bg-[#151620]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono ${activeStep === idx ? "text-emerald-400 font-bold" : "text-zinc-500"}`}>
                  Tahap 0{idx + 1}
                </span>
                {activeStep === idx && (
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </div>
              <h3 className={`mt-3 text-sm font-bold ${activeStep === idx ? "text-white" : "text-zinc-300"}`}>
                {step.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-[#12131a] p-8 shadow-2xl lg:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-semibold text-emerald-300">
                {steps[activeStep].metric}
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {steps[activeStep].title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {steps[activeStep].desc}
              </p>

              <div className="mt-6 space-y-2.5">
                {steps[activeStep].details.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-zinc-200">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] font-bold text-emerald-400">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-zinc-950 transition hover:bg-emerald-400"
                >
                  Konsultasikan Alur Ini
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Visual Box Simulation */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[11px] text-zinc-400">
                <span>// MODUL PREVIEW</span>
                <span className="text-emerald-400">LIVE READY</span>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between text-zinc-300">
                  <span className="text-zinc-500">Status Proses:</span>
                  <span className="text-emerald-400">Otomatis Terverifikasi</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span className="text-zinc-500">Database Engine:</span>
                  <span>SQL Embedded Client / Server</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span className="text-zinc-500">Regional Setup:</span>
                  <span>Surabaya / Jawa Timur Multi-Branch</span>
                </div>
                <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-3 text-[11px] text-emerald-300">
                  ⚡ Dilengkapi fasilitas migrasi data saldo awal dari Excel atau software lama secara aman.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

