import React, { useEffect, Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';
import LazySection from '../components/LazySection';
import { SEO_DATA } from '../data/seo';

// Lazy load below-the-fold components
const About = lazy(() => import('../components/About'));
const Services = lazy(() => import('../components/Services'));
const Process = lazy(() => import('../components/Process'));
const TechStack = lazy(() => import('../components/TechStack'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Contact = lazy(() => import('../components/Contact'));
const IndustriesServed = lazy(() => import('../components/IndustriesServed'));
const FAQ = lazy(() => import('../components/FAQ'));


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
      <Suspense fallback={<div style={{ height: '100vh' }}></div>}>
        <LazySection height="80vh"><About /></LazySection>
        <LazySection height="100vh"><Services /></LazySection>
        <LazySection height="60vh"><IndustriesServed /></LazySection>
        <LazySection height="100vh"><Process /></LazySection>
        <LazySection height="60vh"><TechStack /></LazySection>
        <LazySection height="100vh"><Portfolio /></LazySection>
        <LazySection height="80vh"><WhyChooseUs /></LazySection>
        <LazySection height="60vh"><Testimonials /></LazySection>
        <LazySection height="80vh"><FAQ /></LazySection>
        <LazySection height="100vh"><Contact /></LazySection>
      </Suspense>
    </>
  );
};

export default HomePage;
