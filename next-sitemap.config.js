/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://slimboekhoud.nl',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],

  // Overschrijf prioriteit en changefreq per pad
  transform: async (config, path) => {
    // Homepage
    if (path === '/') {
      return { loc: path, changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() }
    }

    // Hoofdvergelijkingspagina — meest waardevolle commerciële pagina
    if (path === '/boekhoudprogramma') {
      return { loc: path, changefreq: 'weekly', priority: 0.95, lastmod: new Date().toISOString() }
    }

    // Factuurprogramma
    if (path === '/factuurprogramma') {
      return { loc: path, changefreq: 'weekly', priority: 0.85, lastmod: new Date().toISOString() }
    }

    // Tool-reviews: hoge commerciële waarde
    if (path.startsWith('/tools/')) {
      return { loc: path, changefreq: 'weekly', priority: 0.85, lastmod: new Date().toISOString() }
    }

    // Vergelijk-overzichtspagina
    if (path === '/vergelijk') {
      return { loc: path, changefreq: 'weekly', priority: 0.80, lastmod: new Date().toISOString() }
    }

    // Vergelijk-pagina's (vs)
    if (path.startsWith('/vergelijk/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.75, lastmod: new Date().toISOString() }
    }

    // Gidsen-overzicht
    if (path === '/gids') {
      return { loc: path, changefreq: 'weekly', priority: 0.80, lastmod: new Date().toISOString() }
    }

    // Individuele gidspagina's — SEO-content
    if (path.startsWith('/gids/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.70, lastmod: new Date().toISOString() }
    }

    // Juridische pagina's
    if (path === '/privacy' || path === '/disclaimer') {
      return { loc: path, changefreq: 'yearly', priority: 0.20, lastmod: new Date().toISOString() }
    }

    // Standaard fallback
    return { loc: path, changefreq: config.changefreq, priority: config.priority, lastmod: new Date().toISOString() }
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    additionalSitemaps: [],
  },
}
