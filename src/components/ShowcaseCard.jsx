import React from 'react';

const ShowcaseCard = ({ title, description, image, reverse, badge }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center w-full max-w-7xl mx-auto mb-20 md:mb-32 group px-6 md:px-12`}>
      {/* Content Side */}
      <div className="w-full md:w-1/2 py-8 md:py-16 md:px-12 flex flex-col justify-center">
        {badge && (
          <span className="text-sm font-medium tracking-wide text-neutral-500 mb-4 uppercase">
            {badge}
          </span>
        )}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-xl text-neutral-600">
            {description}
          </p>
        )}
      </div>
      
      {/* Media Side */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[600px] py-4">
        <div className="w-full h-full bg-neutral-300 rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
           {/* Placeholder */}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
