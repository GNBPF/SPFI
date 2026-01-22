import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  
  return (
    <footer className="bg-primary text-cream py-8 min-[320px]:py-10 sm:py-12 md:py-16 px-3 min-[320px]:px-4 sm:px-6 md:px-12 lg:px-16 border-t-4 border-accent snap-start">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-5 min-[320px]:gap-6 sm:gap-8 md:gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 min-[320px]:gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div className="w-full md:max-w-xs flex flex-col gap-3 min-[320px]:gap-4 sm:gap-6">
            <div className="flex items-center gap-2 min-[320px]:gap-3">
              <Link 
                to="/" 
                onClick={(e) => {
                  // If already on home page, scroll to top smoothly
                  if (location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="hover:opacity-80 transition-opacity"
              >
                <img src="/logoLight.png" alt="SPFI Logo" className="w-32 min-[320px]:w-40 sm:w-48 md:w-56 lg:w-64 h-auto max-w-[90vw]" />
              </Link>
            </div>
            <p className="text-cream/70 text-[11px] min-[320px]:text-xs sm:text-sm leading-relaxed">
              Connecting the global Indian diaspora with the finest legacy assets in the motherland. Experience the festival in Dubai.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap gap-6 min-[320px]:gap-8 sm:gap-10 md:gap-12 lg:gap-24 w-full md:w-auto">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h5 className="text-accent text-xs font-bold uppercase tracking-widest">Quick Links</h5>
              <Link className="text-xs sm:text-sm hover:text-accent transition-colors" to="/">Home</Link>
              <Link className="text-xs sm:text-sm hover:text-accent transition-colors" to="/investment-insights">Investment Insights</Link>
              <Link className="text-xs sm:text-sm hover:text-accent transition-colors" to="/registrations">Registrations</Link>
              <Link className="text-xs sm:text-sm hover:text-accent transition-colors" to="/registrations/exhibitor">Exhibitor Registration</Link>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <h5 className="text-accent text-xs font-bold uppercase tracking-widest">Event Info</h5>
              <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-cream/80">
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent text-sm">calendar_month</span>
                  16-17 May 2026
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent text-sm">location_on</span>
                  Dubai, UAE
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/10 pt-4 min-[320px]:pt-5 sm:pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 min-[320px]:gap-3 sm:gap-4 text-[9px] min-[320px]:text-[10px] sm:text-xs text-cream/40 text-center sm:text-left">
          <p>© 2026 Spectrum Property Festival India. All Rights Reserved.</p>
          <p>Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;