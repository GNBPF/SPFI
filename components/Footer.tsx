import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-cream py-12 md:py-16 px-6 md:px-12 lg:px-16 border-t-4 border-accent snap-start">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="max-w-xs flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Link to="/">
                <img src="/logoLight.png" alt="SPFI Logo" width={250} height={400} />
              </Link>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Connecting the global Indian diaspora with the finest legacy assets in the motherland. Experience the festival in Dubai.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap gap-12 lg:gap-24">
            <div className="flex flex-col gap-4">
              <h5 className="text-accent text-xs font-bold uppercase tracking-widest">Explore</h5>
              <a className="text-sm hover:text-accent transition-colors" href="#">Why India?</a>
              <a className="text-sm hover:text-accent transition-colors" href="#">Exhibitors</a>
              <a className="text-sm hover:text-accent transition-colors" href="#">Concierge</a>
              <a className="text-sm hover:text-accent transition-colors" href="#">RSVP</a>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-accent text-xs font-bold uppercase tracking-widest">Legal</h5>
              <a className="text-sm hover:text-accent transition-colors" href="#">Privacy Policy</a>
              <a className="text-sm hover:text-accent transition-colors" href="#">Terms of Service</a>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-accent text-xs font-bold uppercase tracking-widest">Connect</h5>
              <div className="flex gap-4">
                <a className="text-cream hover:text-accent transition-colors" href="#">
                  <span className="material-symbols-outlined">smart_display</span>
                </a>
                <a className="text-cream hover:text-accent transition-colors" href="#">
                  <span className="material-symbols-outlined">photo_camera</span>
                </a>
                <a className="text-cream hover:text-accent transition-colors" href="#">
                  <span className="material-symbols-outlined">public</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <p>© 2026 Spectrum Property Festival India. All Rights Reserved.</p>
          <p>Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;