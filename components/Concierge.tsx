import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Concierge: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visitorTypes = [
    {
      id: 'visitor',
      title: 'Visitor',
      icon: 'person',
      description: 'General attendees interested in exploring opportunities',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-400/30',
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-400',
      link: '/registrations/visitor',
      image: '/visitor.jpg',
    },
    {
      id: 'exhibitor',
      title: 'Exhibitor',
      icon: 'storefront',
      description: 'Companies and organizations showcasing their products and services',
      color: 'from-accent/20 to-yellow-500/20',
      borderColor: 'border-accent/30',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent',
      link: '/registrations/exhibitor',
      image: '/Exhibitor.webp',
    },
    {
      id: 'journalist',
      title: 'Journalist & Social Media Influencer',
      icon: 'article',
      description: 'Media professionals and content creators covering the event',
      color: 'from-blue-500/20 to-purple-500/20',
      borderColor: 'border-blue-400/30',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
      link: '/registrations/journalist',
      image: '/media.webp',
    },
  ];

  return (
    <div className="bg-cream text-primary antialiased min-h-screen flex flex-col selection:bg-accent selection:text-white font-public overflow-x-hidden w-full">
      
      {/* Background Grain Effect */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.015] mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Hero Section */}
      <section className="relative w-full px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
        {/* Navbar space */}
        <div className="h-16 sm:h-18 md:h-20 lg:h-24 xl:h-28 flex-shrink-0"></div>
        
        {/* Content area */}
        <div className="flex items-center py-3 sm:py-4 md:py-5 lg:py-6 pb-8 sm:pb-10 md:pb-12 lg:pb-16 relative z-10">
          <div className="absolute top-0 right-0 w-[400px] min-[375px]:w-[500px] sm:w-[600px] h-[400px] min-[375px]:h-[500px] sm:h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-primary text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light tracking-tight mb-2 min-[375px]:mb-3 leading-tight">
                Register for <span className="text-accent font-bold font-display italic">SPFI 2026</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Type Selection */}
      <section className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 relative z-10">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-[400px] min-[320px]:h-[420px] min-[375px]:h-[450px] sm:h-[480px] md:h-[360px] lg:h-[400px] xl:h-[420px] 2xl:h-[450px] w-full">
              {visitorTypes.map((type) => {
                const isActive = expandedId === type.id || hoveredId === type.id;
                
                return (
                <div 
                  key={type.id}
                  onClick={(e) => {
                    if (isMobile) {
                      // Prevent any default behavior
                      e.preventDefault();
                      e.stopPropagation();
                      
                      // Check if the click was on the Link element
                      const target = e.target as HTMLElement;
                      const clickedLink = target.closest('a');
                      
                      // Only expand/collapse if NOT clicking on the link
                      if (!clickedLink) {
                        setExpandedId(expandedId === type.id ? null : type.id);
                      }
                    }
                  }}
                  onMouseEnter={() => !isMobile && setHoveredId(type.id)}
                  onMouseLeave={() => !isMobile && setHoveredId(null)}
                  className={`flex flex-col ${
                    isActive 
                      ? isMobile 
                        ? 'flex-[10]' 
                        : 'flex-[6] md:flex-[3] lg:flex-[3] xl:flex-[3]'
                      : isMobile
                        ? 'flex-[1]'
                        : 'flex-[2] md:flex-[1.2] lg:flex-[1.2] xl:flex-[1.2] hover:flex-[1.5] lg:hover:flex-[1.5]'
                  } transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group`}
                >
                  {/* Card */}
                  <div
                    className="relative h-full rounded-[16px] min-[375px]:rounded-[18px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[40px] overflow-hidden cursor-pointer touch-manipulation select-none"
                  >
                    {/* Background Image */}
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className={`
                        absolute inset-0 w-full h-full object-cover transition-transform duration-1500
                        ${isActive ? 'scale-100' : 'scale-125 grayscale group-hover:grayscale-0'}
                      `}
                    />

                    {/* Dark Overlay - Only visible when active/hovered */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent 
                      transition-opacity duration-700
                      ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}
                    `} />

                    {/* Content - Only description and CTA button */}
                    <div className="absolute inset-0 flex flex-col justify-end p-3 min-[375px]:p-4 sm:p-5 md:p-6 lg:p-8 text-white z-10">
                      {/* Description */}
                      <p className={`text-white/90 text-[10px] min-[375px]:text-xs sm:text-sm leading-relaxed mb-2 min-[375px]:mb-2.5 sm:mb-3 md:mb-4 max-w-sm transition-opacity duration-500 delay-100 ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}>
                        {type.description}
                      </p>

                      {/* CTA */}
                      <Link
                        to={type.link}
                        onClick={(e) => {
                          // Always stop propagation to prevent card click
                          e.stopPropagation();
                          
                          // On mobile, only allow navigation if card is expanded
                          if (isMobile) {
                            if (expandedId !== type.id) {
                              // If card is not expanded, prevent navigation and expand it
                              e.preventDefault();
                              setExpandedId(type.id);
                              return;
                            }
                            // If card is expanded, allow navigation
                          }
                          // On desktop, always allow navigation
                        }}
                        className={`flex items-center gap-2 text-accent font-semibold text-[10px] min-[375px]:text-xs sm:text-sm transition-opacity duration-500 delay-200 z-20 relative ${
                          isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'
                        }`}
                      >
                        <span className="relative">
                          Register Now
                          <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`} />
                        </span>
                        <span className={`material-symbols-outlined text-sm min-[375px]:text-base sm:text-lg transition-transform duration-300 ${
                          isActive ? 'translate-x-2' : 'group-hover:translate-x-2'
                        }`}>
                          arrow_forward
                        </span>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Title below card */}
                  <h3 className="text-primary text-base min-[375px]:text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold mt-3 sm:mt-4 text-center leading-tight">
                    {type.title}
                  </h3>
                </div>
              )})}
            </div>
          </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Concierge;
