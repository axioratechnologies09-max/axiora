import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaShieldAlt, FaGlobe, FaChartLine } from 'react-icons/fa';
import Carousel from './Carousel';
import './About.css';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [carouselWidth, setCarouselWidth] = useState(300);

  useEffect(() => {
    const checkMobile = () => {
      const isMob = window.innerWidth <= 1024;
      setIsMobile(isMob);
      if (isMob) {
        // Leave some padding on the sides
        setCarouselWidth(Math.min(window.innerWidth - 40, 400));
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides = [
    {
      id: 1,
      title: "Who We Are",
      description: "Axiora Technologies builds premium digital products with a focus on speed, scalability, and exceptional user experience.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
      content: (
        <>
          <p className="slide-extra-text">We bridge the gap between complex engineering and beautiful design, ensuring your platform not only looks premium but operates with enterprise-grade reliability.</p>
          <div className="slide-stats-grid">
            <div className="slide-stat-box">
              <div className="slide-stat-value">10+</div>
              <div className="slide-stat-label">Years Experience</div>
            </div>
            <div className="slide-stat-box">
              <div className="slide-stat-value">250+</div>
              <div className="slide-stat-label">Global Clients</div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 2,
      title: "What We Build",
      description: "Custom websites, web applications, frontend portals, enterprise dashboards, and e-commerce systems.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
      content: (
        <ul className="slide-list">
          <li><FaCheckCircle className="slide-list-icon" /> High-conversion Landing Pages</li>
          <li><FaCheckCircle className="slide-list-icon" /> Scalable Web Applications</li>
          <li><FaCheckCircle className="slide-list-icon" /> Secure Payment Gateways</li>
          <li><FaCheckCircle className="slide-list-icon" /> Custom CMS & Dashboards</li>
        </ul>
      )
    },
    {
      id: 3,
      title: "Why Choose Us",
      description: "Performance-focused architecture, modern technology stacks, and long-term business growth strategies.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
      content: (
        <div className="slide-stats-grid">
          <div className="slide-stat-box">
            <div className="slide-stat-value"><FaRocket /></div>
            <div className="slide-stat-label mt-2">Lightning Fast</div>
          </div>
          <div className="slide-stat-box">
            <div className="slide-stat-value"><FaShieldAlt /></div>
            <div className="slide-stat-label mt-2">Bank Security</div>
          </div>
          <div className="slide-stat-box">
            <div className="slide-stat-value"><FaGlobe /></div>
            <div className="slide-stat-label mt-2">Global CDN</div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Future Vision",
      description: "Helping brands dominate digitally through innovative web development.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      content: (
        <>
          <p className="slide-extra-text">We don't just build websites; we engineer digital experiences designed to adapt, scale, and thrive in an ever-evolving digital landscape.</p>
          <div className="slide-stats-grid">
            <div className="slide-stat-box">
              <div className="slide-stat-value" style={{ fontSize: '2.5rem' }}><FaChartLine /></div>
              <div className="slide-stat-label mt-2">Sustainable Growth</div>
            </div>
          </div>
        </>
      )
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        
        {/* Placed heading on top of the stack */}
        <div className="about-header text-center mb-5">
          <span className="section-tag glow-text">The Agency</span>
          <h2 className="section-title">
            Digital <span>Excellence.</span>
          </h2>
          <div className="title-line mx-auto"></div>
        </div>

        <div className={isMobile ? "about-carousel-container" : "about-grid-desktop"}>
          {isMobile ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Carousel
                items={slides}
                baseWidth={carouselWidth}
                autoplay={false}
                pauseOnHover={true}
                loop={true}
              />
            </div>
          ) : (
            slides.map((slide, index) => (
              <motion.div 
                key={index} 
                className="about-slide"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-5%", once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className="about-slide-layout">
                  <div className="about-slide-content">
                    <h3 className="slide-title">{slide.title}</h3>
                    <p className="slide-text">{slide.description}</p>
                    {slide.content && slide.content}
                  </div>
                  <div className="about-slide-image">
                    <img src={slide.image} alt={slide.title} style={{ objectFit: 'cover' }} />
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

export default About;
