import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import LanguageIcon from "@mui/icons-material/Language";
import { workProjects } from "../../../data/workData";


export const metadata: Metadata = {
  title:
    "Web Development Company in Udaipur | Aetibar",

  description:
    "Aetibar is Best web development company in Udaipur building custom business websites, e-commerce stores, and web applications to support business growth.",

  keywords: [
    "Web Development Company in Udaipur",
    "Website Development Company in Udaipur",
    "Web Design Company in Udaipur",
    "Custom Web Development Udaipur",
    "E-commerce Website Development Udaipur",
    "Web Application Development Udaipur",
    "Website Redesign Udaipur",
    "Web Development Services",
  ],

  authors: [
    {
      name: "Aetibar",
      url: "https://www.aetibar.in",
    },
  ],

  creator: "Aetibar",
  publisher: "Aetibar",

  alternates: {
    canonical:
      "https://www.aetibar.in/services/web-development-company-in-udaipur",
  },

  openGraph: {
    title:
      "Web Development Company in Udaipur | Custom Websites | Aetibar",

    description:
      "Custom web development for business websites, e-commerce stores, client portals, web applications, and website redesigns.",

    url: "https://www.aetibar.in/services/web-development-company-in-udaipur",

    siteName: "Aetibar",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Web Development Company in Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Web Development Company in Udaipur | Custom Websites | Aetibar",

    description:
      "Custom websites, e-commerce stores, web applications, and business portals built around your requirements.",

    creator: "@Aetibar_",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};




const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Company in Udaipur",
  serviceType: "Web Development Services",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar provides web development services in Udaipur, including custom business websites, e-commerce websites, client portals, booking dashboards, website redesigns, and SEO-ready website development.",
  url: "https://www.aetibar.in/services/web-development-company-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
};



