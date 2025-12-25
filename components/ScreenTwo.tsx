import React from 'react';

const ScreenTwo: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-cream font-display text-primary selection:bg-accent selection:text-white overflow-hidden">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-in-out hover:scale-105" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMO8FkFCRjk2GMm30Gf1cJMEOyVcVND2EaBamemDpJZ1uxfNLFkral5DCarFgDM5uNSljYbp82mGAjr2WtkiJAVOA0HS4XUtOk4ZCQJbQomgH9fu0-toJj1_8ycHqw30UI-JTr1_P-yhTS1Gp7Q0cQ3-xDo41SRV01EXA_ywPVNK-UedGOwQju2x65rrK_nhoBXQDL7KBaJag746yFIkR5tqbtE1rBmCVC0m_I-leY9KQPqmoo4nNBBb0eUXaf7AEBp2D5jo6YOHEk')" }}
        />
        {/* Light Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/20 to-cream/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-cream/10" />
      </div>

      <div className="relative z-10 flex h-full grow flex-col pt-20">
        
        {/* Content */}
        <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center md:px-20">
          <div className="relative max-w-4xl space-y-8 p-8 md:p-12">
             <div className="mx-auto h-16 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-primary animate-fade-in" />
             
             <div className="space-y-4">
                <h2 className="animate-fade-in [animation-delay:100ms] opacity-0 text-base font-medium uppercase tracking-[0.2em] text-accent md:text-lg">
                  Dubai 2024
                </h2>
                <h1 className="animate-fade-in [animation-delay:300ms] opacity-0 font-display text-5xl font-black leading-tight tracking-tight text-primary md:text-7xl lg:text-8xl drop-shadow-sm">
                  Sovereign Property <br />
                  <span className="italic font-light text-primary/90">Festival India</span>
                </h1>
                <p className="animate-fade-in [animation-delay:300ms] opacity-0 mx-auto max-w-lg font-display text-xl italic leading-relaxed text-primary/80 md:text-2xl">
                   Your Gateway to <span className="text-accent underline decoration-accent/30 underline-offset-4">Wealth</span> &amp; Legacy.
                </p>
             </div>

             <div className="animate-fade-in [animation-delay:500ms] opacity-0 pt-8">
                <button className="group relative mx-auto flex min-w-[280px] cursor-pointer items-center justify-between gap-4 overflow-hidden rounded-xl border border-primary/10 bg-white/40 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:border-accent hover:bg-white/80 hover:shadow-xl hover:shadow-accent/10">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Private Access</span>
                    <span className="font-display text-lg font-bold text-primary">Request Invitation</span>
                  </div>
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary text-cream transition-transform duration-500 group-hover:rotate-45 group-hover:bg-accent">
                    <span className="material-symbols-outlined text-xl">arrow_outward</span>
                  </div>
                </button>
             </div>
          </div>
        </main>

        {/* Local Footer (Scroll Indicator etc) */}
        <footer className="w-full pb-8">
           <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12 lg:px-20 animate-fade-in [animation-delay:500ms] opacity-0">
             
             <div className="flex items-center gap-4 text-primary/80">
               <div className="flex items-center gap-2 rounded-full bg-white/30 px-4 py-2 backdrop-blur-sm border border-white/50">
                 <span className="material-symbols-outlined text-lg">location_on</span>
                 <span className="text-xs font-semibold tracking-wide uppercase">Jumeirah Beach Hotel</span>
               </div>
               <div className="hidden h-1 w-1 rounded-full bg-primary/40 md:block"></div>
               <span className="hidden text-xs font-semibold tracking-wide uppercase md:block">November 2024</span>
             </div>

             <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
               <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Scroll</span>
               <div className="h-12 w-[1px] bg-gradient-to-b from-primary/20 to-primary"></div>
             </div>

             <div className="flex items-center gap-6">
                <a href="#" className="text-xs font-bold uppercase tracking-widest text-primary/60 hover:text-primary transition-colors">Exhibitors</a>
                <a href="#" className="text-xs font-bold uppercase tracking-widest text-primary/60 hover:text-primary transition-colors">Contact</a>
             </div>

           </div>
        </footer>

      </div>
    </div>
  );
};

export default ScreenTwo;