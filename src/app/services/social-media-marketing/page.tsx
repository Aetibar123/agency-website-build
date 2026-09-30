import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title: "Social Media Marketing Services for Businesses | Strategy & Management | Aetibar",
  description:
    "Professional social media management and marketing for businesses. Monthly content planning, custom branded graphics, and transparent growth reporting.",
  keywords: [
    "Social Media Marketing Services",
    "Social Media Management for Businesses",
    "B2B Social Media Marketing",
    "Social Media Content Planning",
    "Corporate Social Media Strategy",
    "Branded Social Media Design",
    "Social Media Marketing Agency in India",
    "LinkedIn Marketing for Businesses",
    "Aetibar Social Media",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  alternates: {
    canonical: "https://www.aetibar.in/services/social-media-marketing",
  },
  openGraph: {
    title: "Social Media Marketing & Management for Businesses | Aetibar",
    description:
      "Consistent, professional social media management that builds company credibility, engages your market, and drives qualified website traffic.",
    url: "https://www.aetibar.in/services/social-media-marketing",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Social Media Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing & Management for Businesses | Aetibar",
    description:
      "Consistent, professional social media management that builds brand credibility and drives traffic.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Marketing and Management Services for Businesses",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Social media strategy, monthly editorial planning, custom branded graphic design, and performance tracking across LinkedIn, Instagram, and Facebook.",
  url: "https://www.aetibar.in/services/social-media-marketing",
};

export default function SocialMediaMarketingServicePage() {
  const relevantProjects = workProjects.filter((p) =>
    ["rebranding-fintech-identity", "dtc-brand-scaling"].includes(p.slug)
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        badge="Social Media Marketing"
        title="Social Media Marketing for Businesses —"
        titleHighlight="Look Active, Reputable & Trustworthy."
        tagline="Consistent monthly content planning, custom branded graphics, and clear copywriting that turns casual viewers into loyal customers."
        description="When prospective clients, partners, or job candidates hear about your business, they immediately look up your Instagram and LinkedIn. If your last post was 6 months ago, or your graphics look amateur, they wonder if you're still in business. We take the hassle out of social media by handling topic planning, custom branded visuals, and clear captions so you always look like an industry leader without having to spend hours on Canva."
        icon={<ShareOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Busy Founders & Owners",
            desc: "You recognize the need for an active social presence, but you simply don't have weekly hours to brainstorm topics and design posts.",
          },
          {
            title: "B2B Companies & Firms",
            desc: "Corporate service providers, industrial firms, and consultancies wanting to showcase client case studies and industry expertise on LinkedIn.",
          },
          {
            title: "Local Brands & Retail Stores",
            desc: "Clinics, shops, and service businesses looking to engage regional buyers with educational tips, product highlights, and community updates.",
          },
          {
            title: "Companies with Dormant Profiles",
            desc: "Businesses whose profiles have sat untouched for months, making clients question whether the company is actively operating.",
          },
        ]}
        problemsAddressed={[
          {
            problem: "Empty or inactive social media profiles make your business look closed",
            howWeHelp:
              "We plan a structured monthly calendar with scheduled posting dates, ensuring your brand stays consistently active, fresh, and top-of-mind all year round.",
          },
          {
            problem: "Amateur, mismatched graphics that hurt your company's credibility",
            howWeHelp:
              "We create custom, high-resolution templates, carousel graphics, and post artwork strictly designed in your company brand colors, fonts, and style.",
          },
          {
            problem: "Wasting hours struggling to write captions and fiddle with Canva",
            howWeHelp:
              "Our team handles the research, copywriting, design, and scheduling. You only need to spend 15 minutes once a month to review and approve the posts.",
          },
          {
            problem: "Zero clarity on whether social media is actually helping your business",
            howWeHelp:
              "We deliver simple monthly reports tracking reach, engagement, follower growth, and clicks to your website so you see exactly what's working.",
          },
        ]}
        deliverables={[
          {
            title: "Custom Branded Post Graphics & Carousels",
            desc: "Clean, eye-catching visual designs tailored to your brand colors and style that stand out in crowded feeds.",
            items: [
              "Custom visual design templates matching your logo and colors",
              "High-engagement multi-slide carousels and infographics",
              "High-resolution formatting optimized for Instagram and LinkedIn",
              "Polished highlight covers, banners, and profile branding",
            ],
          },
          {
            title: "Monthly Content Calendar & Post Planning",
            desc: "Every post planned, written, and scheduled 3 to 4 weeks in advance with your full approval.",
            items: [
              "Monthly content roadmap based on your services and seasonal events",
              "Clear, friendly captions written in easy spoken English",
              "Strategic hashtags and location tags for higher local reach",
              "Full client review and easy one-click approval before posting",
            ],
          },
          {
            title: "Platform Strategy (LinkedIn for B2B & Instagram)",
            desc: "Focusing strictly on the platforms where your actual buyers spend their time.",
            items: [
              "LinkedIn profile and company page growth for B2B sales",
              "Instagram & Facebook feed and story engagement for retail/services",
              "Highlighting customer testimonials, behind-the-scenes, and results",
              "Bio and profile optimization to direct viewers to your WhatsApp",
            ],
          },
          {
            title: "Simple Monthly Growth & Traffic Reports",
            desc: "Clear updates showing how your audience is growing and how many people clicked through to your website.",
            items: [
              "Monthly summary of post reach, likes, shares, and impressions",
              "Tracking profile visits and click-throughs to your website and WhatsApp",
              "Identification of top-performing post topics for future planning",
              "No vanity nonsense—just honest data on what resonates with buyers",
            ],
          },
        ]}
        benefits={[
          {
            title: "Look Professional & Earn Immediate Trust",
            desc: "When clients look you up, they see a vibrant, polished company that takes its reputation seriously.",
          },
          {
            title: "Only 15 Minutes of Your Time Each Month",
            desc: "No more staring at a blank screen wondering what to post. We handle everything and you simply approve it.",
          },
          {
            title: "Turn Followers into Direct WhatsApp Leads",
            desc: "Strategic calls-to-action in posts invite interested viewers to tap your link and message your business directly.",
          },
          {
            title: "Consistent Brand Voice Across Every Screen",
            desc: "Build authority in your industry with clean, consistent typography and colors that make your brand memorable.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Brand & Audience Discovery",
            desc: "We review your brand guidelines, core offerings, customer questions, and ideal client profiles.",
          },
          {
            num: "02",
            title: "Custom Visual Templates",
            desc: "We design a suite of custom branded post templates, carousels, and stories matching your exact color scheme.",
          },
          {
            num: "03",
            title: "Monthly Content Calendar",
            desc: "We research topics, write friendly captions, pair them with graphics, and share the monthly plan for your review.",
          },
          {
            num: "04",
            title: "Publishing & Scheduling",
            desc: "Once you approve the calendar, we schedule and publish all posts at peak engagement times.",
          },
          {
            num: "05",
            title: "Monthly Review & Insights",
            desc: "We send a simple monthly roundup showing top-performing content and plan the next month based on real data.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question: "How much of my time will this take every month?",
            answer:
              "Only about 15 to 20 minutes! At the end of each month, we send you the complete calendar for the upcoming month with all graphics and captions ready. You review it, request any edits if needed, and give the green light.",
          },
          {
            question: "Do I have to give you my personal social media passwords?",
            answer:
              "No. You can add our team as authorized content managers or editors through official Meta Business Suite and LinkedIn Page Admin settings without sharing personal login passwords.",
          },
          {
            question: "Which platforms should my business focus on?",
            answer:
              "It depends on what you sell! For B2B companies, industrial firms, and corporate consultancies, LinkedIn is king. For local retail shops, clinics, restaurants, and consumer services, Instagram and Facebook are the most effective.",
          },
        ]}
        ctaTitle="Ready to Upgrade Your Social Media &amp;"
        ctaTitleHighlight="Build Real Brand Authority?"
        ctaDescription="Tell us about your brand and target audience. We'll review your current profiles and propose a custom content plan tailored to your industry."
      />
    </main>
  );
}
