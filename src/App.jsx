import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Lightfall from './components/Lightfall';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dock from './components/Dock';
import { FiHome, FiInfo, FiLayers, FiBriefcase, FiMail } from 'react-icons/fi';

function App() {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Prevent double-init from StrictMode
    if (lenisRef.current) {
      lenisRef.current.destroy();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    }

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      lerp: 0.08,
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      window.lenis = null;
      lenisRef.current = null;
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element && window.lenis) {
      window.lenis.scrollTo(element, { offset: -80, duration: 1.4 });
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dockItems = [
    { icon: <FiHome size={20} />, label: 'Home', onClick: () => handleScrollTo('home') },
    { icon: <FiInfo size={20} />, label: 'About', onClick: () => handleScrollTo('about') },
    { icon: <FiMail size={24} />, label: 'Contact', onClick: () => handleScrollTo('contact') },
    { icon: <FiLayers size={20} />, label: 'Services', onClick: () => handleScrollTo('services') },
    { icon: <FiBriefcase size={20} />, label: 'Portfolio', onClick: () => handleScrollTo('portfolio') },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <TechStack />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Dock 
        items={dockItems}
        panelHeight={60}
        baseItemSize={44}
        magnification={60}
      />
    </>
  );
}

export default App;
