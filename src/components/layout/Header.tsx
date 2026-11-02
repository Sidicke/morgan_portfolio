"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioContent } from "@/content/portfolioData";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ["a-propos", "expertises", "parcours", "realisations", "contact"];
      const scrollPosition = window.scrollY + 200;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-ivoire/90 backdrop-blur-md border-b border-sable-border py-4 shadow-xs"
          : "bg-transparent py-6 sm:py-8"
      }`}
    >
      <div className="mx-auto w-full max-w-container px-6 sm:px-10 lg:px-14 flex items-center justify-between">
        {/* Name Signature */}
        <Link
          href="/"
          className="flex items-baseline gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond rounded-md p-1"
          aria-label="Accueil Morgan Bocovo"
        >
          <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-encre group-hover:text-cuivre transition-colors">
            {portfolioContent.meta.publicName}
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-cuivre animate-pulse" />
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-encre-muted font-medium ml-1">
            {portfolioContent.meta.corridor}
          </span>
        </Link>

        {/* Minimal Editorial Navigation */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9"
          aria-label="Navigation principale"
        >
          {portfolioContent.navigation.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-[14.5px] lg:text-[15px] font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond rounded group ${
                  isActive ? "text-encre font-semibold" : "text-encre-light hover:text-encre"
                }`}
              >
                <span>{item.label}</span>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-cuivre transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-encre text-blanc-chaud hover:bg-vert-profond transition-colors duration-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond group"
          >
            <span>Prendre contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cuivre transition-transform duration-fast group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-encre hover:text-cuivre focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 top-[76px] bg-ivoire/98 backdrop-blur-xl border-b border-sable-border md:hidden z-40 flex flex-col p-6"
          >
            <nav className="flex flex-col gap-3 my-auto" aria-label="Navigation mobile">
              {portfolioContent.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3.5 text-xl font-display font-semibold text-encre hover:text-cuivre border-b border-sable-border flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-cuivre" />
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-sable-border">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-vert-profond text-blanc-chaud font-sans font-semibold text-sm uppercase tracking-wider"
              >
                <span>Entrer en contact</span>
                <ArrowUpRight className="w-4 h-4 text-cuivre" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
