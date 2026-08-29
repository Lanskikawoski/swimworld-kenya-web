import React from "react";
import { Waves, Video, Sparkles, HeartPulse } from "lucide-react";

export function FacilityBento() {
  return (
    <section className="py-20 bg-[#060b13] border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest text-sky-400 font-mono block mb-2">Institutional Quality</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineered for safety, conditioning, and confidence.
          </h2>
        </div>

        {/* 4-Cell Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 rounded-2xl bg-[#0f1b2d]/60 border border-white/[0.08] relative overflow-hidden flex flex-col justify-between min-h-[260px]">
            <div className="space-y-3 relative z-10 max-w-lg">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Underwater Biomechanical Video Analysis</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Elite conditioning athletes and advanced learners receive high-speed underwater video diagnostics to analyze drag resistance, stroke cadence, and flip-turn efficiency.
              </p>
            </div>
            <div className="pt-6 relative z-10 text-xs font-mono text-slate-400">Standard for Competitive & Advanced Tiers</div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0f1b2d]/60 border border-white/[0.08] flex flex-col justify-between min-h-[260px]">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Sensory Adapted Space</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Acoustically managed pool environments dedicated to special needs learners and adaptive aquatic therapy.
              </p>
            </div>
            <div className="pt-6 text-xs font-mono text-sky-400">1:1 Certified Therapist Ratio</div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0f1b2d]/60 border border-white/[0.08] flex flex-col justify-between min-h-[240px]">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Multi-Lane Temperature Control</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dedicated shallow orientation bays for toddlers alongside 25m conditioning lanes for adults and squads.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 p-8 rounded-2xl bg-[#0f1b2d]/60 border border-white/[0.08] flex flex-col justify-between min-h-[240px]">
            <div className="space-y-3 max-w-xl">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Aqua Fitness & Post-Injury Rehabilitation</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Low-impact, high-resistance hydrotherapy programs designed for joint mobility, cardiovascular endurance, and physical therapy recovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
