"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Ship, ShieldCheck, Compass } from "lucide-react";
import { portfolioContent } from "@/content/portfolioData";

export const Expertises: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "sourcing":
        return <Search className="w-5 h-5 text-cuivre" />;
      case "payments":
        return <ShieldCheck className="w-5 h-5 text-cuivre" />;
      case "logistics":
        return <Ship className="w-5 h-5 text-cuivre" />;
      case "consulting":
        return <Compass className="w-5 h-5 text-cuivre" />;
      default:
        return <Search className="w-5 h-5 text-cuivre" />;
    }
  };

  const handleServiceSelect = (
    e: React.MouseEvent<HTMLAnchorElement>,
    serviceTitle: string
  ) => {
    e.preventDefault();
    const subject = `Demande d'accompagnement — ${serviceTitle}`;

    if (typeof window !== "undefined") {
      // 1. Dispatch custom event to prefill Contact form subject
      window.dispatchEvent(
        new CustomEvent("select-service", { detail: { subject } })
      );

      // 2. Smoothly scroll to Contact section without brutal jump
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="expertises"
      className="py-20 sm:py-24 lg:py-32 bg-ivoire border-b border-sable-border overflow-hidden"
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
            {portfolioContent.expertises.sectionBadge}
          </motion.span>

          {/* Title: 42-48px desktop, clamp(2rem, 7vw, 2.75rem) mobile */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2rem,7vw,2.75rem)] lg:text-[2.75rem] xl:text-[3rem] font-display font-extrabold text-encre leading-[1.16] tracking-tight mb-4"
          >
            {portfolioContent.expertises.heading}
          </motion.h2>

          {/* Paragraph: 16-17px desktop, 15-16px mobile, delay 100ms */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] sm:text-base lg:text-[17px] text-encre-light leading-relaxed font-sans max-w-2xl"
          >
            {portfolioContent.expertises.intro}
          </motion.p>
        </div>

        {/* Top Separator with horizontal draw animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="w-full h-[1px] bg-sable-border"
        />

        {/* Services List - Horizontal on Desktop/Tablet, Vertical Block on Mobile */}
        <div>
          {portfolioContent.expertises.items.map((item, idx) => (
            <div key={item.id}>
              <motion.a
                href="#contact"
                onClick={(e) => handleServiceSelect(e, item.title)}
                aria-label={`Demander un accompagnement en ${item.title}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group block py-6 sm:py-7 lg:py-8 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-2xl transition-all duration-[240ms] ease-out hover:bg-blanc-chaud/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond focus-visible:ring-offset-2 focus-visible:ring-offset-ivoire cursor-pointer"
              >
                {/* Desktop & Tablet Layout (>= 768px): Horizontal editorial row */}
                <div className="hidden md:grid md:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[72px]">
                  {/* 1. Number & Icon (Cols 1-3) */}
                  <div className="md:col-span-3 flex items-center gap-5 xl:gap-6">
                    <span className="font-display font-extrabold text-2xl lg:text-3xl text-cuivre transition-transform duration-[240ms] ease-out group-hover:translate-x-1 select-none">
                      {item.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-blanc-chaud border border-sable-border flex items-center justify-center shadow-2xs transition-all duration-[200ms] ease-out group-hover:border-cuivre/40 group-hover:scale-105 flex-shrink-0">
                      {getIcon(item.id)}
                    </div>
                  </div>

                  {/* 2. Title (Cols 4-7 on md, 4-7 on lg) — 23-26px */}
                  <div className="md:col-span-4 lg:col-span-4 pr-2">
                    <h3 className="font-display font-bold text-xl lg:text-[1.45rem] xl:text-[1.6rem] text-encre transition-colors duration-[220ms] group-hover:text-vert-profond relative inline-block">
                      <span>{item.title}</span>
                      {/* Copper line appears under the title */}
                      <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-cuivre transition-all duration-[260ms] ease-out group-hover:w-full" />
                    </h3>
                  </div>

                  {/* 3. Description (Cols 8-11 on md/lg) — 15.5-16.5px */}
                  <div className="md:col-span-4 lg:col-span-4">
                    <p className="text-[15.5px] sm:text-[16px] lg:text-[16.5px] text-encre/85 leading-[1.6] font-sans font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* 4. Interactive Arrow Button (Col 12) */}
                  <div className="md:col-span-1 flex justify-end">
                    <div className="w-11 h-11 rounded-full bg-blanc-chaud border border-sable-border flex items-center justify-center text-encre transition-all duration-[220ms] ease-out shadow-2xs group-hover:bg-vert-profond group-hover:border-vert-profond group-hover:text-blanc-chaud">
                      <ArrowUpRight className="w-4 h-4 text-cuivre transition-all duration-[220ms] ease-out group-hover:text-blanc-chaud group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
                    </div>
                  </div>
                </div>

                {/* Mobile Layout (< 768px): Vertical editorial block */}
                <div className="md:hidden flex flex-col space-y-3.5">
                  {/* Mobile Row: 01 + Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <span className="font-display font-extrabold text-2xl text-cuivre transition-transform duration-[240ms] ease-out group-hover:translate-x-1">
                        {item.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-blanc-chaud border border-sable-border flex items-center justify-center shadow-2xs">
                        {getIcon(item.id)}
                      </div>
                    </div>

                    {/* Touch Target Arrow (min 44x44px) */}
                    <div className="w-11 h-11 rounded-full bg-blanc-chaud border border-sable-border flex items-center justify-center text-encre group-hover:bg-vert-profond group-hover:border-vert-profond transition-colors shadow-2xs">
                      <ArrowUpRight className="w-4 h-4 text-cuivre group-hover:text-blanc-chaud transition-colors" />
                    </div>
                  </div>

                  {/* Title (20-22px) */}
                  <h3 className="font-display font-bold text-[1.3rem] text-encre group-hover:text-vert-profond transition-colors relative inline-block">
                    <span>{item.title}</span>
                    <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-cuivre transition-all duration-200 group-hover:w-full" />
                  </h3>

                  {/* Short Description (15-16px) */}
                  <p className="text-[15px] sm:text-base text-encre-light leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Mobile Action Link with Clear Label */}
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-vert-profond group-hover:text-cuivre transition-colors">
                      <span>Demander un accompagnement</span>
                      <span className="text-cuivre transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* Horizontal Divider between items */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08 + 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ originX: 0 }}
                className="w-full h-[1px] bg-sable-border"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
