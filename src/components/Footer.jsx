import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-logo" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Axiora Technologies</p>
            <p className="footer-desc">
              High-performance digital solutions for modern brands. We build bespoke websites, web applications, and premium digital experiences.
            </p>

          </div>
          
          <div className="footer-links">
            <div className="link-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/#portfolio">Portfolio</Link></li>
                <li><Link to="/#process">Process</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Frontend Engineering</a></li>
                <li><a href="#services">Custom Web Apps</a></li>
                <li><a href="#services">E-Commerce Platforms</a></li>
                <li><a href="#services">CMS & Headless</a></li>
                <li><a href="#services">SEO Optimization</a></li>
              </ul>
            </div>

            <div className="link-column contact-column">
              <h3>Contact</h3>
              <ul>
                <li>
                  <FiMail className="contact-icon text-gold" />
                  <span>axiora.technologies09@gmail.com</span>
                </li>
                <li>
                  <FiPhone className="contact-icon text-gold" />
                  <span>+91 9249047267</span>
                </li>
                <li>
                  <FiMapPin className="contact-icon text-gold" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Axiora Technologies. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
