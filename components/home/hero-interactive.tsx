"use client";

import { useState } from "react";
import Link from "next/link";

type TabKey = "cashflow" | "inventory" | "reports";

export function HeroInteractive() {
  const [activeTab, setActiveTab] = useState<TabKey>("cashflow");

  return (
    <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 lg:px-8">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-full max-w-4xl -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/4 -z-10 h-72 w-72 rounded-full bg-teal-500/10 blur-[90px]" />

      {/* Hero Header Content */}
      <div className="mx-auto max-w-3xl text-center">
        {/* Shimmer Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 backdrop-blur-md">
          <span className="flex size-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-medium tracking-wide text-emerald-300">
            Zahir Surabaya Hub Resmi • Siap Versi 5, 6 & Online
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.12]">
          Kendalikan Finansial Bisnis dengan{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
            Akurasi Penuh.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
          Platform akuntansi dan manajemen inventori andalan puluhan ribu pengusaha. 
          Didukung layanan implementasi, konsultasi, dan pelatihan langsung di Surabaya & Jawa Timur.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/product"
            className="group relative inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-xs font-semibold text-zinc-950 shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/40"
          >
            Jelajahi Solusi Produk
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-xs font-semibold text-zinc-200 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </div>

      {/* Floating Interactive Preview Board */}
      <div className="mt-14 relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#101118]/80 p-2 shadow-2xl backdrop-blur-2xl sm:p-4">
        {/* Top window bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-3 pb-3">
          <div className="flex items-center gap-2">
            <div className="size-2.5 rounded-full bg-rose-500/70" />
            <div className="size-2.5 rounded-full bg-amber-500/70" />
            <div className="size-2.5 rounded-full bg-emerald-500/70" />
            <span className="ml-2 font-mono text-[11px] text-zinc-500">
              zahir-dashboard.surabaya.local
            </span>
          </div>

          {/* Interactive Switchers */}
          <div className="flex items-center gap-1 rounded-lg bg-black/40 p-1 border border-white/5">
            <button
              onClick={() => setActiveTab("cashflow")}
              className={`rounded-md px-3 py-1 text-[11px] font-medium transition ${
                activeTab === "cashflow"
                  ? "bg-emerald-500 text-zinc-950 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Arus Kas
            </button>
            <button
              onClick={() => setActiveTab("inventory")}
              className={`rounded-md px-3 py-1 text-[11px] font-medium transition ${
                activeTab === "inventory"
                  ? "bg-emerald-500 text-zinc-950 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Inventori & POS
            </button>
            <button
              onClick={() => setActiveTab("reports")}
              className={`rounded-md px-3 py-1 text-[11px] font-medium transition ${
                activeTab === "reports"
                  ? "bg-emerald-500 text-zinc-950 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Laporan Real-time
            </button>
          </div>
        </div>

        {/* Dynamic Display Panel based on Tab */}
        <div className="p-4 sm:p-6">
          {activeTab === "cashflow" && (
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="text-[11px] font-medium text-zinc-400">Total Pemasukan (Bulan Ini)</span>
                <p className="mt-2 text-2xl font-bold text-emerald-400">Rp 482.950.000</p>
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-300">
                  <span>↑ 18.4%</span>
                  <span className="text-zinc-500">vs bulan lalu</span>
                </div>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="text-[11px] font-medium text-zinc-400">Pengeluaran & HPP Operasional</span>
                <p className="mt-2 text-2xl font-bold text-zinc-100">Rp 318.420.000</p>
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-zinc-400">
                  <span>Terkontrol stabil (65.9%)</span>
                </div>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="text-[11px] font-medium text-zinc-400">Laba Bersih Terproyeksi</span>
                <p className="mt-2 text-2xl font-bold text-teal-300">Rp 164.530.000</p>
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span>✓ Neraca Balance Otomatis</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "inventory" && (
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="text-[11px] font-medium text-zinc-400">Total SKU Terdaftar</span>
                <p className="mt-2 text-2xl font-bold text-zinc-100">1.480 Item</p>
                <p className="mt-2 text-[11px] text-emerald-400">Multi-warehouse Surabaya & Sidoarjo</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="text-[11px] font-medium text-zinc-400">Peringatan Stok Minimum</span>
                <p className="mt-2 text-2xl font-bold text-amber-400">4 Barang</p>
                <p className="mt-2 text-[11px] text-zinc-400">Pengingat PO otomatis terkirim</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="text-[11px] font-medium text-zinc-400">Kecepatan Mutasi Barang</span>
                <p className="mt-2 text-2xl font-bold text-emerald-400">98.2% Akurat</p>
                <p className="mt-2 text-[11px] text-zinc-400">Barcode & serial number scanner ready</p>
              </div>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="text-[11px] font-medium text-zinc-400">Laporan Laba Rugi Komprehensif</span>
                <p className="mt-2 text-xl font-bold text-zinc-100">Siap Cetak / Ekspor</p>
                <p className="mt-2 text-[11px] text-emerald-400">Standar PSAK & Pajak Indonesia</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="text-[11px] font-medium text-zinc-400">Buku Besar & Jurnal Penyesuaian</span>
                <p className="mt-2 text-xl font-bold text-zinc-100">Audit Trail Lengkap</p>
                <p className="mt-2 text-[11px] text-zinc-400">Riwayat edit user terekam ketat</p>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <span className="text-[11px] font-medium text-zinc-400">Grafik Performa Multi-Cabang</span>
                <p className="mt-2 text-xl font-bold text-teal-300">Live Sinkronisasi</p>
                <p className="mt-2 text-[11px] text-zinc-400">Akses desktop & mobile terhubung</p>
              </div>
            </div>
          )}

          {/* Mini Data Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-between rounded-lg border border-white/[0.04] bg-black/30 px-4 py-3 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400" />
              <span>Status Server: Berjalan Optimal</span>
            </div>
            <div className="font-mono text-[11px] text-zinc-500">
              Database Terenkripsi AES-256 • Backup Otomatis
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

