import React from 'react';
import StateLifeLogo from './StateLifeLogo';
import stateLifeLogoPng from '../assets/state-life-logo.png';

const LogoDebug = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">Logo Debug Page</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">1. StateLifeLogo Component:</h3>
          <StateLifeLogo width={100} height={100} />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">2. Direct Public Path:</h3>
          <img 
            src="/state-life-logo.png" 
            alt="Direct public path" 
            width={100} 
            height={100}
            onError={(e) => {
              console.error('Direct public path failed');
              e.target.style.border = '2px solid red';
              e.target.alt = 'Failed to load';
            }}
            onLoad={() => console.log('Direct public path loaded successfully')}
          />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">3. Imported Logo:</h3>
          <img 
            src={stateLifeLogoPng} 
            alt="Imported logo" 
            width={100} 
            height={100}
            onError={(e) => {
              console.error('Imported logo failed');
              e.target.style.border = '2px solid red';
            }}
            onLoad={() => console.log('Imported logo loaded successfully')}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">4. Alternative Public Paths:</h3>
          <div className="flex space-x-4">
            <img 
              src="./state-life-logo.png" 
              alt="Relative path" 
              width={80} 
              height={80}
              onError={(e) => e.target.style.display = 'none'}
            />
            <img 
              src={`${process.env.PUBLIC_URL}/state-life-logo.png`} 
              alt="PUBLIC_URL path" 
              width={80} 
              height={80}
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Debug Info:</h3>
          <ul className="text-sm text-gray-600">
            <li>PUBLIC_URL: {process.env.PUBLIC_URL || 'undefined'}</li>
            <li>NODE_ENV: {process.env.NODE_ENV}</li>
            <li>Current domain: {window.location.origin}</li>
            <li>Imported logo path: {stateLifeLogoPng}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoDebug;
