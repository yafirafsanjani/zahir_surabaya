"use client";

import { motion } from "framer-motion";

interface LocationPin {
  id: string;
  name: string;
  badge: string;
  city: string;
  address: string;
  service: string;
  phone: string;
  email: string;
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
    address: "Jl. Klampis Harapan I No.10 Blok AA7, Klampis Ngasem, Kec. Sukolilo, Surabaya, Jawa Timur 60117",
    service: "Konsultasi Produk, Demo Lengkap, Setup COA, Training Onsite & Remote",
    phone: "08117577444",
    email: "zahirsby@gmail.com",
    embedUrl: "https://www.google.com/maps?q=Zahir%20Accounting%20Surabaya&output=embed",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jl.+Klampis+Harapan+I+No.10+Surabaya",
    lat: -7.2961,
    lng: 112.7867,
  },
];

export function InteractiveLocationMap() {
  const activeLocation = locations[0];

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
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
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              {activeLocation.badge}
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              {activeLocation.name}
            </h3>

            <div className="mt-2 flex items-start gap-2 text-sm sm:text-base text-body leading-relaxed">
              <svg className="mt-0.5 size-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>{activeLocation.address}</span>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-sm font-semibold text-foreground">Kontak:</p>
              <a
                href={`https://wa.me/${activeLocation.phone}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-body hover:text-primary transition-colors"
              >
                <svg className="size-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span>{activeLocation.phone}</span>
              </a>
              <a
                href={`mailto:${activeLocation.email}`}
                className="flex items-center gap-2 text-sm text-body hover:text-primary transition-colors"
              >
                <svg className="size-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span>{activeLocation.email}</span>
              </a>
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