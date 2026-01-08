import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Crucial: Register the plugin outside the component
gsap.registerPlugin(ScrollTrigger);

const AppleHeroGSAP: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scene1Ref = useRef<HTMLDivElement>(null);
  const scene2Ref = useRef<HTMLDivElement>(null);
  const scene3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Create GSAP Context to handle React cleanup automatically
    const ctx = gsap.context(() => {
      
      // Master Timeline for pinning and fading
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // The scroll distance (3 screens worth)
          scrub: 1,      // Smooth transition
          pin: true,     // This stops the page from moving
          anticipatePin: 1,
        },
      });

      // Step 1: Fade Scene 1 out while Scene 2 comes in
      tl.to(scene1Ref.current, { opacity: 0, ease: "none" }, 0)
        .fromTo(scene2Ref.current, { opacity: 0 }, { opacity: 1, ease: "none" }, 0);

      // Step 2: Fade Scene 2 out while Scene 3 comes in
      tl.to(scene2Ref.current, { opacity: 0, ease: "none" }, 1)
        .fromTo(scene3Ref.current, { opacity: 0 }, { opacity: 1, ease: "none" }, 1);

    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    /* Main Container: Needs bg-black so there is never a white screen */
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
      
      {/* SCENE 1 */}
      <section 
        ref={scene1Ref}
        className="absolute inset-0 h-full w-full flex items-center justify-center z-30"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
          style={{ backgroundImage: "url('/Hero/screen1.webp')" }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 text-center max-w-5xl px-3 min-[320px]:px-4 sm:px-6">
          <div className="mb-4 min-[320px]:mb-5 sm:mb-6 flex justify-center">
            <img 
              src="/logoLight.png" 
              alt="Spectrum" 
              className="h-12 min-[320px]:h-14 sm:h-16 md:h-24 lg:h-32 w-auto object-contain drop-shadow-2xl max-w-[90vw]"
            />
          </div>
          <div className="relative inline-block mb-3 min-[320px]:mb-4">
            <p className="text-sm min-[320px]:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-white tracking-wider px-2">
              <span className="font-medium">16–17 May 2026</span>
              <span className="mx-2 min-[320px]:mx-3 opacity-50">·</span>
              <span className="font-medium">Dubai</span>
            </p>
          </div>
          <p className="text-xs min-[320px]:text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
            Calling all NRIs in Dubai: Discover India's finest real estate.
          </p>
        </div>
      </section>

      {/* SCENE 2 */}
      <section 
        ref={scene2Ref}
        className="absolute inset-0 h-full w-full flex items-center justify-center z-20 opacity-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Hero/screen2.png')" }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        <div className="relative z-20 text-center max-w-4xl px-3 min-[320px]:px-4 sm:px-6">
          <h1 className="text-2xl min-[320px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light italic text-white drop-shadow-2xl leading-tight px-2">
            Spectrum Property<br />
            <span className="not-italic text-[#C5A059] font-semibold">Festival India</span>
          </h1>
          <p className="mt-4 min-[320px]:mt-5 sm:mt-6 text-xs min-[320px]:text-sm sm:text-base md:text-lg text-white font-medium tracking-wide px-2">
            Where Indian Real Estate Meets Global Capital
          </p>
        </div>
      </section>

      {/* SCENE 3 */}
      <section 
        ref={scene3Ref}
        className="absolute inset-0 h-full w-full flex items-center justify-center z-10 opacity-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Hero/screen3.png')" }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <div className="relative z-20 text-center max-w-4xl px-3 min-[320px]:px-4 sm:px-6">
          <h1 className="text-2xl min-[320px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white drop-shadow-2xl leading-tight px-2">
            Experience the <span className="italic font-medium text-[#C5A059]">Difference</span>
          </h1>
          <p className="mt-4 min-[320px]:mt-5 sm:mt-6 max-w-xl mx-auto text-white/80 text-xs min-[320px]:text-sm sm:text-base md:text-lg px-2 leading-relaxed">
            Discover legacy estates and high-yield Indian assets curated for global investors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AppleHeroGSAP;