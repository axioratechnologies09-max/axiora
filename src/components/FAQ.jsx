import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    q: 'Do you offer custom website design?',
    a: 'Yes, we specialize in bespoke website designs tailored to your brand identity. We do not use pre-made templates; every project is designed from scratch focusing on user experience, conversion optimization, and modern aesthetics.'
  },
  {
    q: 'How much does custom web development cost?',
    a: 'Project costs vary widely based on scope, complexity, and required integrations. A simple marketing website might start around $5,000, while complex custom web applications and e-commerce platforms can range from $20,000 to $100,000+. We provide detailed proposals after understanding your specific needs.'
  },
  {
    q: 'What is a custom web application?',
    a: 'Unlike a standard website, a custom web application involves building complex, cloud-based interfaces that users interact with (like portals, dashboards, or SaaS products). We handle the complex architectures required for multi-tenant data isolation, scalable infrastructure, and secure backend systems.'
  },
  {
    q: 'Do you provide ongoing website maintenance?',
    a: 'Yes, we offer comprehensive maintenance packages that include performance monitoring, security updates, content updates, and SEO optimization to ensure your website remains fast and secure.'
  },
  {
    q: 'How long does it take to build a website?',
    a: 'A standard corporate website usually takes 4 to 8 weeks from design to launch. More complex e-commerce platforms or custom web applications may take 3 to 6 months depending on the required features.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center mb-5">
          <span className="section-tag glow-text">Knowledge Base</span>
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass"
              style={{ 
                borderRadius: '16px', 
                overflow: 'hidden',
                border: `1px solid ${openIndex === index ? 'var(--gold)' : 'var(--border-light)'}`,
                transition: 'border-color 0.3s ease'
              }}
            >
              <button
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'cursor',
                  textAlign: 'left',
                  color: 'var(--text)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  fontFamily: 'var(--font-sans)'
                }}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {faq.q}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown style={{ color: 'var(--gold-dark)' }} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
