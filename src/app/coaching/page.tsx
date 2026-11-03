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
  HelpCircle,
} from "lucide-react";
import { portfolioContent } from "@/content/portfolioData";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.69-.71 1.69s.73 1.96.83 2.1c.1.13 1.41 2.16 3.43 3.03.48.21.86.33 1.15.43.48.15.93.13 1.28.08.39-.06 1.2-.49 1.37-.96.17-.48.17-.88.12-.96-.05-.08-.19-.13-.4-.23s-1.2-.59-1.39-.66c-.19-.06-.32-.1-.46.1-.13.19-.53.66-.65.79-.12.13-.24.15-.45.05s-.89-.33-1.69-1.05c-.62-.56-1.05-1.25-1.17-1.46-.13-.21-.01-.33.09-.43.09-.09.21-.24.32-.36.1-.13.14-.21.21-.36.07-.15.03-.28-.02-.38-.05-.1-.46-1.1-.63-1.51-.17-.4-.34-.35-.46-.35" />
  </svg>
);

export default function CoachingPage() {
  const [activeTab, setActiveTab] = useState<"formule-1" | "formule-2" | "comparatif">("formule-2");
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const coaching = portfolioContent.coaching;
  const formulas = coaching.formulas;
  const f1 = formulas[0];
  const f2 = formulas[1];

  const currentFormula = activeTab === "formule-1" ? f1 : f2;

  const platformExplanations: Record<string, string> = {
    Alibaba: "La référence mondiale du B2B : négociation directe avec les fabricants, MOQ flexibles et commande en gros sécurisée.",
    Taobao: "Le catalogue géant chinois : idéal pour sourcer des échantillons unitaires, découvrir les tendances et acheter sans intermédiaire.",
    Pinduoduo: "Le champion des achats groupés : tarifs ultra-agressifs au prix coûtant d'usine pour maximiser vos marges commerciales.",
    "JD.ID": "Garantie qualité et authenticité : le choix numéro 1 pour les produits électroniques, high-tech et matériel professionnel certifié.",
    Xianyu: "La plateforme d'opportunités : déstockages d'usines, invendus neufs et pièces rares à prix cassés.",
    "+ Plateformes Pro": "Réseaux d'usines spécialisés et circuits fermés chinois pour les négociations de gros volumes industriels.",
  };

  const getPlatformStyle = (name: string) => {
    switch (name) {
      case "Alibaba":
        return "bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100";
      case "Taobao":
        return "bg-orange-50 text-orange-900 border-orange-300 hover:bg-orange-100";
      case "Pinduoduo":
        return "bg-red-50 text-red-900 border-red-300 hover:bg-red-100";
      case "JD.ID":
        return "bg-rose-50 text-rose-900 border-rose-300 hover:bg-rose-100";
      case "Xianyu":
        return "bg-yellow-50 text-yellow-950 border-yellow-300 hover:bg-yellow-100";
      default:
        return "bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100";
    }
  };

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
            <span>Retour à l&apos;accueil</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cuivre" />
            <span className="text-xs font-bold uppercase tracking-wider text-encre-muted">
              Morgan Bocovo · Programmes de Coaching
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
        {/* Compact Hero Banner */}
        <section className="pt-12 pb-8 sm:pt-16 sm:pb-10 bg-gradient-to-b from-[#F2ECE1] via-[#FAF8F5] to-[#FAF8F5] border-b border-sable-border">
          <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14 text-center max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vert-profond/10 border border-vert-profond/20 text-vert-profond text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-cuivre" />
              <span>{coaching.badge}</span>
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-encre tracking-tight leading-tight mb-3">
              {coaching.heading}
            </h1>

            <p className="text-sm sm:text-base text-encre-light font-sans leading-relaxed max-w-2xl mx-auto mb-6">
              {coaching.intro}
            </p>

            {/* Interactive Tab Switcher for Quick Navigation */}
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-sable-border shadow-xs gap-1.5">
              <button
                type="button"
                onClick={() => setActiveTab("formule-2")}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "formule-2"
                    ? "bg-vert-profond text-white shadow-sm"
                    : "text-encre-light hover:text-encre hover:bg-ivoire"
                }`}
              >
                ⭐ Formule 2 : Immersion Pro (6 Plateformes)
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("formule-1")}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "formule-1"
                    ? "bg-vert-profond text-white shadow-sm"
                    : "text-encre-light hover:text-encre hover:bg-ivoire"
                }`}
              >
                Formule 1 : Fondations (2 Plateformes)
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("comparatif")}
                className={`px-3 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "comparatif"
                    ? "bg-vert-profond text-white shadow-sm"
                    : "text-encre-light hover:text-encre hover:bg-ivoire"
                }`}
              >
                Comparatif direct
              </button>
            </div>
          </div>
        </section>

        {/* Content Section: Compact, Structured & Organized */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
            {activeTab !== "comparatif" ? (
              /* Single Formula Executive Card: Horizontal 2-Column Split (Compact Height) */
              <motion.div
                key={currentFormula.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="max-w-5xl mx-auto rounded-3xl bg-white border-2 border-sable-border p-6 sm:p-9 lg:p-10 shadow-lg relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  {/* Left Column (65%): Text, Description, Curriculum, Platforms, CTA */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg border ${
                            currentFormula.id === "formule-2"
                              ? "bg-cuivre/15 text-cuivre border-cuivre/30 font-extrabold"
                              : "bg-vert-profond/10 text-vert-profond border-vert-profond/20"
                          }`}
                        >
                          {currentFormula.badge}
                        </span>
                        <span className="text-xs font-bold text-encre-muted">
                          Programme {currentFormula.number}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-encre leading-snug mb-1.5">
                        {currentFormula.name}
                      </h2>
                      <p className="text-sm font-semibold text-cuivre mb-4">
                        {currentFormula.tagline}
                      </p>

                      {/* Official Description */}
                      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-sable-border mb-5">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-vert-profond mb-1.5 flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-cuivre" />
                          <span>Objectif du programme</span>
                        </h3>
                        <p className="text-sm text-encre/90 font-sans leading-relaxed">
                          {currentFormula.description}
                        </p>
                      </div>

                      {/* Plateformes Enseignées */}
                      <div className="mb-5">
                        <span className="text-xs font-bold uppercase tracking-wider text-encre-muted block mb-2">
                          Plateformes enseignées ({currentFormula.platformsCount}) :
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentFormula.platforms.map((plat) => (
                            <button
                              key={plat}
                              type="button"
                              onClick={() =>
                                setSelectedPlatform(selectedPlatform === plat ? null : plat)
                              }
                              className={`px-3 py-1 rounded-lg text-xs font-bold border shadow-2xs transition-all cursor-pointer ${getPlatformStyle(
                                plat
                              )} ${selectedPlatform === plat ? "ring-2 ring-cuivre" : ""}`}
                            >
                              {plat}
                            </button>
                          ))}
                        </div>

                        {selectedPlatform && currentFormula.platforms.includes(selectedPlatform) && (
                          <div className="mt-2.5 p-3 rounded-xl bg-vert-profond/5 border border-vert-profond/20 text-xs text-encre leading-relaxed flex items-start gap-2">
                            <HelpCircle className="w-4 h-4 text-cuivre flex-shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-vert-profond font-bold block">
                                {selectedPlatform} :
                              </strong>
                              <span>{platformExplanations[selectedPlatform]}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Key Points Grid (2 columns to save height) */}
                      <div className="mb-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-encre-muted block mb-2.5">
                          Compétences & modules pratiques :
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {currentFormula.features.map((feat, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-xs sm:text-[13px] text-encre/85 font-sans"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-emerald-600 flex-shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action WhatsApp Button */}
                    <div className="pt-4 border-t border-sable-border">
                      <a
                        href={`https://wa.me/2290167174369?text=${encodeURIComponent(
                          currentFormula.whatsappMessage
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 px-6 rounded-2xl bg-vert-profond text-white font-display font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 hover:bg-vert-profond-hover active:scale-[0.98] transition-all shadow-md"
                      >
                        <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                        <span>{currentFormula.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column (35%): Compact Flyer Preview Card with Zoom Lightbox */}
                  <div className="lg:col-span-5 flex flex-col items-center">
                    <div
                      onClick={() => setZoomedImage(currentFormula.image)}
                      className="group relative w-full aspect-[4/5] max-w-[340px] rounded-2xl overflow-hidden border-2 border-sable-border shadow-md cursor-pointer bg-sable/30 hover:border-cuivre transition-all"
                    >
                      <Image
                        src={currentFormula.image}
                        alt={`Affiche de présentation officielle ${currentFormula.name}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 340px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white text-xs font-semibold p-4 text-center">
                        <ZoomIn className="w-5 h-5 text-cuivre-light" />
                        <span>Agrandir l&apos;affiche officielle</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-encre-muted mt-2 text-center">
                      Cliquez sur l&apos;affiche pour examiner en grand format
                    </p>

                    {/* Highlights Box */}
                    <div className="w-full max-w-[340px] mt-4 p-3.5 rounded-xl bg-[#FAF8F5] border border-sable-border text-xs text-encre-light space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-encre">Format :</span>
                        <span className="font-bold text-vert-profond">Accompagnement 1:1 & Pratique</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-encre">Formateur :</span>
                        <span className="font-bold text-cuivre">Morgan Bocovo en direct</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-encre">Garantie :</span>
                        <span>Autonomie complète sourcing usine</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Comparatif Direct Table (Compact & Fast to Read) */
              <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-sable-border overflow-hidden shadow-lg">
                <div className="p-6 bg-[#F3EFE6] border-b border-sable-border text-center">
                  <h3 className="font-display font-extrabold text-xl text-encre">
                    Tableau comparatif des 2 formules
                  </h3>
                  <p className="text-xs sm:text-sm text-encre-light mt-1">
                    Choisissez la formule correspondant à votre stade de développement
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-sable-border bg-white">
                        <th className="p-4 font-bold text-encre">Critères</th>
                        <th className="p-4 font-bold text-vert-profond">Formule 1 : Fondations</th>
                        <th className="p-4 font-bold text-cuivre">Formule 2 : Immersion Pro ⭐</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-sable-border/60">
                      <tr>
                        <td className="p-4 font-semibold text-encre">Plateformes couvertes</td>
                        <td className="p-4 text-encre-light">2 (Alibaba, Taobao)</td>
                        <td className="p-4 font-bold text-cuivre">6 (Alibaba, Taobao, Pinduoduo, JD, Xianyu, Pro)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-encre">Profil cible</td>
                        <td className="p-4 text-encre-light">Débutants & commerçants souhaitant débuter</td>
                        <td className="p-4 text-encre-light">Entrepreneurs & grossistes cherchant les prix directs usine</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-encre">Audit usine avancé</td>
                        <td className="p-4 text-encre-light">Bases de recherche fournisseurs</td>
                        <td className="p-4 text-emerald-700 font-semibold">Audit approfondi solvabilité & conformité</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-encre">Sécurisation des paiements</td>
                        <td className="p-4 text-encre-light">Règlement standard sécurisé</td>
                        <td className="p-4 text-emerald-700 font-semibold">Circuits financiers avancés (Alipay, WeChat Pay, Pro)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-encre">Gestion de litiges & réclamations</td>
                        <td className="p-4 text-encre-light">Procédures basiques</td>
                        <td className="p-4 text-emerald-700 font-semibold">Résolution complète & protection du capital</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-encre">Action recommandée</td>
                        <td className="p-4">
                          <button
                            type="button"
                            onClick={() => setActiveTab("formule-1")}
                            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-sable-border hover:border-vert-profond text-vert-profond"
                          >
                            Voir la Formule 1
                          </button>
                        </td>
                        <td className="p-4">
                          <button
                            type="button"
                            onClick={() => setActiveTab("formule-2")}
                            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-vert-profond text-white hover:bg-vert-profond-hover shadow-xs"
                          >
                            Choisir la Formule 2
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Why Learn with Morgan Bocovo - Compact Grid */}
        <section className="py-12 sm:py-16 bg-[#F3EFE6] border-y border-sable-border">
          <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-cuivre block mb-1.5">
                Rigueur & Expérience Opérationnelle
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-encre leading-tight">
                Pourquoi se former auprès de Morgan Bocovo ?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="p-5 rounded-2xl bg-white border border-sable-border shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-cuivre/10 text-cuivre flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-encre mb-1.5">
                  Leadership de terrain
                </h3>
                <p className="text-xs sm:text-sm text-encre-light leading-relaxed">
                  CEO de BARON MERIDIAN & DG de BAO CONSILIUM, en immersion directe dans les opérations logistiques et l&apos;environnement industriel de la GDIZ-Bénin.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-sable-border shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-vert-profond/10 text-vert-profond flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-encre mb-1.5">
                  Protection du capital
                </h3>
                <p className="text-xs sm:text-sm text-encre-light leading-relaxed">
                  Méthodes strictes de validation des fournisseurs, sécurisation Alipay / WeChat Pay et prévention méthodique des arnaques commerciales.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-sable-border shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-encre mb-1.5">
                  Autonomie totale
                </h3>
                <p className="text-xs sm:text-sm text-encre-light leading-relaxed">
                  Vous apprenez à commander directement en usine, sans intermédiaire coûteux, en négociant les meilleurs prix et en gérant le suivi colis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Direct WhatsApp */}
        <section className="py-12 sm:py-16 bg-vert-profond text-white">
          <div className="mx-auto w-full max-w-2xl px-5 text-center">
            <h2 className="text-xl sm:text-3xl font-display font-extrabold mb-3">
              Besoin de conseils pour choisir votre formule ?
            </h2>
            <p className="text-xs sm:text-sm text-ivoire/85 mb-6 leading-relaxed">
              Échangez directement avec Morgan Bocovo pour orienter votre choix selon votre profil et votre budget.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/2290167174369?text=Bonjour%20Morgan%20Bocovo,%20je%20souhaite%20m'inscrire%20à%20un%20programme%20de%20coaching."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-white text-vert-profond font-display font-bold text-sm hover:bg-cuivre hover:text-white active:scale-95 transition-all shadow-md flex items-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Échanger sur WhatsApp (+229 01 67 17 43 69)</span>
              </a>
              <Link
                href="/#expertises"
                className="py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-xs sm:text-sm font-semibold active:scale-95 transition-all"
              >
                Retour à l&apos;accueil
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
                className="absolute top-2 right-2 sm:-top-10 sm:-right-6 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors z-10 cursor-pointer"
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
