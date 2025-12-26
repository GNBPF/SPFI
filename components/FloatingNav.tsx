import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Color mapping for Tailwind classes
const COLOR_MAP: Record<string, { r: number; g: number; b: number }> = {
  'cream': { r: 242, g: 240, b: 230 }, // #F2F0E6
  'primary': { r: 14, g: 57, b: 47 }, // #0e392f
  'white': { r: 255, g: 255, b: 255 },
  '#f8f7f6': { r: 248, g: 247, b: 246 },
  '#F2F0E6': { r: 242, g: 240, b: 230 },
  '#0e392f': { r: 14, g: 57, b: 47 },
  '#1e1a14': { r: 30, g: 26, b: 20 },
};

// Utility function to calculate luminance and determine if background is light or dark
const getBackgroundColor = (element: Element | null): { r: number; g: number; b: number } | null => {
  if (!element) return null;
  
  const computed = window.getComputedStyle(element);
  const bgColor = computed.backgroundColor;
  
  // Parse rgb/rgba color
  const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (match) {
    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);
    
    // Check if it's a meaningful color (not transparent)
    if (r !== 0 || g !== 0 || b !== 0) {
      return { r, g, b };
    }
  }
  
  // Check class names for Tailwind colors
  const classList = Array.from(element.classList);
  for (const className of classList) {
    // Check for bg-cream, bg-primary, bg-white, etc.
    if (className.startsWith('bg-')) {
      const colorName = className.replace('bg-', '').split('/')[0];
      if (COLOR_MAP[colorName]) {
        return COLOR_MAP[colorName];
      }
    }
    
    // Check for hex colors in class names
    const hexMatch = className.match(/#([0-9a-fA-F]{6})/);
    if (hexMatch && COLOR_MAP[hexMatch[0]]) {
      return COLOR_MAP[hexMatch[0]];
    }
  }
  
  // Try background-image (gradient)
  const bgImage = computed.backgroundImage;
  if (bgImage && bgImage !== 'none') {
    // Check for known color patterns in gradients
    for (const [key, color] of Object.entries(COLOR_MAP)) {
      if (bgImage.includes(key) || bgImage.includes(key.toLowerCase())) {
        return color;
      }
    }
  }
  
  return null;
};

// Calculate relative luminance (WCAG standard)
const getLuminance = (r: number, g: number, b: number): number => {
  const [rs, gs, bs] = [r, g, b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

// Determine if background is light or dark
const isLightBackground = (color: { r: number; g: number; b: number } | null): boolean => {
  if (!color) return false;
  const luminance = getLuminance(color.r, color.g, color.b);
  return luminance > 0.5; // Light if luminance > 0.5
};

// Custom hook to detect background color
const useBackgroundColor = () => {
  const [isLight, setIsLight] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const checkBackground = useCallback(() => {
    if (!navRef.current) return;

    const navRect = navRef.current.getBoundingClientRect();
    const centerY = navRect.top + navRect.height / 2;
    const centerX = navRect.left + navRect.width / 2;
    const scrollY = window.scrollY;
    const path = window.location.pathname;

    setIsScrolled(scrollY > 50);

    // Route-based detection (most reliable)
    if (path === '/investment-insights') {
      // Investment Insights page has dark primary background
      setIsLight(false);
      return;
    }

    // For home page, check scroll position and element below
    if (path === '/') {
      // Get element directly below navbar
      const elementBelow = document.elementFromPoint(centerX, centerY + navRect.height + 5);
      
      if (elementBelow) {
        // Walk up the DOM tree to find background
        let currentElement: Element | null = elementBelow;
        let depth = 0;
        const maxDepth = 15;

        while (currentElement && depth < maxDepth) {
          const bgColor = getBackgroundColor(currentElement);
          
          if (bgColor) {
            const light = isLightBackground(bgColor);
            setIsLight(light);
            return;
          }
          
          currentElement = currentElement.parentElement;
          depth++;
        }
      }

      // Fallback based on scroll position
      // Hero sections (0-300vh) are dark, content sections are light
      if (scrollY < window.innerHeight * 2.5) {
        // Still in hero section (AppleHero is 300vh)
        setIsLight(false);
      } else {
        // In content sections (light backgrounds)
        setIsLight(true);
      }
    } else {
      // Default: assume light background for other pages
      setIsLight(true);
    }
  }, []);

  useEffect(() => {
    checkBackground();
    
    // Debounce function for performance
    let scrollTimeout: NodeJS.Timeout;
    let resizeTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // Debounce background check
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        checkBackground();
      }, 50);
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        checkBackground();
      }, 100);
    };

    // Throttled scroll handler for immediate scroll position updates
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Check periodically (less frequent for better performance)
    const interval = setInterval(checkBackground, 200);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
      clearTimeout(scrollTimeout);
      clearTimeout(resizeTimeout);
    };
  }, [checkBackground]);

  return { isLight, isScrolled, navRef };
};

