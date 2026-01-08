import React, { useState, useEffect, useRef } from "react";

const AppleHeroGSAP: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentScene, setCurrentScene] = useState<1 | 2 | 3>(1);
  const [scene1Opacity, setScene1Opacity] = useState(1);
  const [scene2Opacity, setScene2Opacity] = useState(0);
  const [scene3Opacity, setScene3Opacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the hero section (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, (scrollY - containerTop + windowHeight) / containerHeight));
      
      // Smooth transitions between scenes
      // Scene 1: visible from 0 to 0.33, fades out from 0.33 to 0.4
      // Scene 2: fades in from 0.3 to 0.4, visible from 0.4 to 0.66, fades out from 0.66 to 0.73
      // Scene 3: fades in from 0.63 to 0.73, visible from 0.73 to 1
      
      if (scrollProgress < 0.3) {
        setScene1Opacity(1);
        setScene2Opacity(0);
        setScene3Opacity(0);
        setCurrentScene(1);
      } else if (scrollProgress < 0.4) {
        // Transition from scene 1 to 2
        const fadeProgress = (scrollProgress - 0.3) / 0.1;
        setScene1Opacity(1 - fadeProgress);
        setScene2Opacity(fadeProgress);
        setScene3Opacity(0);
        setCurrentScene(2);
      } else if (scrollProgress < 0.63) {
        setScene1Opacity(0);
        setScene2Opacity(1);
        setScene3Opacity(0);
        setCurrentScene(2);
      } else if (scrollProgress < 0.73) {
        // Transition from scene 2 to 3
        const fadeProgress = (scrollProgress - 0.63) / 0.1;
        setScene1Opacity(0);
        setScene2Opacity(1 - fadeProgress);
        setScene3Opacity(fadeProgress);
        setCurrentScene(3);
      } else {
        setScene1Opacity(0);
        setScene2Opacity(0);
        setScene3Opacity(1);
        setCurrentScene(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleScrollToNext = () => {
    if (!containerRef.current) return;

    const containerHeight = containerRef.current.offsetHeight;
    const currentScroll = window.scrollY;
    const containerTop = containerRef.current.offsetTop;
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.max(0, Math.min(1, (currentScroll - containerTop + windowHeight) / containerHeight));

    let targetProgress: number;

    if (scrollProgress < 0.4) {
      // Scroll to scene 2
      targetProgress = 0.5;
    } else if (scrollProgress < 0.73) {
      // Scroll to scene 3
      targetProgress = 0.8;
    } else {
      // Scroll past hero section
      targetProgress = 1;
    }

    const targetScroll = containerTop - windowHeight + containerHeight * targetProgress;

    window.scrollTo({
      top: Math.max(0, targetScroll),
      behavior: 'smooth',
    });
  };

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full z-0">
      {/* SCENE 1 */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-primary text-cream transition-opacity duration-700 ease-in-out"
        style={{
          opacity: scene1Opacity,
          zIndex: scene1Opacity > 0.5 ? 3 : scene2Opacity > 0.5 ? 2 : 1,
          pointerEvents: scene1Opacity > 0.5 ? 'auto' : 'none',
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Hero/screen1.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-20 flex h-full items-center justify-center">
          <div className="text-center max-w-5xl px-6">
            <div className="mb-6 flex justify-center items-center">
              <img 
                src="/logoLight.png" 
                alt="Spectrum Property Festival India" 
                className="h-16 md:h-24 lg:h-32 xl:h-40 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5)) drop-shadow(0 2px 10px rgba(0, 0, 0, 0.3))' }}
              />
            </div>
            <div className="relative inline-block mb-4">
              {/* Background light effect */}
              <div className="absolute inset-0 -inset-x-8 -inset-y-4 bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-2xl opacity-60"></div>
              <div className="absolute inset-0 -inset-x-4 -inset-y-2 bg-accent/10 blur-xl"></div>
              
              {/* Text */}
              <p className="relative text-xl md:text-2xl lg:text-3xl font-light text-cream tracking-wider" style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5), 0 1px 5px rgba(0, 0, 0, 0.3)' }}>
                <span className="text-cream font-medium">16–17 May 2026</span>
                <span className="mx-3 text-cream/40">·</span>
                <span className="text-cream font-medium">Dubai</span>
              </p>
            </div>
            <p className="text-base md:text-lg text-cream/90 max-w-2xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3)' }}>
              Calling all NRIs in Dubai: Discover India's finest real estate opportunities. 
              <br className="hidden md:block" />
              Where heritage meets high-yield returns.
            </p>
          </div>
        </div>
      </div>

      {/* SCENE 2 */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-primary text-cream transition-opacity duration-700 ease-in-out"
        style={{
          opacity: scene2Opacity,
          zIndex: scene2Opacity > 0.5 ? 3 : scene3Opacity > 0.5 ? 2 : 1,
          pointerEvents: scene2Opacity > 0.5 ? 'auto' : 'none',
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Hero/screen2.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl font-light italic text-white" style={{ textShadow: '0 6px 30px rgba(0, 0, 0, 0.8), 0 3px 15px rgba(0, 0, 0, 0.6), 0 0 0 rgba(197, 160, 89, 0.3)' }}>
              Spectrum Property
              <br />
              <span className="not-italic text-accent font-semibold" style={{ 
                textShadow: '0 0 40px rgba(197, 160, 89, 0.8), 0 6px 30px rgba(0, 0, 0, 0.8), 0 3px 15px rgba(0, 0, 0, 0.6)',
                filter: 'drop-shadow(0 0 20px rgba(197, 160, 89, 0.6))'
              }}>
                Festival India
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg tracking-wide text-white font-medium" style={{ 
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.7), 0 2px 10px rgba(0, 0, 0, 0.5)',
              letterSpacing: '0.05em'
            }}>
              <span className="text-accent font-semibold">Where Indian Real Estate Meets Global Capital</span>
              <br />
              <span className="text-white">16–17 May 2026 · Dubai</span>
            </p>
          </div>
        </div>
      </div>

      {/* SCENE 3 */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-primary text-white transition-opacity duration-700 ease-in-out"
        style={{
          opacity: scene3Opacity,
          zIndex: scene3Opacity > 0.5 ? 3 : 2,
          pointerEvents: scene3Opacity > 0.5 ? 'auto' : 'none',
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Hero/screen3.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-4xl md:text-6xl font-light" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.6), 0 2px 10px rgba(0, 0, 0, 0.4)' }}>
              Experience the
              <br />
              <span className="italic font-medium" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.7), 0 2px 10px rgba(0, 0, 0, 0.5)' }}>
                Difference
              </span>
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-white/80" style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.6), 0 1px 5px rgba(0, 0, 0, 0.4)' }}>
              Discover legacy estates and high-yield Indian assets curated
              for global investors.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Scroll Button - Visible on all scenes */}
      <button
        onClick={handleScrollToNext}
        className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-[1000] flex flex-col items-center gap-1.5 sm:gap-2 group transition-opacity duration-300 hover:opacity-80 active:opacity-60"
        aria-label="Scroll to next scene"
      >
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-cream/80 group-hover:text-cream transition-colors">
          {currentScene === 3 ? 'Continue' : 'Scroll'}
        </span>
        <div className="h-10 sm:h-12 w-[1px] bg-gradient-to-b from-accent via-accent/60 to-transparent group-hover:from-accent group-hover:via-accent group-hover:to-transparent transition-all" />
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-accent/60 bg-accent/10 backdrop-blur-sm flex items-center justify-center group-hover:border-accent group-hover:bg-accent/20 transition-all cursor-pointer">
          <span className="material-symbols-outlined text-accent text-xs sm:text-sm group-hover:translate-y-0.5 transition-transform">
            keyboard_arrow_down
          </span>
        </div>
      </button>
    </section>
  );
};

export default AppleHeroGSAP;
