import React, { useRef, useState } from "react";
import frame1 from "../assets/Frame_1.avif";

const StatsSection = () => {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20; // Adjust division to control tilt sensitivity
    const y = -(e.clientY - top - height / 2) / 20;
    
    setTransform(`perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.05, 1.05, 1.05)`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <section className="py-24 md:py-40 text-center bg-[#f4f3ef] relative">
      <div className="container-custom flex flex-col items-center relative z-10">
      <h2
  className="
    text-[clamp(3.5rem,6.77vw+2.18rem,8rem)]
    leading-[108%]
    font-normal
    tracking-[-0.01em]
    text-[#2d2a26]
    max-w-[1000px]
    [text-wrap:balance]
    mb-10
  "
  style={{
    fontFamily: 'Tiempos, Lucida, Georgia, serif',
  }}
>
  Trusted by over 4 <br className="hidden md:block" />
  million Canadians
</h2>
        <button className="px-10 py-5 rounded-[100px] border border-[#2d2a26] text-[#2d2a26] text-[14px] font-normal hover:bg-black/5 transition-colors cursor-pointer mb-24">
          Get started
        </button>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ 
            transform, 
            transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out" 
          }}
          className="flex items-center justify-center cursor-pointer"
        >
          <img src={frame1} alt="Stats Graphic" className="w-80 h-80 md:w-[500px] md:h-[500px] object-contain pointer-events-none drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
