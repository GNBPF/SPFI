import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Custom hook for scroll-triggered animations
 * Usage: useScrollAnimation(() => { ... animation code ... })
 */
export const useScrollAnimation = (animationFn: () => void, deps: React.DependencyList = []) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      animationFn();
    }, ref);

    return () => {
      ctx.revert();
    };
  }, deps);

  return ref;
};

/**
 * Common animation patterns as ready-to-use functions
 */
export const scrollAnimations = {
  /**
   * Fade up animation - elements fade in from below
   */
  fadeUp: (selector: string, options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    start?: string;
    ease?: string;
  }) => {
    const {
      y = 60,
      duration = 1,
      stagger = 0.2,
      start = 'top 80%',
      ease = 'power3.out',
    } = options || {};

    gsap.from(selector, {
      y,
      opacity: 0,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: selector,
        start,
        toggleActions: 'play none none reverse',
      },
    });
  },

  /**
   * Parallax effect - element moves at different speed
   */
  parallax: (selector: string, options?: {
    y?: number;
    trigger?: string;
    start?: string;
    end?: string;
  }) => {
    const {
      y = 100,
      trigger = selector,
      start = 'top bottom',
      end = 'bottom top',
    } = options || {};

    gsap.to(selector, {
      y,
      ease: 'none',
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub: true,
      },
    });
  },

  /**
   * Staggered grid animation
   */
  staggeredGrid: (selector: string, options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    start?: string;
  }) => {
    const {
      y = 24,
      duration = 0.6,
      stagger = 0.1,
      start = 'top 85%',
    } = options || {};

    gsap.from(selector, {
      y,
      opacity: 0,
      duration,
      stagger,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: selector,
        start,
      },
    });
  },
};

