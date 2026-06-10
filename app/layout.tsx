import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aetibar.in/'),

  alternates: {
    canonical: '/',
  },
  
  title: 'Aetibar | Premium Software Development & Digital Marketing Agency',
  description: 'Build smarter digital experiences with Aetibar. We create high-performance websites, mobile apps, AI solutions, SEO strategies, and growth-focused digital systems.',
  keywords: ['software development', 'digital marketing', 'web development', 'mobile apps', 'AI solutions', 'SEO', 'branding'],
    icons: {
    icon: '/logo.jpeg',
  },
  authors: [{ name: 'Aetibar' }],
  openGraph: {
    title: 'Aetibar | Premium Software Development & Digital Marketing Agency',
    description: 'We build scalable digital products and growth systems.',
    url: 'https://www.aetibar.in',
    siteName: 'Aetibar',
    type: 'website',
    images: [
  {
    url: 'https://www.aetibar.in/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Aetibar',
  },
],
  },
}

export const viewport: Viewport = {
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
       <head>
     <meta name="google-site-verification" content="PVyFa8z-DWpWv1wQPIIsj9kBQAbxQXhvagtURSD7-ZQ" />

         <Script
  id="schema-markup"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Aetibar Information & Technologies",
      url: "https://www.aetibar.in",
      logo: "https://www.aetibar.in/logo.jpeg",
      description:
        "Custom web apps, AI solutions, SEO, branding, and scalable digital growth systems.",
    }),
  }}
/>

         <Script
  id="local-business-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Aetibar Information & Technologies",
      "url": "https://www.aetibar.in",
      "logo": "https://www.aetibar.in/logo.jpeg",
      "image": "https://www.aetibar.in/og-image.jpg",
      "description": "Website Development, SEO, Digital Marketing, AI Solutions and Software Development Services.",
      "telephone": "+91-7878055698",
      "email": "hello.aetibar@gmail.com",

      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mallah Talai",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },

      "areaServed": [
        "Udaipur",
        "Rajasthan",
        "India"
      ],

      "priceRange": "$$"
    }),
  }}
/>
         <Script
  id="service-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Aetibar Information & Technologies",
      "url": "https://www.aetibar.in",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Full Stack Web Development",
            "description": "Custom web applications and website development services."
          },
          {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Android and iOS mobile application development."
          },
          {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "User interface and user experience design services."
          },
          {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Technical SEO, on-page SEO, off-page SEO and local SEO services."
          },
          {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Social media management and marketing services."
          },
          {
            "@type": "Service",
            "name": "AI Automation Solutions",
            "description": "AI integrations, automation workflows and business automation services."
          }
        ]
      }
    }),
  }}
/>
  
    </head>
      <body className={`${plusJakarta.variable} font-sans antialiased`}>

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-EBH9X58H1B"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-EBH9X58H1B');
    `}
  </Script>

  {children}

  {process.env.NODE_ENV === 'production' && <Analytics />}
</body>
    </html>
  )
}
