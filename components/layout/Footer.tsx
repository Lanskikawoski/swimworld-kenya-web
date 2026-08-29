import React from "react";
import Link from "next/link";
import { Waves, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#04080e] border-t border-white/[0.06] pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Waves className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg text-white">SWIMWORLD KENYA</span>
          </div>
          <p className="text-slate-400 max-w-md leading-relaxed text-xs sm:text-sm">
            Premier aquatic education and competitive conditioning institution operating out of modern heated pool facilities in Westlands, Nairobi and Kiambu County.
          </p>
          <div className="pt-2 text-xs font-mono text-slate-500">
            Founded 2015 · Over 5,000 Certified Alumni
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono">Quick Navigation</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><Link href="#academy" className="hover:text-white transition-colors">Academy Overview</Link></li>
            <li><Link href="#programs" className="hover:text-white transition-colors">Program Tiers</Link></li>
            <li><Link href="#adaptive" className="hover:text-white transition-colors">Finding Calm (Adaptive)</Link></li>
            <li><Link href="#tuition" className="hover:text-white transition-colors">Tuition & Pricing</Link></li>
            <li><Link href="#booking" className="hover:text-white transition-colors">Schedule Assessment</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono">Operations & Safety</h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>Mon-Sat: 6:00 AM - 8:00 PM<br />Sun: 8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>info@swimworldkenya.com</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>Westlands & Kiambu Campuses</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>© 2026 Swimworld Kenya. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <Link href="#academy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link href="#academy" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          <Link href="#booking" className="hover:text-slate-300 transition-colors">Safety Standards</Link>
        </div>
      </div>
    </footer>
  );
}
