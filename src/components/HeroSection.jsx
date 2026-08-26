import React, { useState } from 'react';
import bgImg from '../assets/hero_bg.jpg';

const HeroSection = ({ onSignupClick }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSignupClick) {
      onSignupClick(email);
    }
  };

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
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-6 pt-32 pb-16">
        
        {/* Kicker / Category Title */}
        <p className="text-neutral-300 text-sm md:text-base font-semibold tracking-wide mb-4 font-serif">
          Monthly Millionaire
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold text-white mb-8 drop-shadow-md leading-[1.08] tracking-tight max-w-2xl">
          We’re giving <br className="hidden sm:inline" />
          away $1M <br className="hidden sm:inline" />
          every month
        </h1>

        {/* Email Entry Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-[340px] sm:max-w-[380px] flex flex-col gap-3.5">
          <div className="relative w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full bg-[#12141d]/80 text-white placeholder:text-neutral-400 text-base px-6 py-4 rounded-full border border-neutral-700/80 focus:border-white focus:outline-none transition-all shadow-inner backdrop-blur-sm"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-white text-neutral-950 font-semibold text-base py-4 rounded-full hover:bg-neutral-100 active:scale-[0.99] transition-all duration-200 cursor-pointer shadow-lg hover:shadow-white/10"
          >
            Enter now
          </button>
        </form>

      </div>
    </section>
  );
};

export default HeroSection;
