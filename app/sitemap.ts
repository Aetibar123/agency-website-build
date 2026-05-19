import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://aetibar-portfolio-f8zc.vercel.app',
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: 'https://aetibar-portfolio-f8zc.vercel.app/about',
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: 'https://aetibar-portfolio-f8zc.vercel.app/contact',
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}
