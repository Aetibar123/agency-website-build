import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import SearchIcon from "@mui/icons-material/Search";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title:
    "SEO Company in Udaipur | Search Engine Optimization Services | Aetibar",

  description:
    "Aetibar provides SEO services in Udaipur to improve search visibility, organic traffic, local search presence, and website performance through practical search engine optimization.",

  keywords: [
    "SEO Company in Udaipur",
    "SEO Services in Udaipur",
    "Search Engine Optimization Udaipur",
    "Local SEO Udaipur",
    "Technical SEO Udaipur",
    "On-Page SEO Udaipur",
    "Google Business Profile Optimization Udaipur",
    "SEO Agency in Udaipur",
    "Search Engine Optimization Services",
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
    canonical: "https://www.aetibar.in/services/seo-company-in-udaipur",
  },

  openGraph: {
    title:
      "SEO Company in Udaipur | Search Engine Optimization Services | Aetibar",

    description:
      "Improve your website's search visibility with practical SEO services covering technical SEO, keyword research, on-page optimization, local SEO, and content optimization.",

    url: "https://www.aetibar.in/services/seo-company-in-udaipur",

    siteName: "Aetibar",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - SEO Company in Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "SEO Company in Udaipur | Search Engine Optimization Services | Aetibar",

    description:
      "Practical SEO services to improve search visibility, organic traffic, local search presence, and website performance.",

    creator: "@Aetibar_",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Company in Udaipur",
  serviceType: "Search Engine Optimization Services",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar provides search engine optimization services in Udaipur, including technical SEO, on-page optimization, local SEO, Google Business Profile optimization, keyword research, and SEO content optimization.",
  url: "https://www.aetibar.in/services/seo-company-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
};

