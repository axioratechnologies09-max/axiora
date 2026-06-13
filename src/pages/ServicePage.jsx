import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';
import { SEO_DATA, SITE_URL } from '../data/seo';

const ServicePage = ({ type }) => {
  const seo = SEO_DATA[type];

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [type]);

  if (!seo) return <div>Service not found</div>;

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Why choose Axiora Technologies for ${seo.primaryKeyword}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We offer premium, scalable solutions tailored to your business needs, ensuring high performance, security, and exceptional user experience in ${seo.primaryKeyword}.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does a typical ${seo.primaryKeyword.toLowerCase()} project take?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project timelines vary based on complexity, but typically range from 2 to 6 months for enterprise-grade implementations."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        path={seo.path}
      />
      <StructuredData type="Service" data={serviceSchema} breadcrumbs={breadcrumbs} />
      <StructuredData type="FAQPage" data={faqSchema} />

      <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <span className="section-tag glow-text">Premium Service</span>
            <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
              {seo.title.split('|')[0].trim()}
            </h1>
            <p className="hero-subtitle mx-auto" style={{ maxWidth: '800px', fontSize: '1.25rem', color: 'var(--muted)' }}>
              {seo.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--card)', padding: '80px 0' }}>
        <div className="container">
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Enterprise-Grade <span>Solutions</span></h2>
              <p style={{ marginBottom: '1.5rem', color: 'var(--muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                At Axiora Technologies, our <strong>{seo.primaryKeyword.toLowerCase()}</strong> is designed to propel your business forward. We integrate modern architectures, scalable frameworks, and robust security protocols to ensure your digital presence is flawless.
              </p>
              <p style={{ marginBottom: '2rem', color: 'var(--muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                Whether you need intelligent automation, cloud-native deployments, or custom web and mobile interfaces, our engineering team brings years of expertise to deliver platforms that not only look premium but operate with unmatched reliability.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['High-Performance Architecture', 'Scalable & Secure Infrastructure', 'Seamless User Experience', 'Agile Delivery Process'].map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', fontSize: '1.1rem' }}>
                    <FaCheckCircle className="text-gold" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass glow" style={{ height: '400px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(212, 175, 55, 0.05)' }}>
              {/* Placeholder for service specific abstract image/visual */}
              <div style={{ textAlign: 'center', color: 'var(--gold-dark)' }}>
                <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1rem' }}>✨</span>
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>{seo.primaryKeyword}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container text-center">
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Ready to transform your business?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--muted)', fontSize: '1.1rem' }}>
            Partner with Axiora Technologies and leverage our expertise in {seo.primaryKeyword.toLowerCase()} to build your next big thing.
          </p>
          <Link to="/#contact" className="btn btn-primary" onClick={() => {
            setTimeout(() => {
              const el = document.getElementById('contact');
              if(el && window.lenis) window.lenis.scrollTo(el);
              else if(el) el.scrollIntoView();
            }, 100);
          }}>
            Start Your Project <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
