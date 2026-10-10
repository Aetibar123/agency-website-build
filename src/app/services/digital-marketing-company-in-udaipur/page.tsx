import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import { workProjects } from "../../../data/workData";


export const metadata: Metadata = {
  title: "Digital Marketing Company in Udaipur | Aetibar",

  description:
    "Aetibar, Best digital marketing company in Udaipur, offers SEO, SMM, and Ads to improve online visibility, boost traffic, and generate leads.",

  keywords: [
    "Digital Marketing Company in Udaipur",
    "Digital Marketing Agency in Udaipur",
    "Digital Marketing Services in Udaipur",
    "SEO Company in Udaipur",
    "Social Media Marketing Agency Udaipur",
    "Google Ads Agency in Udaipur",
    "PPC Company in Udaipur",
  ],

  authors: [
    {
      name: "Aetibar Technologies",
      url: "https://www.aetibar.in",
    },
  ],

  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",

  alternates: {
    canonical:
      "https://www.aetibar.in/services/digital-marketing-company-in-udaipur",
  },

  openGraph: {
    title:
      "Digital Marketing Company in Udaipur | SEO, SMM & Paid Ads | Aetibar",

    description:
      "Build stronger online visibility with SEO, social media marketing, and Google & Meta advertising from Aetibar.",

    url: "https://www.aetibar.in/services/digital-marketing-company-in-udaipur",

    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Digital Marketing Company in Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Digital Marketing Company in Udaipur | SEO, SMM & Paid Ads | Aetibar",

    description:
      "SEO, social media marketing, and Google & Meta advertising to help businesses improve their online presence and reach more customers.",

    creator: "@Aetibar_",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Company in Udaipur",
  serviceType: "Digital Marketing Services",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar provides digital marketing services in Udaipur, including search engine optimization, social media marketing, and paid advertising across Google and Meta.",
  url: "https://www.aetibar.in/services/digital-marketing-company-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Search Engine Optimization",
          url: "https://www.aetibar.in/services/seo-company-in-udaipur",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Marketing",
          url: "https://www.aetibar.in/services/social-media-marketing-company-in-udaipur",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google & Meta Advertising",
          url: "https://www.aetibar.in/services/paid-advertising-company-in-udaipur",
        },
      },
    ],
  },
};


