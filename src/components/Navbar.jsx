import React, { useState } from "react";
import logo from "../assets/ws-wordmark-refresh.48a6eb42.svg";

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-[8px] left-[8px] right-[8px] z-50">
      <nav className="bg-[#13151f]/95 backdrop-blur-md rounded-[12px] px-4 py-3 md:px-6 md:py-4 flex justify-between items-center shadow-lg border border-white/10 text-white relative">
        {/* Logo */}
        <img src={logo} alt="Wealthsimple" className="h-8 md:h-[43px] w-auto cursor-pointer brightness-0 invert" />

        {/* Actions */}
        <div className="flex items-center space-x-2 md:space-x-3 shrink-0">
          {/* Search Button */}
          <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-neutral-700 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors cursor-pointer">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Log in */}
          <button 
            onClick={onLoginClick}
            className="hidden md:block bg-transparent border border-neutral-700 text-white px-5 py-2.5 rounded-full font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Log in
          </button>

          {/* Get started */}
          <button 
            onClick={onSignupClick}
            className="hidden md:block bg-fintech-emerald text-white px-5 py-3.5 rounded-full font-medium hover:bg-emerald-600 transition-colors cursor-pointer shadow-md"
          >
            Get started
          </button>

          {/* Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-neutral-700 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="10" x2="20" y2="10"></line>
              <line x1="4" y1="14" x2="20" y2="14"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-[#13151f] rounded-[12px] shadow-xl border border-neutral-800 p-4 flex flex-col gap-3">
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              onLoginClick();
            }}
            className="w-full bg-transparent border border-neutral-700 text-white px-5 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Log in
          </button>
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              onSignupClick();
            }}
            className="w-full bg-fintech-emerald text-white px-5 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors cursor-pointer"
          >
            Get started
          </button>
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              window.dispatchEvent(new CustomEvent('open-chat'));
            }}
            className="w-full bg-transparent border border-neutral-800 text-white px-5 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span>Help Centre</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
