"use client";

import { useState } from "react";

const timeline = [
  {
    year: "1996",
    title: "Versi Perdana 1.0",
    desc: "Zahir Accounting lahir sebagai pionir software akuntansi visual yang mudah digunakan di Indonesia.",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    year: "1999",
    title: "Ekspansi Nasional",
    desc: "Dipercaya puluhan ribu pelaku usaha dan mendapatkan sambutan luas di berbagai sektor bisnis.",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
  },
  {
    year: "2014",
    title: "Generasi Zahir 6",
    desc: "Performa database tangguh, arsitektur multi-user andal, dan modul enterprise yang fleksibel.",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
  {
    year: "2015+",
    title: "Ekosistem Cloud & Mobile",
    desc: "Integrasi hybrid desktop dan Zahir Online untuk mobilitas dan kemudahan monitoring bisnis.",
    icon: (
      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 10-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
];

export function CompanyHistoryTimelineSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border/80 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="badge-minimal">Rekam Jejak</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Perjalanan Konsisten Mendukung Bisnis Indonesia
          </h2>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block mt-16 relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-border" />

          <div className="relative grid grid-cols-4 gap-6">
            {timeline.map((item, index) => {
              const isTop = index % 2 === 0;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={item.year}
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {isTop ? (
                    <>
                      <div className="w-full flex justify-center mb-6">
                        <TimelineCard item={item} isHovered={isHovered} />
                      </div>
                      <div className="flex flex-col items-center z-10">
                        <ConnectorLine height="h-6" />
                        <MilestoneDot isHovered={isHovered} />
                        <ConnectorLine height="h-6" />
                      </div>
                      <div className="mt-6" />
                    </>
                  ) : (
                    <>
                      <div className="mb-6" />
                      <div className="flex flex-col items-center z-10">
                        <ConnectorLine height="h-6" />
                        <MilestoneDot isHovered={isHovered} />
                        <ConnectorLine height="h-6" />
                      </div>
                      <div className="w-full flex justify-center mt-6">
                        <TimelineCard item={item} isHovered={isHovered} />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden mt-10 relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-0">
            {timeline.map((item, index) => {
              const isHovered = hoveredIndex === index;
              const isLast = index === timeline.length - 1;

              return (
                <div
                  key={item.year}
                  className="relative flex gap-4"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex flex-col items-center z-10 shrink-0">
                    <MilestoneDot isHovered={isHovered} />
                    {!isLast && <ConnectorLine height="flex-1" vertical />}
                  </div>

                  <div className="pt-0.5 pb-8 flex-1 min-w-0">
                    <MobileTimelineCard item={item} isHovered={isHovered} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneDot({ isHovered }: { isHovered: boolean }) {
  return (
    <div
      className={`
        relative flex items-center justify-center
        size-4 rounded-full border-2 transition-all duration-200 ease-out
        ${isHovered
          ? "border-primary bg-primary scale-125"
          : "border-border-strong bg-background"
        }
      `}
    >
      <div
        className={`
          absolute inset-0 rounded-full transition-opacity duration-200
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
        style={{
          boxShadow: "0 0 0 3px rgba(227, 58, 51, 0.15)",
        }}
      />
    </div>
  );
}

function ConnectorLine({
  height,
  vertical,
}: {
  height: string;
  vertical?: boolean;
}) {
  return (
    <div
      className={`
        bg-border
        ${vertical ? `w-px ${height}` : `h-px ${height} w-full`}
      `}
    />
  );
}

function TimelineCard({
  item,
  isHovered,
}: {
  item: (typeof timeline)[number];
  isHovered: boolean;
}) {
  return (
    <div
      className={`
        w-full max-w-[220px] p-4 rounded-xl border transition-all duration-200 ease-out cursor-default
        ${isHovered
          ? "border-primary/30 shadow-[0_4px_20px_-4px_rgba(0,98,255,0.1)] -translate-y-0.5"
          : "border-border/60 shadow-none"
        }
      `}
      style={{ background: "var(--card)" }}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={`
            flex items-center justify-center size-9 rounded-lg transition-colors duration-200
            ${isHovered ? "bg-primary text-on-primary" : "bg-primary-soft text-primary"}
          `}
        >
          {item.icon}
        </div>
        <span
          className={`
            font-mono text-xl font-bold tracking-tight transition-colors duration-200
            ${isHovered ? "text-primary" : "text-foreground"}
          `}
        >
          {item.year}
        </span>
      </div>

      <h3 className="mt-3 text-base font-semibold text-foreground leading-snug">
        {item.title}
      </h3>
      <p className="mt-1.5 text-sm text-muted leading-relaxed">
        {item.desc}
      </p>
    </div>
  );
}

function MobileTimelineCard({
  item,
  isHovered,
}: {
  item: (typeof timeline)[number];
  isHovered: boolean;
}) {
  return (
    <div
      className={`
        p-4 rounded-xl border transition-all duration-200 ease-out cursor-default
        ${isHovered
          ? "border-primary/30 shadow-[0_4px_20px_-4px_rgba(0,98,255,0.1)]"
          : "border-border/60 shadow-none"
        }
      `}
      style={{ background: "var(--card)" }}
    >
      <div className="flex items-center gap-3">
        <div
          className={`
            flex items-center justify-center size-9 rounded-lg shrink-0 transition-colors duration-200
            ${isHovered ? "bg-primary text-on-primary" : "bg-primary-soft text-primary"}
          `}
        >
          {item.icon}
        </div>
        <span
          className={`
            font-mono text-lg font-bold tracking-tight transition-colors duration-200
            ${isHovered ? "text-primary" : "text-foreground"}
          `}
        >
          {item.year}
        </span>
      </div>

      <h3 className="mt-2.5 text-base font-semibold text-foreground leading-snug">
        {item.title}
      </h3>
      <p className="mt-1 text-sm text-muted leading-relaxed">
        {item.desc}
      </p>
    </div>
  );
}
