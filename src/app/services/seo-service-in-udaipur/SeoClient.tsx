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
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { motion } from "framer-motion";
import { workProjects } from "../../../data/workData";
import HomeScrollProgress from "../../../components/home/HomeScrollProgress";

export default function SeoClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | false>(false);

  const heroHighlights = [
    {
      value: "Organic",
      title: "Sustainable Traffic",
      desc: "Long-term visibility in Google searches without recurring ad spend per click.",
      icon: <TrendingUpOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "Local",
      title: "Google Maps & Search",
      desc: "Target nearby customers actively looking for your services in your local area.",
      icon: <PlaceOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "White-Hat",
      title: "Ethical & Transparent",
      desc: "Search engine approved technical and on-page practices with zero shady shortcuts.",
      icon: <VerifiedOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "Tracked",
      title: "Clear Performance",
      desc: "Transparent reporting on queries, impressions, clicks, rankings, and enquiries.",
      icon: <InsightsOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
  ];

  const whoIsItFor = [
    {
      title: "Local Businesses",
      desc: "You want to improve your visibility in local search and help nearby customers discover your business through Google Search and Maps.",
    },
    {
      title: "B2B Companies",
      desc: "You want to reach potential clients through organic search and build a stronger source of relevant website enquiries over time.",
    },
    {
      title: "New & Redesigned Websites",
      desc: "You are launching or updating a website and want to build a strong SEO foundation from the start, with the right structure, content, and technical setup.",
    },
    {
      title: "Businesses Looking for Better SEO",
      desc: "You want a clearer SEO strategy, useful reporting, and practical improvements instead of focusing only on rankings, traffic, or other surface-level metrics.",
    },
  ];

  const problemsAddressed = [
    {
      problem:
        "Your business is missing from important Google searches for your products or services",
      howWeHelp:
        "We identify technical issues that can affect crawling and indexing, review your site structure and sitemaps, and optimize important pages so search engines can better understand and discover your website.",
    },
    {
      problem:
        "Losing search visibility after redesigning or restructuring your website",
      howWeHelp:
        "Changes to page URLs can affect existing search visibility. We plan and implement 301 redirects, review internal links, and check important pages after launch to help preserve existing SEO signals during the transition.",
    },
    {
      problem:
        "Your website content doesn't match what potential customers are actually searching for",
      howWeHelp:
        "We research relevant keywords and search intent, then improve your service pages, supporting content, headings, metadata, and internal links to make your website more relevant to the searches that matter to your business.",
    },
    {
      problem:
        "Your website isn't prepared for how people discover information through modern search and AI-powered answers",
      howWeHelp:
        "Alongside traditional SEO, we structure useful content around clear questions, topics, entities, and search intent so it can be easier for search engines and AI-powered search experiences to understand, interpret, and reference.",
    },
    {
      problem:
        "Slow pages, mobile issues, and unclear SEO reporting make it difficult to know what's working",
      howWeHelp:
        "We review page performance, mobile usability, images, scripts, and other technical factors that affect user experience. We also provide straightforward reporting on search visibility, organic traffic, important queries, and tracked enquiries where measurement is available.",
    },
  ];

  const deliverables = [
    {
      title: "Technical SEO & Search Engine Optimization",
      desc: "Fix the technical issues that can prevent search engines from properly crawling, understanding, and indexing your website.",
      items: [
        "Fixing broken links, missing pages, crawl issues, and indexing problems",
        "Improving page speed, mobile usability, and Core Web Vitals where needed",
        "XML sitemap and robots.txt configuration",
        "SSL, canonical tags, redirects, and essential technical SEO checks",
      ],
    },
    {
      title: "Local SEO & Google Business Profile",
      desc: "Improve your local search visibility and help nearby customers discover your business through Google Search and Google Maps.",
      items: [
        "Google Business Profile setup, verification, and optimization",
        "Business categories, address, phone, hours, and service information",
        "Local keyword targeting based on your services and target areas",
        "Review guidance and local profile improvements to strengthen your online presence",
      ],
    },
    {
      title: "Keyword Research & On-Page SEO",
      desc: "Find the searches relevant to your business and optimize your website pages around useful keywords and customer search intent.",
      items: [
        "Keyword research based on relevance, search intent, and business goals",
        "Optimizing page titles, meta descriptions, H1-H3 headings, and page structure",
        "Improving service pages and supporting content around relevant search topics",
        "Internal linking between related pages and important conversion paths",
      ],
    },
    {
      title: "SEO Content & AI Search Optimization",
      desc: "Create useful, well-structured content that supports organic search visibility while making your business information easier for modern search and AI-powered systems to understand.",
      items: [
        "Content planning around customer questions, topics, and search intent",
        "Clear answers to relevant product, service, and industry questions",
        "Improving topical context and entity relationships across important pages",
        "Structured data and content organization where appropriate",
      ],
    },
    {
      title: "Website Redesign & SEO Migration",
      desc: "Reduce the risk of losing existing search visibility when changing your website design, structure, or page URLs.",
      items: [
        "Mapping important old URLs to relevant new pages",
        "Implementing and checking 301 redirects during website migration",
        "Updating internal links, canonical URLs, and XML sitemaps",
        "Monitoring indexing and organic search performance after launch",
      ],
    },
    {
      title: "SEO Performance & Monthly Reporting",
      desc: "Track your organic search performance with straightforward reports that show what changed, what was improved, and what to work on next.",
      items: [
        "Search queries, clicks, impressions, and average search positions",
        "Organic traffic and important landing-page performance",
        "Google Business Profile and local search performance where available",
        "Clear summary of completed SEO work, findings, and next priorities",
      ],
    },
  ];

  const benefits = [
    {
      title: "Build Long-Term Organic Visibility",
      desc: "SEO helps your website become more discoverable in relevant Google searches, creating an organic source of visibility that can continue working alongside your other marketing channels.",
    },
    {
      title: "Reach Customers With Relevant Search Intent",
      desc: "By targeting searches that match your products, services, and audience, SEO helps bring visitors who are actively looking for information, solutions, or businesses like yours.",
    },
    {
      title: "Strengthen Your Local Search Presence",
      desc: "Local SEO helps your business become more visible across Google Search and Maps, making it easier for people in your service area to discover your business.",
    },
    {
      title: "Turn Your Website Into a Better Search Asset",
      desc: "Technical improvements, useful content, clear page structure, and internal linking make your website easier for search engines to understand while creating a better experience for visitors.",
    },
    {
      title: "Stay Discoverable Across Modern Search",
      desc: "Well-structured, helpful content can support visibility not only in traditional search results but also across evolving AI-powered search and answer experiences.",
    },
    {
      title: "Make SEO Performance Easier to Understand",
      desc: "Clear reporting on search queries, impressions, clicks, organic traffic, and other available metrics helps you understand how your search visibility is changing and where further improvements are needed.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Website & Search Audit",
      desc: "We review your website structure, technical SEO, mobile experience, existing search visibility, and relevant competitors to identify opportunities and issues affecting organic search.",
    },
    {
      num: "02",
      title: "Keyword & Search Intent Research",
      desc: "We research relevant keywords and the types of searches your target audience makes, then prioritize topics based on relevance, search intent, competition, and your business goals.",
    },
    {
      num: "03",
      title: "Technical & On-Page Optimization",
      desc: "We address technical SEO issues, improve page structure and metadata, optimize important service pages, strengthen internal linking, and improve performance where needed.",
    },
    {
      num: "04",
      title: "Local SEO & Content Optimization",
      desc: "We optimize your Google Business Profile and local search signals while improving website content to answer relevant customer questions and provide clearer information about your products and services.",
    },
    {
      num: "05",
      title: "Monitoring, Reporting & Ongoing SEO",
      desc: "We track search performance, organic traffic, important queries, and other available metrics, then use the findings to identify further SEO improvements and priorities for the next stage.",
    },
  ];

  const relevantProjects = workProjects.filter((p) =>
    ["enterprise-seo-migration", "nexus-ecommerce"].includes(p.slug)
  );

  const faqs = [
    {
      question: "How much do SEO services cost in Udaipur?",
      answer:
        "SEO costs depend on your website, competition, target keywords, and optimization requirements. Aetibar provides a project-specific quote based on your business goals and SEO needs.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO improvements can take several months, depending on your website's condition, competition, and strategy. Aetibar focuses on sustainable search visibility rather than promising fixed ranking timelines.",
    },
    {
      question: "What is included in your SEO services?",
      answer:
        "Depending on your requirements, SEO services may include keyword research, on-page SEO, technical SEO, content optimization, internal linking, and local SEO. Aetibar defines the scope according to your website's priorities.",
    },
    {
      question: "Can an SEO company guarantee first-page Google rankings?",
      answer:
        "No SEO company can guarantee specific Google rankings. We focus on improving technical health, content relevance, and search visibility using established SEO practices.",
    },
    {
      question: "Can SEO help my business generate more qualified leads?",
      answer:
        "SEO helps your business reach people searching for relevant products or services. Results depend on search demand, competition, your website experience, and the relevance of your offer.",
    },
    {
      question: "Do I need local SEO services for my business?",
      answer:
        "Local SEO is useful for businesses targeting customers in specific locations. It may include Google Business Profile optimization, local keywords, accurate business information, and location-relevant content.",
    },
    {
      question: "What is the difference between SEO and Google Ads?",
      answer:
        "SEO improves unpaid search visibility over time, while Google Ads provides paid search placements. The right approach depends on your business goals, timeline, and budget.",
    },
    {
      question: "Do I need a website redesign before starting SEO?",
      answer:
        "Not necessarily. An SEO audit can identify whether targeted improvements to technical performance, content, mobile usability, and page structure are sufficient or a redesign is needed.",
    },
    {
      question: "How do you measure SEO performance?",
      answer:
        "We can monitor search impressions, clicks, organic traffic, keyword performance, and relevant enquiries where tracking is available. Reporting focuses on metrics aligned with your business goals.",
    },
    {
      question: "Can SEO help my website appear in AI-powered search results?",
      answer:
        "Useful, well-structured content and a technically accessible website support search engine discovery. However, inclusion in AI-generated answers or specific search features cannot be guaranteed.",
    },
    {
      question: "How can I choose the right SEO company in Udaipur?",
      answer:
        "Look for an SEO company that explains its strategy, deliverables, reporting, and realistic expectations. Avoid providers that guarantee rankings or promise results without understanding your website and competition.",
    },
    {
      question: "Does Aetibar provide SEO services in Udaipur?",
      answer:
        "Aetibar provides SEO services tailored to business goals, website requirements, and target audiences. The recommended strategy depends on your industry, competition, and search visibility objectives.",
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
              <SearchIcon sx={{ fontSize: 18, color: "#D8E5D5" }} />
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
                Search Engine Optimization
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
              SEO Company in Udaipur —{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                Get Found When Customers Search
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
              Practical search engine optimization that helps your business improve search visibility and reach people actively looking for your products or services.
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
              As a best SEO serives in Udaipur, we focus on the fundamentals that help search engines understand and discover your website. From technical SEO and page structure to keyword research, content, and local search optimization, we improve the parts of your online presence that can support stronger organic visibility over time.
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
                Discuss Your SEO Goals
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
              Is This the Right SEO Solution for Your Business?
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Tailored search strategies designed to deliver measurable visibility and organic search growth.
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
              Common Search Obstacles We Solve
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Practical SEO engineering that replaces indexation roadblocks with steady organic growth.
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
              Complete Search Engine Optimization Services
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              From initial audit and keyword intent mapping to technical fixes and transparent monthly reporting.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {deliverables.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
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
              Engineered for sustainable search authority, customer relevance, and transparent reporting.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {benefits.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={idx}>
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
              How We Execute SEO Engagements
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              A disciplined, research-backed methodology that delivers predictable organic discovery.
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
                Recent Search Optimization Projects
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Explore how we helped brands build strong organic search foundations and traffic.
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
              Clear Answers About SEO Services
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Everything you need to know about search ranking factors, deliverables, timelines, and reporting.
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
              Ready to Improve Your Google{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                Search Visibility?
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
              Tell us about your business, website, and target location. We'll review your current search presence and discuss practical SEO opportunities for improving your organic visibility.
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
                Schedule an SEO Consultation
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

