import React from 'react';

const StateLifeLogo = ({ width = 80, height = 80, className = "" }) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`} style={{ width, height }}>
      <img 
        src="/state-life-logo.png" 
        alt="State Life Insurance Corporation" 
        width={width} 
        height={height}
        className="drop-shadow-lg object-contain"
        style={{ 
          maxWidth: '100%', 
          height: 'auto',
          filter: 'sepia(100%) hue-rotate(90deg) saturate(200%) brightness(0.8)'
        }}
      />
    </div>
  );
};

export default StateLifeLogo;
