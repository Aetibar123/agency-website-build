import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title: "Paid Advertising Company in Udaipur | Google Ads & Meta Ads | Aetibar",
  description:
    "Maximize your ROI with Aetibar, a premier paid advertising company in Udaipur. High-converting Google Ads and Meta campaigns engineered to generate verified leads.",
  keywords: [
    "Paid Advertising Company in Udaipur",
    "Google Ads Agency in Udaipur",
    "Best Paid Advertising Company in Udaipur",
    "PPC Company in Udaipur",
    "Meta Ads Management Udaipur",
    "Performance Marketing Udaipur",
    "Digital Advertising Agency India",
    "Aetibar Technologies",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  alternates: {
    canonical: "https://www.aetibar.in/services/paid-advertising-company-in-udaipur",
  },
  openGraph: {
    title: "Paid Advertising Company in Udaipur | Google Ads & Meta Ads | Aetibar",
    description:
      "Targeted Google Ads and Meta advertising campaigns engineered to deliver real customer inquiries from Aetibar, Udaipur.",
    url: "https://www.aetibar.in/services/paid-advertising-company-in-udaipur",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Paid Advertising Company in Udaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Advertising Company in Udaipur | Google Ads & Meta Ads | Aetibar",
    description:
      "Targeted Google and Meta advertising campaigns engineered to deliver real customer inquiries.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paid Advertising Company in Udaipur",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar is a top paid advertising company in Udaipur specializing in targeted Google Search, Display, and Meta advertising campaign setup, negative keyword management, and conversion tracking.",
  url: "https://www.aetibar.in/services/paid-advertising-company-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
};

export default function PaidAdvertisingServicePage() {
  const relevantProjects = workProjects.filter((p) =>
    ["service-lead-pipeline", "dtc-brand-scaling"].includes(p.slug)
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        badge="Paid Advertising Company in Udaipur"
        title="Targeted Paid Advertising for Businesses —"
        titleHighlight="Google & Meta Ads That Deliver Inquiries."
        tagline="High-return Google Search Ads and Meta ad campaigns with strict daily budget caps, negative keyword filtering, and verified lead tracking."
        description="As a premier paid advertising company in Udaipur, we build, manage, and continuously optimize campaigns on Google and Meta (Instagram & Facebook)—focusing strictly on people ready to buy, blocking junk clicks, and tracking every rupee to ensure a profitable return. Paid advertising allows your business to appear right at the top of Google and in customer feeds the second people search for what you offer."
        icon={<AdsClickOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Businesses Needing Leads Today",
            desc: "Companies that cannot wait months for organic search and need qualified phone calls and quotation requests from Google today.",
          },
          {
            title: "E-Commerce Stores & Brands",
            desc: "Online shops wanting profitable customer orders through Google Shopping and high-converting Instagram/Facebook feed ads.",
          },
          {
            title: "B2B Companies & Suppliers",
            desc: "Corporate service providers and manufacturers seeking to reach specific decision-makers, industries, and geographical cities.",
          },
          {
            title: "Owners Burned by Wasted Ad Spend",
            desc: "Businesses that previously ran ads without negative keywords or tracking and watched their budget drained on empty clicks.",
          },
        ]}
        problemsAddressed={[
          {
            problem: "Burning your budget on accidental clicks, students, and job seekers",
            howWeHelp:
              "We set up strict negative keyword lists before launching—blocking search terms like 'jobs', 'salary', 'free', and 'course' so your money is only spent on paying buyers.",
          },
          {
            problem: "Not knowing which ads actually produce phone calls and sales",
            howWeHelp:
              "We set up verified conversion tracking for every website form submission, WhatsApp click, and phone call, linking every new customer directly back to the winning ad.",
          },
          {
            problem: "Sending expensive paid traffic to slow, low-converting landing pages",
            howWeHelp:
              "Paying for ad clicks is useless if the landing page is slow or confusing. We optimize your landing page for lightning speed, clear value propositions, and easy WhatsApp contact.",
          },
          {
            problem: "Surprise credit card charges from unmanaged automated ad bidding",
            howWeHelp:
              "We configure hard daily and monthly spending limits inside your ad accounts. You retain 100% account ownership and pay Google/Meta directly for full financial transparency.",
          },
        ]}
        deliverables={[
          {
            title: "Google Search & Call-Only Ad Campaigns",
            desc: "Target people who are actively typing search queries for your services on Google right now.",
            items: [
              "High-intent keyword selection targeting ready-to-hire clients",
              "Strict negative keyword lists blocking junk clicks and job seekers",
              "Compelling ad headlines and descriptions that stand out",
              "Direct call-only ads that ring your business phone immediately",
            ],
          },
          {
            title: "Meta (Instagram & Facebook) Visual Campaigns",
            desc: "Engage local customers and repeat buyers with attractive visual and carousel ads in their daily feeds.",
            items: [
              "Laser-focused audience targeting by location, interests, and demographics",
              "Custom branded carousel and image creatives that grab attention",
              "Retargeting website visitors who didn't contact you on their first visit",
              "Click-to-WhatsApp ads that initiate immediate direct chats",
            ],
          },
          {
            title: "Verified Conversion & Phone Call Tracking",
            desc: "Know exactly which ads, keywords, and campaigns generate real money and inquiries.",
            items: [
              "Google Tag Manager and Meta Pixel configuration",
              "Tracking form submissions, phone call clicks, and WhatsApp taps",
              "Clear cost-per-lead calculation so you know your exact ROI",
              "Continuous split-testing of ad copy to lower cost per lead",
            ],
          },
          {
            title: "Strict Daily Budget Control & Transparent Billing",
            desc: "You retain 100% ownership of your ad accounts and pay the advertising platforms directly.",
            items: [
              "Hard daily spending limits preventing any accidental budget runaways",
              "You pay Google and Meta directly on your own credit card",
              "Zero hidden markups on media spend",
              "Transparent monthly summary reports showing actual results",
            ],
          },
        ]}
        benefits={[
          {
            title: "Immediate Customer Inquiries From Day One",
            desc: "Unlike SEO which takes months, paid advertising puts your business in front of customers within 24 hours of launch.",
          },
          {
            title: "Stop Wasting Money on Useless Clicks",
            desc: "Aggressive negative keyword blocking ensures that tire-kickers and job seekers never drain your daily budget.",
          },
          {
            title: "Track Every Rupee Spent Back to a Real Customer",
            desc: "See exactly how many calls and quote requests each campaign produced, with total clarity on your ROI.",
          },
          {
            title: "100% Account Ownership & Direct Billing",
            desc: "Your campaigns are built in your own Google and Meta accounts. You own all historical data and audiences forever.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Target Audience & Budget Strategy",
            desc: "We discuss your target customer, geographical service radius, and establish a comfortable daily budget.",
          },
          {
            num: "02",
            title: "Keyword Research & Negative Filtering",
            desc: "We identify commercial buyer keywords and build comprehensive negative keyword lists to prevent wasted clicks.",
          },
          {
            num: "03",
            title: "Ad Copy & Creative Production",
            desc: "We write persuasive headlines, design visual creatives, and set up conversion tracking on your landing page.",
          },
          {
            num: "04",
            title: "Launch & Daily Bid Optimization",
            desc: "We launch the campaigns with strict budget caps and monitor bids daily to keep your cost per inquiry low.",
          },
          {
            num: "05",
            title: "Performance Review & Scaling",
            desc: "We review conversion numbers, prune non-performing keywords, and scale up the winning ads that bring profitable inquiries.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question: "How much budget should I spend on ads each month?",
            answer:
              "We recommend starting with a manageable testing budget—typically ₹10,000 to ₹25,000 per month for local businesses. This allows us to gather data on real inquiries, weed out non-performing keywords, and verify profitability before you increase your spending.",
          },
          {
            question: "Who pays for the ads—Aetibar or my business?",
            answer:
              "You pay Google and Meta directly using your own company credit card or billing profile. We do not take a percentage markup on your ad spend. You retain 100% ownership of your advertising accounts and data forever.",
          },
          {
            question: "How soon will I start receiving inquiries?",
            answer:
              "Paid advertising campaigns usually start generating clicks and inquiries within 24 to 48 hours of going live, making it the fastest way to test a new offer or bring in immediate customer calls.",
          },
        ]}
        ctaTitle="Ready to Launch High-ROI Ads &amp;"
        ctaTitleHighlight="Bring in New Inquiries Today?"
        ctaDescription="Tell us about your services and target customers. We'll outline an efficient advertising strategy, keyword forecast, and recommended starting budget."
      />
    </main>
  );
}
