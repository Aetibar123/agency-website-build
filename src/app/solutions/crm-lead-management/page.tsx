import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import SolutionsCta from "../../../components/solutions/SolutionsCta";
import CrmFaqAccordion, { FaqItem } from "../../../components/solutions/CrmFaqAccordion";

export const metadata: Metadata = {
  title: {
    absolute: "Custom CRM & Lead Management Systems | Pipeline Automation | Aetibar",
  },
  description:
    "Aetibar builds custom CRM and lead management systems in Udaipur, India, that organize multi-channel inquiries, automate follow-ups, and track sales pipelines accurately.",
  keywords: [
    "custom CRM development",
    "lead management system",
    "sales pipeline management",
    "lead intake automation",
    "inquiry tracking software",
    "digital marketing lead management",
    "custom business software Udaipur",
    "Aetibar Technologies",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "technology",
  classification: "CRM & Lead Management, Custom Software",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.aetibar.in/solutions/crm-lead-management",
  },
  openGraph: {
    title: "Custom CRM & Lead Management Systems | Aetibar",
    description:
      "Aetibar builds custom CRM and lead management systems that organize enquiries, automate follow-ups, and track sales pipelines.",
    url: "https://www.aetibar.in/solutions/crm-lead-management",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Custom CRM & Lead Management Systems | Aetibar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom CRM & Lead Management Systems | Aetibar",
    description:
      "Aetibar builds custom CRM and lead management systems that organize enquiries, automate follow-ups, and track sales pipelines.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    "ICBM": "24.5854, 73.7125",
  },
};

const telemetryHighlights = [
  {
    value: "Multi-Source",
    label: "Centralized Intake",
    desc: "Website forms, WhatsApp, email, and phone in one queue",
  },
  {
    value: "Custom Stages",
    label: "Sales Pipeline Visibility",
    desc: "Milestone tracking tailored to your exact sales process",
  },
  {
    value: "Automated",
    label: "Follow-Up Workflows",
    desc: "Scheduled reminders ensure quotes and leads never go cold",
  },
  {
    value: "100% Owned",
    label: "Zero Per-Seat Licensing",
    desc: "Custom software you own without recurring per-user fees",
  },
];

const problemBreakdown = [
  {
    phase: "01. Dispersed Inbound",
    title: "Inquiries arrive across scattered touchpoints",
    desc: "Prospective customers reach out through website forms, WhatsApp messages, direct emails, phone calls, and social platforms. Without a single destination, messages sit unread on individual phones or bury themselves in separate inboxes.",
    impact: "No single source of truth for new business.",
  },
  {
    phase: "02. Manual Triage",
    title: "Unclear ownership and missed follow-ups",
    desc: "Team members assume someone else responded. Leads sit untouched for hours or days, questions go unanswered, and prospects lose interest while waiting for initial confirmation or qualification.",
    impact: "High-intent opportunities go cold before a rep responds.",
  },
  {
    phase: "03. Disconnected Tracking",
    title: "Spreadsheets fail to track the sales pipeline",
    desc: "Sales tracking relies on manual spreadsheets with conflicting versions. Leadership cannot clearly see how many quotes are pending, who owns each lead, or where deals are stalling.",
    impact: "Zero pipeline forecasting and lost commercial revenue.",
  },
];

const solutionsCapabilities = [
  {
    title: "Lead Management Systems",
    tagline: "Capture, organize, assign, and track leads in one place",
    icon: <HubOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    desc: "A centralized triage queue that consolidates prospect inquiries across all incoming channels. Automated routing assigns ownership to specific team members, prevents duplicate records, and tracks response progress from first touch to qualification.",
  },
  {
    title: "Custom CRM Software",
    tagline: "Customer profiles built around your actual data model",
    icon: <PeopleAltOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    desc: "Instead of wrestling with generic CRM schemas, we build customer record views tracking exactly the information your business needs: interaction timelines, communication logs, quotation history, project notes, and commercial status.",
  },
  {
    title: "Sales Pipeline Management",
    tagline: "Visual stage tracking from new lead to closed deal",
    icon: <ViewKanbanOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    desc: "Clear visual pipeline boards showing every deal's exact stage: New Inquiry, Qualified, Scope & Proposal, Active Follow-Up, In Negotiation, and Won or Lost. Sales reps update deals with one click, giving management real-time visibility.",
  },
  {
    title: "Automated Follow-Up Sequences",
    tagline: "Scheduled reminders that prevent proposals from going cold",
    icon: <NotificationsActiveOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    desc: "When an estimate or proposal is sent, automated reminder workflows prompt sales reps to follow up at scheduled intervals. Automated confirmation emails give prospects instant reassurance while keeping your team accountable.",
  },
  {
    title: "Multi-Channel Lead Capture",
    tagline: "Native webhook and API connections across channels",
    icon: <SendOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    desc: "Connect website forms, WhatsApp Business, customer email accounts, phone logs, and third-party advertising leads directly into your CRM database via real-time webhooks, eliminating manual copy-pasting from inboxes.",
  },
  {
    title: "Customer & Client Portals",
    tagline: "Transparent document exchange and milestone tracking",
    icon: <ContactSupportOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    desc: "For service companies and recurring client relationships, secure web portals allow clients to review submitted briefs, inspect milestone statuses, download project deliverables, and exchange documents without endless email chains.",
  },
];

