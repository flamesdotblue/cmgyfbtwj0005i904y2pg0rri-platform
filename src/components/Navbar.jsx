import React from 'react';
import { Calculator, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group" aria-label="اسیری پیمان asiriagent - صفحه اصلی">
          <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500/80 to-amber-400/70 text-black shadow-lg shadow-orange-500/20">
            <Calculator size={18} />
          </div>
          <div className="leading-tight">
            <div className="text-sm sm:text-base font-bold tracking-tight">اسیری پیمان</div>
            <div className="text-[11px] sm:text-xs text-white/70">asiriagent • حسابداری پیمان‌کاری</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">امکانات</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">تماس</a>
          <a href="#demo" className="text-white/80 hover:text-white transition-colors">دمو</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:+98912XXXXXXX" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
            <Phone size={16} className="text-orange-400" />
            <span className="text-xs sm:text-sm">تماس</span>
          </a>
          <a href="mailto:hello@asiriagent.com" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-orange-500 hover:bg-orange-500/90 text-black font-medium transition-colors">
            <Mail size={16} />
            <span className="text-xs sm:text-sm">درخواست مشاوره</span>
          </a>
        </div>
      </div>
    </header>
  );
}
