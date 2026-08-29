import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Aquatic3DExperience } from "@/components/3d-scroll/Aquatic3DExperience";
import { FacilityBento } from "@/components/sections/FacilityBento";
import { ProgramMatrix } from "@/components/sections/ProgramMatrix";
import { AdaptiveSpotlight } from "@/components/sections/AdaptiveSpotlight";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { BookingSection } from "@/components/sections/BookingSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050911] text-slate-50 selection:bg-sky-500/30 selection:text-sky-200">
      <Navbar />
      {/* 3D Cinematic Scroll Dive Experience */}
      <Aquatic3DExperience />
      {/* Comprehensive Grounded Sections */}
      <FacilityBento />
      <ProgramMatrix />
      <AdaptiveSpotlight />
      <PricingTiers />
      <BookingSection />
      <Footer />
    </main>
  );
}
