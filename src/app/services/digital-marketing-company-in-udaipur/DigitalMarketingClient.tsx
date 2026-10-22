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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { motion } from "framer-motion";
import HomeScrollProgress from "../../../components/home/HomeScrollProgress";
import CompleteDigitalMarketingServices from "../../../components/services/CompleteDigitalMarketingServices";
import { WorkProject } from "../../../data/workData";

interface DigitalMarketingClientProps {
  relevantProjects: WorkProject[];
}

export default function DigitalMarketingClient({
  relevantProjects,
}: DigitalMarketingClientProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | false>(false);

  const heroHighlights = [
    {
      value: "3-in-1",
      title: "One Digital Marketing Strategy",
      desc: "SEO, social media marketing, and paid advertising working together to build visibility and bring in more enquiries.",
      icon: <VerifiedOutlinedIcon sx={{ fontSize: 20, color: "#3D765D" }} />,
    },
    {
      value: "100%",
      title: "Your Accounts, Your Assets",
      desc: "You keep ownership of your Google Ads, analytics, social media accounts, and creative assets with no lock-in.",
      icon: <LockOutlinedIcon sx={{ fontSize: 20, color: "#3D765D" }} />,
    },
    {
      value: "SEO",
      title: "Get Found on Google",
      desc: "Improve your search visibility with practical SEO strategies designed to attract people actively looking for your services.",
      icon: <SpeedOutlinedIcon sx={{ fontSize: 20, color: "#3D765D" }} />,
    },
    {
      value: "Direct",
      title: "Leads Directly to You",
      desc: "Turn interested visitors into calls, WhatsApp messages, and enquiries through targeted campaigns and clear conversion paths.",
      icon: <PhoneInTalkOutlinedIcon sx={{ fontSize: 20, color: "#3D765D" }} />,
    },
  ];

  const subServiceSections = [
    {
      id: "seo",
      badge: "SEARCH ENGINE OPTIMIZATION",
      title: "SEO Service in Udaipur",
      titleHighlight: "Get Found When Customers Search for Your Business.",
      tagline:
        "Improve your visibility across Google Search and Maps and reach people actively looking for your products or services.",
      description:
        "Our search engine optimization services help your website and Google Business Profile appear for relevant searches. We improve technical performance, on-page content, local search signals, keyword targeting, and site structure to build stronger organic visibility and attract more relevant visitors over time.",
      icon: <SearchIcon sx={{ fontSize: 20, color: "#3D765D" }} />,
      detailUrl: "/services/seo-service-in-udaipur",
      detailLabel: "Explore SEO Services",
      metrics: [
        { value: "Search", label: "Organic Visibility" },
        { value: "Local", label: "Google Maps Presence" },
        { value: "Organic", label: "Long-Term Traffic" },
      ],
      deliverables: [
        {
          title: "Technical SEO",
          desc: "Improve crawling, indexing, site structure, page speed, and other technical elements that influence search performance.",
        },
        {
          title: "Local Search Optimization",
          desc: "Optimize your Google Business Profile and local presence so nearby customers can discover your business more easily.",
        },
        {
          title: "Keyword Research & Strategy",
          desc: "Identify relevant search terms based on customer needs, search intent, competition, and opportunities in your market.",
        },
        {
          title: "On-Page SEO & Content",
          desc: "Optimize headings, metadata, content, internal links, and structured data to make your pages clearer to both users and search engines.",
        },
      ],
      benefits: [
        "Improve visibility for relevant searches on Google",
        "Reach people actively looking for your products or services",
        "Strengthen your presence in local search and Google Maps",
        "Build a steady source of organic website traffic over time",
      ],
    },
    {
      id: "smm",
      badge: "SOCIAL MEDIA & CONTENT",
      title: "Social Media Marketing Service in Udaipur",
      titleHighlight: "Build a Social Presence Your Customers Can Trust.",
      tagline:
        "Consistent content, branded visuals, and engaging campaigns that keep your business visible across the platforms your customers use.",
      description:
        "We help businesses build a professional social media presence on Instagram, Facebook, and LinkedIn through planned content, branded visuals, short-form videos, and profile optimization.",
      icon: <ShareOutlinedIcon sx={{ fontSize: 20, color: "#3D765D" }} />,
      detailUrl: "/services/social-media-marketing-service-in-udaipur",
      detailLabel: "Explore Social Media Services",
      metrics: [
        { value: "Monthly", label: "Content Planning" },
        { value: "Custom", label: "Branded Visuals" },
        { value: "Multi-Platform", label: "Social Presence" },
      ],
      deliverables: [
        {
          title: "Content Planning",
          desc: "Plan monthly content around your business, services, offers, industry, and the interests of your audience.",
        },
        {
          title: "Branded Graphics & Carousels",
          desc: "Create consistent visual content that follows your brand identity and communicates your message clearly.",
        },
        {
          title: "Reels & Short-Form Video",
          desc: "Create short-form videos that showcase your products, services, expertise, work, and customer experience.",
        },
        {
          title: "Profile Optimization",
          desc: "Improve your social profiles, bios, calls to action, links, and overall presentation so visitors can understand your business quickly.",
        },
      ],
      benefits: [
        "Maintain a consistent and professional online presence",
        "Give potential customers more confidence when researching your business",
        "Stay visible to existing and potential customers",
        "Build stronger brand recognition across social platforms",
      ],
    },
    {
      id: "paid-advertising",
      badge: "PAID SEARCH & SOCIAL ADVERTISING",
      title: "Paid Advertising Service in Udaipur",
      titleHighlight: "Reach the Right Customers With Targeted Campaigns.",
      tagline:
        "Google Ads and Meta campaigns designed to reach relevant audiences and turn advertising spend into measurable customer actions.",
      description:
        "Paid advertising helps you reach potential customers while they are actively searching or browsing online. We manage Google Search Ads, Instagram Ads, and Facebook Ads with focused targeting, controlled budgets, conversion tracking, and ongoing campaign optimization to improve campaign performance.",
      icon: <AdsClickOutlinedIcon sx={{ fontSize: 20, color: "#3D765D" }} />,
      detailUrl: "/services/performance-marketing-company-in-udaipur",
      detailLabel: "Explore Paid Advertising Services",
      metrics: [
        { value: "Google", label: "Search Advertising" },
        { value: "Meta", label: "Instagram & Facebook" },
        { value: "Tracked", label: "Customer Actions" },
      ],
      deliverables: [
        {
          title: "Google Search Ads",
          desc: "Target relevant search terms and place your business in front of people actively looking for your products or services.",
        },
        {
          title: "Meta Advertising",
          desc: "Reach relevant audiences across Instagram and Facebook using location, interests, demographics, and other audience signals.",
        },
        {
          title: "Campaign & Budget Management",
          desc: "Set campaign goals, manage daily budgets, monitor performance, and adjust campaigns based on real results.",
        },
        {
          title: "Conversion Tracking",
          desc: "Track calls, WhatsApp messages, form submissions, and other important actions to understand where your enquiries come from.",
        },
      ],
      benefits: [
        "Reach potential customers faster than relying only on organic traffic",
        "Target specific locations and audience segments",
        "Maintain control over your advertising budget",
        "Measure calls, messages, forms, and other customer actions",
      ],
    },
  ];

  const whoIsItFor = [
    {
      title: "Local Businesses",
      desc: "Restaurants, clinics, gyms, retailers, and other local businesses that want stronger visibility in local search and more customers from their area.",
    },
    {
      title: "B2B Companies",
      desc: "Manufacturers, suppliers, agencies, and professional firms looking to build online visibility and generate more relevant business enquiries.",
    },
    {
      title: "Service Providers",
      desc: "Contractors, consultants, and service businesses that want to reach new customers, strengthen their online presence, and turn website visitors into enquiries.",
    },
    {
      title: "Businesses Ready to Grow",
      desc: "Companies that want a more structured customer acquisition strategy across search, social platforms, and targeted online campaigns.",
    },
  ];

  const problemsAddressed = [
    {
      problem: "Managing SEO, social media, and advertising separately",
      howWeHelp:
        "We bring search optimization, social media, and paid campaigns into one coordinated strategy, so your marketing efforts work toward the same business goals.",
    },
    {
      problem: "Spending on online ads without knowing what is working",
      howWeHelp:
        "We use focused targeting, negative keywords, budget controls, and conversion tracking to reduce wasted spend and understand which campaigns generate enquiries.",
    },
    {
      problem: "Losing control of marketing accounts and business assets",
      howWeHelp:
        "Your Google Ads, Meta Business, Analytics, and creative assets remain under your ownership, giving you clear access and control over your marketing setup.",
    },
    {
      problem: "Posting content without a clear purpose or consistent brand",
      howWeHelp:
        "We create content around your business, audience, and goals—from branded graphics and carousels to reels—with clear messaging and calls to action.",
    },
  ];

  const deliverables = [
    {
      title: "Multi-Channel Marketing Strategy",
      desc: "A clear marketing plan that connects search, social media, and paid campaigns around your business goals.",
      items: [
        "Market and competitor research for your target audience",
        "Consistent brand messaging across digital channels",
        "Campaign planning around promotions and seasonal opportunities",
        "Regular strategy reviews and performance recommendations",
      ],
    },
    {
      title: "SEO & Local Search Optimization",
      desc: "Improve your website and Google Business Profile so potential customers can find your business through relevant searches.",
      items: [
        "Technical SEO, site structure, speed, and mobile performance",
        "Google Business Profile and local search optimization",
        "Keyword research based on customer search intent",
        "On-page content, metadata, internal links, and structured data",
      ],
    },
    {
      title: "Social Media Management",
      desc: "Keep your social channels active and professional with content that reflects your brand and speaks to your audience.",
      items: [
        "Monthly content planning around your business and audience",
        "Branded graphics, carousels, and educational posts",
        "Short-form videos and reels showcasing your products or services",
        "Profile, bio, links, and content optimization",
      ],
    },
    {
      title: "Google & Meta Advertising",
      desc: "Reach relevant audiences through targeted campaigns across Google Search, Instagram, and Facebook.",
      items: [
        "Google Search campaigns targeting relevant customer searches",
        "Instagram and Facebook campaigns for selected audiences",
        "Negative keyword management and audience targeting",
        "Budget monitoring, campaign testing, and ongoing optimization",
      ],
    },
    {
      title: "Lead & Conversion Setup",
      desc: "Make it easier for interested visitors to contact your business and help you understand where those enquiries come from.",
      items: [
        "Click-to-call and WhatsApp integration",
        "Website enquiry forms and email notifications",
        "Conversion tracking for calls, messages, and form submissions",
        "Landing page improvements focused on clear calls to action",
      ],
    },
    {
      title: "Transparent Monthly Reporting",
      desc: "Simple reports that show what was done, what changed, and where your marketing efforts can improve next.",
      items: [
        "Website traffic and search visibility trends",
        "Google Business Profile and local search performance",
        "Campaign spend, clicks, conversions, and cost metrics",
        "Clear insights and priorities for the following month",
      ],
    },
  ];

  const benefits = [
    {
      title: "One Strategy Across Every Channel",
      desc: "Search, social media, and paid campaigns work together around the same business goals instead of operating as separate marketing activities.",
    },
    {
      title: "Smarter Use of Your Ad Budget",
      desc: "Focused targeting, negative keywords, budget controls, and regular campaign optimization help reduce unnecessary advertising spend.",
    },
    {
      title: "You Keep Control of Your Accounts",
      desc: "Your Google Ads, Meta Business, Analytics, and other marketing accounts remain under your ownership with direct access to your data and assets.",
    },
    {
      title: "Make It Easy to Contact You",
      desc: "Connect customers through WhatsApp, phone calls, forms, and other enquiry channels so interested visitors have a clear way to reach your business.",
    },
    {
      title: "One Team to Coordinate Your Marketing",
      desc: "Work with one team across search, content, social media, and advertising instead of managing multiple providers for different channels.",
    },
    {
      title: "Clear Scope & Transparent Reporting",
      desc: "Know what is included, what is being worked on, and how your campaigns are performing through clear deliverables and straightforward reporting.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discovery & Digital Audit",
      desc: "We review your website, search presence, social channels, competitors, and existing campaigns to understand what is working and where there is room to improve.",
    },
    {
      num: "02",
      title: "Strategy & Campaign Planning",
      desc: "We define your marketing priorities, target audience, content direction, SEO approach, and advertising plan based on your business goals.",
    },
    {
      num: "03",
      title: "Setup & Launch",
      desc: "We prepare the required content, tracking, landing pages, SEO improvements, and advertising campaigns, then launch each channel according to the agreed plan.",
    },
    {
      num: "04",
      title: "Monitoring & Optimization",
      desc: "We review campaign performance, search visibility, audience engagement, and customer actions to identify what needs to be adjusted or improved.",
    },
    {
      num: "05",
      title: "Monthly Review & Next Steps",
      desc: "We share a clear summary of the work completed, key performance trends, and recommended priorities for the next month.",
    },
  ];

  const faqs = [
    {
      question: "How much do digital marketing services cost in Udaipur?",
      answer:
        "The cost depends on your business goals, selected services, and campaign scope. Aetibar provides project-specific quotes, with advertising spend discussed separately where applicable.",
    },
    {
      question:
        "How can I choose the right digital marketing company in Udaipur?",
      answer:
        "Look for a company that understands your business goals, explains its strategy, and provides clear deliverables and performance reporting. Choose a partner whose services align with your needs and budget.",
    },
    {
      question:
        "Should my business start with SEO, social media marketing, or paid advertising?",
      answer:
        "SEO builds organic search visibility, social media marketing supports brand awareness, and paid advertising helps reach targeted audiences. The right choice depends on your goals, audience, and budget.",
    },
    {
      question: "What is included in your digital marketing services?",
      answer:
        "Depending on your requirements, services may include SEO, social media management, content creation, Google Ads, Meta Ads, and performance reporting. Aetibar defines the deliverables before work begins.",
    },
    {
      question:
        "How long does it take to see results from digital marketing?",
      answer:
        "Paid advertising can generate traffic soon after launch, while SEO generally takes longer to build organic visibility. Results depend on competition, strategy, budget, and campaign execution.",
    },
    {
      question:
        "Can a digital marketing agency manage SEO, social media, and paid advertising together?",
      answer:
        "Yes, these services can be coordinated to align your messaging, audience targeting, and campaign goals. You can also start with one service and expand as needed.",
    },
    {
      question: "How can I measure digital marketing performance?",
      answer:
        "Performance can be measured through website traffic, search visibility, engagement, enquiries, and advertising costs. The metrics depend on your business goals and selected services.",
    },
    {
      question:
        "What do you need to start digital marketing for my business?",
      answer:
        "We typically need your business details, target audience, goals, and existing online presence. Access to relevant marketing accounts may also be required.",
    },
    {
      question:
        "Can digital marketing guarantee more leads, sales, or higher Google rankings?",
      answer:
        "No provider can guarantee specific leads, sales, or search rankings. Results depend on market demand, competition, budget, and your overall business offering.",
    },
    {
      question:
        "Will my business retain ownership of its marketing accounts?",
      answer:
        "Your website, advertising accounts, and social media business profiles should remain under your business's ownership wherever possible. Access can be provided according to the agreed scope of work.",
    },
    {
      question:
        "Can I start with one digital marketing service and add more later?",
      answer:
        "Yes, you can begin with SEO, social media marketing, or paid advertising and add services as your needs evolve. Recommendations depend on your goals and available budget.",
    },
    {
      question:
        "Does Aetibar provide digital marketing services in Udaipur?",
      answer:
        "Aetibar provides digital marketing services tailored to business goals, including SEO, social media marketing, and paid advertising. The recommended approach depends on your audience, industry, and objectives.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#FFFFFF", color: "#183D35", minHeight: "100vh" }}>
      <HomeScrollProgress />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (LEFT-ALIGNED AGENCY STYLE WITH CTA BG & DM SERIF) */}
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
              <CampaignOutlinedIcon sx={{ fontSize: 18, color: "#D8E5D5" }} />
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
                Digital Marketing Services
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
              Digital Marketing Company in Udaipur —{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                SEO, Social Media &amp; Paid Ads
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
              One team to help your business build visibility, reach the right audience, and generate more customer enquiries online.
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
             As a best digital marketing company in Udaipur, we helps businesses in Udaipur grow their online presence through SEO, social media marketing, and paid advertising.
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
                href="#seo"
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
                        mb: 1.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.85rem",
                          fontWeight: 400,
                          color: "#D8E5D5",
                          fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        }}
                      >
                        {item.value}
                      </Typography>
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: "10px",
                          bgcolor: "rgba(61, 118, 93, 0.3)",
                          border: "1px solid rgba(216, 229, 213, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {React.cloneElement(item.icon as React.ReactElement<any>, {
                          sx: { fontSize: 20, color: "#D8E5D5" },
                        })}
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        mb: 0.8,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        color: "rgba(216, 229, 213, 0.78)",
                        lineHeight: 1.6,
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
      {/* 2. COMPLETE DIGITAL MARKETING OVERVIEW CARDS (LEFT-ALIGNED) */}
      {/* ========================================================================= */}
      <CompleteDigitalMarketingServices />

      {/* ========================================================================= */}
      {/* 3. SUB-SERVICE DETAILED CHANNEL BREAKDOWNS (STICKY NAV + DEEP DIVES) */}
      {/* ========================================================================= */}
      {/* Sticky Channel Anchor Navigation */}
      <Box
        sx={{
          position: "sticky",
          top: { xs: 68, md: 80 },
          zIndex: 90,
          bgcolor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(24, 61, 53, 0.08)",
          py: 1.5,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: { xs: 1.2, sm: 2 },
              overflowX: "auto",
              py: 0.5,
              "&::-webkit-scrollbar": { display: "none" },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#3D765D",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
                display: { xs: "none", sm: "inline-flex" },
                mr: 0.5,
              }}
            >
              Explore Channels:
            </Typography>
            {subServiceSections.map((sub) => (
              <Button
                key={sub.id}
                component="a"
                href={`#${sub.id}`}
                variant="outlined"
                size="small"
                startIcon={sub.icon}
                sx={{
                  whiteSpace: "nowrap",
                  borderRadius: "9999px",
                  px: { xs: 2, sm: 2.5 },
                  py: 0.8,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#183D35",
                  borderColor: "rgba(24, 61, 53, 0.15)",
                  bgcolor: "#FFFFFF",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "rgba(61, 118, 93, 0.08)",
                    borderColor: "#3D765D",
                    color: "#3D765D",
                  },
                }}
              >
                {sub.title}
              </Button>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Sub-Service Showcase Sections */}
      {subServiceSections.map((sub, idx) => {
        const isSeo = sub.id === "seo";
        const isSmm = sub.id === "smm";
        const isPaid = sub.id === "paid-advertising";
        const useDmSerif = isSeo || isSmm || isPaid;
        const isCenter = isSmm;

        return (
          <Box
            component="section"
            id={sub.id}
            key={sub.id}
            sx={{
              py: { xs: 8, md: 11 },
              bgcolor: idx % 2 === 0 ? "#FFFFFF" : "#F7F7F2",
              borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
              scrollMarginTop: { xs: 80, md: 100 },
            }}
          >
            {sub.id === "paid-advertising" && (
              <span id="paid-ads" style={{ position: "absolute", top: "-100px", left: 0 }} />
            )}
            <Container maxWidth="xl">
              {/* Header for this sub-service */}
              <Box
                sx={{
                  maxWidth: { xs: "100%", md: "1180px" },
                  mb: { xs: 5, md: 6 },
                  ...(isCenter && {
                    textAlign: "center",
                    mx: "auto",
                  }),
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
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#183D35",
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontFamily: "monospace",
                    }}
                  >
                    {sub.badge}
                  </Typography>
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: useDmSerif
                      ? '"DM Serif Display", var(--font-dm-serif), Georgia, serif'
                      : "inherit",
                    fontSize: { xs: "1.5rem", sm: "1.85rem", md: "2.15rem", lg: "2.4rem" },
                    fontWeight: useDmSerif ? 400 : 700,
                    color: "#183D35",
                    lineHeight: { xs: 1.25, md: 1.22 },
                    letterSpacing: useDmSerif ? "-0.015em" : "-0.03em",
                    mb: 1.8,
                    maxWidth: { xs: "100%", md: "1180px" },
                    mx: isCenter ? "auto" : undefined,
                    textWrap: "balance",
                  }}
                >
                  {sub.title} —{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "#3D765D",
                      fontStyle: useDmSerif ? "italic" : "normal",
                    }}
                  >
                    {sub.titleHighlight}
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    color: "#3D765D",
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    fontWeight: 600,
                    lineHeight: 1.5,
                    mb: 1.8,
                    maxWidth: "860px",
                    mx: isCenter ? "auto" : undefined,
                    ...(isCenter && { textAlign: "center" }),
                  }}
                >
                  {sub.tagline}
                </Typography>

                <Typography
                  sx={{
                    color: "#52525B",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    mb: 3,
                    maxWidth: "820px",
                    mx: isCenter ? "auto" : undefined,
                    ...(isCenter && { textAlign: "center" }),
                  }}
                >
                  {sub.description}
                </Typography>

                <Box sx={{ ...(isCenter && { display: "flex", justifyContent: "center" }) }}>
                  <Link href={sub.detailUrl} style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        bgcolor: "#183D35",
                        color: "#FFFFFF",
                        px: 3,
                        py: 1.1,
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        borderRadius: "10px",
                        textTransform: "none",
                        boxShadow: "none",
                        "&:hover": {
                          bgcolor: "#3D765D",
                        },
                      }}
                    >
                      {sub.detailLabel}
                    </Button>
                  </Link>
                </Box>
              </Box>

              {/* Performance Metrics */}
              <Grid container spacing={2.5} sx={{ mb: { xs: 5, md: 6 } }}>
                {sub.metrics.map((m, mIdx) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={mIdx}>
                    <Box
                      sx={{
                        p: { xs: 2.5, sm: 3 },
                        borderRadius: "16px",
                        bgcolor: idx % 2 === 0 ? "#F7F7F2" : "#FFFFFF",
                        border: "1px solid rgba(24, 61, 53, 0.08)",
                        textAlign: isCenter ? "center" : "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.6rem",
                          fontWeight: useDmSerif ? 400 : 800,
                          color: "#3D765D",
                          fontFamily: useDmSerif
                            ? '"DM Serif Display", var(--font-dm-serif), Georgia, serif'
                            : "monospace",
                          mb: 0.5,
                        }}
                      >
                        {m.value}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "#52525B",
                          fontWeight: 600,
                        }}
                      >
                        {m.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Deliverables & Benefits Grid */}
              <Grid container spacing={{ xs: 4, lg: 6 }}>
                {/* Deliverables Column */}
                <Grid size={{ xs: 12, lg: 7 }}>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#3D765D",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontFamily: "monospace",
                      mb: 2.5,
                      textAlign: isCenter ? "center" : "left",
                    }}
                  >
                    CORE DELIVERABLES:
                  </Typography>
                  <Grid container spacing={2.5}>
                    {sub.deliverables.map((item, dIdx) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={dIdx}>
                        <Box
                          sx={{
                            p: { xs: 2.5, sm: 3 },
                            borderRadius: "16px",
                            bgcolor: idx % 2 === 0 ? "#F7F7F2" : "#FFFFFF",
                            border: "1px solid rgba(24, 61, 53, 0.08)",
                            height: "100%",
                            textAlign: isCenter ? "center" : "left",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.95rem",
                              fontWeight: useDmSerif ? 400 : 700,
                              fontFamily: useDmSerif
                                ? '"DM Serif Display", var(--font-dm-serif), Georgia, serif'
                                : "inherit",
                              color: "#183D35",
                              mb: 0.8,
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "0.85rem",
                              color: "#52525B",
                              lineHeight: 1.6,
                            }}
                          >
                            {item.desc}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                {/* Benefits Column */}
                <Grid size={{ xs: 12, lg: 5 }}>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#3D765D",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontFamily: "monospace",
                      mb: 2.5,
                      textAlign: isCenter ? "center" : "left",
                    }}
                  >
                    KEY BENEFITS:
                  </Typography>
                  <Box
                    sx={{
                      p: { xs: 3, sm: 3.5 },
                      borderRadius: "18px",
                      bgcolor: idx % 2 === 0 ? "#F7F7F2" : "#FFFFFF",
                      border: "1px solid rgba(24, 61, 53, 0.08)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    {sub.benefits.map((benefit, bIdx) => (
                      <Box
                        key={bIdx}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.5,
                          ...(isCenter && {
                            justifyContent: "center",
                            textAlign: "center",
                          }),
                        }}
                      >
                        <CheckCircleOutlinedIcon
                          sx={{ fontSize: 18, color: "#3D765D", mt: 0.2, flexShrink: 0 }}
                        />
                        <Typography
                          sx={{
                            fontSize: "0.875rem",
                            color: "#183D35",
                            fontWeight: 500,
                            lineHeight: 1.55,
                          }}
                        >
                          {benefit}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        );
      })}

      {/* ========================================================================= */}
      {/* 4. WHO IS THIS SERVICE FOR? (CENTER-ALIGNED WITH DM SERIF) */}
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
              Built for businesses that want structured, measurable digital growth.
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
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
                    textAlign: "center",
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
      {/* 5. PROBLEMS WE ADDRESS (LEFT-ALIGNED WITH DM SERIF) */}
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
              Eliminating wasted spend, fragmented channels, and zero-accountability marketing.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {problemsAddressed.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: "20px",
                    p: { xs: 3, sm: 3.8 },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    height: "100%",
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#DC2626",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        fontFamily: "monospace",
                        mb: 0.8,
                      }}
                    >
                      THE PROBLEM:
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        fontSize: "1.15rem",
                        fontWeight: 400,
                        letterSpacing: "-0.015em",
                        color: "#183D35",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.problem}
                    </Typography>
                  </Box>

                  <Box sx={{ pt: 2, borderTop: "1px solid rgba(24, 61, 53, 0.06)" }}>
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#3D765D",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        fontFamily: "monospace",
                        mb: 0.8,
                      }}
                    >
                      HOW WE HELP:
                    </Typography>
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
      {/* 6. WHAT YOU GET / DELIVERABLES (CENTER-ALIGNED WITH DM SERIF) */}
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
              What You Get
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7, mx: "auto" }}>
              Concrete deliverables, transparent scopes, and complete operational clarity.
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
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
                        fontSize: "0.85rem",
                        color: "#52525B",
                        lineHeight: 1.6,
                        mb: 2,
                      }}
                    >
                      {item.desc}
                    </Typography>

                    {item.items && item.items.length > 0 && (
                      <Box
                        sx={{
                          pt: 1.8,
                          borderTop: "1px solid rgba(24, 61, 53, 0.06)",
                          display: "flex",
                          flexDirection: "column",
                          gap: 1.2,
                        }}
                      >
                        {item.items.map((subItem, sIdx) => (
                          <Box key={sIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                            <CheckCircleOutlinedIcon sx={{ fontSize: 15, color: "#3D765D", mt: 0.25, flexShrink: 0 }} />
                            <Typography sx={{ fontSize: "0.825rem", color: "#27272A", lineHeight: 1.5 }}>
                              {subItem}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 7. WHY WORK WITH AETIBAR / BENEFITS (LEFT-ALIGNED WITH DM SERIF) */}
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
              Why Work With Aetibar
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              No lock-in contracts, no black-box reporting, and full asset ownership.
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
                  }}
                >
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
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 8. HOW WE WORK / PROCESS STEPS (CENTER-ALIGNED WITH DM SERIF) */}
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
              How We Work
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7, mx: "auto" }}>
              A systematic 5-step process from initial audit to continuous optimization.
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {processSteps.map((step, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 2.4 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#F7F7F2",
                    borderRadius: "18px",
                    p: { xs: 3, sm: 3.2 },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.8rem",
                      fontWeight: 400,
                      color: "#3D765D",
                      fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                      mb: 1.5,
                    }}
                  >
                    {step.num}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                      fontSize: "1.15rem",
                      fontWeight: 400,
                      letterSpacing: "-0.015em",
                      color: "#183D35",
                      mb: 1,
                      lineHeight: 1.35,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.825rem",
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
      {/* 9. REAL WORK & EXAMPLES (LEFT-ALIGNED WITH DM SERIF) */}
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
                See What We&apos;ve Built
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Real systems and websites we have built that solve problems and drive commercial growth.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {relevantProjects.map((project) => (
                <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={project.slug}>
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
                        height: 180,
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
                    <Box sx={{ p: 2.5, display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: "#3D765D",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            mb: 0.6,
                          }}
                        >
                          {project.clientType}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                            fontSize: "1.05rem",
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
                            fontSize: "0.825rem",
                            color: "#52525B",
                            lineHeight: 1.5,
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
      {/* 10. FREQUENTLY ASKED QUESTIONS (CENTER-ALIGNED WITH DM SERIF) */}
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
              GOT QUESTIONS?
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
              Clear answers to common questions about our digital marketing services in Udaipur.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: "980px", mx: "auto" }}>
            {faqs.map((faq, idx) => (
              <Accordion
                key={idx}
                expanded={expandedFaq === idx}
                onChange={(_, isExpanded) => setExpandedFaq(isExpanded ? idx : false)}
                sx={{
                  bgcolor: expandedFaq === idx ? "#F7F7F2" : "#FFFFFF",
                  border: "1px solid rgba(24, 61, 53, 0.08)",
                  borderRadius: "14px !important",
                  mb: 1.5,
                  boxShadow: "none",
                  "&:before": { display: "none" },
                  transition: "all 0.2s ease",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#183D35" }} />}
                  sx={{ px: { xs: 2.5, sm: 3 }, py: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "1.05rem" },
                      fontWeight: 600,
                      color: "#183D35",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: { xs: 2.5, sm: 3 }, pb: 2.5, pt: 0 }}>
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
      {/* 11. BOTTOM CONVERSION CTA (LEFT-ALIGNED WITH DM SERIF) */}
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
              Ready to Build a Digital Marketing Strategy That{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                Works for Your Business?
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
              Tell us about your business, goals, and current marketing challenges. We&apos;ll help you identify the right mix of SEO, social media, and paid advertising for your next stage of growth.
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
