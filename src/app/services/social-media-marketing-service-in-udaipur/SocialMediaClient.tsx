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
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { motion } from "framer-motion";
import { workProjects } from "../../../data/workData";
import HomeScrollProgress from "../../../components/home/HomeScrollProgress";

export default function SocialMediaClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | false>(false);

  const heroHighlights = [
    {
      value: "Weekly",
      title: "Consistent Publishing",
      desc: "Never worry about inactive profiles with structured monthly content calendars.",
      icon: <CalendarMonthOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "Custom",
      title: "Branded Creatives",
      desc: "Bespoke graphics and carousels crafted specifically for your visual brand identity.",
      icon: <PaletteOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "100%",
      title: "Pre-Approved Content",
      desc: "You review and approve every single post, reel idea, and caption before it goes live.",
      icon: <VerifiedOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "Multi",
      title: "Targeted Channels",
      desc: "Platform-adapted strategies for Instagram, Facebook, and LinkedIn.",
      icon: <ShareOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
  ];

  const whoIsItFor = [
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
  ];

  const problemsAddressed = [
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
  ];

  const deliverables = [
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
  ];

  const benefits = [
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
  ];

  const processSteps = [
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
  ];

  const relevantProjects = workProjects.filter((p) =>
    ["rebranding-fintech-identity", "dtc-brand-scaling"].includes(p.slug)
  );

  const faqs = [
    {
      question: "How much does social media management cost in Udaipur?",
      answer:
        "Pricing depends on the number of platforms, posting frequency, and content requirements. Aetibar provides a tailored quote based on your business goals and required services.",
    },
    {
      question: "What is included in your social media marketing services?",
      answer:
        "Services may include content planning, post and reel creatives, captions, scheduling, publishing, and performance reporting. Deliverables are agreed upon before work begins.",
    },
    {
      question: "How much time do I need to spend on social media management?",
      answer:
        "Your involvement mainly includes sharing business updates and reviewing content before publishing. The time required depends on your approval process and content needs.",
    },
    {
      question: "Which social media platforms are best for my business?",
      answer:
        "Instagram and Facebook may suit consumer-focused businesses, while LinkedIn can be useful for B2B companies. The right platforms depend on your target audience and marketing goals.",
    },
    {
      question: "How often will you post on my business social media accounts?",
      answer:
        "Posting frequency depends on your goals, platforms, and content plan. Aetibar agrees on a content calendar outlining planned posts and publishing schedules.",
    },
    {
      question: "Can I approve social media posts before publishing?",
      answer:
        "Yes, content and creatives can be shared for your approval before publishing. The revision process is agreed upon at the start of the engagement.",
    },
    {
      question: "Can social media marketing help my business get more leads?",
      answer:
        "Social media marketing can increase brand awareness and encourage relevant enquiries through targeted content and clear calls to action. Results depend on your audience, offer, consistency, and budget.",
    },
    {
      question: "How do you measure social media marketing performance?",
      answer:
        "We can track reach, engagement, profile visits, link clicks, and enquiries where data is available. Regular reporting helps identify effective content and areas for improvement.",
    },
    {
      question: "Do I need to share my social media passwords?",
      answer:
        "No, where supported, we use official business management tools and account permissions. This helps avoid sharing personal login credentials.",
    },
    {
      question: "Are paid social media ads included in social media management?",
      answer:
        "Organic social media management and paid advertising are separate services unless agreed otherwise. Advertising budgets and applicable management fees are clarified before campaigns begin.",
    },
    {
      question: "How can I choose a social media marketing company in Udaipur?",
      answer:
        "Look for a company that understands your audience, explains its content strategy, and provides clear deliverables and reporting. Choose a service scope that matches your business goals and budget.",
    },
    {
      question: "Does Aetibar provide social media marketing services in Udaipur?",
      answer:
        "Aetibar provides social media marketing solutions tailored to business goals, including content planning, creative development, and account management where agreed. The scope depends on your requirements.",
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
              <ShareOutlinedIcon sx={{ fontSize: 18, color: "#D8E5D5" }} />
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
                Social Media Marketing Services
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
              Social Media Marketing Company in Udaipur —{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                Stay Visible & Build Trust
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
              Consistent content planning, branded visuals, and clear messaging that help your business maintain a professional and active presence across social media.
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
              As a best social media marketing service in Udaipur, we handle the planning and execution behind your social media presence — from content topics and custom branded graphics to captions and publishing. The goal is simple: keep your business visible, communicate what you offer clearly, and give potential customers a stronger reason to engage with your brand.
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
                Plan Your Social Strategy
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
              Is This Right for Your Business?
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Tailored social media solutions for brands seeking consistent presence, engagement, and authority.
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
              Common Social Media Obstacles We Solve
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Practical content systems that eliminate inconsistency and brand fatigue.
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
              Complete Social Media Marketing Services
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              From custom visual creatives and monthly scheduling to platform strategy and performance analysis.
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
              Consistent creative execution, brand reliability, and time saved for your internal team.
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
              How We Execute Social Media Engagements
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              A collaborative, structured process from monthly concept ideation to published creatives.
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
                Recent Brand & Social Projects
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Explore how we helped brands build strong digital presences and audience engagement.
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
              Clear Answers About Social Media Marketing
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Details on content approval workflows, deliverables, platforms, and reporting.
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
              Ready to Strengthen Your Social{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                Media Presence?
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
              Tell us about your business, audience, and current social profiles. We'll understand what you're trying to achieve and discuss a practical content approach that fits your brand.
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
                Schedule a Content Consultation
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

