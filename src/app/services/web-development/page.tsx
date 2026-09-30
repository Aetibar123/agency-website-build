import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import LanguageIcon from "@mui/icons-material/Language";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title: "Custom Web Development Services for Businesses | Aetibar",
  description:
    "Custom web development services for modern businesses. We build fast, responsive websites, e-commerce stores, and web portals tailored to your company.",
  keywords: [
    "Web Development Company",
    "Custom Web Development Services",
    "Business Website Development",
    "E-commerce Website Development",
    "Website Development Services",
    "Custom Web Portal Development",
    "Business Website Redesign",
    "Mobile-Friendly Web Design",
    "Fast Loading Business Website",
    "Web Development Company in India",
    "Aetibar Web Development",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  alternates: {
    canonical: "https://www.aetibar.in/services/web-development",
  },
  openGraph: {
    title: "Custom Web Development Services for Businesses | Aetibar",
    description:
      "Custom web development company building fast, mobile-friendly business websites, e-commerce stores, and web portals designed for real commercial results.",
    url: "https://www.aetibar.in/services/web-development",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Custom Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development Services for Businesses | Aetibar",
    description:
      "Custom web development services for businesses. Fast, mobile-friendly websites, e-commerce stores, and web portals built to generate leads.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Web Development Services for Businesses",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Custom business website development, e-commerce platforms, and web portals built for speed, mobile responsiveness, and client lead generation.",
  url: "https://www.aetibar.in/services/web-development",
};

export default function WebDevelopmentServicePage() {
  const relevantProjects = workProjects.filter((p) =>
    ["nexus-ecommerce", "enterprise-seo-migration", "rebranding-fintech-identity"].includes(p.slug)
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        badge="Custom Web Development"
        title="Modern Websites for"
        titleHighlight="Your Business."
        tagline="Custom websites, online stores, and web apps built cleanly without heavy templates or complicated tools."
        description="We build websites that give your visitors the right information quickly and make it simple to reach out. Every site is built from scratch for your business, works smoothly on all mobile devices, and gives you complete ownership of your domain, files, and logins."
        icon={<LanguageIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Local Business Owners & Shops",
            desc: "You want nearby customers in your city to find you, see your work, and message you directly on WhatsApp or call your office.",
          },
          {
            title: "Companies with an Old, Slow Site",
            desc: "Your current website looks outdated on smartphones, takes 5+ seconds to open, or constantly breaks whenever plugins update.",
          },
          {
            title: "Brands Selling Products Online",
            desc: "You want a clean, fast e-commerce store where customers can easily browse products and pay securely with UPI, cards, or net banking.",
          },
          {
            title: "Service Providers Needing Inquiries",
            desc: "You want a trustworthy online presence that delivers qualified quotation requests and client questions straight to your phone and email.",
          },
        ]}
        problemsAddressed={[
          {
            problem: "Visitors leave your website because it takes too long to load on phones",
            howWeHelp:
              "Most people tap the back button if a page takes more than 3 seconds to open. We build lightweight, ultra-fast websites that open in under 1 second on mobile internet, so you never lose a customer to a blank loading screen.",
          },
          {
            problem: "Customer inquiries get lost in junk folders or forgotten",
            howWeHelp:
              "We link your contact forms directly to your WhatsApp and phone. Whenever a prospective client asks for a quote, your team gets an instant alert so you can reply before competitors do.",
          },
          {
            problem: "Generic templates that look confusing and cheap",
            howWeHelp:
              "Ready-made templates look cookie-cutter and confuse visitors. We build custom designs tailored to your business, with clear buttons, easy menus, and genuine trust factors that win clients.",
          },
          {
            problem: "Trapped in monthly website builder fees and fragile plugins",
            howWeHelp:
              "You own 100% of your website code, domain, and digital assets forever. No recurring platform builder fees, and no bloated WordPress plugins that break every few months.",
          },
        ]}
        deliverables={[
          {
            title: "Custom Business Website Development",
            desc: "A clean, modern website designed to make your company look professional, earn customer trust, and generate calls.",
            items: [
              "Custom homepage, dedicated service pages, and company about page",
              "Click-to-call button and direct WhatsApp chat integration",
              "Looks great and works smoothly on iPhones and Android phones",
              "Fast page loading speed with zero clunky lag",
            ],
          },
          {
            title: "Online Stores & E-Commerce Websites",
            desc: "A fast online shop where customers can easily browse your catalog, add items to cart, and pay in seconds.",
            items: [
              "Simple product catalogs with clean filters and search",
              "Safe, instant payments via UPI, Google Pay, cards, and net banking",
              "Instant automated order alerts sent to your WhatsApp and email",
              "Customer account login and simple order tracking",
            ],
          },
          {
            title: "Client Portals & Booking Dashboards",
            desc: "Secure private areas where your customers can log in to view quotes, download invoices, or submit service requests.",
            items: [
              "Secure customer login with private password access",
              "Online quote calculator and custom inquiry forms",
              "Download invoices, receipts, and project updates",
              "Syncs automatically with your office spreadsheet or CRM",
            ],
          },
          {
            title: "Website Redesign & Upgrades",
            desc: "Give your outdated website a fresh modern makeover while protecting your existing Google rankings and traffic.",
            items: [
              "Keep your existing Google ranking with proper page redirects",
              "Modern, high-contrast layouts that look sharp on any screen",
              "Google speed test pass guarantee (Core Web Vitals)",
              "Easy for your team to update pictures, text, and pricing later",
            ],
          },
          {
            title: "Built-In Google Search Readiness",
            desc: "We build your site the right way so Google can easily read your pages and show your business to local searchers.",
            items: [
              "Clean code structure that Google search bots love to read",
              "Proper titles, meta descriptions, and Google sitemap setup",
              "Fast loading images that don't eat up your visitors' mobile data",
              "Google Business Profile connection for local maps visibility",
            ],
          },
        ]}
        benefits={[
          {
            title: "More Phone Calls & WhatsApp Inquiries",
            desc: "Visitors don't have to hunt for your contact details. A simple tap connects them straight to your phone so you can close deals quickly.",
          },
          {
            title: "Opens in a Flash on Any Smartphone",
            desc: "Over 75% of your buyers use phones. Your website opens instantly even on normal 4G mobile connections, keeping visitors reading.",
          },
          {
            title: "You Own Everything 100% Forever",
            desc: "The domain, the source code, the design files—they are 100% yours. You are never trapped or locked into expensive recurring fees.",
          },
          {
            title: "Google-Friendly from Day One",
            desc: "Built using clean modern code that search engines love, giving your business a strong foundation to rank on Google without gimmicks.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Friendly Chat & Planning",
            desc: "We sit down for a quick call to understand what your business sells, who your buyers are, and what pages you need.",
          },
          {
            num: "02",
            title: "Blueprint & Layout",
            desc: "We sketch out the structure and design so you can see exactly how every page will look and feel before we write code.",
          },
          {
            num: "03",
            title: "Building with Live Preview",
            desc: "We build your website with clean code and give you a private preview link to test on your phone as we build.",
          },
          {
            num: "04",
            title: "Testing on Real Phones",
            desc: "We test every button, contact form, and speed score on iPhones, Android phones, and tablets to make sure everything works perfectly.",
          },
          {
            num: "05",
            title: "Launch & Hand Over the Keys",
            desc: "We connect your domain, turn on SSL security, take your website live, and hand over all passwords and source code to you.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question: "Do I need to be a tech expert to work with you?",
            answer:
              "Not at all. We handle all the hosting, technical code, security certificates, and mobile testing. We explain everything in simple, plain English and keep you updated every step of the way.",
          },
          {
            question: "Will my website work properly on smartphones and tablets?",
            answer:
              "Yes, 100%. We design mobile-first because most of your visitors are on their phones. We test button sizes, touch menus, and reading comfort across various iPhones and Android screens.",
          },
          {
            question: "How do customer inquiries reach me?",
            answer:
              "Whenever someone fills out a form or clicks your WhatsApp button, you receive an instant alert on your phone and email. You won't miss a single potential lead.",
          },
          {
            question: "Do I own my website and domain name?",
            answer:
              "Yes. You own 100% of your website code, design, and domain from day one. We never hold your assets hostage or charge proprietary monthly licensing fees.",
          },
          {
            question: "Can I change text, images, and prices later?",
            answer:
              "Yes! We build clean, modular websites so updating photos, phone numbers, or services is straightforward. We can also provide simple management tools or handle ongoing updates for you.",
          },
          {
            question: "How long does it take to develop a business website?",
            answer:
              "A standard business website with 5 to 10 pages usually takes 2 to 4 weeks from our first chat to live launch. E-commerce shops with custom payment gateways usually take 4 to 6 weeks.",
          },
          {
            question: "Can you help redesign our old website without losing our Google rank?",
            answer:
              "Yes. When updating an existing website, we carefully set up 301 redirects for every old page. This preserves your hard-earned Google search authority while giving your customers a fresh, lightning-fast new design.",
          },
        ]}
        ctaTitle="Ready to Build a Better Website for"
        ctaTitleHighlight="Your Business?"
        ctaDescription="Tell us what your company needs. We'll share honest guidance, clear timelines, and a simple fixed quote without any pushy sales."
      />
    </main>
  );
}
