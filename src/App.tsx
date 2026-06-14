/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InteractiveFlow from './components/InteractiveFlow';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Token from './components/Token';
import Footer from './components/Footer';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Subtle scroll effects
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1]);

  const handleScrollTo = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

  return (
    <div ref={containerRef} className="relative min-h-screen font-sans selection:bg-ghost-purple/30 selection:text-white antialiased overflow-x-hidden">
      
      {/* ============================================ */}
      {/* CLEAN GEOMETRIC BACKGROUND PATTERNS */}
      {/* ============================================ */}
      
      {/* Floating gradient orbs - subtle and elegant */}
      <div className="fixed top-0 -left-20 w-96 h-96 bg-ghost-purple/20 rounded-full blur-[80px] pointer-events-none animate-pulse" />
      <div className="fixed bottom-0 -right-20 w-96 h-96 bg-ghost-cyan/20 rounded-full blur-[80px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="fixed top-1/3 right-1/4 w-64 h-64 bg-ghost-pink/15 rounded-full blur-[70px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
      
      {/* Subtle grid pattern overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(#c4b5fd_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      {/* Navigation Header */}
      <Header onScrollTo={handleScrollTo} />

      {/* Main Landing Area */}
      <main className="flex-grow relative z-10" style={{ opacity: typeof opacity === 'number' ? opacity : 1 }}>
        <Hero onScrollTo={handleScrollTo} />
        <Features />
        <InteractiveFlow />
        <Token />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}