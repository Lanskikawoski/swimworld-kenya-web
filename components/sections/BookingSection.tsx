'use client';

import React, { useState } from "react";
import { Send, MapPin, Mail, Clock } from "lucide-react";

export function BookingSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  return (
    <section id="booking" className="py-24 bg-[#060b13] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-sky-400 font-mono block mb-2">Direct Coordination</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Schedule your skill assessment.
              </h2>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Every prospective swimmer completes a 20-minute assessment to establish water confidence, stroke mechanics, and placement within the appropriate instruction tier.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/[0.06]">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Main Facilities:</span>
                  <span>Westlands, Nairobi & Kiambu Road Campuses</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <Clock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Operating Schedule:</span>
                  <span>Mon-Sat: 6:00 AM - 8:00 PM | Sun: 8:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Inquiries:</span>
                  <span>info@swimworldkenya.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0f1b2d] p-8 sm:p-10 rounded-2xl border border-white/[0.08] shadow-2xl">
            {status === "success" ? (
              <div className="p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 text-sky-400 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Assessment Request Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Our coaching coordinator will contact you via phone or email within 24 hours to finalize your evaluation time slot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#080e18] border border-white/[0.12] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone Number (WhatsApp)
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      placeholder="+254 700 000 000"
                      className="w-full px-4 py-3 rounded-xl bg-[#080e18] border border-white/[0.12] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#080e18] border border-white/[0.12] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="tier" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Target Program Tier
                    </label>
                    <select
                      id="tier"
                      className="w-full px-4 py-3 rounded-xl bg-[#080e18] border border-white/[0.12] text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                    >
                      <option value="youth">Youth Foundational (Ages 4-12)</option>
                      <option value="early">Early Childhood (6 Mos - 3 Yrs)</option>
                      <option value="adults">Adult Skill & Fitness</option>
                      <option value="competitive">Competitive Squad Conditioning</option>
                      <option value="adaptive">Special Needs / Adaptive Aquatics</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Current Experience or Special Requirements
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Briefly state water comfort level, medical goals, or scheduling preferences."
                    className="w-full px-4 py-3 rounded-xl bg-[#080e18] border border-white/[0.12] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold text-sm shadow-[0_0_24px_rgba(37,99,235,0.3)] border border-white/10 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {status === "submitting" ? "Submitting..." : "Submit Assessment Request"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
