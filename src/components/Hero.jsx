import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-28 grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 shadow">
              <Shield size={14} className="text-orange-400" />
              نرم‌افزار حسابداری پیمان‌کاری امن و حرفه‌ای
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-[1.15] tracking-tight">
              اسیری پیمان asiriagent
              <span className="block mt-2 text-white/90 text-xl sm:text-2xl font-medium">یکپارچه برای مدیریت مالی پروژه‌های پیمان‌کاری</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base leading-7">
              از برآورد تا صورت‌وضعیت، گردش نقدی تا تسویه با پیمانکاران جزء—همه چیز در یک پنل ساده، سریع و دقیق.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a id="demo" href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-orange-500 hover:bg-orange-500/90 text-black font-semibold transition-colors">
                شروع نسخه دمو
                <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 transition-colors">
                مشاهده امکانات
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-orange-400" />
                گزارش سود و زیان پروژه‌ای
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full" />
                پشتیبانی فعال
              </div>
            </div>
          </div>

          <div className="md:block hidden" aria-hidden>
            {/* Empty grid column to keep the Spline visible on the right */}
          </div>
        </div>
      </div>
    </section>
  );
}
