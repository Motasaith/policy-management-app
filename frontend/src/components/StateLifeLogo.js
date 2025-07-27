import React, { useState } from 'react';
import stateLifeLogoPng from '../assets/state-life-logo.png';

const StateLifeLogo = ({ width = 80, height = 80, className = "" }) => {
  const [usePublicImage, setUsePublicImage] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    console.log('Public logo failed, trying imported logo');
    setUsePublicImage(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImportedImageError = () => {
    console.error('Both logo sources failed to load');
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`} style={{ width, height }}>
      {usePublicImage ? (
        <img 
          src="/state-life-logo.png" 
          alt="State Life Insurance Corporation" 
          width={width} 
          height={height}
          className="drop-shadow-lg object-contain"
          style={{ 
            maxWidth: '100%', 
            height: 'auto',
            filter: 'sepia(100%) hue-rotate(90deg) saturate(200%) brightness(0.8)',
            opacity: imageLoaded ? 1 : 0.5
          }}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      ) : (
        <img 
          src={stateLifeLogoPng} 
          alt="State Life Insurance Corporation" 
          width={width} 
          height={height}
          className="drop-shadow-lg object-contain"
          style={{ 
            maxWidth: '100%', 
            height: 'auto',
            filter: 'sepia(100%) hue-rotate(90deg) saturate(200%) brightness(0.8)'
          }}
          onError={handleImportedImageError}
          onLoad={handleImageLoad}
        />
      )}
    </div>
  );
};

export default StateLifeLogo;
