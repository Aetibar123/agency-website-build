import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import { workProjects } from "../../../data/workData";


export const metadata: Metadata = {
  title:
    "Paid Advertising Company in Udaipur | Google Ads & Meta Ads | Aetibar",

  description:
    "Aetibar provides paid advertising services in Udaipur, including Google Ads, Meta Ads, campaign management, audience targeting, conversion tracking, and performance optimization.",

  keywords: [
    "Paid Advertising Company in Udaipur",
    "Google Ads Agency in Udaipur",
    "PPC Company in Udaipur",
    "Meta Ads Management Udaipur",
    "Google Ads Management Udaipur",
    "Performance Marketing Udaipur",
    "Paid Advertising Services",
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
      "https://www.aetibar.in/services/paid-advertising-company-in-udaipur",
  },

  openGraph: {
    title:
      "Paid Advertising Company in Udaipur | Google Ads & Meta Ads | Aetibar",

    description:
      "Paid advertising services covering Google Ads, Meta Ads, campaign management, conversion tracking, and ongoing performance optimization.",

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

    title:
      "Paid Advertising Company in Udaipur | Google Ads & Meta Ads | Aetibar",

    description:
      "Google Ads and Meta advertising services focused on targeted campaigns, conversion tracking, and ongoing optimization.",

    creator: "@Aetibar_",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};




const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paid Advertising Company in Udaipur",
  serviceType: "Paid Advertising Services",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar provides paid advertising services in Udaipur, including Google Ads, Meta Ads, campaign management, audience and keyword targeting, negative keyword management, conversion tracking, and performance optimization.",
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
       
badge="Paid Advertising Services"

title="Paid Advertising Company in Udaipur — "

titleHighlight="Google & Meta Ads for Better Enquiries"

tagline="Targeted Google Search and Meta ad campaigns with controlled budgets, audience targeting, ongoing optimization, and clear conversion tracking."

description="As a paid advertising company in Udaipur, we plan, manage, and optimize campaigns across Google Ads and Meta Ads, including Instagram and Facebook. We focus on reaching relevant audiences, reducing unnecessary ad spend, and tracking meaningful actions such as calls, form submissions, website visits, and other enquiries where proper tracking is available."

        icon={<AdsClickOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
    
whoIsItFor={[
  {
    title: "Businesses Looking for Faster Enquiries",
    desc: "Businesses that want to generate enquiries through paid search and social campaigns instead of relying only on organic visibility that can take time to build.",
  },
  {
    title: "E-Commerce Stores & Brands",
    desc: "Online businesses looking to promote products through Google Shopping, product-focused search campaigns, and Instagram or Facebook advertising.",
  },
  {
    title: "B2B Companies & Suppliers",
    desc: "Manufacturers, suppliers, and professional service businesses looking to reach specific industries, locations, and audience segments through targeted campaigns.",
  },
  {
    title: "Businesses That Have Wasted Ad Spend",
    desc: "Businesses that have run paid campaigns without clear targeting, conversion tracking, search-term management, or regular optimization and want a more structured approach to managing their budget.",
  },
]}


       
problemsAddressed={[
  {
    problem: "Your ad budget is being spent on irrelevant searches and clicks",
    howWeHelp:
      "We research search terms and build relevant negative keyword lists to filter out searches such as jobs, courses, free resources, and other terms that don't match your commercial offering.",
  },
  {
    problem: "You don't know which campaigns are generating meaningful enquiries",
    howWeHelp:
      "We configure conversion tracking for important actions such as form submissions, phone calls, WhatsApp clicks, and other measurable enquiries, helping you understand which campaigns and ads are driving results.",
  },
  {
    problem: "Paid traffic is reaching a landing page that isn't ready to convert",
    howWeHelp:
      "We review the landing page experience for speed, clarity, mobile usability, relevant messaging, and clear calls-to-action so visitors can quickly understand your offer and take the next step.",
  },
  {
    problem: "Ad spending feels difficult to control or understand",
    howWeHelp:
      "We set appropriate campaign budgets, bidding controls, and account-level safeguards while keeping your advertising accounts under your ownership. You pay Google or Meta directly, making your media spend easier to monitor.",
  },
]}

        
deliverables={[
  {
    title: "Google Search & Call Campaigns",
    desc: "Reach people searching for relevant products and services on Google and guide them toward calls, website visits, or other enquiries.",
    items: [
      "Keyword research based on relevance, search intent, and campaign goals",
      "Negative keyword lists to reduce irrelevant searches and clicks",
      "Ad headlines and descriptions aligned with your offers and target audience",
      "Call-focused campaigns and call extensions where supported",
    ],
  },
  {
    title: "Meta Ads for Instagram & Facebook",
    desc: "Promote your products, services, and offers across Instagram and Facebook using audience targeting and visual ad formats.",
    items: [
      "Audience targeting based on location, interests, demographics, and available platform signals",
      "Custom image and carousel creatives adapted to your campaign objectives",
      "Retargeting campaigns for relevant website visitors and engaged audiences",
      "Click-to-WhatsApp campaigns where direct conversations are part of the customer journey",
    ],
  },
  {
    title: "Conversion & Campaign Tracking",
    desc: "Measure the actions that matter to your business and understand how your paid campaigns are performing.",
    items: [
      "Google Tag Manager and relevant conversion tracking setup",
      "Meta Pixel and other available tracking configurations",
      "Tracking for form submissions, phone calls, WhatsApp clicks, and other measurable actions",
      "Performance analysis across campaigns, ads, keywords, and audience segments",
    ],
  },
  {
    title: "Budget Management & Transparent Reporting",
    desc: "Keep your advertising spend organized and make campaign performance easier to monitor.",
    items: [
      "Campaign-level budgets and bidding controls based on your advertising goals",
      "Advertising accounts remain under your ownership and control",
      "Google and Meta ad spend paid directly through your own billing account",
      "Regular reports covering spend, reach, clicks, conversions, and other relevant metrics",
    ],
  },
]}

        
benefits={[
  {
    title: "Reach Potential Customers Faster",
    desc: "Paid campaigns can put your business in front of relevant audiences soon after launch, giving you an additional channel for generating website visits, calls, and enquiries.",
  },
  {
    title: "Make Your Ad Budget More Focused",
    desc: "Relevant targeting, search-term management, and negative keywords help reduce spend on audiences and searches that are less relevant to your products or services.",
  },
  {
    title: "Understand Which Campaigns Drive Action",
    desc: "Conversion tracking helps you see how different campaigns, ads, keywords, and audiences contribute to measurable actions such as calls, form submissions, and WhatsApp enquiries.",
  },
  {
    title: "Keep Control of Your Advertising Accounts",
    desc: "Campaigns can be managed through your own Google and Meta accounts, giving you access to your advertising data, campaign history, audiences, and billing information.",
  },
]}


     
processSteps={[
  {
    num: "01",
    title: "Audience, Goals & Budget Planning",
    desc: "We understand your target customers, service areas, offers, campaign goals, and comfortable advertising budget before deciding where and how to run your campaigns.",
  },
  {
    num: "02",
    title: "Keyword & Audience Research",
    desc: "For Google Ads, we research relevant search terms and identify negative keywords. For Meta Ads, we define suitable audience segments based on location, interests, demographics, and available platform signals.",
  },
  {
    num: "03",
    title: "Ad Copy, Creatives & Tracking Setup",
    desc: "We prepare search ad copy and visual creatives where required, configure the campaigns, and set up conversion tracking for important customer actions.",
  },
  {
    num: "04",
    title: "Campaign Launch & Ongoing Optimization",
    desc: "We launch the campaigns with appropriate budgets and bidding settings, then review performance regularly to refine keywords, audiences, ads, and campaign settings based on available data.",
  },
  {
    num: "05",
    title: "Performance Review & Next Steps",
    desc: "We review spend, traffic, conversions, and other relevant metrics to identify what is performing well, what needs adjustment, and where the next optimization opportunities lie.",
  },
]}


        relevantProjects={relevantProjects}
   
faqs={[
  {
    question: "How much budget should I spend on paid advertising?",
    answer:
      "There is no fixed budget that works for every business. It depends on your industry, target location, competition, average cost per click, offer, and campaign objective. We can help you choose a manageable starting budget that provides enough data to evaluate campaign performance before making larger changes.",
  },
  {
    question: "Who pays Google and Meta for the advertising spend?",
    answer:
      "Your advertising spend is paid directly to Google or Meta through your own billing account. We work within your advertising accounts so you retain access to your campaign data, billing information, and account history.",
  },
  {
    question: "How soon can paid advertising start generating enquiries?",
    answer:
      "Your campaigns can start receiving impressions and clicks soon after they are approved and launched, but the time required to generate enquiries varies by industry, targeting, offer, landing page, competition, and budget. We monitor the initial data and make adjustments based on how the campaigns perform rather than promising a fixed timeframe.",
  },
  {
    question: "Can you advertise on both Google and Instagram/Facebook?",
    answer:
      "Yes. We can manage Google Ads and Meta Ads depending on where your potential customers are most likely to respond. Google is useful for capturing existing search demand, while Meta can help reach and retarget relevant audiences through Instagram and Facebook.",
  },
  {
    question: "Can you track calls, forms, and WhatsApp enquiries?",
    answer:
      "Yes, where the required technical setup and platform capabilities are available. We can configure tracking for actions such as form submissions, phone calls, WhatsApp clicks, and other measurable conversions so campaign performance is easier to evaluate.",
  },
]}


ctaTitle="Ready to Make Your Paid Ads"
ctaTitleHighlight="Work More Effectively?"
ctaDescription="Tell us about your business, target customers, and advertising goals. We'll discuss a practical campaign approach, suitable platforms, and a starting budget based on your requirements."

      />
    </main>
  );
}
