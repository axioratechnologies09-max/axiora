import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGlobe, FiLayout, FiShoppingCart, FiCode, FiSearch, FiSmartphone, FiGrid, FiPenTool, FiShare2, FiArrowRight } from 'react-icons/fi';
import './Services.css';

const servicesData = [
  {
    icon: <FiCode />,
    title: 'Frontend Development',
    desc: 'Pixel-perfect, responsive user interfaces built with React, Next.js, and modern CSS frameworks.',
    path: '/services/frontend-development'
  },
  {
    icon: <FiLayout />,
    title: 'Custom Web Apps',
    desc: 'Scalable, high-performance web applications tailored to your unique business needs.',
    path: '/services/custom-web-apps'
  },
  {
    icon: <FiShoppingCart />,
    title: 'E-Commerce Solutions',
    desc: 'Robust online stores with secure payment gateways and seamless shopping experiences.',
    path: '/services/ecommerce-solutions'
  },
  {
    icon: <FiGrid />,
    title: 'CMS & Headless',
    desc: 'Flexible content management systems and modern headless architectures for ultimate control.',
    path: '/services/cms-headless'
  },
  {
    icon: <FiGlobe />,
    title: 'Backend & APIs',
    desc: 'Secure and scalable server-side architectures, RESTful APIs, and database design.',
    path: '/services/backend-apis'
  },
  {
    icon: <FiSearch />,
    title: 'SEO & Performance',
    desc: 'Technical SEO optimization, lightning-fast load times, and core web vitals improvements.',
    path: '/services/seo-performance'
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="services-header text-center">
          <span className="section-tag glow-text">What We Do</span>
          <h2 className="section-title">Web <span>Development</span></h2>
        </div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link to={service.path} style={{ textDecoration: 'none' }}>
                <div className="service-card glow card" style={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }}>
                  <div className="service-icon-wrapper glass">
                    <span className="service-icon text-gold">{service.icon}</span>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc" style={{ marginBottom: '1.5rem', flexGrow: 1 }}>{service.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold)', fontWeight: 'bold' }}>
                    Learn More <FiArrowRight />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
