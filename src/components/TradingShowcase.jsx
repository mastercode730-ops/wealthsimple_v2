import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import videoSrc from '../assets/trade___active_trading_background___video___en-CA.mp4';

const TradingShowcase = () => {
  const videoRef = useRef(null);
  
  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden bg-fintech-lighter border-t border-fintech-border/50">
      {/* Background Video Layer */}
      <video 
        ref={videoRef}
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
        autoPlay 
        loop 
        muted 
        playsInline
      />
      
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-fintech-dark via-fintech-dark/80 to-transparent"></div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center h-full">
        
        {/* Left Text Content */}
        <motion.div
          className="flex-1 pt-32 md:pt-0"
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
            className="inline-block px-4 py-1.5 rounded-full bg-fintech-emerald/10 border border-fintech-emerald/20 text-fintech-emerald text-sm font-semibold tracking-wide uppercase mb-6"
          >
            Active Trading
          </motion.div>

          <h2
            className="text-4xl md:text-6xl font-bold text-fintech-textDark leading-tight mb-8 font-sans"
          >
            <motion.span className="block" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              Execute with
            </motion.span>
            <motion.span className="block text-fintech-teal" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              Precision.
            </motion.span>
          </h2> 
          
          <motion.p
             variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
             className="text-lg md:text-xl text-neutral-400 mb-10 max-w-lg leading-relaxed"
          >
            Advanced tools, instant execution, and zero commissions. Build your strategy on a platform designed for serious traders.
          </motion.p>

          <motion.button
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="fintech-btn-primary group"
          >
            Start trading today
            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
        </motion.div>

        {/* Right Floating UI */}
        <motion.div
          className="flex-1 w-full relative h-[400px] md:h-[600px] hidden md:flex items-center justify-center mt-12 md:mt-0 perspective-1000"
          initial={{ opacity: 0, x: 50, rotateY: 20 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Glass Mockup Frame */}
          <div className="fintech-glass w-full max-w-md h-[450px] relative shadow-md border-white/20 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out flex flex-col p-6">
            
            <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
               <div>
                  <p className="text-fintech-textDark font-bold text-xl">AAPL</p>
                  <p className="text-neutral-500 text-xs uppercase">Apple Inc.</p>
               </div>
               <div className="text-right">
                  <p className="text-fintech-textDark font-bold text-xl">$189.43</p>
                  <p className="text-fintech-emerald text-sm">+1.24%</p>
               </div>
            </div>

            {/* Mock Chart Area */}
            <div className="flex-1 flex items-end relative overflow-hidden mb-6">
                <svg viewBox="0 0 100 50" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                   <defs>
                     <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                       <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                     </linearGradient>
                   </defs>
                   <path d="M0,50 L0,30 Q10,10 20,25 T40,15 T60,20 T80,5 T100,10 L100,50 Z" fill="url(#chartGrad)" />
                   <path d="M0,30 Q10,10 20,25 T40,15 T60,20 T80,5 T100,10" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>

            {/* Mock Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 py-3 rounded-lg text-center text-fintech-textDark font-semibold">Buy</div>
              <div className="bg-fintech-lighter py-3 rounded-lg text-center text-fintech-textDark font-semibold border border-white/10">Sell</div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TradingShowcase;
