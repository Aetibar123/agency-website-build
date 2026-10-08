import React from "react";
import { Metadata } from "next";
import ServicePageLayout from "../../../components/services/ServicePageLayout";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { workProjects } from "../../../data/workData";


export const metadata: Metadata = {
  title:
    "Social Media Marketing Company in Udaipur | SMM Agency | Aetibar",

  description:
    "Aetibar provides social media marketing services in Udaipur, including content planning, branded creatives, platform strategy, publishing, and performance reporting.",

  keywords: [
    "Social Media Marketing Company in Udaipur",
    "Social Media Marketing Agency in Udaipur",
    "Social Media Management Udaipur",
    "SMM Company in Udaipur",
    "Instagram Marketing Udaipur",
    "Facebook Marketing Udaipur",
    "LinkedIn Marketing Udaipur",
    "Social Media Marketing Services",
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
      "https://www.aetibar.in/services/social-media-marketing-company-in-udaipur",
  },

  openGraph: {
    title:
      "Social Media Marketing Company in Udaipur | SMM Agency | Aetibar",

    description:
      "Professional social media marketing covering content planning, branded visuals, platform-specific strategy, publishing, and performance reporting.",

    url: "https://www.aetibar.in/services/social-media-marketing-company-in-udaipur",

    siteName: "Aetibar",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Social Media Marketing Company in Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Social Media Marketing Company in Udaipur | SMM Agency | Aetibar",

    description:
      "Social media marketing services covering content planning, branded creatives, platform strategy, publishing, and performance reporting.",

    creator: "@Aetibar_",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};




const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Marketing Company in Udaipur",
  serviceType: "Social Media Marketing Services",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar provides social media marketing services in Udaipur, including content planning, branded social media creatives, platform-specific content strategy, publishing, and performance reporting.",
  url: "https://www.aetibar.in/services/social-media-marketing-company-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
};



