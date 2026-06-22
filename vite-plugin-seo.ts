import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Plugin } from 'vite';
import { portfolioData } from './src/data/portfolio';
import {
  SITE_URL,
  buildCrawlerHtml,
  buildJsonLd,
  buildLlmsTxt,
  buildPortfolioJson,
} from './src/lib/seo-export';

const PUBLIC_DIR = resolve(__dirname, 'public');

function writeSeoFiles() {
  writeFileSync(
    resolve(PUBLIC_DIR, 'portfolio.json'),
    JSON.stringify(buildPortfolioJson(portfolioData), null, 2),
  );
  writeFileSync(resolve(PUBLIC_DIR, 'llms.txt'), buildLlmsTxt(portfolioData));
  writeFileSync(
    resolve(PUBLIC_DIR, 'robots.txt'),
    `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`,
  );
  writeFileSync(
    resolve(PUBLIC_DIR, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/portfolio.json</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/llms.txt</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/resume/morales-dexter-cv.pdf</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
`,
  );
}

export function seoPlugin(): Plugin {
  return {
    name: 'portfolio-seo',
    buildStart() {
      writeSeoFiles();
    },
    configureServer() {
      writeSeoFiles();
    },
    transformIndexHtml(html) {
      const jsonLd = JSON.stringify(buildJsonLd(portfolioData));
      const crawlerHtml = buildCrawlerHtml(portfolioData);

      return html
        .replace(
          '</head>',
          `    <link rel="canonical" href="${SITE_URL}/" />
    <meta property="og:url" content="${SITE_URL}/" />
    <meta property="og:site_name" content="${portfolioData.personal.name}" />
    <script type="application/ld+json">${jsonLd}</script>
  </head>`,
        )
        .replace(
          '<div id="root"></div>',
          `${crawlerHtml}
    <div id="root"></div>`,
        );
    },
  };
}
