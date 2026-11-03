"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrefersReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      style={{ scaleX, originX: 0 }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-vert-profond via-cuivre to-vert-profond z-50 pointer-events-none shadow-[0_0_8px_rgba(166,92,55,0.4)]"
      aria-hidden="true"
    />
  );
};
