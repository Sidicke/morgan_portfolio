"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioContent } from "@/content/portfolioData";

export const CaseStudies: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeWaypoint, setActiveWaypoint] = useState<"chine" | "corridor" | "cotonou">("corridor");

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
      className="py-18 sm:py-22 lg:py-28 bg-ivoire border-b border-sable-border overflow-hidden"
    >
      <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
        {/* Section Header */}
        <div className="max-w-[800px] mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cuivre/10 border border-cuivre/20 text-cuivre text-xs font-bold uppercase tracking-wider mb-3">
            <span>{portfolioContent.caseStudies.sectionBadge}</span>
          </span>

          <h2 className="text-[clamp(2rem,7vw,2.75rem)] lg:text-[2.75rem] font-display font-extrabold text-encre leading-[1.16] tracking-tight mb-3.5">
            {portfolioContent.caseStudies.heading}
          </h2>

          <p className="text-[15px] sm:text-base lg:text-[17px] text-encre-light leading-relaxed font-sans max-w-2xl">
            {portfolioContent.caseStudies.intro}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start mb-12 sm:mb-14">
          {/* COLONNE GAUCHE: Visualisation Logistique Interactive CHINE -> COTONOU */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full rounded-3xl bg-white border border-sable-border p-6 sm:p-7 shadow-xs group hover:border-cuivre/40 transition-colors"
          >
            {/* Header de la Visualisation */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-sable-border">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-encre">
                  Corridor Actif
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                Chine ➔ Cotonou
              </span>
            </div>

            {/* SVG Interactive Corridor Canvas */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center py-2 select-none">
              <svg
                viewBox="0 0 360 210"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
                aria-label="Schéma logistique interactif Chine vers Cotonou"
              >
                {/* Background Dotted Neutral Corridor Arc */}
                <path
                  d="M 50 65 C 135 65, 180 155, 310 155"
                  stroke="#D8D2C4"
                  strokeWidth="2"
                  strokeDasharray="4 5"
                />

                {/* Animated Copper/Forest Corridor Path */}
                {!prefersReducedMotion ? (
                  <motion.path
                    d="M 50 65 C 135 65, 180 155, 310 155"
                    stroke="#A65C37"
                    strokeWidth="2.5"
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
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                )}

                {/* Live Cargo Pulse Beacon moving along the trade route */}
                {!prefersReducedMotion && (
                  <g>
                    <circle r="4.5" fill="#A65C37">
                      <animateMotion
                        path="M 50 65 C 135 65, 180 155, 310 155"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle r="9" fill="#A65C37" opacity="0.25">
                      <animateMotion
                        path="M 50 65 C 135 65, 180 155, 310 155"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                )}

                {/* Point de départ : CHINE */}
                <g
                  className="cursor-pointer"
                  onClick={() => setActiveWaypoint("chine")}
                >
                  <circle
                    cx="50"
                    cy="65"
                    r="14"
                    fill="#DE2910"
                    fillOpacity="0.15"
                    stroke="#DE2910"
                    strokeWidth="1.5"
                  />
                  <circle cx="50" cy="65" r="5.5" fill="#DE2910" />
                  <text
                    x="50"
                    y="36"
                    textAnchor="middle"
                    className="font-display font-extrabold text-[12px] fill-red-800 tracking-wider"
                  >
                    CHINE
                  </text>
                  <text
                    x="50"
                    y="92"
                    textAnchor="middle"
                    className="font-sans text-[10px] fill-encre-muted font-semibold"
                  >
                    Yiwu / Shenzhen
                  </text>
                </g>

                {/* Point intermédiaire : ROUTE MARITIME & AÉRIENNE */}
                <g
                  className="cursor-pointer"
                  onClick={() => setActiveWaypoint("corridor")}
                >
                  <circle
                    cx="180"
                    cy="110"
                    r="11"
                    fill="#173E3F"
                    fillOpacity="0.12"
                    stroke="#173E3F"
                    strokeWidth="1"
                  />
                  <circle cx="180" cy="110" r="3.5" fill="#173E3F" />
                  <text
                    x="180"
                    y="95"
                    textAnchor="middle"
                    className="font-sans text-[9px] fill-encre-muted font-bold tracking-wider"
                  >
                    TRANSIT
                  </text>
                </g>

                {/* Point d'arrivée : COTONOU */}
                <g
                  className="cursor-pointer"
                  onClick={() => setActiveWaypoint("cotonou")}
                >
                  <motion.circle
                    cx="310"
                    cy="155"
                    r="14"
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
                    r="5.5"
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
                    className="font-display font-extrabold text-[12px] fill-emerald-900 tracking-wider"
                  >
                    COTONOU
                  </text>
                  <text
                    x="310"
                    y="182"
                    textAnchor="middle"
                    className="font-sans text-[10px] fill-encre-muted font-semibold"
                  >
                    Port / Aéroport
                  </text>
                </g>
              </svg>
            </div>

            {/* Interactive Waypoint Detail Banner */}
            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-sable-border/80 text-xs text-encre">
              {activeWaypoint === "chine" && (
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-red-100 text-red-700 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <p>
                    <strong className="text-red-900">Origine Usines :</strong> Audit des fournisseurs, vérification sur 1688/Alibaba et négociation directe départ usine.
                  </p>
                </div>
              )}
              {activeWaypoint === "corridor" && (
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <p>
                    <strong className="text-amber-900">Sécurisation Transit :</strong> Expédition maritime & aérienne avec suivi départ usine et protection intégrale des paiements.
                  </p>
                </div>
              )}
              {activeWaypoint === "cotonou" && (
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <p>
                    <strong className="text-emerald-900">Arrivée Cotonou :</strong> Dédouanement conforme, réception physique des colis et remise sécurisée au client.
                  </p>
                </div>
              )}
            </div>

            {/* Micro-nav waypoints */}
            <div className="flex items-center justify-center gap-2 mt-3 text-[11px] font-semibold text-encre-muted">
              <span>Cliquer sur les points :</span>
              <button
                type="button"
                onClick={() => setActiveWaypoint("chine")}
                className={`px-2 py-0.5 rounded-md ${activeWaypoint === "chine" ? "bg-red-100 text-red-900 font-bold" : "hover:text-encre"}`}
              >
                Chine
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setActiveWaypoint("corridor")}
                className={`px-2 py-0.5 rounded-md ${activeWaypoint === "corridor" ? "bg-amber-100 text-amber-900 font-bold" : "hover:text-encre"}`}
              >
                Transit
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setActiveWaypoint("cotonou")}
                className={`px-2 py-0.5 rounded-md ${activeWaypoint === "cotonou" ? "bg-emerald-100 text-emerald-900 font-bold" : "hover:text-encre"}`}
              >
                Cotonou
              </button>
            </div>
          </motion.div>

          {/* COLONNE DROITE: Contenu du Cas d'Étude */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-start"
          >
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest font-bold text-cuivre block mb-1.5">
                Mission 01 : Approvisionnement Wholesale
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-encre leading-snug">
                Approvisionnement Chine ➔ Cotonou
              </h3>
            </div>

            {/* 1. Contexte */}
            <div className="pb-4 mb-4 border-b border-sable-border">
              <span className="text-xs uppercase tracking-wider font-bold text-cuivre block mb-1">
                Contexte
              </span>
              <p className="text-[15px] sm:text-[15.5px] text-encre/90 leading-relaxed font-sans">
                Un projet d&apos;approvisionnement nécessitant une vérification préalable du fournisseur et une coordination des opérations d&apos;importation.
              </p>
            </div>

            {/* 2. Intervention */}
            <div className="pb-4 mb-4 border-b border-sable-border">
              <span className="text-xs uppercase tracking-wider font-bold text-cuivre block mb-1">
                Intervention
              </span>
              <p className="text-[15px] sm:text-[15.5px] text-encre/90 leading-relaxed font-sans">
                Analyse de conformité du fournisseur, accompagnement des négociations directes et coordination des étapes d&apos;acheminement.
              </p>
            </div>

            {/* 3. Résultat Chiffré & Factuel */}
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-cuivre block mb-3">
                Résultats chiffrés
              </span>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center hover:scale-105 transition-transform duration-200">
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-700 mb-0.5">
                    -35 %
                  </div>
                  <div className="text-xs sm:text-[13px] text-emerald-900 font-semibold">
                    Coûts d&apos;achat
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center hover:scale-105 transition-transform duration-200">
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-blue-700 mb-0.5">
                    100 %
                  </div>
                  <div className="text-xs sm:text-[13px] text-blue-900 font-semibold">
                    Fonds sécurisés
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center hover:scale-105 transition-transform duration-200">
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-amber-700 mb-0.5">
                    0
                  </div>
                  <div className="text-xs sm:text-[13px] text-amber-900 font-semibold">
                    Perte financière
                  </div>
                </div>
              </div>

              <p className="text-sm text-encre-light leading-relaxed font-sans">
                Réception conforme de la marchandise à Cotonou, sécurisation intégrale des fonds et jusqu&apos;à 35 % d&apos;économies négociées sur les coûts d&apos;achat.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bloc CTA WhatsApp avec tactile bounce */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-sable-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
          <div className="max-w-xl">
            <h4 className="font-display font-bold text-xl sm:text-2xl text-encre mb-1">
              Un projet d&apos;approvisionnement en préparation ?
            </h4>
            <p className="text-sm text-encre-light leading-relaxed font-sans">
              Échangeons sur vos volumes prévisionnels et sécurisons votre chaîne logistique.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-vert-profond text-white hover:bg-vert-profond-hover active:scale-[0.98] transition-all font-semibold text-sm tracking-wide shadow-md hover:shadow-lg flex-shrink-0 group"
          >
            <span>Discuter sur WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
