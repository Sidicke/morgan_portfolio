"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const AmbientSpotlight: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      setIsPointerDevice(hasFinePointer);

      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };

      if (hasFinePointer) {
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
      }

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [mouseX, mouseY]);

  if (!mounted || !isPointerDevice) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="fixed top-0 left-0 w-[420px] h-[420px] rounded-full bg-radial from-cuivre/4 via-vert-profond/2 to-transparent pointer-events-none -z-0 blur-2xl opacity-70 mix-blend-multiply"
      aria-hidden="true"
    />
  );
};
