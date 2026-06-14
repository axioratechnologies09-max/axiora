import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiPlay, FiCheckCircle } from 'react-icons/fi';
import ShinyText from '../ShinyText';

export const ServiceHero = ({ title, description, heroImage, heroImageAlt }) => (
  <section className="cinematic-hero">
    {heroImage && (
      <div className="cinematic-hero-bg">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={heroImage} 
          alt={heroImageAlt} 
          loading="eager" 
        />
      </div>
    )}
    <div className="cinematic-hero-overlay"></div>
    <div className="container cinematic-hero-content">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <span className="section-tag glow-text" style={{ color: 'var(--gold)' }}>Premium Service</span>
        <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1.5rem', wordBreak: 'break-word', textTransform: 'uppercase', letterSpacing: '-2px', color: 'var(--text)' }}>
          {title}
        </h1>
        <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
          {description}
        </p>
        <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
          Start Your Project
        </button>
      </motion.div>
    </div>
  </section>
);

export const ServiceFeatures = ({ features }) => {
  if (!features || features.length === 0) return null;
  
  // Assign bento box classes based on index to create an asymmetrical grid
  const getBentoClass = (idx, total) => {
    if (total === 3 && idx === 2) return 'service-bento-item-full'; // Make 3rd item span all 12 columns
    
    // Default alternating pattern
    if (idx === 0) return 'service-bento-item-large';
    if (idx === 1 || idx === 2) return 'service-bento-item-medium';
    return 'service-bento-item-large'; // Fallback
  };

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="mb-5">
          <span className="section-tag glow-text">Capabilities</span>
          <h2 className="section-title">Core <span>Features</span></h2>
        </div>
        
        <div className="service-bento-grid">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className={`service-bento-item glass glow ${getBentoClass(idx, features.length)}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              style={{ height: '360px' }}
            >
              <div className="service-bento-image-wrapper">
                {feature.imagePath ? (
                  <img src={feature.imagePath} alt={feature.imageAlt} loading="lazy" />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: '#111' }}></div>
                )}
              </div>
              <div className="service-bento-content">
                <h3 className="bento-text-title" style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{feature.title}</h3>
                <p className="bento-text-desc" style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.6', maxWidth: '500px' }}>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProcessTimeline = ({ process }) => {
  if (!process || process.length === 0) return null;
  return (
    <section className="section" style={{ background: 'var(--card)' }}>
      <div className="container">
        <div className="sticky-timeline-container">
          <div className="sticky-timeline-left">
            <span className="section-tag glow-text">Methodology</span>
            <h2 className="section-title">Our <span>Process</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '400px' }}>
              We follow a rigorous, battle-tested methodology to ensure every project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="sticky-timeline-right">
            {process.map((step, idx) => (
              <motion.div 
                key={idx} 
                className="timeline-step glass glow"
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, margin: "-20%" }} 
                transition={{ duration: 0.5 }}
              >
                <div className="timeline-number">{idx + 1}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{step.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.6' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const TechStack = ({ stack }) => {
  if (!stack || stack.length === 0) return null;
  
  const groupedStack = stack.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech);
    return acc;
  }, {});

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag glow-text">Infrastructure</span>
          <h2 className="section-title">Technology <span>Stack</span></h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          {Object.keys(groupedStack).map((category, catIdx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--gold)', borderBottom: '1px solid rgba(255, 215, 0, 0.2)', paddingBottom: '0.5rem' }}>
                {category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {groupedStack[category].map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="glass hover-glow"
                    style={{ padding: '0.75rem 1.5rem', borderRadius: '100px', border: '1px solid var(--border-strong)', color: 'var(--text)', fontSize: '0.95rem', fontWeight: '500', cursor: 'default' }}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CaseStudySlider = ({ studies }) => {
  const [current, setCurrent] = useState(0);
  if (!studies || studies.length === 0) return null;

  const study = studies[current];

  return (
    <section className="section" style={{ background: 'var(--card)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag glow-text">Success Stories</span>
          <h2 className="section-title">Case <span>Studies</span></h2>
        </div>
        
        <motion.div 
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass glow" 
          style={{ borderRadius: '24px', overflow: 'hidden', padding: '0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', alignItems: 'center' }}
        >
          {/* Left Column: Text & Metrics */}
          <div style={{ padding: '3rem 4rem' }}>
            <h3 className="bento-text-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text)', lineHeight: '1.2' }}>{study.title}</h3>
            
            {study.desc && (
              <p className="bento-text-desc" style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>{study.desc}</p>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {study.metrics && study.metrics.map((m, i) => (
                <div key={i} className="bento-text-title" style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text)', fontSize: '1.1rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                  <FiCheckCircle style={{ color: 'var(--gold)', flexShrink: 0, fontSize: '1.4rem' }} /> 
                  <span style={{ fontWeight: '500' }}>{m}</span>
                </div>
              ))}
            </div>
            
            <button className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>
              Read Full Case Study
            </button>
            
            {studies.length > 1 && (
              <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
                <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', borderRadius: '100px' }} onClick={() => setCurrent(prev => (prev === 0 ? studies.length - 1 : prev - 1))}><FiChevronLeft /> Prev</button>
                <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', borderRadius: '100px' }} onClick={() => setCurrent(prev => (prev === studies.length - 1 ? 0 : prev + 1))}>Next <FiChevronRight /></button>
              </div>
            )}
          </div>
          
          {/* Right Column: Image */}
          <div style={{ padding: '2rem', height: '100%' }}>
            <div style={{ width: '100%', height: '100%', minHeight: '400px', background: '#000', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-light)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', position: 'relative' }}>
               {study.dashboardImg ? (
                 <img src={study.dashboardImg} alt="Dashboard Results" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
               ) : (
                 <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span className="text-gold">Analytics Dashboard</span></div>
               )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
