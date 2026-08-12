import React, { useRef, useState, useEffect } from 'react';
import videoSrc from '../assets/MoreIsMore_EN_Desktop-h265.mp4';
import heroPoster from '../assets/Frame_1.avif';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

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
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        ref={videoRef}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        poster={heroPoster}
        className="absolute inset-0 w-full h-full object-cover"
        onCanPlay={(e) => e.target.play()}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay to dim slightly */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Main Container for Layout */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-24 pb-12">
        
        {/* Central Content Area */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[360px] md:w-[420px] h-[550px] flex flex-col justify-between pt-12 pb-8 px-6 mt-4 z-10">
          
         

          {/* Bottom Section */}
          <div className="flex flex-col items-center mt-auto space-y-8 relative z-30">
            <button className="border border-white/50 text-white px-7 py-5 rounded-full font-medium hover:bg-white/20 transition-colors backdrop-blur-md w-max shadow-sm cursor-pointer pointer-events-auto">
              Get started
            </button>
            
          
          </div>
        </div>

        {/* Floating Huge Text (Positioned exactly over the card) */}
        <div className="relative z-20 flex flex-col items-center text-center mt-20 md:mt-24 pointer-events-none">
         <h1
  className="text-[clamp(2rem,3.01vw+1.41rem,4rem)] font-serif text-white mb-4 drop-shadow-lg leading-none"
  style={{ fontFamily: "Playfair Display, serif" }}
>
  More is more
</h1>
          <p className="text-lg md:text-[20px] text-white drop-shadow-md">
            Being better than a bank means more of everything.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
