import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#0b0b0c] text-white font-['Inter','IRANSans','IBM Plex Sans','ui-sans-serif']">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
