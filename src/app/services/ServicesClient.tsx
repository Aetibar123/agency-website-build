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
    slug: "web-development",
    title: "Web Development & Engineering",
    shortName: "Web Development",
    badge: "CUSTOM WEBSITES & WEB APPS",
    tagline: "Fast, beautiful websites that turn visitors into paying clients.",
    summary:
      "Your website is the digital front door to your business. We build lightning-fast, custom websites and web applications tailored from scratch with Next.js and React—no clunky WordPress templates or fragile page builders.",
    icon: <LanguageIcon sx={{ fontSize: 24 }} />,
    bulletHighlights: [
      "Sub-second page load times on mobile & desktop",
      "100% bespoke code with full intellectual property ownership",
      "Built-in Google SEO foundation and seamless checkout",
    ],
    whatWeBuild: [
      {
        title: "Bespoke Business Websites",
        desc: "Tailor-made from the ground up to tell your brand story and convert prospective clients.",
      },
      {
        title: "Fast E-Commerce Stores",
        desc: "Headless shopping experiences with instant page transitions and frictionless checkout.",
      },
      {
        title: "Custom Web Apps & Portals",
        desc: "Interactive customer portals, internal dashboards, and scalable SaaS platforms.",
      },
      {
        title: "High-Converting Landing Pages",
        desc: "Focused landing experiences engineered to maximize conversion rates on paid ad campaigns.",
      },
    ],
    whyItMatters: [
      {
        title: "Visitors Never Wait",
        desc: "Over 50% of mobile users leave if a site takes more than 3 seconds. Ours load in under a second.",
      },
      {
        title: "You Own 100% of Your Code",
        desc: "No monthly builder subscriptions or restrictive proprietary platforms. Your code is yours forever.",
      },
      {
        title: "Ready for Business Growth",
        desc: "Modular architecture means you can add new features anytime without ever needing to rebuild.",
      },
      {
        title: "Google Loves Clean Code",
        desc: "Search engine bots can index your content effortlessly, giving your organic rankings a major boost.",
      },
    ],
    technologies: [
      { name: "Next.js", role: "Fastest modern React framework" },
      { name: "React", role: "Dynamic interactive components" },
      { name: "TypeScript", role: "Bug-free strict type safety" },
      { name: "Tailwind CSS", role: "Responsive lightweight styling" },
      { name: "Node.js", role: "Scalable backend microservices" },
      { name: "PostgreSQL", role: "Reliable production database" },
    ],
    promise:
      "Sub-second load times, 100% IP ownership from day one, and zero monthly template debt.",
  },
  {
    id: "mobile-apps",
    num: "02",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortName: "Mobile Apps",
    badge: "IOS & ANDROID APPS",
    tagline: "Intuitive mobile apps that your customers love to open every day.",
    summary:
      "We design and develop cross-platform mobile apps for iOS and Android that feel completely native, respond instantly to touch gestures, and continue working smoothly even when your users lose internet connection.",
    icon: <PhoneIphoneIcon sx={{ fontSize: 24 }} />,
    bulletHighlights: [
      "One codebase for both iPhone and Android devices",
      "Offline-first sync so apps never crash without signal",
      "Full guidance through Apple App Store and Google Play publishing",
    ],
    whatWeBuild: [
      {
        title: "Cross-Platform iOS & Android Apps",
        desc: "High-performance applications built with React Native and Flutter for a consistent native feel.",
      },
      {
        title: "Offline-First Mobile Systems",
        desc: "Local data persistence that allows users to work anywhere, smoothly syncing when back online.",
      },
      {
        title: "Real-Time Tracking & Push Alerts",
        desc: "Interactive maps, driver telemetry, and personalized notifications that keep users engaged.",
      },
      {
        title: "App Store Publishing Governance",
        desc: "We handle Apple App Store and Google Play review guidelines to ensure smooth, stress-free approvals.",
      },
    ],
    whyItMatters: [
      {
        title: "Save Time & Development Costs",
        desc: "Building cross-platform means you don't need two separate engineering teams or double the budget.",
      },
      {
        title: "Flawless Performance Everywhere",
        desc: "Whether on an airplane, subway, or weak Wi-Fi, your customers can still use essential features.",
      },
      {
        title: "Delightful User Experience",
        desc: "Smooth 60fps animations and natural gestures make using your app a genuine pleasure.",
      },
      {
        title: "Biometric & Enterprise Security",
        desc: "Face ID, fingerprint authentication, and encrypted local storage protect your users' privacy.",
      },
    ],
    technologies: [
      { name: "React Native", role: "Cross-platform mobile UI" },
      { name: "Flutter", role: "Native compiled mobile apps" },
      { name: "TypeScript", role: "Safe typed application logic" },
      { name: "SQLite", role: "On-device offline database" },
      { name: "Firebase", role: "Real-time sync & notifications" },
      { name: "Supabase", role: "Secure cloud backend" },
    ],
    promise:
      "Single codebase efficiency for iOS and Android, offline-first reliability, and full App Store launch support.",
  },
  {
    id: "ai-automation",
    num: "03",
    slug: "ai-automation",
    title: "Applied AI & Workflow Automation",
    shortName: "AI Automation",
    badge: "SMART AI WORKFLOWS",
    tagline: "Intelligent AI tools that take the repetitive work off your team's plate.",
    summary:
      "AI shouldn't be a confusing gimmick. We build practical AI assistants and automated workflows that answer customer questions 24/7, search your internal documentation, and eliminate hours of manual copy-paste work every week.",
    icon: <AutoAwesomeIcon sx={{ fontSize: 24 }} />,
    bulletHighlights: [
      "24/7 instant AI customer support with zero hallucinations",
      "Private vector search over company documents and manuals",
      "100% private data security—your information is never shared",
    ],
    whatWeBuild: [
      {
        title: "24/7 AI Customer Support Agents",
        desc: "Smart assistants trained strictly on your documentation that give accurate, helpful answers instantly.",
      },
      {
        title: "Private Document Search (RAG)",
        desc: "Ask questions in plain English and instantly get verified citations from your internal files and PDFs.",
      },
      {
        title: "Automated Data & CRM Workflows",
        desc: "Automatically route inbound leads, update CRM records, and trigger follow-ups without manual work.",
      },
      {
        title: "Smart Content & Email Drafting",
        desc: "AI workflows that draft personalized client responses and executive summaries in your brand voice.",
      },
    ],
    whyItMatters: [
      {
        title: "Zero-Hallucination Safety",
        desc: "We set strict deterministic guardrails so the AI only answers with verified company facts.",
      },
      {
        title: "Your Data Remains 100% Private",
        desc: "Your proprietary files and customer conversations are never used to train public models.",
      },
      {
        title: "Hours Back for Your Team",
        desc: "Free your team from answering the same 20 repetitive questions so they can focus on client relationships.",
      },
      {
        title: "Instant Response Across Timezones",
        desc: "Never leave an interested customer waiting overnight for an email response.",
      },
    ],
    technologies: [
      { name: "Claude 3.5 & GPT-4o", role: "Frontier LLM reasoning" },
      { name: "Vector Databases", role: "Semantic context retrieval" },
      { name: "LangChain", role: "Workflow agent orchestration" },
      { name: "Python / FastAPI", role: "Fast secure API endpoints" },
      { name: "pgvector", role: "PostgreSQL vector storage" },
      { name: "Guardrail Filters", role: "Deterministic policy rules" },
    ],
    promise:
      "Deterministic zero-hallucination accuracy, strict data privacy, and dozens of manual hours saved weekly.",
  },
  {
    id: "seo",
    num: "04",
    slug: "search-engine-optimization",
    title: "Technical SEO & Search Growth",
    shortName: "Technical SEO",
    badge: "ORGANIC GOOGLE VISIBILITY",
    tagline: "Get found by high-intent customers when they search for what you do.",
    summary:
      "We help your website climb Google's rankings and stay there. By resolving technical site issues, optimizing speed, and structuring your content with semantic schema, we bring you qualified leads who are already looking to buy.",
    icon: <SearchIcon sx={{ fontSize: 24 }} />,
    bulletHighlights: [
      "100/100 Google Core Web Vitals speed optimization",
      "Safe website migrations with zero lost traffic or rankings",
      "Rich snippet Schema.org markup for maximum Google click-throughs",
    ],
    whatWeBuild: [
      {
        title: "Technical SEO Audits & Code Fixes",
        desc: "We diagnose broken redirects, duplicate metadata, indexation blocks, and code bottlenecks.",
      },
      {
        title: "Safe 301 Website Migrations",
        desc: "Relaunching or rebranding? We preserve your hard-earned rankings so you lose zero traffic.",
      },
      {
        title: "Google Core Web Vitals Speed",
        desc: "We optimize code, images, and fonts so Google awards your platform top-tier performance scores.",
      },
      {
        title: "Structured Schema.org Data",
        desc: "Rich snippet integration so your listings appear with star ratings, FAQs, and price tags on Google.",
      },
    ],
    whyItMatters: [
      {
        title: "Free, Sustainable Organic Traffic",
        desc: "Unlike paid ads that vanish the minute you pause ad spend, organic rankings deliver leads for years.",
      },
      {
        title: "Higher Customer Trust",
        desc: "Potential clients naturally trust businesses that rank at the top of Google organic search.",
      },
      {
        title: "Attract Ready-to-Buy Prospects",
        desc: "Capture people who are actively searching for your exact solutions right in your target markets.",
      },
      {
        title: "Plain-English Progress Reports",
        desc: "Clear monthly updates showing keyword ranking climbs, organic visits, and actual inbound leads.",
      },
    ],
    technologies: [
      { name: "Google Search Console", role: "Indexation & search telemetry" },
      { name: "Schema.org JSON-LD", role: "Semantic structured markup" },
      { name: "Core Web Vitals", role: "Speed & user experience metrics" },
      { name: "Screaming Frog", role: "Deep crawl diagnosis" },
      { name: "Lighthouse", role: "Performance benchmarking" },
      { name: "Next.js Metadata", role: "Dynamic OpenGraph & SEO tags" },
    ],
    promise:
      "Sustainable organic search authority, 100/100 Lighthouse performance, and zero-loss site migrations.",
  },
  {
    id: "marketing",
    num: "05",
    slug: "digital-marketing",
    title: "Performance Marketing & Growth",
    shortName: "Digital Marketing",
    badge: "TARGETED CUSTOMER ACQUISITION",
    tagline: "High-converting ad campaigns that generate real revenue, not just clicks.",
    summary:
      "We manage disciplined advertising campaigns across Google Search, Meta (Instagram & Facebook), and automated email funnels. Every dollar spent is tracked back to real revenue and margins so you know your marketing investment is working.",
    icon: <CampaignIcon sx={{ fontSize: 24 }} />,
    bulletHighlights: [
      "Precision Google & Meta ads targeted to ready-to-buy customers",
      "Automated email & SMS retention flows that sell on autopilot",
      "Transparent revenue attribution—know your exact return on ad spend",
    ],
    whatWeBuild: [
      {
        title: "High-Intent Google Ads",
        desc: "Capture customers the exact moment they search for your services with targeted search campaigns.",
      },
      {
        title: "Meta & Social Advertising",
        desc: "Scroll-stopping video and visual ads on Instagram and Facebook that turn attention into inquiries.",
      },
      {
        title: "Automated Lifecycle Email Funnels",
        desc: "Welcome series, abandoned cart recovery, and client retention flows that nurture prospects automatically.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        desc: "A/B testing headlines, page structure, and calls to action to get more customers from existing traffic.",
      },
    ],
    whyItMatters: [
      {
        title: "Profit Over Vanity Metrics",
        desc: "We don't celebrate useless 'impressions'. We measure booked consultations, sales, and ROAS.",
      },
      {
        title: "Zero Wasted Ad Budget",
        desc: "Rigorous negative keyword filtering and audience exclusions ensure you never pay for low-intent clicks.",
      },
      {
        title: "Automated Repeat Sales",
        desc: "Keep past customers returning with automated email campaigns that cost almost nothing to send.",
      },
      {
        title: "Crystal-Clear Dashboards",
        desc: "Always see exactly what was spent, how many inquiries came in, and what each customer cost.",
      },
    ],
    technologies: [
      { name: "Google Ads", role: "High-intent search & display" },
      { name: "Meta Ads Manager", role: "Targeted social acquisition" },
      { name: "Klaviyo", role: "Automated retention email flows" },
      { name: "Google Analytics 4", role: "Conversion tracking & telemetry" },
      { name: "Server-Side Tracking", role: "Accurate cookieless tracking" },
      { name: "PostHog", role: "User session & funnel analysis" },
    ],
    promise:
      "Verified return on ad spend, conversion-focused messaging, and automated customer retention funnels.",
  },
  {
    id: "design",
    num: "06",
    slug: "graphic-design",
    title: "Brand Systems & UI/UX Design",
    shortName: "Brand & UI/UX Design",
    badge: "BRAND IDENTITY & FIGMA DESIGN",
    tagline: "Memorable brand design that positions your company as an industry leader.",
    summary:
      "Thoughtful design builds immediate trust before a customer reads a single word. We create comprehensive visual brand identities, logo systems, Figma design component libraries, and marketing assets that give your business unmistakable authority.",
    icon: <PaletteIcon sx={{ fontSize: 24 }} />,
    bulletHighlights: [
      "Complete visual brand identity, logos, and typography guidelines",
      "Modular Figma design systems for rapid feature development",
      "Interactive clickable prototypes so you experience the UI on your phone",
    ],
    whatWeBuild: [
      {
        title: "Complete Brand Identity Systems",
        desc: "Logos, color palettes, typography hierarchies, and brand guidelines that keep you consistent everywhere.",
      },
      {
        title: "Figma UI/UX Design Systems",
        desc: "Reusable component tokens that make building new pages and features fast, clean, and cohesive.",
      },
      {
        title: "Interactive Clickable Prototypes",
        desc: "Experience the realistic look and feel of your app on your mobile screen before a developer writes code.",
      },
      {
        title: "Marketing & Digital Assets",
        desc: "Client pitch decks, social media templates, brochures, and digital banners tailored to your brand.",
      },
    ],
    whyItMatters: [
      {
        title: "Commands Premium Pricing",
        desc: "Customers instinctively perceive brands with polished, high-craft design as more trustworthy and valuable.",
      },
      {
        title: "Consistent Brand Experience",
        desc: "From your favicon to your client contracts, your business projects authority and attention to detail.",
      },
      {
        title: "Halves Development Time",
        desc: "Having a structured Figma library allows engineers to build new screens with zero visual ambiguity.",
      },
      {
        title: "Accessible & Readable for Everyone",
        desc: "Carefully calibrated color contrast and typography sizes ensure your site is easy and pleasant to navigate.",
      },
    ],
    technologies: [
      { name: "Figma Enterprise", role: "Design tokens & UI components" },
      { name: "Design Tokens", role: "Seamless code-to-design sync" },
      { name: "Adobe Illustrator", role: "Vector branding & iconography" },
      { name: "Photoshop", role: "High-resolution asset editing" },
      { name: "WCAG 2.1 AA", role: "Universal accessibility compliance" },
      { name: "Interactive Wireframes", role: "User journey mapping" },
    ],
    promise:
      "Modular Figma component systems, clickable interactive prototypes, and timeless brand identity guidelines.",
  },
];

