/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.nurturelifescience.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://www.nurturelifescience.com/sitemap.xml',
    ],
  },
  additionalPaths: async (config) => {
    const productPages = [
      '/products',
      '/products/axident-capsules',
      '/products/axident-drops',
      '/products/eco-ad-oil',
      '/products/musgo-gel',
      '/products/sukfate-o',
      '/products/panjol-dsr'
    ];

    return productPages.map((path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: path === '/products' ? 0.9 : 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
  transform: async (config, path) => {
    // Custom transform for different page types
    const customConfig = {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };

    // Homepage gets highest priority
    if (path === '/') {
      customConfig.priority = 1.0;
      customConfig.changefreq = 'daily';
    }

    // Products index page gets high priority
    if (path === '/products') {
      customConfig.priority = 0.9;
      customConfig.changefreq = 'weekly';
    }

    // Individual product pages get high priority
    if (path.includes('/products/') && path !== '/products') {
      customConfig.priority = 0.8;
      customConfig.changefreq = 'weekly';
    }

    return customConfig;
  },
};

