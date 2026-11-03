"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { portfolioContent } from "@/content/portfolioData";

export const CaseStudies: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrefersReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Bonjour Morgan, je souhaite échanger avec vous concernant un projet d'importation."
  );
  const whatsappUrl = `https://wa.me/2290167174369?text=${whatsappMessage}`;

  return (
    <section
      id="realisations"
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
            {portfolioContent.caseStudies.sectionBadge}
          </motion.span>

          {/* Title: 44-50px desktop, clamp(2rem, 7vw, 2.75rem) mobile */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2rem,7vw,2.75rem)] lg:text-[2.75rem] xl:text-[3.1rem] font-display font-extrabold text-encre leading-[1.16] tracking-tight mb-4"
          >
            {portfolioContent.caseStudies.heading}
          </motion.h2>

          {/* Subtitle: 16-17px desktop, 15-16px mobile */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] sm:text-base lg:text-[17px] text-encre-light leading-relaxed font-sans max-w-2xl"
          >
            {portfolioContent.caseStudies.intro}
          </motion.p>
        </div>

        {/* 2-Column Layout (40% Left Visualization / 60% Right Case Study Content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start mb-14 sm:mb-16">
          {/* COLONNE GAUCHE (~40%): Visualisation Logistique CHINE → COTONOU */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full rounded-3xl bg-blanc-chaud border border-sable-border p-6 sm:p-8 shadow-2xs group hover:border-cuivre/40 transition-colors"
          >
            {/* Header de la Visualisation */}
            <div className="flex items-center justify-between pb-5 mb-5 border-b border-sable-border">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-cuivre">
                Approvisionnement international
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-ivoire border border-sable-border text-encre">
                Corridor Direct
              </span>
            </div>

            {/* SVG Corridor Canvas (Chine → Cotonou) */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center py-2 select-none">
              <svg
                viewBox="0 0 360 210"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
                aria-label="Schéma logistique Chine vers Cotonou"
              >
                {/* Background Dotted Neutral Corridor Arc */}
                <path
                  d="M 50 65 C 135 65, 180 155, 310 155"
                  stroke="#D8D2C4"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Animated Copper Corridor Path (1.4 - 1.8s duration, once) */}
                {!prefersReducedMotion ? (
                  <motion.path
                    d="M 50 65 C 135 65, 180 155, 310 155"
                    stroke="#A65C37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.6,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                ) : (
                  <path
                    d="M 50 65 C 135 65, 180 155, 310 155"
                    stroke="#A65C37"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}

                {/* Point de départ : CHINE (Rouge & Or) */}
                <g className="origin-center">
                  <circle
                    cx="50"
                    cy="65"
                    r="12"
                    fill="#DE2910"
                    fillOpacity="0.15"
                    stroke="#DE2910"
                    strokeWidth="1.5"
                  />
                  <circle cx="50" cy="65" r="5" fill="#DE2910" />
                  <text
                    x="50"
                    y="36"
                    textAnchor="middle"
                    className="font-display font-extrabold text-[13px] fill-red-800 tracking-wider"
                  >
                    CHINE
                  </text>
                  <text
                    x="50"
                    y="92"
                    textAnchor="middle"
                    className="font-sans text-[10px] fill-encre-muted font-semibold"
                  >
                    Usines vérifiées
                  </text>
                </g>

                {/* Point d'arrivée : COTONOU (Émeraude / Bénin) */}
                <g className="origin-center">
                  <motion.circle
                    cx="310"
                    cy="155"
                    r="12"
                    fill="#059669"
                    fillOpacity="0.15"
                    stroke="#059669"
                    strokeWidth="1.5"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  />
                  <motion.circle
                    cx="310"
                    cy="155"
                    r="5"
                    fill="#059669"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.5 }}
                  />
                  <text
                    x="310"
                    y="126"
                    textAnchor="middle"
                    className="font-display font-extrabold text-[13px] fill-emerald-900 tracking-wider"
                  >
                    COTONOU
                  </text>
                  <text
                    x="310"
                    y="182"
                    textAnchor="middle"
                    className="font-sans text-[10px] fill-encre-muted font-semibold"
                  >
                    Réception conforme
                  </text>
                </g>
              </svg>
            </div>

            {/* Légende & Garanties du trajet */}
            <div className="pt-4 mt-2 border-t border-sable-border grid grid-cols-2 gap-3 text-xs text-encre-light">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cuivre flex-shrink-0" />
                <span>Audit usines</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cuivre flex-shrink-0" />
                <span>Règlement protégé</span>
              </div>
            </div>
          </motion.div>

          {/* COLONNE DROITE (~60%): Contenu du Cas d'Étude */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-start"
          >
            {/* Titre du cas d'étude visible immédiatement */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-cuivre block mb-1.5">
                Mission 01 : Approvisionnement Wholesale
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-[1.65rem] text-encre leading-snug">
                Approvisionnement Chine ➔ Cotonou
              </h3>
            </div>

            {/* 1. Contexte */}
            <div className="pb-5 mb-5 border-b border-sable-border">
              <span className="text-xs uppercase tracking-wider font-semibold text-cuivre block mb-1.5">
                Contexte
              </span>
              <p className="text-[15.5px] sm:text-[16.5px] text-encre/90 leading-[1.65] font-sans">
                Un projet d&apos;approvisionnement nécessitant une vérification préalable du fournisseur et une coordination des opérations d&apos;importation.
              </p>
            </div>

            {/* 2. Intervention */}
            <div className="pb-5 mb-5 border-b border-sable-border">
              <span className="text-xs uppercase tracking-wider font-semibold text-cuivre block mb-1.5">
                Intervention
              </span>
              <p className="text-[15.5px] sm:text-[16.5px] text-encre/90 leading-[1.65] font-sans">
                Analyse du fournisseur, accompagnement des négociations et coordination des étapes d&apos;acheminement.
              </p>
            </div>

            {/* 3. Résultat Chiffré & Factuel */}
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-cuivre block mb-3">
                Résultats
              </span>

              {/* Grille de Chiffres Clés avec couleurs réelles */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-700 mb-0.5">
                    -35 %
                  </div>
                  <div className="text-xs sm:text-[13px] text-emerald-900 font-semibold">
                    Coûts d&apos;achat
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center">
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-blue-700 mb-0.5">
                    100 %
                  </div>
                  <div className="text-xs sm:text-[13px] text-blue-900 font-semibold">
                    Fonds sécurisés
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center">
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-amber-700 mb-0.5">
                    0
                  </div>
                  <div className="text-xs sm:text-[13px] text-amber-900 font-semibold">
                    Perte financière
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-[15px] text-encre-light leading-relaxed font-sans">
                Réception conforme de la marchandise à Cotonou, sécurisation intégrale des fonds et jusqu&apos;à 35 % d&apos;économies négociées sur les coûts d&apos;achat.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bloc CTA — Contact Commercial Simplifié */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-blanc-chaud border border-sable-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs"
        >
          <div className="max-w-xl">
            <h4 className="font-display font-bold text-xl sm:text-2xl text-encre mb-1.5">
              Un projet d&apos;importation en préparation ?
            </h4>
            <p className="text-sm sm:text-base text-encre-light leading-relaxed font-sans">
              Échangeons sur vos besoins et les étapes de votre approvisionnement.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-encre text-blanc-chaud hover:bg-vert-profond transition-all duration-[220ms] ease-out font-semibold text-sm tracking-wide shadow-md hover:shadow-lg flex-shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond min-h-[48px]"
          >
            <span>Discuter sur WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-cuivre transition-transform duration-[200ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
