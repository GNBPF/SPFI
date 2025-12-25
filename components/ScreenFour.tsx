import React from 'react';

const ScreenFour: React.FC = () => {
  return (
    <div className="font-manrope bg-cream text-primary overflow-x-hidden pt-20">
      
      {/* Main Split Layout */}
      <main className="relative w-full min-h-screen flex flex-col lg:flex-row">
        {/* Left Visual Panel */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear group-hover:scale-110" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_yM7ywn5BCYQzanprzBcZZsPKPc-G8Sd0Pc8OLNaZB_TaGMNIQSC5bWvkgyr5L69Yk4tciWKvDSF4evpihUMxvHbgi1VcVJu12BeRs8BDKvonvx_yR5wG_be1TywAY6ERFnJ88uboKLTc_uwH-iYWSk2_3YiQCXjD1sqQ8OMqb3em_R6lWOl7e6lRq29bxpf6A5ktSLyQ9VpABN-LJqg19-fbW2Jz7nBHBknjl38bRKRO_5MA4-ZS5Pxf9dcn3dU_LwwcDEjWHpNQ')" }}
          >
          </div>
          {/* Gradient Overlay for cinematic feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-primary/20"></div>
          <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 text-cream max-w-md">
            <div className="flex items-center gap-2 mb-2 opacity-80">
              <span className="material-symbols-outlined text-accent text-xl">location_on</span>
              <span className="text-sm font-medium tracking-widest uppercase">Udaipur, Rajasthan</span>
            </div>
          </div>
        </div>

        {/* Right Content Panel */}
        <div className="w-full lg:w-1/2 bg-cream relative flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24 xl:px-32">
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 opacity-40 pointer-events-none bg-paper-texture mix-blend-multiply"></div>
          
          <div className="relative z-10 flex flex-col gap-8">
            {/* Section Header */}
            <div className="flex flex-col gap-4">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">The Investment Landscape</span>
              <h1 className="text-primary text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Heritage Meets <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#8f6e30]">High Yield</span>: <br/>
                The India Story.
              </h1>
            </div>

            {/* Decorative Separator */}
            <div className="w-24 h-[2px] bg-accent/40"></div>

            {/* Body Copy */}
            <div className="flex flex-col gap-6 text-primary/80">
              <p className="text-lg font-medium leading-relaxed">
                Beyond the emotional resonance of returning to your roots lies an undeniable economic truth: India is rising.
              </p>
              <p className="text-base font-light leading-relaxed text-primary/70">
                The convergence of world-class infrastructure, regulatory transparency, and a booming digital economy has created a perfect storm for wealth creation. Own a piece of the legacy while securing a high-yield asset for generations to come. This is not just real estate; it is a sovereignty of space.
              </p>
            </div>

            {/* Stats/Features Mini-Grid */}
            <div className="grid grid-cols-2 gap-6 mt-4 border-t border-primary/10 pt-8">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-primary">7.2%</span>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">GDP Growth Forecast</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-primary">~12%</span>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Avg. Rental Yield (Commercial)</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-primary uppercase tracking-widest border border-primary overflow-hidden transition-all hover:text-cream">
                <span className="absolute inset-0 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center gap-2">
                  Request Expo Invitation
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </span>
              </button>
              <p className="mt-4 text-xs text-primary/50 italic font-serif">Limited invitations available for the Dubai expo.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Additional Feature Strip (Why Now?) */}
      <section className="bg-white py-20 px-6 lg:px-12 border-t border-primary/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4 p-6 border-l border-accent/30 hover:border-accent transition-colors duration-300">
              <div className="size-12 rounded-full bg-cream flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="text-xl font-bold text-primary">Economic Surge</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                India is poised to become the world's third-largest economy by 2030, driving property values in key metros.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col gap-4 p-6 border-l border-accent/30 hover:border-accent transition-colors duration-300">
              <div className="size-12 rounded-full bg-cream flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined">gavel</span>
              </div>
              <h3 className="text-xl font-bold text-primary">Regulatory Clarity</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                RERA implementation has brought unprecedented transparency and security to NRI investments.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col gap-4 p-6 border-l border-accent/30 hover:border-accent transition-colors duration-300">
              <div className="size-12 rounded-full bg-cream flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined">diamond</span>
              </div>
              <h3 className="text-xl font-bold text-primary">Lifestyle &amp; Luxury</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                A new era of ultra-luxury developments matching global standards of living and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScreenFour;