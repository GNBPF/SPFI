import React from 'react';

const ScreenOne: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-primary font-display text-cream">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear transform scale-105" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-SKq7fS8ti3-BqBTVktKoAY2_VDLXylkzh2cQ_Qn0j8puCe8ZMWoNnMz748Dtd4X5tKaGwHjCTAP4GMrsP2betJ8y9MccB8u8pUmW6Gk2_Kq1--vgd7Dik68Vqx4Uk-NCQtudTJV5TZBMYQLMhkPmoNFEmdTGO6lY9GFGkZ4jfDS1ignjZ9auyAQRrnYfKuitwv7TnAKOG1-rm_R62ZuGlVU1-Q_tA0RaK4_bi-pn-j9AptebCPDTZ5RyM0QbTXlXY6YNvL4NEuUp')" 
          }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col justify-between pt-20">
        
        {/* Hero Body */}
        <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <div className="max-w-4xl space-y-8">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic leading-tight tracking-tight text-cream drop-shadow-lg animate-fade-in-up [animation-delay:300ms] opacity-0">
              Welcome Home <br />
              <span className="not-italic text-accent/90 font-normal">to Your Wealth</span>
            </h1>
            
            <p className="mx-auto max-w-lg font-sans text-sm md:text-base font-light leading-relaxed tracking-wide text-cream/90 animate-fade-in-up [animation-delay:500ms] opacity-0">
              A curation of India's finest estates for the sovereign investor. <br className="hidden md:block" />
              Experience the legacy of high-yield assets.
            </p>

            <div className="pt-4 animate-fade-in-up [animation-delay:700ms] opacity-0">
              <button className="group relative inline-flex min-w-[200px] items-center justify-center gap-3 overflow-hidden rounded-md px-8 py-4 transition-all duration-500">
                <div className="absolute inset-0 border border-accent/60 transition-all duration-500 group-hover:border-accent group-hover:bg-accent/10" />
                <span className="relative text-sm font-medium uppercase tracking-[0.2em] text-cream transition-colors duration-300 group-hover:text-white">
                  Request Private Access
                </span>
                <span className="material-symbols-outlined relative text-accent transition-transform duration-500 group-hover:translate-x-1 group-hover:text-white text-lg">
                  arrow_right_alt
                </span>
              </button>
            </div>
          </div>
        </main>

        {/* Footer info (Location/Scroll) - kept as "hero footer" not main app footer */}
        <footer className="w-full px-6 pb-8 md:px-12 lg:px-16 animate-fade-in-up [animation-delay:1000ms] opacity-0">
          <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-end justify-between gap-6">
            
            {/* Location Badge */}
            <div className="flex items-center gap-4 order-2 md:order-1">
              <div className="flex items-center gap-3 rounded-md px-4 py-3 border border-white/10 bg-[#0e392f]/40 backdrop-blur-md">
                <span className="material-symbols-outlined text-accent text-xl">location_on</span>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-cream">Dubai Opera House</span>
                  <span className="text-[10px] font-light tracking-wide text-cream/70">October 24-26, 2024</span>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer hidden md:flex">
              <span className="text-[10px] uppercase tracking-[0.3em] text-cream/80">Scroll to Discover</span>
              <div className="h-12 w-[1px] bg-gradient-to-b from-accent to-transparent" />
            </div>

            {/* Links */}
            <div className="flex gap-6 order-1 md:order-3">
              <a href="#" className="text-cream/60 hover:text-accent transition-colors text-xs font-medium uppercase tracking-widest">Inquiries</a>
              <a href="#" className="text-cream/60 hover:text-accent transition-colors text-xs font-medium uppercase tracking-widest">Press</a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default ScreenOne;