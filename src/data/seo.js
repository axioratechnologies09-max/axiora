export const SITE_URL = 'https://axiora-technologies.in';
export const SITE_NAME = 'Axiora Technologies';
export const PHONE_NUMBER = '+919249047267';
export const CONTACT_EMAIL = 'axiora.technologies09@gmail.com';
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/axiora_technologies',
};

// Keyword mapping and Meta Data
export const SEO_DATA = {
  home: {
    title: 'Axiora Technologies | Web Development Company in Palakkad',
    description: 'Axiora Technologies is the premier web development company in Palakkad, Kerala. We build next-generation digital experiences, high-performance web applications, and stunning websites.',
    keywords: 'Axiora, Axiora Technologies, Web Development Company in Palakkad, Web Design Palakkad, Best Web Developers Palakkad, React Agency Kerala',
    path: '/',
    primaryKeyword: 'Axiora Technologies'
  },
  frontend: {
    title: 'Enterprise Frontend Development Services | Axiora Technologies',
    description: 'Premium frontend development services. We build pixel-perfect, highly responsive, and accessible user interfaces using React, Next.js, and modern CSS frameworks.',
    keywords: 'Frontend Development Services, React Development Agency, Next.js Experts, UI Engineering, Custom Web Interfaces',
    path: '/services/frontend-development',
    primaryKeyword: 'Frontend Development Services'
  },
  customWebApps: {
    title: 'Custom Web Application Development | Axiora Technologies',
    description: 'Scalable and high-performance custom web applications tailored to your business logic. We engineer robust SPAs and complex web portals.',
    keywords: 'Custom Web App Development, Web Application Agency, Enterprise Web Apps, Custom Web Portals, SPA Development',
    path: '/services/custom-web-apps',
    primaryKeyword: 'Custom Web Application Development'
  },
  ecommerce: {
    title: 'E-Commerce Development Solutions | Axiora Technologies',
    description: 'Robust online stores and custom e-commerce solutions with secure payment gateways, optimized conversion funnels, and seamless shopping experiences.',
    keywords: 'E-Commerce Development, Custom E-Commerce Solutions, Shopify Plus Experts, Custom Shopping Cart Development',
    path: '/services/ecommerce-solutions',
    primaryKeyword: 'E-Commerce Development Solutions'
  },
  cmsHeadless: {
    title: 'CMS & Headless Architecture Services | Axiora Technologies',
    description: 'Flexible content management systems and modern headless architectures (Sanity, Strapi, Contentful) for ultimate content control and omnichannel delivery.',
    keywords: 'Headless CMS Development, Custom CMS Solutions, Strapi Experts, Sanity Developer, Omnichannel Architecture',
    path: '/services/cms-headless',
    primaryKeyword: 'Headless CMS Architecture'
  },
  backend: {
    title: 'Backend Engineering & API Development | Axiora Technologies',
    description: 'Secure, scalable server-side architectures, RESTful APIs, GraphQL integrations, and robust database design for modern web platforms.',
    keywords: 'Backend Development Services, API Development, Node.js Engineering, Database Design, Scalable Server Architecture',
    path: '/services/backend-apis',
    primaryKeyword: 'Backend Engineering Services'
  },
  seoPerformance: {
    title: 'SEO & Core Web Vitals Optimization | Axiora Technologies',
    description: 'Technical SEO optimization, lightning-fast load times, and Core Web Vitals improvements to dominate search engine rankings.',
    keywords: 'Technical SEO Services, Core Web Vitals Optimization, Website Performance Agency, Page Speed Experts',
    path: '/services/seo-performance',
    primaryKeyword: 'Technical SEO Optimization'
  },
  blogIndex: {
    title: 'Insights on Web Development & Design | Axiora Blog',
    description: 'Read the latest insights, tutorials, and case studies on frontend engineering, web application architecture, and digital experiences.',
    keywords: 'Web Development Blog, Frontend Insights, Tech Blog, React Architecture, Web Design Guide',
    path: '/blog',
    primaryKeyword: 'Web Development Blog'
  }
};

// Base Organization Schema (Will be dynamically injected)
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
  "name": SITE_NAME,
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.jpeg`,
  "image": `${SITE_URL}/logo.jpeg`,
  "description": "Premium Web Development Company & Digital Experiences Agency",
  "telephone": PHONE_NUMBER,
  "email": CONTACT_EMAIL,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Palakkad",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "sameAs": [
    SOCIAL_LINKS.instagram
  ],
  "priceRange": "$$$"
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SITE_NAME,
  "url": SITE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};
