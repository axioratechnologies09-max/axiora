import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';
import { SEO_DATA } from '../data/seo';

import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import TechStack from '../components/TechStack';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import IndustriesServed from '../components/IndustriesServed';
import FAQ from '../components/FAQ';

const HomePage = () => {
  const seo = SEO_DATA.home;

  useEffect(() => {
    // Scroll to top on mount when coming from another page
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <SEOHead 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        path={seo.path}
      />
      <StructuredData type="Home" />
      
      <Hero />
      <About />
      <Services />
      <IndustriesServed />
      <Process />
      <TechStack />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default HomePage;
