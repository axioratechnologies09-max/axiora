import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    q: 'What does an AI development company do?',
    a: 'We build custom artificial intelligence solutions such as predictive models, natural language processing tools, generative AI applications, and intelligent workflow automations to help businesses operate smarter.'
  },
  {
    q: 'How much does custom software development cost?',
    a: 'Costs vary widely based on complexity, scale, and specific requirements. A basic MVP might start around $15,000, while enterprise-grade scalable SaaS platforms can range from $50,000 to over $100,000. We offer flexible pricing models tailored to your budget and goals.'
  },
  {
    q: 'What is SaaS development?',
    a: 'SaaS (Software as a Service) development involves building cloud-based software that users access via subscription. We handle the complex architectures required for multi-tenant data isolation, scalable infrastructure, and recurring billing systems.'
  },
  {
    q: 'Do you provide ongoing cloud engineering and DevOps support?',
    a: 'Yes, our cloud engineering services include continuous integration and deployment (CI/CD), infrastructure monitoring, security updates, and performance optimization on platforms like AWS, Google Cloud, and Azure.'
  },
  {
    q: 'How long does a digital transformation project take?',
    a: 'Timelines depend on the scope of legacy system modernization and integration. Most mid-sized digital transformation projects take 3 to 6 months to fully implement and migrate, ensuring minimal disruption to your operations.'
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
