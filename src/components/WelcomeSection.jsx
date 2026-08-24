import React from 'react';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  return (
    <section className="py-24 md:py-32 bg-fintech-lighter">
      <div className="container-custom px-[2.5rem] max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Content */}
        <motion.div
          className="flex-1 w-full"
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
            className="w-16 h-16 bg-gradient-to-br from-fintech-emerald to-fintech-teal rounded-2xl mb-8 flex items-center justify-center shadow-sm"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-fintech-textDark mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <motion.span className="block" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              Architect
            </motion.span>
            <motion.span className="block text-fintech-teal" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              Your Wealth
            </motion.span>
          </h2>
                  
          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg md:text-xl text-neutral-400 mb-8 max-w-[500px] leading-relaxed"
          >
            The smartest tools to save, invest, and compound your money. Built for people who expect more from their financial institution. Lower fees, powerful portfolios, and intuitive design.
          </motion.p>
          
          <motion.button
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="fintech-btn-primary"
          >
            Explore our platform
          </motion.button>
        </motion.div>

        {/* Right Side: Visual Abstract */}
        <motion.div
          className="flex-1 w-full relative hidden md:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          {/* Decorative abstract elements */}
          <div className="absolute w-[400px] h-[400px] bg-fintech-blue/10 rounded-full blur-[80px] -top-10 -right-10 mix-blend-screen pointer-events-none"></div>
          <div className="absolute w-[300px] h-[300px] bg-fintech-emerald/10 rounded-full blur-[60px] bottom-10 -left-10 mix-blend-screen pointer-events-none"></div>
          
          <div className="fintech-glass relative z-10 w-full max-w-[400px] aspect-square flex flex-col justify-end p-8 border-t-2 border-t-fintech-teal/30">
             <div className="w-full flex items-end gap-3 h-48 opacity-80">
               {[40, 65, 45, 80, 55, 95, 70, 100].map((height, i) => (
                 <motion.div 
                   key={i}
                   className="flex-1 bg-gradient-to-t from-fintech-teal/20 to-fintech-emerald rounded-t-sm"
                   initial={{ height: 0 }}
                   whileInView={{ height: `${height}%` }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: i * 0.1 }}
                 />
               ))}
             </div>
             <p className="text-fintech-textDark font-medium mt-6 text-xl">Compounding growth</p>
             <p className="text-neutral-400 text-sm mt-1">Smarter algorithms, better returns.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
