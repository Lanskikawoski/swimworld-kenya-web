'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProgramDetail {
  id: string;
  name: string;
  age: string;
  summary: string;
  ratio: string;
  duration: string;
  modules: string[];
}

const PROGRAMS: Record<string, ProgramDetail> = {
  early: {
    id: "early",
    name: "Early Childhood Acclimation",
    age: "6 Months to 3 Years",
    summary: "Gentle parent-assisted water orientation developing natural buoyancy reflexes, sensory comfort, and primary safety instincts.",
    ratio: "Parent + Child Guided Cohort",
    duration: "10 Structured Sessions (30 mins)",
    modules: ["Water comfort & breath control", "Gentle submersion reflexes", "Parent-assisted buoyancy holds", "Primary edge-exit safety"],
  },
  youth: {
    id: "youth",
    name: "Youth Foundational Mechanics",
    age: "4 to 12 Years",
    summary: "Core stroke development through structured progression modules. Swimmers graduate from basic propulsion to 4-stroke proficiency.",
    ratio: "Max 5 Students per Coach",
    duration: "10-Session Modules (45 mins)",
    modules: ["Freestyle & Backstroke mechanics", "Rhythmic bilateral breathing", "Breaststroke & Butterfly progression", "Deep water survival & treading"],
  },
  adults: {
    id: "adults",
    name: "Adult Skill & Cardio Conditioning",
    age: "Beginner to Advanced Adults",
    summary: "Tailored instruction overcoming water hesitation, refining efficiency, or conditioning for open water and triathlon events.",
    ratio: "Group Cohort or 1:1 Private",
    duration: "Flexible Morning & Evening Schedules",
    modules: ["Deep water acclimatization", "Cardiovascular lap conditioning", "Ergonomic stroke correction", "Distance endurance pacing"],
  },
  competitive: {
    id: "competitive",
    name: "Competitive Squad Conditioning",
    age: "Selected Junior & Senior Athletes",
    summary: "High-performance team training focused on race strategy, underwater turn mechanics, and regional championship preparation.",
    ratio: "Elite Squad Training",
    duration: "Multi-Day Weekly Regimen + Dryland",
    modules: ["Biomechanical underwater video analysis", "Starts, turns & race pacing", "Lactate threshold endurance", "Complementary strength dryland workouts"],
  },
};

export function ProgramMatrix() {
  const [activeTab, setActiveTab] = useState<string>("youth");
  const current = PROGRAMS[activeTab];

  return (
    <section id="programs" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-sky-400 font-mono block mb-2">Curriculum Pathways</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Structured aquatic development.
          </h2>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0f1b2d] border border-white/[0.08] overflow-x-auto max-w-full">
          {Object.entries(PROGRAMS).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                activeTab === key ? "text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {activeTab === key && (
                <motion.div
                  layoutId="activeTabPill"
                  transition={{ type: "spring", stiffness: 140, damping: 20 }}
                  className="absolute inset-0 bg-blue-600 rounded-lg shadow-sm"
                />
              )}
              <span className="relative z-10">{item.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Program Details Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
          className="p-8 sm:p-10 rounded-2xl bg-[#0f1b2d]/70 border border-white/[0.1] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-sky-950/80 border border-sky-800/40 text-sky-300 text-xs font-semibold font-mono">
                {current.age}
              </span>
              <span className="text-xs text-slate-400 font-mono">{current.ratio}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white">{current.name}</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{current.summary}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {current.modules.map((mod) => (
                <div key={mod} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <div className="p-1 rounded bg-blue-500/20 text-sky-400 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{mod}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#080e18]/80 p-6 sm:p-8 rounded-xl border border-white/[0.06] space-y-5">
            <div>
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block mb-1">Pacing & Duration</span>
              <p className="text-sm font-semibold text-white">{current.duration}</p>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block mb-1">Facility Allocation</span>
              <p className="text-sm font-semibold text-white">Temperature-Controlled 28-30°C Bays</p>
            </div>
            <div className="pt-2">
              <Link
                href="#booking"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.25)]"
              >
                Enroll in {current.name.split(" ")[0]}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
