"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { portfolioContent } from "@/content/portfolioData";
import { PortraitFrame } from "../ui/PortraitFrame";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-18 sm:pt-36 sm:pb-22 lg:pt-40 lg:pb-28 overflow-hidden bg-ivoire border-b border-sable-border">
      {/* Subtle warm atmospheric ambient lights */}
      <div
        className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-cuivre/5 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-vert-profond/5 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 items-center">
          {/* Left: Editorial Content (Cols 1-7 on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 lg:pr-4">
            {/* 0 ms: Petit label supérieur */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blanc-chaud border border-sable-border shadow-2xs mb-5 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cuivre" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-encre">
                {portfolioContent.meta.signature}
              </span>
            </motion.div>

            {/* 120 ms: Titre principal H1 — Morgan Bocovo (64-76px desktop, 700 font-bold, line-height 1.05) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[clamp(2.5rem,8.5vw,4.75rem)] lg:text-[4.2rem] xl:text-[4.75rem] font-display font-bold text-encre tracking-tight leading-[1.05] mb-4 sm:mb-5"
            >
              Morgan Bocovo.
            </motion.h1>

            {/* 300 ms: Proposition de valeur en 2 lignes (36-42px desktop) */}
            <div className="text-[clamp(1.5rem,5vw,2.5rem)] lg:text-[2.2rem] xl:text-[2.5rem] font-display font-bold text-encre/90 leading-[1.18] mb-6 sm:mb-7">
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

            {/* 500 ms: Texte descriptif concis */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[16.5px] sm:text-[17.5px] lg:text-[18px] text-encre-light max-w-xl font-sans font-normal leading-[1.65] mb-8 sm:mb-10"
            >
              {portfolioContent.meta.heroParagraph}
            </motion.p>

            {/* 650 ms: Les 2 CTA avec hover subtil (max 2px de translation) */}
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
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href={portfolioContent.meta.ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-encre text-blanc-chaud hover:bg-vert-profond transition-all duration-[220ms] ease-out font-semibold text-sm tracking-wide shadow-md hover:shadow-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond min-h-[48px]"
              >
                <span>{portfolioContent.meta.ctaPrimary.label}</span>
                <ArrowUpRight className="w-4 h-4 text-cuivre transition-transform duration-[200ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                href={portfolioContent.meta.ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-sable-border hover:border-encre/40 bg-blanc-chaud text-encre font-medium text-sm transition-all duration-[220ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond group min-h-[48px]"
              >
                <span>{portfolioContent.meta.ctaSecondary.label}</span>
                <span className="text-encre-muted group-hover:translate-x-1 transition-transform duration-[200ms]">→</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Portrait Imposant (Cols 8-12 on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0 z-0">
            <PortraitFrame />
          </div>
        </div>

        {/* Scroll Cue Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <a
            href="#a-propos"
            className="group flex flex-col items-center gap-1.5 text-encre-muted hover:text-cuivre transition-colors text-xs font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-vert-profond rounded p-1"
            aria-label="Faire défiler vers la section À propos"
          >
            <span>Découvrir la vision</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1 text-cuivre" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
