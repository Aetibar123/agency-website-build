import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  slug: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
}

export function generateServiceSEO({
  title,
  description,
  slug,
  keywords,
  image,
  type = 'website',
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aetibar.in';
  const url = `${baseUrl}/services/${slug}`;

  // Intelligently derive keywords if none are provided
  const derivedKeywords = keywords && keywords.length > 0
    ? keywords
    : [title, 'Aetibar', 'services', title.toLowerCase()];

  return {
  metadataBase: new URL(baseUrl),

  title: `${title} | Aetibar`,
  description,

  keywords: [...new Set(derivedKeywords)],

  alternates: {
    canonical: url,
  },

  openGraph: {
    title: `${title} | Aetibar`,
    description,
    url,
    type,
    siteName: "Aetibar",
    images: image
      ? [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ]
      : [],
  },

  twitter: {
    card: "summary_large_image",
    title: `${title} | Aetibar`,
    description,
    images: image ? [image] : [],
  },
};
}
