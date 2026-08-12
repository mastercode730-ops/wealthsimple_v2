import React from 'react';
import { motion } from 'framer-motion';
import tldrWords from '../assets/tldrwords.svg';

const TldrSection = () => {
  return (
    <section className="w-full bg-[#EEE3B1] flex flex-col items-center justify-center py-14 relative">
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
        className="flex flex-col items-center justify-center w-full"
      >
        <motion.h2 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
          }}
          className="w-full flex items-center justify-center gap-[3vw] md:gap-[2vw] px-4 max-w-[1400px] mx-auto mb-6"
        >
          <img
            src={tldrWords}
            alt="TLDR"
            className="w-[20vw] max-w-[300px] h-auto object-contain"
          />

          <div
            className="flex items-center justify-center shrink-0 scale-[1.7]"
            style={{
              width: "clamp(55px, 8vw, 84px)",
              height: "clamp(55px, 8vw, 84px)",
            }}
          >
            <span
              className="leading-none"
              style={{
                fontSize: "clamp(32px, 4vw, 50px)",
              }}
            >
              🙂
            </span>
          </div>
        </motion.h2>
              
        <p className="text-[32px] md:text-[46px] font-sans font-normal max-w-[1000px] text-[#2d2a26] leading-[1.3] mb-12 tracking-[-0.01em] text-center px-6">
          <motion.span
            className="block"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
          >
            A weekly dose of money, culture, and
          </motion.span>
          <motion.span
            className="block"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
          >
            enough financial news to make you sound
          </motion.span>
          <motion.span
            className="block"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
          >
            smart at parties
          </motion.span>
        </p>
              
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
          }}
          className="px-8 py-4 rounded-[100px] border border-[#2d2a26] text-[#2d2a26] text-[15px] hover:bg-black/5 transition-colors cursor-pointer"
        >
          Read the latest newsletter    
        </motion.button>
      </motion.div>
    </section>
  );
};

export default TldrSection;
