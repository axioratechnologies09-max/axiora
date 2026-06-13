import React from 'react';
import './Portfolio.css';
import MagicBento from './MagicBento';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section section">
      <div className="container">
        <div className="portfolio-header text-center">
          <span className="section-tag glow-text">Selected Work</span>
          <h2 className="section-title">Premium <span>Portfolio</span></h2>
        </div>

        <MagicBento 
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="212, 175, 55"
        />
      </div>
    </section>
  );
};

export default Portfolio;
