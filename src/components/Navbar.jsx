import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TextType from './TextType';
import './Navbar.css';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(NAV_LINKS[0].name);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-pill">
        <div className="navbar-logo">
          <TextType 
            text={["Axiora Technologies", "Axiora Digital", "Axiora Engineering"]}
            typingSpeed={75}
            pauseDuration={2500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        
        <nav aria-label="Main navigation" className="apple-glass-nav">
          {NAV_LINKS.map((item) => (
            <a
              key={item.name}
              href={`/${item.href}`}
              onClick={(e) => { 
                e.preventDefault(); 
                setActive(item.name);
                
                // If we are not on the homepage, redirect
                if (window.location.pathname !== '/') {
                  window.location.href = `/${item.href}`;
                  return;
                }

                const section = document.querySelector(item.href);
                if(section && window.lenis) {
                  window.lenis.scrollTo(section, { offset: -80, duration: 1.4 });
                } else if(section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`nav-item ${active === item.name ? 'active' : ''}`}
              aria-current={active === item.name ? 'page' : undefined}
            >
              {active === item.name && (
                <motion.div
                  layoutId="glass-active"
                  className="nav-item-active-bg"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
              <span className="nav-item-text">{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="navbar-action">
          <button className="btn btn-primary btn-sm">Book Consultation</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
