import React, { useState } from 'react';
import Footer from './Footer';

const InvestmentInsights: React.FC = () => {
  const [isRequestingAccess, setIsRequestingAccess] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  const handleRequestAccess = async () => {
    setIsRequestingAccess(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsRequestingAccess(false);
    // In production, this would redirect to registration or open a modal
    window.location.href = '/registrations';
  };

  const handleViewShowreel = () => {
    // In production, this would open a video modal or navigate to video page
    // For now, scroll to a section or show a message
    alert('Showreel coming soon! This will display a video showcase of the event.');
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    // Simulate PDF download
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsDownloading(false);
    // In production, this would trigger actual PDF download
    alert('PDF download started! In production, this will download the full financial report.');
  };

  const handleBookWealthManager = async () => {
    setIsBooking(true);
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsBooking(false);
    // In production, this would open a booking form or redirect
    window.location.href = '/registrations';
  };
  return (
    <div className="bg-primary text-cream antialiased min-h-screen flex flex-col selection:bg-accent selection:text-white font-public overflow-x-hidden w-full">
      
      {/* Background Grain Effect */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.015] mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Hero Section - Dubai Edition */}
      <section className="relative w-full min-h-screen flex flex-col px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
        {/* Background Video with Subtle Darkening */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Hero/investmentBg.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="absolute inset-0 bg-primary" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Navbar space */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 flex-shrink-0 relative z-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-5xl mx-auto w-full min-h-0 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20">
          
          
          <h1 className="text-cream text-3xl min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[1.05] tracking-tight mb-4 min-[375px]:mb-5 sm:mb-6 md:mb-8 px-2" style={{ textShadow: '0 6px 30px rgba(0, 0, 0, 0.7), 0 3px 15px rgba(0, 0, 0, 0.5), 0 1px 5px rgba(0, 0, 0, 0.3)' }}>
            Bridging Legacy <br/>
            <span className="text-accent italic font-serif font-light" style={{ textShadow: '0 6px 30px rgba(0, 0, 0, 0.8), 0 3px 15px rgba(0, 0, 0, 0.6)' }}>&amp;</span> Future
          </h1>
          
          <p className="text-cream/90 text-sm min-[375px]:text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl mb-6 min-[375px]:mb-8 sm:mb-10 md:mb-12 px-4" style={{ textShadow: '0 3px 20px rgba(0, 0, 0, 0.6), 0 2px 10px rgba(0, 0, 0, 0.4)' }}>
            An exclusive gathering for the global Indian elite. Discover high-yield legacy assets amidst the luxury of Dubai.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 min-[375px]:gap-4 sm:gap-5 w-full sm:w-auto justify-center px-4">
            <button 
              onClick={handleRequestAccess}
              disabled={isRequestingAccess}
              className="group flex items-center justify-center h-11 min-[375px]:h-12 sm:h-14 px-6 min-[375px]:px-8 sm:px-10 bg-accent text-primary text-xs min-[375px]:text-sm sm:text-base font-bold rounded-lg shadow-[0_0_25px_rgba(197,160,89,0.3)] hover:bg-[#d4b06d] hover:shadow-[0_0_35px_rgba(197,160,89,0.5)] transition-all transform hover:-translate-y-1 active:translate-y-0 tracking-wide uppercase disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              aria-label="Request access to the event"
            >
              <span>{isRequestingAccess ? 'Processing...' : 'Request Access'}</span>
              {!isRequestingAccess && (
                <span className="material-symbols-outlined text-base min-[375px]:text-lg ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              )}
            </button>
            <button 
              onClick={handleViewShowreel}
              className="flex items-center justify-center h-11 min-[375px]:h-12 sm:h-14 px-6 min-[375px]:px-8 sm:px-10 border-2 border-cream/30 bg-white/10 backdrop-blur-md text-cream text-xs min-[375px]:text-sm sm:text-base font-medium rounded-lg hover:bg-white/20 hover:border-cream/50 transition-all tracking-wide uppercase"
              aria-label="View event showreel video"
            >
              View Showreel
            </button>
          </div>
        </div>
      </section>

      {/* Event Passport Section */}
      <section className="min-h-screen flex flex-col px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-cream relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-0 right-0 w-[400px] min-[375px]:w-[500px] sm:w-[600px] h-[400px] min-[375px]:h-[500px] sm:h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        {/* Navbar space */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 flex-shrink-0 relative z-10"></div>
        
        {/* Content area */}
        <div className="flex-1 flex items-center min-h-0 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20 relative z-10">
          <div className="max-w-7xl mx-auto w-full py-4 min-[375px]:py-5 sm:py-6 md:py-7 lg:py-4 xl:py-5">
          <div className="flex flex-col lg:flex-row gap-8 min-[375px]:gap-10 sm:gap-12 lg:gap-16 items-start">
            <div className="flex-1 space-y-4 min-[375px]:space-y-5 sm:space-y-6 md:space-y-8">
              <div>
                <span className="text-accent font-bold tracking-widest uppercase text-[10px] min-[375px]:text-xs mb-2 min-[375px]:mb-3 block">Essential Information</span>
            <h2 className="text-primary text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light tracking-tight mb-3 min-[375px]:mb-4 sm:mb-5 md:mb-6 leading-tight">
              Event <span className="text-accent font-bold font-display italic">Passport</span>
            </h2>
              </div>
              <p className="text-primary/80 text-sm min-[375px]:text-base sm:text-lg md:text-xl leading-relaxed border-l-2 border-accent/30 pl-3 min-[375px]:pl-4 sm:pl-5 md:pl-6">
                Join a select group of high-net-worth investors and industry titans for a day of insight, connection, and opportunity.
              </p>
              <div className="relative rounded-xl overflow-hidden border border-accent/20 shadow-2xl">
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 pointer-events-none"></div>
                <img 
                  alt="Luxury hotel lobby with elegant design" 
                  className="w-full h-56 min-[375px]:h-64 sm:h-72 md:h-80 object-cover opacity-90" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8hquneNarorA41FraCg0MUaJf4O7R1hcCzSor37DgeQv8dTRkvzOTVK8EFN2Ip-OawwJOyEKszcD2aVBinsxvcCBVvNTjeVa7oVRZ6m5rrFqAsGy9v1sqbUAB2cCLxlyUlYYRk2yQ_fKe6_FkbPKqjcUb0LBgNdcUIYl8EDgrfQgCFXVKmyhYugkvPyPE9fh42xBpoXDPp3jvjg4LF1VIaa8dpj0KW9pptFkUEVtOFp8LCLmsye79O-jOQh4RQQdsWXAYpJEqegn4"
                />
              </div>
            </div>
            <div className="flex-1 w-full flex flex-col gap-4 min-[375px]:gap-5 sm:gap-6 pt-2 min-[375px]:pt-4">
              <div className="group relative p-4 min-[375px]:p-5 sm:p-6 md:p-8 bg-white border border-accent/10 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent/50 group-hover:bg-accent transition-colors rounded-l-xl"></div>
                <div className="flex items-start gap-3 min-[375px]:gap-4 sm:gap-5">
                  <span className="material-symbols-outlined text-accent text-2xl min-[375px]:text-3xl sm:text-4xl font-light flex-shrink-0">calendar_month</span>
                  <div>
                    <h3 className="text-primary text-base min-[375px]:text-lg sm:text-xl md:text-2xl font-bold mb-1 min-[375px]:mb-2">16—17 May 2026</h3>
                    <p className="text-primary/70 font-medium tracking-widest text-[10px] min-[375px]:text-xs sm:text-sm uppercase">10:00 AM — 6:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="group relative p-4 min-[375px]:p-5 sm:p-6 md:p-8 bg-white border border-accent/10 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent/50 group-hover:bg-accent transition-colors rounded-l-xl"></div>
                <div className="flex items-start gap-3 min-[375px]:gap-4 sm:gap-5">
                  <span className="material-symbols-outlined text-accent text-2xl min-[375px]:text-3xl sm:text-4xl font-light flex-shrink-0">location_on</span>
                  <div>
                    <h3 className="text-primary text-base min-[375px]:text-lg sm:text-xl md:text-2xl font-bold mb-1 min-[375px]:mb-2">DoubleTree by Hilton, Dubai</h3>
                    <p className="text-primary/70 text-xs min-[375px]:text-sm mb-2 min-[375px]:mb-3 sm:mb-4">Dubai, United Arab Emirates</p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=DoubleTree+by+Hilton+Dubai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent text-[10px] min-[375px]:text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 hover:text-primary transition-colors border-b border-accent/30 pb-0.5"
                      aria-label="Get directions to DoubleTree by Hilton Dubai"
                    >
                      Get Directions <span className="material-symbols-outlined text-[9px] min-[375px]:text-[10px]">arrow_outward</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="group relative p-4 min-[375px]:p-5 sm:p-6 md:p-8 bg-white border border-accent/10 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent/50 group-hover:bg-accent transition-colors rounded-l-xl"></div>
                <div className="flex items-start gap-3 min-[375px]:gap-4 sm:gap-5">
                  <span className="material-symbols-outlined text-accent text-2xl min-[375px]:text-3xl sm:text-4xl font-light flex-shrink-0">checkroom</span>
                  <div>
                    <h3 className="text-primary text-base min-[375px]:text-lg sm:text-xl md:text-2xl font-bold mb-0.5 min-[375px]:mb-1">Business Formal</h3>
                    <p className="text-primary/70 text-xs min-[375px]:text-sm italic">or Traditional Indian Attire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* The Experience Timeline Section */}
      <section className="min-h-screen flex flex-col px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-cream relative border-t border-accent/10">
        <div className="absolute top-10 min-[375px]:top-12 sm:top-16 md:top-20 left-4 min-[375px]:left-6 sm:left-8 md:left-10 w-64 min-[375px]:w-80 sm:w-96 h-64 min-[375px]:h-80 sm:h-96 opacity-[0.03] pointer-events-none rotate-90">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,71.6,35.2C61,47.3,51.1,57.8,39.3,65.3C27.5,72.8,13.7,77.3,-0.6,78.3C-14.9,79.4,-29.8,77,-42.6,69.9C-55.4,62.9,-66.1,51.2,-74.3,37.6C-82.5,24,-88.2,8.5,-86.6,-6.3C-85,-21.1,-76.1,-35.2,-64.8,-46.2C-53.5,-57.2,-39.8,-65.1,-26.3,-72.8C-12.8,-80.5,0.5,-88,14.5,-87.6C28.5,-87.2,43.2,-78.9,44.7,-76.4Z" fill="#C5A059" transform="translate(100 100)"></path>
          </svg>
        </div>
        
        {/* Navbar space */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 flex-shrink-0 relative z-10"></div>
        
        {/* Content area */}
        <div className="flex-1 flex items-center min-h-0 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20 relative z-10">
          <div className="max-w-7xl mx-auto w-full py-4 min-[375px]:py-5 sm:py-6 md:py-7 lg:py-4 xl:py-5">
          <div className="text-center mb-8 min-[375px]:mb-10 sm:mb-12 md:mb-16">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-[10px] min-[375px]:text-xs mb-2 min-[375px]:mb-3 block">Curated Itinerary</span>
            <h2 className="text-primary text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light leading-tight">The Experience</h2>
          </div>
          <div className="relative px-2 min-[375px]:px-4">
            <div className="absolute left-6 min-[375px]:left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent transform md:-translate-x-1/2"></div>
            <div className="relative flex md:justify-end md:even:justify-start items-center gap-4 min-[375px]:gap-6 sm:gap-8 mb-10 min-[375px]:mb-12 sm:mb-14 md:mb-16 group w-full">
              <div className="md:w-1/2 flex md:justify-end order-2 md:order-1 pl-10 min-[375px]:pl-12 md:pl-0 md:pr-12 relative">
                <div className="text-left md:text-right">
                  <span className="text-accent font-bold text-[10px] min-[375px]:text-xs tracking-widest uppercase mb-0.5 min-[375px]:mb-1 block">10:00 AM</span>
                  <h3 className="text-primary text-base min-[375px]:text-lg sm:text-xl md:text-2xl font-bold">Welcome Reception</h3>
                  <p className="text-primary/70 mt-1.5 min-[375px]:mt-2 text-xs min-[375px]:text-sm sm:text-base leading-relaxed max-w-xs ml-0 md:ml-auto">Begin the day with networking over artisanal blends and gourmet refreshments in the Grand Lobby.</p>
                </div>
                <div className="absolute left-0 md:left-auto md:right-0 top-1 min-[375px]:top-1.5 md:top-2 w-3 h-3 min-[375px]:w-4 min-[375px]:h-4 rounded-full bg-primary border-2 border-accent transform md:translate-x-1/2 z-20 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
              </div>
              <div className="hidden md:block w-1/2 order-2"></div>
            </div>
            <div className="relative flex md:justify-start items-center gap-4 min-[375px]:gap-6 sm:gap-8 mb-10 min-[375px]:mb-12 sm:mb-14 md:mb-16 group w-full">
              <div className="hidden md:block w-1/2 order-1"></div>
              <div className="md:w-1/2 flex md:justify-start order-2 pl-10 min-[375px]:pl-12 relative">
                <div className="absolute left-0 top-1 min-[375px]:top-1.5 md:top-2 w-3 h-3 min-[375px]:w-4 min-[375px]:h-4 rounded-full bg-primary border-2 border-accent transform md:-translate-x-1/2 z-20 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
                <div className="text-left">
                  <span className="text-accent font-bold text-[10px] min-[375px]:text-xs tracking-widest uppercase mb-0.5 min-[375px]:mb-1 block">11:30 AM</span>
                  <h3 className="text-primary text-base min-[375px]:text-lg sm:text-xl md:text-2xl font-bold">Panel: Future of Real Estate</h3>
                  <p className="text-primary/70 mt-1.5 min-[375px]:mt-2 text-xs min-[375px]:text-sm sm:text-base leading-relaxed max-w-xs">Expert insights on regulatory changes, emerging markets, and legacy preservation for NRI investors.</p>
                </div>
              </div>
            </div>
            <div className="relative flex md:justify-end items-center gap-4 min-[375px]:gap-6 sm:gap-8 mb-10 min-[375px]:mb-12 sm:mb-14 md:mb-16 group w-full">
              <div className="md:w-1/2 flex md:justify-end order-2 md:order-1 pl-10 min-[375px]:pl-12 md:pl-0 md:pr-12 relative">
                <div className="text-left md:text-right">
                  <span className="text-accent font-bold text-[10px] min-[375px]:text-xs tracking-widest uppercase mb-0.5 min-[375px]:mb-1 block">01:00 PM</span>
                  <h3 className="text-primary text-base min-[375px]:text-lg sm:text-xl md:text-2xl font-bold">Networking Luncheon</h3>
                  <p className="text-primary/70 mt-1.5 min-[375px]:mt-2 text-xs min-[375px]:text-sm sm:text-base leading-relaxed max-w-xs ml-0 md:ml-auto">A curated culinary journey featuring fusion cuisine, providing an intimate setting for discussion.</p>
                </div>
                <div className="absolute left-0 md:left-auto md:right-0 top-1 min-[375px]:top-1.5 md:top-2 w-3 h-3 min-[375px]:w-4 min-[375px]:h-4 rounded-full bg-primary border-2 border-accent transform md:translate-x-1/2 z-20 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
              </div>
              <div className="hidden md:block w-1/2 order-2"></div>
            </div>
            <div className="relative flex md:justify-start items-center gap-4 min-[375px]:gap-6 sm:gap-8 group w-full">
              <div className="hidden md:block w-1/2 order-1"></div>
              <div className="md:w-1/2 flex md:justify-start order-2 pl-10 min-[375px]:pl-12 relative">
                <div className="absolute left-0 top-1 min-[375px]:top-1.5 md:top-2 w-3 h-3 min-[375px]:w-4 min-[375px]:h-4 rounded-full bg-primary border-2 border-accent transform md:-translate-x-1/2 z-20 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
                <div className="text-left">
                  <span className="text-accent font-bold text-[10px] min-[375px]:text-xs tracking-widest uppercase mb-0.5 min-[375px]:mb-1 block">03:00 PM</span>
                  <h3 className="text-primary text-base min-[375px]:text-lg sm:text-xl md:text-2xl font-bold">Exclusive Property Showcase</h3>
                  <p className="text-primary/70 mt-1.5 min-[375px]:mt-2 text-xs min-[375px]:text-sm sm:text-base leading-relaxed max-w-xs">Private viewings of India's most prestigious developments, from Mumbai penthouses to Goa estates.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      
      {/* Financial Insights Section */}
      <section className="min-h-screen flex flex-col px-6 md:px-12 lg:px-16 bg-primary relative">
        {/* Navbar space */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 flex-shrink-0 relative z-10"></div>
        
        {/* Content area */}
        <main className="relative z-10 flex-1 flex flex-col min-h-0 pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20 max-w-7xl mx-auto w-full py-4 lg:py-5">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-8 md:mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-accent text-xl">analytics</span>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Market Intelligence</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight tracking-tight" style={{ textShadow: '0 3px 15px rgba(0, 0, 0, 0.5)' }}>
              The India Advantage: <br className="hidden md:block"/>
              <span className="text-white/90" style={{ textShadow: '0 3px 15px rgba(0, 0, 0, 0.6)' }}>Financial Forecasts</span>
            </h1>
            <p className="mt-4 text-cream/80 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)' }}>
                An in-depth analysis of predicted occupancy, currency leverage, and asset yield for luxury Indian real estate.
            </p>
          </div>
          <div className="bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-sm self-start lg:self-end overflow-x-auto">
            <div className="flex items-center min-w-max">
              {['1 Year', '3 Year', '5 Year', '10 Year Forecast'].map((label, i) => (
                <label key={i} className="cursor-pointer group relative px-3 md:px-4 py-2 rounded-lg transition-all has-[:checked]:bg-accent has-[:checked]:shadow-lg has-[:checked]:text-primary whitespace-nowrap">
                  <input className="sr-only" name="timeframe" type="radio" defaultValue={label.includes('5') ? 'on' : undefined} defaultChecked={label.includes('5')} />
                  <span className="text-xs md:text-sm font-medium text-cream/70 group-hover:text-cream group-has-[:checked]:text-primary group-has-[:checked]:font-bold transition-colors relative z-10">
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Top KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          
          {/* KPI 1 */}
          <div className="animate-fade-in-up [animation-delay:100ms] bg-background-surface/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-border-gold hover:border-accent transition-colors duration-300 shadow-card group">
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className="p-2 bg-accent/20 rounded-lg text-accent">
                <span className="material-symbols-outlined text-lg sm:text-xl">real_estate_agent</span>
              </div>
              <span className="text-[#4ADE80] text-[10px] sm:text-xs font-bold bg-[#4ADE80]/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-[#4ADE80]/20">+1.2% vs Global</span>
            </div>
            <p className="text-text-muted text-xs sm:text-sm font-medium uppercase tracking-wide">Projected Annual Yield</p>
            <div className="flex items-baseline gap-2 mt-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-accent tracking-tight">8.5%</h3>
              <span className="text-[10px] sm:text-xs text-cream/70">Net ROI</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-5 overflow-hidden">
              <div className="bg-accent h-full rounded-full w-[85%] group-hover:w-[88%] transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
            </div>
          </div>

          {/* KPI 2 */}
          <div className="animate-fade-in-up [animation-delay:200ms] bg-background-surface/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-border-gold hover:border-accent transition-colors duration-300 shadow-card group">
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className="p-2 bg-accent/20 rounded-lg text-accent">
                <span className="material-symbols-outlined text-lg sm:text-xl">currency_exchange</span>
              </div>
              <span className="text-[#4ADE80] text-[10px] sm:text-xs font-bold bg-[#4ADE80]/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-[#4ADE80]/20">+22.4% vs 2020</span>
            </div>
            <p className="text-text-muted text-xs sm:text-sm font-medium uppercase tracking-wide">USD vs INR Appreciation</p>
            <div className="flex items-baseline gap-2 mt-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-accent tracking-tight">+22.4%</h3>
              <span className="text-[10px] sm:text-xs text-cream/70">Buying Power</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-5 overflow-hidden">
              <div className="bg-accent h-full rounded-full w-[65%] group-hover:w-[70%] transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
            </div>
          </div>

          {/* KPI 3 */}
          <div className="animate-fade-in-up [animation-delay:300ms] bg-background-surface/80 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-border-gold hover:border-accent transition-colors duration-300 shadow-card group">
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div className="p-2 bg-accent/20 rounded-lg text-accent">
                <span className="material-symbols-outlined text-lg sm:text-xl">bed</span>
              </div>
              <span className="text-[#4ADE80] text-[10px] sm:text-xs font-bold bg-[#4ADE80]/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-[#4ADE80]/20">+5% YoY</span>
            </div>
            <p className="text-text-muted text-xs sm:text-sm font-medium uppercase tracking-wide">Peak Season Occupancy</p>
            <div className="flex items-baseline gap-2 mt-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-accent tracking-tight">94%</h3>
              <span className="text-[10px] sm:text-xs text-cream/70">Dec - Feb</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-4 sm:mt-5 overflow-hidden">
              <div className="bg-accent h-full rounded-full w-[94%] group-hover:w-[96%] transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 sm:mb-8">
          
          {/* Chart 1: Global Yield */}
          <div className="animate-fade-in-up [animation-delay:200ms] bg-background-surface/50 backdrop-blur-sm rounded-xl p-8 border border-white/5 shadow-card flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-cream mb-1">Global Yield Comparison</h4>
              <p className="text-sm text-text-muted mb-6">India vs Established Markets (Annual Avg)</p>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-3xl font-bold text-accent">8.5%</span>
                <span className="text-sm font-medium text-cream mb-1">India</span>
                <span className="text-xs text-[#4ADE80] bg-[#4ADE80]/10 px-2 py-0.5 rounded font-bold mb-1.5 ml-2 border border-[#4ADE80]/20">Leader</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative group">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-cream">India</span>
                  <span className="text-accent group-hover:scale-110 transition-transform">8.5%</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-accent h-full rounded-full shadow-[0_0_10px_rgba(197,160,89,0.3)]" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="relative">
                <div className="flex justify-between text-xs font-medium mb-1 text-text-muted">
                  <span>Dubai</span>
                  <span>6.8%</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-white/30 h-full rounded-full" style={{ width: "68%" }}></div>
                </div>
              </div>
              <div className="relative">
                <div className="flex justify-between text-xs font-medium mb-1 text-text-muted">
                  <span>London</span>
                  <span>4.2%</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-white/30 h-full rounded-full" style={{ width: "42%" }}></div>
                </div>
              </div>
              <div className="relative">
                <div className="flex justify-between text-xs font-medium mb-1 text-text-muted">
                  <span>New York</span>
                  <span>3.5%</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-white/30 h-full rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5">
              <p className="text-[10px] text-text-muted uppercase tracking-wider opacity-60">Source: Global Property Guide 2024</p>
            </div>
          </div>

          {/* Chart 2: Currency Graph */}
          <div className="animate-fade-in-up [animation-delay:100ms] bg-background-surface/50 backdrop-blur-sm rounded-xl p-8 border border-white/5 shadow-card flex flex-col justify-between col-span-1 lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-lg font-bold text-cream mb-1">Currency Buying Power</h4>
                <p className="text-sm text-text-muted">5 Year Trend: USD / INR Appreciation</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-2xl font-bold text-accent">₹92 / $1</p>
                  <p className="text-xs text-[#4ADE80] font-medium">+12% Forecast</p>
                </div>
              </div>
            </div>
            <div className="flex-grow min-h-[220px] relative w-full">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 250">
                <defs>
                  <linearGradient id="goldGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3"></stop>
                    <stop offset="100%" stopColor="#C5A059" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="200" y2="200"></line>
                <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
                <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="100" y2="100"></line>
                <line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
                <path d="M0,180 C100,170 150,190 250,140 C350,90 450,110 550,60 C650,10 750,30 800,20 L800,250 L0,250 Z" fill="url(#goldGradient)"></path>
                <path className="animate-draw" style={{strokeDasharray: 1000, strokeDashoffset: 1000}} d="M0,180 C100,170 150,190 250,140 C350,90 450,110 550,60 C650,10 750,30 800,20" fill="none" stroke="#C5A059" strokeLinecap="round" strokeWidth="3"></path>
                <circle cx="250" cy="140" fill="#0E3A2F" r="4" stroke="#C5A059" strokeWidth="2"></circle>
                <circle cx="550" cy="60" fill="#0E3A2F" r="4" stroke="#C5A059" strokeWidth="2"></circle>
                <circle cx="800" cy="20" fill="#C5A059" r="6" stroke="#fff" strokeWidth="2"></circle>
                <rect fill="#134235" height="24" rx="4" stroke="rgba(197, 160, 89, 0.5)" width="70" x="730" y="0"></rect>
                <text fill="#C5A059" fontSize="12" fontWeight="bold" textAnchor="middle" x="765" y="16">2029 Est.</text>
              </svg>
            </div>
            <div className="flex justify-between text-xs font-semibold text-text-muted mt-2 px-2 opacity-70">
              <span>2024</span>
              <span>2025</span>
              <span>2026</span>
              <span>2027</span>
              <span>2028</span>
              <span>2029</span>
            </div>
          </div>

          {/* Chart 3: Occupancy Bar Chart */}
          <div className="animate-fade-in-up [animation-delay:300ms] bg-background-surface/50 backdrop-blur-sm rounded-xl p-8 border border-white/5 shadow-card flex flex-col justify-between col-span-1 lg:col-span-3">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <h4 className="text-lg font-bold text-cream mb-1">Projected Airbnb Occupancy Trends</h4>
                <p className="text-sm text-text-muted">Monthly Seasonality for Luxury Assets</p>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-accent shadow-glow"></span>
                  <span className="text-xs font-medium text-text-muted">Occupancy Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-white/20"></span>
                  <span className="text-xs font-medium text-text-muted">Market Avg</span>
                </div>
              </div>
            </div>
            <div className="relative h-[200px] w-full">
              <div className="flex items-end justify-between h-full gap-2 md:gap-4 px-2">
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[60%] relative group">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background-surface border border-accent/30 text-accent text-[10px] px-2 py-1 rounded whitespace-nowrap">60% Avg</div>
                </div>
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[55%]"></div>
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[40%]"></div>
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[35%]"></div>
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[45%]"></div>
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[50%]"></div>
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[60%]"></div>
                <div className="flex-1 bg-white/5 hover:bg-accent/20 transition-colors rounded-t-sm h-[55%]"></div>
                <div className="flex-1 bg-gradient-to-t from-accent/10 to-accent/40 hover:to-accent/60 transition-colors rounded-t-sm h-[75%] border-t border-accent/30"></div>
                <div className="flex-1 bg-gradient-to-t from-accent/20 to-accent/60 hover:to-accent/80 transition-colors rounded-t-sm h-[85%] border-t border-accent/50"></div>
                <div className="flex-1 bg-gradient-to-t from-accent/30 to-accent hover:to-primary-dark transition-colors rounded-t-sm h-[94%] relative group border-t border-accent shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-100 transition-opacity bg-accent text-background-base text-[10px] px-2 py-1 rounded font-bold shadow-lg">94%</div>
                  <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                </div>
                <div className="flex-1 bg-gradient-to-t from-accent/20 to-accent/80 hover:to-accent transition-colors rounded-t-sm h-[90%] border-t border-accent/60"></div>
              </div>
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,70 Q10,75 20,80 T40,85 T60,80 T80,40 T100,10" fill="none" opacity="0.4" stroke="#C5A059" strokeDasharray="2 2" strokeWidth="0.5"></path>
              </svg>
            </div>
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-text-muted mt-4 px-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span className="text-accent font-bold">Oct</span>
              <span className="text-accent font-bold">Nov</span>
              <span className="text-accent font-bold">Dec</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-6 sm:mt-8 md:mt-10 bg-gradient-to-br from-background-surface to-[#0a2b22] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden shadow-2xl border border-white/5 group fade-in-up delay-300">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border border-accent/10 opacity-30 group-hover:scale-105 transition-transform duration-1000"></div>
          <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full border border-accent/20 opacity-30 group-hover:scale-105 transition-transform duration-1000 delay-75"></div>
          <div className="absolute right-10 top-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-cream mb-2">Detailed Financial Breakdown</h2>
              <p className="text-text-muted max-w-lg text-sm md:text-base font-light">
                  Download the full 24-page report including specific asset class performance, tax implications for NRIs, and long-term legacy planning structures.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button 
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="bg-accent hover:bg-white text-background-base font-bold py-3 px-6 rounded-lg transition-all shadow-glow hover:shadow-lg flex items-center justify-center gap-2 min-w-[180px] disabled:opacity-70 disabled:cursor-not-allowed"
                aria-label="Download financial report PDF"
              >
                <span className="material-symbols-outlined text-[20px]">{isDownloading ? 'hourglass_empty' : 'download'}</span>
                <span>{isDownloading ? 'Downloading...' : 'Download PDF'}</span>
              </button>
              <button 
                onClick={handleBookWealthManager}
                disabled={isBooking}
                className="bg-transparent border border-accent/40 hover:bg-accent/10 hover:border-accent text-accent font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 min-w-[180px] disabled:opacity-70 disabled:cursor-not-allowed"
                aria-label="Book a consultation with a wealth manager"
              >
                <span className="material-symbols-outlined text-[20px]">{isBooking ? 'hourglass_empty' : 'calendar_month'}</span>
                <span>{isBooking ? 'Processing...' : 'Book Wealth Manager'}</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InvestmentInsights;