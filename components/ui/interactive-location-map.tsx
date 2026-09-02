"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface LocationPin {
  id: string;
  name: string;
  badge: string;
  city: string;
  address: string;
  service: string;
  embedUrl: string;
  mapsUrl: string;
  lat: number;
  lng: number;
}

const locations: LocationPin[] = [
  {
    id: "surabaya",
    name: "Kantor Layanan Utama Zahir Surabaya",
    badge: "Head Office Hub Jatim",
    city: "Surabaya, Jawa Timur",
    address: "Pusat Bisnis Surabaya & Hub Representasi Resmi Jawa Timur",
    service: "Konsultasi Produk, Demo Lengkap, Setup COA, Training Onsite & Remote",
    embedUrl: "https://www.google.com/maps?q=Zahir%20Accounting%20Surabaya&output=embed",
    mapsUrl: "https://share.google/en5SdkJwDWySfDT6t",
    lat: -7.2575,
    lng: 112.7521,
  },
  {
    id: "sidoarjo",
    name: "Area Pendampingan Sidoarjo",
    badge: "Kawasan Industri & Dagang",
    city: "Sidoarjo, Jawa Timur",
    address: "Kawasan Industri & Pergudangan Sidoarjo",
    service: "Implementasi Sistem Stok Multi-Gudang & Integrasi Kasir POS",
    embedUrl: "https://www.google.com/maps?q=Sidoarjo%20Jawa%20Timur&output=embed",
    mapsUrl: "https://www.google.com/maps?q=Sidoarjo%20Jawa%20Timur",
    lat: -7.4726,
    lng: 112.6675,
  },
  {
    id: "gresik",
    name: "Area Pendampingan Gresik",
    badge: "Sentra Manufaktur & Distribusi",
    city: "Gresik, Jawa Timur",
    address: "Kawasan Industri & Logistik Gresik",
    service: "Setup Modul Manufaktur, HPP Produksi, & Job Order Costing",
    embedUrl: "https://www.google.com/maps?q=Gresik%20Jawa%20Timur&output=embed",
    mapsUrl: "https://www.google.com/maps?q=Gresik%20Jawa%20Timur",
    lat: -7.1566,
    lng: 112.6555,
  },
  {
    id: "malang",
    name: "Area Pendampingan Malang Raya",
    badge: "Sentra UKM & Jasa",
    city: "Malang & Pasuruan",
    address: "Malang Raya & Pasuruan",
    service: "Otomatisasi Pembukuan Usaha Berkembang & Jasa Profesional",
    embedUrl: "https://www.google.com/maps?q=Malang%20Jawa%20Timur&output=embed",
    mapsUrl: "https://www.google.com/maps?q=Malang%20Jawa%20Timur",
    lat: -7.9797,
    lng: 112.6304,
  },
];

export function InteractiveLocationMap() {
  const [selectedId, setSelectedId] = useState<string>("surabaya");
  const activeLocation = locations.find((l) => l.id === selectedId) || locations[0];

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      {/* Top Location Selector Pills (Fly-To Buttons) */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border bg-surface-raised p-4 sm:p-5">
        <span className="text-xs font-bold text-muted mr-1">Pilih Lokasi Hub:</span>
        {locations.map((loc) => {
          const isActive = loc.id === selectedId;
          return (
            <button
              key={loc.id}
              onClick={() => setSelectedId(loc.id)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-primary text-white shadow-xs scale-[1.02]"
                  : "border border-border bg-card text-body hover:border-primary/40 hover:text-foreground"
              }`}
              type="button"
            >
              <span
                className={`size-1.5 rounded-full ${
                  isActive ? "bg-white animate-pulse" : "bg-primary"
                }`}
              />
              <span>{loc.city.split(",")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Details + Map Viewport */}
      <div className="grid lg:grid-cols-[1.05fr_1.15fr]">
        {/* Left: Active Location Card with Motion */}
        <motion.div
          key={activeLocation.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col justify-between p-6 sm:p-8"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              {activeLocation.badge}
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              {activeLocation.name}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed">
              {activeLocation.address}
            </p>

            <div className="mt-6 rounded-lg border border-border bg-surface-raised p-4 space-y-2">
              <p className="text-xs font-semibold text-foreground">Fokus Layanan:</p>
              <p className="text-xs text-muted leading-relaxed">{activeLocation.service}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-border/80">
            <a
              className="btn-primary"
              href={activeLocation.mapsUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span>Petunjuk Arah Google Maps</span>
              <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <span className="text-xs font-mono text-muted">
              Lat: {activeLocation.lat} · Lng: {activeLocation.lng}
            </span>
          </div>
        </motion.div>

        {/* Right: Embedded Interactive Map */}
        <div className="relative min-h-[340px] border-t lg:border-t-0 lg:border-l border-border bg-surface-muted">
          <iframe
            key={activeLocation.embedUrl}
            aria-label={`Peta lokasi ${activeLocation.name}`}
            className="absolute inset-0 size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={activeLocation.embedUrl}
            title={activeLocation.name}
          />
          <div className="pointer-events-none absolute bottom-3 left-3 rounded-md border border-border/80 bg-card/90 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur-md">
            📍 {activeLocation.city}
          </div>
        </div>
      </div>
    </div>
  );
}