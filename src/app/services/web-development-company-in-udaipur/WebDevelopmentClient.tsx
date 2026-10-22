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
import LanguageIcon from "@mui/icons-material/Language";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { motion } from "framer-motion";
import { workProjects } from "../../../data/workData";
import HomeScrollProgress from "../../../components/home/HomeScrollProgress";

export default function WebDevelopmentClient() {
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
      title: "Ultra-Fast on Phones",
      desc: "Pages load in a fraction of a second on smartphones so impatient customers never leave.",
      icon: <SpeedOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "100%",
      title: "Full Code Ownership",
      desc: "You own all code, domains, logins, and accounts completely with zero proprietary lock-in.",
      icon: <LockOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "Direct",
      title: "Direct Inbound Leads",
      desc: "New inquiries land directly on your phone and email in seconds so you never miss a sale.",
      icon: <PhoneInTalkOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
  ];

  const whoIsItFor = [
    {
      title: "Local Businesses & Shops",
      desc: "You want customers in your city or service area to find your business, understand what you offer, view your work, and easily call or message you.",
    },
    {
      title: "Businesses with an Outdated Website",
      desc: "Your current website looks dated, is difficult to use on mobile devices, loads slowly, or has become difficult to maintain as your business has changed.",
    },
    {
      title: "Brands Selling Products Online",
      desc: "You want an e-commerce website where customers can browse products, place orders, and complete payments through supported methods such as UPI, cards, or other online payment options.",
    },
    {
      title: "Service Providers & Professional Firms",
      desc: "You want a professional online presence that clearly explains your services and makes it easier for potential clients to request a quote, submit an enquiry, or get in touch.",
    },
  ];

  const problemsAddressed = [
    {
      problem: "Your website feels slow or difficult to use on mobile devices",
      howWeHelp:
        "We focus on efficient page structure, optimized assets, sensible use of scripts, and mobile-friendly layouts to create a faster and easier browsing experience across supported devices and connections.",
    },
    {
      problem: "Customer enquiries are difficult to track or reach the right person",
      howWeHelp:
        "We connect website forms and relevant contact actions with the tools your business uses, such as email, WhatsApp, or CRM systems, so enquiries can be routed and managed more reliably.",
    },
    {
      problem: "Generic templates don't reflect your business or make important information easy to find",
      howWeHelp:
        "We design the website around your business, audience, and goals, with clear navigation, focused calls-to-action, relevant content, and a visual style that fits your brand.",
    },
    {
      problem: "Your current website is difficult to maintain or depends on too many third-party tools",
      howWeHelp:
        "We choose the technology and integrations based on your actual requirements, helping avoid unnecessary dependencies and making the website easier to manage and update over time.",
    },
  ];

  const deliverables = [
    {
      title: "Custom Business Website Development",
      desc: "A business-focused website designed to present your company clearly, explain your services, and make it easy for visitors to contact you.",
      items: [
        "Custom homepage, service pages, about page, and other required business pages",
        "Click-to-call, WhatsApp, enquiry forms, and other relevant contact options",
        "Mobile-friendly layouts tested across relevant iOS and Android devices",
        "Performance-focused page structure, optimized assets, and sensible use of scripts",
      ],
    },
    {
      title: "Online Stores & E-Commerce Websites",
      desc: "E-commerce websites that help customers browse products, manage their cart, place orders, and complete payments through supported payment methods.",
      items: [
        "Product catalogs with categories, filters, search, and relevant product information",
        "Payment integration for supported methods such as UPI, cards, and net banking",
        "Order notifications and status updates through supported email, WhatsApp, or other integrations",
        "Customer accounts, order history, and order tracking where required",
      ],
    },
    {
      title: "Client Portals & Booking Dashboards",
      desc: "Private customer areas and business dashboards that make it easier to manage bookings, documents, requests, and other customer information.",
      items: [
        "Authentication and role-based access for different users",
        "Online enquiry forms, booking workflows, and custom calculators where required",
        "Access to invoices, receipts, documents, and relevant project information",
        "Integration with supported spreadsheets, CRMs, or business systems",
      ],
    },
    {
      title: "Website Redesign & Upgrades",
      desc: "Modernize an existing website while carefully handling its structure, content, URLs, and important SEO considerations during the transition.",
      items: [
        "Relevant 301 redirects for changed or removed page URLs",
        "Updated layouts and navigation designed for current desktop and mobile users",
        "Performance and Core Web Vitals review with improvements where required",
        "Content management options that allow your team to update supported website content",
      ],
    },
    {
      title: "SEO-Ready Website Foundations",
      desc: "Technical and on-page foundations that make your website easier for search engines to crawl, understand, and index.",
      items: [
        "Logical page structure, headings, metadata, and internal linking",
        "XML sitemap and robots.txt configuration where appropriate",
        "Optimized images and other assets to support page performance",
        "Structured data and Google Business Profile integration where relevant to the business",
      ],
    },
  ];

  const benefits = [
    {
      title: "Make It Easier for Customers to Contact You",
      desc: "Clear calls-to-action, click-to-call buttons, WhatsApp links, and enquiry forms give visitors straightforward ways to get in touch with your business.",
    },
    {
      title: "Create a Better Mobile Experience",
      desc: "A mobile-friendly website with optimized assets, clear navigation, and focused page layouts makes it easier for customers to browse your business from their phones.",
    },
    {
      title: "Keep Greater Control of Your Website",
      desc: "We can structure the project around your own domain, hosting, accounts, and relevant website assets, helping your business maintain control of its digital presence.",
    },
    {
      title: "Build a Strong Foundation for Search",
      desc: "Clear page structure, relevant content, metadata, internal linking, technical SEO, and performance considerations give your website a better foundation for organic search visibility.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Business & Requirements Discussion",
      desc: "We understand your business, audience, goals, existing website if any, and the pages, features, and integrations your new website needs.",
    },
    {
      num: "02",
      title: "Structure & Design Planning",
      desc: "We plan the page structure, navigation, content hierarchy, and visual direction so you can review the proposed website experience before development.",
    },
    {
      num: "03",
      title: "Website Development",
      desc: "We build the website and required functionality, then provide a private preview where you can review the pages and test the experience during development.",
    },
    {
      num: "04",
      title: "Testing & Optimization",
      desc: "We test important pages, forms, links, navigation, integrations, and responsive behavior across relevant devices and screen sizes, while reviewing performance and technical issues.",
    },
    {
      num: "05",
      title: "Launch & Handover",
      desc: "We configure the required domain, hosting, SSL, and deployment settings, take the website live, and provide the agreed project access, credentials, and relevant files.",
    },
  ];

 const faqs=[
  {
    question: "How much does a website development company in Udaipur charge?",
    answer:
      "Website development costs depend on the number of pages, design, features, and project complexity. Aetibar provides a tailored quote based on your business requirements.",
  },
  {
    question: "What do I need to provide to get my business website developed?",
    answer:
      "Share your business details, services, target audience, and any preferred design examples or branding. Aetibar can help identify the remaining requirements before development begins.",
  },
  {
    question: "How long does it take to build a professional business website?",
    answer:
      "Timelines depend on the website's size, design, content readiness, and required features. Aetibar defines a realistic timeline after reviewing your project scope.",
  },
  {
    question: "Will my business website help generate customer enquiries?",
    answer:
      "A professional website can present your services clearly and make it easier for customers to contact you. Contact forms, WhatsApp buttons, and clear calls to action can support enquiries, but results depend on traffic and other factors.",
  },
  {
    question: "Will my website appear on Google after development?",
    answer:
      "We build websites with SEO-friendly structures, page titles, meta descriptions, and mobile responsiveness. Google rankings depend on several factors, so website development alone cannot guarantee visibility or rankings.",
  },
  {
    question: "Can I update my website content after launch?",
    answer:
      "Yes, a suitable content management system or admin dashboard can let you update text, images, and services. Available editing features depend on your website requirements.",
  },
  {
    question: "Are domain, hosting, and website maintenance charged separately?",
    answer:
      "Domain registration, hosting, and maintenance may involve additional costs depending on the project agreement. Aetibar clarifies included services, renewals, and recurring charges before development begins.",
  },
  {
    question: "Can you redesign my website without affecting its Google rankings?",
    answer:
      "We can preserve important URLs, maintain relevant content, and configure suitable redirects during a website redesign. These steps help reduce avoidable SEO risks, but ranking changes cannot be ruled out completely.",
  },
  {
    question: "Will my website work on mobile devices and load quickly?",
    answer:
      "We develop responsive websites for mobile phones, tablets, and desktops, with attention to loading performance. Actual speed depends on hosting, page content, third-party scripts, and network conditions.",
  },
  {
    question: "Can you integrate WhatsApp, booking systems, and payment gateways?",
    answer:
      "Yes, integrations may include WhatsApp buttons, enquiry forms, booking systems, payment gateways, and CRM tools. Availability and additional costs depend on your requirements and third-party services.",
  },
  {
    question: "How can I choose the right website development company in Udaipur?",
    answer:
      "Compare the provider's portfolio, project scope, communication, support options, and experience with your required features. Make sure ownership, deliverables, and ongoing costs are clear before starting.",
  },
  {
    question: "Does Aetibar provide website development services in Udaipur?",
    answer:
      "Aetibar provides website development solutions tailored to business needs, from professional business websites to custom functionality. The recommended approach depends on your goals, features, and project scope.",
  },
]
  const relevantProjects = workProjects.filter((p) =>
    ["nexus-ecommerce", "enterprise-seo-migration", "rebranding-fintech-identity"].includes(p.slug)
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
              <LanguageIcon sx={{ fontSize: 18, color: "#D8E5D5" }} />
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
                Custom Web Development
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
              Web Development Company in Udaipur —{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                Websites Built Around Your Business
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
              Custom websites, online stores, and web applications designed to present your business clearly and make it easier for customers to take action.
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
              As a best web development company in Udaipur, we build websites and web applications around your business requirements—from company websites and online stores to custom business tools. We focus on clear information, practical user experiences, and a development approach that gives you control over your website, domain, and relevant project access.
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
              Built for businesses that want structured, dependable, and high-performing digital platforms.
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
              Eliminating slow speeds, difficult navigation, generic templates, and fragile codebases.
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
              What You Get with Our Web Development
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7, mx: "auto" }}>
              Concrete deliverables, transparent scopes, and complete operational clarity.
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
              Engineered for real business results, complete ownership, and dependable support.
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
              How We Take Your Website from Concept to Launch
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
                Recent Web Development Projects
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Explore how we helped brands build high-performing digital platforms.
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
              Straightforward answers about process, ownership, mobile testing, and timelines.
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
      {/* 9. READY TO BUILD / CONVERSION CTA (LEFT-ALIGNED WITH DM SERIF) */}
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
              Ready to Build a Better Website for{" "}
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
              Tell us what your business needs. We&apos;ll understand your requirements, discuss the right approach, and share a clear proposal with realistic timelines and pricing.
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
