import React from 'react';
import { motion } from 'framer-motion';
import coinstackIcon from '../assets/coinstack.44817e4e.svg';

const WelcomeSection = () => {
  return (
    <section className="py-24 md:py-32 bg-ws-off-white">
      <div className="container-custom px-[2.5rem]">
        
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
          {/* Icon */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="mb-6"
          >
            <img src={coinstackIcon} alt="Coin Stack" width="180" height="180" />
          </motion.div>

          {/* Content */}
          <h2
            className="text-[clamp(2rem,9.02vw+0.24rem,8rem)] font-normal tracking-[-0.01em] leading-[116%] text-[#2d2a26] mb-8"
            style={{
              fontFamily: 'Tiempos, Lucida, Georgia, serif',
              fontStyle: 'normal',
            }}
          >
            <motion.span
              className="block"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
              }}
            >
              Welcome to the
            </motion.span>
            <motion.span
              className="block"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
              }}
            >
              future of money
            </motion.span>
          </h2>
                  
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="text-[clamp(1.25rem,1.13vw+1.03rem,2rem)] leading-[140%] font-normal tracking-[0.005em] text-[#2d2a26] mb-12 max-w-[700px]"
            style={{
              fontFamily: 'the-future, system-ui, Helvetica Neue, sans-serif',
              fontStyle: 'normal',
            }}
          >
            Why are we here? Because we knew there was a better way. To save more,
            trade smarter, lower fees, invest like a pro, and even earn real interest
            on a chequing account. Welcome to the fastest growing financial company in
            Canada. Built for what comes next.
          </motion.p>
                  
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="text-[9px] md:text-[10.5px] text-[#2d2a26] opacity-60 leading-[1.4] max-w-[700px] font-sans"
          >
            As of April 21, 2026 Wealthsimple has the fastest asset and trading volume growth in Canadian online brokerages in 2025 according to data collected by Investor Insight and Institutional Shareholder Services Canada Inc.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default WelcomeSection;
