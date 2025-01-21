import React from 'react';

const SectionHeader = ({ title }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex items-center gap-4 relative z-50">
      <h2 className="text-3xl font-bold font-faction">
        {title}
      </h2>
      <svg 
        className="w-6 h-6 transform rotate-45"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );
};

export default SectionHeader;