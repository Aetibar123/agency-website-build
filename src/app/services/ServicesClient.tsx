"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SearchIcon from "@mui/icons-material/Search";
import CampaignIcon from "@mui/icons-material/Campaign";
import PaletteIcon from "@mui/icons-material/Palette";
import CtaSection from "../../components/home/CtaSection";

interface ServiceData {
  id: string;
  num: string;
  slug: string;
  title: string;
  shortName: string;
  badge: string;
  tagline: string;
  summary: string;
  icon: React.ReactNode;
  whatWeBuild: { title: string; desc: string }[];
  whyItMatters: { title: string; desc: string }[];
  technologies: { name: string; role: string }[];
  promise: string;
  bulletHighlights: string[];
}

const servicesData: ServiceData[] = [
  {
    id: "web-dev",
    num: "01",
    slug: "web-development-company-in-udaipur",
    title: "Web Development",
    shortName: "Web Development",
    badge: "CUSTOM WEBSITES & WEB APPS",
    tagline:
      "Custom websites, online stores, and web applications designed around your business.",
    summary:
      "We build websites and web applications around your business requirements—from company websites and online stores to client portals, booking dashboards, and custom business tools. The focus is on clear information, practical user experiences, and a website that your business can maintain and grow.",
    icon: <LanguageIcon sx={{ fontSize: 24 }} />,
    bulletHighlights: [
      "Custom business websites and web applications",
      "E-commerce stores with supported payment integrations",
      "Mobile-friendly layouts and performance-focused development",
    ],
    whatWeBuild: [
      {
        title: "Custom Business Websites",
        desc:
          "Business-focused websites that clearly present your company, services, work, and contact options.",
      },
      {
        title: "Online Stores & E-Commerce",
        desc:
          "E-commerce websites where customers can browse products, place orders, and complete supported payments.",
      },
      {
        title: "Client Portals & Web Applications",
        desc:
          "Private customer areas, booking dashboards, internal tools, and other custom web applications.",
      },
      {
        title: "Website Redesigns & Upgrades",
        desc:
          "Modernize an existing website while considering its content, URLs, performance, and SEO requirements.",
      },
    ],
    whyItMatters: [
      {
        title: "Make It Easier to Contact You",
        desc:
          "Clear calls-to-action, enquiry forms, WhatsApp links, and other contact options give visitors straightforward ways to reach your business.",
      },
      {
        title: "Create a Better Mobile Experience",
        desc:
          "Responsive layouts, optimized assets, and focused navigation make it easier for customers to browse your website from their phones.",
      },
      {
        title: "Keep Greater Control",
        desc:
          "We can structure the project around your own domain, hosting, accounts, and relevant website assets.",
      },
      {
        title: "Build a Strong Search Foundation",
        desc:
          "Clear structure, metadata, internal linking, technical SEO, and performance considerations support better organic search visibility.",
      },
    ],
    technologies: [
      { name: "Next.js", role: "Modern React web development" },
      { name: "React", role: "Interactive user interfaces" },
      { name: "TypeScript", role: "Typed application development" },
      { name: "Node.js", role: "Backend services and APIs" },
      { name: "PostgreSQL", role: "Relational application data" },
    ],
    promise:
      "A website built around your business requirements, with practical user experiences and the technical foundations needed for ongoing growth.",
  },

  {
    id: "mobile-apps",
    num: "02",
    slug: "mobile-app-development-company-in-udaipur",
    title: "Mobile App Development",
    shortName: "Mobile Apps",
    badge: "IOS & ANDROID APPS",
    tagline:
      "Custom mobile apps for customers, field teams, and business workflows.",
    summary:
      "We design and develop mobile applications for iOS and Android around your business requirements—from customer-facing apps for bookings and orders to field tools for job updates, data collection, and delivery operations.",
    icon: <PhoneIphoneIcon sx={{ fontSize: 24 }} />,
    bulletHighlights: [
      "iOS and Android apps using suitable cross-platform approaches",
      "Offline data capture and synchronization where required",
      "Support with Apple App Store and Google Play publishing",
    ],
    whatWeBuild: [
      {
        title: "iPhone & Android Apps",
        desc:
          "Custom mobile applications designed for both iOS and Android, using a suitable development approach for the project.",
      },
      {
        title: "Field Operations & Driver Tools",
        desc:
          "Mobile tools for job updates, photo capture, signatures, location data, and other field workflows.",
      },
      {
        title: "Customer-Facing Apps",
        desc:
          "Apps that allow customers to browse, book, order, pay, and manage their interactions with your business.",
      },
      {
        title: "Offline-Capable Mobile Workflows",
        desc:
          "Apps that can store required information on the device and synchronize it when connectivity becomes available.",
      },
    ],
    whyItMatters: [
      {
        title: "Support Both Major Platforms",
        desc:
          "A suitable cross-platform approach can allow your core application to be developed and maintained across iOS and Android.",
      },
      {
        title: "Keep Field Work Moving",
        desc:
          "Offline-capable workflows can allow teams to capture relevant information even when internet connectivity is unavailable.",
      },
      {
        title: "Connect Office & Field Teams",
        desc:
          "Mobile updates can flow back to your central system, giving office teams better visibility into field activity.",
      },
      {
        title: "Maintain Control of Your App",
        desc:
          "We can publish through your own Apple and Google developer accounts and provide the agreed project files and assets.",
      },
    ],
    technologies: [
      { name: "React Native", role: "Cross-platform mobile development" },
      { name: "TypeScript", role: "Typed application development" },
      { name: "SQLite", role: "Local mobile data storage" },
      { name: "Firebase", role: "Notifications and supported services" },
      { name: "Supabase", role: "Backend and data services" },
    ],
    promise:
      "A mobile application designed around your users and workflows, with iOS and Android support and offline capabilities where required.",
  },

  {
    id: "seo",
    num: "03",
    slug: "seo-company-in-udaipur",
    title: "Search Engine Optimization",
    shortName: "SEO",
    badge: "ORGANIC SEARCH VISIBILITY",
    tagline:
      "Improve your search visibility when customers look for what your business offers.",
    summary:
      "We improve the technical and content foundations that help search engines understand and discover your website. Our SEO work covers technical SEO, keyword research, on-page optimization, local search, Google Business Profile optimization, and useful content.",
    icon: <SearchIcon sx={{ fontSize: 24 }} />,
    bulletHighlights: [
      "Technical SEO and on-page optimization",
      "Local SEO and Google Business Profile optimization",
      "Keyword research, content optimization, and search performance tracking",
    ],
    whatWeBuild: [
      {
        title: "Technical SEO",
        desc:
          "Identify and address crawling, indexing, page structure, performance, and other technical SEO issues.",
      },
      {
        title: "Local SEO",
        desc:
          "Improve your local search presence across Google Search and Google Maps through relevant local optimization.",
      },
      {
        title: "Keyword & Content Optimization",
        desc:
          "Research relevant searches and improve important pages around keywords, topics, and customer search intent.",
      },
      {
        title: "SEO Monitoring & Reporting",
        desc:
          "Track search queries, impressions, clicks, organic traffic, and other available performance signals.",
      },
    ],
    whyItMatters: [
      {
        title: "Build Organic Visibility",
        desc:
          "SEO helps your website become more discoverable for searches relevant to your products and services.",
      },
      {
        title: "Reach Relevant Search Intent",
        desc:
          "Targeting useful searches can help bring visitors who are actively looking for information, solutions, or businesses like yours.",
      },
      {
        title: "Strengthen Local Search",
        desc:
          "Local SEO can help businesses become more visible to customers searching within their service area.",
      },
      {
        title: "Understand Search Performance",
        desc:
          "Clear reporting makes it easier to understand changes in search visibility and identify the next areas for improvement.",
      },
    ],
    technologies: [
      { name: "Google Search Console", role: "Search performance monitoring" },
      { name: "Schema.org JSON-LD", role: "Structured data implementation" },
      { name: "Google Business Profile", role: "Local search presence" },
      { name: "Core Web Vitals", role: "Performance and user experience" },
      { name: "Next.js Metadata", role: "Technical SEO implementation" },
    ],
    promise:
      "Practical SEO focused on technical foundations, relevant search intent, local visibility, useful content, and measurable search performance.",
  },

  {
    id: "social-media",
    num: "04",
    slug: "social-media-marketing-company-in-udaipur",
    title: "Social Media Marketing",
    shortName: "Social Media",
    badge: "SOCIAL MEDIA CONTENT & MANAGEMENT",
    tagline:
      "Consistent content and branded communication that keeps your business visible online.",
    summary:
      "We plan and manage social media content around your business, audience, and brand. From content topics and branded graphics to captions, scheduling, and performance reporting, we help you maintain a professional and active presence across relevant platforms.",
    icon: <CampaignIcon sx={{ fontSize: 24 }} />,
    bulletHighlights: [
      "Monthly content planning and scheduling",
      "Custom branded posts and carousel designs",
      "Platform-specific content and performance reporting",
    ],
    whatWeBuild: [
      {
        title: "Branded Social Content",
        desc:
          "Custom posts, carousels, and other visual content based on your brand identity and communication style.",
      },
      {
        title: "Monthly Content Planning",
        desc:
          "A structured content calendar covering relevant topics, captions, formats, and publishing dates.",
      },
      {
        title: "Platform-Specific Strategy",
        desc:
          "Content adapted to the audience and communication style of platforms such as Instagram, Facebook, and LinkedIn.",
      },
      {
        title: "Performance Reporting",
        desc:
          "Simple reporting covering reach, engagement, profile activity, website clicks, and other available metrics.",
      },
    ],
    whyItMatters: [
      {
        title: "Present a More Professional Brand",
        desc:
          "Consistent visuals and messaging give visitors a clearer picture of your business when they research you online.",
      },
      {
        title: "Save Time on Content",
        desc:
          "We handle content planning, captions, graphics, and scheduling so you don't have to manage the entire process every week.",
      },
      {
        title: "Create More Paths to Enquiries",
        desc:
          "Relevant links and clear calls-to-action can make it easier for interested people to visit your website or contact your business.",
      },
      {
        title: "Keep Your Brand Consistent",
        desc:
          "A consistent visual identity and tone across your selected platforms creates a more cohesive brand presence.",
      },
    ],
    technologies: [
      { name: "Instagram", role: "Visual social content" },
      { name: "Facebook", role: "Local and consumer communication" },
      { name: "LinkedIn", role: "B2B and professional content" },
      { name: "Meta Business Suite", role: "Content management and publishing" },
    ],
    promise:
      "A structured social media workflow covering content planning, branded visuals, publishing, and performance review.",
  },

  {
    id: "paid-advertising",
    num: "05",
    slug: "paid-advertising-company-in-udaipur",
    title: "Paid Advertising",
    shortName: "Paid Ads",
    badge: "GOOGLE & META ADS",
    tagline:
      "Targeted paid campaigns with controlled budgets and clear conversion tracking.",
    summary:
      "We plan, manage, and optimize paid campaigns across Google Ads and Meta Ads, including Instagram and Facebook. We focus on relevant targeting, controlled advertising spend, and tracking measurable actions such as calls, forms, website visits, and WhatsApp enquiries where available.",
    icon: <CampaignIcon sx={{ fontSize: 24 }} />,
    bulletHighlights: [
      "Google Search and Meta advertising campaigns",
      "Keyword, audience, and negative keyword management",
      "Conversion tracking and ongoing campaign optimization",
    ],
    whatWeBuild: [
      {
        title: "Google Search Campaigns",
        desc:
          "Reach people searching for relevant products and services through targeted Google Search campaigns.",
      },
      {
        title: "Instagram & Facebook Ads",
        desc:
          "Promote products, services, and offers across Meta platforms using relevant audience targeting.",
      },
      {
        title: "Conversion Tracking",
        desc:
          "Track measurable actions such as forms, calls, WhatsApp clicks, and other available conversions.",
      },
      {
        title: "Campaign Optimization",
        desc:
          "Review campaign performance and refine keywords, audiences, ads, budgets, and settings based on available data.",
      },
    ],
    whyItMatters: [
      {
        title: "Reach Potential Customers Faster",
        desc:
          "Paid campaigns can provide an additional channel for reaching relevant audiences soon after launch.",
      },
      {
        title: "Keep Ad Spend More Focused",
        desc:
          "Relevant targeting, search-term management, and negative keywords can reduce spend on less relevant traffic.",
      },
      {
        title: "Understand Campaign Performance",
        desc:
          "Conversion tracking helps show which campaigns, ads, keywords, and audiences contribute to measurable actions.",
      },
      {
        title: "Keep Control of Your Accounts",
        desc:
          "Campaigns can be managed through your own Google and Meta accounts, keeping your advertising data and billing information accessible to you.",
      },
    ],
    technologies: [
      { name: "Google Ads", role: "Paid search campaigns" },
      { name: "Meta Ads Manager", role: "Instagram and Facebook advertising" },
      { name: "Google Tag Manager", role: "Conversion tracking setup" },
      { name: "Meta Pixel", role: "Website event tracking" },
    ],
    promise:
      "Structured paid advertising focused on relevant targeting, controlled budgets, measurable conversions, and ongoing optimization.",
  },

  {
    id: "ai-automation",
    num: "06",
    slug: "ai-automation-company-in-udaipur",
    title: "AI Automation",
    shortName: "AI Automation",
    badge: "AI & BUSINESS WORKFLOW AUTOMATION",
    tagline:
      "Automate repetitive work and connect the business tools your team already uses.",
    summary:
      "We build practical automation workflows that connect your existing software and reduce repetitive manual work. This can include lead routing, document data extraction, business reports, AI-assisted responses, and integrations across tools such as WhatsApp, email, spreadsheets, CRM systems, and other supported software.",
    icon: <AutoAwesomeIcon sx={{ fontSize: 24 }} />,
    bulletHighlights: [
      "Automated lead alerts, routing, and follow-up workflows",
      "AI-assisted document processing and customer support",
      "Business software and API integrations",
    ],
    whatWeBuild: [
      {
        title: "Lead Alerts & Routing",
        desc:
          "Organize new enquiries and notify the right team member when leads arrive through supported channels.",
      },
      {
        title: "PDF & Invoice Data Extraction",
        desc:
          "Extract useful information from supported invoices, receipts, PDFs, and other business documents.",
      },
      {
        title: "Business Software Integrations",
        desc:
          "Connect tools such as WhatsApp, email, spreadsheets, CRM systems, payment platforms, and other supported software.",
      },
      {
        title: "AI-Assisted Workflows",
        desc:
          "Use AI for tasks such as document understanding, information retrieval, response drafting, and other defined business workflows.",
      },
    ],
    whyItMatters: [
      {
        title: "Reduce Repetitive Work",
        desc:
          "Automating recurring data entry, notifications, document processing, and reporting can reduce routine administrative work.",
      },
      {
        title: "Handle Enquiries More Efficiently",
        desc:
          "Automated alerts, lead routing, and AI-assisted drafts can help teams notice and manage new enquiries more efficiently.",
      },
      {
        title: "Reduce Manual Data Entry",
        desc:
          "Moving information between connected systems automatically can reduce repetitive copy-pasting and common manual mistakes.",
      },
      {
        title: "Keep People in Control",
        desc:
          "Approval steps, defined permissions, and workflow rules can keep human review involved where important decisions require it.",
      },
    ],
    technologies: [
      { name: "OpenAI & Gemini", role: "AI-powered workflow capabilities" },
      { name: "Node.js", role: "Automation services and APIs" },
      { name: "BullMQ & Redis", role: "Background workflow processing" },
      { name: "Supabase", role: "Database and application services" },
      { name: "REST APIs", role: "Business software integrations" },
    ],
    promise:
      "Practical automation designed around your existing workflows, with AI used where it adds value and human review where it matters.",
  },
];




