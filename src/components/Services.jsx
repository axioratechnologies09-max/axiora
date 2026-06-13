import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGlobe, FiLayout, FiShoppingCart, FiCode, FiSearch, FiSmartphone, FiGrid, FiPenTool, FiShare2, FiArrowRight } from 'react-icons/fi';
import './Services.css';

const servicesData = [
  {
    icon: <FiCode />,
    title: 'AI Development',
    desc: 'Custom machine learning models, generative AI tools, and intelligent automation systems.',
    path: '/ai-development-services'
  },
  {
    icon: <FiLayout />,
    title: 'Custom Software',
    desc: 'Scalable custom software development services for enterprises and startups.',
    path: '/custom-software-development'
  },
  {
    icon: <FiGrid />,
    title: 'SaaS Development',
    desc: 'B2B SaaS platforms with multi-tenant architectures and secure payments.',
    path: '/saas-development-services'
  },
  {
    icon: <FiGlobe />,
    title: 'Cloud & DevOps',
    desc: 'Secure and scalable cloud engineering services, AWS deployment, and CI/CD pipelines.',
    path: '/cloud-devops-services'
  },
  {
    icon: <FiSmartphone />,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile experiences for iOS and Android devices.',
    path: '/mobile-app-development'
  },
  {
    icon: <FiSearch />,
    title: 'Web Development',
    desc: 'High-performance, responsive, and SEO-optimized websites and web applications.',
    path: '/web-development-services'
  },
  {
    icon: <FiShare2 />,
    title: 'Digital Transformation',
    desc: 'Modernize legacy systems and integrate advanced digital strategies for growth.',
    path: '/digital-transformation-services'
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
          <h2 className="section-title">Premium <span>Engineering</span></h2>
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
              <Link to={service.path} className="service-card glow card" style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
                <div className="service-icon-wrapper glass">
                  <span className="service-icon text-gold">{service.icon}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc" style={{ marginBottom: '1.5rem' }}>{service.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-dark)', fontWeight: '500' }}>
                  Learn More <FiArrowRight />
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
