import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeatureLinks = () => {
  const [activeTab, setActiveTab] = useState('Invest');

  const categories = [
    { name: 'Chequing', desc: 'High interest, zero fees.' },
    { name: 'Trade', desc: 'Zero commission stocks.' },
    { name: 'Invest', desc: 'Automated wealth growth.' },
    { name: 'Advice', desc: 'Expert financial guidance.' },
    { name: 'Business', desc: 'Corporate wealth tools.' },
  ];

  return (
    <section className="bg-fintech-darker py-16 flex flex-col items-center justify-center border-b border-fintech-border/50">
      <div className="w-full max-w-4xl px-4 flex flex-col items-center">
        <p className="text-neutral-400 text-sm uppercase tracking-[0.2em] font-semibold mb-8 text-center">
          Explore Our Solutions
        </p>

        {/* Glassmorphic Pill Container */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-xl relative z-20">
          {categories.map((cat) => {
            const isActive = activeTab === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`relative px-6 py-3 rounded-full transition-all duration-300 flex flex-col items-center overflow-hidden outline-none cursor-pointer ${
                  isActive ? 'text-fintech-darker' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {/* Active Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-fintech-emerald to-fintech-teal rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                
                <span className="relative z-10 font-medium text-[15px] md:text-[17px] tracking-wide">
                  {cat.name}
                </span>

                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, height: 0, mt: 0 }}
                      animate={{ opacity: 1, height: 'auto', mt: 4 }}
                      exit={{ opacity: 0, height: 0, mt: 0 }}
                      className="relative z-10 text-xs md:text-sm font-semibold opacity-90 text-fintech-darker"
                    >
                      {cat.desc}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureLinks;
