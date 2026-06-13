import React from 'react';
import { Helmet } from 'react-helmet-async';
import { organizationSchema, websiteSchema, SITE_URL, SITE_NAME } from '../../data/seo';

const StructuredData = ({ type = 'Organization', data = null, breadcrumbs = [] }) => {
  let schemas = [];

  // Always include Organization and WebSite schemas on the homepage
  if (type === 'Organization' || type === 'Home') {
    schemas.push(organizationSchema);
    schemas.push(websiteSchema);
  }

  // Breadcrumb schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `${SITE_URL}${crumb.path}`
      }))
    });
  }

  // Custom data like Service, FAQPage, Article
  if (data) {
    schemas.push(data);
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default StructuredData;
