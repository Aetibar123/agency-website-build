import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import TouchAppOutlinedIcon from "@mui/icons-material/TouchAppOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import SolutionsCta from "../../../components/solutions/SolutionsCta";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Business Website Development | Aetibar",
  },
  description:
    "Aetibar builds custom business websites designed to attract customers, generate enquiries, communicate your services clearly, and support your business workflows.",
  alternates: {
    canonical: "https://www.aetibar.in/solutions/business-website-development",
  },
  openGraph: {
    title: "Custom Business Website Development | Aetibar",
    description:
      "Aetibar builds custom business websites designed to attract customers, generate enquiries, communicate your services clearly, and support your business workflows.",
    url: "https://www.aetibar.in/solutions/business-website-development",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Custom Business Website Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Business Website Development | Aetibar",
    description:
      "Aetibar builds custom business websites designed to attract customers, generate enquiries, communicate your services clearly, and support your business workflows.",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const valueDrivers = [
  {
    title: "Understanding Your Business",
    desc: "Communicates exactly what problems you solve, who you help, and why your approach works without confusing jargon or empty buzzwords.",
    icon: <PsychologyOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Communicating Services & Scope",
    desc: "Organizes your offerings into intuitive service tiers, capabilities, and delivery models so buyers grasp your boundaries effortlessly.",
    icon: <LanguageOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Generating High-Intent Enquiries",
    desc: "Replaces empty contact forms with structured scope intake questions that gather budget, timeline, and project needs upfront.",
    icon: <SendOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Building Credibility & Trust",
    desc: "Demonstrates authentic engineering rigor, real project context, and transparent methodology instead of fabricated social proof.",
    icon: <CheckCircleOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Guiding Customers Toward Action",
    desc: "Guides visitors seamlessly across logical page paths, addressing buyer hesitations and presenting clear next steps.",
    icon: <TouchAppOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Connecting With Operations Tools",
    desc: "Routes incoming prospect inquiries straight to your team's CRM, inbox, or operational dispatch queue the moment they submit.",
    icon: <HubOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
];

const websiteTypes = [
  {
    title: "Company Websites",
    desc: "Authoritative digital presences for established organizations looking to reflect their true market position, culture, and service standards.",
    badge: "Core Brand",
    icon: <BusinessOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Service Business Websites",
    desc: "High-converting platforms for consulting, engineering, professional services, and technical firms requiring qualified lead intake.",
    badge: "Lead Focused",
    icon: <SupportAgentOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Corporate Websites",
    desc: "Structured multi-page architectures built for multi-division companies, investor relations, compliance, and institutional trust.",
    badge: "Institutional",
    icon: <LanguageOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Headless E-Commerce Websites",
    desc: "Fast, responsive digital storefronts built with modern Next.js architecture, custom product discovery, and automated catalog synchronization.",
    badge: "Commerce",
    icon: <StorefrontOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "High-Conversion Landing Pages",
    desc: "Laser-focused landing pages engineered for specific marketing campaigns, flagship service launches, or targeted commercial offerings.",
    badge: "Campaigns",
    icon: <WebAssetOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Content-Driven Business Websites",
    desc: "Publishing-ready business platforms with structured knowledge hubs, technical journals, case studies, and automated search indexing.",
    badge: "Editorial & SEO",
    icon: <ArticleOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
];

const approachPillars = [
  {
    num: "01",
    title: "Business Goals & Buyer Personas",
    desc: "We start by uncovering how your prospective clients evaluate vendors. Every section, headline, and diagram answers real commercial buying objections.",
  },
  {
    num: "02",
    title: "Information Architecture & UX",
    desc: "We organize content so users find what they need in seconds. Navigation paths are structured logically for both busy executives and technical evaluators.",
  },
  {
    num: "03",
    title: "Tailored Conversion Paths",
    desc: "Rather than forcing every visitor into an identical contact form, we build intake flows calibrated to your specific sales and quotation workflows.",
  },
  {
    num: "04",
    title: "Clean Code & Future Scalability",
    desc: "Built with modular Next.js and TypeScript components. As your services grow or your business expands, adding new domains or features requires zero rework.",
  },
];

const journeySteps = [
  {
    step: "01",
    title: "Visitor Arrives & Evaluates",
    desc: "Prospect discovers your website via search, referral, or campaign. Sub-second page delivery and clear visual hierarchy prevent bounce.",
    tag: "Instant Discovery",
  },
  {
    step: "02",
    title: "Understands the Offer",
    desc: "Clear service boundaries and transparent problem framing clarify what you solve without vague marketing buzzwords.",
    tag: "Commercial Clarity",
  },
  {
    step: "03",
    title: "Builds Trust With Evidence",
    desc: "Real project breakdowns, architectural methodologies, and transparent capabilities validate your team's expertise.",
    tag: "Verified Authority",
  },
  {
    step: "04",
    title: "Submits Qualified Intake",
    desc: "Guided intake form collects project scope, current systems, and timeline upfront, saving days of back-and-forth emails.",
    tag: "Structured Intake",
  },
  {
    step: "05",
    title: "Automated System Sync",
    desc: "The enquiry syncs directly with your team's CRM, email distribution, or lead tracking queue with full project context.",
    tag: "Immediate Routing",
  },
  {
    step: "06",
    title: "High-Context Follow-Up",
    desc: "Your sales or advisory team responds with complete understanding of the client's needs, starting the conversation from strength.",
    tag: "Commercial Velocity",
  },
];

const integrations = [
  {
    category: "CRM & Lead Management",
    desc: "HubSpot, Zoho CRM, Salesforce, or custom PostgreSQL databases for organized inbound tracking.",
  },
  {
    category: "Instant Messaging & Chat",
    desc: "WhatsApp Business API, verified direct click-to-chat, and automated response confirmations.",
  },
  {
    category: "Email & Notification Dispatch",
    desc: "Transactional email notifications (Resend, SendGrid), Slack channel webhooks, and team alerts.",
  },
  {
    category: "Calendar & Scheduling",
    desc: "Direct integration with Calendly, Cal.com, or custom booking engines for consultation scheduling.",
  },
  {
    category: "Payment & Invoicing Gateways",
    desc: "Stripe, Razorpay, and direct invoice collection links embedded smoothly into client onboarding flows.",
  },
  {
    category: "Internal Operations Software",
    desc: "Bespoke operational dashboards, ERP APIs, and quoting tools built around your internal team workflows.",
  },
];

const technicalCapabilities = [
  {
    title: "Next.js & React App Architecture",
    desc: "Server-Side Rendering (SSR) and Static Site Generation (SSG) deliver instantaneous initial page loads and superior Core Web Vitals.",
    icon: <SpeedOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    title: "TypeScript & Modular Components",
    desc: "Type-safe engineering guarantees maintainable, bug-resistant code that remains durable as your business scales over years.",
    icon: <IntegrationInstructionsOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    title: "Technical SEO & Schema.org Markup",
    desc: "Semantic HTML5, automated XML sitemaps, JSON-LD structured data, and OpenGraph tags built directly into server-rendered pages.",
    icon: <SearchOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    title: "Mobile-First Responsive UX",
    desc: "Every interaction is thoroughly tested across mobile, tablet, and desktop viewports to ensure seamless touch navigation and readability.",
    icon: <DevicesOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    title: "Secure Edge Hosting & CDN",
    desc: "Edge-cached deployments with automatic SSL, zero server maintenance overhead, and resilience against common web vulnerabilities.",
    icon: <SecurityOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    title: "Headless CMS & Admin Control",
    desc: "Optional headless content management or lightweight markdown workflows that let your team publish articles and updates without touching code.",
    icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
];

const processSteps = [
  {
    num: "01",
    name: "Understand",
    desc: "We analyze your business model, customer buying behavior, competitive positioning, and operational bottlenecks.",
  },
  {
    num: "02",
    name: "Plan",
    desc: "We define page architecture, URL taxonomy, technical SEO foundations, and conversion paths before writing any code.",
  },
  {
    num: "03",
    name: "Design",
    desc: "We craft custom, high-fidelity UI/UX layouts that reflect your brand authority and maintain clarity on mobile screens.",
  },
  {
    num: "04",
    name: "Develop",
    desc: "We engineer lightweight Next.js and TypeScript frontend code with zero page-builder bloat and optimized asset delivery.",
  },
  {
    num: "05",
    name: "Integrate",
    desc: "We connect intake forms to your CRM, email notifications, WhatsApp triggers, analytics, and internal tools.",
  },
  {
    num: "06",
    name: "Test",
    desc: "We conduct rigorous cross-browser testing, mobile responsiveness verification, Core Web Vitals audits, and form validation.",
  },
  {
    num: "07",
    name: "Launch",
    desc: "We coordinate DNS propagation, SSL encryption, Google Search Console verification, and edge caching setup.",
  },
  {
    num: "08",
    name: "Improve",
    desc: "We monitor performance, verify index coverage, and iterate on conversion paths as your offerings evolve.",
  },
];

const verifiedProjects = [
  {
    title: "Nexus E-Commerce",
    type: "Production Build",
    category: "Headless Commerce & Catalog Architecture",
    description:
      "A custom headless eCommerce platform engineered with Next.js for fast initial page loads, structured product discovery, and automated webhook synchronization connecting warehouse stock levels directly to storefront availability.",
    technologies: ["Next.js", "Node.js", "GraphQL", "PostgreSQL", "TypeScript"],
    link: "/work",
  },
  {
    title: "Enterprise Content Architecture",
    type: "Technical Architecture",
    category: "Content Architecture & URL Migration",
    description:
      "A structured technical architecture and edge redirection framework engineered to preserve search engine authority, URL relationships, and metadata integrity during complex platform modernizations.",
    technologies: ["Next.js SSR", "Edge Middleware", "TypeScript", "Schema.org"],
    link: "/work",
  },
  {
    title: "Modular Product UI & Design System",
    type: "Design System",
    category: "Component Library & UI Architecture",
    description:
      "A standardized UI component library and design token framework built to eliminate visual inconsistency, accelerate frontend delivery, and guarantee WCAG AA accessibility compliance across all screens.",
    technologies: ["Figma", "Design Tokens", "WCAG 2.1 AA", "React / MUI"],
    link: "/work",
  },
];

export default function BusinessWebsiteDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Business Website Development",
    serviceType: "Website Development Services",
    description:
      "Aetibar builds custom business websites designed to attract customers, generate enquiries, communicate your services clearly, and support your business workflows.",
    provider: {
      "@type": "Organization",
      name: "Aetibar",
      url: "https://www.aetibar.in",
      logo: "https://www.aetibar.in/logo.jpeg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Udaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
    },
    url: "https://www.aetibar.in/solutions/business-website-development",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Business Website Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Company & Corporate Websites",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Service Business Websites",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Headless E-Commerce Websites",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "High-Conversion Landing Pages",
          },
        },
      ],
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 16, sm: 18, md: 22 },
          pb: { xs: 10, md: 14 },
          background:
            "radial-gradient(120% 75% at 50% 0%, rgba(249, 115, 22, 0.09) 0%, rgba(251, 146, 60, 0.03) 45%, #FFFFFF 85%)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(24, 24, 27, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 24, 27, 0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 960, mx: "auto", textAlign: "center" }}>
            {/* Status Pill */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 2.2,
                py: 0.8,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                backdropFilter: "blur(12px)",
                mb: 3.5,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#F97316",
                  boxShadow: "0 0 10px #F97316",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.825rem" },
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#EA580C",
                  textTransform: "uppercase",
                }}
              >
                SOLUTION DOMAIN 01 &bull; COMMERCIAL DIGITAL PRESENCE
              </Typography>
            </Box>

            {/* Main Primary H1 */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", sm: "3.4rem", md: "4.2rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.035em",
                lineHeight: { xs: 1.15, md: 1.08 },
                mb: 3,
              }}
            >
              Custom Business Website Development
            </Typography>

            {/* Supporting Creative Positioning */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.08rem", md: "1.22rem" },
                color: "#52525B",
                lineHeight: 1.8,
                maxWidth: 820,
                mx: "auto",
                mb: 5,
              }}
            >
              Your website is more than a digital brochure—it is the strategic front door to your business. We design and
              engineer custom business websites built to attract visitors, communicate your offerings with clarity,
              generate qualified enquiries, and connect seamlessly with the operational tools you use to run your company.
            </Typography>

            {/* CTAs */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 2,
                mb: 6,
              }}
            >
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                    color: "#FFFFFF",
                    px: { xs: 3.5, sm: 4.5 },
                    py: { xs: 1.5, sm: 1.6 },
                    borderRadius: "9999px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    boxShadow: "0 10px 28px rgba(234, 88, 12, 0.35)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 14px 34px rgba(234, 88, 12, 0.5)",
                    },
                  }}
                >
                  Discuss Your Project
                </Button>
              </Link>

              <Link href="/work" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#18181B",
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1.5, sm: 1.6 },
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    border: "1px solid rgba(24, 24, 27, 0.18)",
                    bgcolor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(8px)",
                    "&:hover": {
                      bgcolor: "#FAF8F5",
                      borderColor: "rgba(24, 24, 27, 0.35)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  View Our Work
                </Button>
              </Link>
            </Box>

            {/* Core Capability Pillars Strip (Honest, verified attributes) */}
            <Grid
              container
              spacing={2}
              sx={{
                p: 2.5,
                borderRadius: "20px",
                bgcolor: "#FAF8F5",
                border: "1px solid rgba(228, 228, 231, 0.9)",
                textAlign: "left",
              }}
            >
              {[
                { title: "Sub-Second Delivery", desc: "Edge-rendered Next.js architecture minimizes bounce" },
                { title: "Structured Intake", desc: "Interactive qualification forms capture project context" },
                { title: "Zero Plugin Bloat", desc: "Native code guarantees security and long-term stability" },
                { title: "Mobile-First UX", desc: "Engineered for clarity across phone, tablet, and desktop" },
              ].map((item, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                  <Box sx={{ p: 1.5 }}>
                    <Typography sx={{ fontSize: "1.05rem", fontWeight: 700, color: "#18181B", mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.825rem", color: "#52525B", lineHeight: 1.5 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 2. SECTION: MORE THAN A WEBSITE */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                BEYOND THE DIGITAL BROCHURE
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2.5,
              }}
            >
              Your website is more than an online brochure — it is an active business asset
            </Typography>
            <Typography sx={{ fontSize: "1.08rem", color: "#52525B", lineHeight: 1.8 }}>
              Most websites are built as static pages that display marketing slogans but fail when a real buyer attempts
              to understand the business. A professional business website must perform six critical jobs continuously:
              clarifying your offering, establishing undeniable trust, and turning interested visitors into qualified
              leads.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {valueDrivers.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
                <Box
                  sx={{
                    p: { xs: 3.5, sm: 4 },
                    borderRadius: "20px",
                    bgcolor: "#FAF8F5",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#EA580C",
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 30px rgba(24, 24, 27, 0.06)",
                    },
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        bgcolor: "#FFFFFF",
                        border: "1px solid rgba(249, 115, 22, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2.5,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#18181B",
                        letterSpacing: "-0.02em",
                        mb: 1.5,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.7 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. SECTION: BUSINESS WEBSITES WE BUILD */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FAF8F5",
          borderTop: "1px solid rgba(228, 228, 231, 0.8)",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                SOLUTIONS & SCOPE
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2.5,
              }}
            >
              Business websites tailored to your commercial model
            </Typography>
            <Typography sx={{ fontSize: "1.08rem", color: "#52525B", lineHeight: 1.8 }}>
              Different businesses require different digital structures. We build custom websites tailored to specific
              operational models, customer journeys, and commercial goals rather than squeezing your brand into generic
              pre-made templates.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {websiteTypes.map((type, idx) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
                <Box
                  sx={{
                    p: { xs: 3.5, sm: 4 },
                    borderRadius: "20px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#EA580C",
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 30px rgba(24, 24, 27, 0.06)",
                    },
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2.5 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "12px",
                          bgcolor: "rgba(249, 115, 22, 0.08)",
                          border: "1px solid rgba(249, 115, 22, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {type.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          color: "#EA580C",
                          textTransform: "uppercase",
                          bgcolor: "rgba(249, 115, 22, 0.08)",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "9999px",
                        }}
                      >
                        {type.badge}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.28rem",
                        fontWeight: 700,
                        color: "#18181B",
                        letterSpacing: "-0.02em",
                        mb: 1.5,
                      }}
                    >
                      {type.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.7 }}>
                      {type.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. SECTION: BUILT AROUND YOUR BUSINESS */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, lg: 5 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 0.6,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  mb: 2.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#EA580C",
                  }}
                >
                  CUSTOM ARCHITECTURE
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.7rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  mb: 2.5,
                }}
              >
                Built around how your business works — not forced into a template
              </Typography>

              <Typography sx={{ color: "#52525B", lineHeight: 1.8, fontSize: "1.05rem", mb: 3 }}>
                Template-driven websites fail because they force your commercial offerings into someone else&apos;s generic
                layout. When customers visit, they encounter vague stock photography and confusing navigation that hurts
                credibility.
              </Typography>

              <Typography sx={{ color: "#52525B", lineHeight: 1.8, fontSize: "1.05rem", mb: 4 }}>
                We engineer business websites from the ground up: organizing information around real customer questions,
                establishing clear conversion paths, and building an asset that scales as your company grows.
              </Typography>

              <Link href="/how-we-work" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    color: "#18181B",
                    px: 3.5,
                    py: 1.4,
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: "0.92rem",
                    border: "1px solid rgba(24, 24, 27, 0.2)",
                    "&:hover": {
                      borderColor: "#EA580C",
                      bgcolor: "rgba(234, 88, 12, 0.04)",
                    },
                  }}
                >
                  Explore How We Work
                </Button>
              </Link>
            </Grid>

            <Grid size={{ xs: 12, lg: 7 }}>
              <Grid container spacing={3}>
                {approachPillars.map((pillar) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={pillar.num}>
                    <Box
                      sx={{
                        p: 3.5,
                        borderRadius: "20px",
                        bgcolor: "#FAF8F5",
                        border: "1px solid rgba(228, 228, 231, 0.9)",
                        height: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: 800,
                          color: "#EA580C",
                          fontFamily: "monospace",
                          mb: 1.5,
                        }}
                      >
                        PILLAR {pillar.num}
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "#18181B",
                          letterSpacing: "-0.02em",
                          mb: 1.2,
                        }}
                      >
                        {pillar.title}
                      </Typography>
                      <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.7 }}>
                        {pillar.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 5. SECTION: FROM VISIT TO ENQUIRY */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FAF8F5",
          borderTop: "1px solid rgba(228, 228, 231, 0.8)",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                THE BUYER CONVERSION JOURNEY
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2.5,
              }}
            >
              From first visit to qualified commercial enquiry
            </Typography>
            <Typography sx={{ fontSize: "1.08rem", color: "#52525B", lineHeight: 1.8 }}>
              Website visitors do not convert randomly. Conversion happens when page structure, clear service
              positioning, and interactive qualification forms work together to reduce friction at every step of the
              buyer&apos;s decision process.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {journeySteps.map((step) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={step.step}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "20px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                      <Typography
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: 800,
                          color: "#EA580C",
                          fontFamily: "monospace",
                        }}
                      >
                        STEP {step.step}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "#52525B",
                          bgcolor: "rgba(24, 24, 27, 0.05)",
                          px: 1.4,
                          py: 0.4,
                          borderRadius: "9999px",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        {step.tag}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#18181B",
                        letterSpacing: "-0.02em",
                        mb: 1.2,
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.7 }}>
                      {step.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 6. SECTION: WHAT WE CAN CONNECT */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                OPERATIONAL INTEGRATIONS
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2.5,
              }}
            >
              Connecting your website to the tools you run your business with
            </Typography>
            <Typography sx={{ fontSize: "1.08rem", color: "#52525B", lineHeight: 1.8 }}>
              A website should not operate as an isolated silo. We connect your web presence directly with your CRM,
              inbound notification channels, messaging tools, and internal workflows so leads are captured and acted upon
              instantly.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {integrations.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={idx}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "20px",
                    bgcolor: "#FAF8F5",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#18181B",
                      letterSpacing: "-0.02em",
                      mb: 1.2,
                    }}
                  >
                    {item.category}
                  </Typography>
                  <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Contextual Internal Link to Customer & Lead Systems */}
          <Box
            sx={{
              mt: 5,
              p: 3.5,
              borderRadius: "20px",
              bgcolor: "rgba(249, 115, 22, 0.04)",
              border: "1px solid rgba(249, 115, 22, 0.2)",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "1.05rem", fontWeight: 700, color: "#18181B", mb: 0.5 }}>
                Need multi-channel lead routing or custom customer portals?
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", color: "#52525B" }}>
                Explore our dedicated solution for managing inquiries across web, email, and messaging.
              </Typography>
            </Box>
            <Link href="/solutions/crm-lead-management" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  color: "#EA580C",
                  borderColor: "rgba(234, 88, 12, 0.3)",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  px: 3,
                  py: 1,
                  whiteSpace: "nowrap",
                  "&:hover": {
                    borderColor: "#EA580C",
                    bgcolor: "rgba(234, 88, 12, 0.08)",
                  },
                }}
              >
                Customer & Lead Systems
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* 7. SECTION: TECHNICAL FOUNDATION */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FAF8F5",
          borderTop: "1px solid rgba(228, 228, 231, 0.8)",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                ENGINEERING FOUNDATION
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2.5,
              }}
            >
              Modern technology that guarantees speed, security, and visibility
            </Typography>
            <Typography sx={{ fontSize: "1.08rem", color: "#52525B", lineHeight: 1.8 }}>
              We use technology as supporting evidence for real business outcomes. Rather than relying on vulnerable
              WordPress plugins or sluggish site-builders, we engineer custom web solutions with clean modern code that
              remains fast, secure, and easily maintainable.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {technicalCapabilities.map((cap, idx) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "20px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      bgcolor: "rgba(249, 115, 22, 0.08)",
                      border: "1px solid rgba(249, 115, 22, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {cap.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.18rem",
                      fontWeight: 700,
                      color: "#18181B",
                      letterSpacing: "-0.02em",
                      mb: 1.2,
                    }}
                  >
                    {cap.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.7 }}>
                    {cap.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 8. SECTION: OUR WEBSITE DEVELOPMENT PROCESS */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                DEVELOPMENT METHODOLOGY
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2.5,
              }}
            >
              A structured, transparent 8-step development process
            </Typography>
            <Typography sx={{ fontSize: "1.08rem", color: "#52525B", lineHeight: 1.8 }}>
              From initial commercial discovery through post-launch refinement, our step-by-step methodology ensures you
              always know what is being built, why it matters, and when deliverables will go live.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {processSteps.map((step) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={step.num}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    bgcolor: "#FAF8F5",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "#EA580C",
                      fontFamily: "monospace",
                      mb: 1,
                    }}
                  >
                    {step.num}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#18181B",
                      letterSpacing: "-0.02em",
                      mb: 1,
                    }}
                  >
                    {step.name}
                  </Typography>
                  <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.6 }}>
                    {step.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 9. SECTION: RELEVANT WORK */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FAF8F5",
          borderTop: "1px solid rgba(228, 228, 231, 0.8)",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                GENUINE PROJECT WORK
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2.5,
              }}
            >
              Engineered builds and digital presence systems
            </Typography>
            <Typography sx={{ fontSize: "1.08rem", color: "#52525B", lineHeight: 1.8 }}>
              We believe in honest representation. Explore our genuine production builds, technical architectures, and
              design systems built to solve real operational and commercial requirements.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {verifiedProjects.map((proj, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "20px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#EA580C",
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 30px rgba(24, 24, 27, 0.06)",
                    },
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#EA580C",
                          bgcolor: "rgba(249, 115, 22, 0.08)",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "9999px",
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                        }}
                      >
                        {proj.type}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        color: "#18181B",
                        letterSpacing: "-0.02em",
                        mb: 1,
                      }}
                    >
                      {proj.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "#71717A",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        mb: 2,
                      }}
                    >
                      {proj.category}
                    </Typography>

                    <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.7, mb: 3 }}>
                      {proj.description}
                    </Typography>
                  </Box>

                  <Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                      {proj.technologies.map((tech) => (
                        <Typography
                          key={tech}
                          sx={{
                            fontSize: "0.75rem",
                            color: "#52525B",
                            bgcolor: "#FAF8F5",
                            border: "1px solid rgba(228, 228, 231, 0.9)",
                            px: 1.2,
                            py: 0.4,
                            borderRadius: "6px",
                            fontFamily: "monospace",
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>

                    <Link href={proj.link} style={{ textDecoration: "none" }}>
                      <Button
                        variant="text"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                        sx={{
                          color: "#EA580C",
                          fontWeight: 700,
                          p: 0,
                          fontSize: "0.875rem",
                          "&:hover": {
                            bgcolor: "transparent",
                            color: "#C2410C",
                          },
                        }}
                      >
                        View Project Context
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 10. SECTION: CONNECTED SOLUTIONS (Internal Linking Ecosystem) */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                COMPREHENSIVE DIGITAL CAPABILITIES
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2.5,
              }}
            >
              Explore our complementary systems & engineering solutions
            </Typography>
            <Typography sx={{ fontSize: "1.08rem", color: "#52525B", lineHeight: 1.8 }}>
              A business website performs at its peak when connected with coordinated lead pipelines, internal tools, and
              practical automation across your organization.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {[
              {
                title: "CRM & Lead Systems",
                desc: "Turn scattered inquiries across web, email, and WhatsApp into accountable revenue pipelines with automated routing.",
                href: "/solutions/crm-lead-management",
                cta: "Explore CRM & Lead Systems",
              },
              {
                title: "Custom Business Software",
                desc: "Custom operational dashboards, scheduling systems, and workflow applications that eliminate manual bottlenecks.",
                href: "/solutions/custom-business-software",
                cta: "Explore Business Software",
              },
              {
                title: "AI & Practical Automation",
                desc: "Targeted language models, automated data extractors, and webhook bridges where manual repetitive tasks consume team hours.",
                href: "/solutions/ai-automation",
                cta: "Explore AI Automation",
              },
            ].map((sol, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "20px",
                    bgcolor: "#FAF8F5",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#18181B",
                        letterSpacing: "-0.02em",
                        mb: 1.5,
                      }}
                    >
                      {sol.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.7, mb: 3 }}>
                      {sol.desc}
                    </Typography>
                  </Box>

                  <Link href={sol.href} style={{ textDecoration: "none" }}>
                    <Button
                      variant="text"
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                      sx={{
                        color: "#EA580C",
                        fontWeight: 700,
                        p: 0,
                        fontSize: "0.875rem",
                        "&:hover": {
                          bgcolor: "transparent",
                          color: "#C2410C",
                        },
                      }}
                    >
                      {sol.cta}
                    </Button>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 11. FLAGSHIP CTA */}
      <SolutionsCta
        badge="STRATEGIC FRONT DOOR"
        headline="Ready to build a website that actively works for your business?"
        description="Schedule a 30-minute website architecture diagnostic. We will review your current site structure, discuss your customer acquisition goals, and outline a clear development roadmap."
        primaryButtonText="Discuss Your Website Project"
        secondaryButtonText="Explore All Solutions"
        primaryLink="/contact"
        secondaryLink="/solutions"
      />
    </main>
  );
}
