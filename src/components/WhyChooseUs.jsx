import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import './WhyChooseUs.css';

const Counter = ({ from, to, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    // If 'to' is not a number (like "Fast"), just display it
    if (typeof to !== 'number') {
      setCount(to);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const WhyChooseUs = () => {
  const metrics = [
    { 
      num: 50, 
      suffix: '+', 
      label: 'Projects Delivered',
      description: 'Successfully deployed robust digital solutions for clients worldwide across various industries.' 
    },
    { 
      num: 99, 
      suffix: '%', 
      label: 'Client Satisfaction',
      description: 'Consistently exceeding expectations with our dedicated support and high-quality deliverables.'
    },
    { 
      num: 100, 
      suffix: '%', 
      label: 'Scalable Architecture',
      description: 'Building future-proof systems designed to grow seamlessly with your business needs.'
    },
    { 
      num: 'Fast', 
      suffix: '', 
      label: 'Delivery Process',
      description: 'Agile methodologies ensuring rapid time-to-market without compromising on code quality.'
    },
  ];

  return (
    <section className="why-choose-us section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag glow-text">Why Axiora</span>
          <h2 className="section-title">Built for <span>Performance</span></h2>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="metric-card glass glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="metric-spotlight" spotlightColor="rgba(212, 175, 55, 0.15)">
                <div className="metric-content">
                  <h3 className="metric-num text-gold">
                    <Counter from={0} to={metric.num} suffix={metric.suffix} />
                  </h3>
                  <p className="metric-label">{metric.label}</p>
                  <p className="metric-description">{metric.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
