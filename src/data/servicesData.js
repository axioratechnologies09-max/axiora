export const SERVICES_DATA = {
  frontend: {
    theme: 'light',
    heroImageAlt: "Frontend Development Services by Axiora Technologies",
    heroImage: "/assets/services/frontend-hero.webp",
    process: [
      { title: "Discovery", desc: "We analyze your audience, goals, and technical constraints." },
      { title: "Planning", desc: "Defining architecture, component libraries, and state management." },
      { title: "Design", desc: "Prototyping responsive layouts and micro-interactions." },
      { title: "Development", desc: "Building modular, type-safe React/Next.js components." },
      { title: "Testing", desc: "Automated unit tests, integration tests, and cross-browser QA." },
      { title: "Deployment", desc: "CI/CD pipelines to Vercel/AWS edge networks." },
      { title: "Support", desc: "Continuous performance monitoring and feature updates." }
    ],
    features: [
      {
        title: "React Dashboard UI",
        desc: "We build complex, data-heavy dashboards that render millions of data points smoothly without jank. Our React architecture ensures real-time updates and highly interactive visualizations.",
        imageAlt: "React frontend dashboard built by Axiora Technologies",
        imagePath: "/assets/services/frontend-dashboard.webp"
      },
      {
        title: "Mobile Responsive Interfaces",
        desc: "Every interface we build is meticulously crafted to be fully responsive. From ultra-wide desktop monitors to narrow mobile screens, your brand experience remains perfectly consistent.",
        imageAlt: "Mobile responsive web interface",
        imagePath: "/assets/services/frontend-mobile.webp"
      },
      {
        title: "Component Architecture",
        desc: "We utilize atomic design principles to create scalable component libraries. This ensures design consistency across your application and speeds up future feature development.",
        imageAlt: "Component architecture diagram",
        imagePath: "/assets/services/frontend-architecture.webp"
      },
      {
        title: "Performance Optimization",
        desc: "We obsess over Core Web Vitals. Through advanced code splitting, lazy loading, memoization, and optimal asset delivery, we guarantee sub-second load times.",
        imageAlt: "Performance optimization graphic showing 100 lighthouse score",
        imagePath: "/assets/services/frontend-performance.webp"
      }
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Framer Motion", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Express.js", category: "Backend" },
      { name: "NestJS", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "MongoDB", category: "Database" },
      { name: "Redis", category: "Database" },
      { name: "AWS", category: "Cloud" },
      { name: "Azure", category: "Cloud" },
      { name: "Vercel", category: "Cloud" }
    ],
    caseStudies: [
      {
        title: "Fintech Dashboard Overhaul",
        metrics: ["400% Faster Load Time", "65% Increase in User Retention", "0.1s Interaction Delay"],
        beforeImg: "/assets/services/cs-fintech-before.webp",
        afterImg: "/assets/services/cs-fintech-after.webp",
        dashboardImg: "/assets/services/frontend-dashboard.webp"
      }
    ],

    faqs: [
      {
        q: "Why choose Axiora Technologies for Frontend Development?",
        a: "We offer premium, scalable solutions tailored to your business needs. We don't just write code; we engineer pixel-perfect, highly accessible, and ultra-fast user interfaces that drive conversions."
      },
      {
        q: "What frameworks do you specialize in?",
        a: "Our core expertise lies in the React ecosystem. We predominantly use Next.js for enterprise applications, combined with TypeScript for type safety and Tailwind CSS for rapid, scalable styling."
      },
      {
        q: "How do you ensure high performance?",
        a: "We strictly monitor Core Web Vitals throughout the development lifecycle. We implement dynamic imports, image optimization, edge caching, and server-side rendering where applicable to achieve near-instant load times."
      }
    ]
  },
  customWebApps: {
    theme: 'light',
    heroImageAlt: "Custom Web Application Development by Axiora Technologies",
    heroImage: "/assets/services/custom_web_apps_hero.webp",
    process: [
      { title: "Requirements Engineering", desc: "Deep-dive workshops to document business logic, user flows, and technical requirements." },
      { title: "System Architecture", desc: "Designing robust database schemas, API gateways, and scalable cloud infrastructures." },
      { title: "Agile Development", desc: "Iterative sprints delivering functional milestones and core features continuously." },
      { title: "Security & Compliance", desc: "Implementing enterprise-grade encryption, OAuth2, and compliance auditing." },
      { title: "UAT & QA", desc: "Rigorous user acceptance testing and automated end-to-end testing pipelines." },
      { title: "Launch & Scale", desc: "Zero-downtime deployment strategies and automated autoscaling configurations." }
    ],
    features: [
      {
        title: "Enterprise Architecture",
        desc: "We build highly scalable backends using microservices or well-structured monoliths. Our systems handle complex business logic and millions of concurrent users effortlessly.",
        imageAlt: "Dynamic scaling backend clusters",
        imagePath: "/assets/services/custom_web_apps_scalable.webp"
      },
      {
        title: "Bank-Grade Security",
        desc: "Security isn't an afterthought. We implement multi-layered defense mechanisms, role-based access control (RBAC), and continuous vulnerability scanning to protect your data.",
        imageAlt: "Enterprise cybersecurity and data protection lock",
        imagePath: "/assets/services/custom_web_apps_secure.webp"
      },
      {
        title: "Seamless API Integrations",
        desc: "Whether it's Stripe, Salesforce, or legacy ERP systems, we seamlessly integrate third-party APIs to centralize your operations into one powerful web application.",
        imageAlt: "Central API integration core diagram",
        imagePath: "/assets/services/custom_web_apps_integration.webp"
      }
    ],
    techStack: [
      { name: "Node.js", category: "Backend" },
      { name: "NestJS", category: "Backend" },
      { name: "Python", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "MongoDB", category: "Database" },
      { name: "Redis", category: "Database" },
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Frontend" },
      { name: "Docker", category: "DevOps" },
      { name: "Kubernetes", category: "DevOps" },
      { name: "AWS", category: "Cloud" },
      { name: "Azure", category: "Cloud" }
    ],
    caseStudies: [
      {
        title: "Global Supply Chain Portal",
        metrics: ["Real-time Tracking", "API Integration with 12 Providers", "Zero Data Breaches"],
        dashboardImg: "/assets/services/custom_web_apps_casestudy.webp"
      }
    ],
    faqs: [
      {
        q: "What defines a 'Custom Web App' vs a standard website?",
        a: "A standard website primarily displays information. A custom web application is a complex piece of software running in the browser, featuring user authentication, databases, third-party integrations, and complex business logic (e.g., portals, SaaS platforms)."
      },
      {
        q: "How long does a custom web application take to build?",
        a: "Depending on complexity, a custom MVP (Minimum Viable Product) typically takes 8-12 weeks. Large-scale enterprise applications can take 4-6 months of continuous agile development."
      },
      {
        q: "Do I own the source code?",
        a: "Absolutely. Upon final payment and project completion, all intellectual property and source code are fully transferred to your company."
      }
    ]
  },
  ecommerce: {
    theme: 'light',
    heroImage: "/assets/services/ecommerce_hero.png",
    heroImageAlt: "Premium white e-commerce development luxury aesthetic",
    features: [
      {
        title: "Bespoke Storefronts",
        desc: "We build custom, high-end e-commerce interfaces that reflect your brand's unique identity. Delivering ultra-fast, immersive shopping experiences that captivate and convert.",
        imagePath: "/assets/services/ecommerce_storefront.png",
        imageAlt: "Minimalist fashion e-commerce storefront UI dashboard"
      },
      {
        title: "High-Conversion Checkout",
        desc: "Frictionless, secure payment flows optimized for maximum conversion. We integrate enterprise payment gateways with zero-compromise security.",
        imagePath: "/assets/services/ecommerce_checkout.png",
        imageAlt: "Clean minimal checkout process UI"
      },
      {
        title: "Inventory Intelligence",
        desc: "Connect your digital storefront with robust ERP and warehouse management systems. Real-time syncing ensures you never miss a sale or oversell an item.",
        imagePath: "/assets/services/ecommerce_inventory.png",
        imageAlt: "Enterprise inventory management dashboard"
      },
      {
        title: "Omnichannel Architecture",
        desc: "Unify your retail experience. We seamlessly connect your web, mobile, and physical point-of-sale data into one centralized, powerful ecosystem.",
        imagePath: "/assets/services/ecommerce_omnichannel.png",
        imageAlt: "Omnichannel integration concept"
      }
    ],
    process: [
      {
        step: "01",
        title: "Platform Strategy",
        desc: "We analyze your SKU count, expected traffic volume, and integration needs to recommend the perfect architecture—whether headless Shopify, Magento, or custom."
      },
      {
        step: "02",
        title: "UX/UI Design",
        desc: "Our design team crafts premium, high-converting interfaces focused on user journey optimization and mobile-first accessibility."
      },
      {
        step: "03",
        title: "Secure Engineering",
        desc: "We build your platform with PCI-compliant architecture, integrating robust payment gateways, shipping APIs, and tax calculation engines."
      },
      {
        step: "04",
        title: "Performance Launch",
        desc: "Rigorous load testing and conversion rate optimization (CRO) audits ensure your store is ready to handle enterprise-level traffic from day one."
      }
    ],
    techStack: [
      { name: "Shopify Plus", category: "Platforms" },
      { name: "Magento", category: "Platforms" },
      { name: "Commerce Layer", category: "Platforms" },
      { name: "MedusaJS", category: "Platforms" },
      { name: "Next.js Commerce", category: "Frontend" },
      { name: "Hydrogen", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "TailwindCSS", category: "Frontend" },
      { name: "Stripe", category: "Integrations" },
      { name: "Algolia", category: "Integrations" },
      { name: "Klaviyo", category: "Integrations" },
      { name: "Contentful", category: "Integrations" },
      { name: "Vercel", category: "Infrastructure" },
      { name: "AWS", category: "Infrastructure" },
      { name: "Cloudflare", category: "Infrastructure" },
      { name: "Redis", category: "Infrastructure" }
    ],
    caseStudies: [
      {
        title: "Global B2B Wholesale Portal",
        desc: "Architected a custom headless B2B platform with complex tiered pricing, quote generation, and real-time ERP inventory syncing.",
        metrics: ["+210% B2B Sales", "Real-time Inventory Sync", "0.8s Quote Generation"],
        dashboardImg: "/assets/services/ecommerce_casestudy_b2b.png"
      },
      {
        title: "Luxury Fashion Replatforming",
        desc: "Migrated a legacy fashion retailer to Shopify Plus with a custom Next.js frontend, resulting in a buttery-smooth shopping experience.",
        metrics: ["1.2s Load Time", "65% Higher Mobile Conversion", "Global Multi-Currency"],
        dashboardImg: "/assets/services/ecommerce_casestudy_luxury.png"
      }
    ],
    faqs: [
      {
        q: "Do you specialize in headless e-commerce?",
        a: "Yes. For enterprise clients, we highly recommend headless architectures (like Next.js + Shopify Plus or Medusa). This decouples the frontend from the backend, providing lightning-fast load times and total design freedom."
      },
      {
        q: "Can you integrate with our existing ERP?",
        a: "Absolutely. We have extensive experience integrating custom e-commerce builds with legacy ERPs like SAP, Oracle, NetSuite, and Microsoft Dynamics to ensure real-time data sync."
      },
      {
        q: "How do you handle site speed with high-res product images?",
        a: "We implement edge caching, automated next-gen image formatting (WebP/AVIF), and lazy loading. This ensures your high-fidelity product imagery loads instantly without blocking the main thread."
      }
    ]
  },
  cmsHeadless: {
    theme: 'light',
    heroImageAlt: "Headless CMS and Architecture by Axiora Technologies",
    heroImage: "/assets/services/custom_web_apps_hero.webp",
    process: [
      { title: "Content Strategy", desc: "We audit your existing content silos and design a unified, API-first content model." },
      { title: "CMS Selection", desc: "Evaluating and implementing the best headless CMS (Sanity, Contentful, Strapi) for your needs." },
      { title: "Frontend Integration", desc: "Building blazing-fast Next.js or React frontends that consume your new headless APIs." },
      { title: "Omnichannel Rollout", desc: "Deploying your content across web, mobile apps, and digital displays simultaneously." }
    ],
    features: [
      {
        title: "Omnichannel Delivery",
        desc: "Write once, publish everywhere. Distribute your content seamlessly to websites, mobile apps, IoT devices, and digital displays from a single hub.",
        imagePath: "/assets/services/frontend-mobile.webp",
        imageAlt: "Omnichannel content delivery network"
      },
      {
        title: "Decoupled Architecture",
        desc: "Separate your frontend presentation from your backend content repository. Update your UI without risking content loss, or migrate CMS platforms without rebuilding your site.",
        imagePath: "/assets/services/frontend-architecture.webp",
        imageAlt: "Decoupled scalable architecture"
      },
      {
        title: "Blazing Fast Performance",
        desc: "By delivering content via APIs to static site generators or edge-rendered frontends, headless architectures provide unparalleled page speed and SEO benefits.",
        imagePath: "/assets/services/frontend-performance.webp",
        imageAlt: "Performance optimization"
      },
      {
        title: "Future-Proof Tech Stack",
        desc: "Eliminate vendor lock-in. A headless approach allows you to swap out individual services (search, analytics, frontend frameworks) as technology evolves.",
        imagePath: "/assets/services/custom_web_apps_integration.webp",
        imageAlt: "API integration architecture"
      }
    ],
    techStack: [
      { name: "Sanity.io", category: "Headless CMS" },
      { name: "Contentful", category: "Headless CMS" },
      { name: "Strapi", category: "Headless CMS" },
      { name: "Builder.io", category: "Headless CMS" },
      { name: "Next.js", category: "Frontend" },
      { name: "Gatsby", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "Vue.js", category: "Frontend" },
      { name: "GraphQL", category: "API Layer" },
      { name: "REST APIs", category: "API Layer" },
      { name: "tRPC", category: "API Layer" },
      { name: "Apollo", category: "API Layer" },
      { name: "Vercel", category: "Infrastructure" },
      { name: "Netlify", category: "Infrastructure" },
      { name: "Cloudflare", category: "Infrastructure" },
      { name: "AWS", category: "Infrastructure" }
    ],
    caseStudies: [
      {
        title: "Global Publishing Platform Migration",
        desc: "We migrated a legacy monolithic CMS to a decoupled Sanity.io + Next.js architecture, resulting in a 400% increase in editorial velocity and sub-second page loads globally.",
        metrics: ["400% Faster Publishing", "Sub-second LCP", "99.99% Uptime SLA", "Omnichannel Ready"],
        dashboardImg: "/assets/services/custom_web_apps_casestudy.webp"
      }
    ],
    video: null,
    faqs: [
      {
        q: "What is a headless CMS?",
        a: "A headless CMS is a back-end only content management system that acts primarily as a content repository. It makes content accessible via a RESTful API or GraphQL API for display on any device, entirely separating the content from the presentation layer."
      },
      {
        q: "Is headless right for my business?",
        a: "If you need to deliver content across multiple platforms (web, mobile, smart devices), require exceptional performance, or want the flexibility to redesign your frontend without touching your backend, headless is likely the right choice."
      },
      {
        q: "How does it affect SEO?",
        a: "Headless architectures typically improve SEO significantly. By decoupling the frontend, we can use static site generation (SSG) or server-side rendering (SSR) frameworks like Next.js, which provide search engines with fully rendered HTML and lightning-fast load times."
      }
    ]
  },
  backend: {
    theme: 'light',
    heroImageAlt: "Backend Engineering & APIs by Axiora Technologies",
    heroImage: "/assets/services/custom_web_apps_scalable.webp",
    process: [
      { title: "Architecture Design", desc: "Mapping out data flow, security models, and microservices architecture." },
      { title: "Database Schema", desc: "Structuring relational and NoSQL databases for optimal query performance and scale." },
      { title: "API Development", desc: "Building secure, documented RESTful and GraphQL APIs for your frontends." },
      { title: "Load Testing", desc: "Simulating heavy traffic to guarantee zero downtime under extreme stress." }
    ],
    features: [
      {
        title: "Microservices Architecture",
        desc: "Break down monolithic applications into independently deployable, scalable, and manageable microservices for high availability.",
        imagePath: "/assets/services/custom_web_apps_integration.webp",
        imageAlt: "Microservices networking"
      },
      {
        title: "Secure API Ecosystems",
        desc: "We build enterprise-grade GraphQL and REST APIs with OAuth2, JWT authentication, and strict rate-limiting to protect your data.",
        imagePath: "/assets/services/custom_web_apps_secure.webp",
        imageAlt: "API Security Nodes"
      },
      {
        title: "Database Optimization",
        desc: "From complex PostgreSQL relations to horizontal MongoDB sharding, we optimize your data layer for sub-millisecond query execution.",
        imagePath: "/assets/services/custom_web_apps_casestudy.webp",
        imageAlt: "Database analytics"
      },
      {
        title: "Serverless Cloud Infra",
        desc: "Deploying auto-scaling serverless functions on AWS and Vercel to drastically reduce idle costs while handling traffic spikes flawlessly.",
        imagePath: "/assets/services/frontend-architecture.webp",
        imageAlt: "Serverless infrastructure"
      }
    ],
    techStack: [
      { name: "Node.js", category: "Runtime" },
      { name: "Python", category: "Language" },
      { name: "Go", category: "Language" },
      { name: "Rust", category: "Language" },
      { name: "PostgreSQL", category: "Database" },
      { name: "MongoDB", category: "Database" },
      { name: "Redis", category: "Caching" },
      { name: "ElasticSearch", category: "Search" },
      { name: "GraphQL", category: "API" },
      { name: "REST API", category: "API" },
      { name: "Docker", category: "DevOps" },
      { name: "Kubernetes", category: "DevOps" },
      { name: "AWS", category: "Cloud" },
      { name: "Google Cloud", category: "Cloud" },
      { name: "Kafka", category: "Messaging" },
      { name: "RabbitMQ", category: "Messaging" }
    ],
    caseStudies: [
      {
        title: "High-Frequency Trading API",
        desc: "Architected a low-latency Go-based microservices backend capable of processing 50,000 requests per second with sub-10ms response times.",
        metrics: ["50k Req/Sec", "<10ms Latency", "Zero Data Loss", "100% SLA"],
        dashboardImg: "/assets/services/frontend-dashboard.webp"
      }
    ],
    video: null,
    faqs: [
      {
        q: "Do you build REST or GraphQL APIs?",
        a: "We build both. For highly interconnected data where the frontend needs flexibility to request specific fields, we prefer GraphQL. For standardized, resource-oriented operations, we build robust REST APIs."
      },
      {
        q: "How do you handle backend security?",
        a: "Security is built-in from day one. We implement zero-trust architectures, end-to-end encryption, regular dependency audits, SQL injection prevention, and strict RBAC (Role-Based Access Control)."
      },
      {
        q: "What cloud providers do you work with?",
        a: "Our team is highly experienced with AWS (Amazon Web Services), Google Cloud Platform (GCP), and Azure. We can deploy to your preferred cloud or recommend the best provider based on your infrastructure needs."
      }
    ]
  },
  seoPerformance: {
    theme: 'light',
    heroImageAlt: "SEO and Core Web Vitals Optimization",
    heroImage: "/assets/services/frontend-performance.webp",
    process: [
      { title: "Technical Audit", desc: "Deep crawl of your application to identify blocking scripts, layout shifts, and semantic HTML errors." },
      { title: "Performance Tuning", desc: "Optimizing asset delivery, implementing Edge caching, and fine-tuning server response times (TTFB)." },
      { title: "Structured Data", desc: "Implementing advanced JSON-LD schemas to ensure search engines understand your context instantly." },
      { title: "Continuous Monitoring", desc: "Setting up real-user monitoring (RUM) to track Core Web Vitals across real-world devices." }
    ],
    features: [
      {
        title: "Lightning-Fast LCP",
        desc: "We optimize your Largest Contentful Paint (LCP) to render in under 2.5 seconds by prioritizing critical CSS and preloading key hero assets.",
        imagePath: "/assets/services/frontend-mobile.webp",
        imageAlt: "Mobile performance"
      },
      {
        title: "Zero Layout Shifts",
        desc: "We eliminate Cumulative Layout Shift (CLS) by properly sizing media elements, pre-allocating ad spaces, and avoiding dynamic content injection above the fold.",
        imagePath: "/assets/services/frontend-architecture.webp",
        imageAlt: "Stable UI Architecture"
      },
      {
        title: "Instant Interactivity",
        desc: "We minimize your Interaction to Next Paint (INP) by breaking up long tasks, deferring non-critical JavaScript, and utilizing web workers.",
        imagePath: "/assets/services/frontend-dashboard.webp",
        imageAlt: "Interactive dashboard metrics"
      },
      {
        title: "Enterprise SEO Architecture",
        desc: "Beyond performance, we build pristine semantic HTML structures with dynamic routing, canonical tags, and localized sitemaps for global reach.",
        imagePath: "/assets/services/custom_web_apps_casestudy.webp",
        imageAlt: "SEO analytics"
      }
    ],
    techStack: [
      { name: "Lighthouse", category: "Auditing" },
      { name: "WebPageTest", category: "Auditing" },
      { name: "Chrome UX Report", category: "Auditing" },
      { name: "Sentry", category: "Monitoring" },
      { name: "Datadog", category: "Monitoring" },
      { name: "Vercel Analytics", category: "Monitoring" },
      { name: "Next.js", category: "Framework" },
      { name: "React Server Components", category: "Framework" },
      { name: "Edge Caching", category: "Infrastructure" },
      { name: "Cloudflare", category: "Infrastructure" },
      { name: "JSON-LD", category: "SEO" },
      { name: "Schema.org", category: "SEO" }
    ],
    caseStudies: [
      {
        title: "E-Commerce Performance Overhaul",
        desc: "We optimized a major retail platform, dropping LCP from 6.2s to 1.4s. The resulting Core Web Vitals pass led to a 45% increase in organic mobile traffic.",
        metrics: ["1.4s LCP", "0.02s CLS", "+45% Organic Traffic", "Perfect CWV Score"],
        dashboardImg: "/assets/services/frontend-performance.webp"
      }
    ],
    video: null,
    faqs: [
      {
        q: "What are Core Web Vitals?",
        a: "Core Web Vitals are a set of specific factors that Google considers important in a webpage's overall user experience. They currently consist of three metrics: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS)."
      },
      {
        q: "Why do my Lighthouse scores fluctuate?",
        a: "Lighthouse runs simulated lab tests from your local machine or a server. Network conditions, CPU throttling, and third-party script execution can cause variances. We focus on stabilizing Real User Metrics (RUM) instead of just chasing 100/100 lab scores."
      },
      {
        q: "Does a faster site actually improve SEO?",
        a: "Yes. Google uses Core Web Vitals as a direct ranking signal. Furthermore, a faster site drastically reduces bounce rates and increases time-on-site, which are strong indirect signals that improve your overall search ranking and conversion rates."
      }
    ]
  }
};
