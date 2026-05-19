import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.aetibar.in',
      lastModified: new Date(),
    },

    {
      url: 'https://www.aetibar.in/services',
      lastModified: new Date(),
    },

    {
      url: 'https://www.aetibar.in/projects',
      lastModified: new Date(),
    },

    {
      url: 'https://www.aetibar.in/process',
      lastModified: new Date(),
    },

    {
      url: 'https://www.aetibar.in/pricing',
      lastModified: new Date(),
    },

    {
      url: 'https://www.aetibar.in/contect',
      lastModified: new Date(),
    },
  ]
}
