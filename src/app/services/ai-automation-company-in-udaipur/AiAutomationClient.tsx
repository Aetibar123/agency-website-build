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
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { workProjects } from "../../../data/workData";
import HomeScrollProgress from "../../../components/home/HomeScrollProgress";

export default function AiAutomationClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | false>(false);

  const heroHighlights = [
    {
      value: "Fixed",
      title: "Clear Upfront Pricing",
      desc: "No hidden surprises. We agree on deliverables, milestones, and price before any work starts.",
      icon: <VerifiedOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "< 1s",
      title: "Real-Time Automation",
      desc: "Instant data routing between forms, WhatsApp, spreadsheets, and business systems.",
      icon: <SpeedOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "100%",
      title: "Full Code & Data Control",
      desc: "You own all automations, API keys, logins, and accounts completely with zero lock-in.",
      icon: <LockOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "Direct",
      title: "Automated CRM Routing",
      desc: "New enquiries land instantly in your CRM and team inbox with zero delay.",
      icon: <PhoneInTalkOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
  ];

  const whoIsItFor = [
    {
      title: "Sales & Support Teams",
      desc: "Teams receiving enquiries through WhatsApp, email, and website forms who want customer information organized in one place with automated notifications and follow-up workflows.",
    },
    {
      title: "Offices Handling Invoices & Documents",
      desc: "Companies processing vendor invoices, receipts, PDFs, or order forms that want to reduce repetitive data entry and move information into spreadsheets or business systems more efficiently.",
    },
    {
      title: "Teams Using Disconnected Software",
      desc: "Businesses working across separate accounting, inventory, CRM, messaging, and email tools where employees spend time manually transferring information between systems.",
    },
    {
      title: "Owners Looking to Reduce Manual Work",
      desc: "Founders and managers who want their teams to spend less time on repetitive administrative tasks and more time on customer conversations, operations, and business priorities.",
    },
  ];

  const problemsAddressed = [
    {
      problem: "Customer enquiries are missed or followed up too late",
      howWeHelp:
        "We build automated lead workflows that can notify the right team member when a new enquiry arrives, organize the incoming information, and prepare follow-up messages or tasks so enquiries are easier to manage.",
    },
    {
      problem: "You want to use AI without giving it uncontrolled access to customer conversations",
      howWeHelp:
        "We can design workflows where AI assists with tasks such as drafting replies, summarizing enquiries, or extracting information while keeping human approval in the loop for customer-facing actions and important decisions.",
    },
    {
      problem: "Your team spends too much time moving data between different tools",
      howWeHelp:
        "We connect forms, spreadsheets, messaging platforms, CRM systems, accounting software, and other supported tools so information can move between them automatically instead of being entered manually at every step.",
    },
    {
      problem: "You have concerns about adding more software or exposing business data",
      howWeHelp:
        "We first look at the tools and workflows you already use and identify where automation can be added without unnecessary software changes. Access, data handling, and permissions are configured according to the platforms and workflow involved.",
    },
  ];

  const deliverables = [
    {
      title: "Automated Lead Alerts & Routing",
      desc: "Connect website forms, enquiries, and supported messaging channels so new leads can be organized, routed, and followed up more efficiently.",
      items: [
        "Automated notifications for new enquiries through supported channels",
        "Lead information organized in Google Sheets, CRM, or another connected system",
        "Draft follow-up messages and appointment links where appropriate",
        "Lead tagging and routing based on enquiry type, location, or other defined rules",
      ],
    },
    {
      title: "PDF & Invoice Data Extraction",
      desc: "Extract useful information from invoices, receipts, purchase orders, and other documents to reduce repetitive data entry.",
      items: [
        "Extraction of fields such as invoice numbers, vendor names, dates, and amounts",
        "Processing of supported PDFs, scanned documents, images, and email attachments",
        "Structured output to Google Sheets, Excel, or connected business systems",
        "Flagging missing or unusual information for human review",
      ],
    },
    {
      title: "Business Software & API Integrations",
      desc: "Connect the business tools you already use so relevant information can move between systems with less manual work.",
      items: [
        "WhatsApp Business integrations using supported APIs and platforms",
        "Payment-related workflows for services such as Razorpay, Stripe, and supported UPI setups",
        "Connecting website forms with Google Sheets, Gmail, CRM, Tally, Zoho, and other supported tools",
        "Workflow rules to reduce duplicate records and inconsistent data",
      ],
    },
    {
      title: "AI-Assisted Customer Support",
      desc: "Use your existing business information to help your team prepare more accurate customer responses while keeping human review in the workflow.",
      items: [
        "Search and retrieval across approved company documents, policies, FAQs, and product information",
        "AI-generated response drafts for your team to review before sending",
        "Defined instructions and validation rules to reduce unsupported responses",
        "Consistent response guidance across different team members and customer interactions",
      ],
    },
    {
      title: "Automated Business Reports & Alerts",
      desc: "Turn information from connected systems into scheduled summaries and notifications without requiring the team to compile every report manually.",
      items: [
        "Scheduled summaries of enquiries, sales, orders, or other selected business data",
        "Daily or weekly reports delivered through supported email or messaging workflows",
        "Notifications for defined workflow errors, failed integrations, or missing data",
        "Automated calculations and summaries for recurring reporting tasks",
      ],
    },
  ];

  const benefits = [
    {
      title: "Reduce Repetitive Administrative Work",
      desc: "Automating recurring data entry, notifications, document processing, and reporting can free your team from routine tasks and give them more time for customer and business priorities.",
    },
    {
      title: "Respond to Enquiries More Efficiently",
      desc: "Automated alerts, lead routing, and AI-assisted response drafts can help your team notice and handle new enquiries sooner while keeping important customer interactions under human control.",
    },
    {
      title: "Reduce Manual Data Entry & Errors",
      desc: "Moving information between connected systems automatically can reduce repetitive copy-pasting and the risk of common manual mistakes, while important data can still be reviewed by your team.",
    },
    {
      title: "Keep People in Control of Automation",
      desc: "Workflows can be designed with approval steps, defined permissions, and clear rules so your team decides where automation should act independently and where human review is required.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Identify the Bottlenecks",
      desc: "We understand your team's current workflow and identify repetitive tasks, manual data entry, follow-ups, and other processes that could benefit from automation.",
    },
    {
      num: "02",
      title: "Map the Automation Workflow",
      desc: "We define the steps, inputs, outputs, rules, and approval points for the workflow, including where human review should remain part of the process.",
    },
    {
      num: "03",
      title: "Connect Your Business Tools",
      desc: "We integrate the relevant tools such as WhatsApp, Google Sheets, Gmail, CRM, accounting software, or other supported systems based on the workflow requirements.",
    },
    {
      num: "04",
      title: "Test & Refine the Workflow",
      desc: "We test the automation with sample and realistic scenarios, check data flow and edge cases, and make adjustments before the workflow is used in day-to-day operations.",
    },
    {
      num: "05",
      title: "Launch & Support Your Team",
      desc: "We put the workflow into use, explain how it works to the relevant team members, and provide support for improvements or adjustments as the business workflow evolves.",
    },
  ];

  const faqs = [
    {
      question: "How much does an AI automation company in Udaipur charge?",
      answer:
        "The cost of AI automation services depends on workflow complexity, required integrations, AI model usage, and custom development needs. Aetibar evaluates your business processes and requirements before recommending a suitable solution and providing a project-specific quote. Third-party subscriptions, API usage, and infrastructure costs may be separate.",
    },
    {
      question: "Which business processes can be automated using AI?",
      answer:
        "AI workflow automation can help businesses process enquiries, extract information from documents, categorize requests, prepare response drafts, summarize information, and update connected business systems. Aetibar identifies repetitive tasks in your existing workflows and recommends custom AI automation solutions based on your operational needs.",
    },
    {
      question: "Does my business need AI automation or traditional workflow automation?",
      answer:
        "Not every workflow requires AI. Traditional rule-based automation is often sufficient for predictable tasks such as transferring form submissions to a CRM or sending notifications. AI automation is more useful for workflows involving language understanding, unstructured information, or document processing. We recommend the simplest suitable solution based on your requirements and budget.",
    },
    {
      question: "Can an AI automation company integrate AI with our existing business software?",
      answer:
        "Yes, AI automation can integrate with existing business software when suitable APIs or supported integration methods are available. Depending on your requirements, integrations may include CRMs, WhatsApp Business, Google Sheets, Gmail, databases, and other business applications. Integration feasibility depends on platform capabilities, account permissions, and workflow requirements.",
    },
    {
      question: "Can AI automation produce incorrect results or make mistakes?",
      answer:
        "Yes, AI systems can generate inaccurate outputs or misinterpret information. To reduce these risks, an AI automation workflow can include data validation, human approval, restricted actions, and error handling. The appropriate safeguards depend on the task, data sensitivity, and potential impact of an incorrect result.",
    },
    {
      question: "How long does it take to implement AI automation for a business?",
      answer:
        "The implementation timeline depends on workflow complexity, integration requirements, data availability, and testing needs. A straightforward automation may take less time than a custom AI workflow involving multiple systems, document processing, or approval steps. Aetibar assesses the project requirements before defining a realistic implementation timeline.",
    },
    {
      question: "How can AI workflow automation reduce manual work?",
      answer:
        "AI workflow automation can reduce repetitive tasks such as sorting enquiries, extracting document data, preparing summaries, and transferring information between systems. We identify suitable processes and define measurable objectives, such as reducing processing time or the number of manual steps. Actual improvements depend on the workflow and implementation.",
    },
    {
      question: "Is AI automation secure for business data?",
      answer:
        "Security depends on the system architecture, integrations, AI providers, and the type of data being processed. Appropriate controls may include access restrictions, data minimization, secure credential handling, and validation of third-party services. Businesses should review relevant provider privacy policies and data retention practices before processing sensitive information.",
    },
    {
      question: "Will AI automation replace employees in my business?",
      answer:
        "AI automation is commonly used to reduce repetitive work and help employees focus on tasks that require judgment, communication, or decision-making. Some workflows can operate automatically, while sensitive or high-impact tasks may require human approval. The appropriate level of automation depends on your business processes and operational requirements.",
    },
    {
      question: "Does AI automation require ongoing maintenance?",
      answer:
        "AI automation systems may require ongoing monitoring and maintenance when connected platforms change their APIs, authentication methods, or features. Depending on the solution, maintenance can include error monitoring, integration updates, performance checks, and workflow adjustments. Support arrangements and recurring costs depend on the agreed project scope.",
    },
    {
      question: "How can I choose the right AI automation company in Udaipur?",
      answer:
        "When choosing an AI automation company in Udaipur, evaluate its understanding of business processes, integration capabilities, data security practices, testing approach, and ongoing support. The right provider should explain what can realistically be automated, identify potential limitations, and recommend a solution that fits your business requirements.",
    },
    {
      question: "Does Aetibar provide custom AI automation services in Udaipur?",
      answer:
        "Aetibar helps businesses explore custom AI automation solutions based on their workflows, operational challenges, and integration requirements. We start by understanding your existing processes and identifying tasks where automation may reduce manual effort or improve consistency. The recommended solution depends on your business needs and technical feasibility.",
    },
  ];

  const relevantProjects = workProjects.filter((p) =>
    [
      "ai-customer-support",
      "service-lead-pipeline",
      "ai-lead-follow-up-automation",
      "ai-customer-enquiry-assistant",
    ].includes(p.slug)
  );

  return (
    <Box sx={{ bgcolor: "#FFFFFF", color: "#183D35", minHeight: "100vh" }}>
      <HomeScrollProgress />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (LEFT-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 15, sm: 18, md: 21 },
          pb: { xs: 8, md: 12 },
          bgcolor: "#183D35",
          color: "#FFFFFF",
          borderBottom: "1px solid rgba(216, 229, 213, 0.12)",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          {/* Breadcrumb Navigation */}
          <Box sx={{ mb: 4, display: "flex", justifyContent: "flex-start" }}>
            <Link
              href="/services"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#D8E5D5",
                fontSize: "0.85rem",
                fontWeight: 600,
                padding: "6px 14px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(216, 229, 213, 0.2)",
                transition: "all 0.2s ease",
              }}
            >
              <ArrowBackIcon sx={{ fontSize: 16, color: "#D8E5D5" }} />
              <span>All Services</span>
            </Link>
          </Box>

          {/* Left-Aligned Hero Content */}
          <Box sx={{ maxWidth: "980px", mb: { xs: 6, md: 8 } }}>
            {/* Pill Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(61, 118, 93, 0.28)",
                border: "1px solid rgba(216, 229, 213, 0.25)",
                mb: 3,
              }}
            >
              <SmartToyOutlinedIcon sx={{ fontSize: 18, color: "#D8E5D5" }} />
              <Typography
                sx={{
                  color: "#D8E5D5",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                AI Automation Services
              </Typography>
            </Box>

            {/* H1 Title with DM Serif Font */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.35rem" },
                fontWeight: 400,
                lineHeight: { xs: 1.15, md: 1.1 },
                letterSpacing: "-0.015em",
                color: "#FFFFFF",
                mb: 2.5,
              }}
            >
              AI Automation Company in Udaipur —{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                Automate Repetitive Work &amp; Connect Your Systems
              </Box>
            </Typography>

            {/* Tagline with DM Serif Font */}
            <Typography
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.15rem", sm: "1.3rem", md: "1.45rem" },
                fontWeight: 400,
                color: "#D8E5D5",
                lineHeight: 1.5,
                mb: 2,
                maxWidth: "860px",
              }}
            >
              Practical automation that connects your software, reduces repetitive manual work, and helps your team spend more time on tasks that need human attention.
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                lineHeight: 1.75,
                color: "rgba(216, 229, 213, 0.85)",
                maxWidth: "760px",
                mb: 4,
              }}
            >
              As an AI automation company in Udaipur, we build practical workflows that connect the tools your business already uses. From routing new enquiries and organizing customer information to automating repetitive tasks across your website, WhatsApp, email, and business software, we help reduce manual work while keeping people in control of important decisions.
            </Typography>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  bgcolor: "#3D765D",
                  color: "#FFFFFF",
                  px: { xs: 3, sm: 3.8 },
                  py: 1.4,
                  fontSize: "0.925rem",
                  fontWeight: 600,
                  borderRadius: "12px",
                  boxShadow: "none",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#D8E5D5",
                    color: "#183D35",
                  },
                }}
              >
                Get a Free Consultation
              </Button>

              <Button
                component="a"
                href="#deliverables"
                variant="outlined"
                sx={{
                  borderColor: "rgba(216, 229, 213, 0.35)",
                  bgcolor: "rgba(255, 255, 255, 0.04)",
                  color: "#FFFFFF",
                  px: { xs: 3, sm: 3.5 },
                  py: 1.4,
                  fontSize: "0.925rem",
                  fontWeight: 600,
                  borderRadius: "12px",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#D8E5D5",
                    bgcolor: "rgba(216, 229, 213, 0.1)",
                  },
                }}
              >
                What&apos;s Included
              </Button>
            </Box>
          </Box>

          {/* Hero Highlights Grid */}
          <Grid container spacing={2.5}>
            {heroHighlights.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "18px",
                    p: { xs: 3, sm: 3.5 },
                    border: "1px solid rgba(216, 229, 213, 0.15)",
                    backdropFilter: "blur(8px)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "rgba(216, 229, 213, 0.45)",
                      bgcolor: "rgba(255, 255, 255, 0.08)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 24px -8px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: "12px",
                          bgcolor: "rgba(216, 229, 213, 0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                          fontSize: "1.35rem",
                          color: "#D8E5D5",
                          fontWeight: 400,
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        fontSize: "1.15rem",
                        fontWeight: 400,
                        color: "#FFFFFF",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        lineHeight: 1.6,
                        color: "rgba(216, 229, 213, 0.8)",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 2. WHO BENEFITS MOST (CENTER-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="who-is-it-for"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: "780px",
              mb: { xs: 5, md: 6 },
              textAlign: "center",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.8,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "#D8E5D5",
                color: "#183D35",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2,
              }}
            >
              WHO BENEFITS MOST
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.55rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              Who Is This Service For?
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7, mx: "auto" }}>
              Built for businesses that want to eliminate manual data entry and streamline daily operations.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {whoIsItFor.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#F7F7F2",
                    borderRadius: "18px",
                    p: { xs: 3, sm: 3.5 },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#3D765D",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        fontSize: "1.2rem",
                        fontWeight: 400,
                        letterSpacing: "-0.015em",
                        color: "#183D35",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        color: "#52525B",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 3. CHALLENGES WE ADDRESS (LEFT-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="problems-addressed"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#F7F7F2",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "780px", mb: { xs: 5, md: 6 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.8,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "#D8E5D5",
                color: "#183D35",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2,
              }}
            >
              CHALLENGES WE ADDRESS
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.55rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              Problems We Address
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Eliminating missed enquiries, delayed follow-ups, manual data entry, and fragmented tools.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {problemsAddressed.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: "20px",
                    p: { xs: 3.5, sm: 4 },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#3D765D",
                      boxShadow: "0 10px 30px -10px rgba(24, 61, 53, 0.08)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2.5 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.5 }}>
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          bgcolor: "rgba(220, 38, 38, 0.1)",
                          color: "#DC2626",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          flexShrink: 0,
                          mt: 0.2,
                        }}
                      >
                        ✕
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                          fontSize: "1.15rem",
                          fontWeight: 400,
                          color: "#183D35",
                          lineHeight: 1.35,
                        }}
                      >
                        {item.problem}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      pt: 2.5,
                      borderTop: "1px solid rgba(24, 61, 53, 0.06)",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          bgcolor: "#D8E5D5",
                          color: "#183D35",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          mt: 0.2,
                        }}
                      >
                        <CheckIcon sx={{ fontSize: 14 }} />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          color: "#52525B",
                          lineHeight: 1.65,
                        }}
                      >
                        {item.howWeHelp}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 4. END-TO-END DELIVERABLES (CENTER-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="deliverables"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "960px" },
              mb: { xs: 5, md: 6 },
              textAlign: "center",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.8,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "#D8E5D5",
                color: "#183D35",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2,
              }}
            >
              END-TO-END DELIVERABLES
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.55rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              What You Get with Our AI Automation
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7, mx: "auto" }}>
              Concrete deliverables, connected systems, and dependable operational workflows.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {deliverables.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#F7F7F2",
                    borderRadius: "20px",
                    p: { xs: 3, sm: 3.5 },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#3D765D",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        fontSize: "1.25rem",
                        fontWeight: 400,
                        color: "#183D35",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        color: "#52525B",
                        lineHeight: 1.6,
                        mb: 2.5,
                      }}
                    >
                      {item.desc}
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                      {item.items.map((sub, sIdx) => (
                        <Box
                          key={sIdx}
                          sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}
                        >
                          <CheckCircleOutlinedIcon
                            sx={{ fontSize: 16, color: "#3D765D", mt: 0.2, flexShrink: 0 }}
                          />
                          <Typography sx={{ fontSize: "0.825rem", color: "#52525B", lineHeight: 1.5 }}>
                            {sub}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 5. THE AETIBAR ADVANTAGE (LEFT-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="benefits"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#F7F7F2",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "780px", mb: { xs: 5, md: 6 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.8,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "#D8E5D5",
                color: "#183D35",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2,
              }}
            >
              THE AETIBAR ADVANTAGE
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.55rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              Why Businesses Choose Aetibar
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Practical workflows, complete ownership, and dependable support tailored to your operations.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {benefits.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: "18px",
                    p: { xs: 3, sm: 3.5 },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#3D765D",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        fontSize: "1.2rem",
                        fontWeight: 400,
                        letterSpacing: "-0.015em",
                        color: "#183D35",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        color: "#52525B",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 6. OUR METHODOLOGY (CENTER-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="process"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: "780px",
              mb: { xs: 5, md: 6 },
              textAlign: "center",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.8,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "#D8E5D5",
                color: "#183D35",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2,
              }}
            >
              OUR METHODOLOGY
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.55rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              How We Take Your Automation from Concept to Launch
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7, mx: "auto" }}>
              A structured 5-step process ensuring total transparency and dependable delivery.
            </Typography>
          </Box>

          <Grid container spacing={2.5}>
            {processSteps.map((step, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#F7F7F2",
                    borderRadius: "18px",
                    p: { xs: 3, sm: 3.5 },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#3D765D",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                      fontSize: "2rem",
                      color: "#3D765D",
                      lineHeight: 1,
                      mb: 2,
                    }}
                  >
                    {step.num}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                      fontSize: "1.15rem",
                      fontWeight: 400,
                      color: "#183D35",
                      mb: 1,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "#52525B",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 7. PROVEN TRACK RECORD (LEFT-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      {relevantProjects.length > 0 && (
        <Box
          component="section"
          id="projects"
          sx={{
            py: { xs: 8, md: 11 },
            bgcolor: "#F7F7F2",
            borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ maxWidth: "780px", mb: { xs: 5, md: 6 } }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.8,
                  py: 0.5,
                  borderRadius: "9999px",
                  bgcolor: "#D8E5D5",
                  color: "#183D35",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  mb: 2,
                }}
              >
                PROVEN TRACK RECORD
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                  fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.55rem" },
                  fontWeight: 400,
                  color: "#183D35",
                  lineHeight: 1.25,
                  letterSpacing: "-0.015em",
                  mb: 1.5,
                }}
              >
                Recent Automation Projects
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Explore how we helped brands automate workflows and connect systems.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {relevantProjects.map((project) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.slug}>
                  <Box
                    component={Link}
                    href={`/work/${project.slug}`}
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      borderRadius: "18px",
                      overflow: "hidden",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(24, 61, 53, 0.08)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "#3D765D",
                        boxShadow: "0 14px 28px -10px rgba(24, 61, 53, 0.12)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: 190,
                        width: "100%",
                        bgcolor: "#D8E5D5",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: "#3D765D",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            fontFamily: "monospace",
                            mb: 0.8,
                          }}
                        >
                          {project.clientType}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                            fontSize: "1.15rem",
                            fontWeight: 400,
                            letterSpacing: "-0.015em",
                            color: "#183D35",
                            lineHeight: 1.35,
                            mb: 1,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.85rem",
                            color: "#52525B",
                            lineHeight: 1.55,
                          }}
                        >
                          {project.summary}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}

      {/* ========================================================================= */}
      {/* 8. FREQUENTLY ASKED QUESTIONS (CENTER-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="faqs"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: "780px",
              mb: { xs: 5, md: 6 },
              textAlign: "center",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.8,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "#D8E5D5",
                color: "#183D35",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2,
              }}
            >
              FREQUENTLY ASKED QUESTIONS
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.55rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7, mx: "auto" }}>
              Straightforward answers about process, integrations, security, and timelines.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: "860px", mx: "auto" }}>
            {faqs.map((faq, idx) => (
              <Accordion
                key={idx}
                expanded={expandedFaq === idx}
                onChange={() => setExpandedFaq(expandedFaq === idx ? false : idx)}
                sx={{
                  bgcolor: "#F7F7F2",
                  borderRadius: "14px !important",
                  mb: 2,
                  border: "1px solid rgba(24, 61, 53, 0.08)",
                  boxShadow: "none",
                  "&:before": { display: "none" },
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#183D35" }} />}
                  sx={{
                    px: { xs: 2.5, sm: 3.5 },
                    py: 1,
                    "& .MuiAccordionSummary-content": { my: 1 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      fontWeight: 400,
                      color: "#183D35",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: { xs: 2.5, sm: 3.5 }, pt: 0, pb: 2.5 }}>
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#52525B",
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 9. READY TO AUTOMATE / CONVERSION CTA (LEFT-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="cta"
        sx={{
          py: { xs: 9, md: 12 },
          bgcolor: "#183D35",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "860px" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.85rem", sm: "2.5rem", md: "3.2rem" },
                fontWeight: 400,
                lineHeight: { xs: 1.25, md: 1.18 },
                letterSpacing: "-0.015em",
                color: "#FFFFFF",
                mb: 2,
              }}
            >
              Ready to Automate Repetitive Work in{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                Your Business?
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.98rem", sm: "1.08rem" },
                lineHeight: 1.75,
                color: "#D8E5D5",
                mb: 4,
                maxWidth: "740px",
              }}
            >
              Tell us about the manual tasks, repetitive data entry, or disconnected software slowing your team down. We&apos;ll understand your workflow and discuss practical automation options that fit your business.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  bgcolor: "#3D765D",
                  color: "#FFFFFF",
                  px: 4,
                  py: 1.5,
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  borderRadius: "12px",
                  boxShadow: "none",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#D8E5D5",
                    color: "#183D35",
                  },
                }}
              >
                Get a Free Consultation
              </Button>

              
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
