import React from 'react';
import { motion } from 'framer-motion';

const TldrSection = () => {
  return (
    <section className="w-full bg-fintech-dark flex flex-col items-center justify-center py-24 relative overflow-hidden">
      {/* Radial Blue Glow for atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-fintech-blue/20 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
        }}
        className="w-full max-w-4xl px-4 z-10"
      >
        <div className="fintech-glass flex flex-col md:flex-row items-center gap-10 p-10 md:p-14">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-fintech-blue font-semibold uppercase tracking-widest text-sm mb-4">Market Insights</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Intelligence that pays dividends.
            </h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-[400px]">
              Get the signal, ignore the noise. Sign up for our weekly market breakdown, built for serious builders of wealth.
            </p>
          </div>
          
          <div className="w-full md:w-[350px] shrink-0 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="text-white font-medium mb-4">Subscribe to the newsletter</h4>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="w-full bg-black/40 border border-fintech-border text-white px-4 py-3 rounded-lg outline-none focus:border-fintech-blue transition-colors placeholder:text-neutral-600"
              />
              <button className="w-full bg-fintech-blue text-white font-medium py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-lg">
                Get Insights
              </button>
            </div>
            <p className="text-neutral-500 text-xs mt-4 text-center">Unsubscribe at any time. Read our privacy policy.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TldrSection;
