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
  Sparkles,
} from "lucide-react";
import { portfolioContent } from "@/content/portfolioData";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.69-.71 1.69s.73 1.96.83 2.1c.1.13 1.41 2.16 3.43 3.03.48.21.86.33 1.15.43.48.15.93.13 1.28.08.39-.06 1.2-.49 1.37-.96.17-.48.17-.88.12-.96-.05-.08-.19-.13-.4-.23s-1.2-.59-1.39-.66c-.19-.06-.32-.1-.46.1-.13.19-.53.66-.65.79-.12.13-.24.15-.45.05s-.89-.33-1.69-1.05c-.62-.56-1.05-1.25-1.17-1.46-.13-.21-.01-.33.09-.43.09-.09.21-.24.32-.36.1-.13.14-.21.21-.36.07-.15.03-.28-.02-.38-.05-.1-.46-1.1-.63-1.51-.17-.4-.34-.35-.46-.35" />
  </svg>
);

export default function CoachingPage() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const coaching = portfolioContent.coaching;
  const f1 = coaching.formulas[0];
  const f2 = coaching.formulas[1];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-encre flex flex-col selection:bg-cuivre/20 selection:text-cuivre relative">
      <ScrollProgress />

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sable-border">
        <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14 py-3.5 flex items-center justify-between">
          <Link
            href="/#expertises"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-encre hover:text-cuivre transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Retour aux services</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cuivre" />
            <span className="text-xs font-bold uppercase tracking-wider text-encre-muted">
              Morgan Bocovo · Coaching & Accompagnement
            </span>
          </div>

          <a
            href="https://wa.me/2290167174369?text=Bonjour%20Morgan%20Bocovo,%20je%20souhaite%20des%20informations%20sur%20vos%20programmes%20de%20coaching."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-vert-profond text-white text-xs sm:text-sm font-semibold hover:bg-vert-profond-hover active:scale-95 transition-all shadow-2xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Échanger sur WhatsApp</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Editorial Executive Hero Banner */}
        <section className="pt-12 pb-10 sm:pt-16 sm:pb-14 bg-gradient-to-b from-[#F2ECE1] via-[#FAF8F5] to-[#FAF8F5] border-b border-sable-border">
          <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14 text-center max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vert-profond/10 border border-vert-profond/20 text-vert-profond text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-cuivre" />
              <span>{coaching.badge}</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-encre tracking-tight leading-tight mb-4">
              Deux Formules Pratiques pour Maîtriser le Sourcing International.
            </h1>

            <p className="text-sm sm:text-base lg:text-[17px] text-encre-light font-sans leading-relaxed max-w-2xl mx-auto">
              {coaching.intro}
            </p>
          </div>
        </section>

        {/* Classic 2-Column Showcase : Formule 1 & Formule 2 côte-à-côte */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
              
              {/* ===================== FORMULE 1 ===================== */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col rounded-3xl bg-white border border-sable-border shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Visual Flyer Card Preview */}
                <div className="relative bg-[#F5EFE6] p-5 sm:p-6 border-b border-sable-border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-sable-border text-xs font-bold uppercase tracking-wider text-encre shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-cuivre" />
                      <span>Formule 01</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setZoomedImage(f1.image)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-vert-profond hover:text-cuivre transition-colors cursor-pointer bg-white/80 px-2.5 py-1 rounded-lg border border-sable-border"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Agrandir l&apos;affiche</span>
                    </button>
                  </div>

                  <div
                    onClick={() => setZoomedImage(f1.image)}
                    className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer group bg-stone-900 border border-sable-border shadow-sm"
                  >
                    <Image
                      src={f1.image}
                      alt={f1.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/90 text-encre text-xs font-bold shadow-md flex items-center gap-1.5">
                        <ZoomIn className="w-4 h-4 text-cuivre" />
                        <span>Cliquer pour zoomer</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-extrabold text-encre mb-2">
                      {f1.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-bold text-cuivre uppercase tracking-wider mb-4">
                      {f1.tagline}
                    </p>

                    {/* Exact Verbatim User Description */}
                    <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-sable-border mb-6">
                      <p className="text-[14.5px] sm:text-[15px] text-encre/90 font-sans leading-relaxed">
                        {f1.description}
                      </p>
                    </div>

                    {/* Programme & Modules clés */}
                    <div className="mb-6">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-encre-muted mb-3">
                        Compétences clés transmises :
                      </h3>
                      <ul className="space-y-2.5">
                        {f1.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-encre/85">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Plateformes */}
                    <div className="mb-6 pt-4 border-t border-sable-border">
                      <span className="text-xs font-bold uppercase tracking-wider text-encre-muted block mb-2">
                        Plateformes maîtrisées :
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {f1.platforms.map((plat) => (
                          <span
                            key={plat}
                            className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300"
                          >
                            {plat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="pt-4 border-t border-sable-border mt-4">
                    <a
                      href={`https://wa.me/2290167174369?text=${encodeURIComponent(f1.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-xl bg-vert-profond text-white font-display font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-vert-profond-hover active:scale-[0.99] transition-all shadow-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                      <span>{f1.ctaText}</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* ===================== FORMULE 2 ===================== */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col rounded-3xl bg-white border-2 border-cuivre/50 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden relative"
              >
                {/* Visual Flyer Card Preview with Badge */}
                <div className="relative bg-[#F3EDE2] p-5 sm:p-6 border-b border-sable-border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cuivre text-white text-xs font-bold uppercase tracking-wider shadow-2xs">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Formule 02 · Immersion Complète</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setZoomedImage(f2.image)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-vert-profond hover:text-cuivre transition-colors cursor-pointer bg-white/80 px-2.5 py-1 rounded-lg border border-sable-border"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Agrandir l&apos;affiche</span>
                    </button>
                  </div>

                  <div
                    onClick={() => setZoomedImage(f2.image)}
                    className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer group bg-stone-900 border border-sable-border shadow-sm"
                  >
                    <Image
                      src={f2.image}
                      alt={f2.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/90 text-encre text-xs font-bold shadow-md flex items-center gap-1.5">
                        <ZoomIn className="w-4 h-4 text-cuivre" />
                        <span>Cliquer pour zoomer</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-extrabold text-encre mb-2">
                      {f2.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-bold text-cuivre uppercase tracking-wider mb-4">
                      {f2.tagline}
                    </p>

                    {/* Exact Verbatim User Description */}
                    <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-sable-border mb-6">
                      <p className="text-[14.5px] sm:text-[15px] text-encre/90 font-sans leading-relaxed">
                        {f2.description}
                      </p>
                    </div>

                    {/* Programme & Modules clés */}
                    <div className="mb-6">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-encre-muted mb-3">
                        Compétences complètes transmises :
                      </h3>
                      <ul className="space-y-2.5">
                        {f2.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-encre/85">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Plateformes */}
                    <div className="mb-6 pt-4 border-t border-sable-border">
                      <span className="text-xs font-bold uppercase tracking-wider text-encre-muted block mb-2">
                        6 Plateformes incontournables maîtrisées :
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {f2.platforms.map((plat) => (
                          <span
                            key={plat}
                            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#FAF8F5] text-encre border border-sable-border shadow-2xs"
                          >
                            {plat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="pt-4 border-t border-sable-border mt-4">
                    <a
                      href={`https://wa.me/2290167174369?text=${encodeURIComponent(f2.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-xl bg-cuivre text-white font-display font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-cuivre-hover active:scale-[0.99] transition-all shadow-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>{f2.ctaText}</span>
                    </a>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Tableau Comparatif Classique & Structuré */}
        <section className="py-12 sm:py-16 bg-white border-y border-sable-border">
          <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14 max-w-5xl">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-cuivre block mb-1">
                Comparatif Synthétique
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-encre">
                Quelle formule correspond à vos besoins ?
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-sable-border shadow-2xs bg-white">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#FAF8F5] border-b border-sable-border">
                    <th className="py-4 px-4 sm:px-6 font-bold text-encre text-xs uppercase tracking-wider w-1/3">
                      Critères d&apos;apprentissage
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-bold text-encre text-xs uppercase tracking-wider w-1/3 border-l border-sable-border">
                      Formule 1 (Fondations)
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-bold text-cuivre text-xs uppercase tracking-wider w-1/3 border-l border-sable-border bg-cuivre/5">
                      Formule 2 (Immersion Complète)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sable-border">
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-encre">Plateformes incluses</td>
                    <td className="py-3.5 px-4 sm:px-6 text-encre-light border-l border-sable-border">
                      2 plateformes (Alibaba & Taobao)
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-encre border-l border-sable-border bg-cuivre/5">
                      6 plateformes (Alibaba, Taobao, Pinduoduo, JD.ID, Xianyu, etc.)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-encre">Recherche de fournisseurs</td>
                    <td className="py-3.5 px-4 sm:px-6 text-encre-light border-l border-sable-border">
                      Fournisseurs fiables & bases de recherche
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-encre border-l border-sable-border bg-cuivre/5">
                      Audit approfondi, solvabilité & conformité usine
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-encre">Négociation des tarifs</td>
                    <td className="py-3.5 px-4 sm:px-6 text-encre-light border-l border-sable-border">
                      Négociation des prix et des MOQ unitaires
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-encre border-l border-sable-border bg-cuivre/5">
                      Négociation avancée, contrats et prix coûtant usine
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-encre">Sécurisation des paiements</td>
                    <td className="py-3.5 px-4 sm:px-6 text-encre-light border-l border-sable-border">
                      Paiements sécurisés standard
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-encre border-l border-sable-border bg-cuivre/5">
                      Sécurisation avancée des flux financiers & devises
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-encre">Gestion de la logistique</td>
                    <td className="py-3.5 px-4 sm:px-6 text-encre-light border-l border-sable-border">
                      Suivi logistique & réception des colis
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-encre border-l border-sable-border bg-cuivre/5">
                      Gestion complète chaîne logistique & transport maritime/aérien
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-encre">Résolution des litiges</td>
                    <td className="py-3.5 px-4 sm:px-6 text-encre-light border-l border-sable-border">
                      Conseils de prévention
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-encre border-l border-sable-border bg-cuivre/5">
                      Résolution complète et gestion des réclamations
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-encre">Profil cible</td>
                    <td className="py-3.5 px-4 sm:px-6 text-encre-light border-l border-sable-border">
                      Débutants, commerçants & boutiques en démarrage
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-encre border-l border-sable-border bg-cuivre/5">
                      Entrepreneurs, grossistes & importateurs confirmés
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Orientation & Contact Direct Banner */}
        <section className="py-12 sm:py-16 bg-[#FAF8F5]">
          <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
            <div className="max-w-3xl mx-auto rounded-3xl bg-vert-profond text-white p-8 sm:p-10 text-center shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3">
                Vous hésitez entre les deux formules ?
              </h2>
              <p className="text-sm sm:text-base text-ivoire/85 leading-relaxed font-sans max-w-xl mx-auto mb-6">
                Morgan Bocovo échange avec vous sur votre situation, vos objectifs de vente et vous oriente en toute franchise vers le parcours adapté.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/2290167174369?text=Bonjour%20Morgan%20Bocovo,%20j%27hésite%20entre%20la%20Formule%201%20et%20la%20Formule%202,%20pouvez-vous%20m%27orienter%20?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-xl bg-white text-vert-profond font-display font-bold text-sm hover:bg-cuivre hover:text-white active:scale-95 transition-all shadow-md flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Demander conseil sur WhatsApp (+229 01 67 17 43 69)</span>
                </a>
                <Link
                  href="/#expertises"
                  className="py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-xs sm:text-sm font-semibold active:scale-95 transition-all"
                >
                  Retour à l&apos;accueil
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal Zoom Affiche Haute Résolution */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setZoomedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute top-2 right-2 sm:-top-10 sm:-right-6 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors z-10 cursor-pointer"
                aria-label="Fermer le zoom"
              >
                <X className="w-6 h-6" />
              </button>

              <div
                className="relative w-full h-full max-h-[85vh] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={zoomedImage}
                  alt="Affiche officielle de formation Morgan Bocovo"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
