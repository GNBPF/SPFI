import React from 'react';

const ScreenThree: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-primary font-display text-white antialiased overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-b from-[#0e392f]/60 via-[#0e392f]/40 to-[#0e392f]/80 z-10" />
         <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYh44UkCfC3kbfGoEWXeoA6mGfnH_dFzjaNrSRyeYFM3fDqON0RejGMnLZWm2ZoBNDy89hCGV6FuU9X7aybUe_ueJnNsvOkiEEuYRUFSI7e4yGYjtxpccR0Ybd5fadljJdlKetNvacWAnaWhlMnFVcqTxhRoFamLneYdQKku996qybAcNFMXic8i0c-ZLk3rc_12md97chvwT3LJIhCGpIH3LJVCTs8vrca_389GXLOSFCIvX8J1BclF-vdqy5G2U1LL4RWI2fexTU')" }}
         />
      </div>

      <div className="relative z-20 flex h-full grow flex-col justify-between pt-20">
         
         {/* Center Content */}
         <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
            <div className="max-w-4xl space-y-8 animate-fade-in-up [animation-delay:500ms] opacity-0">
               
               <div className="flex items-center justify-center gap-4 text-accent">
                 <span className="h-[1px] w-8 bg-accent"></span>
                 <p className="text-sm font-medium uppercase tracking-[0.25em]">Dubai • October 2024</p>
                 <span className="h-[1px] w-8 bg-accent"></span>
               </div>

               <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-white drop-shadow-md">
                   Experience The <br />
                   <span className="font-medium text-white italic">Sovereign Difference</span> <br />
                   in India
               </h1>

               <p className="mx-auto max-w-xl text-lg text-white/80 font-light leading-relaxed font-sans">
                  Discover a curated collection of legacy estates and high-yield assets, bridging the heritage of India with the ambition of the Emirates.
               </p>

               <div className="pt-8">
                 <button className="group relative inline-flex min-w-[200px] items-center justify-center overflow-hidden rounded-md border border-accent bg-primary px-8 py-4 text-white transition-all duration-700 hover:bg-accent hover:text-primary hover:shadow-[0_0_20px_rgba(197,160,89,0.4)]">
                    <span className="relative z-10 flex items-center gap-2 font-display text-base font-medium tracking-wider">
                       Reserve Your Presence
                       <span className="material-symbols-outlined text-lg transition-transform duration-500 group-hover:translate-x-1">arrow_forward</span>
                    </span>
                 </button>
               </div>
            </div>
         </main>

         {/* Local Footer */}
         <footer className="w-full px-6 py-8 animate-fade-in [animation-delay:1000ms] opacity-0">
           <div className="flex flex-col md:flex-row items-center justify-between text-white/60">
             
             <div className="flex gap-6 mb-4 md:mb-0">
               <a href="#" className="hover:text-accent transition-colors duration-300 transform hover:scale-110">
                 <span className="material-symbols-outlined text-xl">share</span>
               </a>
               <a href="#" className="hover:text-accent transition-colors duration-300 transform hover:scale-110">
                 <span className="material-symbols-outlined text-xl">photo_camera</span>
               </a>
             </div>

             <div className="flex flex-col items-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-8 hidden md:flex cursor-pointer group">
               <span className="text-[10px] uppercase tracking-[0.3em] group-hover:text-white transition-colors">Discover</span>
               <div className="h-12 w-[1px] bg-gradient-to-b from-white/0 via-white/50 to-white/0 group-hover:via-accent transition-colors duration-500"></div>
             </div>

             <div className="flex gap-6 text-[10px] uppercase tracking-wider">
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-white transition-colors">Terms</a>
             </div>

           </div>
         </footer>
      </div>
    </div>
  );
};

export default ScreenThree;