export default function WebDevelopmentServicePage() {
  const relevantProjects = workProjects.filter((p) =>
    [
      "nexus-ecommerce",
      "enterprise-seo-migration",
      "rebranding-fintech-identity",
    ].includes(p.slug),
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        badge="Custom Web Development"
        title="Web Development Company in Udaipur — "
        titleHighlight="Websites Built Around Your Business"
        tagline="Custom websites, online stores, and web applications designed to present your business clearly and make it easier for customers to take action."
        description="As a web development company in Udaipur, we build websites and web applications around your business requirements—from company websites and online stores to custom business tools. We focus on clear information, practical user experiences, and a development approach that gives you control over your website, domain, and relevant project access."
        icon={<LanguageIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        

whoIsItFor={[
  {
    title: "Local Businesses & Shops",
    desc: "You want customers in your city or service area to find your business, understand what you offer, view your work, and easily call or message you.",
  },
  {
    title: "Businesses with an Outdated Website",
    desc: "Your current website looks dated, is difficult to use on mobile devices, loads slowly, or has become difficult to maintain as your business has changed.",
  },
  {
    title: "Brands Selling Products Online",
    desc: "You want an e-commerce website where customers can browse products, place orders, and complete payments through supported methods such as UPI, cards, or other online payment options.",
  },
  {
    title: "Service Providers & Professional Firms",
    desc: "You want a professional online presence that clearly explains your services and makes it easier for potential clients to request a quote, submit an enquiry, or get in touch.",
  },
]}


problemsAddressed={[
  {
    problem: "Your website feels slow or difficult to use on mobile devices",
    howWeHelp:
      "We focus on efficient page structure, optimized assets, sensible use of scripts, and mobile-friendly layouts to create a faster and easier browsing experience across supported devices and connections.",
  },
  {
    problem: "Customer enquiries are difficult to track or reach the right person",
    howWeHelp:
      "We connect website forms and relevant contact actions with the tools your business uses, such as email, WhatsApp, or CRM systems, so enquiries can be routed and managed more reliably.",
  },
  {
    problem: "Generic templates don't reflect your business or make important information easy to find",
    howWeHelp:
      "We design the website around your business, audience, and goals, with clear navigation, focused calls-to-action, relevant content, and a visual style that fits your brand.",
  },
  {
    problem: "Your current website is difficult to maintain or depends on too many third-party tools",
    howWeHelp:
      "We choose the technology and integrations based on your actual requirements, helping avoid unnecessary dependencies and making the website easier to manage and update over time.",
  },
]}



  
deliverables={[
  {
    title: "Custom Business Website Development",
    desc: "A business-focused website designed to present your company clearly, explain your services, and make it easy for visitors to contact you.",
    items: [
      "Custom homepage, service pages, about page, and other required business pages",
      "Click-to-call, WhatsApp, enquiry forms, and other relevant contact options",
      "Mobile-friendly layouts tested across relevant iOS and Android devices",
      "Performance-focused page structure, optimized assets, and sensible use of scripts",
    ],
  },

  {
    title: "Online Stores & E-Commerce Websites",
    desc: "E-commerce websites that help customers browse products, manage their cart, place orders, and complete payments through supported payment methods.",
    items: [
      "Product catalogs with categories, filters, search, and relevant product information",
      "Payment integration for supported methods such as UPI, cards, and net banking",
      "Order notifications and status updates through supported email, WhatsApp, or other integrations",
      "Customer accounts, order history, and order tracking where required",
    ],
  },

  {
    title: "Client Portals & Booking Dashboards",
    desc: "Private customer areas and business dashboards that make it easier to manage bookings, documents, requests, and other customer information.",
    items: [
      "Authentication and role-based access for different users",
      "Online enquiry forms, booking workflows, and custom calculators where required",
      "Access to invoices, receipts, documents, and relevant project information",
      "Integration with supported spreadsheets, CRMs, or business systems",
    ],
  },

  {
    title: "Website Redesign & Upgrades",
    desc: "Modernize an existing website while carefully handling its structure, content, URLs, and important SEO considerations during the transition.",
    items: [
      "Relevant 301 redirects for changed or removed page URLs",
      "Updated layouts and navigation designed for current desktop and mobile users",
      "Performance and Core Web Vitals review with improvements where required",
      "Content management options that allow your team to update supported website content",
    ],
  },

  {
    title: "SEO-Ready Website Foundations",
    desc: "Technical and on-page foundations that make your website easier for search engines to crawl, understand, and index.",
    items: [
      "Logical page structure, headings, metadata, and internal linking",
      "XML sitemap and robots.txt configuration where appropriate",
      "Optimized images and other assets to support page performance",
      "Structured data and Google Business Profile integration where relevant to the business",
    ],
  },
]}

     
benefits={[
  {
    title: "Make It Easier for Customers to Contact You",
    desc: "Clear calls-to-action, click-to-call buttons, WhatsApp links, and enquiry forms give visitors straightforward ways to get in touch with your business.",
  },
  {
    title: "Create a Better Mobile Experience",
    desc: "A mobile-friendly website with optimized assets, clear navigation, and focused page layouts makes it easier for customers to browse your business from their phones.",
  },
  {
    title: "Keep Greater Control of Your Website",
    desc: "We can structure the project around your own domain, hosting, accounts, and relevant website assets, helping your business maintain control of its digital presence.",
  },
  {
    title: "Build a Strong Foundation for Search",
    desc: "Clear page structure, relevant content, metadata, internal linking, technical SEO, and performance considerations give your website a better foundation for organic search visibility.",
  },
]}

      
processSteps={[
  {
    num: "01",
    title: "Business & Requirements Discussion",
    desc: "We understand your business, audience, goals, existing website if any, and the pages, features, and integrations your new website needs.",
  },
  {
    num: "02",
    title: "Structure & Design Planning",
    desc: "We plan the page structure, navigation, content hierarchy, and visual direction so you can review the proposed website experience before development.",
  },
  {
    num: "03",
    title: "Website Development",
    desc: "We build the website and required functionality, then provide a private preview where you can review the pages and test the experience during development.",
  },
  {
    num: "04",
    title: "Testing & Optimization",
    desc: "We test important pages, forms, links, navigation, integrations, and responsive behavior across relevant devices and screen sizes, while reviewing performance and technical issues.",
  },
  {
    num: "05",
    title: "Launch & Handover",
    desc: "We configure the required domain, hosting, SSL, and deployment settings, take the website live, and provide the agreed project access, credentials, and relevant files.",
  },
]}


        relevantProjects={relevantProjects}
       
faqs={[
  {
    question: "Do I need to be a tech expert to work with you?",
    answer:
      "No. We handle the technical development, deployment, SSL configuration, responsive testing, and other agreed technical requirements. We explain the important decisions in straightforward language and keep you involved at the stages where your feedback is needed.",
  },
  {
    question: "Will my website work properly on smartphones and tablets?",
    answer:
      "We build with responsive layouts and test important pages across relevant screen sizes and devices. We check navigation, buttons, forms, content readability, and other interactions to identify and fix device-specific issues before launch.",
  },
  {
    question: "How do customer enquiries reach me?",
    answer:
      "Website forms and contact actions can be connected to your preferred channels, such as email, WhatsApp, phone, or a CRM where supported. We configure the relevant workflow so enquiries can be routed to the appropriate person or system.",
  },
  {
    question: "Do I own my website and domain name?",
    answer:
      "We recommend keeping your domain and important third-party accounts under your business's ownership. Website code, design assets, hosting, and other project deliverables are handled according to the agreed scope and terms, with the relevant access provided to you.",
  },
  {
    question: "Can I change text, images, and prices later?",
    answer:
      "Yes, depending on how the website is built. We can provide a content management system or suitable admin tools for websites that require regular updates. For simpler sites, we can also handle content changes or show your team how to update supported content.",
  },
  {
    question: "How long does it take to develop a business website?",
    answer:
      "The timeline depends on the number of pages, content availability, design requirements, integrations, and custom functionality. A straightforward business website can be completed relatively quickly, while e-commerce websites and custom web applications generally require more time. We provide a project-specific timeline after understanding the requirements.",
  },
  {
    question: "Can you redesign our old website without losing its existing search visibility?",
    answer:
      "We can plan an SEO-conscious website migration by identifying important existing URLs, mapping changed pages, implementing relevant 301 redirects, updating internal links, and checking indexing after launch. These steps can help reduce unnecessary SEO disruption, although no redesign can guarantee that existing rankings will remain unchanged.",
  },
]}

       
ctaTitle="Ready to Build a Better Website for"
ctaTitleHighlight="Your Business?"
ctaDescription="Tell us what your business needs. We'll understand your requirements, discuss the right approach, and share a clear proposal with realistic timelines and pricing."

      />
    </main>
  );
}
