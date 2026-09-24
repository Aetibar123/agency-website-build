import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import LanguageIcon from "@mui/icons-material/Language";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title: "Web Development Company | Aetibar",
  description:
    "Aetibar is a web development company building fast, secure and scalable websites and web applications tailored to your business goals.",
  keywords: [
    "Web Development Company",
    "Custom Web Development Services",
    "Business Website Development",
    "E-commerce Website Development",
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
        badge="Web Engineering &amp; Development"
        title="Custom Web Development Services for Businesses"
        tagline="Fast, mobile-friendly websites and web applications built to win customer trust and generate real inquiries."
        description="Your website is often the very first place prospective clients, partners, and buyers evaluate your credibility. We build custom business websites, online stores, and customer web portals that load instantly on mobile phones, look polished across every screen, and make it effortless for visitors to reach out on WhatsApp, call your office, or submit an inquiry."
        icon={<LanguageIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Growing Businesses & B2B Companies",
            desc: "Organizations and ventures that need a modern, credible digital presence that clearly presents their services, case studies, certifications, and capabilities to win clients.",
          },
          {
            title: "Retail Stores & E-Commerce Brands",
            desc: "Product businesses that need fast-loading online storefronts with clear catalog browsing, secure checkout, and instant order notifications on WhatsApp and email.",
          },
          {
            title: "Service Providers Needing Portals",
            desc: "Companies wanting to give clients secure online accounts to view quotes, download invoices, track project progress, or submit service requests without manual back-and-forth.",
          },
          {
            title: "Companies with Outdated Websites",
            desc: "Businesses losing leads because their current site is slow on smartphones, built on rigid outdated templates, or constantly breaking after plugin updates.",
          },
        ]}
        problemsAddressed={[
          {
            problem: "Slow loading speeds causing mobile visitors to leave immediately",
            howWeHelp:
              "Most website visitors leave if a page takes more than three seconds to load. We engineer lightweight, high-performance websites that load in under a second on mobile data connections, keeping prospective buyers engaged.",
          },
          {
            problem: "Customer inquiries slipping through the cracks without notice",
            howWeHelp:
              "We configure reliable lead capture systems that instantly forward every form submission to your team's email and WhatsApp, ensuring no potential customer is left waiting for a response.",
          },
          {
            problem: "Generic templates that fail to explain what your business actually does",
            howWeHelp:
              "Off-the-shelf templates force your business into generic layouts. We design custom page structures tailored specifically to your service offerings, customer questions, and conversion points.",
          },
          {
            problem: "Fragile plugins and recurring platform builder lock-in",
            howWeHelp:
              "We write clean, modern code without stacking dozens of bloated third-party plugins or trapping you in expensive proprietary builders. Your website stays fast, secure, and 100% owned by your company.",
          },
        ]}
        deliverables={[
          {
            title: "Custom Business Website Development",
            desc: "Professional corporate and service websites designed to build trust, showcase your offerings, and convert visitors into qualified business inquiries.",
            items: [
              "Custom homepage, service landing pages, and company profile",
              "Direct WhatsApp chat and click-to-call integration",
              "Mobile-first responsive design tested across all modern smartphones",
              "Fast server-side rendering for instant page transitions",
            ],
          },
          {
            title: "E-Commerce Website Development",
            desc: "High-speed online shopping storefronts engineered for smooth catalog navigation, simple product discovery, and friction-free payment processing.",
            items: [
              "Organized product catalogs with intuitive category filters and search",
              "Integration with secure payment gateways (Razorpay, Stripe, UPI)",
              "Instant automated order confirmations via email and WhatsApp",
              "Customer account management and order history tracking",
            ],
          },
          {
            title: "Custom Web Portals & Dashboards",
            desc: "Secure, password-protected web portals that streamline client interactions, document sharing, and internal business operations.",
            items: [
              "Secure client login and role-based permissions",
              "Interactive quote request forms and cost calculators",
              "Document sharing, invoice viewing, and service status tracking",
              "Direct synchronization with your existing office databases or CRM",
            ],
          },
          {
            title: "Website Redesign & Modernization",
            desc: "Upgrading legacy or poorly performing websites to contemporary standards while safeguarding your existing Google rankings and web traffic.",
            items: [
              "Comprehensive 1:1 redirect mapping to protect existing SEO rankings",
              "Modern typography, high-contrast layouts, and clean visual hierarchy",
              "Core Web Vitals speed optimization to pass Google's performance tests",
              "Simplified content management so your team can easily update information",
            ],
          },
          {
            title: "Web Performance & Technical SEO Readiness",
            desc: "Building a rock-solid technical foundation so search engines can easily crawl, index, and rank your website pages.",
            items: [
              "Semantic HTML structure and clean heading hierarchies (H1-H4)",
              "Automated XML sitemaps and search engine robots configuration",
              "Optimized modern image formatting (WebP/AVIF) for lightweight delivery",
              "Structured JSON-LD schema markup for rich search engine snippets",
            ],
          },
        ]}
        benefits={[
          {
            title: "Turn Casual Visitors into Inquiries",
            desc: "With clear service explanations, prominent WhatsApp buttons, and fast contact forms, prospective clients can easily reach you the moment they decide to take action.",
          },
          {
            title: "Lightning-Fast Mobile Experience",
            desc: "Over 70% of web traffic happens on smartphones. Our websites load instantly even on standard 4G mobile connections, cutting bounce rates and keeping visitors reading.",
          },
          {
            title: "Built-In Google Search Readiness",
            desc: "From semantic code structure to fast server response times, your website is engineered to meet Google's technical requirements from day one, helping your business get discovered organically.",
          },
          {
            title: "100% Code & Asset Ownership",
            desc: "You own all code, images, and content from day one. You are never locked into proprietary hosting, and you can host your site wherever you choose with total independence.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Discovery & Requirements",
            desc: "We discuss your business model, target clientele, core services, and lead generation goals to plan the exact structure your website needs.",
          },
          {
            num: "02",
            title: "Structure & Content Architecture",
            desc: "We organize the sitemap, design clear page wireframes, plan user journeys, and guide you on what content and images are needed.",
          },
          {
            num: "03",
            title: "Design & Custom Development",
            desc: "We build responsive, fast-loading pages with clean code, setting up contact forms, WhatsApp links, and sharing staging links for your review.",
          },
          {
            num: "04",
            title: "Testing & Mobile Optimization",
            desc: "We rigorously test your site across iPhones, Android devices, tablets, and desktop browsers, verifying loading speed, form delivery, and SEO tags.",
          },
          {
            num: "05",
            title: "Launch & Handover Support",
            desc: "We deploy your website to production hosting, connect your custom domain, set up SSL security, and provide complete documentation and handover.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question: "Do you use ready-made WordPress templates or build custom websites?",
            answer:
              "We build custom websites using modern web frameworks like Next.js and React. We avoid bloated off-the-shelf WordPress themes that come loaded with hundreds of unnecessary files and fragile plugins. This ensures your website loads significantly faster, remains secure against automated attacks, and provides a unique design tailored specifically to your company.",
          },
          {
            question: "Will my website work properly on smartphones and tablets?",
            answer:
              "Yes. Every single page is designed and tested mobile-first. We verify typography, button sizing, touch menus, and image scaling across various Android and Apple iPhone screens to guarantee that phone visitors have a frictionless experience.",
          },
          {
            question: "How do customer inquiries reach my team?",
            answer:
              "We connect your website forms directly to your company email inboxes and can also configure instant WhatsApp lead routing. When a prospective client fills out an inquiry form or clicks a chat button, your sales or support team receives notification immediately.",
          },
          {
            question: "Who owns the website and domain after the project is finished?",
            answer:
              "You own 100% of the website, source code, design files, and domain. We never hold your digital assets hostage or charge proprietary licensing fees. Once the project is complete, all credentials and code repositories are handed over to you.",
          },
          {
            question: "Can we update text, images, and services on the website later?",
            answer:
              "Yes. We build clean, modular architectures that make content updates straightforward. For clients who require regular content updates, we can integrate user-friendly content dashboards or provide ongoing maintenance support so you never have to worry about technical upkeep.",
          },
          {
            question: "How long does it take to develop a business website?",
            answer:
              "A standard business website with 5 to 10 pages typically takes 3 to 5 weeks from initial planning to live launch. More comprehensive e-commerce platforms or custom web portals generally take 6 to 10 weeks depending on custom feature requirements.",
          },
          {
            question: "Can you help redesign our old website without losing our Google rankings?",
            answer:
              "Yes. When redesigning an existing website, we perform careful URL audits and implement proper 301 redirects for every old page URL. This preserves your accumulated Google search authority and backlinks while giving your visitors a vastly faster, modernized website.",
          },
        ]}
        ctaTitle="Ready to Build a Website That Drives Inquiries?"
        ctaDescription="Tell us about your business goals and service offerings. We'll give you honest, practical recommendations and a clear roadmap for your web project."
      />
    </main>
  );
}
