'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, ThermometerSun, Users } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

export function Hero() {
  return (
    <section id="academy" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-semibold text-sky-300">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Westlands & Kiambu Aquatic Academy
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]"
            >
              Precision aquatic coaching, built for every stage of life.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-[58ch]"
            >
              From 6-month water acclimation to national athletic conditioning and specialized adaptive swimming. Certified instruction inside 28-30°C temperature-controlled facilities.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold text-sm shadow-[0_0_24px_rgba(37,99,235,0.3)] border border-white/10 transition-all duration-200"
              >
                Book Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#programs"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 font-medium text-sm border border-white/[0.08] transition-colors duration-150"
              >
                Explore 6 Program Tiers
              </Link>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="p-7 rounded-2xl bg-[#0f1b2d]/80 border border-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_32px_rgba(0,0,0,0.5)] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">Verified Standard</span>
                <span className="text-xs font-semibold text-sky-400 bg-sky-950/60 px-2.5 py-1 rounded-md border border-sky-800/40">Since 2015</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-sky-400 mt-0.5">
                    <ThermometerSun className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Heated Pools (28-30°C)</h3>
                    <p className="text-xs text-slate-400 leading-normal mt-0.5">Year-round climate control prevents cramping and supports muscle recovery.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-sky-400 mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">5:1 Student-to-Coach Cap</h3>
                    <p className="text-xs text-slate-400 leading-normal mt-0.5">Strict cohort limits guaranteeing individual feedback and technique refinement.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-sky-400 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">5,000+ Enrolled Alumni</h3>
                    <p className="text-xs text-slate-400 leading-normal mt-0.5">Documented progression curriculum from introductory water safety to competitive squads.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
