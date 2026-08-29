import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const TIERS = [
  {
    name: "Youth Foundations",
    priceKes: "KES 15,000",
    priceUsd: "~$115",
    period: "per 10-session module",
    popular: false,
    features: [
      "Max 5:1 student to coach ratio",
      "Heated pool access (28-30°C)",
      "Continuous video stroke analysis",
      "Progress certificate on graduation",
    ],
  },
  {
    name: "Adult Mastery & Fitness",
    priceKes: "KES 18,000",
    priceUsd: "~$140",
    period: "per 10-session cohort",
    popular: true,
    features: [
      "Flexible morning & evening slots",
      "Endurance & deep water confidence",
      "Technique biomechanics breakdown",
      "Complementary lap conditioning access",
    ],
  },
  {
    name: "Private 1:1 Coaching",
    priceKes: "KES 28,000",
    priceUsd: "~$215",
    period: "per 10 private sessions",
    popular: false,
    features: [
      "Dedicated 1:1 Senior Instructor",
      "Custom scheduling flexibility",
      "Adaptive & sensory therapy options",
      "Accelerated goal progression",
    ],
  },
];

export function PricingTiers() {
  return (
    <section id="tuition" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-xs uppercase tracking-widest text-sky-400 font-mono block">Transparent Tuition</span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Structured module pricing.
        </h2>
        <p className="text-slate-400 text-sm">
          All packages include heated facility access, certified lifeguard oversight, and progressive skill evaluations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`p-8 rounded-2xl flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 ${
              tier.popular
                ? "bg-[#0f1b2d] border-2 border-blue-500 shadow-[0_0_32px_rgba(37,99,235,0.2)]"
                : "bg-[#0f1b2d]/50 border border-white/[0.08]"
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-white">{tier.name}</h3>
                {tier.popular && (
                  <span className="px-2.5 py-1 rounded-full bg-blue-600/20 text-sky-400 text-[11px] font-semibold border border-blue-500/30">
                    Most Popular
                  </span>
                )}
              </div>

              <div>
                <div className="text-3xl font-bold text-white tracking-tight">{tier.priceKes}</div>
                <div className="text-xs text-slate-400 font-mono mt-1">{tier.period} ({tier.priceUsd})</div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                {tier.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="#booking"
                className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                  tier.popular
                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                    : "bg-white/[0.06] hover:bg-white/[0.1] text-slate-200"
                }`}
              >
                Book Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
