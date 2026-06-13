import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiLayout, FiShoppingCart, FiCode, FiSearch, FiSmartphone, FiGrid, FiPenTool, FiShare2 } from 'react-icons/fi';
import './Services.css';

const servicesData = [
  {
    icon: <FiGlobe />,
    title: 'Domain & Hosting',
    desc: 'Reliable and secure domain registration and high-performance hosting services.'
  },
  {
    icon: <FiLayout />,
    title: 'Web Design & Development',
    desc: 'Custom, responsive websites designed to engage users and drive conversions.'
  },
  {
    icon: <FiShoppingCart />,
    title: 'E-Commerce Website',
    desc: 'Robust online stores with secure payment gateways and intuitive shopping experiences.'
  },
  {
    icon: <FiCode />,
    title: 'Software Development',
    desc: 'Scalable and custom software solutions tailored to your unique business requirements.'
  },
  {
    icon: <FiSearch />,
    title: 'SEO & CMS',
    desc: 'Search engine optimization and easy-to-use content management systems for better visibility.'
  },
  {
    icon: <FiSmartphone />,
    title: 'Digital Business Card',
    desc: 'Modern, shareable digital business cards to network smarter and faster.'
  },
  {
    icon: <FiGrid />,
    title: 'Digital Menu Card',
    desc: 'Interactive and contactless digital menus perfect for restaurants and cafes.'
  },
  {
    icon: <FiPenTool />,
    title: 'Logo & Branding',
    desc: 'Memorable logo designs and cohesive branding strategies to stand out in the market.'
  },
  {
    icon: <FiShare2 />,
    title: 'Social Media Marketing',
    desc: 'Data-driven campaigns to grow your audience and elevate your brand presence online.'
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
            <motion.div key={index} className="service-card glow card" variants={itemVariants}>
              <div className="service-icon-wrapper glass">
                <span className="service-icon text-gold">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
