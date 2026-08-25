import React from 'react';

const FeatureCards = () => {
  const cards = [
    { title: 'Tax season, simplified', description: 'File your taxes with confidence. It\'s fast, easy, and always accurate.' },
    { title: 'Earn 4% interest', description: 'Watch your money grow with our high-interest Cash account.' },
    { title: 'Automated investing', description: 'Smart portfolios built by experts to help you build long-term wealth.' }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#090a0f] text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col bg-[#13151f] border border-neutral-800 rounded-[32px] p-8 shadow-lg hover:border-neutral-700 transition-all">
              <div className="w-full aspect-[4/3] bg-neutral-800 rounded-2xl mb-8">
                 {/* Image/Video Placeholder */}
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4 text-white">{card.title}</h3>
              <p className="text-neutral-400 mb-8 flex-grow">{card.description}</p>
              <button className="fintech-btn-secondary self-start">Learn more</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
