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
      <section className="relative w-full pt-20 min-[375px]:pt-22 sm:pt-24 md:pt-28 lg:pt-32 pb-4 min-[375px]:pb-5 sm:pb-6 md:pb-8 px-4 min-[375px]:px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] min-[375px]:w-[500px] sm:w-[600px] h-[400px] min-[375px]:h-[500px] sm:h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-primary text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-light tracking-tight mb-2 min-[375px]:mb-3 leading-tight">
              Register for <span className="text-accent font-bold font-display italic">SPFI 2026</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Registration Type Selection */}
      <section className="relative w-full pt-4 md:pt-6 pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex-1">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-[300px] min-[375px]:h-[320px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] w-full">
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
                className={`
                  relative h-full rounded-[16px] min-[375px]:rounded-[18px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px] 2xl:rounded-[40px] overflow-hidden 
                  transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] 
                  cursor-pointer group touch-manipulation select-none
                  ${isActive 
                    ? isMobile 
                      ? 'flex-[10]' 
                      : 'flex-[6] md:flex-[3] lg:flex-[3] xl:flex-[3]'
                    : isMobile
                      ? 'flex-[1]'
                      : 'flex-[2] md:flex-[1.2] lg:flex-[1.2] xl:flex-[1.2] hover:flex-[1.5] lg:hover:flex-[1.5]'
                  }
                `}
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

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 min-[375px]:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-white z-10">
                  {/* Title */}
                  <h3 className="text-white text-lg min-[375px]:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3 leading-tight">
                    {type.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-white/90 text-xs min-[375px]:text-sm sm:text-base leading-relaxed mb-3 min-[375px]:mb-4 sm:mb-6 md:mb-8 max-w-sm transition-opacity duration-500 delay-100 ${
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
                    className={`flex items-center gap-2 text-accent font-semibold text-xs min-[375px]:text-sm sm:text-base transition-opacity duration-500 delay-200 z-20 relative ${
                      isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'
                    }`}
                  >
                    <span className="relative">
                      Register Now
                      <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </span>
                    <span className={`material-symbols-outlined text-base min-[375px]:text-lg sm:text-xl transition-transform duration-300 ${
                      isActive ? 'translate-x-2' : 'group-hover:translate-x-2'
                    }`}>
                      arrow_forward
                    </span>
                  </Link>
                </div>
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
