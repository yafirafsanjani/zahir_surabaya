"use client";

import React, { useState, useRef, useEffect, useMemo, useCallback, ReactNode, ElementType } from "react";

const TEXT_ANIMATION_CSS = `
@keyframes text-snap-strike {
  0% {
    opacity: 0;
    transform: translateX(0.8em) scaleX(1.4) skewX(-20deg);
    text-shadow: -8px 0px 4px rgba(227, 58, 51, 0.7);
  }
  40% {
    opacity: 1;
    transform: translateX(-0.06em) scaleX(0.9) skewX(8deg);
    text-shadow: 3px 0px 2px rgba(244, 120, 114, 0.4);
  }
  70% {
    transform: translateX(0.02em) scaleX(1.05) skewX(-2deg);
    text-shadow: -1px 0px 0px rgba(227, 58, 51, 0.2);
  }
  85% {
    transform: translate(-1px, 1px) scaleX(1) skewX(0deg);
    text-shadow: 0px 0px 0px transparent;
  }
  100% {
    transform: translate(0, 0) scaleX(1) skewX(0deg);
    text-shadow: 0px 0px 0px transparent;
  }
}
`;

interface AnimatedTextProps {
  text: string;
  className?: string;
  mode?: "hover" | "appear" | "loop";
  as?: ElementType;
  children?: ReactNode;
}

export function AnimatedText({
  text,
  className = "",
  mode = "hover",
  as: Component = "span",
}: AnimatedTextProps) {
  const [isActive, setIsActive] = useState(mode === "appear");
  const [tick, setTick] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const charsData = useMemo(() => {
    return text.split("").map((char, index) => ({
      char,
      delay: `${(index * 0.025).toFixed(3)}s`,
    }));
  }, [text]);

  const words = useMemo(() => {
    const list: Array<typeof charsData> = [];
    let cur: typeof charsData = [];
    for (const item of charsData) {
      if (item.char === " " || item.char === "\n" || item.char === "\r") {
        if (cur.length) {
          list.push(cur);
          cur = [];
        }
        list.push([item]);
      } else {
        cur.push(item);
      }
    }
    if (cur.length) list.push(cur);
    return list;
  }, [charsData]);

  // Handle Appear Mode with IntersectionObserver
  useEffect(() => {
    if (mode !== "appear" || !containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          setTick((t) => t + 1);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [mode]);

  // Handle Loop Mode
  useEffect(() => {
    if (mode !== "loop") return;
    let isMounted = true;

    const cycle = () => {
      if (!isMounted) return;
      setIsActive(true);
      setTick((t) => t + 1);
      timerRef.current = setTimeout(cycle, 4000);
    };

    timerRef.current = setTimeout(cycle, 200);
    return () => {
      isMounted = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [mode]);

  const handleMouseEnter = useCallback(() => {
    if (mode === "hover") {
      setIsActive(true);
      setTick((t) => t + 1);
    }
  }, [mode]);

  const handleMouseLeave = useCallback(() => {
    if (mode === "hover") {
      setIsActive(false);
    }
  }, [mode]);

  return (
    <Component
      className={`inline-block cursor-default select-none ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <style>{TEXT_ANIMATION_CSS}</style>
      <span className="inline" key={tick}>
        {words.map((word, wi) => {
          const isSpace =
            word.length === 1 &&
            (word[0].char === " " || word[0].char === "\n" || word[0].char === "\r");

          if (isSpace) {
            return (
              <span className="whitespace-pre" key={wi}>
                {word[0].char}
              </span>
            );
          }

          return (
            <span className="inline-block whitespace-nowrap" key={wi}>
              {word.map((item, ci) => (
                <span className="relative inline" key={ci}>
                  <span className="opacity-0">{item.char}</span>
                  {isActive ? (
                    <span
                      className="absolute left-0 top-0 inline-block pointer-events-none"
                      style={{
                        animation: `text-snap-strike 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both ${item.delay}`,
                        transformOrigin: "bottom center",
                      }}
                    >
                      {item.char}
                    </span>
                  ) : (
                    <span className="absolute left-0 top-0 pointer-events-none">
                      {item.char}
                    </span>
                  )}
                </span>
              ))}
            </span>
          );
        })}
      </span>
    </Component>
  );
}