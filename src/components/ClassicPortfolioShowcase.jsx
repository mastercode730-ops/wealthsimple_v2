import React from 'react';
import { motion } from 'framer-motion';

const ClassicPortfolioShowcase = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-black border-t border-fintech-border/50">
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Top Text Content (Centered Editorial) */}
        <motion.div
          className="text-center w-full max-w-3xl mb-16"
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
            className="inline-flex items-center space-x-2 text-fintech-emerald mb-6 px-4 py-1.5 rounded-full border border-fintech-emerald/30 bg-fintech-emerald/10"
          >
             <span className="text-xs font-bold tracking-widest uppercase">The Standard</span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <motion.span className="block" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              The Classic Portfolio.
            </motion.span>
          </h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            A bedrock of broad-market index funds. Low-fee, diversified, and designed to track the global economy. Set it, forget it, and let time do the heavy lifting.
          </motion.p>
        </motion.div>

        {/* Bottom Three-Column Benefit Blocks (Solid, Clean Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8">
           {[
             { title: "Global Diversification", text: "Exposure to thousands of stocks and bonds across global markets." },
             { title: "Dividend Reinvestment", text: "Automatically reinvests your earnings to compound your wealth faster." },
             { title: "Auto-Rebalancing", text: "We buy low and sell high to maintain your target risk profile." }
           ].map((benefit, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.6, delay: idx * 0.15 }}
               className="bg-fintech-darker border border-fintech-border p-8 rounded-2xl flex flex-col items-start"
             >
               <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                 <div className="w-4 h-4 bg-white rounded-full"></div>
               </div>
               <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
               <p className="text-neutral-400 text-sm leading-relaxed">{benefit.text}</p>
             </motion.div>
           ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.6, delay: 0.6 }}
           className="mt-16"
        >
          <button className="fintech-btn-secondary">Explore classic portfolios</button>
        </motion.div>

      </div>
    </section>
  );
};

export default ClassicPortfolioShowcase;
