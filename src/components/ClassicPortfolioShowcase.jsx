import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import videoSrc from '../assets/classic-desktopBg-video-h265-en-CA.mp4';

const ClassicPortfolioShowcase = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full h-screen flex items-start pt-[12vh] lg:items-center lg:pt-0 overflow-hidden bg-ws-off-white">
      {/* Background Video */}
      <video 
        ref={videoRef}
        src={videoSrc}
        className="absolute bottom-0 w-full h-[85%] object-cover object-[80%_center] lg:inset-0 lg:h-full lg:object-center z-0"
        autoPlay 
        loop 
        muted 
        playsInline
      />

      {/* Mobile Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 lg:hidden" 
        style={{
          background: 'linear-gradient(180deg, #F5F5F0 15%, transparent 40%)'
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
              className="flex items-baseline space-x-2 text-[#2d2a26] mb-6"
            >
              <span className="text-[24px] font-bold tracking-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                Wealthsimple
              </span>
              <span className="text-[24px] font-sans font-normal tracking-wide text-neutral-500">Portfolios</span>
            </motion.div>

            <h2
              className="text-[clamp(1.875rem,1.69vw+1.55rem,3rem)] font-medium text-[#2d2a26] leading-[116%] tracking-[0.005em] mb-10 font-sans"
            >
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                }}
              >
                The Classic portfolio.
              </motion.span>
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                }}
              >
                Low-fee, diversified,
              </motion.span>
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                }}
              >
                and as aggressive
              </motion.span>
              <motion.span
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                }}
              >
                (or not) as you need.
              </motion.span>
            </h2>

            <motion.button
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
              }}
              className="w-[88px] h-[54px] rounded-full border border-[#2d2a26] flex items-center justify-center text-[#2d2a26] hover:bg-black/5 transition-colors group cursor-pointer"
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

export default ClassicPortfolioShowcase;
