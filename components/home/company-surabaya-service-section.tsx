"use client";

import { useRef, useEffect, useState, useCallback } from "react";

type TeamMember = {
  name: string;
  role: string;
  gradient: string;
  initial: string;
};

const team: TeamMember[] = [
  { name: "Andi Pratama", role: "Konsultan Implementasi", gradient: "from-sky-500 to-blue-600", initial: "AP" },
  { name: "Sari Dewi", role: "Finance Trainer", gradient: "from-emerald-500 to-teal-600", initial: "SD" },
  { name: "Rizky Ramadhan", role: "Technical Support", gradient: "from-violet-500 to-purple-600", initial: "RR" },
  { name: "Maya Lestari", role: "Account Manager", gradient: "from-rose-500 to-pink-600", initial: "ML" },
  { name: "Budi Santoso", role: "Data Migration Specialist", gradient: "from-amber-500 to-orange-600", initial: "BS" },
  { name: "Fitri Handayani", role: "Customer Success", gradient: "from-cyan-500 to-sky-600", initial: "FH" },
];

export function CompanySurabayaServiceSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.querySelector<HTMLElement>("[data-card]")?.offsetWidth || 0;
    const gap = 20;
    const scroll = track.scrollLeft;
    const idx = Math.round(scroll / (cardWidth + gap));
    setActiveIndex(Math.max(0, Math.min(team.length - 1, idx)));
  }, []);

  const scrollTo = useCallback((dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.querySelector<HTMLElement>("[data-card]")?.offsetWidth || 0;
    const gap = 20;
    track.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
  }, []);

  useEffect(() => {
    updateActive();
  }, [updateActive]);

  return (
    <section className="bg-background py-16 sm:py-20 border-b border-border/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="badge-minimal">Tim Zahir Surabaya</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Tenaga Ahli Resmi di Balik Setiap Implementasi
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-body">
              Tim profesional Zahir Surabaya siap mendampingi konsultasi, setup, migrasi, hingga pelatihan staf Anda.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden items-center gap-2.5 sm:flex">
            <button
              type="button"
              aria-label="Slide sebelumnya"
              onClick={() => scrollTo(-1)}
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-xs transition hover:border-primary hover:text-primary"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Slide berikutnya"
              onClick={() => scrollTo(1)}
              className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-xs transition hover:border-primary hover:text-primary"
            >
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div
          ref={trackRef}
          onScroll={updateActive}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {team.map((member) => (
            <div
              key={member.name}
              data-card
              className="w-[70%] shrink-0 snap-center sm:w-[46%] lg:w-[31%] xl:w-[23.5%]"
            >
              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                {/* Portrait Area */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-raised">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-15`} />
                  {/* Portrait Illustration placeholder */}
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 300 400"
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id={`g-${member.initial}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#e2e8f0" />
                        <stop offset="100%" stopColor="#cbd5e1" />
                      </linearGradient>
                    </defs>
                    <rect width="300" height="400" fill={`url(#g-${member.initial})`} />
                    <circle cx="150" cy="150" r="62" fill="#94a3b8" opacity="0.4" />
                    <path d="M60 400c0-55 40-95 90-95s90 40 90 95z" fill="#94a3b8" opacity="0.35" />
                  </svg>

                  {/* Initial badge */}
                  <div className="absolute right-3 bottom-3 flex size-11 items-center justify-center rounded-lg bg-white/90 text-sm font-bold text-slate-700 shadow-md backdrop-blur">
                    {member.initial}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-foreground">{member.name}</h3>
                  <p className="mt-0.5 text-xs text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator + Mobile nav */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {team.map((member, idx) => (
            <button
              key={member.name}
              type="button"
              aria-label={`Pindah ke foto ${member.name}`}
              aria-current={idx === activeIndex}
              onClick={() => {
                const track = trackRef.current;
                if (!track) return;
                const cardWidth = track.querySelector<HTMLElement>("[data-card]")?.offsetWidth || 0;
                const gap = 20;
                track.scrollTo({ left: idx * (cardWidth + gap), behavior: "smooth" });
              }}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: idx === activeIndex ? "24px" : "6px",
                background:
                  idx === activeIndex
                    ? "linear-gradient(90deg, #0062ff, #38bdf8)"
                    : "var(--border-strong)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
