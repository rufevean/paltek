
import '../styles/home-page.css';
import React from 'react';
import '../styles/animated-static-bg.css'; // Ensure this import is correct according to your project structure
import planet from '../assets/planet.png';
import bbg from '../assets/bbg.png';

function HomePage() {
  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <div className="home-page">
      <img src={planet} className="home-page-planet" alt="planet" />
      <img src={bbg} className="home-page-bbg" alt="bbg" />
      <div className="overlay"></div>
      <div className="sections-container">
        <div className="section section1" onClick={() => handleNavigation('https://example.com/section1')}>
          <div className="animated-static-bg"></div> {/* This is the animated background */}
        </div>
        <div className="section section2" onClick={() => handleNavigation('https://example.com/section2')}>
          <div className="animated-static-bg"></div> {/* This is the animated background */}
        </div>
        <div className="section section3" onClick={() => handleNavigation('https://example.com/section3')}>
          <div className="animated-static-bg"></div> {/* This is the animated background */}
        </div>
        <div className="section section4" onClick={() => handleNavigation('https://example.com/section4')}>
          <div className="animated-static-bg"></div> {/* This is the animated background */}
        </div>
        <div className="section section5" onClick={() => handleNavigation('https://example.com/section5')}>
          <div className="animated-static-bg"></div> {/* This is the animated background */}
        </div>
        <div className="section section6" onClick={() => handleNavigation('https://example.com/section6')}>
          <div className="animated-static-bg"></div> {/* This is the animated background */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
