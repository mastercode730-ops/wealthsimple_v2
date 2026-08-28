import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { openSupportChat } from '../utils/supportChat';

const FeatureLinks = ({ onSignupClick, activeTab: propActiveTab, setActiveTab: propSetActiveTab }) => {
  const [internalActiveTab, setInternalActiveTab] = useState('Chequing');
  const activeTab = propActiveTab !== undefined ? propActiveTab : internalActiveTab;
  const setActiveTab = propSetActiveTab || setInternalActiveTab;

  const categories = [
    { id: 'Chequing', name: 'Chequing', desc: 'High interest, zero everyday banking fees.' },
    { id: 'Trade', name: 'Trade', desc: 'Zero commission stocks, ETFs, options & crypto.' },
    { id: 'Invest', name: 'Invest', desc: 'Automated low-fee investing and wealth growth.' },
    { id: 'Advice', name: 'Advice', desc: 'Fiduciary financial planning with dedicated CFPs.' },
    { id: 'Business', name: 'Business', desc: 'High-yield corporate savings and treasury tools.' },
  ];

  return (
    <section id="solutions" className="bg-fintech-darker py-10 sm:py-16 lg:py-24 flex flex-col items-center justify-center border-b border-neutral-800/80 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl px-4 sm:px-6 flex flex-col items-center relative z-10">
        {/* Solution Title - Visible on Desktop/Tablet, Hidden on Mobile where Hamburger is used */}
        <p className="hidden md:block text-neutral-400 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-6 text-center">
          Explore Our Solutions
        </p>

        {/* Stable Non-Jumping Pill Switcher - Hidden on mobile view, shown on md+ screens */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 p-1.5 bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-full shadow-2xl relative z-20 max-w-full">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full transition-colors duration-200 flex items-center justify-center outline-none cursor-pointer select-none text-sm sm:text-[15px] font-medium tracking-wide ${
                  isActive ? 'text-black font-semibold' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {/* Smooth Sliding Pill Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                
                <span className="relative z-10">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Tagline Under Pill Bar - Hidden on mobile view */}
        <div className="hidden md:flex h-8 mt-3 items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="text-neutral-400 text-xs sm:text-sm font-medium"
            >
              {categories.find((c) => c.id === activeTab)?.desc}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Tab Meaning-Wise Content Showcase with Smooth Transition */}
        <div className="w-full mt-4 sm:mt-10 lg:mt-14 min-h-[420px] sm:min-h-[460px]">
          <AnimatePresence mode="wait">
            {activeTab === 'Chequing' && (
              <motion.div
                key="Chequing"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 py-6"
              >
                {/* Left Side: Copy */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-fintech-blue mb-4">
                    <span className="text-[24px] font-bold tracking-tight text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Wealthsimple
                    </span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                      Cash
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6 font-sans">
                    Your money,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                      unchained.
                    </span>
                  </h2>

                  <p className="text-neutral-400 text-base sm:text-lg mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
                    Earn up to 4.5% interest on your everyday balance. Spend, send, and save with zero account fees, free Interac e-Transfers, and CDIC insurance up to $500,000.
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <button
                      onClick={() => onSignupClick && onSignupClick()}
                      className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-emerald-500/20 cursor-pointer text-sm sm:text-base"
                    >
                      Open a Cash Account
                    </button>
                    <button
                      onClick={openSupportChat}
                      className="border border-neutral-700 hover:border-neutral-500 text-white font-medium px-6 py-3 rounded-full transition-colors cursor-pointer text-sm"
                    >
                      Have Questions?
                    </button>
                  </div>
                </div>

                {/* Right Side: Visual Mockup */}
                <div className="flex-1 w-full relative h-[320px] sm:h-[380px] flex items-center justify-center">
                  <div className="absolute w-[300px] h-[300px] bg-emerald-500/15 rounded-full blur-[90px] pointer-events-none" />

                  {/* Cash Card */}
                  <motion.div
                    whileHover={{ scale: 1.03, rotateX: -3, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 w-[290px] sm:w-[340px] h-[190px] sm:h-[210px] bg-gradient-to-br from-neutral-800 via-neutral-900 to-black rounded-2xl border border-neutral-700/80 shadow-2xl p-6 flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center">
                      <div className="w-11 h-8 rounded bg-gradient-to-br from-yellow-200 to-amber-600 opacity-90 shadow-sm" />
                      <span className="text-neutral-400 font-mono text-xs tracking-wider">PREPAID MASTERCARD</span>
                    </div>

                    <div>
                      <p className="text-white font-mono text-base tracking-widest mb-1">JOHN DOE</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Wealthsimple
                        </span>
                        <span className="text-emerald-400 text-[10px] font-bold border border-emerald-400/40 px-1.5 py-0.5 rounded">
                          CASH
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Highlight Badges */}
                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="absolute top-4 sm:top-8 right-2 sm:right-10 z-20 bg-neutral-900/90 border border-emerald-500/30 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-xl flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      4.5%
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white leading-tight">High-Yield Interest</p>
                      <p className="text-[11px] text-emerald-400">Calculated & paid daily</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="absolute bottom-4 sm:bottom-6 left-2 sm:left-10 z-20 bg-neutral-900/90 border border-neutral-700 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-xl flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                      1%
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white leading-tight">Cash Back Rewards</p>
                      <p className="text-[11px] text-neutral-400">On all card spending</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'Trade' && (
              <motion.div
                key="Trade"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 py-6"
              >
                {/* Left Side: Copy */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-fintech-blue mb-4">
                    <span className="text-[24px] font-bold tracking-tight text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Wealthsimple
                    </span>
                    <span className="text-xs bg-teal-500/20 text-teal-400 border border-teal-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                      Trade
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6 font-sans">
                    Execute with<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
                      precision & $0 commission.
                    </span>
                  </h2>

                  <p className="text-neutral-400 text-base sm:text-lg mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
                    Trade thousands of US & Canadian stocks, ETFs, options, and 50+ cryptocurrencies. Real-time market quotes, fractional shares, and instant deposits.
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <button
                      onClick={() => onSignupClick && onSignupClick()}
                      className="bg-teal-400 hover:bg-teal-300 text-black font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-teal-400/20 cursor-pointer text-sm sm:text-base"
                    >
                      Start Trading Free
                    </button>
                    <button
                      onClick={openSupportChat}
                      className="border border-neutral-700 hover:border-neutral-500 text-white font-medium px-6 py-3 rounded-full transition-colors cursor-pointer text-sm"
                    >
                      Explore Markets
                    </button>
                  </div>
                </div>

                {/* Right Side: Trading Terminal Mockup */}
                <div className="flex-1 w-full relative h-[320px] sm:h-[380px] flex items-center justify-center">
                  <div className="absolute w-[300px] h-[300px] bg-teal-500/15 rounded-full blur-[90px] pointer-events-none" />

                  <div className="relative z-10 w-full max-w-[380px] bg-neutral-900/90 border border-neutral-700 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
                    <div className="flex justify-between items-center pb-3 border-b border-neutral-800">
                      <div>
                        <span className="text-xs text-neutral-400 font-mono">NVDA • NASDAQ</span>
                        <h4 className="text-lg font-bold text-white leading-tight">$124.50 <span className="text-xs text-emerald-400 font-normal">+4.2%</span></h4>
                      </div>
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md font-mono font-medium">LIVE</span>
                    </div>

                    {/* Chart simulation */}
                    <div className="h-32 w-full my-3 flex items-end justify-between gap-1.5 px-2 pt-4">
                      {[40, 55, 45, 65, 60, 75, 70, 85, 80, 95, 90, 110].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div 
                            style={{ height: `${h}%` }} 
                            className="w-full bg-gradient-to-t from-teal-500/30 to-teal-400 rounded-t-sm"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="bg-neutral-800/80 p-2.5 rounded-xl text-center">
                        <p className="text-[10px] text-neutral-400 uppercase">Commission</p>
                        <p className="text-sm font-bold text-emerald-400">$0.00</p>
                      </div>
                      <div className="bg-neutral-800/80 p-2.5 rounded-xl text-center">
                        <p className="text-[10px] text-neutral-400 uppercase">Fractional Shares</p>
                        <p className="text-sm font-bold text-white">From $1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'Invest' && (
              <motion.div
                key="Invest"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 py-6"
              >
                {/* Left Side: Copy */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-fintech-blue mb-4">
                    <span className="text-[24px] font-bold tracking-tight text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Wealthsimple
                    </span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                      Managed
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6 font-sans">
                    Automated wealth growth,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
                      built for the long run.
                    </span>
                  </h2>

                  <p className="text-neutral-400 text-base sm:text-lg mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
                    Personalized, globally diversified portfolios designed by investment experts. Low management fees, automatic dividend reinvesting, and continuous rebalancing.
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <button
                      onClick={() => onSignupClick && onSignupClick()}
                      className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-emerald-500/20 cursor-pointer text-sm sm:text-base"
                    >
                      Build Your Portfolio
                    </button>
                    <button
                      onClick={openSupportChat}
                      className="border border-neutral-700 hover:border-neutral-500 text-white font-medium px-6 py-3 rounded-full transition-colors cursor-pointer text-sm"
                    >
                      How It Works
                    </button>
                  </div>
                </div>

                {/* Right Side: Portfolio Cards */}
                <div className="flex-1 w-full relative h-[320px] sm:h-[380px] flex items-center justify-center">
                  <div className="absolute w-[300px] h-[300px] bg-emerald-500/15 rounded-full blur-[90px] pointer-events-none" />

                  <div className="relative z-10 w-full max-w-[360px] bg-neutral-900/90 border border-neutral-700 rounded-2xl p-6 shadow-2xl backdrop-blur-md space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                      <div>
                        <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Growth Portfolio</span>
                        <h4 className="text-xl font-bold text-white">TFSA / RRSP</h4>
                      </div>
                      <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-semibold">
                        0.4% Fee
                      </span>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-neutral-300">Global Equities (US & Intl)</span>
                        <span className="text-white font-bold">75%</span>
                      </div>
                      <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full rounded-full" style={{ width: '75%' }} />
                      </div>

                      <div className="flex justify-between text-xs pt-1">
                        <span className="text-neutral-300">Government & Corp Bonds</span>
                        <span className="text-white font-bold">20%</span>
                      </div>
                      <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-teal-400 h-full rounded-full" style={{ width: '20%' }} />
                      </div>

                      <div className="flex justify-between text-xs pt-1">
                        <span className="text-neutral-300">Gold & Commodities</span>
                        <span className="text-white font-bold">5%</span>
                      </div>
                      <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full rounded-full" style={{ width: '5%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'Advice' && (
              <motion.div
                key="Advice"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 py-6"
              >
                {/* Left Side: Copy */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-fintech-blue mb-4">
                    <span className="text-[24px] font-bold tracking-tight text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Wealthsimple
                    </span>
                    <span className="text-xs bg-purple-500/20 text-purple-400 border border-purple-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                      Advisory
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6 font-sans">
                    Fiduciary guidance for<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                      life's big milestones.
                    </span>
                  </h2>

                  <p className="text-neutral-400 text-base sm:text-lg mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
                    Get customized 1-on-1 financial planning with Certified Financial Planners (CFPs). Tax minimization strategies, retirement roadmaps, and estate coordination.
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <button
                      onClick={openSupportChat}
                      className="bg-purple-500 hover:bg-purple-400 text-white font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-purple-500/20 cursor-pointer text-sm sm:text-base"
                    >
                      Talk to an Advisor
                    </button>
                    <button
                      onClick={() => onSignupClick && onSignupClick()}
                      className="border border-neutral-700 hover:border-neutral-500 text-white font-medium px-6 py-3 rounded-full transition-colors cursor-pointer text-sm"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Right Side: Advisory Board Mockup */}
                <div className="flex-1 w-full relative h-[320px] sm:h-[380px] flex items-center justify-center">
                  <div className="absolute w-[300px] h-[300px] bg-purple-500/15 rounded-full blur-[90px] pointer-events-none" />

                  <div className="relative z-10 w-full max-w-[360px] bg-neutral-900/90 border border-neutral-700 rounded-2xl p-6 shadow-2xl backdrop-blur-md space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-neutral-800">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-sm">
                        CFP
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Dedicated Financial Planner</h4>
                        <p className="text-xs text-purple-400">Fiduciary • Zero Commission</p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-1">
                      <div className="bg-neutral-800/60 p-3 rounded-xl border border-neutral-700/50 flex justify-between items-center">
                        <div>
                          <p className="text-xs font-semibold text-white">Retirement Roadmap</p>
                          <p className="text-[11px] text-neutral-400">Target Age: 55 • On Track</p>
                        </div>
                        <span className="text-xs text-emerald-400 font-bold">100%</span>
                      </div>

                      <div className="bg-neutral-800/60 p-3 rounded-xl border border-neutral-700/50 flex justify-between items-center">
                        <div>
                          <p className="text-xs font-semibold text-white">Annual Tax Optimization</p>
                          <p className="text-[11px] text-neutral-400">Projected savings</p>
                        </div>
                        <span className="text-xs text-purple-300 font-bold">+$12,400</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'Business' && (
              <motion.div
                key="Business"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 py-6"
              >
                {/* Left Side: Copy */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-fintech-blue mb-4">
                    <span className="text-[24px] font-bold tracking-tight text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Wealthsimple
                    </span>
                    <span className="text-xs bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                      Business
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6 font-sans">
                    Put your company's cash<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                      to work with high yield.
                    </span>
                  </h2>

                  <p className="text-neutral-400 text-base sm:text-lg mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
                    High-interest business accounts for your operating surplus. Unlimited fee-free corporate transfers, multi-admin access control, and automated tax reserves.
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <button
                      onClick={() => onSignupClick && onSignupClick()}
                      className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-7 py-3 rounded-full transition-all duration-200 shadow-lg shadow-amber-400/20 cursor-pointer text-sm sm:text-base"
                    >
                      Open a Business Account
                    </button>
                    <button
                      onClick={openSupportChat}
                      className="border border-neutral-700 hover:border-neutral-500 text-white font-medium px-6 py-3 rounded-full transition-colors cursor-pointer text-sm"
                    >
                      Contact Sales
                    </button>
                  </div>
                </div>

                {/* Right Side: Corporate Dashboard Mockup */}
                <div className="flex-1 w-full relative h-[320px] sm:h-[380px] flex items-center justify-center">
                  <div className="absolute w-[300px] h-[300px] bg-amber-500/15 rounded-full blur-[90px] pointer-events-none" />

                  <div className="relative z-10 w-full max-w-[360px] bg-neutral-900/90 border border-neutral-700 rounded-2xl p-6 shadow-2xl backdrop-blur-md space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-neutral-800">
                      <div>
                        <span className="text-xs text-neutral-400 font-mono uppercase">Corporate Treasury</span>
                        <h4 className="text-2xl font-bold text-white">$248,500.00</h4>
                      </div>
                      <span className="text-xs bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-md font-semibold">4.0% APY</span>
                    </div>

                    <div className="space-y-2.5 pt-1">
                      <div className="bg-neutral-800/80 p-3 rounded-xl flex justify-between items-center">
                        <div>
                          <p className="text-xs font-semibold text-white">Monthly Interest Earned</p>
                          <p className="text-[11px] text-neutral-400">Deposited automatically</p>
                        </div>
                        <span className="text-xs text-emerald-400 font-bold">+$828.33/mo</span>
                      </div>

                      <div className="bg-neutral-800/80 p-3 rounded-xl flex justify-between items-center">
                        <div>
                          <p className="text-xs font-semibold text-white">Corporate Transfers</p>
                          <p className="text-[11px] text-neutral-400">Unlimited & instant</p>
                        </div>
                        <span className="text-xs text-white font-bold">$0 Fees</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeatureLinks;
