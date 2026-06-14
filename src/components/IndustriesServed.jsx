import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGlobe, FiDatabase, FiCloud, FiCode, FiSmartphone, FiLayers } from 'react-icons/fi';

const industriesData = [
  { icon: <FiGlobe />, title: 'Fintech & Banking', desc: 'Secure, high-frequency trading platforms and banking portals.' },
  { icon: <FiDatabase />, title: 'Healthcare & MedTech', desc: 'HIPAA-compliant telemedicine and patient management systems.' },
  { icon: <FiCloud />, title: 'E-Commerce & Retail', desc: 'Scalable storefronts and real-time inventory management.' },
  { icon: <FiCode />, title: 'Startups & Tech', desc: 'Custom web platforms and corporate websites for modern tech companies.' },
  { icon: <FiSmartphone />, title: 'Education & EdTech', desc: 'Interactive learning platforms and student portals.' },
  { icon: <FiLayers />, title: 'Logistics & Supply', desc: 'Real-time tracking and automated supply chain solutions.' }
];

const IndustriesServed = () => {
  return (
    <section className="section" style={{ background: 'var(--card)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag glow-text">Sectors</span>
          <h2 className="section-title">Industries We <span>Serve</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {industriesData.map((industry, index) => (
            <motion.div 
              key={index} 
              className="glass glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ padding: '2rem', borderRadius: '24px', background: 'rgba(255,255,255,0.8)' }}
            >
              <div style={{ fontSize: '2rem', color: 'var(--gold-dark)', marginBottom: '1rem' }}>
                {industry.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{industry.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
