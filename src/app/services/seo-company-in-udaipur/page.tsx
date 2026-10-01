import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import SearchIcon from "@mui/icons-material/Search";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title: "SEO Company in Udaipur | Search Engine Optimization Services | Aetibar",
  description:
    "Rank on page 1 of Google with Aetibar, a trusted SEO company in Udaipur. Data-driven search engine optimization, local SEO, and technical audits that drive real traffic.",
  keywords: [
    "SEO Company in Udaipur",
    "Best SEO Company in Udaipur",
    "SEO Services in Udaipur",
    "Search Engine Optimization Udaipur",
    "Local SEO Udaipur",
    "Google Ranking Services Udaipur",
    "Technical SEO Agency India",
    "Aetibar Technologies",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  alternates: {
    canonical: "https://www.aetibar.in/services/seo-company-in-udaipur",
  },
  openGraph: {
    title: "SEO Company in Udaipur | Search Engine Optimization Services | Aetibar",
    description:
      "Grow your organic Google search rankings with honest, data-driven SEO services from Aetibar, a leading SEO company in Udaipur.",
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
    title: "SEO Company in Udaipur | Search Engine Optimization Services | Aetibar",
    description:
      "Honest, technical search engine optimization that connects your website with paying clients on Google.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Company in Udaipur",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar is an established SEO company in Udaipur offering technical crawl audits, on-page optimization, local Google Business Profile ranking, and high-intent keyword research.",
  url: "https://www.aetibar.in/services/seo-company-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
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
        badge="SEO Company in Udaipur"
        title="SEO Services for Businesses —"
        titleHighlight="Rank High on Google Without Paying for Clicks."
        tagline="Honest, practical search engine optimization that connects your website with local customers actively searching for your services."
        description="As a leading SEO company in Udaipur, we believe search engine optimization isn't about secret tricks, keyword spam, or overnight guarantees. It's about making sure Google can easily read and trust your website, and that your pages answer the exact questions prospective clients search for when looking to hire. We fix technical errors, speed up your pages, and help your business show up at the top of Google Search and Google Maps."
        icon={<SearchIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Local Businesses & Clinics",
            desc: "You want people in your city or neighborhood to find you on Google Maps and call your phone when searching for what you do.",
          },
          {
            title: "B2B Companies & Providers",
            desc: "You want a steady stream of incoming quote inquiries every month without having to rely solely on expensive daily ad spend.",
          },
          {
            title: "Websites Launching or Redesigning",
            desc: "You are launching or updating your website and want to make sure you protect your established Google rankings and traffic.",
          },
          {
            title: "Owners Burned by Shady SEO",
            desc: "You previously paid for confusing monthly reports full of jargon and vanity graphs, but never saw genuine customer phone calls.",
          },
        ]}
        problemsAddressed={[
          {
            problem: "Your business is completely invisible when people search Google for your services",
            howWeHelp:
              "We check why Google isn't showing your pages, fix crawl errors, set up clean sitemaps, and optimize your key service pages so search engines index and rank them properly.",
          },
          {
            problem: "Losing hard-earned Google rankings after redesigning your website",
            howWeHelp:
              "When you change page links, Google gets confused and rankings drop. We set up 301 redirects so Google passes all your old search authority straight to your new website without any traffic loss.",
          },
          {
            problem: "Slow loading speeds and mobile glitches pushing your site down the page",
            howWeHelp:
              "Google hates slow websites. We speed up your site, fix mobile display issues, and optimize images so your pages pass Google's official speed test (Core Web Vitals).",
          },
          {
            problem: "Confusing monthly SEO reports with vanity numbers instead of real inquiries",
            howWeHelp:
              "No confusing agency smoke and mirrors. We send simple, honest monthly reports showing what people actually typed into Google to find you, and how many calls and form leads came in.",
          },
        ]}
        deliverables={[
          {
            title: "Google Search Health & Technical Fixes",
            desc: "We fix the hidden technical problems stopping Google search bots from reading and ranking your website pages.",
            items: [
              "Fixing broken links, missing pages, and Google crawl errors",
              "Google speed test pass guarantee for mobile phones",
              "Clean XML sitemaps and search engine robots setup",
              "SSL security verification and clean canonical page tags",
            ],
          },
          {
            title: "Local SEO & Google Business Profile (Google Maps)",
            desc: "Get your business into the top 3 spots on Google Maps when local customers search nearby.",
            items: [
              "Google Business Profile setup and complete profile verification",
              "Optimizing local business category, address, phone, and hours",
              "Local keyword targeting for your city, town, and service areas",
              "Customer review guidance to boost your local reputation and rank",
            ],
          },
          {
            title: "High-Intent Keyword Research & Content Setup",
            desc: "We identify the exact search words paying customers type when they are ready to hire someone or buy products.",
            items: [
              "Researching keywords that commercial buyers actually search",
              "Optimizing page titles, descriptions, and headlines (H1-H3)",
              "Writing clear, helpful service descriptions that answer buyer questions",
              "Internal page linking so visitors easily navigate to your contact page",
            ],
          },
          {
            title: "Safe Website Redesign SEO Migration",
            desc: "Protecting your existing Google rankings and traffic when you launch a brand new website design.",
            items: [
              "Mapping every single old URL to your new pages (301 redirects)",
              "Preserving backlinks and authority built over past years",
              "Submitting updated sitemaps to Google Search Console immediately",
              "Daily monitoring after launch to catch and fix any ranking dips",
            ],
          },
          {
            title: "Simple, Honest Monthly Search Reports",
            desc: "Crystal-clear monthly reporting pulled straight from official Google Search Console data.",
            items: [
              "Exact search phrases people typed into Google to find you",
              "Number of real clicks, impressions, and phone calls received",
              "Tracking your keyword ranking improvements month over month",
              "Plain English summary of what we did and what we recommend next",
            ],
          },
        ]}
        benefits={[
          {
            title: "Steady Inquiries Without Paying for Clicks",
            desc: "Once you rank on Google, every customer click and phone call is 100% free organic traffic that doesn't cost you advertising money.",
          },
          {
            title: "Attract People Who Are Ready to Buy Today",
            desc: "When someone searches for what you do on Google, they are looking to hire right now—meaning much higher closing rates.",
          },
          {
            title: "Dominate Local Google Maps in Your City",
            desc: "When people search on their smartphones, Google shows the top 3 local businesses. We help put your company in that coveted spot.",
          },
          {
            title: "Honest, Transparent Results with Zero Fluff",
            desc: "We don't make fake promises like 'rank #1 tomorrow'. We build real, long-term search authority that lasts for years.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Full Website & Competitor Audit",
            desc: "We check your current website speed, test mobile responsiveness, and see what search terms your competitors are winning.",
          },
          {
            num: "02",
            title: "Keyword & Customer Research",
            desc: "We find the exact high-value phrases real buyers in your city search for when looking to hire or purchase.",
          },
          {
            num: "03",
            title: "Fixing Code & Speed Bottlenecks",
            desc: "We fix technical crawl errors, speed up image delivery, and structure your page headings so Google can index them easily.",
          },
          {
            num: "04",
            title: "Local Maps & Content Optimization",
            desc: "We optimize your Google Business Profile and polish page copy to answer customer questions and build trust.",
          },
          {
            num: "05",
            title: "Tracking & Transparent Reporting",
            desc: "We monitor your rankings on Google Search Console and send simple, plain-English monthly updates showing your progress.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question: "How long does it take to see real results from SEO?",
            answer:
              "SEO is a sustainable, long-term investment. While technical speed fixes and Google Maps updates can show improvements in 4 to 8 weeks, significant competitive rankings usually take 3 to 6 months. Anyone promising you #1 rankings overnight is using risky spam tricks that will get your site banned by Google.",
          },
          {
            question: "Can you guarantee that my website will be #1 on Google?",
            answer:
              "No legitimate agency can guarantee #1 rankings because Google's algorithm is independent and updates frequently. What we do guarantee is strict adherence to Google's official best practices, transparent monthly reporting, and proven optimization methods that reliably improve your search rankings.",
          },
          {
            question: "What is the difference between Google SEO and Google Ads?",
            answer:
              "With Google Ads, you pay Google every time someone clicks on your link, and the traffic stops the minute you stop paying. With SEO, we build your website's authority so Google ranks your pages naturally. Every visitor and call you get from organic search is 100% free.",
          },
          {
            question: "Do I need local SEO if I have a physical shop or office?",
            answer:
              "Yes, absolutely! Over 80% of people look up nearby services on Google Maps before visiting or calling. Local SEO optimizes your Google Business Profile, address, reviews, and city keywords so you appear right at the top of local map searches.",
          },
        ]}
        ctaTitle="Ready to Rank on Google &amp;"
        ctaTitleHighlight="Win More Organic Leads?"
        ctaDescription="Tell us about your business and target location. We'll perform a free initial search audit and give you an honest assessment of your ranking opportunities."
      />
    </main>
  );
}
