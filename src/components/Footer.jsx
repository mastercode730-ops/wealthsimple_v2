import React from 'react';
import wordmark from '../assets/ws-wordmark-refresh.48a6eb42.svg';

const Footer = () => {
  const columns = [
    {
      title: "About us",
      links: [
        "Our company",
        "Newsroom",
        "Culture manual",
        "Careers",
        "Security & privacy",
        "Wealthsimple Foundation",
        "Giveback program",
        "Product news",
        "Wealthsimple Shop"
      ]
    },
    {
      title: "Legal",
      links: [
        "Accessibility",
        "Privacy policy",
        "Terms of use"
      ]
    },
    {
      title: "Accounts",
      links: [
        "RRSP",
        "TFSA",
        "FHSA",
        "RESP",
        "LIRA",
        "Group savings",
        "Business investing",
        "All accounts"
      ]
    },
    {
      title: "Products",
      links: [
        "Chequing",
        "Trade",
        "Invest",
        "Business",
        "Mortgages",
        "Advice",
        "Tax",
        "Learn",
        "TLDR"
      ]
    },
    {
      title: "Social",
      links: [
        { name: "Instagram", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
        { name: "X", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"></path></svg> },
        { name: "YouTube", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg> },
        { name: "LinkedIn", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> }
      ]
    },
    {
      title: "Support",
      links: [
        "Contact us",
        "Transfer an account",
        "Help centre",
        "Refer a friend",
        "Compare plans"
      ]
    }
  ];

  return (
    <footer className="pt-16 pb-8 bg-[#f4f2ec] text-[#2d2a26] font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-4 gap-y-12 mb-20">
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="font-bold text-[15px] mb-6 tracking-tight text-[#2d2a26]">{col.title}</h3>
              <ul className="space-y-[18px]">
                {col.links.map((link, linkIdx) => {
                  const isObject = typeof link === 'object';
                  const name = isObject ? link.name : link;
                  const icon = isObject ? link.icon : null;
                  
                  return (
                    <li key={linkIdx}>
                      <a href="#" className="text-[15px] hover:underline flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                        {icon && <span className="opacity-70">{icon}</span>}
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Huge Wordmark Logo */}
        <div className="mb-6 w-full flex justify-center">
          <img src={wordmark} alt="Wealthsimple" className="w-full max-w-full h-auto object-contain" />
        </div>
        
        {/* Divider */}
        <div className="h-[1px] bg-neutral-300 w-full mb-6"></div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-[10px] opacity-60 leading-snug space-y-1 max-w-full md:max-w-[60%]">
            <p>© 2026 Wealthsimple Technologies Inc. All Rights Reserved.</p>
            <p>For further details see our <a href="#" className="underline">Legal disclosures</a>. By using this website, you accept our <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>.</p>
            <p>For information about filing a complaint please see <a href="#" className="underline">How to File a Complaint</a>.</p>
          </div>
          
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <button className="border border-neutral-300 rounded-full px-4 py-1 text-[11px] font-medium hover:bg-neutral-200 transition-colors flex items-center gap-1">
              English
            </button>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-200 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path>
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-200 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
