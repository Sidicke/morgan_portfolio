"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Compass,
  Building2,
  Briefcase,
  Palette,
  Terminal,
} from "lucide-react";
import { portfolioContent } from "@/content/portfolioData";

export const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Scroll tracking across the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  // Natural spring easing for copper line progression
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrefersReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const count = portfolioContent.timeline.milestones.length;
      const step = 1 / count;
      const idx = Math.min(count - 1, Math.floor(latest / (step * 0.95)));
      setActiveIndex(idx);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const getMilestoneIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Briefcase className="w-4 h-4 text-orange-700" />;
      case 1:
        return <Building2 className="w-4 h-4 text-emerald-700" />;
      case 2:
        return <Compass className="w-4 h-4 text-amber-700" />;
      case 3:
        return <Palette className="w-4 h-4 text-indigo-700" />;
      case 4:
        return <Terminal className="w-4 h-4 text-cyan-700" />;
      default:
        return <Briefcase className="w-4 h-4 text-cuivre" />;
    }
  };

  return (
    <section
      id="parcours"
      className="py-18 sm:py-22 lg:py-28 bg-[#F3EFE6] border-b border-sable-border overflow-hidden relative scroll-mt-20"
    >
      {/* Warm ambient tinted glows */}
      <div
        className="absolute top-1/3 -left-20 w-[600px] h-[600px] bg-cuivre/7 rounded-full blur-[150px] pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-vert-profond/6 rounded-full blur-[140px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14 relative z-10">
        {/* Section Header with smooth scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[850px] mb-12 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cuivre/10 border border-cuivre/20 text-cuivre text-xs font-bold uppercase tracking-wider mb-3">
            <span>{portfolioContent.timeline.sectionBadge}</span>
          </span>

          <h2 className="text-[clamp(2rem,7vw,2.75rem)] lg:text-[2.75rem] font-display font-extrabold text-encre leading-[1.16] tracking-tight mb-3.5">
            {portfolioContent.timeline.heading}
          </h2>

          <p className="text-[15px] sm:text-base lg:text-[17px] text-encre-light leading-relaxed font-sans max-w-2xl">
            {portfolioContent.timeline.intro}
          </p>
        </motion.div>

        {/* Narrative Vertical Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto pt-2">
          {/* Neutral Background Vertical Line */}
          <div
            className="absolute left-[13px] md:left-[214px] top-4 bottom-8 w-[2px] bg-sable-border/90 select-none pointer-events-none"
            aria-hidden="true"
          />

          {/* Scroll-Linked Progressive Line */}
          {!prefersReducedMotion ? (
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute left-[13px] md:left-[214px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-orange-600 via-emerald-600 to-cyan-600 z-0 select-none pointer-events-none"
              aria-hidden="true"
            />
          ) : (
            <div
              className="absolute left-[13px] md:left-[214px] top-4 bottom-8 w-[2px] bg-cuivre/80 z-0"
              aria-hidden="true"
            />
          )}

          {/* Milestones List */}
          <div className="space-y-6 sm:space-y-7">
            {portfolioContent.timeline.milestones.map((item, idx) => {
              const isActive = activeIndex >= idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex flex-col md:flex-row items-start pl-9 md:pl-0 group"
                >
                  {/* Left Column (Desktop >= 768px): Period */}
                  <div className="hidden md:block md:w-[195px] md:text-right flex-shrink-0 pt-2.5 pr-8">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider transition-colors duration-[200ms] ${
                        isActive
                          ? "text-encre font-extrabold"
                          : "text-encre-muted group-hover:text-cuivre"
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>

                  {/* Circular Node Marker on the Line */}
                  <div
                    className={`absolute left-0 md:left-[203px] top-2.5 w-6 h-6 rounded-full bg-white flex items-center justify-center transition-all duration-[250ms] shadow-sm z-10 ${
                      isActive
                        ? "border-2 border-encre scale-105"
                        : "border-2 border-sable-border group-hover:border-cuivre"
                    }`}
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-[250ms] ${
                        isActive ? `${item.dotColor} scale-100` : "bg-sable-border scale-75"
                      }`}
                    />
                  </div>

                  {/* Right Column (Card Content) with warm contrast surface and color tags */}
                  <div className="flex-1 md:pl-10 w-full">
                    <div className="rounded-2xl bg-white border border-sable-border p-5 sm:p-6 shadow-2xs hover:shadow-md hover:border-cuivre/40 transition-all duration-300">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <span className="md:hidden text-xs uppercase tracking-wider font-extrabold text-encre">
                          {item.period}
                        </span>

                        {/* Category Pill with authentic color styling */}
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border shadow-2xs ${item.colorClass}`}
                        >
                          {getMilestoneIcon(idx)}
                          <span>{item.category}</span>
                        </span>

                        <span className="text-xs text-encre-muted font-medium ml-auto">
                          {item.role}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-lg sm:text-xl text-encre mb-2 group-hover:text-vert-profond transition-colors duration-200">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[14.5px] sm:text-[15px] text-encre/85 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
