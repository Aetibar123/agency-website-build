import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import SolutionsCta from "../../../components/solutions/SolutionsCta";
import CustomSoftwareFaqAccordion, { FaqItem } from "../../../components/solutions/CustomSoftwareFaqAccordion";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Business Software Development | Aetibar",
  },
  description:
    "Aetibar builds custom business software, operational dashboards, workflow systems, scheduling tools and internal platforms designed around how your business works.",
  alternates: {
    canonical: "https://www.aetibar.in/solutions/custom-business-software",
  },
  openGraph: {
    title: "Custom Business Software Development | Aetibar",
    description:
      "Aetibar builds custom business software, operational dashboards, workflow systems, scheduling tools and internal platforms designed around how your business works.",
    url: "https://www.aetibar.in/solutions/custom-business-software",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Custom Business Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Business Software Development | Aetibar",
    description:
      "Aetibar builds custom business software, operational dashboards, workflow systems, scheduling tools and internal platforms designed around how your business works.",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const valuePrinciples = [
  {
    title: "Centralized Data Truth",
    desc: "Single relational database replaces fragile spreadsheet sprawl and manual copy-pasting.",
  },
  {
    title: "Tailored Business Rules",
    desc: "Custom approval gates, margin checks, and stage requirements enforced at the software layer.",
  },
  {
    title: "Conflict-Aware Scheduling",
    desc: "Database-level concurrency safeguards and real-time status updates prevent double-booking.",
  },
  {
    title: "Complete Code Ownership",
    desc: "Full intellectual property ownership with zero monthly per-user licensing fees as your team grows.",
  },
];

const whatWeBuildItems = [
  {
    title: "Operations Management Software",
    subtitle: "Internal workflows, operational processes, and business activities",
    desc: "Purpose-built platforms that coordinate internal handoffs across sales, operations, technicians, and management with audited status pipelines and milestone tracking.",
    icon: <PrecisionManufacturingOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    title: "Business Dashboards",
    subtitle: "Operational visibility and executive monitoring",
    desc: "Single-pane-of-glass consoles aggregating active orders, team capacity, project bottlenecks, and real-time business metrics into clear visual views and searchable logs.",
    icon: <DashboardCustomizeOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    title: "Scheduling & Dispatch Systems",
    subtitle: "Resource coordination and status management",
    desc: "Custom scheduling, assignment, dispatch, crew availability, and status-management systems with mobile-friendly technician views and automated milestone updates.",
    icon: <CalendarMonthOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    title: "Service & Task Management",
    subtitle: "Work orders, execution tracking, and accountability",
    desc: "Internal systems for assigning work orders, tracking execution progress, recording customer communications, and maintaining clear accountability across departments.",
    icon: <FactCheckOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    title: "Quotation & Invoicing Systems",
    subtitle: "Custom pricing rules, approvals, and financial workflows",
    desc: "Custom workflows for quotations, dynamic pricing rules, margin verification, discount approval gates, and automated, branded proposal and invoice generation.",
    icon: <ReceiptLongOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    title: "Custom Admin & Role Portals",
    subtitle: "Audited multi-stakeholder interfaces",
    desc: "Role-based interfaces providing granular access for employees, operations managers, executives, vendors, or external partners—ensuring each user sees only what their role permits.",
    icon: <AdminPanelSettingsOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
];

const workflowSteps = [
  {
    num: "01",
    title: "Understand the Current Workflow",
    desc: "We study how your team actually gets work done—inspecting current spreadsheets, manual handoffs, communication channels, and daily routines.",
  },
  {
    num: "02",
    title: "Identify Bottlenecks & Repetitive Work",
    desc: "We pinpoint where delays happen: double-entry between tools, status update chases, manual calculation errors, and lost files.",
  },
  {
    num: "03",
    title: "Define Roles, Permissions & Business Rules",
    desc: "We document user hierarchies, access boundaries, approval thresholds, and data validation rules needed to protect operational integrity.",
  },
  {
    num: "04",
    title: "Design the System Around Those Requirements",
    desc: "We architect clean, responsive interfaces designed specifically for how your team works—prioritizing clarity, rapid data entry, and scannability.",
  },
  {
    num: "05",
    title: "Integrate Required External Systems",
    desc: "We connect the application to your existing toolchain—accounting software, payment processors, communication gateways, or legacy databases.",
  },
  {
    num: "06",
    title: "Build and Test the Application",
    desc: "We develop type-safe, resilient software backed by structured relational databases, testing against real-world operational edge cases.",
  },
  {
    num: "07",
    title: "Deploy and Continuously Improve",
    desc: "We manage a phased rollout with zero downtime, support team adoption, and iterate as your operational requirements scale.",
  },
];

const customizationRules = [
  {
    title: "Custom Terminology",
    desc: "Software labeled with your company's exact industry terms, product codes, and classifications instead of generic CRM fields.",
  },
  {
    title: "Custom Status Workflows",
    desc: "Stage gates that mirror your real delivery pipeline (e.g., Intake, Quoted, Scheduled, In-Progress, Verified, Invoiced).",
  },
  {
    title: "Multi-Tier Approval Rules",
    desc: "Automated thresholds requiring manager or director sign-off on non-standard quotes, credits, or schedule exceptions.",
  },
  {
    title: "Role-Based Access Control",
    desc: "Granular permissions for field staff, dispatchers, accountants, and executives with full audit logging.",
  },
  {
    title: "Pricing & Margin Logic",
    desc: "Dynamic pricing calculations that automatically factor in tiered rates, material markups, and margin guardrails.",
  },
  {
    title: "Conflict-Aware Scheduling",
    desc: "Built-in validation rules for crew availability, vehicle assignments, travel buffers, and equipment constraints.",
  },
  {
    title: "Automated Notifications",
    desc: "Trigger-based alerts dispatched via WhatsApp, SMS, or email when milestones change or actions require sign-off.",
  },
  {
    title: "Tailored Management Reports",
    desc: "Custom executive reporting and exportable CSV/PDF summaries designed for your weekly operational meetings.",
  },
  {
    title: "Third-Party & API Integrations",
    desc: "Bi-directional connections to accounting software, storage buckets, CRM databases, and partner APIs.",
  },
];

const technicalCapabilities = [
  {
    title: "Next.js & React Frontend",
    desc: "Fast, responsive web interfaces with sub-second page loads, Server Components, and intuitive daily usability on desktop and mobile.",
    icon: <CodeOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Node.js & NestJS Services",
    desc: "Modular backend services enforcing strict business rules, background processing, validation layers, and reliable API orchestration.",
    icon: <StorageOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "TypeScript End-to-End",
    desc: "Strict type contracts across frontend and backend, minimizing runtime regressions and ensuring predictable system behavior.",
    icon: <LayersOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "PostgreSQL & MongoDB",
    desc: "ACID-compliant relational architectures, indexed schemas, and transactional integrity that replace vulnerable flat files.",
    icon: <SecurityOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "REST & GraphQL APIs",
    desc: "Clean service boundaries, secure webhook ingestion, and seamless integrations with third-party business services.",
    icon: <SyncAltOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Role-Based Permissions & Auth",
    desc: "Secure session and token management, granular permission matrices, and immutable audit logs of all user actions.",
    icon: <AdminPanelSettingsOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
];

const faqs: FaqItem[] = [
  {
    question: "What is custom business software?",
    answer:
      "Custom business software is a purpose-built digital application engineered around the specific workflows, business logic, terminology, and operational requirements of a particular organization. Unlike off-the-shelf software designed for generic use across thousands of companies, custom software only includes the data fields, approval stages, user permissions, and integrations your team actually needs.",
  },
  {
    question: "When should a business consider custom software instead of off-the-shelf software?",
    answer:
      "Off-the-shelf SaaS is an excellent choice when a business has standardized, conventional workflows that fit neatly into standard templates. However, when your operations involve unique pricing rules, multi-stage approval hierarchies, specialized scheduling constraints, or disparate systems requiring manual spreadsheet bridges, off-the-shelf tools often create friction. A custom solution makes sense when the cost of workarounds, double-handling, and lost operational visibility exceeds the investment of building a tailored system.",
  },
  {
    question: "What types of business software can Aetibar build?",
    answer:
      "We engineer operations management platforms, executive and team dashboards, scheduling and dispatch applications, service and work-order management tools, dynamic quoting and invoicing systems, and role-based internal portals. Each system is architected to eliminate specific operational bottlenecks, whether desktop web consoles for dispatchers or mobile-optimized interfaces for field teams.",
  },
  {
    question: "Can custom software integrate with our existing tools?",
    answer:
      "Yes. Most custom software operates alongside existing business software. We build secure REST API and webhook integrations connecting with accounting platforms (such as QuickBooks, Tally, or Zoho), messaging services (WhatsApp, SMS, Slack, email), customer databases, payment gateways, and cloud storage systems, ensuring information synchronizes automatically without manual re-entry.",
  },
  {
    question: "Can the software support different employee roles and permissions?",
    answer:
      "Absolutely. Granular role-based access control (RBAC) is a core component of every business system we build. You can define exact access privileges for each user role—such as field technicians who only view their assigned jobs, dispatchers who schedule work orders, accountants who approve invoices, and executives who access organization-wide financial and operational analytics.",
  },
  {
    question: "Can an existing spreadsheet-based workflow be converted into software?",
    answer:
      "Yes, converting complex spreadsheet workflows into secure, structured relational software is one of the most common reasons companies work with us. We map your current spreadsheet columns, formulas, lookup logic, and data validations into a normalized database (such as PostgreSQL) with custom user interfaces. This eliminates formula corruption, accidental overwrites, and version control issues while introducing audit trails and multi-user concurrency.",
  },
  {
    question: "How long does custom business software development take?",
    answer:
      "Timelines vary depending on operational scope rather than arbitrary schedules. Factors that determine delivery duration include the number of unique workflows, user roles and permission complexity, third-party system integrations, custom calculation rules, and reporting requirements. We typically deliver initial operational modules in phases—often within 4 to 8 weeks—allowing teams to begin using core features while subsequent capabilities are deployed iteratively.",
  },
];

export default function CustomBusinessSoftwarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.aetibar.in/solutions/custom-business-software",
        url: "https://www.aetibar.in/solutions/custom-business-software",
        name: "Custom Business Software Development | Aetibar",
        description:
          "Aetibar builds custom business software, operational dashboards, workflow systems, scheduling tools and internal platforms designed around how your business works.",
        breadcrumb: {
          "@id": "https://www.aetibar.in/solutions/custom-business-software#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.aetibar.in/solutions/custom-business-software#breadcrumb",
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
            name: "Custom Business Software",
            item: "https://www.aetibar.in/solutions/custom-business-software",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://www.aetibar.in/solutions/custom-business-software#service",
        name: "Custom Business Software Development",
        serviceType: "Custom Software Development Services",
        description:
          "Aetibar builds custom business software, operational dashboards, workflow systems, scheduling tools and internal platforms designed around how your business works.",
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
        url: "https://www.aetibar.in/solutions/custom-business-software",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Custom Business Software Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Operations Management Software",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Business Dashboards",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Scheduling & Dispatch Systems",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Service & Task Management",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Quotation & Invoicing Systems",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Admin & Role Portals",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.aetibar.in/solutions/custom-business-software#faq",
        mainEntity: faqs.map((faq) => ({
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
          pt: { xs: 15, sm: 17, md: 21 },
          pb: { xs: 9, md: 13 },
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
            {/* Breadcrumb Navigation */}
            <Box
              component="nav"
              aria-label="Breadcrumb"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                mb: 3,
                fontSize: "0.85rem",
                color: "#71717A",
              }}
            >
              <Link href="/" style={{ color: "#71717A", textDecoration: "none" }}>
                Home
              </Link>
              <span>/</span>
              <Link href="/solutions" style={{ color: "#71717A", textDecoration: "none" }}>
                Solutions
              </Link>
              <span>/</span>
              <Typography
                component="span"
                sx={{ fontSize: "0.85rem", color: "#EA580C", fontWeight: 600 }}
              >
                Custom Business Software
              </Typography>
            </Box>

            {/* Status Pill */}
            <div>
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
                  SOLUTION DOMAIN 03 &bull; OPERATIONAL BACKBONE
                </Typography>
              </Box>
            </div>

            {/* Primary H1 */}
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
              Custom Business Software Development
            </Typography>

            {/* Sub-headline directly under H1 */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.15rem", md: "1.3rem" },
                fontWeight: 600,
                color: "#18181B",
                lineHeight: 1.6,
                maxWidth: 820,
                mx: "auto",
                mb: 2.5,
              }}
            >
              We build custom business software, operational dashboards, workflow systems, and internal tools around how your team actually works.
            </Typography>

            {/* First Viewport Supporting Copy */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "#52525B",
                lineHeight: 1.8,
                maxWidth: 780,
                mx: "auto",
                mb: 5,
              }}
            >
              When core business operations outgrow shared spreadsheets, disconnected tools create friction, dropped handoffs, and blind spots. Aetibar engineers purpose-built web applications, management portals, and scheduling systems tailored precisely to your operational requirements—giving your leadership real clarity and giving your team tools they actually enjoy using.
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
                  Discuss Your Workflow
                </Button>
              </Link>

              <Link href="#what-we-build" style={{ textDecoration: "none" }}>
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
                  See How We Build
                </Button>
              </Link>
            </Box>

            {/* Value Principles Bar */}
            <Grid
              container
              spacing={2}
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: "20px",
                bgcolor: "#FAF8F5",
                border: "1px solid rgba(228, 228, 231, 0.9)",
                textAlign: "left",
              }}
            >
              {valuePrinciples.map((principle, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                  <Box sx={{ p: 1 }}>
                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#18181B",
                        mb: 0.75,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                      {principle.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.825rem", color: "#52525B", lineHeight: 1.6 }}>
                      {principle.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 2. SECTION: THE PROBLEM - WHEN OFF-THE-SHELF SOFTWARE DOESN'T FIT */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF" }}>
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
                <TuneOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#EA580C",
                  }}
                >
                  OPERATIONAL REALITY
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
                When Off-the-Shelf Software Doesn&apos;t Fit
              </Typography>

              <Typography sx={{ color: "#52525B", lineHeight: 1.8, mb: 3 }}>
                Commercial off-the-shelf SaaS applications work exceptionally well when a company&apos;s operational processes are standard, uniform, and align cleanly with conventional industry templates.
              </Typography>

              <Typography sx={{ color: "#52525B", lineHeight: 1.8, mb: 3 }}>
                However, as organizations develop competitive advantages and specialized delivery models, their workflows naturally diverge from generic templates. Businesses frequently encounter operational realities that generic tools struggle to accommodate:
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3.5 }}>
                {[
                  "Unique multi-tier approval hierarchies and custom authorization rules",
                  "Proprietary pricing formulas, tiered margins, and customer-specific rate tables",
                  "Specialized scheduling constraints across field crews, equipment, and vehicles",
                  "Multiple internal roles (dispatchers, technicians, managers, auditors) requiring distinct views",
                  "Legacy operational data and specialized systems that need to communicate seamlessly",
                  "Workflows where generic software forces teams to adapt rather than supporting them",
                ].map((item, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <CheckCircleOutlinedIcon sx={{ color: "#EA580C", fontSize: 18, mt: 0.3, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: "0.925rem", color: "#27272A", fontWeight: 500, lineHeight: 1.6 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Typography sx={{ color: "#52525B", lineHeight: 1.8 }}>
                In these situations, a custom business software solution bridges the operational gap—engineered around your actual workflow instead of forcing your team to change how they deliver value.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                sx={{
                  p: { xs: 4, sm: 5 },
                  borderRadius: "24px",
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#EA580C",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    mb: 1.5,
                  }}
                >
                  THE SPREADSHEET BOTTLENECK
                </Typography>

                <Typography sx={{ fontSize: "1.4rem", fontWeight: 600, color: "#18181B", mb: 2 }}>
                  From tangled spreadsheet workarounds to an authoritative system of record
                </Typography>

                <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.75, mb: 3 }}>
                  When off-the-shelf software falls short, teams instinctively turn to spreadsheets. Over time, core business operations depend on dozens of interconnected sheets. Formula errors creep in, files get overwritten, mobile access is cumbersome, and managers spend hours chasing down status updates across WhatsApp and email.
                </Typography>

                <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.75, mb: 4 }}>
                  A purpose-built business application replaces that fragile friction with structured databases, audited stage transitions, automated validation, and clear role-specific interfaces.
                </Typography>

                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: "16px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(249, 115, 22, 0.25)",
                  }}
                >
                  <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#18181B", mb: 0.5 }}>
                    The Aetibar Guiding Principle
                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: "#52525B", fontStyle: "italic", lineHeight: 1.6 }}>
                    &ldquo;We build software around the way your business already operates, preserving what makes your team effective while removing the manual friction.&rdquo;
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. SECTION: WHAT WE BUILD */}
      <Box
        id="what-we-build"
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
                CORE APPLICATION SUITE
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
              What We Build
            </Typography>
            <Typography sx={{ fontSize: "1.08rem", color: "#52525B", lineHeight: 1.8 }}>
              We design and engineer business management software, operational applications, and custom workflow systems tailored to the exact requirements of your business.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {whatWeBuildItems.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
                <Box
                  sx={{
                    p: 4,
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
                      boxShadow: "0 12px 30px rgba(24, 24, 27, 0.05)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "14px",
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

                  <Typography
                    variant="h3"
                    sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#18181B", mb: 0.75 }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#EA580C",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      mb: 2,
                    }}
                  >
                    {item.subtitle}
                  </Typography>

                  <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.75, flexGrow: 1 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. SECTION: BUILT AROUND YOUR BUSINESS WORKFLOW */}
      <Box id="how-we-build" component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF" }}>
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
                ENGINEERING METHODOLOGY
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
              Built Around Your Business Workflow
            </Typography>
            <Typography sx={{ fontSize: "1.08rem", color: "#52525B", lineHeight: 1.8 }}>
              We do not impose pre-packaged templates or dictate how your business should function. Our engineering process centers on understanding your operational reality and translating it into dependable software.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {workflowSteps.map((step, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "18px",
                    bgcolor: "#FAF8F5",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "#EA580C",
                      fontFamily: "monospace",
                      mb: 1.5,
                    }}
                  >
                    {step.num}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#18181B",
                      mb: 1.25,
                      lineHeight: 1.35,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.7, flexGrow: 1 }}>
                    {step.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. SECTION: SOFTWARE THAT MATCHES YOUR RULES */}
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
                FLEXIBILITY &amp; ADAPTABILITY
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
              Software That Matches Your Rules
            </Typography>
            <Typography sx={{ fontSize: "1.08rem", color: "#52525B", lineHeight: 1.8, mb: 3 }}>
              Your software should reflect your workflow instead of forcing your team into someone else&apos;s workflow. We engineer every application component around your company&apos;s established operational logic.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {customizationRules.map((rule, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "18px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#18181B",
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
                    {rule.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.7 }}>
                    {rule.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Central Callout Banner */}
          <Box
            sx={{
              mt: 6,
              p: { xs: 3.5, md: 4.5 },
              borderRadius: "20px",
              bgcolor: "#18181B",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.3rem" },
                fontWeight: 600,
                lineHeight: 1.6,
                maxWidth: 780,
                mx: "auto",
                mb: 1.5,
              }}
            >
              &ldquo;Your software should reflect your workflow instead of forcing your team into someone else&apos;s workflow.&rdquo;
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "#A1A1AA" }}>
              Every database constraint, status stage, and permission boundary is tailored to your business rules.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 6. SECTION: TECHNICAL FOUNDATION */}
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
                PROVEN ARCHITECTURE
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
              Technical Foundation &amp; Architecture
            </Typography>
            <Typography sx={{ fontSize: "1.08rem", color: "#52525B", lineHeight: 1.8 }}>
              We build on reliable, battle-tested modern technologies. No experimental frameworks, no unnecessary complexity—just resilient engineering designed for stability, security, and long-term maintainability.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {technicalCapabilities.map((tech, idx) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "18px",
                    bgcolor: "#FAF8F5",
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
                    {tech.icon}
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{ fontSize: "1.15rem", fontWeight: 700, color: "#18181B", mb: 1 }}
                  >
                    {tech.title}
                  </Typography>

                  <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.7 }}>
                    {tech.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 7. SECTION: ARCHITECTURAL EXPLORATION & PROTOTYPE */}
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
          <Box
            sx={{
              p: { xs: 4, sm: 6 },
              borderRadius: "24px",
              bgcolor: "#18181B",
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-15%",
                right: "-10%",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)",
                filter: "blur(50px)",
                pointerEvents: "none",
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.8,
                  py: 0.5,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.15)",
                  border: "1px solid rgba(249, 115, 22, 0.35)",
                  mb: 2.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#FB923C",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  CONCEPT &amp; PROTOTYPE EXPLORATION
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.4rem" },
                  fontWeight: 600,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  mb: 2,
                }}
              >
                Fleet Operations &amp; Driver Dispatch System (Logix Prototype)
              </Typography>

              <Typography sx={{ fontSize: "1.05rem", color: "#D4D4D8", lineHeight: 1.75, mb: 3 }}>
                To demonstrate how offline-first architecture solves real operational coordination challenges, our engineering team architected a functional prototype for logistics and field dispatch teams operating in variable-connectivity transit hubs.
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                {[
                  {
                    label: "Offline-First Mobile Queue",
                    detail: "Drivers log milestones, capture photos, and record electronic sign-offs even with zero cellular signal using local SQLite storage.",
                  },
                  {
                    label: "Centralized Dispatcher Console",
                    detail: "Operations managers gain real-time visibility into active route waypoints, exception alerts, and searchable delivery records.",
                  },
                  {
                    label: "Automated Data Synchronization",
                    detail: "Queued field events reconcile automatically with the central PostgreSQL backend as soon as network connectivity is re-established.",
                  },
                ].map((feature, idx) => (
                  <Grid size={{ xs: 12, md: 4 }} key={idx}>
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: "14px",
                        bgcolor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        height: "100%",
                      }}
                    >
                      <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#FB923C", mb: 0.75 }}>
                        {feature.label}
                      </Typography>
                      <Typography sx={{ fontSize: "0.85rem", color: "#A1A1AA", lineHeight: 1.6 }}>
                        {feature.detail}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Link href="/portfolio/logix-driver-app" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                      color: "#FFFFFF",
                      px: 3.5,
                      py: 1.35,
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      borderRadius: "9999px",
                      "&:hover": {
                        background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                      },
                    }}
                  >
                    Explore Technical Architecture
                  </Button>
                </Link>

                <Link href="/work" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#FFFFFF",
                      borderColor: "rgba(255, 255, 255, 0.25)",
                      px: 3,
                      py: 1.35,
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      borderRadius: "9999px",
                      "&:hover": {
                        borderColor: "#FFFFFF",
                        bgcolor: "rgba(255, 255, 255, 0.08)",
                      },
                    }}
                  >
                    View All Work &amp; Prototypes
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 8. SECTION: FREQUENTLY ASKED QUESTIONS */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 840, mb: { xs: 5, md: 7 }, mx: "auto", textAlign: "center" }}>
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
              <HelpOutlineOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                COMMON QUESTIONS
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
              Frequently Asked Questions
            </Typography>
            <Typography sx={{ fontSize: "1.08rem", color: "#52525B", lineHeight: 1.8 }}>
              Clear answers to help you evaluate whether custom business software is the right path for your organization.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 860, mx: "auto" }}>
            <CustomSoftwareFaqAccordion faqs={faqs} />
          </Box>
        </Container>
      </Box>

      {/* 9. SECTION: CONNECTED SOLUTIONS (Internal Linking Ecosystem) */}
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
                mb: 2,
              }}
            >
              Connected Solution Domains
            </Typography>
            <Typography sx={{ fontSize: "1.08rem", color: "#52525B", lineHeight: 1.8 }}>
              Different operational challenges demand different digital systems. Discover how our other core solution areas support your broader business goals.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {[
              {
                title: "Business Website Development",
                badge: "Domain 01",
                desc: "High-performance Next.js commercial websites engineered for brand credibility, service clarity, and customer inquiry generation.",
                href: "/solutions/business-website-development",
                cta: "Explore Business Websites",
              },
              {
                title: "CRM & Lead Systems",
                badge: "Domain 02",
                desc: "Unified multi-channel intake pipelines, automated follow-up sequences, and lightweight sales stage tracking that prevent dropped leads.",
                href: "/solutions/crm-lead-management",
                cta: "Explore Lead Systems",
              },
              {
                title: "AI & Practical Automation",
                badge: "Domain 04",
                desc: "Targeted document parsers, automated data extractors, and webhook bridges where manual administrative tasks consume team hours.",
                href: "/solutions/ai-automation",
                cta: "Explore AI Automation",
              },
            ].map((sol, idx) => (
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
                      boxShadow: "0 12px 30px rgba(24, 24, 27, 0.05)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#EA580C",
                        bgcolor: "rgba(249, 115, 22, 0.08)",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "9999px",
                        display: "inline-block",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        mb: 2,
                      }}
                    >
                      {sol.badge}
                    </Typography>

                    <Typography
                      variant="h3"
                      sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#18181B", mb: 1.5 }}
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
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        color: "#EA580C",
                        fontWeight: 700,
                        p: 0,
                        fontSize: "0.9rem",
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

      {/* 10. FLAGSHIP CTA */}
      <SolutionsCta
        badge="OPERATIONAL CLARITY"
        headline="Ready to build software around how your team actually works?"
        description="Tell us how your team currently works, and we'll help identify where custom software could reduce manual work or operational friction."
        primaryButtonText="Discuss Your Workflow"
        secondaryButtonText="All Solution Domains"
        primaryLink="/contact"
        secondaryLink="/solutions"
      />
    </main>
  );
}
