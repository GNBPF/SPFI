import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import FloatingNav from './components/FloatingNav';
import ScrollToTop from './components/ScrollToTop';
import ConciergeChat from './components/ConciergeChat';
import Home from './components/Home';
import InvestmentInsights from './components/InvestmentInsights';
import Concierge from './components/Concierge';
import JournalistRegistration from './components/JournalistRegistration';
import ExhibitorRegistration from './components/ExhibitorRegistration';
import VisitorRegistration from './components/VisitorRegistration';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    try {
      // Create Lenis instance
      lenis = new Lenis({
        duration: 1.2, // Scroll duration (higher = slower)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
        smooth: true,
        smoothTouch: false, // Disable smooth scroll on touch devices for better performance
      });

      // Connect Lenis to ScrollTrigger (CRITICAL!)
      const scrollHandler = () => {
        if (lenis) {
          ScrollTrigger.update();
        }
      };
      
      if (lenis.on) {
        lenis.on('scroll', scrollHandler);
      }

      // Animation frame loop (required for Lenis)
      function raf(time: number) {
        if (lenis) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
      }

      rafId = requestAnimationFrame(raf);

      // Cleanup
      return () => {
        try {
          if (rafId !== null) {
            cancelAnimationFrame(rafId);
          }
          if (lenis) {
            if (lenis.off && scrollHandler) {
              lenis.off('scroll', scrollHandler);
            }
            if (lenis.destroy) {
              lenis.destroy();
            }
          }
          // Clean up all ScrollTriggers
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        } catch (e) {
          console.error('Error cleaning up Lenis:', e);
        }
      };
    } catch (error) {
      console.error('Error initializing Lenis:', error);
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Router>
        <ScrollToTop />
        <FloatingNav />
        <ConciergeChat />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investment-insights" element={<InvestmentInsights />} />
          <Route path="/registrations" element={<Concierge />} />
          <Route path="/registrations/journalist" element={<JournalistRegistration />} />
          <Route path="/registrations/exhibitor" element={<ExhibitorRegistration />} />
          <Route path="/registrations/visitor" element={<VisitorRegistration />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
