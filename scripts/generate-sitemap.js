import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://axiora-technologies.in';

// Read all route definitions or list them here
const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/services/frontend-development', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/custom-web-apps', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/ecommerce-solutions', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/cms-headless', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/backend-apis', priority: 0.9, changefreq: 'monthly' },
  { path: '/services/seo-performance', priority: 0.9, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' }
];

const generateSitemap = () => {
  // Use strictly standard ISO format for W3C Datetime compliance
  const date = new Date().toISOString();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map(route => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(publicPath, sitemap);
  console.log(`✅ Sitemap generated at ${publicPath}`);
};

generateSitemap();
