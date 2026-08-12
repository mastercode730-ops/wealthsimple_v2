import React from 'react';

const FeatureCards = () => {
  const cards = [
    { title: 'Tax season, simplified', description: 'File your taxes with confidence. It\'s fast, easy, and always accurate.' },
    { title: 'Earn 4% interest', description: 'Watch your money grow with our high-interest Cash account.' },
    { title: 'Automated investing', description: 'Smart portfolios built by experts to help you build long-term wealth.' }
  ];

  return (
    <section className="py-20 md:py-32 bg-ws-off-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-[32px] p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full aspect-[4/3] bg-neutral-200 rounded-2xl mb-8">
                 {/* Image/Video Placeholder */}
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-4">{card.title}</h3>
              <p className="text-neutral-600 mb-8 flex-grow">{card.description}</p>
              <button className="btn-secondary self-start">Learn more</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
