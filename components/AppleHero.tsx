import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AppleHeroGSAP: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const scrollButtonRef = useRef<HTMLButtonElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const currentSceneRef = useRef<1 | 2 | 3 | null>(1);
  const [currentScene, setCurrentScene] = React.useState<1 | 2 | 3 | null>(1);

  useLayoutEffect(() => {
    if (!containerRef.current || !stageRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(".s1-scene", { opacity: 1, zIndex: 3 });
      gsap.set(".s2-scene", { opacity: 0, zIndex: 2 });
      gsap.set(".s3-scene", { opacity: 0, zIndex: 1 });
      
      // Scene 1 has no text
      gsap.set(".s2-text", { opacity: 0, y: 80, filter: "blur(20px)" });
      gsap.set(".s3-text", { opacity: 0, y: 80, filter: "blur(20px)" });
      
      // Set initial state for black fade layer
      gsap.set(".fade-layer", { opacity: 0 });

      const tl = gsap.timeline();

      const scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=700%",
        scrub: 0.8,
        pin: stageRef.current,
        anticipatePin: 1,
        markers: false,
        animation: tl,
        onUpdate: (self) => {
          // Update current scene based on progress
          const progress = self.progress;
          let newScene: 1 | 2 | 3 | null = null;
          
          if (progress < 0.35) {
            newScene = 1;
          } else if (progress < 0.65) {
            newScene = 2;
          } else if (progress < 0.97) {
            newScene = 3;
          } else {
            newScene = null; // Past hero section
          }
          
          // Update both ref and state
          if (currentSceneRef.current !== newScene) {
            currentSceneRef.current = newScene;
            setCurrentScene(newScene);
          }
        },
        snap: {
          snapTo: (value) => {
            // Allow free scroll exit at very end
            if (value > 0.97) return value;

            // Get labels from timeline
            const labels = [
              tl.labels.scene1,
              tl.labels.scene2,
              tl.labels.scene3,
            ].filter((label): label is number => label !== undefined);

            if (labels.length === 0) return value;

            let closest = labels[0];
            let minDiff = Math.abs(value - closest);

            labels.forEach((label) => {
              const diff = Math.abs(value - label);
              if (diff < minDiff) {
                minDiff = diff;
                closest = label;
              }
            });

            return closest;
          },
          duration: 0.35,
          delay: 0.05,
          ease: "power3.out",
          inertia: false,
        },
      });
      
      // Store references
      scrollTriggerRef.current = scrollTrigger;
      timelineRef.current = tl;

      /* ----------------------------------
         SCENE 1 FULL
      ---------------------------------- */
      tl.addLabel("scene1", 0);
      tl.to({}, { duration: 0.30 });

      /* ----------------------------------
         TRANSITION 1 → 2
      ---------------------------------- */
      
      // Black fade layer during transition
      tl.to(".fade-layer", { opacity: 0.35, duration: 0.05 }, "<");
      
      // Smooth fade out Scene 1
      tl.to(".s1-scene", {
        opacity: 0,
        duration: 0.10,
        ease: "power3.out",
      });

      // Smooth fade in Scene 2
      tl.to(".s2-scene", {
        opacity: 1,
        zIndex: 3,
        duration: 0.10,
        ease: "power3.in",
      }, "<0.03");

      tl.to(".s2-text", {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.10,
        ease: "power3.out",
      }, "<");
      
      // Fade out black layer
      tl.to(".fade-layer", { opacity: 0, duration: 0.08 }, "<");

      /* ----------------------------------
         SCENE 2 FULL
      ---------------------------------- */
      tl.addLabel("scene2");
      tl.to({}, { duration: 0.20 });

      /* ----------------------------------
         TRANSITION 2 → 3
      ---------------------------------- */
      
      // Black fade layer during transition
      tl.to(".fade-layer", { opacity: 0.35, duration: 0.05 }, "<");
      
      // Smooth fade out Scene 2
      tl.to(".s2-scene", {
        opacity: 0,
        zIndex: 2,
        duration: 0.10,
        ease: "power3.out",
      });

      tl.to(".s2-text", {
        y: -60,
        opacity: 0,
        filter: "blur(15px)",
        duration: 0.10,
        ease: "power3.out",
      }, "<");

      // Smooth fade in Scene 3
      tl.to(".s3-scene", {
        opacity: 1,
        zIndex: 3,
        duration: 0.10,
        ease: "power3.in",
      }, "<0.03");

      tl.to(".s3-text", {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.10,
        ease: "power3.out",
      }, "<");
      
      // Fade out black layer
      tl.to(".fade-layer", { opacity: 0, duration: 0.08 }, "<");

      /* ----------------------------------
         SCENE 3 FULL
      ---------------------------------- */
      tl.addLabel("scene3");
      tl.to({}, { duration: 0.30 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToNext = () => {
    const scrollTrigger = scrollTriggerRef.current;
    const tl = timelineRef.current;
    const scene = currentSceneRef.current;
    
    if (!scrollTrigger || !tl) return;

    let nextLabel: number | null = null;

    if (scene === 1) {
      nextLabel = tl.labels.scene2;
    } else if (scene === 2) {
      nextLabel = tl.labels.scene3;
    } else if (scene === 3) {
      // Scroll past hero section
      const heroEnd = scrollTrigger.end;
      window.scrollTo({
        top: heroEnd,
        behavior: 'smooth',
      });
      return;
    }

    if (nextLabel !== null && nextLabel !== undefined) {
      // Calculate scroll position for the label
      const progress = nextLabel;
      const scrollDistance = scrollTrigger.end - scrollTrigger.start;
      const targetScroll = scrollTrigger.start + (progress * scrollDistance);
      
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={containerRef} className="relative h-[700vh] w-full z-0">
      {/* PINNED STAGE */}
      <div
        ref={stageRef}
        className="sticky top-0 h-screen w-full overflow-hidden z-0"
      >
        {/* Cinematic Black Fade Layer */}
        <div className="fade-layer absolute inset-0 bg-black pointer-events-none z-[999]" />
        
        {/* Floating Scroll Button - Visible on all scenes */}
        {currentScene !== null && (
          <button
            ref={scrollButtonRef}
            onClick={handleScrollToNext}
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-[1000] flex flex-col items-center gap-1.5 sm:gap-2 group transition-opacity duration-300 hover:opacity-80 active:opacity-60"
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
        )}
        {/* ================= SCENE 1 ================= */}
        <div className="s1-scene absolute inset-0 bg-primary text-cream" style={{ zIndex: 3 }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/Hero/screen1.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Scene 1 - No text, just image */}
        </div>

        {/* ================= SCENE 2 ================= */}
        <div className="s2-scene absolute inset-0 bg-primary text-cream" style={{ zIndex: 2, opacity: 0 }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/Hero/screen2.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="s2-text opacity-0 text-center max-w-4xl px-6">
              <h1 className="text-5xl md:text-7xl font-light italic text-cream">
                Spectrum Property
                <br />
                <span className="not-italic text-accent">
                  Festival India
                </span>
              </h1>
              <p className="mt-6 text-sm tracking-wide text-cream/90">
                Where Indian Real Estate Meets Global Capital
                <br />16–17 May 2026 · Dubai
              </p>
            </div>
          </div>
        </div>

        {/* ================= SCENE 3 ================= */}
        <div className="s3-scene absolute inset-0 bg-primary text-white" style={{ zIndex: 1, opacity: 0 }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/Hero/screen3.png')",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="s3-text opacity-0 text-center max-w-4xl px-6">
              <h1 className="text-4xl md:text-6xl font-light">
                Experience the
                <br />
                <span className="italic font-medium">
                  Difference
                </span>
              </h1>
              <p className="mt-6 max-w-xl mx-auto text-white/80">
                Discover legacy estates and high-yield Indian assets curated
                for global investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleHeroGSAP;
