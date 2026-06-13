import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaShieldAlt, FaGlobe, FaChartLine } from 'react-icons/fa';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import './About.css';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides = [
    {
      title: "Who We Are",
      text: "Axiora Technologies builds premium digital products with a focus on speed, scalability, and exceptional user experience.",
      image: "/portfolio/fintech_landing_1781258535982.png",
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
      title: "What We Build",
      text: "Custom websites, SaaS platforms, business automation tools, enterprise dashboards, and e-commerce systems.",
      image: "/portfolio/ecommerce_dashboard_1781258560166.png",
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
      title: "Why Choose Us",
      text: "Performance-focused architecture, modern technology stacks, and long-term business growth strategies.",
      image: "/portfolio/saas_analytics_1781258522852.png",
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
      title: "Future Vision",
      text: "Helping brands dominate digitally through innovative software engineering.",
      image: "/portfolio/ai_saas_1781258548402.png",
      content: (
        <>
          <p className="slide-extra-text">We don't just build software; we engineer ecosystems designed to adapt, scale, and thrive in an ever-evolving digital landscape.</p>
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

        <div className={isMobile ? "about-scroll-col-full" : "about-grid-desktop"}>
          {isMobile ? (
            <ScrollStack
              useWindowScroll={true}
              itemDistance={80}
              baseScale={0.9}
              itemScale={0.03}
              itemStackDistance={30}
              stackPosition="25%"
              scaleEndPosition="15%"
            >
              {slides.map((slide, index) => (
                <ScrollStackItem key={index}>
                  <div className="about-slide">
                    <div className="about-slide-layout">
                      <div className="about-slide-content">
                        <h3 className="slide-title">{slide.title}</h3>
                        <p className="slide-text">{slide.text}</p>
                        {slide.content && slide.content}
                      </div>
                      <div className="about-slide-image">
                        <img src={slide.image} alt={slide.title} />
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
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
                    <p className="slide-text">{slide.text}</p>
                    {slide.content && slide.content}
                  </div>
                  <div className="about-slide-image">
                    <img src={slide.image} alt={slide.title} />
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
