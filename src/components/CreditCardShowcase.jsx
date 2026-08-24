import React from 'react';
import { motion } from 'framer-motion';

const CreditCardShowcase = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-white border-t border-fintech-border/50">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-fintech-emerald/10 via-black to-black opacity-60"></div>
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Credit Card Mockup with Sweep */}
        <div className="flex-1 w-full relative h-[400px] flex items-center justify-center perspective-1000">
           {/* Glow behind card */}
           <div className="absolute w-[300px] h-[300px] bg-fintech-emerald/20 rounded-full blur-[80px]"></div>

           <motion.div 
             initial={{ opacity: 0, rotateY: 20, rotateX: 20 }}
             whileInView={{ opacity: 1, rotateY: 15, rotateX: 10 }}
             whileHover={{ rotateY: 5, rotateX: 0, scale: 1.05 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
             className="relative z-10 w-[340px] h-[215px] bg-gradient-to-tr from-fintech-darker via-[#1a1a1a] to-[#2a2a2a] rounded-xl shadow-[0_20px_50px_rgba(16,185,129,0.2)] overflow-hidden border border-white/10"
           >
              {/* Emerald Sweep Animation */}
              <motion.div 
                animate={{ left: ['-100%', '200%'] }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
                className="absolute top-0 bottom-0 w-[50px] bg-gradient-to-r from-transparent via-fintech-emerald/30 to-transparent skew-x-[-30deg]"
              ></motion.div>
              
              <div className="absolute top-6 left-6 flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-fintech-emerald/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-fintech-emerald rounded-full"></div>
                 </div>
                 <span className="text-fintech-textDark font-serif font-bold tracking-wider">Wealthsimple</span>
              </div>
              
              <div className="absolute bottom-6 left-6">
                 <p className="text-fintech-textDark font-mono tracking-[0.2em] opacity-80 mb-2">**** **** **** 4092</p>
                 <p className="text-fintech-textDark text-sm font-medium">VISA INFINITE</p>
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
            <span className="text-[24px] font-sans font-normal tracking-wide text-fintech-textDark">Credit card</span>
          </motion.div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-fintech-textDark leading-tight mb-8 font-sans"
          >
            <motion.span className="block" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              Spend and conquer.
            </motion.span>
          </h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg text-neutral-400 mb-10 max-w-md leading-relaxed"
          >
            A premium credit card that turns your everyday spending into serious wealth. Earn rewards that automatically invest into your portfolio.
          </motion.p>

          <motion.ul 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="space-y-4 mb-10"
          >
            {[
              "Earn cashback on every purchase",
              "No foreign transaction fees",
              "Premium travel insurance included"
            ].map((feature, i) => (
              <li key={i} className="flex items-center text-fintech-textDark">
                <svg className="w-5 h-5 text-fintech-emerald mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                {feature}
              </li>
            ))}
          </motion.ul>

          <motion.button
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="fintech-btn-primary"
          >
            Join the waitlist
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default CreditCardShowcase;
