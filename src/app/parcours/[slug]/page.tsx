"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  ZoomIn,
  X,
  MapPin,
  Compass,
  Ship,
  Images,
  ArrowUpRight,
} from "lucide-react";
import { portfolioContent, TimelineFieldGridImage } from "@/content/portfolioData";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.69-.71 1.69s.73 1.96.83 2.1c.1.13 1.41 2.16 3.43 3.03.48.21.86.33 1.15.43.48.15.93.13 1.28.08.39-.06 1.2-.49 1.37-.96.17-.48.17-.88.12-.96-.05-.08-.19-.13-.4-.23s-1.2-.59-1.39-.66c-.19-.06-.32-.1-.46.1-.13.19-.53.66-.65.79-.12.13-.24.15-.45.05s-.89-.33-1.69-1.05c-.62-.56-1.05-1.25-1.17-1.46-.13-.21-.01-.33.09-.43.09-.09.21-.24.32-.36.1-.13.14-.21.21-.36.07-.15.03-.28-.02-.38-.05-.1-.46-1.1-.63-1.51-.17-.4-.34-.35-.46-.35" />
  </svg>
);

export default function ParcoursPolePage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug || "prospection-terrain";

  const grids = portfolioContent.timeline.fieldGrids;
  const activeGrid = grids.find((g) => g.id === slug) || grids[0];
  const otherGrids = grids.filter((g) => g.id !== activeGrid.id);

  const [zoomedMedia, setZoomedMedia] = useState<TimelineFieldGridImage | null>(null);

  const getGridIcon = (id: string) => {
    switch (id) {
      case "prospection-terrain":
        return <MapPin className="w-4 h-4 text-amber-800" />;
      case "consulting-logistique":
        return <Compass className="w-4 h-4 text-emerald-800" />;
      case "acheminement-reussi":
        return <Ship className="w-4 h-4 text-cyan-800" />;
      default:
        return <Compass className="w-4 h-4 text-cuivre" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-encre flex flex-col selection:bg-cuivre/20 selection:text-cuivre relative">
      <ScrollProgress />

      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sable-border">
        <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/#parcours"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-encre hover:text-cuivre transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Retour au parcours</span>
          </Link>

          {/* Direct Pole Switcher */}
          <nav
            aria-label="Navigation entre les pôles du parcours"
            className="hidden md:flex items-center gap-2"
          >
            {grids.map((g) => {
              const isCurrent = g.id === activeGrid.id;
              return (
                <Link
                  key={g.id}
                  href={`/parcours/${g.id}`}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isCurrent
                      ? "bg-vert-profond text-white shadow-2xs"
                      : "bg-[#F3EFE6] text-encre-light hover:text-encre"
                  }`}
                >
                  {g.number}. {g.title}
                </Link>
              );
            })}
          </nav>

          <a
            href={`https://wa.me/2290167174369?text=${encodeURIComponent(
              `Bonjour Morgan Bocovo, j'ai consulté la page "${activeGrid.title}" de votre parcours et je souhaite échanger sur un projet d'importation.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-vert-profond text-white text-xs sm:text-sm font-semibold hover:bg-vert-profond-hover active:scale-95 transition-all shadow-2xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Échanger sur WhatsApp</span>
          </a>
        </div>

        {/* Mobile Pole Switcher Bar */}
        <div className="md:hidden px-5 py-2.5 bg-[#F6F3EC] border-t border-sable-border flex items-center gap-2 overflow-x-auto">
          {grids.map((g) => {
            const isCurrent = g.id === activeGrid.id;
            return (
              <Link
                key={g.id}
                href={`/parcours/${g.id}`}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  isCurrent
                    ? "bg-vert-profond text-white shadow-2xs"
                    : "bg-white text-encre-light border border-sable-border"
                }`}
              >
                {g.number}. {g.title}
              </Link>
            );
          })}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Banner of the Pole */}
        <section className="pt-10 pb-10 sm:pt-14 sm:pb-12 bg-gradient-to-b from-[#F2ECE1] via-[#FAF8F5] to-[#FAF8F5] border-b border-sable-border">
          <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-full bg-cuivre/10 border border-cuivre/25 text-cuivre text-xs font-extrabold uppercase tracking-wider">
                  Pôle {activeGrid.number} / 03
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${activeGrid.accentColor}`}
                >
                  {getGridIcon(activeGrid.id)}
                  <span>{activeGrid.badge}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-sable-border text-xs font-bold text-encre-muted">
                  <Images className="w-3.5 h-3.5 text-cuivre" />
                  <span>{activeGrid.images.length} visuels & preuves</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-encre tracking-tight leading-tight mb-3">
                {activeGrid.title}
              </h1>

              <p className="text-sm sm:text-base font-bold text-cuivre uppercase tracking-wider mb-4">
                {activeGrid.subtitle}
              </p>

              <p className="text-base sm:text-[17px] text-encre/90 font-sans leading-relaxed mb-8 max-w-3xl">
                {activeGrid.fullDescription}
              </p>

              {/* 3 Key Highlights Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeGrid.highlights.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-sable-border shadow-2xs flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-encre leading-snug">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Full Gallery Grid : Toutes les images & descriptions visibles directement */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cuivre block mb-1">
                  Galerie Complète & Descriptions
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-encre">
                  Toutes les preuves visuelles ({activeGrid.images.length})
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-encre-muted font-sans">
                Cliquez sur n&apos;importe quelle image pour l&apos;agrandir en plein écran.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {activeGrid.images.map((item, idx) => (
                <article
                  key={item.src}
                  className="flex flex-col rounded-3xl bg-white border border-sable-border shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  {/* Visual Preview Box */}
                  <div className="relative bg-[#F4EFE6] p-3.5 border-b border-sable-border">
                    <div className="flex items-center justify-between mb-2.5 px-1">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-sable-border text-[11px] font-extrabold text-encre">
                        <span>
                          {item.type === "video" ? "Vidéo" : "Photo"}{" "}
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </span>

                      {item.type !== "video" && (
                        <button
                          type="button"
                          onClick={() => setZoomedMedia(item)}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-vert-profond hover:text-cuivre transition-colors cursor-pointer bg-white px-2.5 py-0.5 rounded-full border border-sable-border"
                        >
                          <ZoomIn className="w-3 h-3" />
                          <span>Agrandir</span>
                        </button>
                      )}
                    </div>

                    {item.type === "video" ? (
                      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-stone-950 border border-sable-border">
                        <video
                          src={item.src}
                          controls
                          playsInline
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        onClick={() => setZoomedMedia(item)}
                        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-[#FAF8F4] border border-sable-border shadow-2xs"
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-encre text-xs font-bold shadow-md flex items-center gap-1.5">
                            <ZoomIn className="w-4 h-4 text-cuivre" />
                            <span>Voir en grand</span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-encre mb-2 leading-snug">
                        {item.alt}
                      </h3>
                      <p className="text-sm text-encre/85 font-sans leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Navigation : Explorer les 2 autres pôles du parcours */}
        <section className="py-12 sm:py-16 bg-[#F3EFE6] border-t border-sable-border">
          <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cuivre block mb-1">
                  Continuer la visite du parcours
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-encre">
                  Découvrir les autres pôles d&apos;intervention
                </h2>
              </div>
              <Link
                href="/#parcours"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-vert-profond hover:text-cuivre transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Retour à la chronologie complète</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherGrids.map((g) => (
                <Link
                  key={g.id}
                  href={`/parcours/${g.id}`}
                  className="group flex flex-col sm:flex-row items-stretch rounded-3xl bg-white border border-sable-border overflow-hidden shadow-xs hover:shadow-md hover:border-cuivre/50 transition-all"
                >
                  <div className="relative w-full sm:w-48 aspect-[16/10] sm:aspect-auto flex-shrink-0 bg-stone-900">
                    <Image
                      src={g.previewImage}
                      alt={g.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 192px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-cuivre block mb-1">
                        Pôle {g.number} · {g.images.length} visuels
                      </span>
                      <h3 className="font-display font-extrabold text-xl text-encre mb-1.5 group-hover:text-vert-profond transition-colors">
                        {g.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-encre-light line-clamp-2 font-sans">
                        {g.shortDescription}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-sable-border flex items-center justify-between text-xs font-bold uppercase tracking-wider text-vert-profond group-hover:text-cuivre">
                      <span>Explorer ce pôle</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal for Full-Screen Zoom */}
      <AnimatePresence>
        {zoomedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setZoomedMedia(null)}
          >
            <div className="relative max-w-5xl max-h-[92vh] w-full h-full flex flex-col items-center justify-center">
              <button
                type="button"
                onClick={() => setZoomedMedia(null)}
                className="absolute top-2 right-2 sm:top-0 sm:right-0 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors z-10 cursor-pointer"
                aria-label="Fermer l'aperçu plein écran"
              >
                <X className="w-6 h-6" />
              </button>

              <div
                className="relative w-full flex-1 max-h-[78vh] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={zoomedMedia.src}
                  alt={zoomedMedia.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <div
                onClick={(e) => e.stopPropagation()}
                className="mt-4 max-w-2xl w-full p-4 rounded-2xl bg-white/95 text-encre shadow-lg"
              >
                <h4 className="font-display font-bold text-sm sm:text-base text-encre mb-1">
                  {zoomedMedia.alt}
                </h4>
                <p className="text-xs sm:text-sm text-encre-light font-sans">
                  {zoomedMedia.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
