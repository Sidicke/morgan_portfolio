"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioContent } from "@/content/portfolioData";

export const About: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrefersReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  return (
    <section
      id="a-propos"
      className="py-20 sm:py-28 lg:py-36 bg-blanc-chaud border-b border-sable-border overflow-hidden"
    >
      <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-xs font-semibold tracking-wider uppercase text-cuivre block mb-3.5">
            {portfolioContent.about.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem] font-display font-extrabold text-encre leading-[1.18] tracking-tight">
            {portfolioContent.about.heading}
          </h2>
        </motion.div>

        {/* Editorial Composition: 55% Text & Principles / 45% Field Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          {/* Left Column (55-58% on Desktop): Presentation Narrative + Action Principles */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* 1. Presentation Narrative */}
            <div className="mb-8 lg:mb-12">
              {/* Introduction: Strong Typographic Presence */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl sm:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] text-encre font-display font-semibold leading-[1.4] sm:leading-[1.38] tracking-tight mb-5 sm:mb-7"
              >
                {portfolioContent.about.leadParagraph}
              </motion.p>

              {/* Description: Light, Human & Direct */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="text-[16px] sm:text-[17px] text-encre/90 leading-[1.65] font-sans font-normal"
              >
                {portfolioContent.about.bodyParagraph}
              </motion.p>
            </div>

            {/* 2. Mobile Photograph Insertion (Order 3 on Mobile: Titre -> Présentation -> Photo -> Principes) */}
            <div className="block lg:hidden mb-10">
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="relative aspect-[3/4] max-h-[460px] w-full rounded-2xl overflow-hidden bg-ivoire border border-sable-border/90 shadow-xs">
                  <Image
                    src="/images/morgan-about.jpeg"
                    alt="Morgan Bocovo — Engagement terrain et coordination logistique"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  />
                </div>
                <p className="text-xs text-encre-muted font-sans font-normal mt-2.5 px-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cuivre" />
                  <span>Morgan Bocovo · Engagement terrain & rigueur opérationnelle</span>
                </p>
              </motion.div>
            </div>

            {/* 3. Action Principles (Order 4 on Mobile, integrated seamlessly on Desktop) */}
            <div className="pt-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-xs uppercase tracking-widest font-semibold text-cuivre block mb-5"
              >
                Principes d&apos;action
              </motion.span>

              {/* Top Border Animated Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
                className="w-full h-[1px] bg-sable-border"
              />

              {/* Engagements List */}
              <div>
                {portfolioContent.about.commitments.map((item, idx) => (
                  <div key={item.number}>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.55,
                        delay: 0.12 * idx + 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="py-5 sm:py-6 group cursor-default transition-colors"
                    >
                      {/* Number + Title with micro-interaction */}
                      <div className="flex items-baseline gap-3.5 sm:gap-4 mb-2">
                        <span className="font-display font-extrabold text-base sm:text-lg text-cuivre inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:text-vert-profond select-none">
                          {item.number} —
                        </span>
                        <h3 className="font-display font-bold text-lg sm:text-xl lg:text-[1.25rem] text-encre group-hover:text-vert-profond transition-colors duration-200">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description: 15-16.5px with comfortable line-height and contrast */}
                      <p className="text-[15px] sm:text-[16px] lg:text-[16.5px] text-encre-light leading-[1.6] font-sans pl-10 sm:pl-11">
                        {item.description}
                      </p>
                    </motion.div>

                    {/* Horizontal Divider between items & bottom */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.65,
                        delay: 0.1 * idx + 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{ originX: 0 }}
                      className="w-full h-[1px] bg-sable-border"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (42-45% on Desktop): Desktop Field Photograph Frame */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 pt-1">
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-ivoire border border-sable-border/90 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <Image
                  src="/images/morgan-about.jpeg"
                  alt="Morgan Bocovo — Engagement terrain et coordination opérationnelle"
                  fill
                  priority={false}
                  sizes="(max-width: 1280px) 42vw, 540px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                />
              </div>

              {/* Discrete elegant caption */}
              <p className="text-xs text-encre-muted font-sans font-normal mt-3 px-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cuivre" />
                <span>Morgan Bocovo · Engagement terrain & rigueur opérationnelle</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