export default function SocialMediaMarketingServicePage() {
  const relevantProjects = workProjects.filter((p) =>
    ["rebranding-fintech-identity", "dtc-brand-scaling"].includes(p.slug),
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageLayout
        badge="Social Media Marketing Services" 
        title="Social Media Marketing Company in Udaipur — " 
        titleHighlight="Stay Visible & Build Trust"
        tagline="Consistent content planning, branded visuals, and clear messaging that help your business maintain a professional and active presence across social media."
        description="As a social media marketing company in Udaipur, we handle the planning and execution behind your social media presence — from content topics and custom branded graphics to captions and publishing. The goal is simple: keep your business visible, communicate what you offer clearly, and give potential customers a stronger reason to engage with your brand."
        icon={<ShareOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />}
        whoIsItFor={[
          {
            title: "Busy Founders & Owners",
            desc: "You know your business needs a consistent social presence, but don't have the time to plan content, create posts, and manage your profiles every week.",
          },

          {
            title: "B2B Companies & Service Firms",
            desc: "You want to communicate your expertise, share useful industry insights, showcase your work, and maintain a professional presence across the social platforms that matter to your audience.",
          },

          {
            title: "Local Brands & Businesses",
            desc: "Clinics, shops, restaurants, and service businesses looking to stay connected with their local audience through useful content, product or service highlights, and business updates.",
          },

          {
            title: "Businesses with Inactive Profiles",
            desc: "Your social profiles have become inconsistent or inactive, and you want to bring them back with a clear content plan and a more consistent brand presence.",
          },
        ]}
        problemsAddressed={[
          {
            problem:
              "Your social profiles look inactive or haven't been updated regularly",

            howWeHelp:
              "We build a practical monthly content calendar with planned topics and publishing dates, helping your profiles maintain a steady presence without requiring you to manage them every week.",
          },

          {
            problem:
              "Inconsistent visuals make your brand look less professional",

            howWeHelp:
              "We create branded posts, carousels, and other visual content using your established colors, typography, imagery, and overall style so your communication feels more consistent across platforms.",
          },

          {
            problem:
              "You spend too much time thinking about what to post and how to present it",

            howWeHelp:
              "We handle topic research, content writing, graphic creation, and scheduling. You can review the planned content and provide feedback before it goes live.",
          },

          {
            problem:
              "You aren't sure which content is getting attention or driving action",

            howWeHelp:
              "We track useful performance signals such as reach, engagement, profile activity, audience growth, and website clicks where available, then summarize the key findings so you know what deserves more attention.",
          },
        ]}
        deliverables={[
          {
            title: "Custom Branded Posts & Carousels",

            desc: "Professional visual content designed around your brand identity and adapted for the platforms where your audience spends time.",

            items: [
              "Custom post and carousel designs based on your brand guidelines",
              "Educational graphics, promotional creatives, and industry-focused visuals",
              "Platform-appropriate formats for Instagram, Facebook, and LinkedIn",
              "Profile elements such as banners, covers, and highlight designs",
            ],
          },

          {
            title: "Monthly Content Planning & Scheduling",

            desc: "A structured content plan that gives your business a clear direction for what to publish throughout the month.",

            items: [
              "Monthly content calendar based on your services, audience, and relevant occasions",
              "Clear captions written in a tone suited to your brand and customers",
              "Relevant hashtags and location-based tags where appropriate",
              "Content shared for review and approval before publishing",
            ],
          },

          {
            title: "Platform-Specific Content Strategy",

            desc: "We adapt your content approach to the channels that are relevant to your audience instead of treating every platform the same way.",

            items: [
              "LinkedIn content for B2B companies, professionals, and service firms",
              "Instagram and Facebook content for local brands, retail, and service businesses",
              "Showcasing products, services, customer feedback, expertise, and behind-the-scenes content",
              "Profile and bio improvements with relevant website or enquiry links",
            ],
          },

          {
            title: "Monthly Performance Reporting",

            desc: "Simple reporting that helps you understand how your content is performing and which topics are getting more attention.",

            items: [
              "Monthly overview of reach, impressions, likes, comments, and shares",
              "Profile visits and website or enquiry link clicks where available",
              "Review of content themes and posts that performed comparatively well",
              "Practical observations to guide the next month's content plan",
            ],
          },
        ]}
        benefits={[
          {
            title: "Present a More Professional Brand",
            desc: "Consistent visuals, clear messaging, and regularly updated profiles give visitors a more complete picture of your business when they research you online.",
          },

          {
            title: "Save Time on Content Management",
            desc: "Instead of spending your week deciding what to post, writing captions, and preparing graphics, you have a dedicated team handling the content workflow.",
          },

          {
            title: "Create More Paths to Customer Enquiries",
            desc: "Clear calls-to-action and relevant links can make it easier for interested people to visit your website, contact your business, or start a conversation through WhatsApp where appropriate.",
          },

          {
            title: "Keep Your Brand Consistent Across Platforms",
            desc: "A consistent visual identity and tone across your social profiles helps people recognize your business and creates a more cohesive brand experience.",
          },
        ]}
        processSteps={[
          {
            num: "01",
            title: "Brand & Audience Discovery",
            desc: "We review your brand identity, core offerings, target audience, existing profiles, and the topics that matter to your customers.",
          },

          {
            num: "02",
            title: "Content & Visual Direction",
            desc: "We establish the visual style, content themes, formats, and messaging approach that fit your brand and the platforms you use.",
          },

          {
            num: "03",
            title: "Monthly Content Planning",
            desc: "We research relevant topics, write captions, prepare the accompanying visuals, and share the monthly content plan for your review.",
          },

          {
            num: "04",
            title: "Publishing & Scheduling",
            desc: "Once approved, we schedule and publish the content across the selected platforms, using suitable posting times based on the platform and available audience insights.",
          },

          {
            num: "05",
            title: "Performance Review & Next Steps",
            desc: "We review content performance, identify useful patterns and audience responses, and use those insights to inform the next month's content plan.",
          },
        ]}
        relevantProjects={relevantProjects}
        faqs={[
          {
            question:
              "How much of my time will social media management require each month?",

            answer:
              "Your involvement can stay relatively light. We prepare the content plan, captions, and visuals for your review, then make any necessary changes based on your feedback before publishing. The exact time required depends on how much input or revision your business needs.",
          },

          {
            question: "Do I have to share my personal social media passwords?",

            answer:
              "No. Where supported, we can use official business and page management tools to provide the appropriate access to your profiles without requiring your personal login password. The exact setup depends on the platform and account type.",
          },

          {
            question:
              "Which social media platforms should my business focus on?",

            answer:
              "There is no single platform that works best for every business. We consider your audience, industry, goals, existing presence, and the type of content you can realistically maintain. For example, LinkedIn can be useful for B2B and professional services, while Instagram and Facebook may be more relevant for many local and consumer-focused businesses.",
          },

          {
            question:
              "Can you manage content across multiple social platforms?",

            answer:
              "Yes. We can plan and adapt content for multiple platforms where it makes sense for your business. Rather than posting the exact same content everywhere, we consider the format, audience, and communication style of each selected channel.",
          },
        ]}
        ctaTitle="Ready to Strengthen Your Social"
        ctaTitleHighlight="Media Presence?"
        ctaDescription="Tell us about your business, audience, and current social profiles. We'll understand what you're trying to achieve and discuss a practical content approach that fits your brand."
      />
    </main>
  );
}
