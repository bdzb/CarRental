import React, { useEffect, useState } from 'react';
import TopH from './TopH';
import MidH from './MidH';

const Home = () => {
  const [renderStep, setRenderStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setRenderStep(1),0), // Navbar
      setTimeout(() => setRenderStep(2), 2500), // Left Content
      setTimeout(() => setRenderStep(3), 4500), // Numbers
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div id='homeBody'>
      {/* Render TopH when renderStep is 1 or higher */}
      {renderStep >= 1 && (
        <div id="topHome" className={renderStep >= 1 ? 'slide-in-top' : ''}><TopH/></div>
      )}

      {/* Render MidH when renderStep is 2 or higher */}
      {renderStep >= 2 && (
        <div id="midHome" className={renderStep >= 2 ? 'slide-in-top' : ''}><MidH/></div>
      )}

      {/* Placeholder for botHome, you can conditionally render this as needed */}
      {renderStep >= 3 && (
        <div id="botHome" className={renderStep >= 3 ? 'slide-in-top' : ''}></div>
      )}
    </div>
  );
}

export default Home;
