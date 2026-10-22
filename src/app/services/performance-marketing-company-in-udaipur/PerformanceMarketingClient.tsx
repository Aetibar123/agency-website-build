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
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import { motion } from "framer-motion";
import { workProjects } from "../../../data/workData";
import HomeScrollProgress from "../../../components/home/HomeScrollProgress";

export default function PerformanceMarketingClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | false>(false);

  const heroHighlights = [
    {
      value: "Direct",
      title: "Direct Account Control",
      desc: "You own all ad accounts and pay Google/Meta directly with zero agency markup.",
      icon: <LockOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "Precise",
      title: "Negative Keywords",
      desc: "Eliminate wasted spend on irrelevant queries, jobs, courses, and unqualified terms.",
      icon: <FilterAltOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "Tracked",
      title: "Conversion Setup",
      desc: "Accurately measure calls, form submissions, purchases, and WhatsApp clicks.",
      icon: <AdsClickOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "Agile",
      title: "Continuous Optimization",
      desc: "Regular bid, keyword, and audience tuning to maximize quality enquiry flow.",
      icon: <SpeedOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
  ];

  const whoIsItFor = [
    {
      title: "Businesses Looking for Faster Enquiries",
      desc: "Businesses that want to generate enquiries through paid search and social campaigns instead of relying only on organic visibility that can take time to build.",
    },
    {
      title: "E-Commerce Stores & Brands",
      desc: "Online businesses looking to promote products through Google Shopping, product-focused search campaigns, and Instagram or Facebook advertising.",
    },
    {
      title: "B2B Companies & Suppliers",
      desc: "Manufacturers, suppliers, and professional service businesses looking to reach specific industries, locations, and audience segments through targeted campaigns.",
    },
    {
      title: "Businesses That Have Wasted Ad Spend",
      desc: "Businesses that have run paid campaigns without clear targeting, conversion tracking, search-term management, or regular optimization and want a more structured approach to managing their budget.",
    },
  ];

  const problemsAddressed = [
    {
      problem:
        "Your ad budget is being spent on irrelevant searches and clicks",
      howWeHelp:
        "We research search terms and build relevant negative keyword lists to filter out searches such as jobs, courses, free resources, and other terms that don't match your commercial offering.",
    },
    {
      problem:
        "You don't know which campaigns are generating meaningful enquiries",
      howWeHelp:
        "We configure conversion tracking for important actions such as form submissions, phone calls, WhatsApp clicks, and other measurable enquiries, helping you understand which campaigns and ads are driving results.",
    },
    {
      problem:
        "Paid traffic is reaching a landing page that isn't ready to convert",
      howWeHelp:
        "We review the landing page experience for speed, clarity, mobile usability, relevant messaging, and clear calls-to-action so visitors can quickly understand your offer and take the next step.",
    },
    {
      problem: "Ad spending feels difficult to control or understand",
      howWeHelp:
        "We set appropriate campaign budgets, bidding controls, and account-level safeguards while keeping your advertising accounts under your ownership. You pay Google or Meta directly, making your media spend easier to monitor.",
    },
  ];

  const deliverables = [
    {
      title: "Google Search & Call Campaigns",
      desc: "Reach people searching for relevant products and services on Google and guide them toward calls, website visits, or other enquiries.",
      items: [
        "Keyword research based on relevance, search intent, and campaign goals",
        "Negative keyword lists to reduce irrelevant searches and clicks",
        "Ad headlines and descriptions aligned with your offers and target audience",
        "Call-focused campaigns and call extensions where supported",
      ],
    },
    {
      title: "Meta Ads for Instagram & Facebook",
      desc: "Promote your products, services, and offers across Instagram and Facebook using audience targeting and visual ad formats.",
      items: [
        "Audience targeting based on location, interests, demographics, and available platform signals",
        "Custom image and carousel creatives adapted to your campaign objectives",
        "Retargeting campaigns for relevant website visitors and engaged audiences",
        "Click-to-WhatsApp campaigns where direct conversations are part of the customer journey",
      ],
    },
    {
      title: "Conversion & Campaign Tracking",
      desc: "Measure the actions that matter to your business and understand how your paid campaigns are performing.",
      items: [
        "Google Tag Manager and relevant conversion tracking setup",
        "Meta Pixel and other available tracking configurations",
        "Tracking for form submissions, phone calls, WhatsApp clicks, and other measurable actions",
        "Performance analysis across campaigns, ads, keywords, and audience segments",
      ],
    },
    {
      title: "Budget Management & Transparent Reporting",
      desc: "Keep your advertising spend organized and make campaign performance easier to monitor.",
      items: [
        "Campaign-level budgets and bidding controls based on your advertising goals",
        "Advertising accounts remain under your ownership and control",
        "Google and Meta ad spend paid directly through your own billing account",
        "Regular reports covering spend, reach, clicks, conversions, and other relevant metrics",
      ],
    },
  ];

  const benefits = [
    {
      title: "Reach Potential Customers Faster",
      desc: "Paid campaigns can put your business in front of relevant audiences soon after launch, giving you an additional channel for generating website visits, calls, and enquiries.",
    },
    {
      title: "Make Your Ad Budget More Focused",
      desc: "Relevant targeting, search-term management, and negative keywords help reduce spend on audiences and searches that are less relevant to your products or services.",
    },
    {
      title: "Understand Which Campaigns Drive Action",
      desc: "Conversion tracking helps you see how different campaigns, ads, keywords, and audiences contribute to measurable actions such as calls, form submissions, and WhatsApp enquiries.",
    },
    {
      title: "Keep Control of Your Advertising Accounts",
      desc: "Campaigns can be managed through your own Google and Meta accounts, giving you access to your advertising data, campaign history, audiences, and billing information.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Audience, Goals & Budget Planning",
      desc: "We understand your target customers, service areas, offers, campaign goals, and comfortable advertising budget before deciding where and how to run your campaigns.",
    },
    {
      num: "02",
      title: "Keyword & Audience Research",
      desc: "For Google Ads, we research relevant search terms and identify negative keywords. For Meta Ads, we define suitable audience segments based on location, interests, demographics, and available platform signals.",
    },
    {
      num: "03",
      title: "Ad Copy, Creatives & Tracking Setup",
      desc: "We prepare search ad copy and visual creatives where required, configure the campaigns, and set up conversion tracking for important customer actions.",
    },
    {
      num: "04",
      title: "Campaign Launch & Ongoing Optimization",
      desc: "We launch the campaigns with appropriate budgets and bidding settings, then review performance regularly to refine keywords, audiences, ads, and campaign settings based on available data.",
    },
    {
      num: "05",
      title: "Performance Review & Next Steps",
      desc: "We review spend, traffic, conversions, and other relevant metrics to identify what is performing well, what needs adjustment, and where the next optimization opportunities lie.",
    },
  ];

  const relevantProjects = workProjects.filter((p) =>
    ["service-lead-pipeline", "dtc-brand-scaling"].includes(p.slug)
  );

  const faqs = [
    {
      question:
        "How much budget should I spend on Google Ads or Meta Ads?",
      answer:
        "Your advertising budget depends on your industry, target audience, competition, and campaign goals. Aetibar helps you determine a practical starting budget based on your business requirements and available resources.",
    },
    {
      question:
        "How much do paid advertising management services cost in Udaipur?",
      answer:
        "Management fees depend on campaign complexity, advertising platforms, and ongoing optimization requirements. Aetibar provides a project-specific quote, with Google Ads and Meta Ads spend charged separately.",
    },
    {
      question: "Who pays for Google Ads and Facebook or Instagram ads?",
      answer:
        "Your advertising spend is paid directly to Google or Meta through your own advertising account. This helps you retain control over billing, budget, campaign data, and account access.",
    },
    {
      question:
        "How soon can paid advertising generate leads for my business?",
      answer:
        "Campaigns can start receiving clicks after approval and launch, but qualified leads may take longer. Results depend on your offer, targeting, budget, competition, and landing page quality.",
    },
    {
      question:
        "Should my business use Google Ads or Facebook and Instagram ads?",
      answer:
        "Google Ads can reach people actively searching for products or services, while Facebook and Instagram ads support audience targeting, brand awareness, and retargeting. The right platform depends on your business goals and target customers.",
    },
    {
      question:
        "Can you track calls, contact forms, and WhatsApp enquiries from ads?",
      answer:
        "Yes, conversion tracking can measure supported actions such as form submissions, calls, WhatsApp clicks, and purchases. Tracking availability depends on your website setup and advertising platforms.",
    },
    {
      question:
        "What do you need before launching a paid advertising campaign?",
      answer:
        "We typically need your business goals, target audience, locations, offer, budget, and website or landing page details. Access to advertising accounts and relevant brand assets may also be required.",
    },
    {
      question: "How do you measure Google Ads and Meta Ads performance?",
      answer:
        "We review relevant metrics such as clicks, conversions, cost per lead, and conversion rate where tracking is available. These insights help identify opportunities to improve targeting, ads, and landing pages.",
    },
    {
      question: "How can I choose a paid advertising company in Udaipur?",
      answer:
        "Look for a provider that explains its campaign strategy, reporting methods, management fees, and advertising budget requirements. Clear account ownership and measurable campaign objectives are also important.",
    },
    {
      question:
        "Does Aetibar provide Google Ads and Meta Ads management in Udaipur?",
      answer:
        "Aetibar offers paid advertising solutions based on business goals, target audiences, and campaign requirements. The recommended platforms and strategy depend on your objectives and available budget.",
    },
  ];

  return (
    <Box sx={{ width: "100%", bgcolor: "#FFFFFF", overflow: "hidden" }}>
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
              <AdsClickOutlinedIcon sx={{ fontSize: 18, color: "#D8E5D5" }} />
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
               Performance Marketing Services
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
              Performance Marketing Company in Udaipur —{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                Google & Meta Ads for Better Enquiries
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
              Targeted Google Search and Meta ad campaigns with controlled budgets, audience targeting, ongoing optimization, and clear conversion tracking.
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
              As a best performance marketing company in Udaipur, we plan, manage, and optimize campaigns across Google Ads and Meta Ads, including Instagram and Facebook. We focus on reaching relevant audiences, reducing unnecessary ad spend, and tracking meaningful actions such as calls, form submissions, website visits, and other enquiries where proper tracking is available.
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
                Discuss Campaign Strategy
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
                Explore Deliverables
              </Button>
            </Box>
          </Box>

          {/* 4 Bottom Highlight Cards (Glass Dark Theme) */}
          <Grid container spacing={2.5}>
            {heroHighlights.map((stat, i) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={i}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    bgcolor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(216, 229, 213, 0.12)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.07)",
                      borderColor: "rgba(216, 229, 213, 0.25)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 1.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        fontSize: "1.5rem",
                        fontWeight: 400,
                        color: "#D8E5D5",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: "8px",
                        bgcolor: "rgba(61, 118, 93, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {stat.icon}
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      color: "#FFFFFF",
                      mb: 0.5,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {stat.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "rgba(216, 229, 213, 0.75)",
                      lineHeight: 1.5,
                    }}
                  >
                    {stat.desc}
                  </Typography>
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
              Is Paid Advertising Right for Your Business?
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              High-intent targeting engineered for brands seeking direct response and reliable enquiry generation.
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
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        bgcolor: "#183D35",
                        color: "#D8E5D5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        fontFamily: "monospace",
                        mb: 2,
                      }}
                    >
                      {idx + 1}
                    </Box>
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
        id="challenges"
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
              Common Advertising Obstacles We Solve
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Eliminating budget waste and connecting campaigns to actual revenue and enquiries.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {problemsAddressed.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: "18px",
                    p: { xs: 3, sm: 4 },
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
                  {/* Problem Statement */}
                  <Box sx={{ mb: 2.5 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                        color: "#DC2626",
                      }}
                    >
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          bgcolor: "#FEE2E2",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                        }}
                      >
                        ✕
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          fontFamily: "monospace",
                        }}
                      >
                        The Problem
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        fontSize: "1.15rem",
                        fontWeight: 400,
                        color: "#183D35",
                        letterSpacing: "-0.015em",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.problem}
                    </Typography>
                  </Box>

                  {/* Solution Statement */}
                  <Box
                    sx={{
                      pt: 2.5,
                      borderTop: "1px dashed rgba(24, 61, 53, 0.12)",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                        color: "#16A34A",
                      }}
                    >
                      <CheckCircleOutlinedIcon sx={{ fontSize: 18 }} />
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          fontFamily: "monospace",
                        }}
                      >
                        How We Help
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        color: "#52525B",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.howWeHelp}
                    </Typography>
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
              Complete Paid Advertising Services
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              From Google Search & Call campaigns to Meta visual ads, pixel tracking, and transparent budget management.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {deliverables.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
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
                      fontSize: "1.25rem",
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
                      lineHeight: 1.6,
                      mb: 2.5,
                    }}
                  >
                    {item.desc}
                  </Typography>

                  <Box sx={{ mt: "auto", pt: 2, borderTop: "1px solid rgba(24, 61, 53, 0.08)" }}>
                    <Typography
                      sx={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "#3D765D",
                        fontFamily: "monospace",
                        mb: 1.5,
                      }}
                    >
                      Included Deliverables
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      {item.items.map((bullet, bIdx) => (
                        <Box
                          key={bIdx}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1,
                          }}
                        >
                          <CheckIcon
                            sx={{
                              fontSize: 16,
                              color: "#3D765D",
                              mt: 0.3,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: "0.82rem",
                              color: "#3F3F46",
                              lineHeight: 1.5,
                            }}
                          >
                            {bullet}
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
              Direct account ownership, negative keyword controls, and verified conversion tracking.
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
              How We Execute Paid Advertising Engagements
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Data-backed research, targeted campaigns, tracking validation, and proactive weekly optimization.
            </Typography>
          </Box>

          <Grid container spacing={2.5}>
            {processSteps.map((step, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#F7F7F2",
                    borderRadius: "16px",
                    p: 3,
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
                      fontSize: "1.8rem",
                      fontWeight: 400,
                      color: "#3D765D",
                      mb: 1.5,
                    }}
                  >
                    {step.num}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                      fontSize: "1.1rem",
                      fontWeight: 400,
                      color: "#183D35",
                      letterSpacing: "-0.015em",
                      mb: 1,
                      lineHeight: 1.35,
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
                Recent Paid Marketing Projects
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Explore how we helped brands launch scalable campaigns and conversion pipelines.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {relevantProjects.map((project) => (
                <Grid size={{ xs: 12, sm: 6, lg: 6 }} key={project.slug}>
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
                        height: 220,
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
                        p: 3.5,
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
                            fontSize: "1.25rem",
                            fontWeight: 400,
                            letterSpacing: "-0.015em",
                            color: "#183D35",
                            mb: 1,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.875rem",
                            color: "#52525B",
                            lineHeight: 1.6,
                            mb: 2,
                          }}
                        >
                          {project.summary}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          pt: 2,
                          borderTop: "1px solid rgba(24, 61, 53, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "1.1rem",
                              fontWeight: 700,
                              color: "#183D35",
                              lineHeight: 1.2,
                            }}
                          >
                            {project.primaryMetric}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "0.72rem",
                              color: "#71717A",
                              letterSpacing: "0.04em",
                            }}
                          >
                            {project.primaryMetricLabel}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            color: "#3D765D",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                          }}
                        >
                          <span>Case Study</span>
                          <ArrowForwardIcon sx={{ fontSize: 16 }} />
                        </Box>
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
        id="faq"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: "center",
              mb: { xs: 5, md: 6 },
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
              Clear Answers About Paid Advertising
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Details on budgets, billing, platform choices, conversion tracking, and campaign launch timelines.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {faqs.map((faq, idx) => (
              <Accordion
                key={idx}
                expanded={expandedFaq === idx}
                onChange={(_, isExpanded) => setExpandedFaq(isExpanded ? idx : false)}
                sx={{
                  bgcolor: "#F7F7F2",
                  borderRadius: "14px !important",
                  border: "1px solid rgba(24, 61, 53, 0.08)",
                  boxShadow: "none",
                  "&:before": { display: "none" },
                  "&.Mui-expanded": {
                    bgcolor: "#FFFFFF",
                    borderColor: "#3D765D",
                    boxShadow: "0 6px 20px -6px rgba(24, 61, 53, 0.08)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#183D35" }} />}
                  sx={{
                    px: 3,
                    py: 1,
                    "& .MuiAccordionSummary-content": { my: 1.2 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                      fontSize: "1.1rem",
                      fontWeight: 400,
                      color: "#183D35",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
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
      {/* 9. BOTTOM CONVERSION CTA (LEFT-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#183D35",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: "880px",
              textAlign: "left",
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
                bgcolor: "rgba(61, 118, 93, 0.35)",
                border: "1px solid rgba(216, 229, 213, 0.2)",
                color: "#D8E5D5",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2.5,
              }}
            >
              START YOUR PROJECT
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "2rem", sm: "2.8rem", md: "3.4rem" },
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                color: "#FFFFFF",
                mb: 2,
              }}
            >
              Ready to Make Your Paid Ads{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                Work More Effectively?
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                color: "rgba(216, 229, 213, 0.85)",
                lineHeight: 1.75,
                maxWidth: "720px",
                mb: 4,
              }}
            >
              Tell us about your business, target customers, and advertising goals. We'll discuss a practical campaign approach, suitable platforms, and a starting budget based on your requirements.
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
                Schedule an Advertising Consultation
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export { PerformanceMarketingClient as PaidAdvertisingClient };

