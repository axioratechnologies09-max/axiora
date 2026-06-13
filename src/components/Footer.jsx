import React from 'react';
import './Footer.css';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">Axiora Technologies</h2>
            <p className="footer-desc">
              High-performance digital solutions for modern brands. We build scalable websites, SaaS platforms, and enterprise applications.
            </p>

          </div>
          
          <div className="footer-links">
            <div className="link-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#process">Process</a></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Domain & Hosting</a></li>
                <li><a href="#">Web Design & Dev</a></li>
                <li><a href="#">E-Commerce</a></li>
                <li><a href="#">Software Dev</a></li>
                <li><a href="#">SEO & CMS</a></li>
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
                  <span>+1 (555) 123-4567</span>
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