export default function SeoServicePage() {
  const relevantProjects = workProjects.filter((p) =>
    ["enterprise-seo-migration", "nexus-ecommerce"].includes(p.slug),
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        badge="Search Engine Optimization"
        title="SEO Company in Udaipur — "
        titleHighlight="Get Found When Customers Search"
        tagline="Practical search engine optimization that helps your business improve search visibility and reach people actively looking for your products or services."
        description="As an SEO company in Udaipur, we focus on the fundamentals that help search engines understand and discover your website. From technical SEO and page structure to keyword research, content, and local search optimization, we improve the parts of your online presence that can support stronger organic visibility over time."
        icon={<SearchIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Local Businesses",
            desc: "You want to improve your visibility in local search and help nearby customers discover your business through Google Search and Maps.",
          },

          {
            title: "B2B Companies",
            desc: "You want to reach potential clients through organic search and build a stronger source of relevant website enquiries over time.",
          },

          {
            title: "New & Redesigned Websites",
            desc: "You are launching or updating a website and want to build a strong SEO foundation from the start, with the right structure, content, and technical setup.",
          },

          {
            title: "Businesses Looking for Better SEO",
            desc: "You want a clearer SEO strategy, useful reporting, and practical improvements instead of focusing only on rankings, traffic, or other surface-level metrics.",
          },
        ]}
        problemsAddressed={[
          {
            problem:
              "Your business is missing from important Google searches for your products or services",

            howWeHelp:
              "We identify technical issues that can affect crawling and indexing, review your site structure and sitemaps, and optimize important pages so search engines can better understand and discover your website.",
          },

          {
            problem:
              "Losing search visibility after redesigning or restructuring your website",

            howWeHelp:
              "Changes to page URLs can affect existing search visibility. We plan and implement 301 redirects, review internal links, and check important pages after launch to help preserve existing SEO signals during the transition.",
          },

          {
            problem:
              "Your website content doesn't match what potential customers are actually searching for",

            howWeHelp:
              "We research relevant keywords and search intent, then improve your service pages, supporting content, headings, metadata, and internal links to make your website more relevant to the searches that matter to your business.",
          },

          {
            problem:
              "Your website isn't prepared for how people discover information through modern search and AI-powered answers",

            howWeHelp:
              "Alongside traditional SEO, we structure useful content around clear questions, topics, entities, and search intent so it can be easier for search engines and AI-powered search experiences to understand, interpret, and reference.",
          },

          {
            problem:
              "Slow pages, mobile issues, and unclear SEO reporting make it difficult to know what's working",

            howWeHelp:
              "We review page performance, mobile usability, images, scripts, and other technical factors that affect user experience. We also provide straightforward reporting on search visibility, organic traffic, important queries, and tracked enquiries where measurement is available.",
          },
        ]}
        deliverables={[
          {
            title: "Technical SEO & Search Engine Optimization",
            desc: "Fix the technical issues that can prevent search engines from properly crawling, understanding, and indexing your website.",
            items: [
              "Fixing broken links, missing pages, crawl issues, and indexing problems",
              "Improving page speed, mobile usability, and Core Web Vitals where needed",
              "XML sitemap and robots.txt configuration",
              "SSL, canonical tags, redirects, and essential technical SEO checks",
            ],
          },

          {
            title: "Local SEO & Google Business Profile",
            desc: "Improve your local search visibility and help nearby customers discover your business through Google Search and Google Maps.",
            items: [
              "Google Business Profile setup, verification, and optimization",
              "Business categories, address, phone, hours, and service information",
              "Local keyword targeting based on your services and target areas",
              "Review guidance and local profile improvements to strengthen your online presence",
            ],
          },

          {
            title: "Keyword Research & On-Page SEO",
            desc: "Find the searches relevant to your business and optimize your website pages around useful keywords and customer search intent.",
            items: [
              "Keyword research based on relevance, search intent, and business goals",
              "Optimizing page titles, meta descriptions, H1-H3 headings, and page structure",
              "Improving service pages and supporting content around relevant search topics",
              "Internal linking between related pages and important conversion paths",
            ],
          },

          {
            title: "SEO Content & AI Search Optimization",
            desc: "Create useful, well-structured content that supports organic search visibility while making your business information easier for modern search and AI-powered systems to understand.",
            items: [
              "Content planning around customer questions, topics, and search intent",
              "Clear answers to relevant product, service, and industry questions",
              "Improving topical context and entity relationships across important pages",
              "Structured data and content organization where appropriate",
            ],
          },

          {
            title: "Website Redesign & SEO Migration",
            desc: "Reduce the risk of losing existing search visibility when changing your website design, structure, or page URLs.",
            items: [
              "Mapping important old URLs to relevant new pages",
              "Implementing and checking 301 redirects during website migration",
              "Updating internal links, canonical URLs, and XML sitemaps",
              "Monitoring indexing and organic search performance after launch",
            ],
          },

          {
            title: "SEO Performance & Monthly Reporting",
            desc: "Track your organic search performance with straightforward reports that show what changed, what was improved, and what to work on next.",
            items: [
              "Search queries, clicks, impressions, and average search positions",
              "Organic traffic and important landing-page performance",
              "Google Business Profile and local search performance where available",
              "Clear summary of completed SEO work, findings, and next priorities",
            ],
          },
        ]}
        benefits={[
          {
            title: "Build Long-Term Organic Visibility",
            desc: "SEO helps your website become more discoverable in relevant Google searches, creating an organic source of visibility that can continue working alongside your other marketing channels.",
          },

          {
            title: "Reach Customers With Relevant Search Intent",
            desc: "By targeting searches that match your products, services, and audience, SEO helps bring visitors who are actively looking for information, solutions, or businesses like yours.",
          },

          {
            title: "Strengthen Your Local Search Presence",
            desc: "Local SEO helps your business become more visible across Google Search and Maps, making it easier for people in your service area to discover your business.",
          },

          {
            title: "Turn Your Website Into a Better Search Asset",
            desc: "Technical improvements, useful content, clear page structure, and internal linking make your website easier for search engines to understand while creating a better experience for visitors.",
          },

          {
            title: "Stay Discoverable Across Modern Search",
            desc: "Well-structured, helpful content can support visibility not only in traditional search results but also across evolving AI-powered search and answer experiences.",
          },

          {
            title: "Make SEO Performance Easier to Understand",
            desc: "Clear reporting on search queries, impressions, clicks, organic traffic, and other available metrics helps you understand how your search visibility is changing and where further improvements are needed.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Website & Search Audit",
            desc: "We review your website structure, technical SEO, mobile experience, existing search visibility, and relevant competitors to identify opportunities and issues affecting organic search.",
          },

          {
            num: "02",
            title: "Keyword & Search Intent Research",
            desc: "We research relevant keywords and the types of searches your target audience makes, then prioritize topics based on relevance, search intent, competition, and your business goals.",
          },

          {
            num: "03",
            title: "Technical & On-Page Optimization",
            desc: "We address technical SEO issues, improve page structure and metadata, optimize important service pages, strengthen internal linking, and improve performance where needed.",
          },

          {
            num: "04",
            title: "Local SEO & Content Optimization",
            desc: "We optimize your Google Business Profile and local search signals while improving website content to answer relevant customer questions and provide clearer information about your products and services.",
          },

          {
            num: "05",
            title: "Monitoring, Reporting & Ongoing SEO",
            desc: "We track search performance, organic traffic, important queries, and other available metrics, then use the findings to identify further SEO improvements and priorities for the next stage.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question: "How long does it take to see results from SEO?",
            answer:
              "SEO timelines vary depending on your website's current condition, competition, industry, location, and the amount of work required. Technical improvements can sometimes be reflected sooner, while meaningful growth in organic visibility usually takes longer. We focus on building sustainable improvements rather than promising a fixed ranking timeline.",
          },

          {
            question:
              "Can you guarantee that my website will rank #1 on Google?",
            answer:
              "No. No legitimate SEO provider can guarantee a specific Google ranking because search results depend on many factors outside anyone's direct control. Our focus is on following established SEO practices, improving your website's technical foundation and relevance, and using search performance data to guide ongoing optimization.",
          },

          {
            question: "What is the difference between SEO and Google Ads?",
            answer:
              "Google Ads can place your business in paid search results while you are running an advertising campaign, whereas SEO focuses on improving your website's organic visibility in search results over time. They serve different purposes and can also work together as part of a broader digital marketing strategy.",
          },

          {
            question:
              "Do I need local SEO if I have a physical shop or service area?",
            answer:
              "Local SEO can be especially valuable for businesses that serve customers in specific locations. It helps improve your presence across Google Search and Maps through your Google Business Profile, local business information, relevant location-based content, and other local search signals.",
          },

          {
            question:
              "Can SEO help my business appear in AI-powered search results?",
            answer:
              "SEO remains the foundation for making your website's information understandable and discoverable. We can also structure useful content around customer questions, topics, entities, and search intent to support visibility across evolving AI-powered search and answer experiences. However, no agency can guarantee that a particular page or business will be selected by an AI system.",
          },

          {
            question: "How do you measure SEO performance?",
            answer:
              "We look at relevant search and website metrics such as impressions, clicks, search queries, average search positions, organic traffic, important landing pages, and local search performance where available. Where conversion tracking is properly configured, we can also review actions such as form submissions, calls, and other enquiries.",
          },
        ]}
        ctaTitle="Ready to Improve Your Google"
        ctaTitleHighlight="Search Visibility?"
        ctaDescription="Tell us about your business, website, and target location. We'll review your current search presence and discuss practical SEO opportunities for improving your organic visibility."
      />
    </main>
  );
}
