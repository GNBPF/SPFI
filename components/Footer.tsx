import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  
  return (
    <footer className="bg-primary text-cream py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-16 border-t-4 border-accent snap-start">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 sm:gap-8 md:gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div className="w-full md:max-w-xs flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
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
                <img src="/logoLight.png" alt="SPFI Logo" className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto" />
              </Link>
            </div>
            <p className="text-cream/70 text-xs sm:text-sm leading-relaxed">
              Connecting the global Indian diaspora with the finest legacy assets in the motherland. Experience the festival in Dubai.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap gap-8 sm:gap-10 md:gap-12 lg:gap-24 w-full md:w-auto">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h5 className="text-accent text-xs font-bold uppercase tracking-widest">Explore</h5>
              <a className="text-xs sm:text-sm hover:text-accent transition-colors" href="#">Why India?</a>
              <a className="text-xs sm:text-sm hover:text-accent transition-colors" href="#">Exhibitors</a>
              <a className="text-xs sm:text-sm hover:text-accent transition-colors" href="#">Concierge</a>
              <a className="text-xs sm:text-sm hover:text-accent transition-colors" href="#">RSVP</a>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <h5 className="text-accent text-xs font-bold uppercase tracking-widest">Legal</h5>
              <a className="text-xs sm:text-sm hover:text-accent transition-colors" href="#">Privacy Policy</a>
              <a className="text-xs sm:text-sm hover:text-accent transition-colors" href="#">Terms of Service</a>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <h5 className="text-accent text-xs font-bold uppercase tracking-widest">Connect</h5>
              <div className="flex gap-3 sm:gap-4">
                <a className="text-cream hover:text-accent transition-colors text-lg sm:text-xl" href="#" aria-label="YouTube">
                  <span className="material-symbols-outlined">smart_display</span>
                </a>
                <a className="text-cream hover:text-accent transition-colors text-lg sm:text-xl" href="#" aria-label="Instagram">
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
                <a className="text-cream hover:text-accent transition-colors text-lg sm:text-xl" href="#" aria-label="Website">
                  <span className="material-symbols-outlined">public</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-cream/40 text-center sm:text-left">
          <p>© 2026 Spectrum Property Festival India. All Rights Reserved.</p>
          <p>Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;