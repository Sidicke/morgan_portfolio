"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PortraitFrameProps {
  className?: string;
}

export const PortraitFrame: React.FC<PortraitFrameProps> = ({ className = "" }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrefersReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: prefersReducedMotion ? 1 : 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full max-w-[520px] sm:max-w-[580px] lg:max-w-[640px] xl:max-w-[700px] mx-auto select-none ${className}`}
    >
      {/* Architectural warm pedestal backdrop - soft warm ivory/sable arch */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[85%] rounded-t-[18rem] rounded-b-[3.5rem] bg-gradient-to-b from-sable/90 via-ivoire-dark to-sable/50 -z-10 border border-sable-border/90 shadow-[0_25px_60px_-15px_rgba(25,39,42,0.08)]"
        aria-hidden="true"
      />

      {/* Subtle fine copper trade meridian curve - ultra slow imperceptible rotation (80s) */}
      {!prefersReducedMotion ? (
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-8 -right-8 w-60 h-60 pointer-events-none opacity-40 text-cuivre -z-10 origin-center"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="120" cy="120" r="105" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 6" />
          <path d="M 20,120 Q 120,20 220,120" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="220" cy="120" r="4" fill="#A65C37" />
          <circle cx="20" cy="120" r="3" fill="#173E3F" />
        </motion.svg>
      ) : (
        <svg
          className="absolute -top-8 -right-8 w-60 h-60 pointer-events-none opacity-40 text-cuivre -z-10"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="120" cy="120" r="105" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 6" />
          <path d="M 20,120 Q 120,20 220,120" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="220" cy="120" r="4" fill="#A65C37" />
          <circle cx="20" cy="120" r="3" fill="#173E3F" />
        </svg>
      )}

      {/* Portrait Image Container with reduced, subtle bottom dissolution */}
      <div className="relative aspect-[3/4] w-full flex items-end justify-center overflow-hidden">
        <Image
          src="/images/portrait-cutout.png"
          alt="Morgan Bocovo — Entrepreneur & Conseiller en Projets d'Importation"
          fill
          priority
          sizes="(max-width: 768px) 95vw, (max-width: 1280px) 55vw, 700px"
          className="object-contain object-bottom filter drop-shadow-[0_20px_40px_rgba(25,39,42,0.16)] transition-transform duration-700 ease-out hover:scale-[1.01]"
        />

        {/* Softened, reduced bottom dissolution (h-8 sm:h-10) to preserve natural silhouette */}
        <div
          className="absolute inset-x-0 bottom-0 h-8 sm:h-10 bg-gradient-to-t from-ivoire to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
};
