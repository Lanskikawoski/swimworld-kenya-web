import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FacilityBento } from "@/components/sections/FacilityBento";
import { ProgramMatrix } from "@/components/sections/ProgramMatrix";
import { AdaptiveSpotlight } from "@/components/sections/AdaptiveSpotlight";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { BookingSection } from "@/components/sections/BookingSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080e18] text-slate-50">
      <Navbar />
      <Hero />
      <FacilityBento />
      <ProgramMatrix />
      <AdaptiveSpotlight />
      <PricingTiers />
      <BookingSection />
      <Footer />
    </main>
  );
}