const faqs = [
  {
    q: "How do we get started on a new project?",
    a: "We start by understanding your business, requirements, goals, and the problem you want to solve. We then discuss the appropriate service, project scope, development or marketing approach, estimated timeline, and pricing before moving forward.",
  },

  {
    q: "Which services does Aetibar provide?",
    a: "We currently provide web development, mobile app development, search engine optimization, social media marketing, paid advertising, and AI automation services. Depending on your requirements, different services can also be combined into a broader digital solution.",
  },

  {
    q: "How long does a project usually take?",
    a: "The timeline depends on the type and scope of the project. A straightforward business website may require less time than an e-commerce platform, mobile application, or custom AI automation workflow. After understanding your requirements, we provide a project-specific timeline rather than using a fixed timeframe for every project.",
  },

  {
    q: "Can you work with our existing website, software, or team?",
    a: "Yes. Where the existing technology and workflow allow it, we can work with your current website, business software, APIs, or internal team. We can also integrate supported tools such as CRMs, spreadsheets, email, WhatsApp, payment systems, and other business platforms.",
  },

  {
    q: "What happens after the project goes live?",
    a: "After launch, we provide the agreed project handover, access, and relevant documentation or guidance. If you need ongoing improvements, maintenance, SEO, marketing, or further automation, we can discuss continued support based on your requirements.",
  },
];


