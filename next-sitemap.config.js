/** @type {import('next-sitemap').IConfig} */

// Import project data to generate dynamic routes
const { projects } = require('./src/data/project.ts');

// Convert project titles to URL slugs
const getSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

// Generate dynamic project routes
const dynamicRoutes = projects.map((project) => ({
  loc: `/projects/${getSlug(project.title)}`,
  changefreq: 'weekly',
  priority: 0.8,
}));

module.exports = {
  siteUrl: 'https://abdul-moiz-b419.vercel.app/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/.next/'],
      },
    ],
  },
  // Define static pages with priority and changefreq
  additionalPaths: async (config) => {
    const paths = [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1.0,
      },
      {
        loc: '/projects',
        changefreq: 'weekly',
        priority: 0.9,
      },
      {
        loc: '/gallery-of-trying',
        changefreq: 'monthly',
        priority: 0.7,
      },
      // Add dynamic project routes
      ...dynamicRoutes,
    ];

    return paths;
  },
  exclude: [
    '/api/*',
    '/*.json',
    '/sitemap.xml',
    '/robots.txt',
  ],
  // Format the sitemap
  changefreq: 'weekly',
  priority: 0.7,
};
  