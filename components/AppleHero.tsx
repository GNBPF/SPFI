import React, { useState, useEffect } from "react";

const AppleHeroGSAP: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const SLIDE_DURATION = 10000; // 10 seconds
  const TOTAL_SLIDES = 3;

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % TOTAL_SLIDES);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* SCENE 1 */}
      <section 
        className={`absolute inset-0 h-full w-full flex items-center justify-center transition-opacity duration-1000 ${
          activeSlide === 0 ? 'opacity-100 z-30' : 'opacity-0 z-10'
        }`}
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
        className={`absolute inset-0 h-full w-full flex items-center justify-center transition-opacity duration-1000 ${
          activeSlide === 1 ? 'opacity-100 z-30' : 'opacity-0 z-10'
        }`}
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
        className={`absolute inset-0 h-full w-full flex items-center justify-center transition-opacity duration-1000 ${
          activeSlide === 2 ? 'opacity-100 z-30' : 'opacity-0 z-10'
        }`}
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

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex items-center gap-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              activeSlide === index
                ? 'w-6 h-1.5 bg-white'
                : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/70'
            }`}
            style={{
              minWidth: activeSlide === index ? '24px' : '6px',
              minHeight: '6px'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AppleHeroGSAP;
