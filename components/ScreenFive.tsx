import React from 'react';

const ScreenFive: React.FC = () => {
  return (
    <div className="bg-[#1e1a14] text-white font-display antialiased w-full min-h-full flex flex-col pt-20">
      {/* Main Content Section */}
      <main className="flex flex-col grow">
        
        {/* Headline Section */}
        <div className="w-full px-4 md:px-20 pt-12 pb-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-4">
            <span className="material-symbols-outlined text-sm">diamond</span>
            Section 5 • Logic
          </div>
          <h1 className="text-white tracking-tight text-3xl md:text-5xl lg:text-[56px] font-light leading-tight max-w-4xl">
            The Asset Class: <span className="font-bold text-accent">Unmatched Luxury</span>
          </h1>
          <p className="mt-4 text-white/60 max-w-2xl text-base md:text-lg font-light">
            Explore spaces designed for high-yield returns and uncompromising living standards. Swipe to view the gallery.
          </p>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="relative w-full flex-1 flex flex-col justify-center py-6 min-h-[400px]">
          {/* Navigation Hints */}
          <div className="absolute top-1/2 left-4 md:left-8 z-10 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur text-white/50 hidden md:flex items-center justify-center border border-white/10">
            <span className="material-symbols-outlined">chevron_left</span>
          </div>
          <div className="absolute top-1/2 right-4 md:right-8 z-10 -translate-y-1/2 p-2 rounded-full bg-black/40 backdrop-blur text-white/50 hidden md:flex items-center justify-center border border-white/10">
            <span className="material-symbols-outlined">chevron_right</span>
          </div>

          {/* Scroll Container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:px-[calc(50vw-400px)] pb-8 no-scrollbar w-full items-center">
            
            {/* Card 1: Living Area */}
            <div className="relative shrink-0 snap-center w-[85vw] md:w-[800px] aspect-[4/3] md:aspect-[21/9] rounded-lg overflow-hidden group border border-white/10 shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkaZ8Bsno5mETdcqoxRqIA_asHwHXewiw8TyOB9bjzWNgbfv1YnzowzjOK5jUtcQOHd9DKzcaG1z_HTCCJaENM44-RX74chYl2TOXnQD9Vgt45EWKWNsZU7R-eBXDIGF0V5xaaza8IPcbebwJMt1nwkpkVV6qEe41gDy3bZ3snQILiSr4zcriB4IDUcTiC7CzBNUC6cde4uxUfeRuIHFr1ZjHKzxq2GDj5--nDJrOkBwReOKyZ1e0rD7afGp90YnUnD_9wlaXBhCIt')" }}
              >
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full flex justify-between items-end">
                <div>
                  <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">01 / Logic</p>
                  <h3 className="text-white text-2xl md:text-4xl font-light">Expansive Living</h3>
                </div>
                <button className="hidden md:flex items-center justify-center size-12 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-accent hover:border-accent hover:text-primary transition-all group-hover:translate-x-2">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 2: Master Bedroom */}
            <div className="relative shrink-0 snap-center w-[85vw] md:w-[800px] aspect-[4/3] md:aspect-[21/9] rounded-lg overflow-hidden group border border-white/10 shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA9evTIpkLOb30EBhO6lhF47tnVRKgwcpvVLd434h0qCvLGoa1pDMSSeLCV1yDQt6mZPPxJ8XNpgpyhTFDUlZB7NnqvZ3cJvYS-PML7S42YjB4OeoK11CWAYrRqk-mFuyqdjZViflM-lbxyXMmsMzJGsu0j2qHwpeFCe8A9HODsvFv-QazOMw3HWn365qk8kvT2TYZ0gdRVyLFSLrOoxVPVOzNkFZfIFw7z2dNQ3lnez-Jb9-e9pPlsXXLDYAZwI-8Lwibho7plWRwK')" }}
              >
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full flex justify-between items-end">
                <div>
                  <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">02 / Logic</p>
                  <h3 className="text-white text-2xl md:text-4xl font-light">Serene Suites</h3>
                </div>
                <button className="hidden md:flex items-center justify-center size-12 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-accent hover:border-accent hover:text-primary transition-all group-hover:translate-x-2">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 3: Pool Deck */}
            <div className="relative shrink-0 snap-center w-[85vw] md:w-[800px] aspect-[4/3] md:aspect-[21/9] rounded-lg overflow-hidden group border border-white/10 shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqX97KGzUmbCZL7AXtOsaxVOYaPb-lH00PPSZ5mG3jpye4ixQJ6tFH1j8vDVyYKIr4YtPG173oH1-QUY_g5g4T_8FlseBdtpQzCWrOdCJpHFZIP4ntGmPchfOH-13y2soMdF8kd1NXNIzkDYjt1R3DCX_dggzZS3qW4e_VgDyU5YzI6tCQL1bfvaARI1CLbXU_4Z5GMY1KzZLZ7KjgKCWTdp84XIFueSbICCtpt5HBxPY8MYPqUwn20EzsVny9KdStY_L_upsnX6kv')" }}
              >
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full flex justify-between items-end">
                <div>
                  <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">03 / Logic</p>
                  <h3 className="text-white text-2xl md:text-4xl font-light">Private Leisure</h3>
                </div>
                <button className="hidden md:flex items-center justify-center size-12 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-accent hover:border-accent hover:text-primary transition-all group-hover:translate-x-2">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full flex justify-center mt-2 mb-8">
            <div className="flex gap-2">
              <div className="h-1 w-12 bg-accent rounded-full"></div>
              <div className="h-1 w-12 bg-white/10 rounded-full"></div>
              <div className="h-1 w-12 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* The Power Strip */}
        <div className="relative w-full z-20">
          {/* Decorative top glow */}
          <div className="absolute -top-20 left-0 w-full h-20 bg-gradient-to-t from-[#1e1a14] to-transparent pointer-events-none"></div>
          <div className="bg-accent w-full py-10 md:py-12 px-6 md:px-20 shadow-[0_-10px_40px_rgba(197,159,89,0.15)] rounded-t-lg md:rounded-none">
            <div className="max-w-[1280px] mx-auto">
              <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between items-center md:items-start divide-y md:divide-y-0 md:divide-x divide-primary/20">
                {/* Stat 1 */}
                <div className="flex-1 flex flex-col items-center md:items-start px-4 w-full text-center md:text-left pt-4 md:pt-0">
                  <div className="flex items-center gap-2 mb-1 text-primary/80">
                    <span className="material-symbols-outlined text-xl">trending_up</span>
                    <span className="text-sm font-semibold uppercase tracking-wider">ROI Potential</span>
                  </div>
                  <p className="text-primary text-4xl md:text-5xl font-extrabold tracking-tight">12-15%</p>
                  <p className="text-primary/90 text-lg font-medium mt-1">Projected Annual Yield</p>
                </div>
                {/* Stat 2 */}
                <div className="flex-1 flex flex-col items-center md:items-start px-4 w-full text-center md:text-left pt-8 md:pt-0">
                  <div className="flex items-center gap-2 mb-1 text-primary/80">
                    <span className="material-symbols-outlined text-xl">verified_user</span>
                    <span className="text-sm font-semibold uppercase tracking-wider">Ownership</span>
                  </div>
                  <p className="text-primary text-4xl md:text-5xl font-extrabold tracking-tight">100%</p>
                  <p className="text-primary/90 text-lg font-medium mt-1">Freehold Ownership</p>
                </div>
                {/* Stat 3 */}
                <div className="flex-1 flex flex-col items-center md:items-start px-4 w-full text-center md:text-left pt-8 md:pt-0">
                  <div className="flex items-center gap-2 mb-1 text-primary/80">
                    <span className="material-symbols-outlined text-xl">handyman</span>
                    <span className="text-sm font-semibold uppercase tracking-wider">Management</span>
                  </div>
                  <p className="text-primary text-4xl md:text-5xl font-extrabold tracking-tight">Zero</p>
                  <p className="text-primary/90 text-lg font-medium mt-1">Maintenance Hassle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScreenFive;