"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { portfolioContent } from "@/content/portfolioData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      // Focus management: move focus to skip link or document top
      const topTarget = document.getElementById("main-content") || document.body;
      topTarget.focus();
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-sable-border bg-ivoire text-encre py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
        {/* Ligne 1: Identité & Navigation secondaire */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 lg:gap-12 pb-10 sm:pb-12 border-b border-sable-border">
          {/* À gauche: MORGAN. + Signature */}
          <div className="flex flex-col items-start gap-1.5 max-w-md">
            <h3 className="font-display font-bold text-[26px] sm:text-[28px] lg:text-[32px] tracking-tight text-encre leading-none">
              {portfolioContent.footer.name}
            </h3>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-encre-light font-sans font-normal leading-relaxed mt-1.5">
              {portfolioContent.footer.signature}
            </p>
          </div>

          {/* À droite: Navigation secondaire */}
          <nav
            aria-label="Navigation secondaire du pied de page"
            className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3"
          >
            {portfolioContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-[14px] sm:text-[15px] font-medium text-encre-light hover:text-encre transition-colors duration-[200ms] py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond rounded"
              >
                <span>{item.label}</span>
                {/* Copper underline progressing from left to right */}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-cuivre transition-all duration-[200ms] ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

        {/* Ligne 2: Copyright & Retour en haut */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-[13px] sm:text-[14px] text-encre-muted/90">
          {/* Copyright */}
          <div>
            © {currentYear} {portfolioContent.footer.copyrightOwner}. Tous droits réservés.
          </div>

          {/* Bouton Retour en haut */}
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blanc-chaud border border-sable-border/90 text-encre hover:text-cuivre hover:border-cuivre/50 hover:bg-ivoire-dark/30 transition-all duration-[200ms] ease-out shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond cursor-pointer"
            aria-label="Retour en haut de page"
          >
            <span className="font-medium text-[13px]">Retour en haut</span>
            <ArrowUp className="w-3.5 h-3.5 text-cuivre group-hover:-translate-y-0.5 transition-transform duration-[200ms] ease-out" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};