export default function DigitalMarketingServicePage() {
  const relevantProjects = workProjects.filter((p) =>
    [
      "local-seo-search-visibility",
      "google-ads-lead-generation",
      "social-media-organic-growth",
      "meta-ads-sales-campaign",
    ].includes(p.slug),
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        badge="Digital Marketing Services"
        title="Digital Marketing Company in Udaipur — "
        titleHighlight="SEO, Social Media & Paid Ads"
        tagline="One team to help your business build visibility, reach the right audience, and generate more customer enquiries online."
        description="As a digital marketing company in Udaipur, we bring your online marketing efforts together under one strategy. From improving search visibility to reaching potential customers through social platforms and paid campaigns, we help you build a stronger and more consistent digital presence."
        icon={<CampaignOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        heroHighlights={[
          {
            value: "3-in-1",
            title: "One Digital Marketing Strategy",
            desc: "SEO, social media marketing, and paid advertising working together to build visibility and bring in more enquiries.",
          },
          {
            value: "100%",
            title: "Your Accounts, Your Assets",
            desc: "You keep ownership of your Google Ads, analytics, social media accounts, and creative assets with no lock-in.",
          },
          {
            value: "SEO",
            title: "Get Found on Google",
            desc: "Improve your search visibility with practical SEO strategies designed to attract people actively looking for your services.",
          },
          {
            value: "Direct",
            title: "Leads Directly to You",
            desc: "Turn interested visitors into calls, WhatsApp messages, and enquiries through targeted campaigns and clear conversion paths.",
          },
        ]}
        subServiceSections={[
          {
            id: "seo",

            badge: "SEARCH ENGINE OPTIMIZATION",

            title: "SEO Company in Udaipur",

            titleHighlight:
              "Get Found When Customers Search for Your Business.",

            tagline:
              "Improve your visibility across Google Search and Maps and reach people actively looking for your products or services.",

            description:
              "Our search engine optimization services help your website and Google Business Profile appear for relevant searches. We improve technical performance, on-page content, local search signals, keyword targeting, and site structure to build stronger organic visibility and attract more relevant visitors over time.",

            icon: <SearchIcon sx={{ fontSize: 20, color: "#EA580C" }} />,

            detailUrl: "/services/seo-company-in-udaipur",

            detailLabel: "Explore SEO Services",

            metrics: [
              { value: "Search", label: "Organic Visibility" },
              { value: "Local", label: "Google Maps Presence" },
              { value: "Organic", label: "Long-Term Traffic" },
            ],

            deliverables: [
              {
                title: "Technical SEO",
                desc: "Improve crawling, indexing, site structure, page speed, and other technical elements that influence search performance.",
              },

              {
                title: "Local Search Optimization",
                desc: "Optimize your Google Business Profile and local presence so nearby customers can discover your business more easily.",
              },

              {
                title: "Keyword Research & Strategy",
                desc: "Identify relevant search terms based on customer needs, search intent, competition, and opportunities in your market.",
              },

              {
                title: "On-Page SEO & Content",
                desc: "Optimize headings, metadata, content, internal links, and structured data to make your pages clearer to both users and search engines.",
              },
            ],

            benefits: [
              "Improve visibility for relevant searches on Google",
              "Reach people actively looking for your products or services",
              "Strengthen your presence in local search and Google Maps",
              "Build a steady source of organic website traffic over time",
            ],
          },

          {
            id: "smm",

            badge: "SOCIAL MEDIA & CONTENT",

            title: "Social Media Marketing Company in Udaipur",

            titleHighlight: "Build a Social Presence Your Customers Can Trust.",

            tagline:
              "Consistent content, branded visuals, and engaging campaigns that keep your business visible across the platforms your customers use.",

            description:
              "Your social profiles often shape a customer's first impression of your business. We help you maintain an active and professional presence across Instagram, Facebook, and LinkedIn with planned content, branded visuals, short-form videos, and profile optimization that clearly communicates what your business offers.",

            icon: <ShareOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,

            detailUrl: "/services/social-media-marketing-company-in-udaipur",

            detailLabel: "Explore Social Media Services",

            metrics: [
              { value: "Monthly", label: "Content Planning" },
              { value: "Custom", label: "Branded Visuals" },
              { value: "Multi-Platform", label: "Social Presence" },
            ],

            deliverables: [
              {
                title: "Content Planning",
                desc: "Plan monthly content around your business, services, offers, industry, and the interests of your audience.",
              },

              {
                title: "Branded Graphics & Carousels",
                desc: "Create consistent visual content that follows your brand identity and communicates your message clearly.",
              },

              {
                title: "Reels & Short-Form Video",
                desc: "Create short-form videos that showcase your products, services, expertise, work, and customer experience.",
              },

              {
                title: "Profile Optimization",
                desc: "Improve your social profiles, bios, calls to action, links, and overall presentation so visitors can understand your business quickly.",
              },
            ],

            benefits: [
              "Maintain a consistent and professional online presence",
              "Give potential customers more confidence when researching your business",
              "Stay visible to existing and potential customers",
              "Build stronger brand recognition across social platforms",
            ],
          },

          {
            id: "paid-advertising",

            badge: "PAID SEARCH & SOCIAL ADVERTISING",

            title: "Paid Advertising Company in Udaipur",

            titleHighlight:
              "Reach the Right Customers With Targeted Campaigns.",

            tagline:
              "Google Ads and Meta campaigns designed to reach relevant audiences and turn advertising spend into measurable customer actions.",

            description:
              "Paid advertising helps you reach potential customers while they are actively searching or browsing online. We manage Google Search Ads, Instagram Ads, and Facebook Ads with focused targeting, controlled budgets, conversion tracking, and ongoing campaign optimization to improve campaign performance.",

            icon: (
              <AdsClickOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />
            ),

            detailUrl: "/services/paid-advertising-company-in-udaipur",

            detailLabel: "Explore Paid Advertising Services",

            metrics: [
              { value: "Google", label: "Search Advertising" },
              { value: "Meta", label: "Instagram & Facebook" },
              { value: "Tracked", label: "Customer Actions" },
            ],

            deliverables: [
              {
                title: "Google Search Ads",
                desc: "Target relevant search terms and place your business in front of people actively looking for your products or services.",
              },

              {
                title: "Meta Advertising",
                desc: "Reach relevant audiences across Instagram and Facebook using location, interests, demographics, and other audience signals.",
              },

              {
                title: "Campaign & Budget Management",
                desc: "Set campaign goals, manage daily budgets, monitor performance, and adjust campaigns based on real results.",
              },

              {
                title: "Conversion Tracking",
                desc: "Track calls, WhatsApp messages, form submissions, and other important actions to understand where your enquiries come from.",
              },
            ],

            benefits: [
              "Reach potential customers faster than relying only on organic traffic",
              "Target specific locations and audience segments",
              "Maintain control over your advertising budget",
              "Measure calls, messages, forms, and other customer actions",
            ],
          },
        ]}
        whoIsItFor={[
          {
            title: "Local Businesses",
            desc: "Restaurants, clinics, gyms, retailers, and other local businesses that want stronger visibility in local search and more customers from their area.",
          },

          {
            title: "B2B Companies",
            desc: "Manufacturers, suppliers, agencies, and professional firms looking to build online visibility and generate more relevant business enquiries.",
          },

          {
            title: "Service Providers",
            desc: "Contractors, consultants, and service businesses that want to reach new customers, strengthen their online presence, and turn website visitors into enquiries.",
          },

          {
            title: "Businesses Ready to Grow",
            desc: "Companies that want a more structured customer acquisition strategy across search, social platforms, and targeted online campaigns.",
          },
        ]}
        problemsAddressed={[
          {
            problem: "Managing SEO, social media, and advertising separately",
            howWeHelp:
              "We bring search optimization, social media, and paid campaigns into one coordinated strategy, so your marketing efforts work toward the same business goals.",
          },

          {
            problem: "Spending on online ads without knowing what is working",
            howWeHelp:
              "We use focused targeting, negative keywords, budget controls, and conversion tracking to reduce wasted spend and understand which campaigns generate enquiries.",
          },

          {
            problem: "Losing control of marketing accounts and business assets",
            howWeHelp:
              "Your Google Ads, Meta Business, Analytics, and creative assets remain under your ownership, giving you clear access and control over your marketing setup.",
          },

          {
            problem:
              "Posting content without a clear purpose or consistent brand",
            howWeHelp:
              "We create content around your business, audience, and goals—from branded graphics and carousels to reels—with clear messaging and calls to action.",
          },
        ]}
        deliverables={[
          {
            title: "Multi-Channel Marketing Strategy",
            desc: "A clear marketing plan that connects search, social media, and paid campaigns around your business goals.",
            items: [
              "Market and competitor research for your target audience",
              "Consistent brand messaging across digital channels",
              "Campaign planning around promotions and seasonal opportunities",
              "Regular strategy reviews and performance recommendations",
            ],
          },

          {
            title: "SEO & Local Search Optimization",
            desc: "Improve your website and Google Business Profile so potential customers can find your business through relevant searches.",
            items: [
              "Technical SEO, site structure, speed, and mobile performance",
              "Google Business Profile and local search optimization",
              "Keyword research based on customer search intent",
              "On-page content, metadata, internal links, and structured data",
            ],
          },

          {
            title: "Social Media Management",
            desc: "Keep your social channels active and professional with content that reflects your brand and speaks to your audience.",
            items: [
              "Monthly content planning around your business and audience",
              "Branded graphics, carousels, and educational posts",
              "Short-form videos and reels showcasing your products or services",
              "Profile, bio, links, and content optimization",
            ],
          },

          {
            title: "Google & Meta Advertising",
            desc: "Reach relevant audiences through targeted campaigns across Google Search, Instagram, and Facebook.",
            items: [
              "Google Search campaigns targeting relevant customer searches",
              "Instagram and Facebook campaigns for selected audiences",
              "Negative keyword management and audience targeting",
              "Budget monitoring, campaign testing, and ongoing optimization",
            ],
          },

          {
            title: "Lead & Conversion Setup",
            desc: "Make it easier for interested visitors to contact your business and help you understand where those enquiries come from.",
            items: [
              "Click-to-call and WhatsApp integration",
              "Website enquiry forms and email notifications",
              "Conversion tracking for calls, messages, and form submissions",
              "Landing page improvements focused on clear calls to action",
            ],
          },

          {
            title: "Transparent Monthly Reporting",
            desc: "Simple reports that show what was done, what changed, and where your marketing efforts can improve next.",
            items: [
              "Website traffic and search visibility trends",
              "Google Business Profile and local search performance",
              "Campaign spend, clicks, conversions, and cost metrics",
              "Clear insights and priorities for the following month",
            ],
          },
        ]}
        benefits={[
          {
            title: "One Strategy Across Every Channel",
            desc: "Search, social media, and paid campaigns work together around the same business goals instead of operating as separate marketing activities.",
          },

          {
            title: "Smarter Use of Your Ad Budget",
            desc: "Focused targeting, negative keywords, budget controls, and regular campaign optimization help reduce unnecessary advertising spend.",
          },

          {
            title: "You Keep Control of Your Accounts",
            desc: "Your Google Ads, Meta Business, Analytics, and other marketing accounts remain under your ownership with direct access to your data and assets.",
          },

          {
            title: "Make It Easy to Contact You",
            desc: "Connect customers through WhatsApp, phone calls, forms, and other enquiry channels so interested visitors have a clear way to reach your business.",
          },

          {
            title: "One Team to Coordinate Your Marketing",
            desc: "Work with one team across search, content, social media, and advertising instead of managing multiple providers for different channels.",
          },

          {
            title: "Clear Scope & Transparent Reporting",
            desc: "Know what is included, what is being worked on, and how your campaigns are performing through clear deliverables and straightforward reporting.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Discovery & Digital Audit",
            desc: "We review your website, search presence, social channels, competitors, and existing campaigns to understand what is working and where there is room to improve.",
          },

          {
            num: "02",
            title: "Strategy & Campaign Planning",
            desc: "We define your marketing priorities, target audience, content direction, SEO approach, and advertising plan based on your business goals.",
          },

          {
            num: "03",
            title: "Setup & Launch",
            desc: "We prepare the required content, tracking, landing pages, SEO improvements, and advertising campaigns, then launch each channel according to the agreed plan.",
          },

          {
            num: "04",
            title: "Monitoring & Optimization",
            desc: "We review campaign performance, search visibility, audience engagement, and customer actions to identify what needs to be adjusted or improved.",
          },

          {
            num: "05",
            title: "Monthly Review & Next Steps",
            desc: "We share a clear summary of the work completed, key performance trends, and recommended priorities for the next month.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question:
              "Should our business start with SEO, social media, or paid advertising?",
            answer:
              "It depends on your business goals, audience, and current online presence. Paid advertising can help you reach potential customers quickly, while SEO is focused on building organic search visibility over time. Social media helps maintain an active presence and build familiarity with your brand. We can recommend the right combination based on your priorities and budget.",
          },

          {
            question:
              "Can I explore SEO, social media, and paid advertising separately?",
            answer:
              "Yes. We offer dedicated services for search engine optimization, social media marketing, and Google and Meta advertising. You can explore each service individually or combine them into a broader digital marketing strategy.",
          },

          {
            question: "Do I need to manage multiple marketing providers?",
            answer:
              "Not necessarily. We can coordinate your SEO, social media, and paid advertising through one team, making it easier to maintain consistent messaging, track performance, and manage your overall digital marketing activity.",
          },

          {
            question: "Who owns our Google Ads and Meta accounts?",
            answer:
              "Your business should retain ownership of its advertising accounts and marketing assets. We work within your Google Ads and Meta Business accounts where possible, so you maintain access to your campaigns, data, audiences, and account history.",
          },

          {
            question: "How will customers contact my business?",
            answer:
              "We can set up clear conversion paths such as phone calls, WhatsApp messages, website forms, and other enquiry options. We also configure tracking where supported so you can better understand how people are reaching your business.",
          },

          {
            question: "What advertising budget do we need to get started?",
            answer:
              "There is no single budget that works for every business. It depends on your location, industry, competition, target audience, and campaign goals. We recommend starting with a focused budget, measuring the results, and adjusting the spend based on actual campaign performance.",
          },
        ]}
        ctaTitle="Ready to Build a Digital Marketing Strategy That"
        ctaTitleHighlight="Works for Your Business?"
        ctaDescription="Tell us about your business, goals, and current marketing challenges. We'll help you identify the right mix of SEO, social media, and paid advertising for your next stage of growth."
      />
    </main>
  );
}
