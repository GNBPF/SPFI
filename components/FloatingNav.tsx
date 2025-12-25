import React from 'react';
import { Link } from 'react-router-dom';

const FloatingNav: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#35322c] bg-[#161512]/90 backdrop-blur-md px-4 md:px-10 py-3 transition-all duration-300">
      <Link to="/" className="flex items-center gap-4 text-white hover:opacity-80 transition-opacity">
        <div className="size-6 text-accent">
          <span className="material-symbols-outlined text-2xl">apartment</span>
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] hidden md:block">Sovereign Property Festival</h2>
      </Link>
      
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link className="text-white/70 hover:text-accent transition-colors text-sm font-medium leading-normal" to="/">Home</Link>
          <Link className="text-white/70 hover:text-accent transition-colors text-sm font-medium leading-normal" to="/investment-insights">Investment Insights</Link>
          <a className="text-white/70 hover:text-accent transition-colors text-sm font-medium leading-normal" href="#">The Assets</a>
          <a className="text-white/70 hover:text-accent transition-colors text-sm font-medium leading-normal" href="#">Concierge</a>
        </div>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-accent hover:bg-[#d4b06d] transition-colors text-primary text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Register</span>
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white cursor-pointer">
        <span className="material-symbols-outlined">menu</span>
      </div>
    </nav>
  );
};

export default FloatingNav;