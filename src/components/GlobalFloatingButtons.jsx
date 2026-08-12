import React, { useState } from 'react';

const GlobalFloatingButtons = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const videos = document.querySelectorAll('video');
    videos.forEach(v => {
      if (isPlaying) {
        v.pause();
      } else {
        v.play();
      }
    });
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-8 right-8 flex space-x-4 z-[9999]">
      {/* Chat Button */}
      <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer border border-neutral-200">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      {/* Play/Pause Button */}
      <button 
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer border border-neutral-200"
      >
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        )}
      </button>
    </div>
  );
};

export default GlobalFloatingButtons;
