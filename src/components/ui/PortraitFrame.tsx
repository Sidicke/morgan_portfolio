"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface PortraitFrameProps {
  className?: string;
}

export const PortraitFrame: React.FC<PortraitFrameProps> = ({ className = "" }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics for high-end tactile feel
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 150,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 150,
    damping: 25,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrefersReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX: prefersReducedMotion ? 0 : rotateX,
        rotateY: prefersReducedMotion ? 0 : rotateY,
      }}
      initial={{ opacity: 0, y: 24, scale: prefersReducedMotion ? 1 : 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full max-w-[520px] sm:max-w-[580px] lg:max-w-[640px] xl:max-w-[700px] mx-auto select-none cursor-pointer ${className}`}
    >
      {/* Architectural warm pedestal backdrop */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[85%] rounded-t-[18rem] rounded-b-[3.5rem] bg-gradient-to-b from-sable/90 via-ivoire-dark to-sable/50 -z-10 border border-sable-border/90 shadow-[0_25px_60px_-15px_rgba(25,39,42,0.08)]"
        aria-hidden="true"
      />

      {/* Rotating trade meridian circle with copper accent */}
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

      {/* Floating Experience Badges (Live Credibility Overlay) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -10 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute top-12 -left-4 sm:-left-6 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-sable-border shadow-lg hidden sm:flex items-center gap-2.5"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
        </span>
        <div className="flex flex-col">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-encre">
            Opérations Actives
          </span>
          <span className="text-[10px] text-encre-muted font-medium">
            Chine & France ➔ Bénin
          </span>
        </div>
      </motion.div>

      {/* Portrait Image Container */}
      <div className="relative aspect-[3/4] w-full flex items-end justify-center overflow-hidden">
        <Image
          src="/images/portrait-cutout.png"
          alt="Morgan Bocovo : Entrepreneur & Conseiller en Projets d'Importation"
          fill
          priority
          sizes="(max-width: 768px) 95vw, (max-width: 1280px) 55vw, 700px"
          className="object-contain object-bottom filter drop-shadow-[0_20px_40px_rgba(25,39,42,0.16)] transition-transform duration-500 ease-out"
        />

        {/* Soft bottom dissolution */}
        <div
          className="absolute inset-x-0 bottom-0 h-8 sm:h-10 bg-gradient-to-t from-ivoire to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
};
