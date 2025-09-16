// scripts/generateSitemap.js - VERSION ES MODULES CORRIGÉE
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://chatseller.app';

// 🎯 PAGES STATIQUES À INCLURE
const staticPages = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/terms',
    changefreq: 'yearly',
    priority: '0.5',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/privacy',
    changefreq: 'yearly',
    priority: '0.5',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/support',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// 🌍 VERSIONS MULTILINGUES
const languages = ['fr', 'en'];
const multilingualPages = [];

staticPages.forEach(page => {
  languages.forEach(lang => {
    if (lang === 'fr') {
      // Version française (par défaut)
      multilingualPages.push({
        ...page,
        url: page.url
      });
    } else {
      // Versions autres langues
      multilingualPages.push({
        ...page,
        url: `/${lang}${page.url === '/' ? '' : page.url}`,
        priority: (parseFloat(page.priority) * 0.9).toFixed(1) // Légèrement moins prioritaire
      });
    }
  });
});

// 🗺️ GÉNÉRATION DU SITEMAP XML
function generateSitemap() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${multilingualPages.map(page => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${languages.map(lang => 
      `<xhtml:link rel="alternate" hreflang="${lang}" href="${SITE_URL}${lang === 'fr' ? page.url : `/${lang}${page.url === '/' ? '' : page.url}`}" />`
    ).join('\n    ')}
  </url>`).join('\n')}
</urlset>`;

  // 📁 ÉCRITURE DU FICHIER
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
  console.log('✅ Sitemap généré avec succès dans public/sitemap.xml');
  console.log(`📄 ${multilingualPages.length} URLs incluses`);
}

// 🚀 GÉNÉRATION DU ROBOTS.TXT
function generateRobotsTxt() {
  const robotsTxt = `# Robots.txt pour ChatSeller
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml

# Optimisations spécifiques
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Bloquer certains bots agressifs
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

# Fichiers à ne pas indexer
Disallow: /api/
Disallow: /_next/
Disallow: /.git/
Disallow: /node_modules/

# Cache et assets
Allow: /static/
Allow: /_next/static/
Allow: /fav.svg
Allow: /robots.txt
Allow: /sitemap.xml
`;

  const publicDir = path.join(__dirname, '..', 'public');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('✅ Robots.txt généré avec succès dans public/robots.txt');
}

// 🏃‍♂️ EXÉCUTION
generateSitemap();
generateRobotsTxt();

// Export pour utilisation en tant que module
export { generateSitemap, generateRobotsTxt };