const workingSteps = [
  {
    step: "01",
    title: "Understand Your Requirements",
    desc:
      "We start by understanding your business, goals, audience, existing setup, and the problem you want to solve so the project starts with a clear direction.",
  },

  {
    step: "02",
    title: "Plan the Right Approach",
    desc:
      "We define the scope, key requirements, workflow, technology or marketing approach, and important deliverables based on what your business actually needs.",
  },

  {
    step: "03",
    title: "Build & Implement",
    desc:
      "We develop the required website, app, automation, or marketing setup and keep you involved through relevant reviews and feedback during the project.",
  },

  {
    step: "04",
    title: "Test, Launch & Improve",
    desc:
      "We test the relevant workflows, fix issues, launch the agreed solution, and provide the necessary handover and ongoing support based on the project scope.",
  },
];



export default function ServicesClient() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"what" | "why" | "tools">("what");

  const activeService = servicesData[activeServiceIndex];

  return (
    <Box sx={{ bgcolor: "#FAF9F5", minHeight: "100vh" }}>
      {/* 1. Human-Friendly Editorial Hero */}
      <Box
        sx={{
          pt: { xs: 16, md: 22 },
          pb: { xs: 8, md: 12 },
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "880px" }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                mb: 3,
                px: 1.8,
                py: 0.6,
                borderRadius: "4px",
                bgcolor: "rgba(14, 116, 144, 0.08)",
                border: "1px solid rgba(14, 116, 144, 0.18)",
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#0E7490",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: "#0E7490",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  fontSize: "0.78rem",
                }}
              >
                WHAT WE DO &amp; HOW WE HELP
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                color: "#0E172A",
                fontSize: { xs: "2.35rem", sm: "3.4rem", md: "4.4rem" },
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: { xs: 1.12, md: 1.06 },
                textTransform: "uppercase",
                mb: 3,
              }}
            >
              We help ambitious businesses{" "}
              <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
              <Box component="span" sx={{ color: "#0E7490" }}>
                build, automate &amp; scale.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#4A4D57",
                fontSize: { xs: "1.05rem", md: "1.18rem" },
                lineHeight: 1.8,
                mb: 4,
              }}
            >
            Whether you need a custom website for your business, a mobile app for your customers or field teams, practical AI automation for repetitive work, stronger visibility through SEO, consistent social media content, or targeted Google and Meta advertising—we bring the right digital services together around your business goals.

            </Typography>

            {/* Quick Interactive Jump Bar */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.2,
                alignItems: "center",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#5E6068",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  mr: 1,
                  display: { xs: "none", sm: "inline-block" },
                }}
              >
                QUICK JUMP:
              </Typography>
              {servicesData.map((s, idx) => (
                <Box
                  key={s.id}
                  component="button"
                  onClick={() => {
                    setActiveServiceIndex(idx);
                    setActiveTab("what");
                    const el = document.getElementById("interactive-showcase");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  sx={{
                    px: 1.8,
                    py: 0.8,
                    borderRadius: "6px",
                    border: "1px solid",
                    borderColor: activeServiceIndex === idx ? "#0E7490" : "rgba(17, 18, 21, 0.12)",
                    bgcolor: activeServiceIndex === idx ? "#0E7490" : "#FFFFFF",
                    color: activeServiceIndex === idx ? "#FFFFFF" : "#2C2E35",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.8,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#0E7490",
                      color: activeServiceIndex === idx ? "#FFFFFF" : "#0E7490",
                      bgcolor: activeServiceIndex === idx ? "#0E7490" : "#FAF9F5",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  <span>{s.shortName}</span>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 2. Interactive Studio Showcase */}
      <Box
        id="interactive-showcase"
        sx={{
          bgcolor: "#F2F0EB",
          py: { xs: 10, md: 16 },
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 5, md: 7 } }}>
            <Typography
              variant="caption"
              sx={{
                color: "#0E7490",
                fontWeight: 700,
                letterSpacing: "0.14em",
                display: "block",
                mb: 1.5,
              }}
            >
              INTERACTIVE PRACTICE SHOWCASE
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#0E172A",
                fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.8rem" },
                fontWeight: 600,
                letterSpacing: "-0.025em",
              }}
            >
              Select a Discipline to Explore
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 4, lg: 6 }}>
            {/* Left Column: 6 Interactive Service Selector Cards */}
            <Grid size={{ xs: 12, lg: 4.5 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {servicesData.map((service, idx) => {
                  const isSelected = activeServiceIndex === idx;

                  return (
                    <Box
                      key={service.id}
                      onClick={() => {
                        setActiveServiceIndex(idx);
                        setActiveTab("what");
                      }}
                      sx={{
                        p: { xs: 2.5, sm: 3 },
                        borderRadius: "10px",
                        bgcolor: isSelected ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)",
                        border: "1px solid",
                        borderColor: isSelected ? "#0E7490" : "rgba(17, 18, 21, 0.08)",
                        borderLeft: isSelected ? "4px solid #0E7490" : "1px solid rgba(17, 18, 21, 0.08)",
                        cursor: "pointer",
                        boxShadow: isSelected ? "0 8px 24px rgba(14, 116, 144, 0.08)" : "none",
                        transition: "all 0.25s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                        "&:hover": {
                          bgcolor: "#FFFFFF",
                          borderColor: isSelected ? "#0E7490" : "rgba(14, 116, 144, 0.3)",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: "8px",
                            bgcolor: isSelected ? "rgba(14, 116, 144, 0.1)" : "#F2F0EB",
                            color: isSelected ? "#0E7490" : "#5E6068",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            transition: "all 0.2s ease",
                          }}
                        >
                          {service.icon}
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              color: isSelected ? "#0E7490" : "#5E6068",
                              fontWeight: 700,
                              fontSize: "0.72rem",
                              fontFamily: "monospace",
                              letterSpacing: "0.06em",
                              mb: 0.3,
                            }}
                          >
                            DISCIPLINE // {service.num}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#0E172A",
                              fontWeight: isSelected ? 800 : 700,
                              fontSize: "1.05rem",
                              letterSpacing: "-0.01em",
                              lineHeight: 1.3,
                            }}
                          >
                            {service.shortName}
                          </Typography>
                        </Box>
                      </Box>

                      <ArrowForwardIcon
                        sx={{
                          fontSize: 18,
                          color: isSelected ? "#0E7490" : "#94A3B8",
                          transition: "transform 0.2s ease",
                          transform: isSelected ? "translateX(3px)" : "none",
                        }}
                      />
                    </Box>
                  );
                })}
              </Box>
            </Grid>

            {/* Right Column: The Dynamic Interactive Stage */}
            <Grid size={{ xs: 12, lg: 7.5 }}>
              <Box
                sx={{
                  bgcolor: "#FFFFFF",
                  borderRadius: "14px",
                  border: "1px solid rgba(17, 18, 21, 0.08)",
                  p: { xs: 3.5, sm: 4.5, md: 5 },
                  boxShadow: "0 12px 32px rgba(17, 18, 21, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "100%",
                }}
              >
                <Box>
                  {/* Stage Top Bar */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2,
                      pb: 2.5,
                      borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "4px",
                        bgcolor: "rgba(14, 116, 144, 0.08)",
                        border: "1px solid rgba(14, 116, 144, 0.2)",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#0E7490",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {activeService.badge}
                      </Typography>
                    </Box>

                    <Typography
                      variant="caption"
                      sx={{
                        color: "#5E6068",
                        fontFamily: "monospace",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                      }}
                    >
                      PRACTICE {activeService.num} OF 06
                    </Typography>
                  </Box>

                  {/* Stage Headline & Tagline */}
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#0E172A",
                      fontSize: { xs: "1.5rem", sm: "1.85rem", md: "2.1rem" },
                      fontWeight: 600,
                      letterSpacing: "-0.025em",
                      lineHeight: 1.25,
                      mb: 1.5,
                    }}
                  >
                    {activeService.tagline}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#4A4D57",
                      lineHeight: 1.75,
                      fontSize: "1rem",
                      mb: 3.5,
                    }}
                  >
                    {activeService.summary}
                  </Typography>

                  {/* Interactive Sub-Tabs */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      mb: 3.5,
                      p: 0.6,
                      bgcolor: "#F2F0EB",
                      borderRadius: "8px",
                      width: "fit-content",
                    }}
                  >
                    <Box
                      component="button"
                      onClick={() => setActiveTab("what")}
                      sx={{
                        px: 2,
                        py: 0.8,
                        borderRadius: "6px",
                        border: "none",
                        bgcolor: activeTab === "what" ? "#FFFFFF" : "transparent",
                        color: activeTab === "what" ? "#0E172A" : "#5E6068",
                        fontWeight: activeTab === "what" ? 700 : 600,
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        boxShadow: activeTab === "what" ? "0 2px 8px rgba(17, 18, 21, 0.06)" : "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      ✨ What We Build
                    </Box>
                    <Box
                      component="button"
                      onClick={() => setActiveTab("why")}
                      sx={{
                        px: 2,
                        py: 0.8,
                        borderRadius: "6px",
                        border: "none",
                        bgcolor: activeTab === "why" ? "#FFFFFF" : "transparent",
                        color: activeTab === "why" ? "#0E172A" : "#5E6068",
                        fontWeight: activeTab === "why" ? 700 : 600,
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        boxShadow: activeTab === "why" ? "0 2px 8px rgba(17, 18, 21, 0.06)" : "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      💡 Why It Matters
                    </Box>
                    <Box
                      component="button"
                      onClick={() => setActiveTab("tools")}
                      sx={{
                        px: 2,
                        py: 0.8,
                        borderRadius: "6px",
                        border: "none",
                        bgcolor: activeTab === "tools" ? "#FFFFFF" : "transparent",
                        color: activeTab === "tools" ? "#0E172A" : "#5E6068",
                        fontWeight: activeTab === "tools" ? 700 : 600,
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        boxShadow: activeTab === "tools" ? "0 2px 8px rgba(17, 18, 21, 0.06)" : "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      🛠️ Technologies
                    </Box>
                  </Box>

                  {/* Sub-Tab Content: What We Build */}
                  {activeTab === "what" && (
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                        gap: 2,
                        mb: 4,
                      }}
                    >
                      {activeService.whatWeBuild.map((item, i) => (
                        <Box
                          key={i}
                          sx={{
                            p: 2.2,
                            borderRadius: "8px",
                            bgcolor: "#FAF9F5",
                            border: "1px solid rgba(17, 18, 21, 0.06)",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#0E172A",
                              fontWeight: 700,
                              fontSize: "0.92rem",
                              mb: 0.6,
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#5E6068",
                              fontSize: "0.85rem",
                              lineHeight: 1.55,
                            }}
                          >
                            {item.desc}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {/* Sub-Tab Content: Why It Matters */}
                  {activeTab === "why" && (
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                        gap: 2,
                        mb: 4,
                      }}
                    >
                      {activeService.whyItMatters.map((item, i) => (
                        <Box
                          key={i}
                          sx={{
                            p: 2.2,
                            borderRadius: "8px",
                            bgcolor: "#FAF9F5",
                            border: "1px solid rgba(17, 18, 21, 0.06)",
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.6 }}>
                            <CheckCircleIcon sx={{ color: "#0E7490", fontSize: 18 }} />
                            <Typography
                              sx={{
                                color: "#0E172A",
                                fontWeight: 700,
                                fontSize: "0.92rem",
                              }}
                            >
                              {item.title}
                            </Typography>
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#5E6068",
                              fontSize: "0.85rem",
                              lineHeight: 1.55,
                            }}
                          >
                            {item.desc}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {/* Sub-Tab Content: Technologies */}
                  {activeTab === "tools" && (
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                        gap: 2,
                        mb: 4,
                      }}
                    >
                      {activeService.technologies.map((tool, i) => (
                        <Box
                          key={i}
                          sx={{
                            p: 2.2,
                            borderRadius: "8px",
                            bgcolor: "#FAF9F5",
                            border: "1px solid rgba(17, 18, 21, 0.06)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#0E172A",
                              fontWeight: 700,
                              fontSize: "0.92rem",
                              fontFamily: "monospace",
                            }}
                          >
                            {tool.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#0E7490",
                              fontWeight: 600,
                              fontSize: "0.78rem",
                            }}
                          >
                            {tool.role}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>

                {/* Bottom Result Highlight & Actions */}
                <Box>
                  <Box
                    sx={{
                      p: 2.2,
                      borderRadius: "8px",
                      bgcolor: "rgba(14, 116, 144, 0.05)",
                      border: "1px solid rgba(14, 116, 144, 0.15)",
                      mb: 3.5,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#0E172A",
                        fontWeight: 600,
                        fontSize: "0.88rem",
                        lineHeight: 1.5,
                      }}
                    >
                      <Box component="span" sx={{ color: "#0E7490", fontWeight: 700 }}>
                        The Aetibar Standard:{" "}
                      </Box>
                      {activeService.promise}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 2,
                      alignItems: "center",
                    }}
                  >
                    <Button
                      component={Link}
                      href={`/services/${activeService.slug}`}
                      variant="contained"
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        bgcolor: "#0E172A",
                        color: "#FFFFFF",
                        px: 3.5,
                        py: 1.4,
                        fontSize: "0.92rem",
                        fontWeight: 600,
                        borderRadius: "6px",
                        boxShadow: "0 4px 16px rgba(14, 23, 42, 0.12)",
                        "&:hover": {
                          bgcolor: "#1E293B",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      Explore {activeService.shortName} Full Page
                    </Button>

                    <Button
                      component={Link}
                      href="/contact"
                      variant="outlined"
                      sx={{
                        borderColor: "rgba(17, 18, 21, 0.2)",
                        color: "#0E172A",
                        px: 3,
                        py: 1.4,
                        fontSize: "0.92rem",
                        fontWeight: 600,
                        borderRadius: "6px",
                        "&:hover": {
                          borderColor: "#0E172A",
                          bgcolor: "rgba(14, 23, 42, 0.04)",
                        },
                      }}
                    >
                      Talk With Our Team
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. All 6 Services At A Glance (Clean 3-Column Cards) */}
      <Box sx={{ py: { xs: 12, md: 16 }, borderBottom: "1px solid rgba(17, 18, 21, 0.08)" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", maxWidth: "780px", mx: "auto", mb: { xs: 8, md: 10 } }}>
            <Typography
              variant="caption"
              sx={{
                color: "#0E7490",
                fontWeight: 700,
                letterSpacing: "0.14em",
                display: "block",
                mb: 1.5,
              }}
            >
              ALL PRACTICES AT A GLANCE
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#0E172A",
                fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
                fontWeight: 600,
                letterSpacing: "-0.03em",
                mb: 2.5,
              }}
            >
              Complete Digital Capabilities
            </Typography>
            <Typography variant="body1" sx={{ color: "#4A4D57", lineHeight: 1.75, fontSize: "1.05rem" }}>
              Every service is delivered under our unified standard: senior engineering talent, zero template bloat,
              and 100% intellectual property ownership from day one.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {servicesData.map((service) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={service.id}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: "12px",
                    border: "1px solid rgba(17, 18, 21, 0.08)",
                    p: { xs: 3.5, sm: 4 },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      borderColor: "#0E7490",
                      transform: "translateY(-4px)",
                      boxShadow: "0 16px 36px rgba(14, 116, 144, 0.08)",
                      "& .svc-arrow": {
                        transform: "translateX(4px)",
                        color: "#0E7490",
                      },
                    },
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "8px",
                          bgcolor: "rgba(14, 116, 144, 0.08)",
                          color: "#0E7490",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "monospace",
                          color: "#0E7490",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                        }}
                      >
                        {service.num}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h4"
                      sx={{
                        color: "#0E172A",
                        fontSize: { xs: "1.25rem", md: "1.4rem" },
                        fontWeight: 800,
                        letterSpacing: "-0.015em",
                        mb: 1.2,
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#5E6068",
                        lineHeight: 1.65,
                        fontSize: "0.92rem",
                        mb: 3,
                      }}
                    >
                      {service.summary}
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, mb: 3.5 }}>
                      {service.bulletHighlights.map((highlight, idx) => (
                        <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                          <CheckCircleIcon sx={{ color: "#0E7490", fontSize: 16, mt: "2px", flexShrink: 0 }} />
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#2C2E35",
                              fontSize: "0.82rem",
                              fontWeight: 600,
                              lineHeight: 1.45,
                            }}
                          >
                            {highlight}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Box
                    component={Link}
                    href={`/services/${service.slug}`}
                    sx={{
                      pt: 2.5,
                      borderTop: "1px solid rgba(17, 18, 21, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textDecoration: "none",
                      color: "#0E172A",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "#0E7490",
                      },
                    }}
                  >
                    <span>Explore {service.shortName}</span>
                    <ArrowForwardIcon
                      className="svc-arrow"
                      sx={{ fontSize: 16, transition: "transform 0.2s ease" }}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. Human-Centered Collaboration: How Working With Us Feels */}
      <Box sx={{ bgcolor: "#F2F0EB", py: { xs: 12, md: 16 }, borderBottom: "1px solid rgba(17, 18, 21, 0.08)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "800px", mb: { xs: 6, md: 10 } }}>
            <Typography
              variant="caption"
              sx={{
                color: "#0E7490",
                fontWeight: 700,
                letterSpacing: "0.14em",
                display: "block",
                mb: 1.5,
              }}
            >
              HUMAN-FIRST PARTNERSHIP
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#0E172A",
                fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
                fontWeight: 600,
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              How Working With Us Feels
            </Typography>
            <Typography variant="body1" sx={{ color: "#4A4D57", lineHeight: 1.8, fontSize: "1.05rem" }}>
              We know working with technical agencies can sometimes feel frustrating and impersonal. We do things
              differently—with direct communication, total transparency, and genuine care for your business success.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {workingSteps.map((step) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={step.step}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    p: { xs: 3, sm: 3.5 },
                    borderRadius: "10px",
                    border: "1px solid rgba(17, 18, 21, 0.08)",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#0E7490",
                      fontWeight: 800,
                      fontSize: "1.6rem",
                      fontFamily: "monospace",
                      lineHeight: 1,
                      mb: 2,
                    }}
                  >
                    {step.step}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#0E172A",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      mb: 1.2,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#5E6068", lineHeight: 1.65, fontSize: "0.88rem" }}>
                    {step.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. Interactive Questions & Answers (FAQ) */}
      <Box sx={{ py: { xs: 12, md: 16 }, borderBottom: "1px solid rgba(17, 18, 21, 0.08)" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", maxWidth: "700px", mx: "auto", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="caption"
              sx={{
                color: "#0E7490",
                fontWeight: 700,
                letterSpacing: "0.14em",
                display: "block",
                mb: 1.5,
              }}
            >
              COMMONLY ASKED QUESTIONS
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#0E172A",
                fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
                fontWeight: 600,
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Clear Answers. Zero Fluff.
            </Typography>
            <Typography variant="body1" sx={{ color: "#4A4D57", lineHeight: 1.75 }}>
              Here are straightforward answers to the questions we hear most often from founders and business leaders.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqs.map((faq, idx) => (
              <Accordion
                key={idx}
                defaultExpanded={idx === 0}
                sx={{
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(17, 18, 21, 0.08)",
                  borderRadius: "8px !important",
                  boxShadow: "none",
                  "&:before": { display: "none" },
                  transition: "all 0.2s ease",
                  "&.Mui-expanded": {
                    borderColor: "#0E7490",
                    boxShadow: "0 8px 24px rgba(14, 116, 144, 0.06)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#0E7490" }} />}
                  sx={{
                    px: { xs: 2.5, md: 3.5 },
                    py: 1,
                    "& .MuiAccordionSummary-content": { my: 1.5 },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#0E172A",
                      fontWeight: 700,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                  >
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: { xs: 2.5, md: 3.5 }, pb: 3, pt: 0 }}>
                  <Typography variant="body1" sx={{ color: "#4A4D57", lineHeight: 1.75, fontSize: "0.98rem" }}>
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 6. Global Human-Friendly Call to Action */}
      <CtaSection />
    </Box>
  );
}
