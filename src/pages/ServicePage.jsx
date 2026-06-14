import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';
import { SEO_DATA, SITE_URL } from '../data/seo';
import { SERVICES_DATA } from '../data/servicesData';
import { 
  ServiceHero, 
  ServiceFeatures, 
  ProcessTimeline, 
  TechStack, 
  CaseStudySlider
} from '../components/Service/ServiceBlocks';
import './ServicePage.css';

const ServicePage = ({ type }) => {
  const seo = SEO_DATA[type];
  const serviceData = SERVICES_DATA[type];

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [type]);

  if (!seo || !serviceData) return <div>Service not found</div>;

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: seo.title.split('|')[0].trim(), path: seo.path }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": seo.title.split('|')[0].trim(),
    "provider": {
      "@type": "Organization",
      "name": "Axiora Technologies"
    },
    "description": seo.description,
    "url": `${SITE_URL}${seo.path}`
  };

  const faqSchema = serviceData.faqs?.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;



  // Reusable FAQ Component for the bottom of the page
  const FAQSection = () => {
    const [openIndex, setOpenIndex] = React.useState(null);
    if (!serviceData.faqs || serviceData.faqs.length === 0) return null;

    return (
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="text-center mb-5">
            <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {serviceData.faqs.map((faq, index) => (
              <div key={index} className="glass" style={{ borderRadius: '16px', overflow: 'hidden', border: `1px solid ${openIndex === index ? 'var(--gold)' : 'var(--border-light)'}`, transition: 'border-color 0.3s ease' }}>
                <button
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', color: 'var(--text)', fontSize: '1.1rem', fontWeight: '600', fontFamily: 'var(--font-sans)' }}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  {faq.q}
                  <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <FiChevronDown style={{ color: 'var(--gold-dark)' }} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
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

  const themeClass = serviceData.theme === 'light' ? 'service-light-mode' : 'service-dark-mode';

  return (
    <div className={themeClass}>
      <SEOHead 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        path={seo.path}
        ogImage={serviceData.heroImage}
      />
      <StructuredData type="Service" data={serviceSchema} breadcrumbs={breadcrumbs} />
      {faqSchema && <StructuredData type="FAQPage" data={faqSchema} />}

      <ServiceHero 
        title={seo.title.split('|')[0].trim()} 
        description={seo.description} 
        heroImage={serviceData.heroImage} 
        heroImageAlt={serviceData.heroImageAlt} 
      />

      <ServiceFeatures features={serviceData.features} />
      
      <ProcessTimeline process={serviceData.process} />
      
      <TechStack stack={serviceData.techStack} />
      
      <CaseStudySlider studies={serviceData.caseStudies} />

      <FAQSection />

      <section className="section" style={{ background: 'var(--card)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Ready to transform your business?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--muted)', fontSize: '1.1rem' }}>
            Partner with Axiora Technologies and leverage our expertise in {seo.primaryKeyword.toLowerCase()} to build your next big thing.
          </p>
          <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