const faqs = [
  {
    q: "How do we get started on a new project?",
    a: "We begin with a friendly, informal 20-minute discovery call to learn about your business goals, timeline, and current challenges. From there, we provide a clear, fixed-price scoping proposal with concrete milestones—no technical jargon or sales pressure.",
  },
  {
    q: "Do I own all the code and design files?",
    a: "Yes, 100%. Once project milestones are completed, you hold full intellectual property ownership of every line of code, Figma design file, database schema, and digital asset. There are zero licensing fees or platform lock-ins.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Most custom web platforms and design systems take between 4 to 8 weeks from initial kickoff to live launch. Mobile applications and complex AI workflows typically take 8 to 12 weeks. We provide clear weekly video updates so you always know where things stand.",
  },
  {
    q: "Can you collaborate with our existing team or tools?",
    a: "Absolutely. We routinely integrate with our clients' existing workflows in Slack, GitHub, Figma, and Jira. We can either lead your project end-to-end or work as an embedded senior engineering partner alongside your in-house team.",
  },
  {
    q: "What happens after our project goes live?",
    a: "We don't disappear after launch. We provide full team training, a 30-day post-launch warranty period, and flexible ongoing maintenance plans to ensure your software remains lightning-fast, secure, and updated with new features as your business grows.",
  },
];

const workingSteps = [
  {
    step: "01",
    title: "Open Discovery & Strategy",
    desc: "We listen carefully to your business goals, target audience, and current frustrations. No confusing jargon—just honest, strategic alignment.",
  },
  {
    step: "02",
    title: "Interactive Prototypes",
    desc: "We craft clickable Figma prototypes so you can touch, test, and refine the user experience on your phone before any code is written.",
  },
  {
    step: "03",
    title: "Bespoke Engineering",
    desc: "Our senior developers build clean, strictly typed code with weekly video walkthroughs so you see real progress every single sprint.",
  },
  {
    step: "04",
    title: "Launch & Lasting Support",
    desc: "We test across every device, optimize for sub-second speeds, handle domain launch, and stand by you with caring ongoing maintenance.",
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
                fontWeight: 800,
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
              Whether you need a custom website that outshines competitors, a mobile app your customers
              love using, smart AI tools that save your team dozens of hours weekly, or organic SEO that
              brings in ready-to-buy leads—we build digital products designed for real business growth.
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
                fontWeight: 800,
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
                      fontWeight: 800,
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
                fontWeight: 800,
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
                fontWeight: 800,
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
                fontWeight: 800,
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
