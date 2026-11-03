"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  Ship,
  ShieldCheck,
  Compass,
  GraduationCap,
} from "lucide-react";
import { portfolioContent, ExpertiseItem } from "@/content/portfolioData";

export const Expertises: React.FC = () => {
  const getIcon = (item: ExpertiseItem) => {
    switch (item.id) {
      case "coaching":
        return <GraduationCap className="w-5 h-5 text-emerald-700" />;
      case "sourcing":
        return <Search className="w-5 h-5 text-amber-700" />;
      case "payments":
        return <ShieldCheck className="w-5 h-5 text-blue-700" />;
      case "logistics":
        return <Ship className="w-5 h-5 text-cyan-700" />;
      case "consulting":
        return <Compass className="w-5 h-5 text-purple-700" />;
      default:
        return <Search className="w-5 h-5 text-cuivre" />;
    }
  };

  const handleContactSelect = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: ExpertiseItem
  ) => {
    e.preventDefault();
    const subject = `Demande d'accompagnement : ${item.title}`;

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-service", { detail: { subject } })
      );
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="expertises"
      className="py-18 sm:py-22 lg:py-28 bg-[#FAF8F4] border-b border-sable-border overflow-hidden relative scroll-mt-20"
    >
      {/* Subtle warm ambient lights */}
      <div
        className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-cuivre/6 rounded-full blur-[140px] pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-vert-profond/5 rounded-full blur-[130px] pointer-events-none -z-0"
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
            <span>{portfolioContent.expertises.sectionBadge}</span>
          </span>

          <h2 className="text-[clamp(2rem,7vw,2.75rem)] lg:text-[2.75rem] font-display font-extrabold text-encre leading-[1.16] tracking-tight mb-3.5">
            {portfolioContent.expertises.heading}
          </h2>

          <p className="text-[15px] sm:text-base lg:text-[17px] text-encre-light leading-relaxed font-sans max-w-2xl">
            {portfolioContent.expertises.intro}
          </p>
        </motion.div>

        {/* Top Separator */}
        <div className="w-full h-[1px] bg-sable-border mb-2" />

        {/* Services List - Clean, normal, with purposeful color accents & staggered scroll reveal */}
        <div>
          {portfolioContent.expertises.items.map((item, index) => {
            const isCoaching = item.id === "coaching";

            const rowContent = (
              <>
                {/* Desktop & Tablet Layout (>= 768px): Horizontal editorial row */}
                <div className="hidden md:grid md:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[76px]">
                  {/* 1. Number & Colored Icon (Cols 1-3) */}
                  <div className="md:col-span-3 flex items-center gap-5 xl:gap-6">
                    <span className="font-display font-extrabold text-2xl lg:text-3xl text-encre/40 transition-colors duration-[200ms] group-hover:text-cuivre select-none">
                      {item.number}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-2xs transition-all duration-[200ms] ease-out group-hover:scale-105 flex-shrink-0 ${item.accentBg}`}>
                      {getIcon(item)}
                    </div>
                  </div>

                  {/* 2. Title & Colored Badge (Cols 4-7) */}
                  <div className="md:col-span-4 lg:col-span-4 pr-2">
                    <div className="flex flex-col items-start gap-1.5">
                      <h3 className="font-display font-bold text-xl lg:text-[1.4rem] xl:text-[1.5rem] text-encre transition-colors duration-[220ms] group-hover:text-vert-profond relative inline-block">
                        <span>{item.title}</span>
                        <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-cuivre transition-all duration-[260ms] ease-out group-hover:w-full" />
                      </h3>

                      {item.badge && (
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${item.accentBg}`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 3. Description (Cols 8-11) */}
                  <div className="md:col-span-4 lg:col-span-4">
                    <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] text-encre/85 leading-[1.6] font-sans font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* 4. Interactive Arrow Button (Col 12) */}
                  <div className="md:col-span-1 flex justify-end">
                    <div className="w-11 h-11 rounded-full bg-white border border-sable-border flex items-center justify-center text-encre transition-all duration-[220ms] ease-out shadow-2xs group-hover:bg-vert-profond group-hover:border-vert-profond group-hover:text-white">
                      <ArrowUpRight className="w-4 h-4 text-cuivre transition-all duration-[220ms] ease-out group-hover:text-white group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                    </div>
                  </div>
                </div>

                {/* Mobile Layout (< 768px): Vertical block */}
                <div className="md:hidden flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-display font-extrabold text-2xl text-encre/40">
                        {item.number}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-2xs ${item.accentBg}`}>
                        {getIcon(item)}
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-white border border-sable-border flex items-center justify-center text-encre group-hover:bg-vert-profond group-hover:border-vert-profond transition-colors shadow-2xs">
                      <ArrowUpRight className="w-4 h-4 text-cuivre group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-[1.25rem] text-encre group-hover:text-vert-profond transition-colors">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10.5px] font-bold border mt-1 ${item.accentBg}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-[14.5px] text-encre-light leading-relaxed font-sans">
                    {item.description}
                  </p>

                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-vert-profond group-hover:text-cuivre transition-colors">
                      <span>{isCoaching ? "Voir les 2 programmes" : "Demander un accompagnement"}</span>
                      <span className="text-cuivre">→</span>
                    </span>
                  </div>
                </div>
              </>
            );

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {isCoaching ? (
                  <Link
                    href="/coaching"
                    aria-label="Découvrir la page de présentation des programmes de coaching"
                    className="group block py-6 sm:py-7 lg:py-8 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-2xl transition-all duration-[240ms] ease-out hover:bg-white hover:shadow-sm active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond focus-visible:ring-offset-2 focus-visible:ring-offset-ivoire cursor-pointer"
                  >
                    {rowContent}
                  </Link>
                ) : (
                  <a
                    href="#contact"
                    onClick={(e) => handleContactSelect(e, item)}
                    aria-label={`Demander un accompagnement en ${item.title}`}
                    className="group block py-6 sm:py-7 lg:py-8 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-2xl transition-all duration-[240ms] ease-out hover:bg-white hover:shadow-sm active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond focus-visible:ring-offset-2 focus-visible:ring-offset-ivoire cursor-pointer"
                  >
                    {rowContent}
                  </a>
                )}

                {/* Divider between items */}
                <div className="w-full h-[1px] bg-sable-border/80" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
