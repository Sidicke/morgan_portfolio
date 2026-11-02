"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioContent } from "@/content/portfolioData";

export const About: React.FC = () => {
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
          className="max-w-3xl mb-14 sm:mb-18 lg:mb-20"
        >
          <span className="text-xs font-semibold tracking-wider uppercase text-cuivre block mb-3.5">
            {portfolioContent.about.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem] font-display font-extrabold text-encre leading-[1.18] tracking-tight">
            {portfolioContent.about.heading}
          </h2>
        </motion.div>

        {/* Two-Column Editorial Composition with Generous Breathing Room */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
          {/* Left Column: Narrative (Intro + Description) - 6 cols */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            {/* Introduction: Strong Typographic Presence */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl sm:text-2xl lg:text-[1.55rem] xl:text-[1.65rem] text-encre font-display font-semibold leading-[1.4] sm:leading-[1.38] tracking-tight mb-6 sm:mb-8"
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

          {/* Right Column: 3 Numbered Engagements with Animated Dividers - 6 cols */}
          <div className="lg:col-span-6 flex flex-col pt-2 lg:pt-0">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xs uppercase tracking-widest font-semibold text-cuivre block mb-6"
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
                    className="py-6 sm:py-7 group cursor-default transition-colors"
                  >
                    {/* Number + Title with micro-interaction */}
                    <div className="flex items-baseline gap-3.5 sm:gap-4 mb-2">
                      <span className="font-display font-extrabold text-base sm:text-lg text-cuivre inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:text-vert-profond select-none">
                        {item.number} —
                      </span>
                      <h3 className="font-display font-bold text-lg sm:text-xl lg:text-[1.3rem] text-encre group-hover:text-vert-profond transition-colors duration-200">
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
      </div>
    </section>
  );
};
