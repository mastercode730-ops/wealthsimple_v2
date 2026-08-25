import React from 'react';
import bgImg from '../assets/hero_bg.jpg';

const HeroSection = ({ onSignupClick }) => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-fintech-darker">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      
      {/* Overlay Gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090a0f]/80 via-[#090a0f]/90 to-[#090a0f]"></div>

      {/* Main Container for Layout */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-6 pt-28 pb-16">
        
        <h1
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-md leading-tight tracking-tight"
        >
          Make Your Money <br className="hidden md:block"/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fintech-teal to-fintech-emerald">
            Work Harder.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 font-medium">
          Invest, save, and grow your wealth with smarter financial tools built for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button 
            onClick={onSignupClick}
            className="fintech-btn-primary text-lg"
          >
            Get started
          </button>
          <button 
            className="fintech-btn-secondary text-lg"
          >
            Learn more
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
