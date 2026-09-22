import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title: "Google Ads & Meta Ads Management Services for Businesses | Aetibar",
  description:
    "Targeted Google Ads and Meta Ads management for businesses. Disciplined budget control, negative keyword filtering, conversion tracking, and transparent reporting.",
  keywords: [
    "Google Ads Management Services",
    "Meta Ads Management for Businesses",
    "PPC Management Services",
    "Paid Advertising Agency in India",
    "Google Search Ads Management",
    "Targeted Facebook & Instagram Ads",
    "Conversion Tracking Setup",
    "B2B PPC Management",
    "Aetibar Paid Advertising",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  alternates: {
    canonical: "https://www.aetibar.in/services/paid-advertising",
  },
  openGraph: {
    title: "Google Ads & Meta Ads Management Services for Businesses | Aetibar",
    description:
      "Targeted Google Ads and Meta Ads management with conversion tracking, disciplined budget control, and transparent reporting.",
    url: "https://www.aetibar.in/services/paid-advertising",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Google Ads and Meta Ads Management Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads & Meta Ads Management Services for Businesses | Aetibar",
    description:
      "Targeted Google Ads and Meta Ads management with reliable conversion tracking and transparent reporting.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads & Meta Ads Management Services for Businesses",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Targeted PPC advertising campaign management across Google Search Ads and Meta Ads with conversion tracking and transparent reporting.",
  url: "https://www.aetibar.in/services/paid-advertising",
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
        badge="Paid Advertising &amp; PPC Management"
        title="Google Ads & Meta Ads Management for Businesses"
        tagline="Targeted advertising campaigns with disciplined budget caps, strict negative keyword filtering, and verified lead tracking."
        description="Paid advertising allows your business to appear immediately in front of prospective customers at the exact second they are searching for your services or products. We set up, manage, and continuously optimize campaigns across Google Ads and Meta (Facebook & Instagram)—focusing on high-intent commercial traffic, negative keyword filtering, verified conversion tracking, and transparent reporting on every rupee of ad spend."
        icon={<AdsClickOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Service Businesses Needing Immediate Leads",
            desc: "Companies that cannot wait months for organic search and need qualified client inquiries from prospects actively searching on Google today.",
          },
          {
            title: "E-Commerce & Digital Product Brands",
            desc: "Online brands wanting to scale profitable transactions through Google Shopping, catalog ads, and targeted Meta campaigns with verified return on ad spend.",
          },
          {
            title: "B2B Companies Targeting Key Decision-Makers",
            desc: "Corporate service providers, industrial manufacturers, and B2B practices seeking to reach specific industries, job titles, and geographical territories.",
          },
          {
            title: "Businesses Burned by Wasted Ad Spend",
            desc: "Companies that previously ran ads without negative keywords, conversion tracking, or budget controls and saw funds drained without generating real inquiries.",
          },
        ]}
        problemsAddressed={[
          {
            problem: "Wasting budget on completely irrelevant clicks and job seekers",
            howWeHelp:
              "We perform rigorous negative keyword filtering before launching, actively blocking terms like 'jobs', 'salary', 'free', and consumer queries so your budget is spent exclusively on paying buyers.",
          },
          {
            problem: "Not knowing which ads produce actual phone calls and customer inquiries",
            howWeHelp:
              "We configure verified conversion tracking using Google Tag Manager and Meta Pixel, recording every website form submission, phone call click, and WhatsApp chat directly back to the originating ad.",
          },
          {
            problem: "Sending expensive paid clicks to slow, low-converting landing pages",
            howWeHelp:
              "Paying for clicks is wasted if the landing page loses visitors. We optimize your destination pages for rapid mobile load speeds, clear value propositions, and frictionless inquiry forms.",
          },
          {
            problem: "Runaway costs and surprise bills from unmanaged automated bidding",
            howWeHelp:
              "We establish hard daily and monthly spending caps inside your advertising accounts. You retain 100% account ownership and pay the platforms directly, guaranteeing total financial transparency.",
          },
        ]}
        deliverables={[
          {
            title: "Campaign Architecture & Account Setup",
            desc: "Structuring clean, well-organized advertising accounts with strict geographic and budget controls.",
            items: [
              "Google Search, Performance Max, and Call-Only campaign configuration",
              "Meta Ads (Facebook and Instagram feed and story placements)",
              "Strict daily and monthly budget caps preventing overspending",
              "Precise geographic radius and language targeting parameters",
            ],
          },
          {
            title: "High-Intent Commercial Keyword Research",
            desc: "Identifying the exact search terms used by prospective buyers actively ready to hire or purchase.",
            items: [
              "Commercial-intent search keyword selection and phrase matching",
              "Comprehensive negative keyword exclusion lists",
              "Audience demographic and interest targeting parameters",
              "Competitor search landscape and ad copy analysis",
            ],
          },
          {
            title: "Persuasive Ad Copywriting & Creative Direction",
            desc: "Writing clear, compelling ad headlines and descriptions that address customer pain points and drive clicks.",
            items: [
              "Clear, honest headlines highlighting your key service benefits",
              "Callout, sitelink, structured snippet, and call extensions",
              "Visual creative alignment for Instagram and Facebook feeds",
              "A/B split testing of ad copy variations to improve click-through rates",
            ],
          },
          {
            title: "Conversion Tracking & Lead Attribution Setup",
            desc: "Engineering verified technical tracking so you know exactly which ads produce inquiries and revenue.",
            items: [
              "Google Tag Manager and Google Analytics 4 event configuration",
              "Meta Pixel and Conversions API implementation",
              "Tracking form submissions, phone call clicks, and WhatsApp starts",
              "Attribution verification to verify lead sources accurately",
            ],
          },
          {
            title: "Destination Landing Page Guidance",
            desc: "Ensuring the website pages visitors arrive on are optimized to turn paid clicks into paying customers.",
            items: [
              "Message match alignment between ad headlines and page content",
              "Mobile responsiveness and page load speed audit",
              "Clear, prominent contact forms and click-to-call buttons",
              "Removal of navigation distractions on conversion pages",
            ],
          },
          {
            title: "Ongoing Bid Optimization & Transparent Reporting",
            desc: "Actively managing search queries and bids every week to reduce cost per lead over time.",
            items: [
              "Weekly search term audits and proactive negative keyword additions",
              "Bid and budget adjustments based on verified conversion data",
              "Eliminating underperforming keywords and ad variations",
              "Monthly reports detailing spend, clicks, inquiries, and cost per lead",
            ],
          },
        ]}
        benefits={[
          {
            title: "Capture High-Intent Prospects Immediately",
            desc: "Connect with prospective clients at the exact moment they need your service, whether they require urgent repairs, specialized B2B consulting, or commercial solutions.",
          },
          {
            title: "100% Control Over Your Advertising Budget",
            desc: "You dictate the exact monthly ad spend you are comfortable with. Daily caps and strict bidding rules ensure your allocated budget is never exceeded.",
          },
          {
            title: "Direct Platform Billing Transparency",
            desc: "You pay Google and Meta directly using your company payment method. There are zero marked-up media costs, third-party cuts, or hidden retainer fees.",
          },
          {
            title: "Clear Visibility on Cost Per Real Lead",
            desc: "With verified conversion tracking, you see the exact cost to acquire each phone call, form inquiry, or order, giving you reliable clarity on your business ROI.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Discovery & Budget Alignment",
            desc: "We discuss your target services, average customer value, profit margins, geographic market, and establish a sensible initial monthly ad spend.",
          },
          {
            num: "02",
            title: "Keyword Research & Negative Filters",
            desc: "We research high-intent commercial keywords, build comprehensive negative keyword exclusion lists, and review competitor ad positioning.",
          },
          {
            num: "03",
            title: "Campaign Build & Tracking Configuration",
            desc: "We write persuasive ad copy, assemble creative assets, configure campaign targeting, and test conversion tracking triggers on your website.",
          },
          {
            num: "04",
            title: "Controlled Launch & Traffic Verification",
            desc: "We launch campaigns with conservative bids, closely monitoring initial search queries and form triggers to ensure zero wasted spend.",
          },
          {
            num: "05",
            title: "Weekly Optimization & Monthly Reporting",
            desc: "We audit search terms weekly, add negative keywords, adjust bids based on conversion results, and provide clear monthly reports.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question: "Do you guarantee a specific number of leads, sales, or ROAS?",
            answer:
              "No. We do not make misleading guarantees about specific lead counts or Return on Ad Spend (ROAS). Ad results depend on real-world market variables—such as your pricing, customer reputation, website offer, and competitor bids. What we do guarantee is disciplined management: rigorous commercial keyword targeting, comprehensive negative keyword filtering, verified conversion tracking, and transparent reporting so you always know where your budget went.",
          },
          {
            question: "How much should our business spend on advertising per month?",
            answer:
              "We recommend beginning with an initial monthly budget that generates sufficient search volume to gather real data without overextending. For most small to mid-sized businesses, starting with ₹15,000 to ₹50,000 per month (or $500 to $2,000 for international markets) provides enough data to identify top-converting keywords and optimize campaigns before scaling.",
          },
          {
            question: "Who pays Google and Meta for the ad spend?",
            answer:
              "You pay the ad platforms directly. We configure your company's credit card or bank account directly within your Google Ads and Meta Ads manager accounts. This ensures 100% financial transparency: you receive official tax invoices directly from Google and Meta, retain complete ownership of your ad accounts, and never pay a media markup.",
          },
          {
            question: "What is the difference between Google Ads and Meta Ads?",
            answer:
              "Google Ads primarily captures 'active intent'—users who are actively searching for a specific service or solution right now. Meta Ads (Facebook & Instagram) captures 'targeted interest'—introducing your brand and visual creative to prospective buyers based on their demographics, job titles, interests, and past behavior.",
          },
          {
            question: "Why is conversion tracking so essential?",
            answer:
              "Without conversion tracking, you only know how many clicks you bought, but have no idea which clicks resulted in real phone calls, form inquiries, or sales. Conversion tracking connects inquiries directly to the keyword and ad that generated them, allowing us to invest more into what works and eliminate what wastes money.",
          },
          {
            question: "Does our website need to be updated before running ads?",
            answer:
              "If your website is slow, confusing, or broken on mobile, running ads will waste your budget because visitors will bounce. Before launching any campaign, we evaluate your destination landing pages and provide practical recommendations—such as adding clear WhatsApp buttons, simplifying contact forms, or fixing load speed—to ensure high conversion rates.",
          },
          {
            question: "How quickly do we see results from paid advertising?",
            answer:
              "Unlike SEO which requires months to build authority, paid ads begin generating traffic within hours of campaign activation. The first 2 to 3 weeks are spent testing search queries, eliminating negative keywords, and calibrating bids, after which campaigns typically stabilize into a predictable inquiry flow.",
          },
        ]}
        ctaTitle="Ready to Launch Targeted Ads That Generate Inquiries?"
        ctaDescription="Tell us about your business goals and service offerings. We'll conduct an honest market analysis, review search volume, and recommend a realistic starting strategy."
      />
    </main>
  );
}
