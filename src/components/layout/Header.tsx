"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioContent } from "@/content/portfolioData";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const scrollYRef = useRef(0);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      setPrefersReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Don't update scroll state if menu is locked
      if (document.body.style.position === "fixed") return;
      setIsScrolled(window.scrollY > 20);

      const sections = ["expertises", "parcours", "realisations", "a-propos", "contact"];
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

  // SCROLL LOCK — Strict Body Position Locking with exact position restoration
  useEffect(() => {
    if (!mounted) return;

    if (mobileMenuOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      // Focus close button on open
      const focusTimer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 60);

      return () => clearTimeout(focusTimer);
    } else {
      const scrollY = scrollYRef.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY !== 0) {
        window.scrollTo(0, scrollY);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, mounted]);

  // FOCUS TRAP & KEYBOARD NAVIGATION (ESCAPE & TAB)
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileMenuOpen(false);
        triggerButtonRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    triggerButtonRef.current?.focus();

    // Give time for scroll lock to release, then smoothly scroll
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      }
    }, 60);
  };

  return (
    <>
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
              ref={triggerButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-encre hover:text-cuivre focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-dialog"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer via React Portal directly to document.body */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                ref={menuRef}
                id="mobile-navigation-dialog"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation principale mobile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="fixed inset-0 z-[100] md:hidden flex flex-col justify-between overflow-y-auto bg-[#F6F4EF]/95 supports-[backdrop-filter]:bg-[#F6F4EF]/90 backdrop-blur-2xl backdrop-saturate-[180%] pt-[calc(1.25rem+env(safe-area-inset-top,0px))] pb-[calc(1.75rem+env(safe-area-inset-bottom,0px))] px-6 sm:px-8 border-b border-sable-border/80"
              >
                {/* Ambient specular glowing glass reflections (behind all text, zero interference) */}
                <div
                  className="absolute top-1/4 -right-16 w-80 h-80 rounded-full bg-cuivre/10 blur-[90px] pointer-events-none -z-10"
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-1/4 -left-16 w-80 h-80 rounded-full bg-vert-profond/8 blur-[100px] pointer-events-none -z-10"
                  aria-hidden="true"
                />

                {/* Top Bar inside modal */}
                <div className="flex items-center justify-between pb-5 border-b border-sable-border/70 flex-shrink-0">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-display font-extrabold text-2xl tracking-tight text-encre">
                      {portfolioContent.meta.publicName}
                    </span>
                    <span className="inline-block w-2 h-2 rounded-full bg-cuivre animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest text-encre-muted font-medium ml-1">
                      {portfolioContent.meta.corridor}
                    </span>
                  </div>

                  {/* Close button with high-contrast, smooth tap target */}
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      triggerButtonRef.current?.focus();
                    }}
                    className="w-11 h-11 rounded-full bg-blanc-chaud/90 border border-sable-border/90 flex items-center justify-center text-encre hover:text-cuivre hover:border-cuivre/50 transition-all duration-200 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond cursor-pointer"
                    aria-label="Fermer le menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links — Staggered clean animation */}
                <nav
                  className="flex flex-col py-6 my-auto space-y-1"
                  aria-label="Liens de navigation mobile"
                >
                  {portfolioContent.navigation.map((item, idx) => {
                    const sectionId = item.href.replace("#", "");
                    const isActive = activeSection === sectionId;

                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: prefersReducedMotion ? 0 : 0.05 * idx + 0.08,
                          duration: prefersReducedMotion ? 0.01 : 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`group py-3.5 px-4 -mx-4 rounded-2xl flex items-center justify-between transition-colors ${
                          isActive
                            ? "bg-blanc-chaud/70 text-cuivre font-semibold"
                            : "hover:bg-blanc-chaud/50 text-encre"
                        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond`}
                      >
                        <span className="text-[1.35rem] sm:text-[1.5rem] font-display font-bold tracking-tight group-hover:text-cuivre transition-colors">
                          {item.label}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-blanc-chaud/80 border border-sable-border/70 flex items-center justify-center text-encre-light group-hover:bg-vert-profond group-hover:text-blanc-chaud group-hover:border-vert-profond transition-all duration-200">
                          <ArrowUpRight className="w-4 h-4 text-cuivre group-hover:text-blanc-chaud transition-colors" />
                        </div>
                      </motion.a>
                    );
                  })}
                </nav>

                {/* Bottom CTA block */}
                <div className="pt-5 border-t border-sable-border/70 flex-shrink-0 space-y-2.5">
                  <a
                    href="https://wa.me/2290167174369?text=Bonjour%20Morgan%20Bocovo,%20je%20souhaite%20échanger%20sur%20un%20projet%20d%27importation."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      triggerButtonRef.current?.focus();
                    }}
                    className="w-full min-h-[50px] flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-encre text-blanc-chaud hover:bg-vert-profond font-sans font-semibold text-sm tracking-wide shadow-md transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vert-profond"
                  >
                    <span>Échanger sur WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 text-cuivre transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <p className="text-center text-xs text-encre-muted">
                    Chine & France ➔ Bénin · Réponse rapide
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};
