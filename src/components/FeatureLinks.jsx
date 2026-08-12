import React from 'react';
import { motion } from 'framer-motion';

import chequingSvg from '../assets/Chequing.3befb839.svg';
import tradeSvg from '../assets/Trade.80aeb063.svg';
import investSvg from '../assets/Invest.ae8fb2d1.svg';
import adviceSvg from '../assets/Advice.5985128a.svg';
import businessSvg from '../assets/Business.8a7669b6.svg';

const featureData = [
  {
    title: 'Chequing',
    description: "Canada's most\nrewarding way\nto spend and\nsave money",
    iconB: <img src={chequingSvg} alt="Chequing" className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain" />
  },
  {
    title: 'Trade',
    description: "Commission-free\nstock trading and\noptions.",
    iconB: <img src={tradeSvg} alt="Trade" className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain" />
  },
  {
    title: 'Invest',
    description: "Automated\ninvesting with\nsmart portfolios.",
    iconB: <img src={investSvg} alt="Invest" className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain" />
  },
  {
    title: 'Advice',
    description: "Connect with a\nportfolio manager\nfor advice.",
    iconB: <img src={adviceSvg} alt="Advice" className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain" />
  },
  {
    title: 'Business',
    description: "Smart corporate\naccounts to grow\nyour business.",
    iconB: <img src={businessSvg} alt="Business" className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] object-contain" />
  }
];

const FeatureLinks = () => {
  const transitionSettings = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

  return (
    <section className="py-20 md:py-32 bg-[#F5F5F0]">
      <div className="container-custom flex flex-col items-center justify-center px-4 md:px-8">
        {featureData.map((item, index) => (
          <React.Fragment key={index}>
            {/* Desktop Layout (Hover effect) */}
            <motion.a 
              href={`#${item.title.toLowerCase()}`}
              className="hidden lg:flex group relative items-center justify-center w-full max-w-[1200px] py-5 my-1 rounded-[24px] cursor-pointer"
              initial="rest"
              animate="rest"
              whileHover="hover"
              variants={{
                rest: { scale: 1, backgroundColor: "rgba(255, 255, 255, 0)", boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
                hover: { scale: 1.02, backgroundColor: "rgba(255, 255, 255, 1)", boxShadow: "0px 10px 30px rgba(0,0,0,0.05)" }
              }}
              transition={transitionSettings}
            >
              {/* Left Icons Container */}
              <div className="absolute left-12 flex items-center justify-start pointer-events-none">
                <motion.div
                  variants={{
                    rest: { opacity: 0, x: -40 },
                    hover: { opacity: 1, x: 0 }
                  }}
                  transition={transitionSettings}
                >
                  {item.iconB}
                </motion.div>
              </div>

              {/* Center Text */}
              <h2 
                className="text-[90px] xl:text-[120px] font-normal text-[#2d2a26] m-0 leading-none tracking-[-0.02em] z-10 transition-colors"
                style={{ fontFamily: "'Tiempos', 'Playfair Display', Georgia, serif" }}
              >
                {item.title}
              </h2>

              {/* Right Text */}
              <div className="absolute right-12 flex items-center justify-end pointer-events-none">
                <motion.div 
                  className="text-[16px] text-center text-[#2d2a26] leading-[1.3] tracking-[0.01em] whitespace-pre-line font-sans max-w-[180px]" 
                  variants={{
                    rest: { opacity: 0, x: 40 },
                    hover: { opacity: 1, x: 0 }
                  }}
                  transition={transitionSettings}
                >
                  {item.description}
                </motion.div>
              </div>
            </motion.a>

            {/* Mobile/Tablet Layout (No hover, stacked) */}
            <a 
              href={`#${item.title.toLowerCase()}`} 
              className="flex lg:hidden flex-col items-start w-full py-8 md:py-10 border-b border-black/20 last:border-b-0 cursor-pointer"
            >
              <div className="flex justify-between items-center w-full mb-2 md:mb-4">
                <h2 
                  className="text-[56px] md:text-[90px] font-normal text-[#2d2a26] m-0 leading-none tracking-[-0.02em]" 
                  style={{ fontFamily: "'Tiempos', 'Playfair Display', Georgia, serif" }}
                >
                  {item.title}
                </h2>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
              <p className="text-[18px] md:text-[24px] text-[#2d2a26] leading-[1.3] font-sans max-w-[280px] md:max-w-[450px]">
                {item.description.replace(/\n/g, ' ')}
              </p>
            </a>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default FeatureLinks;