const pipelineStages = [
  {
    num: "01",
    name: "New Lead",
    desc: "Inbound inquiry received via form, WhatsApp, or email. Normalized, deduplicated, and queued for triage.",
    badge: "Intake",
  },
  {
    num: "02",
    name: "Qualified",
    desc: "Lead requirements, budget range, and timeline evaluated against commercial criteria.",
    badge: "Triage",
  },
  {
    num: "03",
    name: "Proposal Sent",
    desc: "Tailored quotation or scope specification delivered to the prospective client.",
    badge: "Quotation",
  },
  {
    num: "04",
    name: "Follow-Up Active",
    desc: "Structured check-ins and scheduled reminders keep the conversation moving forward.",
    badge: "Nurturing",
  },
  {
    num: "05",
    name: "Negotiation",
    desc: "Final terms, timeline adjustments, or contract revisions reviewed with decision makers.",
    badge: "Closing",
  },
  {
    num: "06",
    name: "Closed Deal",
    desc: "Opportunity won and transitioned to onboarding, or closed with clear rationale for future learning.",
    badge: "Outcome",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Capture",
    action: "Unified Ingestion",
    desc: "Inquiries from website forms, WhatsApp Business, direct emails, and APIs are ingested via real-time webhooks into one central queue.",
  },
  {
    step: "02",
    title: "Organize",
    action: "Customer Records",
    desc: "Lead details, source channel, contact info, and project requirements are structured into a clean, searchable customer profile.",
  },
  {
    step: "03",
    title: "Assign",
    action: "Clear Ownership",
    desc: "Routing rules automatically assign the lead to the appropriate team member based on service area, territory, or availability.",
  },
  {
    step: "04",
    title: "Qualify",
    action: "Stage Assessment",
    desc: "Your team evaluates project scope, timeline, and budget parameters to determine commercial fit and prioritize high-value opportunities.",
  },
  {
    step: "05",
    title: "Follow Up",
    action: "Scheduled Cadence",
    desc: "Automated reminders and task triggers notify representatives to check in, ensuring proposals and questions never stall.",
  },
  {
    step: "06",
    title: "Convert",
    action: "Deal Closing",
    desc: "The opportunity progresses through clear proposal and negotiation stages toward formal agreement and onboarding.",
  },
  {
    step: "07",
    title: "Retain",
    action: "Long-Term Value",
    desc: "Complete customer interaction history, historical quotes, and notes remain archived for long-term support and repeat engagements.",
  },
];

const supportedIntegrations = [
  {
    category: "Website & Landing Page Forms",
    icon: <SendOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
    desc: "Next.js forms, WordPress webhooks, landing pages, and interactive qualification forms feeding leads directly into your database.",
  },
  {
    category: "WhatsApp Business Integration",
    icon: <ChatOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
    desc: "Direct WhatsApp Business API webhook listeners, click-to-chat inquiry tracking, and automated response notifications.",
  },
  {
    category: "Email Infrastructure",
    icon: <EmailOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
    desc: "Transactional email notifications via SendGrid, Resend, or SMTP, with inbound email parsing and automated customer confirmations.",
  },
  {
    category: "Calendar & Scheduling",
    icon: <CalendarMonthOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
    desc: "Direct synchronization with Calendly, Cal.com, or Google Calendar to schedule consultations without back-and-forth emails.",
  },
  {
    category: "Payment & Invoicing Systems",
    icon: <PaymentOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
    desc: "Stripe, Razorpay, or custom invoicing webhooks connecting closed deals directly to initial deposit collection and billing.",
  },
  {
    category: "Internal Operations & ERPs",
    icon: <StorageOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
    desc: "Seamless synchronization with PostgreSQL databases, internal dispatch systems, and operational business software.",
  },
  {
    category: "Analytics & Pipeline Reporting",
    icon: <InsightsOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
    desc: "Real-time reporting on lead source attribution, stage progression speed, and sales conversion rates across your pipeline.",
  },
  {
    category: "Security & Role Access",
    icon: <SecurityOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
    desc: "Granular role-based permissions (RBAC) ensuring sales representatives, managers, and administrators access only relevant records.",
  },
];

