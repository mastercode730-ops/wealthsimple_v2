import React from 'react';
import { motion } from 'framer-motion';

const ChequingShowcase = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-fintech-lighter border-t border-fintech-border/50">
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Left Side: Text Content */}
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
            className="flex items-baseline space-x-2 text-fintech-blue mb-6"
          >
            <span className="text-[24px] font-bold tracking-tight" style={{ fontFamily: "Playfair Display, serif" }}>
              Wealthsimple
            </span>
            <span className="text-[24px] font-sans font-normal tracking-wide text-fintech-textDark">Cash</span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-fintech-textDark leading-tight mb-8 font-sans"
          >
            <motion.span className="block" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              Your money,
            </motion.span>
            <motion.span className="block" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              unchained.
            </motion.span>
          </h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-neutral-400 mb-10 max-w-md leading-relaxed"
          >
            Earn industry-leading interest on your everyday balance. Spend, send, and save with zero account fees and instant transfers.
          </motion.p>

          <motion.button
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="w-[88px] h-[54px] rounded-full border border-fintech-border flex items-center justify-center text-fintech-textDark hover:border-fintech-blue hover:text-fintech-blue transition-colors group cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </motion.button>
        </motion.div>

        {/* Right Side: Glowing Mock Card */}
        <div className="flex-1 w-full relative h-[400px] flex items-center justify-center perspective-1000">
          <div className="absolute w-[400px] h-[400px] bg-fintech-blue/15 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -15, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
            whileHover={{ rotateY: 5, rotateX: -5, scale: 1.05 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-[320px] h-[200px] bg-gradient-to-br from-neutral-800 to-black rounded-xl border border-white/20 shadow-[0_30px_60px_rgba(59,130,246,0.3)] overflow-hidden"
          >
             {/* Card Chip */}
             <div className="absolute top-6 left-6 w-12 h-9 rounded bg-gradient-to-br from-yellow-200 to-yellow-600 opacity-80"></div>
             
             {/* Contactless Icon */}
             <div className="absolute top-6 right-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.5 16.5a7 7 0 0 1 0-9" />
                  <path d="M12 18.5a10 10 0 0 1 0-13" />
                  <path d="M15.5 20.5a13 13 0 0 1 0-17" />
                </svg>
             </div>

             <div className="absolute bottom-6 left-6">
                <p className="text-fintech-textDark font-mono text-lg tracking-widest mb-1">JOHN DOE</p>
                <div className="flex items-center space-x-2">
                   <span className="text-[14px] font-bold tracking-tight text-fintech-textDark" style={{ fontFamily: "Playfair Display, serif" }}>
                     Wealthsimple
                   </span>
                   <span className="text-fintech-emerald font-semibold text-xs border border-fintech-emerald px-2 py-0.5 rounded uppercase">Cash</span>
                </div>
             </div>
          </motion.div>
          
          {/* Floating Callout Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-[20%] right-[10%] lg:right-[5%] z-20 fintech-glass py-3 px-5 flex items-center gap-3 border-fintech-blue/30"
          >
            <div className="w-8 h-8 rounded-full bg-fintech-blue/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            </div>
            <div>
               <p className="text-fintech-textDark text-sm font-semibold">High-Yield Interest</p>
               <p className="text-fintech-blue text-xs font-medium">Earn daily</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ChequingShowcase;
