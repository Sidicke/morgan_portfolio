"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  ZoomIn,
  X,
  ShieldCheck,
  Compass,
  ArrowRight,
  Sparkles,
  Building2,
  Award,
} from "lucide-react";
import { portfolioContent } from "@/content/portfolioData";

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.69-.71 1.69s.73 1.96.83 2.1c.1.13 1.41 2.16 3.43 3.03.48.21.86.33 1.15.43.48.15.93.13 1.28.08.39-.06 1.2-.49 1.37-.96.17-.48.17-.88.12-.96-.05-.08-.19-.13-.4-.23s-1.2-.59-1.39-.66c-.19-.06-.32-.1-.46.1-.13.19-.53.66-.65.79-.12.13-.24.15-.45.05s-.89-.33-1.69-1.05c-.62-.56-1.05-1.25-1.17-1.46-.13-.21-.01-.33.09-.43.09-.09.21-.24.32-.36.1-.13.14-.21.21-.36.07-.15.03-.28-.02-.38-.05-.1-.46-1.1-.63-1.51-.17-.4-.34-.35-.46-.35" />
  </svg>
);

export default function CoachingPage() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const coaching = portfolioContent.coaching;
  const formulas = coaching.formulas;

  const getPlatformStyle = (name: string) => {
    switch (name) {
      case "Alibaba":
        return "bg-amber-50 text-amber-900 border-amber-300";
      case "Taobao":
        return "bg-orange-50 text-orange-900 border-orange-300";
      case "Pinduoduo":
        return "bg-red-50 text-red-900 border-red-300";
      case "JD.ID":
        return "bg-rose-50 text-rose-900 border-rose-300";
      case "Xianyu":
        return "bg-yellow-50 text-yellow-950 border-yellow-300";
      default:
        return "bg-emerald-50 text-emerald-900 border-emerald-300";
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-encre flex flex-col selection:bg-cuivre/20 selection:text-cuivre">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-sable-border">
        <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14 py-4 flex items-center justify-between">
          <Link
            href="/#expertises"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-encre hover:text-cuivre transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Retour à l&apos;accueil</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-cuivre" />
            <span className="text-xs font-bold uppercase tracking-wider text-encre-light">
              Morgan Bocovo · Coaching & Accompagnement
            </span>
          </div>

          <a
            href="https://wa.me/2290167174369?text=Bonjour%20Morgan%20Bocovo,%20je%20souhaite%20des%20renseignements%20sur%20vos%20programmes%20de%20coaching."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-vert-profond text-white text-xs sm:text-sm font-semibold hover:bg-vert-profond-hover transition-colors shadow-2xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Contact direct</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F2ECE1] via-[#FAF8F5] to-[#FAF8F5] border-b border-sable-border overflow-hidden">
          <div
            className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cuivre/8 rounded-full blur-[160px] pointer-events-none -z-0"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-vert-profond/6 rounded-full blur-[140px] pointer-events-none -z-0"
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14 relative z-10 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-vert-profond/10 border border-vert-profond/20 text-vert-profond text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-cuivre" />
              <span>{coaching.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-encre tracking-tight leading-[1.12] mb-6"
            >
              {coaching.heading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-encre-light font-sans leading-relaxed max-w-3xl mx-auto"
            >
              {coaching.intro}
            </motion.p>
          </div>
        </section>

        {/* 2 Formulas Showcase Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
              {formulas.map((formula, idx) => {
                const isF2 = formula.id === "formule-2";
                const whatsappUrl = `https://wa.me/2290167174369?text=${encodeURIComponent(
                  formula.whatsappMessage
                )}`;

                return (
                  <motion.div
                    key={formula.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`relative rounded-3xl p-6 sm:p-9 lg:p-10 flex flex-col justify-between transition-all duration-300 ${
                      isF2
                        ? "bg-white border-2 border-cuivre/70 shadow-xl ring-1 ring-cuivre/20"
                        : "bg-white border border-sable-border shadow-sm hover:border-vert-profond/40"
                    }`}
                  >
                    {/* Recommandé Tag for F2 */}
                    {isF2 && (
                      <div className="absolute -top-3.5 right-8 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-cuivre text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Programme Recommandé</span>
                      </div>
                    )}

                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span
                          className={`text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-xl border ${
                            isF2
                              ? "bg-cuivre/10 text-cuivre border-cuivre/25"
                              : "bg-vert-profond/10 text-vert-profond border-vert-profond/20"
                          }`}
                        >
                          {formula.badge}
                        </span>
                        <span className="font-display font-extrabold text-3xl text-encre/30">
                          {formula.number}
                        </span>
                      </div>

                      {/* Formula Title & Tagline */}
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-encre mb-2 leading-tight">
                        {formula.name}
                      </h2>
                      <p className="text-sm sm:text-base font-semibold text-cuivre mb-6">
                        {formula.tagline}
                      </p>

                      {/* Visual Flyer Banner with Zoom Lightbox */}
                      <div className="mb-7">
                        <div
                          onClick={() => setZoomedImage(formula.image)}
                          className="group relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-sable-border cursor-pointer bg-sable/30 shadow-2xs hover:shadow-lg transition-all"
                        >
                          <Image
                            src={formula.image}
                            alt={`Affiche de présentation officielle ${formula.name}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 600px"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-encre/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-semibold">
                            <ZoomIn className="w-5 h-5" />
                            <span>Agrandir l&apos;affiche grand format</span>
                          </div>
                        </div>
                        <p className="text-xs text-encre-muted mt-2 text-center">
                          Cliquez sur l&apos;image pour examiner l&apos;affiche officielle en haute résolution
                        </p>
                      </div>

                      {/* Official Description */}
                      <div className="mb-7 p-5 rounded-2xl bg-[#FAF8F4] border border-sable-border">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-vert-profond mb-2.5 flex items-center gap-1.5">
                          <Compass className="w-4 h-4 text-cuivre" />
                          <span>Objectif & Description du programme</span>
                        </h3>
                        <p className="text-[15px] sm:text-[15.5px] text-encre/90 font-sans leading-relaxed">
                          {formula.description}
                        </p>
                      </div>

                      {/* Platforms Supported */}
                      <div className="mb-7">
                        <div className="text-xs font-bold uppercase tracking-wider text-encre-muted mb-3">
                          Plateformes stratégiques enseignées ({formula.platformsCount}) :
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {formula.platforms.map((plat) => (
                            <span
                              key={plat}
                              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold border shadow-2xs ${getPlatformStyle(
                                plat
                              )}`}
                            >
                              {plat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Curriculum / Deliverables */}
                      <div className="mb-8 space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-encre-muted mb-3">
                          Compétences & axes opérationnels :
                        </div>
                        {formula.features.map((feat, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 text-sm sm:text-[14.5px] text-encre/90 font-sans"
                          >
                            <CheckCircle2
                              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                isF2 ? "text-cuivre" : "text-vert-profond"
                              }`}
                            />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action CTA */}
                    <div className="pt-6 border-t border-sable-border">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-4 px-6 rounded-2xl font-display font-bold text-base flex items-center justify-center gap-3 transition-all shadow-sm ${
                          isF2
                            ? "bg-vert-profond text-white hover:bg-vert-profond-hover hover:shadow-md"
                            : "bg-white text-vert-profond border-2 border-vert-profond hover:bg-vert-profond hover:text-white"
                        }`}
                      >
                        <WhatsAppIcon className="w-5 h-5 flex-shrink-0 text-[#25D366]" />
                        <span>{formula.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                      <p className="text-xs text-center text-encre-muted mt-2.5">
                        Échange direct avec Morgan Bocovo · Accompagnement sur-mesure
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Learn with Morgan Bocovo */}
        <section className="py-16 sm:py-20 bg-[#F3EFE6] border-y border-sable-border">
          <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-cuivre block mb-3">
                Rigueur & Expertise Pratique
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-encre leading-tight mb-4">
                Pourquoi se former auprès de Morgan Bocovo ?
              </h2>
              <p className="text-sm sm:text-base text-encre-light leading-relaxed">
                Pas de théorie abstraite : un accompagnement basé sur l&apos;expérience quotidienne du terrain et des opérations d&apos;importation réelles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-sable-border shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-cuivre/10 text-cuivre flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-encre mb-2">
                  Leadership de terrain
                </h3>
                <p className="text-sm text-encre-light leading-relaxed">
                  CEO de BARON MERIDIAN & DG de BAO CONSILIUM, immergé au quotidien dans la logistique Chine/France vers le Bénin et l&apos;environnement industriel de la GDIZ.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-sable-border shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-vert-profond/10 text-vert-profond flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-encre mb-2">
                  Protection du capital
                </h3>
                <p className="text-sm text-encre-light leading-relaxed">
                  Apprentissage des audits préalables, sécurisation rigoureuse des paiements (Alipay, WeChat Pay) et prévention des litiges pour zéro perte financière.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-sable-border shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-encre mb-2">
                  Autonomie complète
                </h3>
                <p className="text-sm text-encre-light leading-relaxed">
                  Vous devenez totalement autonome pour sourcer en direct d&apos;usine, négocier les prix et piloter l&apos;acheminement de vos colis jusqu&apos;à Cotonou.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 sm:py-20 bg-vert-profond text-white">
          <div className="mx-auto w-full max-w-3xl px-5 text-center">
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold mb-4">
              Prêt à franchir une étape dans vos importations ?
            </h2>
            <p className="text-sm sm:text-base text-ivoire/85 mb-8 leading-relaxed">
              Contactez directement Morgan Bocovo pour échanger sur vos objectifs et choisir la formule la plus adaptée à votre situation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/2290167174369?text=Bonjour%20Morgan%20Bocovo,%20je%20souhaite%20m'inscrire%20à%20un%20programme%20de%20coaching."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-8 rounded-2xl bg-white text-vert-profond font-display font-bold text-base hover:bg-cuivre hover:text-white transition-colors shadow-md flex items-center gap-2.5"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                <span>Échanger sur WhatsApp (+229 01 67 17 43 69)</span>
              </a>
              <Link
                href="/#expertises"
                className="py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-sm font-semibold transition-colors"
              >
                Retour aux autres services
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute top-2 right-2 sm:-top-10 sm:-right-6 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors z-10"
                aria-label="Fermer le zoom"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full h-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={zoomedImage}
                  alt="Affiche officielle grand format"
                  fill
                  className="object-contain"
                  sizes="95vw"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
