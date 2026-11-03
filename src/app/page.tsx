import React from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Expertises } from "@/components/sections/Expertises";
import { Timeline } from "@/components/sections/Timeline";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AmbientSpotlight } from "@/components/ui/AmbientSpotlight";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-ivoire text-encre relative">
      {/* Scroll Progress Bar at the very top */}
      <ScrollProgress />

      {/* Subtle Luxury Cursor Ambient Follower (desktop) */}
      <AmbientSpotlight />

      {/* Skip to main content link for WCAG AA compliance */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-encre focus:text-blanc-chaud focus:rounded-md focus:font-semibold"
      >
        Passer au contenu principal
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        <Hero />
        <Expertises />
        <Timeline />
        <CaseStudies />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
