import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/ws-wordmark-refresh.48a6eb42.svg";

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Chequing", href: "#chequing" },
    { name: "Invest", href: "#invest" },
    { name: "Trade", href: "#trade" },
    { name: "Borrow", href: "#borrow" },
    { name: "Business", href: "#business" },
    { name: "Offers", href: "#offers" },
  ];

  return (
    <>
      <div className="fixed top-[8px] left-[8px] right-[8px] z-40">
        <nav className="bg-[#13151f]/95 backdrop-blur-md rounded-[12px] px-4 py-3 md:px-6 md:py-4 flex justify-between items-center shadow-lg border border-white/10 text-white relative">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Wealthsimple"
              className="h-8 md:h-[40px] w-auto cursor-pointer brightness-0 invert"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center space-x-2 md:space-x-3 shrink-0">
            {/* Search Button */}
            <button
              aria-label="Search"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-neutral-700 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors cursor-pointer"
            >
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

            {/* Desktop Log in */}
            <button
              onClick={onLoginClick}
              className="hidden md:block bg-transparent border border-neutral-700 text-white px-5 py-2.5 rounded-full font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Log in
            </button>

            {/* Desktop Get started */}
            <button
              onClick={() => onSignupClick()}
              className="hidden md:block bg-fintech-emerald text-white px-5 py-2.5 rounded-full font-medium hover:bg-emerald-600 transition-colors cursor-pointer shadow-md"
            >
              Get started
            </button>

            {/* Mobile Hamburger Button - HIDDEN ON DESKTOP (md:hidden) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden w-10 h-10 rounded-full border border-neutral-700 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="10" x2="20" y2="10"></line>
                <line x1="4" y1="14" x2="20" y2="14"></line>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Full-Screen Mobile Drawer Menu matching Screenshot 3 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white text-neutral-900 flex flex-col justify-between p-6 sm:p-8 font-sans overflow-y-auto"
          >
            {/* Top Bar: Logo on left, Search & Close (X) on right */}
            <div className="flex items-center justify-between pt-2 pb-6 border-b border-neutral-100">
              <img
                src={logo}
                alt="Wealthsimple"
                className="h-7 w-auto"
              />

              <div className="flex items-center space-x-3">
                {/* Search icon button */}
                <button
                  aria-label="Search"
                  className="w-11 h-11 rounded-full border border-neutral-300 text-neutral-800 flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>

                {/* Close (X) icon button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-11 h-11 rounded-full border border-neutral-300 text-neutral-800 flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Menu Links: Chequing, Invest, Trade, Borrow, Business, Offers */}
            <div className="flex-1 py-8 flex flex-col justify-start space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[22px] font-medium text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer tracking-tight"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Bottom Actions: Log In & Get started */}
            <div className="pt-6 pb-2 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onLoginClick();
                }}
                className="w-full bg-white border border-neutral-900 text-neutral-900 font-semibold py-3.5 rounded-full hover:bg-neutral-50 active:scale-[0.99] transition-all cursor-pointer text-[16px] text-center"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onSignupClick();
                }}
                className="w-full bg-[#111111] text-white font-semibold py-3.5 rounded-full hover:bg-black active:scale-[0.99] transition-all cursor-pointer text-[16px] text-center shadow-sm"
              >
                Get started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
