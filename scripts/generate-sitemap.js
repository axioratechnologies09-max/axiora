import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://axiora-technologies.vercel.app';

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
  // The system OS clock is currently set to 2026, so we'll force this to 2025 manually
  const rawDate = new Date().toISOString().split('T')[0];
  const date = rawDate.replace('2026', '2025');
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
