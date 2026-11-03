"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { portfolioContent } from "@/content/portfolioData";

export const About: React.FC = () => {
  const about = portfolioContent.about;

  return (
    <section
      id="a-propos"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8F5EE] border-b border-sable-border relative overflow-hidden"
    >
      {/* Subtle warm light ambient accents */}
      <div
        className="absolute top-10 right-10 w-96 h-96 bg-vert-profond/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 bg-cuivre/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-container px-5 sm:px-8 lg:px-14 relative z-10">
        {/* Compact 2-column layout: Left Narrative & Pillars (60%) / Right Portrait (40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          {/* Left Column: Sharp Editorial Summary & Action Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cuivre/10 border border-cuivre/20 text-cuivre text-xs font-semibold uppercase tracking-wider mb-3.5">
              <span>{about.sectionBadge}</span>
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-encre leading-tight tracking-tight mb-4">
              {about.heading}
            </h2>

            {/* Tight, impactful narrative (concise & executive) */}
            <p className="text-[15.5px] sm:text-base text-encre/90 font-sans leading-relaxed mb-6 max-w-2xl">
              {about.summary}
            </p>

            {/* 3 Compact Action Pillars with tasteful colors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-6">
              {about.pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white border border-sable-border shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${pillar.color}`}>
                      {pillar.number}
                    </span>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-encre">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-encre-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Quote with copper accent */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border-l-4 border-l-cuivre border border-sable-border shadow-2xs w-full flex items-start gap-3">
              <Quote className="w-5 h-5 text-cuivre/60 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-serif italic text-sm sm:text-base text-encre leading-snug">
                  « {about.quote} »
                </p>
                <span className="text-[11px] font-semibold text-vert-profond uppercase tracking-wider block mt-1.5">
                  {about.quoteAuthor}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Portrait with warm border */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden bg-white border-2 border-sable-border shadow-lg group">
              <Image
                src="/images/morgan-about.jpeg"
                alt="Morgan Bocovo - Engagement terrain et rigueur opérationnelle"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-display font-bold text-sm">Morgan Bocovo</p>
                <p className="text-xs text-white/80">CEO Baron Meridian & DG Bao Consilium</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
