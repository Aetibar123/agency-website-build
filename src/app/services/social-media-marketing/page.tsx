import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title: "Social Media Marketing Services for Businesses | Strategy & Management | Aetibar",
  description:
    "Professional social media marketing and management services for businesses. We handle monthly content planning, custom branded graphics, and transparent performance reporting.",
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
    title: "Social Media Marketing Services for Businesses | Aetibar",
    description:
      "Consistent social media management, monthly content planning, and branded visual design to keep your business engaged with prospective clients.",
    url: "https://www.aetibar.in/services/social-media-marketing",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Social Media Marketing Services for Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Services for Businesses | Aetibar",
    description:
      "Social media marketing, content planning, and branded visual design for growing businesses.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Marketing Services for Businesses",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Social media marketing strategy, monthly editorial content planning, custom branded graphics, and transparent audience engagement reporting for businesses.",
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
        badge="Social Media Marketing &amp; Strategy"
        title="Social Media Marketing &amp; Management for Businesses"
        tagline="Consistent, professional social media management that builds company credibility, engages your market, and drives qualified website traffic."
        description="When potential clients, corporate partners, or job applicants evaluate your company, they inspect your social channels to verify whether your business is active, professional, and trustworthy. We take the stress out of social media by handling editorial planning, clear caption writing, and custom branded visual design—delivering a polished brand presence without pulling you away from running your company."
        icon={<ShareOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Busy Founders & Leadership Teams",
            desc: "Business leaders who recognize the necessity of an active social presence but lack the weekly hours to brainstorm topics, draft captions, and design branded graphics.",
          },
          {
            title: "B2B Companies & Professional Services",
            desc: "Corporate service providers, industrial firms, and consulting practices wanting to showcase client case studies, certifications, and industry expertise on LinkedIn.",
          },
          {
            title: "Consumer Brands & Local Businesses",
            desc: "Retailers, healthcare practices, and service businesses looking to engage regional audiences with educational tips, service highlights, and community updates.",
          },
          {
            title: "Companies with Inactive or Inconsistent Accounts",
            desc: "Businesses whose social media profiles have sat neglected for months, risking client doubts about whether the company is actively operating and thriving.",
          },
        ]}
        problemsAddressed={[
          {
            problem: "Inconsistent posting that makes your business look inactive or abandoned",
            howWeHelp:
              "We establish structured monthly content calendars with predetermined publication dates, ensuring your brand stays consistently active, polished, and top-of-mind all year round.",
          },
          {
            problem: "Amateur, mismatched graphics that undermine corporate credibility",
            howWeHelp:
              "We design custom, high-resolution post templates, infographics, and carousel layouts strictly aligned with your corporate brand guidelines, typography, and color palette.",
          },
          {
            problem: "Losing valuable leadership hours struggling with Canva and captions",
            howWeHelp:
              "Our team manages the entire production cycle from research and copywriting to graphic design and scheduling. Your team simply spends 15 minutes once a month reviewing and approving the calendar.",
          },
          {
            problem: "No clarity on whether social media efforts are generating real value",
            howWeHelp:
              "We deliver transparent monthly reports tracking audience reach, impressions, post engagement, and referral clicks back to your website, showing exactly what resonates with prospective buyers.",
          },
        ]}
        deliverables={[
          {
            title: "Social Media Strategy & Platform Focus",
            desc: "Identifying the specific platforms where your actual buyers spend time and establishing clear communication goals.",
            items: [
              "Platform prioritization (LinkedIn, Instagram, Facebook, X)",
              "Target audience persona definition and messaging tone",
              "Competitor presence audit and differentiation strategy",
              "Defined core content pillars and posting frequency schedule",
            ],
          },
          {
            title: "Monthly Editorial Content Planning",
            desc: "A collaborative monthly content calendar mapping out post themes, captions, calls-to-action, and publication dates in advance.",
            items: [
              "Full monthly calendar delivered for your team's pre-approval",
              "Client spotlights, educational guides, and service showcases",
              "Clear, compelling copywriting written in natural business English",
              "Strategic hashtag and keyword alignment for discovery",
            ],
          },
          {
            title: "Custom Branded Visual Graphic Design",
            desc: "High-impact visual assets designed to stop the scroll and communicate complex information clearly.",
            items: [
              "Custom branded post templates crafted in Figma",
              "Multi-slide educational carousel graphics",
              "Story and feed image formatting optimized for mobile viewing",
              "High-resolution graphic exports and source design files",
            ],
          },
          {
            title: "Social Profile Optimization & Presentation",
            desc: "Auditing and upgrading your public profiles so first-time visitors immediately understand your value proposition.",
            items: [
              "Compelling bio copy and direct contact links",
              "Custom story highlight covers and pinned post curation",
              "High-resolution banner graphics and profile picture alignment",
              "Direct website and WhatsApp inquiry link integration",
            ],
          },
          {
            title: "Multi-Platform Publishing & Scheduling",
            desc: "Managing the technical aspects of scheduling, tagging, and publishing across your company accounts.",
            items: [
              "Automated scheduling during peak audience engagement windows",
              "Cross-posting optimization tailored to each platform format",
              "Reliable link verification to ensure no broken landing pages",
              "Consistent, dependable publishing cadence",
            ],
          },
          {
            title: "Monthly Performance & Traffic Reporting",
            desc: "Honest, jargon-free monthly summaries detailing how your audience engaged and which posts drove website traffic.",
            items: [
              "Monthly reach, impressions, and engagement rate metrics",
              "Detailed analysis of top-performing content themes",
              "Referral traffic tracking to your website landing pages",
              "Actionable recommendations for the upcoming month's calendar",
            ],
          },
        ]}
        benefits={[
          {
            title: "Unshakeable Professional Credibility",
            desc: "When prospective clients or enterprise partners research your business, they discover active, high-quality posts demonstrating industry competence and real customer results.",
          },
          {
            title: "Save 15+ Hours of Executive Time Each Month",
            desc: "Free your internal team from the distraction of daily content creation, allowing your staff to focus 100% on delivering client services and growing the business.",
          },
          {
            title: "100% Creative Pre-Approval Control",
            desc: "Nothing is ever published to your accounts without your explicit sign-off. You review the monthly content calendar, copy, and visual designs before anything goes live.",
          },
          {
            title: "Drive Qualified Referral Visitors to Your Website",
            desc: "By pairing insightful educational content with clear calls to action, your posts encourage interested followers to visit your website and submit genuine inquiries.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Brand & Audience Alignment",
            desc: "We discuss your target clientele, core services, brand tone, visual guidelines, and select the social platforms that matter most for your business.",
          },
          {
            num: "02",
            title: "Content Pillar & Visual Setup",
            desc: "We establish 4-5 core content pillars and create custom, branded visual templates matching your company logo and brand color palette.",
          },
          {
            num: "03",
            title: "Monthly Calendar & Creative Production",
            desc: "Our team writes professional post copy, designs visual carousels and graphics, and organizes the complete upcoming month's schedule.",
          },
          {
            num: "04",
            title: "Client Review & Sign-Off",
            desc: "We share the monthly calendar for your review. You can suggest edits, swap topics, or approve posts with a single click.",
          },
          {
            num: "05",
            title: "Scheduled Publishing & Monthly Review",
            desc: "We schedule and publish posts at optimal times, monitor reach, and deliver a concise performance report at the end of each month.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question: "Which social media platforms make the most sense for our business?",
            answer:
              "It depends on who buys from you. For B2B companies, industrial manufacturers, and professional services, LinkedIn is by far the most effective platform for reaching corporate decision-makers. For consumer businesses, retail, healthcare, and hospitality, Instagram and Facebook typically drive the highest community engagement. We help you focus your efforts on the 1 or 2 platforms that actually reach your buyers, rather than wasting energy everywhere.",
          },
          {
            question: "Do we get to approve all posts before they go live on our accounts?",
            answer:
              "Yes, absolutely. We prepare the complete monthly content calendar—including captions, hashtags, and graphic designs—several days in advance. Nothing is published until your team has reviewed and given full approval.",
          },
          {
            question: "Do you guarantee follower growth or viral post reach?",
            answer:
              "No. We do not make unrealistic promises about overnight viral fame or artificial follower counts. Our goal is to build an authentic, professional brand presence that establishes trust when prospective clients evaluate your company, and to consistently drive interested prospects to your website.",
          },
          {
            question: "Can social media actually generate customer leads for a B2B business?",
            answer:
              "Yes. When posts highlight real case studies, problem-solving methodologies, and client results, they establish authority. Prospective clients frequently research a company's social presence before reaching out, and strategic posts with clear calls to action consistently direct prospects to book a call or visit your website.",
          },
          {
            question: "What does our team need to provide each month?",
            answer:
              "Very little. In the beginning, we need access to your social accounts, your company logo, and brand guidelines. Each month, sharing photos of completed projects, team updates, or notable company news helps us keep content deeply authentic, while we handle the heavy lifting of writing and design.",
          },
          {
            question: "What is the difference between organic social media and paid advertising?",
            answer:
              "Organic social media management maintains your active public profile, builds long-term brand credibility, and nurtures relationships with people who already know or research your brand. Paid advertising (Google Ads or Meta Ads) actively pushes targeted advertisements in front of new prospective customers who do not know your brand yet to drive immediate inquiries.",
          },
          {
            question: "Are there long-term locked-in contracts?",
            answer:
              "No. We work on straightforward monthly agreements. While social media consistency builds compounding results over 3 to 6 months, we believe our quality of work should earn your ongoing business every month without restrictive lock-in contracts.",
          },
        ]}
        ctaTitle="Ready for a Consistent, Professional Social Media Presence?"
        ctaDescription="Tell us about your business and goals. We'll outline a practical monthly content strategy and design approach for your brand."
      />
    </main>
  );
}
