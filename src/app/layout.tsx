import { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import ThemeRegistry from "../components/providers/ThemeRegistry";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.aetibar.in"),

  title: {
    default: "Aetibar | Websites, Software & Digital Solutions for Businesses",
    template: "%s | Aetibar",
  },

  description:
    "Aetibar helps businesses build practical websites, custom software, mobile apps, digital marketing systems, and AI-powered workflows around the way they work.",

  keywords: [
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "AI Automation",
    "Web Development Company in Udaipur",
    "Mobile App Development Company in Udaipur",
    "Digital Marketing Company in Udaipur",
    "AI Automation Company in Udaipur",
    "Custom Software Development",
    "Business Automation",
    "Custom Business Websites",
    "Business Software Solutions",
  ],

  authors: [
    {
      name: "Aetibar",
      url: "https://www.aetibar.in",
    },
  ],

  creator: "Aetibar",
  publisher: "Aetibar",

  category: "technology",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },

  openGraph: {
    title: "Aetibar | Websites, Software & Digital Solutions for Businesses",

    description:
      "We help businesses build practical websites, software, mobile apps, digital marketing systems, and AI-powered workflows around how they actually operate.",

    url: "https://www.aetibar.in",

    siteName: "Aetibar",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aetibar",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Aetibar | Websites, Software & Digital Solutions for Businesses",

    description:
      "Practical websites, software, mobile apps, digital marketing, and AI-powered workflows for businesses.",

    images: ["/logo.jpeg"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="google-site-verification" content="PVyFa8z-DWpWv1wQPIIsj9kBQAbxQXhvagtURSD7-ZQ" />

        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aetibar",
              url: "https://www.aetibar.in",
              logo: "https://www.aetibar.in/logo.jpeg",
              image: "https://www.aetibar.in/logo.jpeg",
              description:
                "Building practical digital systems around how businesses actually work. We diagnose friction, connect fragmented workflows, and engineer purpose-built websites, internal tools, and automations.",
              email: "hello.aetibar@gmail.com",
              telephone: "+91-XXXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Udaipur",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.linkedin.com/company/aetibar",
                "https://www.instagram.com/aetibar_information/",
                "https://x.com/Aetibar_"
              ]
            }),
          }}
        />

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EBH9X58H1B"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EBH9X58H1B');
          `}
        </Script>
      </head>
      <body className={poppins.className} style={{ margin: 0 }}>
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
