import React from 'react';
import { motion } from 'framer-motion';

const PortfolioShowcase = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-fintech-darker border-t border-fintech-border/50">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[800px] bg-fintech-emerald/5 rounded-full blur-[100px] mix-blend-screen pointer-events-none transform translate-x-1/2"></div>
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Overlapping Cards Mockup */}
        <div className="flex-1 w-full relative h-[400px] lg:h-[500px] flex items-center justify-center">
          
          {/* Card 1: Growth */}
          <motion.div 
            initial={{ opacity: 0, x: -50, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, x: -30, y: 20, rotate: -10 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="absolute z-10 w-[280px] h-[360px] bg-fintech-dark border border-fintech-border rounded-2xl shadow-2xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-fintech-blue/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-fintech-blue rounded-full"></div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Conservative</span>
            </div>
            <p className="text-white font-medium text-lg mb-1">Capital Preservation</p>
            <p className="text-neutral-400 text-sm mb-4">Focus on fixed income and low volatility.</p>
            <div className="flex-1 bg-fintech-border/30 rounded-xl relative overflow-hidden">
               <div className="absolute bottom-0 w-full h-[30%] bg-fintech-blue/20 border-t border-fintech-blue"></div>
            </div>
          </motion.div>

          {/* Card 2: Aggressive (Top Layer) */}
          <motion.div 
            initial={{ opacity: 0, x: 50, y: -50, rotate: 5 }}
            whileInView={{ opacity: 1, x: 20, y: -20, rotate: 5 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-20 w-[300px] h-[380px] fintech-glass border-fintech-emerald/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-fintech-emerald/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-fintech-emerald rounded-full shadow-[0_0_10px_#10b981]"></div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-fintech-emerald">Aggressive</span>
            </div>
            <p className="text-white font-medium text-lg mb-1">Maximum Growth</p>
            <p className="text-neutral-400 text-sm mb-4">High equity exposure for long-term gains.</p>
            <div className="flex-1 bg-black/40 rounded-xl relative overflow-hidden flex items-end">
                {/* Mock Chart Line */}
                <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
                   <path d="M0,45 Q15,40 30,25 T60,15 T100,5" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                </svg>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Text Content */}
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="flex items-baseline space-x-2 text-fintech-emerald mb-6"
          >
            <span className="text-[24px] font-bold tracking-tight" style={{ fontFamily: "Playfair Display, serif" }}>
              Wealthsimple
            </span>
            <span className="text-[24px] font-sans font-normal tracking-wide text-white">Portfolios</span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8 font-sans"
          >
            <motion.span className="block" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              Automated growth,
            </motion.span>
            <motion.span className="block" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              engineered for you.
            </motion.span>
          </h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-neutral-400 mb-10 max-w-md leading-relaxed"
          >
            Answer a few questions and we'll build a personalized portfolio of low-fee funds designed to maximize your returns while matching your exact risk tolerance.
          </motion.p>

          <motion.button
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="w-[88px] h-[54px] rounded-full border border-fintech-border flex items-center justify-center text-white hover:border-fintech-emerald hover:text-fintech-emerald transition-colors group cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default PortfolioShowcase;
