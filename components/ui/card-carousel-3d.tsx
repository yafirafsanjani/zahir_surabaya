"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CardCarousel3DProps {
  children: ReactNode[];
  perspective?: number;
  cardSpacingX?: number;
  cardDepthZ?: number;
  cardRotationY?: number;
  cardScaleDown?: number;
  cardMaxWidth?: number;
  className?: string;
  autoPlay?: boolean;
}

export function CardCarousel3D({
  children,
  perspective = 1400,
  cardSpacingX = 35,
  cardDepthZ = 120,
  cardRotationY = -12,
  cardScaleDown = 0.08,
  cardMaxWidth = 440,
  className = "",
  autoPlay = false,
}: CardCarousel3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const items = React.Children.toArray(children);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, items.length]);

  const nextSlide = () => {
    if (items.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }
  };

  const prevSlide = () => {
    if (items.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  if (items.length === 0) return null;

  const currentBaseScale = isMobile ? 0.9 : 1;

  return (
    <div className={`relative flex flex-col w-full overflow-hidden select-none py-6 ${className}`}>
      {/* 3D Viewport */}
      <div
        className="relative flex items-center justify-center w-full min-h-[360px] sm:min-h-[400px] overflow-hidden"
        style={{ perspective: `${perspective}px` }}
      >
        <AnimatePresence mode="popLayout">
          {items.map((child, idx) => {
            let offset = idx - currentIndex;
            const half = Math.floor(items.length / 2);
            if (offset > half) offset -= items.length;
            if (offset < -half) offset += items.length;

            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={idx}
                initial={false}
                animate={{
                  x: `${offset * (isMobile ? cardSpacingX * 1.3 : cardSpacingX)}%`,
                  z: -absOffset * cardDepthZ,
                  rotateY: offset * cardRotationY,
                  scale: (1 - absOffset * cardScaleDown) * currentBaseScale,
                  zIndex: items.length - absOffset,
                  opacity: absOffset > 1 ? 0 : isCenter ? 1 : 0.65,
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  if (!isCenter) setCurrentIndex(idx);
                }}
                className="absolute flex items-center justify-center w-[88%] transition-opacity"
                style={{
                  transformStyle: "preserve-3d",
                  maxWidth: `${cardMaxWidth}px`,
                  cursor: isCenter ? "default" : "pointer",
                }}
              >
                <div className="w-full">{child}</div>
                {!isCenter && (
                  <div className="absolute inset-0 rounded-xl bg-background/20 pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between w-full max-w-4xl mx-auto px-4 mt-6 z-20">
        {/* Animated Pill Dots */}
        <div className="flex items-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Pindah ke slide ${idx + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: idx === currentIndex ? "24px" : "6px",
                background:
                  idx === currentIndex
                    ? "linear-gradient(90deg, #0062ff, #38bdf8)"
                    : "var(--border-strong)",
                boxShadow:
                  idx === currentIndex ? "0 0 10px rgba(0, 98, 255, 0.4)" : "none",
              }}
            />
          ))}
        </div>

        {/* Circular Arrow Buttons with Glow Hover */}
        <div className="flex items-center gap-2.5">
          <motion.button
            whileHover={{ scale: 1.08, borderColor: "#0062ff" }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            aria-label="Slide sebelumnya"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-xs transition-colors hover:border-primary hover:text-primary"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08, borderColor: "#0062ff" }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            aria-label="Slide berikutnya"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-xs transition-colors hover:border-primary hover:text-primary"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}