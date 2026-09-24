import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import SearchIcon from "@mui/icons-material/Search";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title: "SEO Services for Businesses | Aetibar",
  description:
    "Grow your organic visibility with Aetibar's SEO services, including technical SEO, keyword research, on-page optimization, content and local SEO.",
  keywords: [
    "SEO Services",
    "Search Engine Optimization Services",
    "Local SEO Services",
    "Technical SEO Company",
    "On-Page SEO Services",
    "Google Search Ranking Improvement",
    "SEO Company in India",
    "Organic Search Traffic",
    "Aetibar SEO Services",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  alternates: {
    canonical: "https://www.aetibar.in/services/seo",
  },
  openGraph: {
    title: "Search Engine Optimization (SEO) Services for Businesses | Aetibar",
    description:
      "Technical SEO audits, on-page optimization, and local search improvements to help your business gain sustainable visibility on Google.",
    url: "https://www.aetibar.in/services/seo",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar SEO Services for Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Engine Optimization (SEO) Services for Businesses | Aetibar",
    description:
      "Technical SEO, on-page optimization, and structured search improvements to grow your organic visibility on Google.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Search Engine Optimization (SEO) Services for Businesses",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Technical SEO audits, on-page content optimization, local search enhancement, and search performance reporting for growing businesses.",
  url: "https://www.aetibar.in/services/seo",
};

export default function SeoServicePage() {
  const relevantProjects = workProjects.filter((p) =>
    ["enterprise-seo-migration", "nexus-ecommerce"].includes(p.slug)
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        badge="Search Engine Optimization"
        title="SEO Services to Grow Your Organic Website Visibility"
        tagline="Honest, data-driven search engine optimization that connects your business with customers actively looking for your services on Google."
        description="Search engine optimization is not about secret tricks, keyword stuffing, or impossible overnight guarantees. It is about ensuring Google and other search engines can crawl, index, and understand your website—and that your pages provide clear, trustworthy answers when prospective clients search for the services you offer. We provide transparent technical SEO, on-page optimization, and local search improvements."
        icon={<SearchIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Service Businesses & B2B Companies",
            desc: "Companies wanting a steady, predictable flow of qualified customer inquiries directly from Google Search without relying solely on recurring monthly ad spend.",
          },
          {
            title: "Local & Regional Service Providers",
            desc: "Businesses serving specific cities or geographical territories who need prominent Google Maps visibility and Local Business Profile optimization to capture nearby clients.",
          },
          {
            title: "Websites Launching or Undergoing Redesign",
            desc: "Companies launching a new site or redesigning an existing one who must protect established search equity, preserve backlink authority, and ensure error-free indexing.",
          },
          {
            title: "Businesses Frustrated with Vague SEO Retainers",
            desc: "Business owners who previously paid for opaque agency retainers that delivered confusing vanity metrics, zero transparency, and no tangible commercial search improvements.",
          },
        ]}
        problemsAddressed={[
          {
            problem: "Your website is invisible on Google when potential clients search for your services",
            howWeHelp:
              "We audit technical indexing issues, inspect Google Search Console for crawl errors, configure proper XML sitemaps, and ensure search engines can discover and index your key service pages.",
          },
          {
            problem: "Losing hard-earned search equity after redesigns or URL changes",
            howWeHelp:
              "When redesigning or restructuring websites, broken URLs cause sudden ranking drops. We map comprehensive 301 redirects and preserve canonical structures so your established authority is preserved.",
          },
          {
            problem: "Slow page load speeds and mobile issues hurting Google rankings",
            howWeHelp:
              "Google prioritizes fast, responsive websites. We optimize Core Web Vitals, server response times, image formatting, and code execution to ensure your site passes Google's mobile performance benchmarks.",
          },
          {
            problem: "Vague search reports filled with vanity metrics instead of real inquiries",
            howWeHelp:
              "We provide transparent monthly reports sourced directly from official Google Search Console data, showing you the exact search queries bringing visitors to your site and how your rankings progress.",
          },
        ]}
        deliverables={[
          {
            title: "Comprehensive Technical SEO Audits",
            desc: "Thorough inspection of your website's underlying technical health, crawlability, mobile performance, and indexing status.",
            items: [
              "XML sitemap and robots.txt file inspection and optimization",
              "Fixing crawl errors, broken links, and redirect loops",
              "Mobile responsiveness and Core Web Vitals speed audit",
              "SSL security, canonical tags, and duplicate content resolution",
            ],
          },
          {
            title: "On-Page SEO & Content Intent Optimization",
            desc: "Aligning your page titles, headings, and service copy with the actual questions and keywords your potential clients search for.",
            items: [
              "Unique, compelling meta titles and descriptions for all core pages",
              "Logical heading hierarchy (H1, H2, H3) structured around user intent",
              "Descriptive image alt text and asset name optimization",
              "Strategic internal linking architecture to distribute authority",
            ],
          },
          {
            title: "Commercial Keyword & Competitor Research",
            desc: "Identifying high-value search queries used by prospective buyers actively looking to hire or purchase your services.",
            items: [
              "High-relevance commercial intent keyword identification",
              "Search query difficulty and volume assessment",
              "Competitor organic search footprint analysis",
              "Recommendations for service page content expansion",
            ],
          },
          {
            title: "Local SEO & Google Business Profile Optimization",
            desc: "Helping local customers find your business when searching for services in your city or regional service territory.",
            items: [
              "Google Business Profile setup, category selection, and verification",
              "Consistent NAP (Business Name, Address, Phone) citations",
              "Service area specification and local landing page structure",
              "Practical guidance on collecting authentic customer reviews",
            ],
          },
          {
            title: "Structured Schema.org Data Implementation",
            desc: "Implementing search engine schema code so Google displays your company information, FAQs, and services accurately in rich search results.",
            items: [
              "Organization, LocalBusiness, and Service JSON-LD schema",
              "FAQPage structured data markup for expanded search snippets",
              "BreadcrumbList schema for intuitive navigation trails",
              "Validation via Google's official Rich Results Test",
            ],
          },
          {
            title: "Transparent Performance Reporting & Tracking",
            desc: "Clear, jargon-free monthly reporting that shows exactly how your search visibility, impressions, and organic clicks are growing over time.",
            items: [
              "Google Search Console data analysis (impressions, clicks, rankings)",
              "Tracking top commercial search queries bringing qualified visitors",
              "Identification of new keyword opportunities and content gaps",
              "Actionable, prioritized recommendations for the following month",
            ],
          },
        ]}
        benefits={[
          {
            title: "Sustainable Inquiries Without Constant Ad Spend",
            desc: "Unlike paid advertising that stops delivering visitors the moment your budget runs out, strong organic search visibility continues generating qualified leads month after month.",
          },
          {
            title: "Reach Customers at the Exact Moment of Intent",
            desc: "People searching on Google have active commercial intent—they are looking for a solution right now. Organic ranking puts your business in front of buyers at decision time.",
          },
          {
            title: "Fast, Frictionless Mobile Experience",
            desc: "Because technical SEO focuses heavily on Core Web Vitals and clean responsive layouts, your human visitors enjoy a faster, more trustworthy, and high-converting browsing experience.",
          },
          {
            title: "Zero Penalty Risk with White-Hat Methods",
            desc: "We follow Google's official Search Essentials guidelines strictly. We never employ deceptive tactics or spam link schemes that put your website at risk of search penalties.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Technical Audit & Baseline Benchmarking",
            desc: "We perform an in-depth audit of your current website, check indexing status on Google Search Console, and benchmark current rankings and search visibility.",
          },
          {
            num: "02",
            title: "Search Intent & Keyword Strategy",
            desc: "We identify the exact search queries prospective clients use when looking for your services, mapping high-value keywords to specific pages on your site.",
          },
          {
            num: "03",
            title: "Technical Fixes & On-Page Optimization",
            desc: "We resolve crawl errors, speed up page load times, update meta titles and descriptions, structure headings, and implement Schema.org markup.",
          },
          {
            num: "04",
            title: "Google Indexing & Verification",
            desc: "We submit updated XML sitemaps to Google Search Console, request re-indexing for updated pages, and verify clean mobile rendering.",
          },
          {
            num: "05",
            title: "Monthly Monitoring & Continuous Refinement",
            desc: "We track search impressions, organic clicks, and keyword rankings every month, refining page copy and expanding content based on real user search trends.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question: "Can you guarantee a number-one ranking on Google?",
            answer:
              "No, and you should be extremely cautious of any agency that promises guaranteed top rankings. Google's search algorithms evaluate hundreds of factors, and no external agency controls Google. What we do guarantee is proven, white-hat best practices: resolving technical crawl errors, optimizing page load speed, structuring headings, implementing schema, and crafting relevant content that gives your business the highest possible opportunity to rank well.",
          },
          {
            question: "How long does it take to see tangible results from SEO?",
            answer:
              "SEO is a medium- to long-term digital strategy. Technical fixes—such as resolving crawl errors, fixing broken redirects, and adding structured schema—are typically recognized by Google within 2 to 4 weeks. Meaningful improvements in keyword rankings, search impressions, and organic leads usually take 3 to 6 months of consistent optimization.",
          },
          {
            question: "What is the difference between technical SEO and on-page SEO?",
            answer:
              "Technical SEO focuses on the behind-the-scenes infrastructure of your website—such as server speed, mobile responsiveness, XML sitemaps, and SSL security—ensuring search engine bots can crawl and index your site without errors. On-page SEO focuses on the visible content—such as meta titles, headings, commercial keywords, and answering the questions prospective customers search for.",
          },
          {
            question: "How is SEO different from Paid Advertising (Google Ads)?",
            answer:
              "With Google Ads, you pay every time someone clicks on your ad. Traffic starts immediately, but stops the moment your budget runs out. With SEO, you earn organic visibility naturally. While it takes time to build ranking authority, the visitors and customer inquiries you receive do not incur per-click costs, providing long-term compound ROI.",
          },
          {
            question: "Do you follow Google's official search quality guidelines?",
            answer:
              "Yes, strictly. We adhere to Google's Search Essentials guidelines. We never use black-hat shortcuts, automated link spam, or hidden keyword tricks that risk algorithmic penalties or de-indexing by Google.",
          },
          {
            question: "Can Local SEO help my business get found on Google Maps?",
            answer:
              "Yes. For regional and local service companies, Local SEO is critical. We optimize your Google Business Profile, align your business name, address, and phone number (NAP) across citations, and structure your website's location data so nearby customers find you on Google Maps and localized searches.",
          },
          {
            question: "What kind of reports will I receive each month?",
            answer:
              "We provide clear, easy-to-understand monthly reports based directly on Google Search Console data. You will see total search impressions, organic clicks, your top-performing search queries, and specific recommendations on what we plan to improve next.",
          },
        ]}
        ctaTitle="Want to Grow Your Organic Google Search Visibility?"
        ctaDescription="Tell us about your website and target market. We'll conduct an honest initial review and outline practical steps to improve your search visibility."
      />
    </main>
  );
}
