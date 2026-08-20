import React from 'react';
import logoMark from '../assets/ws-wordmark-refresh.48a6eb42.svg';

const Footer = () => {
  return (
    <footer className="bg-fintech-darker border-t border-fintech-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 border-b border-fintech-border pb-16">
          <div className="flex-1 max-w-sm">
            <img src={logoMark} alt="Wealthsimple" className="h-8 mb-6 brightness-0 invert" />
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Wealthsimple is on a mission to help everyone achieve financial freedom, no matter who they are or how much they have.
            </p>
            {/* Newsletter Integrated */}
            <div className="flex items-center gap-2">
              <input 
                type="email" 
                placeholder="Join our newsletter" 
                className="bg-black border border-fintech-border text-white text-sm px-4 py-2.5 rounded-lg flex-1 outline-none focus:border-fintech-emerald transition-colors"
              />
              <button className="bg-white text-black px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="flex gap-4">
             {['twitter', 'instagram', 'linkedin'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full border border-fintech-border flex items-center justify-center cursor-pointer hover:border-white transition-colors text-white">
                   {/* Placeholder Icon */}
                   <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
             ))}
          </div>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
          {[
            { title: "Products", links: ["Managed Investing", "Self-directed Investing", "Private Credit", "Cash", "Taxes"] },
            { title: "Learn", links: ["Magazine", "Help Centre", "Pricing", "Newsroom", "Careers"] },
            { title: "Legal", links: ["Legal disclosures", "Privacy policy", "Accessibility", "Complaints"] },
            { title: "Contact", links: ["Support", "Contact Us", "Media"] }
          ].map((column, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimers & Copyright */}
        <div className="text-xs text-neutral-600 leading-relaxed max-w-4xl space-y-4">
          <p>
            By using this website, you accept our Terms of Use and Privacy Policy. Copyright 2026 Wealthsimple Technologies Inc.
          </p>
          <p>
            * The information provided does not constitute financial advice. The tools and services offered by Wealthsimple are intended to empower users to make their own financial decisions. Past performance is not indicative of future results.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
