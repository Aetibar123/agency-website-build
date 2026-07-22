import { Metadata } from "next";
import Script from "next/script";
import ThemeRegistry from "../components/providers/ThemeRegistry";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aetibar.in"),

  
  title: {
    default: "Aetibar | Web Development & Digital Marketing Company",
    template: "%s | Aetibar",
  },

  description:
    "Aetibar provides Web Development, Mobile App Development, AI Automations, SEO & Marketing, and Brand Design services.",

  keywords: [
    "Web Development Company",
    "Website Development Company",
    "Mobile App Development",
    "AI Automation",
    "SEO Company",
    "Digital Marketing Company",
    "Brand Design",
    "Software Development Company",
    "IT Company in Udaipur",
    "Aetibar",
  ],

  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },

  openGraph: {
    title: "Aetibar",
    description:
      "Web Development, Mobile App Development, AI Automations, SEO & Digital Marketing.",
    url: "https://www.aetibar.in",
    siteName: "Aetibar",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aetibar Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        <meta name="google-site-verification" content="PVyFa8z-DWpWv1wQPIIsj9kBQAbxQXhvagtURSD7-ZQ" />

        <Script
  id="organization-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Aetibar",
      url: "https://www.aetibar.in",
      logo: "https://www.aetibar.in/logo.jpeg",
      image: "https://www.aetibar.in/logo.jpeg",
      description:
        "Web Development, Mobile App Development, AI Automation, SEO, Digital Marketing and Branding Company.",
      email: "info@aetibar.in",
      telephone: "+91-XXXXXXXXXX",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Udaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/company/your-linkedin",
        "https://www.instagram.com/your-instagram",
        "https://www.facebook.com/your-facebook"
      ]
    }),
  }}
/>
        
      </head>
      <body style={{ margin: 0, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