const technicalFoundations = [
  {
    title: "Next.js & TypeScript Architecture",
    desc: "Modern, type-safe fullstack web application delivering sub-second page loads, responsive design, and intuitive administrative interfaces.",
    icon: <SpeedOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    title: "PostgreSQL & Supabase Data Layer",
    desc: "Robust relational databases configured with strict relational integrity, indexed queries, and automated daily backups.",
    icon: <StorageOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    title: "REST & Webhook Event Pipelines",
    desc: "Real-time webhook handlers that ingest incoming leads instantly and distribute notifications across your team without delay.",
    icon: <IntegrationInstructionsOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    title: "Role-Based Access Control (RBAC)",
    desc: "Fine-grained permissions segregating administrative settings, sensitive client data, and individual sales queues.",
    icon: <SecurityOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
];

const crmFaqs: FaqItem[] = [
  {
    question: "What is a lead management system?",
    answer:
      "A lead management system is software designed to capture, organize, assign, and track incoming prospect inquiries from the moment they express interest until they convert into paying customers. It replaces scattered inboxes and spreadsheets with a single triage queue, automated routing rules, and clear status tracking.",
  },
  {
    question: "What is the difference between a CRM and a lead management system?",
    answer:
      "A lead management system focuses primarily on the top and middle of your sales funnel: capturing new inquiries, qualifying prospects, assigning leads to reps, and driving timely follow-ups. A CRM (Customer Relationship Management) system encompasses the broader lifecycle, including post-sale customer history, repeat purchases, communication archives, and long-term account management. Aetibar builds unified systems that handle both lead intake and customer management cleanly.",
  },
  {
    question: "Can you build a custom CRM specifically for our company's workflow?",
    answer:
      "Yes. That is our core focus. Rather than forcing your sales team into rigid enterprise templates with hundreds of unused fields, we design the software around your exact sales stages, quotation requirements, custom data fields, and operational handover process.",
  },
  {
    question: "Can you connect website enquiries directly to the CRM?",
    answer:
      "Yes. We configure direct webhook listeners and API connections between your website forms, landing pages, and the CRM database. When a visitor submits an inquiry, the data instantly populates your central triage queue, notifies the appropriate sales rep, and sends an automated confirmation to the client.",
  },
  {
    question: "Can you integrate WhatsApp leads into the system?",
    answer:
      "Yes. We integrate with the official WhatsApp Business API and webhook listeners. Inbound customer chats and inquiries can be logged into your central queue, allowing your team to track WhatsApp leads alongside website and email inquiries with clear ownership and follow-up reminders.",
  },
  {
    question: "Can the CRM match our existing sales stages and qualification process?",
    answer:
      "Yes. We configure the visual sales pipeline stages to reflect how you actually sell—whether you have a fast 3-stage process (Inquiry → Estimate → Closed) or a multi-stakeholder B2B cycle (Discovery → Qualification → Custom Specification → Proposal Sent → Contract Review → Won).",
  },
  {
    question: "Can you integrate our existing third-party software and accounting tools?",
    answer:
      "Yes. We build custom API connectors for transactional email providers (SendGrid, Resend), calendar scheduling (Google Calendar, Calendly), payment gateways (Stripe, Razorpay), accounting systems, and internal databases to ensure data flows smoothly without manual copy-pasting.",
  },
  {
    question: "Can the CRM and lead management system scale as our business grows?",
    answer:
      "Yes. Because we build on modern technologies like Next.js, Node.js, and PostgreSQL, the platform scales efficiently as your lead volume and team size expand. Most importantly, you own the system without paying recurring per-user monthly subscription fees as your headcount increases.",
  },
];

export default function CrmLeadManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.aetibar.in/solutions/crm-lead-management#webpage",
        url: "https://www.aetibar.in/solutions/crm-lead-management",
        name: "Custom CRM & Lead Management Systems | Aetibar",
        description:
          "Aetibar builds custom CRM and lead management systems that organize enquiries, automate follow-ups, track sales pipelines, and fit the way your business works.",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.aetibar.in",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Solutions",
              item: "https://www.aetibar.in/solutions",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Custom CRM & Lead Management Systems",
              item: "https://www.aetibar.in/solutions/crm-lead-management",
            },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.aetibar.in/solutions/crm-lead-management#service",
        name: "Custom CRM & Lead Management Systems",
        provider: {
          "@type": "Organization",
          name: "Aetibar",
          url: "https://www.aetibar.in",
          logo: "https://www.aetibar.in/logo.jpeg",
        },
        serviceType: "Custom CRM Software & Lead Management Development",
        description:
          "Engineering centralized lead intake pipelines, custom sales CRM dashboards, automated follow-up sequences, and dedicated customer portals.",
        areaServed: "Worldwide",
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.aetibar.in/solutions/crm-lead-management#faq",
        mainEntity: crmFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
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
          <Box sx={{ maxWidth: 940, mx: "auto", textAlign: "center" }}>
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
                SOLUTION DOMAIN 02 &bull; CRM &amp; LEAD INFRASTRUCTURE
              </Typography>
            </Box>

            {/* Primary SEO H1 */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.3rem", sm: "3.2rem", md: "4rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.035em",
                lineHeight: { xs: 1.15, md: 1.1 },
                mb: 2,
              }}
            >
              Custom CRM &amp; Lead Management Systems
            </Typography>

            {/* Supporting Creative Subheadline */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.3rem", sm: "1.6rem", md: "1.9rem" },
                fontWeight: 500,
                color: "#18181B",
                letterSpacing: "-0.02em",
                lineHeight: 1.3,
                mb: 3,
              }}
            >
              Turn scattered inquiries into an{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                organized sales pipeline.
              </Box>
            </Typography>

            {/* Business-Focused Explanatory Copy */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.05rem", md: "1.18rem" },
                color: "#52525B",
                lineHeight: 1.8,
                maxWidth: 780,
                mx: "auto",
                mb: 5,
              }}
            >
              When inquiries arrive across WhatsApp, emails, website forms, and spreadsheets, follow-ups slip through
              the cracks. Aetibar builds centralized systems to capture, organize, assign, and follow up with every lead—customized
              specifically around how your company and sales team actually operate.
            </Typography>

            {/* CTA Buttons */}
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

            {/* Quick Capability / Telemetry Strip */}
            <Grid
              container
              spacing={2}
              sx={{
                p: 2.5,
                borderRadius: "20px",
                bgcolor: "#FAF8F5",
                border: "1px solid rgba(228, 228, 231, 0.9)",
                textAlign: "center",
              }}
            >
              {telemetryHighlights.map((stat, idx) => (
                <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                  <Box sx={{ p: 1 }}>
                    <Typography sx={{ fontSize: { xs: "1.25rem", sm: "1.45rem" }, fontWeight: 700, color: "#18181B" }}>
                      {stat.value}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", mb: 0.5 }}>
                      {stat.label}
                    </Typography>
                    <Typography sx={{ fontSize: "0.75rem", color: "#71717A" }}>
                      {stat.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 2. THE BUSINESS PROBLEM: HOW INQUIRIES GET LOST */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="lg">
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
              <WarningAmberOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                THE OPERATIONAL BOTTLENECK
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.9rem", sm: "2.6rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Why traditional lead handling breaks down as your business grows
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Most businesses do not have a lead generation problem—they have a lead retention and triage problem. Here is how inquiries get lost in day-to-day operations:
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {problemBreakdown.map((item, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
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
                      boxShadow: "0 12px 30px rgba(24, 24, 27, 0.05)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: 800,
                        color: "#EA580C",
                        fontFamily: "monospace",
                        letterSpacing: "0.06em",
                        mb: 1.5,
                      }}
                    >
                      {item.phase}
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#18181B",
                        lineHeight: 1.35,
                        mb: 2,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.75, mb: 3 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      pt: 2,
                      borderTop: "1px solid rgba(228, 228, 231, 0.8)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "#EA580C",
                      }}
                    />
                    <Typography sx={{ fontSize: "0.825rem", fontWeight: 600, color: "#18181B" }}>
                      {item.impact}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. HONEST PERSPECTIVE: NOT EVERY BUSINESS NEEDS A COMPLEX CRM */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FAF8F5" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              p: { xs: 4, sm: 6 },
              borderRadius: "24px",
              bgcolor: "#FFFFFF",
              border: "1px solid rgba(249, 115, 22, 0.25)",
              boxShadow: "0 10px 30px rgba(24, 24, 27, 0.04)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                color: "#EA580C",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                mb: 2.5,
              }}
            >
              <BoltOutlinedIcon sx={{ fontSize: 16 }} />
              Our Positioning
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.6rem", sm: "2rem", md: "2.3rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2.5,
              }}
            >
              Not every business needs a complex enterprise CRM.
            </Typography>

            <Typography sx={{ color: "#52525B", lineHeight: 1.85, fontSize: "1.025rem", mb: 3 }}>
              Some global enterprises genuinely require vast suites with dozens of integrated departmental modules. But for many
              growing service companies, agencies, and B2B businesses, off-the-shelf enterprise platforms introduce steep learning curves,
              dozens of mandatory fields that sales reps resist filling out, and compounding per-user monthly subscription fees.
            </Typography>

            <Typography sx={{ color: "#52525B", lineHeight: 1.85, fontSize: "1.025rem", mb: 3 }}>
              When software is overly complicated, team members abandon it and revert to unmonitored spreadsheets and personal chat threads.
              Aetibar builds focused systems designed around your team&apos;s actual workflow: quick intake, clear lead assignment,
              an intuitive pipeline board, and automated follow-ups that keep opportunities moving forward.
            </Typography>

            <Box
              sx={{
                p: 2.5,
                borderRadius: "16px",
                bgcolor: "rgba(249, 115, 22, 0.06)",
                border: "1px solid rgba(249, 115, 22, 0.2)",
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <DoneAllOutlinedIcon sx={{ color: "#EA580C", fontSize: 22 }} />
              <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#18181B" }}>
                Our goal is the right system for your business—not the biggest system available.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 4. MAIN SECTION: WHAT WE BUILD */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
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
                CORE CAPABILITIES
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Concrete CRM &amp; Lead Management Solutions We Build
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Engineered around speed of response, unambiguous team ownership, and commercial sales visibility.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {solutionsCapabilities.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
                <Box
                  sx={{
                    p: { xs: 3.5, sm: 4.5 },
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
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}>
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
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: "1.2rem", fontWeight: 700, color: "#18181B", lineHeight: 1.3 }}>
                          {item.title}
                        </Typography>
                        <Typography sx={{ fontSize: "0.78rem", color: "#EA580C", fontWeight: 700, mt: 0.25 }}>
                          {item.tagline}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.75 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. DEEP DIVE: UNIFIED MULTI-CHANNEL INTAKE */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FAF8F5", borderTop: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, lg: 6 }}>
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
                <HubOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#EA580C",
                  }}
                >
                  INTAKE ARCHITECTURE
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.6rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  mb: 2.5,
                }}
              >
                Consolidate WhatsApp, web forms, and email into one triage queue.
              </Typography>

              <Typography sx={{ color: "#52525B", lineHeight: 1.8, fontSize: "1rem", mb: 3 }}>
                Instead of forcing sales representatives to constantly check different apps and separate inboxes,
                every incoming inquiry is ingested via real-time webhooks into a single accountable intake pipeline.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
                {[
                  "Automated deduplication: Merges multiple inquiries from the same phone number or email.",
                  "Clear ownership assignment: Direct routing to the right specialist based on service line.",
                  "Instant client confirmation: Reassures the customer their message was received without delay.",
                  "Complete source attribution: Track whether leads originated from organic search, ads, or direct referral.",
                ].map((point, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <CheckCircleOutlinedIcon sx={{ color: "#EA580C", fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: "0.925rem", color: "#18181B", fontWeight: 500, lineHeight: 1.6 }}>
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Architecture Diagram Visualization */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: "24px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  boxShadow: "0 14px 40px rgba(24, 24, 27, 0.05)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#EA580C",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    mb: 3,
                  }}
                >
                  HOW MULTI-CHANNEL INTAKE FLOWS
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* Step 1: Channels */}
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "14px",
                      bgcolor: "#FAF8F5",
                      border: "1px dashed rgba(249, 115, 22, 0.35)",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C", mb: 0.5 }}>
                      INBOUND CHANNELS
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, color: "#18181B" }}>
                      Website Forms &bull; WhatsApp Business &bull; Inbound Email &bull; Phone Logs
                    </Typography>
                  </Box>

                  {/* Flow Arrow */}
                  <Typography sx={{ textAlign: "center", color: "#EA580C", fontWeight: 800, fontSize: "1.1rem" }}>
                    &darr;
                  </Typography>

                  {/* Step 2: Central Queue */}
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "14px",
                      bgcolor: "rgba(249, 115, 22, 0.08)",
                      border: "1px solid rgba(249, 115, 22, 0.3)",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C", mb: 0.5 }}>
                      CENTRAL LEAD INBOX
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, color: "#18181B" }}>
                      Instant normalization, deduplication, and initial high-intent scoring
                    </Typography>
                  </Box>

                  {/* Flow Arrow */}
                  <Typography sx={{ textAlign: "center", color: "#EA580C", fontWeight: 800, fontSize: "1.1rem" }}>
                    &darr;
                  </Typography>

                  {/* Step 3: Assignment & Action */}
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "14px",
                      bgcolor: "#FAF8F5",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717A", mb: 0.5 }}>
                      ASSIGNMENT &amp; QUALIFICATION
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, color: "#18181B" }}>
                      Designated team member ownership + structured scope assessment
                    </Typography>
                  </Box>

                  {/* Flow Arrow */}
                  <Typography sx={{ textAlign: "center", color: "#EA580C", fontWeight: 800, fontSize: "1.1rem" }}>
                    &darr;
                  </Typography>

                  {/* Step 4: Pipeline */}
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "14px",
                      bgcolor: "#18181B",
                      color: "#FFFFFF",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#FB923C", mb: 0.5 }}>
                      SALES PIPELINE &amp; AUTOMATED FOLLOW-UPS
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, color: "#FFFFFF" }}>
                      Proposal generation, scheduled reminders, and clear closing progression
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 6. SALES DASHBOARDS & PIPELINE VISIBILITY */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
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
              <ViewKanbanOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                SALES VISIBILITY
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Visual Pipeline Stages Built for Fast Team Updates
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              A sales dashboard only works if your team uses it daily. We build visual pipelines focused purely on moving opportunities toward closure.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {pipelineStages.map((stage, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "18px",
                    bgcolor: "#FAF8F5",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#EA580C",
                      bgcolor: "#FFFFFF",
                      boxShadow: "0 10px 25px rgba(24, 24, 27, 0.05)",
                    },
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                      <Typography sx={{ fontSize: "1.25rem", fontWeight: 800, color: "#EA580C", fontFamily: "monospace" }}>
                        STAGE {stage.num}
                      </Typography>
                      <Box
                        sx={{
                          px: 1.5,
                          py: 0.4,
                          borderRadius: "9999px",
                          bgcolor: "rgba(249, 115, 22, 0.08)",
                          color: "#EA580C",
                          fontSize: "0.725rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                        }}
                      >
                        {stage.badge}
                      </Box>
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#18181B",
                        mb: 1.5,
                      }}
                    >
                      {stage.name}
                    </Typography>

                    <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.7 }}>
                      {stage.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 7. REALISTIC AUTOMATED FOLLOW-UPS & ALERTS */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FAF8F5", borderTop: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="lg">
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
              <NotificationsActiveOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                PRACTICAL AUTOMATION
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.9rem", sm: "2.6rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Realistic Follow-Up Automation With Human Verification
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              We do not believe in robotic, unmonitored spam that alienates high-value prospects. We engineer purposeful automation that supports your sales team and keeps customer communication timely.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {[
              {
                title: "Prospect Confirmation Trigger",
                desc: "Sends an immediate, branded acknowledgment confirming receipt of the customer inquiry and stating expected review time.",
              },
              {
                title: "Proposal Expiration Reminders",
                desc: "Notifies the responsible sales rep when a delivered quotation has gone unviewed or unaddressed for 48 or 72 hours.",
              },
              {
                title: "Internal Escalation Alerts",
                desc: "Alerts sales management via email or team webhooks if an incoming lead remains in an unassigned state past agreed response targets.",
              },
              {
                title: "Scheduled Task Creation",
                desc: "Automatically schedules follow-up tasks and calendar prompts for sales reps when leads enter specific commercial milestones.",
              },
            ].map((feature, idx) => (
              <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "20px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                  }}
                >
                  <Typography sx={{ fontSize: "1.15rem", fontWeight: 700, color: "#18181B", mb: 1.5 }}>
                    {feature.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.75 }}>
                    {feature.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 8. HOW THE SYSTEM WORKS (THE 7-STEP WORKFLOW) */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
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
                PRACTICAL WORKFLOW
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              How the System Works From Intake to Retention
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              A disciplined, step-by-step lifecycle ensuring every inquiry is accounted for and commercial value is retained.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {workflowSteps.map((ws, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={idx}>
                <Box
                  sx={{
                    p: 3.5,
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
                      bgcolor: "#FFFFFF",
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 30px rgba(24, 24, 27, 0.05)",
                    },
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                      <Typography sx={{ fontSize: "1.25rem", fontWeight: 800, color: "#EA580C", fontFamily: "monospace" }}>
                        {ws.step}
                      </Typography>
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase" }}>
                        {ws.action}
                      </Typography>
                    </Box>
                    <Typography variant="h3" sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#18181B", mb: 1.5 }}>
                      {ws.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.7 }}>
                      {ws.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 9. SUPPORTED INTEGRATIONS */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FAF8F5", borderTop: "1px solid rgba(228, 228, 231, 0.8)" }}>
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
              <IntegrationInstructionsOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                ECOSYSTEM CONNECTIVITY
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Integrations That Fit Into Your Existing Tech Stack
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Your CRM should not be an isolated software island. We connect it directly with the communication and operations tools your team already uses.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {supportedIntegrations.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "20px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#EA580C",
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 25px rgba(24, 24, 27, 0.05)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      bgcolor: "rgba(249, 115, 22, 0.08)",
                      border: "1px solid rgba(249, 115, 22, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#18181B", mb: 1.5, lineHeight: 1.35 }}>
                    {item.category}
                  </Typography>
                  <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 10. REAL WORK SPOTLIGHT: NO FABRICATED METRICS */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              p: { xs: 4, sm: 6 },
              borderRadius: "24px",
              bgcolor: "#18181B",
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-20%",
                right: "-20%",
                width: "350px",
                height: "350px",
                background: "radial-gradient(circle, rgba(249, 115, 22, 0.22) 0%, transparent 70%)",
                filter: "blur(50px)",
                pointerEvents: "none",
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2, flexWrap: "wrap" }}>
                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "#FB923C",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  REAL PRODUCTION BUILD &bull; B2B SALES &amp; QUOTING
                </Typography>
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.3,
                    borderRadius: "9999px",
                    bgcolor: "rgba(251, 146, 60, 0.15)",
                    border: "1px solid rgba(251, 146, 60, 0.3)",
                    color: "#FB923C",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                  }}
                >
                  VERIFIED PRODUCTION BUILD
                </Box>
              </Box>

              <Typography variant="h3" sx={{ fontSize: { xs: "1.8rem", sm: "2.3rem" }, fontWeight: 600, color: "#FFFFFF", mb: 2.5, lineHeight: 1.25 }}>
                Lead Intake &amp; Dynamic Proposal Generator
              </Typography>

              <Typography sx={{ fontSize: "1rem", color: "#D4D4D8", lineHeight: 1.8, maxWidth: 840, mb: 4 }}>
                For a specialized B2B provider receiving inquiries across website forms, direct emails, and messaging channels,
                we engineered a unified triage dashboard and automated proposal builder. The platform normalizes inbound specifications,
                calculates dynamic pricing with margin protection, and outputs branded PDF estimates with digital approval links.
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                {[
                  { title: "Unified Triage Inbox", desc: "Consolidated all inbound web and messaging inquiries into a single accountable pipeline." },
                  { title: "Standardized Margin Rules", desc: "Embedded pricing calculations that eliminate under-quoting errors on complex specs." },
                  { title: "One-Click Proposal Delivery", desc: "Automated branded PDF quotes with expiration tracking and scheduled follow-ups." },
                ].map((highlight, idx) => (
                  <Grid size={{ xs: 12, md: 4 }} key={idx}>
                    <Box sx={{ p: 2.5, borderRadius: "14px", bgcolor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                      <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#FFFFFF", mb: 0.75 }}>
                        {highlight.title}
                      </Typography>
                      <Typography sx={{ fontSize: "0.85rem", color: "#A1A1AA", lineHeight: 1.6 }}>
                        {highlight.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Link href="/work" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                    color: "#FFFFFF",
                    px: 3.5,
                    py: 1.4,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    borderRadius: "9999px",
                    "&:hover": {
                      background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                    },
                  }}
                >
                  View Case Study in Our Work
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 11. TECHNICAL FOUNDATION */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FAF8F5", borderTop: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="lg">
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
              <StorageOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                ENGINEERING FOUNDATIONS
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.9rem", sm: "2.6rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Secure, Maintainable Architecture Tailored to Your Business
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              We build systems on proven, open technologies that you own completely. No vendor lock-in, no per-seat subscription tiers, and no unexpected pricing jumps as your team grows.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {technicalFoundations.map((tech, idx) => (
              <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "18px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "10px",
                        bgcolor: "rgba(249, 115, 22, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {tech.icon}
                    </Box>
                    <Typography sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#18181B" }}>
                      {tech.title}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.75 }}>
                    {tech.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 12. FREQUENTLY ASKED QUESTIONS */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                FAQS &amp; CLARIFICATIONS
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.6rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Straightforward answers about custom CRM software, lead pipelines, and how we engineer systems for your workflow.
            </Typography>
          </Box>

          <CrmFaqAccordion faqs={crmFaqs} />
        </Container>
      </Box>

      {/* 13. INTERNAL LINKING TO RELATED SOLUTION DOMAINS */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FAF8F5", borderTop: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 700, mb: 5 }}>
            <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#EA580C", textTransform: "uppercase", letterSpacing: "0.06em", mb: 1 }}>
              EXPLORE CONNECTED SOLUTIONS
            </Typography>
            <Typography variant="h3" sx={{ fontSize: "1.6rem", fontWeight: 600, color: "#18181B" }}>
              How Aetibar&apos;s 4 Solution Domains Connect
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              {
                title: "Business Website Development",
                badge: "Domain 01",
                link: "/solutions/business-website-development",
                desc: "High-performance Next.js front doors engineered to qualify high-intent prospect inquiries.",
              },
              {
                title: "Custom Business Software",
                badge: "Domain 03",
                link: "/solutions/custom-business-software",
                desc: "Custom operational software, dispatch consoles, and workflow platforms replacing tangled spreadsheets.",
              },
              {
                title: "AI & Practical Automation",
                badge: "Domain 04",
                link: "/solutions/ai-automation",
                desc: "Targeted language models, document parsers, and human-verified automation bridges.",
              },
              {
                title: "How We Work",
                badge: "Methodology",
                link: "/how-we-work",
                desc: "Our architectural diagnostic, milestone roadmap, and engineering governance model.",
              },
            ].map((related, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <Link href={related.link} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: "16px",
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
                        boxShadow: "0 10px 25px rgba(24, 24, 27, 0.05)",
                      },
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C", textTransform: "uppercase", mb: 1 }}>
                        {related.badge}
                      </Typography>
                      <Typography sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#18181B", mb: 1.25 }}>
                        {related.title}
                      </Typography>
                      <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.6 }}>
                        {related.desc}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2.5, color: "#EA580C" }}>
                      <Typography sx={{ fontSize: "0.825rem", fontWeight: 700 }}>Explore</Typography>
                      <ArrowForwardIcon sx={{ fontSize: 14 }} />
                    </Box>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 14. FLAGSHIP CTA SECTION */}
      <SolutionsCta
        badge="INQUIRY ACCELERATION"
        headline="Ready to turn scattered inquiries into an accountable sales pipeline?"
        description="Schedule a 30-minute inquiry architecture diagnostic. We will map where your leads currently get delayed and design a centralized CRM and lead management system tailored to your team."
        primaryButtonText="Schedule Architecture Diagnostic"
        secondaryButtonText="All Solution Domains"
        primaryLink="/contact"
        secondaryLink="/solutions"
      />
    </main>
  );
}