const FloatingNav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const { isLight, isScrolled, navRef } = useBackgroundColor();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Determine navbar style based on background
  const shouldUseLightNav = isLight && isScrolled;
  
  // Navbar background styles
  const navBgClass = shouldUseLightNav
    ? 'bg-white/95 backdrop-blur-xl shadow-lg border border-gray-200/50'
    : isScrolled
    ? 'bg-primary/95 backdrop-blur-xl shadow-lg border border-white/10'
    : 'bg-white/10 backdrop-blur-md border border-white/20';

  // Text colors
  const textColor = shouldUseLightNav ? 'text-primary' : 'text-cream';
  const textMuted = shouldUseLightNav ? 'text-gray-700' : 'text-cream/80';
  const iconBg = shouldUseLightNav ? 'bg-accent/10' : 'bg-white/10';

  return (
    <>
      <div 
        className="fixed top-2 sm:top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-3 sm:px-4"
      >
        <motion.nav 
          ref={navRef}
          className="transition-all duration-300 ease-in-out pointer-events-auto opacity-100 w-full"
          style={{ 
            maxWidth: '1280px',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
          }}
          transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        >
        <div 
          className={`flex items-center justify-between px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${navBgClass}`}
        >
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img src="/SPFILogo.png" alt="SPFI Logo" width={70} height={60} />
      </Link>
      
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center mx-4 xl:mx-8 min-w-0">
            <Link 
              to="/"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive('/')
                  ? shouldUseLightNav
                    ? 'bg-accent/10 text-accent' 
                    : 'bg-white/20 text-cream'
                  : shouldUseLightNav
                    ? `${textMuted} hover:bg-gray-100`
                    : 'text-cream/80 hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/investment-insights"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive('/investment-insights')
                  ? shouldUseLightNav
                    ? 'bg-accent/10 text-accent' 
                    : 'bg-white/20 text-cream'
                  : shouldUseLightNav
                    ? `${textMuted} hover:bg-gray-100`
                    : 'text-cream/80 hover:bg-white/10'
              }`}
            >
              Investment Insights
            </Link>
            <a 
              href="#concierge"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                shouldUseLightNav
                  ? `${textMuted} hover:bg-gray-100`
                  : 'text-cream/80 hover:bg-white/10'
              }`}
            >
              Concierge
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Register Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`hidden sm:flex items-center justify-center h-9 sm:h-10 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                shouldUseLightNav
                  ? 'bg-accent hover:bg-[#d4b06d] text-primary shadow-md'
                  : 'bg-accent/90 hover:bg-accent text-primary shadow-lg'
              }`}
            >
              Register
            </motion.button>

            {/* User Menu Button - Hidden on mobile */}
            <button 
              className={`hidden md:flex items-center gap-2 h-9 sm:h-10 px-2 sm:px-3 rounded-full transition-all ${
                shouldUseLightNav
                  ? 'bg-white hover:bg-gray-50 border border-gray-200 shadow-sm'
                  : 'bg-white/10 hover:bg-white/20 border border-white/20'
              }`}
            >
              <span className={`material-symbols-outlined text-base sm:text-lg transition-colors duration-300 ${
                shouldUseLightNav ? 'text-gray-700' : 'text-cream'
              }`}>menu</span>
              <span className={`material-symbols-outlined text-base sm:text-lg transition-colors duration-300 ${
                shouldUseLightNav ? 'text-gray-700' : 'text-cream'
              }`}>account_circle</span>
            </button>

            {/* Mobile Menu Toggle - Only visible on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden flex items-center justify-center h-9 sm:h-10 w-9 sm:w-10 rounded-full transition-all flex-shrink-0 ${
                shouldUseLightNav
                  ? 'bg-white hover:bg-gray-50 border border-gray-200'
                  : 'bg-white/10 hover:bg-white/20 border border-white/20'
              }`}
              aria-label="Toggle mobile menu"
            >
              <span className={`material-symbols-outlined text-lg sm:text-xl transition-colors duration-300 ${
                shouldUseLightNav ? 'text-gray-700' : 'text-cream'
              }`}>
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
        </motion.nav>
      </div>

      {/* Mobile Menu - Only visible on mobile */}
      <div className="fixed top-16 sm:top-20 left-0 right-0 z-40 flex justify-center pointer-events-none px-3 sm:px-4 md:hidden">
        <motion.div 
          className={`pointer-events-auto ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
          style={{
            width: '100%',
            maxWidth: 'calc(100% - 1.5rem)',
          }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -10
        }}
        transition={{ duration: 0.2 }}
      >
        <div className={`${shouldUseLightNav ? 'bg-white/95' : 'bg-primary/95'} backdrop-blur-xl rounded-2xl shadow-xl border ${shouldUseLightNav ? 'border-gray-200/50' : 'border-white/10'} p-4`}>
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive('/')
                  ? 'bg-accent/10 text-accent'
                  : shouldUseLightNav ? 'text-gray-700 hover:bg-gray-100' : 'text-cream hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link
              to="/investment-insights"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive('/investment-insights')
                  ? 'bg-accent/10 text-accent'
                  : shouldUseLightNav ? 'text-gray-700 hover:bg-gray-100' : 'text-cream hover:bg-white/10'
              }`}
            >
              Investment Insights
            </Link>
            <a
              href="#concierge"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                shouldUseLightNav ? 'text-gray-700 hover:bg-gray-100' : 'text-cream hover:bg-white/10'
              }`}
            >
              Concierge
            </a>
            <button 
              className="mt-2 px-4 py-3 rounded-xl bg-accent hover:bg-[#d4b06d] text-primary text-sm font-semibold transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register
            </button>
          </div>
        </div>
        </motion.div>
      </div>
    </>
  );
};

export default FloatingNav;
