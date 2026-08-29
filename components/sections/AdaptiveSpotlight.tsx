import React from "react";
import Link from "next/link";
import { Sparkles, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";

export function AdaptiveSpotlight() {
  return (
    <section id="adaptive" className="py-20 bg-gradient-to-b from-[#080e18] to-[#0d1c33] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0f1b2d]/90 border border-sky-500/20 shadow-[0_0_40px_rgba(14,165,233,0.1)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Specialized Aquatic Therapy
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Finding Calm in the Current
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our flagship adaptive swimming initiative provides sensory-calm, one-on-one aquatic therapy for children and adults with neurodiverse profiles, mobility considerations, or trauma-related water anxiety.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">Customized sensory pace and low-noise private pool slots</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-300">Certified adaptive instructors trained in physical therapy support</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-[#080e18]/90 p-8 rounded-2xl border border-white/[0.08] text-center space-y-4">
            <h3 className="text-lg font-bold text-white">Adaptive Consultation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Speak directly with our adaptive program lead to structure a personalized environment for your family member.
            </p>
            <Link
              href="#booking"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-[0_0_24px_rgba(14,165,233,0.3)] transition-all"
            >
              Book Adaptive Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
