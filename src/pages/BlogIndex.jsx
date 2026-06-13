import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';
import { SEO_DATA } from '../data/seo';

const BlogIndex = () => {
  const seo = SEO_DATA.blogIndex;

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: seo.path }
  ];

  return (
    <>
      <SEOHead 
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        path={seo.path}
      />
      <StructuredData type="CollectionPage" breadcrumbs={breadcrumbs} />

      <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px', minHeight: '80vh' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
          >
            <span className="section-tag glow-text">Insights & News</span>
            <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
              Axiora <span>Blog</span>
            </h1>
            <p className="hero-subtitle mx-auto" style={{ maxWidth: '800px', fontSize: '1.25rem', color: 'var(--muted)' }}>
              {seo.description}
            </p>
          </motion.div>

          <div style={{ textAlign: 'center', marginTop: '4rem', padding: '4rem', background: 'var(--card)', borderRadius: '24px', border: '1px solid var(--border-light)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1rem' }}>Coming Soon</h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              We're currently writing premium, in-depth articles on software engineering, AI architecture, and digital transformation. Check back soon for expert insights.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['AI & Machine Learning', 'SaaS Architecture', 'Cloud & DevOps', 'Web Development'].map((cat, i) => (
                <span key={i} style={{ padding: '0.5rem 1rem', background: 'rgba(0,0,0,0.05)', borderRadius: '99px', fontSize: '0.9rem', fontWeight: '500' }}>
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogIndex;
