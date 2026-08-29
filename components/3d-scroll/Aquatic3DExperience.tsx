'use client';

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowDown, ArrowUpRight, Waves, Sparkles, ShieldCheck, ThermometerSun, HeartHandshake } from "lucide-react";

interface SceneProps {
  progress: MotionValue<number>;
  range: [number, number, number];
  title: string;
  subtitle: string;
  category: string;
  description: string;
  badge: string;
  badgeIcon: React.ReactNode;
  bgGradient: string;
  depthColor: string;
  ctaText: string;
  ctaHref: string;
  stats?: { label: string; value: string }[];
}

function SceneSection({
  progress,
  range,
  title,
  subtitle,
  category,
  description,
  badge,
  badgeIcon,
  bgGradient,
  depthColor,
  ctaText,
  ctaHref,
  stats,
}: SceneProps) {
  // 3D Spatial Transforms
  const zTranslate = useTransform(progress, range, [-600, 0, 800]);
  const scale = useTransform(progress, range, [0.75, 1, 1.4]);
  const opacity = useTransform(progress, [range[0], range[0] + 0.08, range[1], range[2] - 0.08, range[2]], [0, 1, 1, 1, 0]);
  const yTranslate = useTransform(progress, range, [120, 0, -120]);
  const rotateX = useTransform(progress, range, [15, 0, -15]);

  // Parallax layers for internal depth
  const bgScale = useTransform(progress, range, [1.2, 1, 0.85]);
  const textZ = useTransform(progress, range, [-100, 0, 200]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y: yTranslate,
        z: zTranslate,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="absolute inset-0 flex items-center justify-center p-6 sm:p-12 pointer-events-none"
    >
      {/* Dynamic Aquatic Atmosphere / Caustic Backdrop */}
      <motion.div
        style={{ scale: bgScale }}
        className={`absolute inset-0 rounded-3xl ${bgGradient} border border-white/[0.1] shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden`}
      >
        {/* Animated aquatic light caustics */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.15),transparent_70%)] animate-pulse" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sky-500/10 blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-blue-600/15 blur-[120px]" />
        
        {/* Depth Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </motion.div>

      {/* Foreground Content Card (Pointer Events Enabled) */}
      <motion.div
        style={{ z: textZ }}
        className="relative z-10 max-w-4xl w-full mx-auto pointer-events-auto text-left space-y-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.15] text-xs font-semibold text-sky-300 backdrop-blur-md">
            {badgeIcon}
            <span>{badge}</span>
          </div>
          <span className="font-mono text-xs text-sky-400 uppercase tracking-widest bg-sky-950/60 px-3 py-1 rounded-md border border-sky-800/40">
            {depthColor}
          </span>
        </div>

        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400 font-mono block">
            {category}
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-sky-200 font-medium tracking-tight">
            {subtitle}
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-[62ch]">
          {description}
        </p>

        {stats && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-white/[0.08]">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono">{s.value}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="pt-4 flex flex-wrap items-center gap-4">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold text-sm shadow-[0_0_24px_rgba(37,99,235,0.35)] border border-white/10 transition-all duration-200"
          >
            {ctaText}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="#tuition"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 font-medium text-sm border border-white/[0.1] transition-colors"
          >
            View Pricing Tiers
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Aquatic3DExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Camera progress indicator
  const progressPercent = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative h-[480vh] bg-[#050911]">
      {/* Sticky 3D Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center [perspective:1200px]">
        {/* Real-time Depth HUD (Heads-Up Display) */}
        <div className="absolute top-24 left-6 sm:left-12 z-30 flex items-center gap-3">
          <div className="w-1.5 h-12 rounded-full bg-white/10 overflow-hidden relative">
            <motion.div
              style={{ height: progressPercent }}
              className="w-full bg-gradient-to-b from-sky-400 to-blue-600 rounded-full"
            />
          </div>
          <div className="text-[11px] font-mono text-slate-400">
            <span className="text-white font-semibold block">3D DIVE DEPTH</span>
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>

        {/* Scroll Cue (Only on Start) */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]),
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-slate-400 text-xs font-mono"
        >
          <span>SCROLL DOWN TO DIVE</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-sky-400" />
        </motion.div>

        {/* Stage 1: The Surface (0.0 to 0.28) */}
        <SceneSection
          progress={scrollYProgress}
          range={[0, 0.12, 0.28]}
          title="THE SURFACE"
          subtitle="Premier Aquatic Institution in Nairobi & Kiambu"
          category="Stage 01 · Inception & Foundations"
          description="Since 2015, Swimworld Kenya has set the benchmark for aquatic education. Operating out of temperature-controlled heated pools (28-30°C) with certified instructors and strict 5:1 student-to-coach cohorts."
          badge="Established March 2015"
          badgeIcon={<Waves className="w-4 h-4 text-sky-400" />}
          bgGradient="bg-gradient-to-b from-[#0a182e] via-[#0c2344] to-[#081220]"
          depthColor="DEPTH: 0.0M (SURFACE)"
          ctaText="Book Assessment"
          ctaHref="#booking"
          stats={[
            { label: "Graduated Alumni", value: "5,000+" },
            { label: "Pool Climate", value: "28-30°C" },
            { label: "Coach Ratio", value: "5:1 Max" },
          ]}
        />

        {/* Stage 2: The Current (0.22 to 0.52) */}
        <SceneSection
          progress={scrollYProgress}
          range={[0.22, 0.38, 0.54]}
          title="THE CURRENT"
          subtitle="Biomechanical Video Analysis & Stroke Mastery"
          category="Stage 02 · Youth & Adult Mechanics"
          description="Progressive 10-session modules taking students from introductory water safety to 4-stroke mastery. Athletes receive high-speed underwater video diagnostics to eliminate drag and perfect turn cadence."
          badge="High-Speed Video Diagnostics"
          badgeIcon={<ThermometerSun className="w-4 h-4 text-sky-400" />}
          bgGradient="bg-gradient-to-b from-[#081a33] via-[#062952] to-[#04162e]"
          depthColor="DEPTH: 1.8M (MID-WATER)"
          ctaText="Explore Youth Curriculum"
          ctaHref="#programs"
          stats={[
            { label: "Module Length", value: "10 Sessions" },
            { label: "Progression Tiers", value: "6 Tracks" },
            { label: "Campuses", value: "Westlands & Kiambu" },
          ]}
        />

        {/* Stage 3: Deep Calm (0.48 to 0.78) */}
        <SceneSection
          progress={scrollYProgress}
          range={[0.48, 0.64, 0.8]}
          title="DEEP CALM"
          subtitle="Finding Calm in the Current · Adaptive Aquatics"
          category="Stage 03 · Sensory-Calm Therapy"
          description="Our flagship adaptive aquatics initiative provides sensory-adapted, low-noise one-on-one therapy for children and adults with neurodiverse profiles, mobility rehabilitation needs, and water anxiety."
          badge="1:1 Certified Adaptive Care"
          badgeIcon={<HeartHandshake className="w-4 h-4 text-sky-400" />}
          bgGradient="bg-gradient-to-b from-[#041830] via-[#021e3d] to-[#020e1f]"
          depthColor="DEPTH: 3.5M (CALM ZONE)"
          ctaText="Book Adaptive Session"
          ctaHref="#booking"
          stats={[
            { label: "Therapist Ratio", value: "1:1 Private" },
            { label: "Environment", value: "Sensory Calm" },
            { label: "Program", value: "Finding Calm" },
          ]}
        />

        {/* Stage 4: The Arena (0.74 to 1.0) */}
        <SceneSection
          progress={scrollYProgress}
          range={[0.74, 0.9, 1.0]}
          title="THE ARENA"
          subtitle="National Squad Conditioning & Competition"
          category="Stage 04 · Competitive Excellence"
          description="Elite conditioning division preparing junior and senior athletes for regional and national swim meets with lactate threshold pacing, dryland strength conditioning, and sports nutrition."
          badge="Competitive Excellence"
          badgeIcon={<ShieldCheck className="w-4 h-4 text-sky-400" />}
          bgGradient="bg-gradient-to-b from-[#021326] via-[#082040] to-[#040c17]"
          depthColor="DEPTH: 5.0M (COMPETITION LANES)"
          ctaText="Join Squad Assessment"
          ctaHref="#booking"
          stats={[
            { label: "Lane Capacity", value: "25M Olympic" },
            { label: "Training", value: "Sprint & Distance" },
            { label: "Schedule", value: "6 Days/Week" },
          ]}
        />
      </div>
    </div>
  );
}
