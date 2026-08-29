'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Waves, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Academy", href: "#academy" },
  { label: "Programs", href: "#programs" },
  { label: "Adaptive Aquatics", href: "#adaptive" },
  { label: "Tuition", href: "#tuition" },
  { label: "Location", href: "#booking" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080e18]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-transform duration-200 group-hover:scale-105">
            <Waves className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight block text-white">SWIMWORLD</span>
            <span className="text-[10px] tracking-widest text-sky-400 font-semibold uppercase block -mt-1">KENYA</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150 focus:outline-none focus-visible:text-sky-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Primary CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#booking"
            className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white text-sm font-semibold shadow-[0_0_20px_rgba(37,99,235,0.25)] border border-white/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Book Assessment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 20 }}
            className="md:hidden bg-[#0a1424] border-b border-white/[0.08] px-6 pt-4 pb-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-sky-400 py-1"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center mt-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md"
              >
                Book Assessment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
