"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioContent } from "@/content/portfolioData";
import { PortraitFrame } from "../ui/PortraitFrame";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-ivoire border-b border-sable-border">
      {/* Subtle warm atmospheric ambient lights */}
      <div
        className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-cuivre/8 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-vert-profond/6 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 items-center">
          {/* Left: Editorial Content (Cols 1-7 on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 lg:pr-4">
            {/* Top corridor & title badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-2 mb-5 sm:mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sable-border shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-cuivre" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-encre">
                  CEO BARON MERIDIAN & DG BAO CONSILIUM
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] sm:text-xs font-semibold shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Corridor Chine & France vers Bénin</span>
              </div>
            </motion.div>

            {/* H1 Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(2.5rem,8.5vw,4.5rem)] lg:text-[4rem] xl:text-[4.5rem] font-display font-extrabold text-encre tracking-tight leading-[1.05] mb-4 sm:mb-5"
            >
              Morgan Bocovo.
            </motion.h1>

            {/* Value Proposition */}
            <div className="text-[clamp(1.5rem,5vw,2.35rem)] lg:text-[2.1rem] xl:text-[2.35rem] font-display font-bold text-encre/90 leading-[1.18] mb-6 sm:mb-7">
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                {portfolioContent.meta.heroH1Line1}
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                <span className="font-serif italic font-normal text-cuivre">Connecter</span> les marchés.
              </motion.span>
            </div>

            {/* Concise descriptive text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[16px] sm:text-[17px] lg:text-[18px] text-encre-light max-w-xl font-sans font-normal leading-[1.65] mb-8 sm:mb-9"
            >
              {portfolioContent.meta.heroParagraph}
            </motion.p>

            {/* 2 Primary CTAs with active tactile feedback */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto"
            >
              <a
                href={portfolioContent.meta.ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-vert-profond text-white hover:bg-vert-profond-hover active:scale-[0.98] active:translate-y-[1px] transition-all duration-[220ms] ease-out font-semibold text-sm tracking-wide shadow-md hover:shadow-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond min-h-[48px]"
              >
                <span>{portfolioContent.meta.ctaPrimary.label}</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-300 transition-transform duration-[200ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={portfolioContent.meta.ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-sable-border hover:border-cuivre/50 bg-white text-encre hover:text-cuivre font-semibold text-sm active:scale-[0.98] active:translate-y-[1px] transition-all duration-[220ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond group min-h-[48px] shadow-2xs"
              >
                <span>{portfolioContent.meta.ctaSecondary.label}</span>
                <span className="text-cuivre group-hover:translate-x-1 transition-transform duration-[200ms]">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Portrait (Cols 8-12 on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0 z-0">
            <PortraitFrame />
          </div>
        </div>
      </div>
    </section>
  );
};
