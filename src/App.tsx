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
    <div 
      ref={containerRef} 
      style={{
        position: 'relative',
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        overflowX: 'hidden',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}
    >
      
      {/* Floating gradient orbs - hidden on mobile for performance */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: '-80px',
          width: '384px',
          height: '384px',
          background: 'rgba(139, 92, 246, 0.2)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          display: 'none'
        }}
        className="desktop-only"
      />
      <div 
        style={{
          position: 'fixed',
          bottom: 0,
          right: '-80px',
          width: '384px',
          height: '384px',
          background: 'rgba(6, 182, 212, 0.2)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          display: 'none'
        }}
        className="desktop-only"
      />
      <div 
        style={{
          position: 'fixed',
          top: '33.333%',
          right: '25%',
          width: '256px',
          height: '256px',
          background: 'rgba(236, 72, 153, 0.15)',
          borderRadius: '50%',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          animation: 'pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          display: 'none'
        }}
        className="desktop-only"
      />
      
      {/* Subtle grid pattern overlay - reduced opacity on mobile */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(196, 181, 253, 1) 1px, transparent 1px)',
          backgroundSize: 'clamp(16px, 5vw, 32px) clamp(16px, 5vw, 32px)',
          opacity: 0.15,
          pointerEvents: 'none'
        }} 
      />

      {/* Navigation Header */}
      <Header onScrollTo={handleScrollTo} />

      {/* Main Landing Area */}
      <main 
        style={{
          flexGrow: 1,
          position: 'relative',
          zIndex: 10,
          opacity: typeof opacity === 'number' ? opacity : 1,
          width: '100%',
          overflowX: 'hidden'
        }}
      >
        <Hero onScrollTo={handleScrollTo} />
        <Features />
        <InteractiveFlow />
        <Token />
        <FAQ />
      </main>

      <Footer />

      {/* Add keyframe animations */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
          
          /* Mobile responsive breakpoints */
          @media (max-width: 768px) {
            .desktop-only {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
}