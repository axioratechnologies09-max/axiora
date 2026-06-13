export const SITE_URL = 'https://axiora-technologies.vercel.app';
export const SITE_NAME = 'Axiora Technologies';
export const PHONE_NUMBER = '+919249047267';
export const CONTACT_EMAIL = 'axiora.technologies09@gmail.com';
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/axiora_technologies',
};

// Keyword mapping and Meta Data
export const SEO_DATA = {
  home: {
    title: 'AI Development Company & Software Engineering | Axiora Technologies',
    description: 'Axiora Technologies is a premium AI development company and software engineering agency building next-generation digital experiences, SaaS platforms, and cloud solutions.',
    keywords: 'AI Development Company, Software Development Company, SaaS Development Services, Cloud Engineering Services, Digital Transformation Solutions',
    path: '/',
    primaryKeyword: 'AI Development Company'
  },
  aiServices: {
    title: 'AI Development Services & Solutions | Axiora Technologies',
    description: 'Transform your business with our enterprise AI development services. We build custom machine learning models, generative AI tools, and intelligent automation systems.',
    keywords: 'AI Development Services, Machine Learning Company, Generative AI Solutions, AI Consulting, Custom AI Development',
    path: '/ai-development-services',
    primaryKeyword: 'AI Development Services'
  },
  customSoftware: {
    title: 'Custom Software Development Services | Axiora Technologies',
    description: 'Scalable custom software development services for enterprises and startups. We engineer robust backend systems, APIs, and high-performance applications.',
    keywords: 'Custom Software Development, Enterprise Software Company, Backend Engineering, API Development, Scalable Applications',
    path: '/custom-software-development',
    primaryKeyword: 'Custom Software Development Services'
  },
  saasDevelopment: {
    title: 'SaaS Development Company & Services | Axiora Technologies',
    description: 'Launch your next software product with our SaaS development company. We specialize in multi-tenant architectures, secure payments, and engaging UI/UX.',
    keywords: 'SaaS Development Company, B2B SaaS Development, Multi-tenant Architecture, SaaS Product Development',
    path: '/saas-development-services',
    primaryKeyword: 'SaaS Development Company'
  },
  cloudDevops: {
    title: 'Cloud Engineering Services & DevOps | Axiora Technologies',
    description: 'Secure and scalable cloud engineering services. We handle AWS deployment, CI/CD pipelines, Docker containerization, and infrastructure as code.',
    keywords: 'Cloud Engineering Services, DevOps Consulting, AWS Deployment, CI/CD Automation, Cloud Infrastructure',
    path: '/cloud-devops-services',
    primaryKeyword: 'Cloud Engineering Services'
  },
  mobileApp: {
    title: 'Mobile App Development Company | Axiora Technologies',
    description: 'Premium mobile app development company creating native and cross-platform experiences for iOS and Android that drive engagement and revenue.',
    keywords: 'Mobile App Development Company, iOS App Development, Android App Development, React Native Apps, Cross Platform Apps',
    path: '/mobile-app-development',
    primaryKeyword: 'Mobile App Development Company'
  },
  webDevelopment: {
    title: 'Web Development Company | Axiora Technologies',
    description: 'Award-winning web development company building high-performance, responsive, and SEO-optimized websites and web applications for modern brands.',
    keywords: 'Web Development Company, Custom Web Design, Frontend Development, React Agency, Web Applications',
    path: '/web-development-services',
    primaryKeyword: 'Web Development Company'
  },
  digitalTransformation: {
    title: 'Digital Transformation Consulting Services | Axiora Technologies',
    description: 'Accelerate your growth with our digital transformation consulting. We modernize legacy systems and integrate advanced digital solutions.',
    keywords: 'Digital Transformation Consulting, Enterprise Modernization, Legacy System Upgrade, Digital Strategy',
    path: '/digital-transformation-services',
    primaryKeyword: 'Digital Transformation Consulting'
  },
  blogIndex: {
    title: 'Insights on AI, SaaS & Software Engineering | Axiora Blog',
    description: 'Read the latest insights, tutorials, and case studies on AI development, SaaS architectures, cloud engineering, and digital transformation.',
    keywords: 'Software Development Blog, AI Insights, Tech Blog, SaaS Architecture, Cloud DevOps Guide',
    path: '/blog',
    primaryKeyword: 'Software Development Blog'
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
  "description": "AI, SaaS, Cloud Engineering and Software Development Company",
  "telephone": PHONE_NUMBER,
  "email": CONTACT_EMAIL,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "addressCountry": "US"
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
