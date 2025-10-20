import React from 'react';
import { Calculator, Database, Users, Wallet, BarChart3, Clock, Shield, FileText, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Calculator className="text-orange-400" size={22} />,
    title: 'حسابداری پروژه‌محور',
    desc: 'مرکز هزینه و کدینگ پروژه‌ها، تفکیک هزینه‌ها به تفصیلی‌های هر قرارداد و کارگاه.'
  },
  {
    icon: <FileText className="text-orange-400" size={22} />,
    title: 'صورت‌وضعیت و تعدیل',
    desc: 'تنظیم صورت‌وضعیت بر اساس فهرست‌بها، مدیریت تعدیل و کسورات قانونی.'
  },
  {
    icon: <Users className="text-orange-400" size={22} />,
    title: 'پیمانکار جزء و کارفرما',
    desc: 'قراردادهای زیرمجموعه، تسویه، پیش‌پرداخت، تضمین و نگه‌داشت‌ها.'
  },
  {
    icon: <Wallet className="text-orange-400" size={22} />,
    title: 'گردش نقدی و دریافت/پرداخت',
    desc: 'کنترل چک‌ها، تنخواه کارگاه، صندوق و بانک با ارتباط مستقیم به پروژه.'
  },
  {
    icon: <Database className="text-orange-400" size={22} />,
    title: 'انبار و کالا',
    desc: 'رسید و حواله پروژه‌ای، حواله مستقیم به آیتم‌های قرارداد، موجودی لحظه‌ای.'
  },
  {
    icon: <BarChart3 className="text-orange-400" size={22} />,
    title: 'گزارش‌گیری پیشرفته',
    desc: 'سود و زیان به تفکیک پروژه، بهای تمام‌شده، کارکرد عوامل و تحلیل بهای آیتم‌ها.'
  },
  {
    icon: <Clock className="text-orange-400" size={22} />,
    title: 'زمان‌بندی و پیشرفت فیزیکی',
    desc: 'ثبت درصد پیشرفت، انحراف زمان/هزینه و نمودارهای کنترلی.'
  },
  {
    icon: <Shield className="text-orange-400" size={22} />,
    title: 'امنیت و سطوح دسترسی',
    desc: 'تعریف نقش‌ها، ردیابی عملیات و پشتیبان‌گیری رمزنگاری‌شده.'
  },
  {
    icon: <TrendingUp className="text-orange-400" size={22} />,
    title: 'واحد پول ریال/تومان',
    desc: 'ثبت و گزارش‌گیری با واحد ریال و تومان، نمایش پویا و گرد کردن هوشمند.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black to-[#0b0b0c]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_400px_at_80%_-10%,rgba(255,145,0,0.08),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold">طراحی‌شده برای پیمان‌کاران حرفه‌ای</h2>
          <p className="text-white/70 mt-3 text-sm sm:text-base">همه ابزارهای لازم برای کنترل مالی پروژه‌های ساختمانی، راه‌سازی و تاسیسات در یک پلتفرم.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors p-5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-white/5 border border-white/10">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg">{f.title}</h3>
                  <p className="text-white/70 mt-1 text-sm leading-6">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-orange-500 hover:bg-orange-500/90 text-black font-semibold transition-colors">
            درخواست دمو و مشاوره
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 transition-colors">
            صحبت با کارشناس فروش
          </a>
        </div>
      </div>
    </section>
  );
}
