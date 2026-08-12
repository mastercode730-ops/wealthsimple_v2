import React from 'react';
import { motion } from 'framer-motion';
import imgSrc from '../assets/credit-card-d-product-hero.webp';

const CreditCardShowcase = () => {
  return (
    <section className="relative w-full h-screen flex items-start pt-[12vh] lg:items-center lg:pt-0 overflow-hidden bg-[#8a7c76]">
      {/* Background Image */}
      <img 
        src={imgSrc} 
        alt="Wealthsimple Credit Card"
        className="absolute bottom-0 w-full h-[85%] object-cover object-[80%_center] lg:inset-0 lg:h-full lg:object-center z-0"
      />

      {/* Desktop Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 hidden lg:block" 
        style={{
          background: 'linear-gradient(0.25turn, #8a7c76, transparent 60%)'
        }}
      ></div>

      {/* Mobile Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 lg:hidden" 
        style={{
          background: 'linear-gradient(180deg, #8a7c76 15%, transparent 40%)'
        }}
      ></div>

      {/* Content Area */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6">
        <div className="w-full max-w-[1000px] pl-4 md:pl-4">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
              }}
              className="flex items-baseline space-x-2 text-white mb-6"
            >
              <span className="text-[24px] font-bold tracking-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                Wealthsimple
              </span>
              <span className="text-[24px] font-sans font-normal tracking-wide">Credit card</span>
            </motion.div>

            <h2
              className="text-[clamp(1.875rem,1.69vw+1.55rem,3rem)] font-medium text-white leading-[1.15] mb-10 font-sans tracking-tight"
            >
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                }}
              >
                The simplest way to
              </motion.span>
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                }}
              >
                get 2% cash back on
              </motion.span>
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                }}
              >
                everything you buy
              </motion.span>
            </h2>

            <motion.button
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
              }}
              className="w-[88px] h-[54px] rounded-full border border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors group cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardShowcase;
