import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-bold text-lg">اسیری پیمان asiriagent</h3>
          <p className="text-white/70 mt-2 text-sm leading-7">
            راهکار یکپارچه حسابداری پیمان‌کاری برای مدیریت مالی پروژه‌ها، صورت‌وضعیت‌ها، انبار و گزارش‌های تحلیلی.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">ارتباط با ما</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-orange-400" />
              <a href="tel:+989177796899" className="hover:text-white">0917 779 6899</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-orange-400" />
              <a href="mailto:hello@asiriagent.com" className="hover:text-white">hello@asiriagent.com</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-orange-400" />
              تهران، خیابان مثال، برج فناوری
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">شروع سریع</h4>
          <div className="mt-3 flex flex-col sm:flex-row md:flex-col gap-2">
            <a href="#demo" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-500/90 text-black font-semibold transition-colors">رزرو دمو</a>
            <a href="#features" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 transition-colors">مشاهده امکانات</a>
          </div>
          <div className="mt-4 text-xs text-white/70">
            پشتیبانی واحد پول: ریال / تومان
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} اسیری پیمان asiriagent. تمامی حقوق محفوظ است.</span>
          <span>نسخه نمایشی</span>
        </div>
      </div>
    </footer>
  );
}
