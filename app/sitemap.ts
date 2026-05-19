import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.aetibar.in',
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: 'https://www.aetibar.in/about',
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: 'https://www.aetibar.in/contact',
      lastModified: new Date(),
      priority: 0.8,
    },
  ]
}
