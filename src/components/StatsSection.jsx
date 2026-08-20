import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-fintech-dark border-t border-fintech-border/50 relative">
      <div className="container-custom max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Built for people who <br className="hidden md:block" /> expect more from their money.
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl">
            A financial platform engineered for serious growth, absolute transparency, and uncompromised security. 
          </p>
        </div>

        {/* Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            { label: "Transparent Structure", title: "Zero Hidden Fees", desc: "Keep more of what you earn with our radically transparent pricing model." },
            { label: "Institutional Grade", title: "Uncompromising Security", desc: "Bank-level encryption and robust security protocols protect your assets." },
            { label: "Automated Wealth", title: "Smarter Growth", desc: "Algorithms designed to rebalance and optimize your portfolio continuously." }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-fintech-darker border border-fintech-border p-8 flex flex-col items-start rounded-xl hover:border-fintech-emerald transition-colors"
            >
              <div className="w-full h-1 bg-gradient-to-r from-fintech-emerald to-fintech-teal rounded-full mb-6 max-w-[50px]"></div>
              <p className="text-fintech-emerald text-sm uppercase tracking-wider font-semibold mb-2">{stat.label}</p>
              <h3 className="text-white text-3xl font-bold mb-4 font-serif">{stat.title}</h3>
              <p className="text-neutral-400 text-[15px] leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
