"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
      // 3 milestones: activate as the line progresses
      if (latest < 0.35) {
        setActiveIndex(0);
      } else if (latest < 0.72) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      id="parcours"
      className="py-20 sm:py-24 lg:py-32 bg-blanc-chaud border-b border-sable-border overflow-hidden"
    >
      <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
        {/* Section Header */}
        <div className="max-w-[800px] mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold tracking-wider uppercase text-cuivre block mb-3"
          >
            {portfolioContent.timeline.sectionBadge}
          </motion.span>

          {/* Title: 42-48px desktop, clamp(2rem, 7vw, 2.75rem) mobile */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2rem,7vw,2.75rem)] lg:text-[2.75rem] xl:text-[3rem] font-display font-extrabold text-encre leading-[1.16] tracking-tight mb-4"
          >
            {portfolioContent.timeline.heading}
          </motion.h2>

          {/* Subtitle: 16-17px desktop, 15-16px mobile */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] sm:text-base lg:text-[17px] text-encre-light leading-relaxed font-sans max-w-2xl"
          >
            {portfolioContent.timeline.intro}
          </motion.p>
        </div>

        {/* Narrative Vertical Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto pt-2">
          {/* Neutral Background Vertical Line */}
          <div
            className="absolute left-[9px] md:left-[204px] top-3 bottom-6 w-[2px] bg-sable-border/70 select-none pointer-events-none"
            aria-hidden="true"
          />

          {/* Scroll-Linked Progressive Copper Line */}
          {!prefersReducedMotion ? (
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute left-[9px] md:left-[204px] top-3 bottom-6 w-[2px] bg-cuivre z-0 select-none pointer-events-none"
              aria-hidden="true"
            />
          ) : (
            <div
              className="absolute left-[9px] md:left-[204px] top-3 bottom-6 w-[2px] bg-cuivre/80 z-0"
              aria-hidden="true"
            />
          )}

          {/* Milestones List - Calibrated spacing and enhanced readability */}
          <div className="space-y-9 sm:space-y-11 lg:space-y-12">
            {portfolioContent.timeline.milestones.map((item, idx) => {
              const isActive = activeIndex >= idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.1 * idx,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex flex-col md:flex-row items-start pl-8 md:pl-0 group"
                >
                  {/* Left Column (Desktop >= 768px): Period or Stage */}
                  <div className="hidden md:block md:w-[185px] md:text-right flex-shrink-0 pt-1 pr-8">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-[250ms] ${
                        isActive
                          ? "text-cuivre font-bold"
                          : "text-encre-muted group-hover:text-cuivre"
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>

                  {/* Circular Node Marker on the Line (Interactive & Scroll-Active) */}
                  <div
                    className={`absolute left-0 md:left-[195px] top-1 w-5 h-5 rounded-full bg-blanc-chaud flex items-center justify-center transition-all duration-[300ms] shadow-2xs z-10 ${
                      isActive
                        ? "border-2 border-cuivre"
                        : "border-2 border-sable-border group-hover:border-cuivre/80"
                    } group-hover:scale-110`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-[300ms] ${
                        isActive
                          ? "bg-cuivre scale-100"
                          : "bg-sable-border/80 scale-75 group-hover:bg-cuivre/70"
                      }`}
                    />
                  </div>

                  {/* Right Column (Content) - Generous horizontal space and 16px descriptions */}
                  <div className="flex-1 md:pl-10 pb-6 md:pb-8 border-b border-sable-border/60 last:border-b-0 w-full">
                    {/* Period above title on mobile only */}
                    <span className="md:hidden text-xs uppercase tracking-wider font-semibold text-cuivre block mb-1.5">
                      {item.period}
                    </span>

                    {/* Title with hover displacement & subtle copper underline */}
                    <h3
                      className={`font-display font-bold text-lg sm:text-xl lg:text-[1.4rem] mb-2 sm:mb-2.5 transition-all duration-[220ms] ease-out group-hover:translate-x-[3px] relative inline-block ${
                        isActive
                          ? "text-encre group-hover:text-vert-profond"
                          : "text-encre-light group-hover:text-encre"
                      }`}
                    >
                      <span>{item.title}</span>
                      <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-cuivre transition-all duration-200 ease-out group-hover:w-full" />
                    </h3>

                    {/* Description: ~16px with optimal line-height */}
                    <p className="text-[15.5px] sm:text-[16px] lg:text-[16.5px] text-encre/85 leading-[1.65] font-sans max-w-2xl">
                      {item.description}
                    </p>
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
