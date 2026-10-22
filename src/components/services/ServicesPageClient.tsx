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
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { motion, AnimatePresence } from "framer-motion";

// Comprehensive categories covering all digital services
type CategoryType = "all" | "marketing" | "websites-apps" | "automation";

interface ServiceItem {
  id: string;
  category: CategoryType;
  badge: string;
  title: string;
  subtitle: string;
  simpleExplanation: string;
  href: string;
  icon: React.ReactNode;
  benefits: string[];
  bestFor: string;
}

const allServicesData: ServiceItem[] = [
  {
    id: "social-media-marketing",
    category: "marketing",
    badge: "Audience & Trust",
    title: "Social Media Marketing & Management",
    subtitle: "Keep your Instagram, Facebook & LinkedIn active, modern, and engaging",
    simpleExplanation:
      "Before hiring you or buying from you, customers check your social media to see if your company is active and genuine. We plan, write, and design attractive posts and reels every month so your brand looks modern while you focus on your business.",
    href: "/services/social-media-marketing-service-in-udaipur",
    icon: <ShareOutlinedIcon sx={{ fontSize: 26 }} />,
    benefits: [
      "Monthly post and reel calendar planned and approved by you in advance",
      "Custom-branded graphic posts, carousels, and stories with your logo",
      "Builds customer trust, brand awareness, and genuine follower engagement",
      "Friendly updates that turn curious viewers into real paying customers",
    ],
    bestFor: "Brands wanting an active, professional image that inspires customer confidence.",
  },
  {
    id: "search-engine-optimization",
    category: "marketing",
    badge: "Organic Leads",
    title: "Search Engine Optimization (SEO)",
    subtitle: "Rank on the first page of Google when buyers search for your services",
    simpleExplanation:
      "When people in your city or anywhere in the world search on Google for what you sell, your business should show up right at the top. We optimize your website content and Google Maps profile so prospective clients discover you easily without you paying for each click.",
    href: "/services/seo-service-in-udaipur",
    icon: <SearchIcon sx={{ fontSize: 26 }} />,
    benefits: [
      "Top rankings on Google Maps and local search results in your city",
      "Attract genuine buyers who are actively searching to hire or buy",
      "Fast website loading speed and mobile optimization that Google rewards",
      "Simple monthly reports in plain English showing your visitor and ranking growth",
    ],
    bestFor: "Businesses looking for steady incoming customer inquiries without high ad costs.",
  },
  {
    id: "paid-advertising",
    category: "marketing",
    badge: "Fast Results",
    title: "Performance Marketing (Google & Meta Ads)",
    subtitle: "Google & Instagram ads focused on real phone calls and inquiries",
    simpleExplanation:
      "Advertising shouldn't feel like gambling your hard-earned money. We set up precise Google Search Ads and Instagram/Facebook campaigns that show your business only to people who want to buy right now, with strict daily budgets so you never overspend.",
    href: "/services/performance-marketing-company-in-udaipur",
    icon: <AdsClickOutlinedIcon sx={{ fontSize: 26 }} />,
    benefits: [
      "Show your ads only to ready-to-buy customers in your chosen areas",
      "Strict daily budget caps so you stay in 100% control of your advertising spend",
      "Verified customer tracking: receive real phone calls, WhatsApp messages, and form inquiries",
      "100% transparent: you pay Google and Meta directly on your own card",
    ],
    bestFor: "Companies needing immediate customer leads, product sales, and predictable ad ROI.",
  },
  {
    id: "web-development",
    category: "websites-apps",
    badge: "Digital Storefront",
    title: "Custom Web Development",
    subtitle: "Fast, mobile-friendly business websites, online stores & portals",
    simpleExplanation:
      "Your website is your 24/7 digital office or showroom. We build modern business websites and e-commerce stores that open in less than a second on mobile phones, explain your services clearly, and let visitors contact you directly on WhatsApp or place an order with one tap.",
    href: "/services/web-development-company-in-udaipur",
    icon: <LanguageIcon sx={{ fontSize: 26 }} />,
    benefits: [
      "Opens instantly on smartphones, tablets, and desktop computers",
      "Direct WhatsApp chat and call buttons for quick customer inquiries",
      "Online store with easy product management, shopping cart, and online payments",
      "You own 100% of your website code, domain, and data forever",
    ],
    bestFor: "Businesses wanting to build credibility, sell products online, or get more daily inquiries.",
  },
  {
    id: "app-development",
    category: "websites-apps",
    badge: "iOS & Android",
    title: "Mobile App Development",
    subtitle: "Simple iPhone & Android apps for your customers and team",
    simpleExplanation:
      "Put your business directly in your customer's pocket. We create custom mobile applications that are simple to tap, quick to respond, and work smoothly even when internet signal is weak or offline.",
    href: "/services/mobile-app-development-company-in-udaipur",
    icon: <PhoneIphoneIcon sx={{ fontSize: 26 }} />,
    benefits: [
      "One single app that works smoothly on both Apple iPhone and Android phones",
      "Clean, simple screens that anyone can use without special training",
      "Customer accounts, instant push notifications, and easy booking or ordering",
      "Full assistance publishing your app on Google Play Store and Apple App Store",
    ],
    bestFor: "Companies needing customer booking, ordering, or field staff management.",
  },
  {
    id: "ai-automation",
    category: "automation",
    badge: "Time Saver",
    title: "AI & Smart Workflow Automation",
    subtitle: "Save hours by letting smart tools handle repetitive daily office work",
    simpleExplanation:
      "Stop wasting valuable hours copying customer details into spreadsheets or replying to the exact same routine questions. We connect your daily business tools—like WhatsApp, Gmail, and Google Sheets—so tasks happen automatically in the background.",
    href: "/services/ai-automation-company-in-udaipur",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 26 }} />,
    benefits: [
      "New customer inquiries sent straight to your personal WhatsApp automatically",
      "Customer details and invoices saved into Google Sheets without manual typing",
      "Instant smart message replies to common questions so customers never wait",
      "Saves your team 10 to 15 hours of boring copy-pasting and paperwork every week",
    ],
    bestFor: "Busy business owners who want to cut repetitive office busywork and respond faster.",
  },
];

const trustPoints = [
  {
    title: "All Digital Services in One Place",
    desc: "You don't need five different agencies. We handle digital marketing, social media, Google SEO, paid advertising, websites, and automation under one roof.",
    icon: <CampaignOutlinedIcon sx={{ fontSize: 22, color: "#183D35" }} />,
  },
  {
    title: "Honest & Practical Advice First",
    desc: "We never recommend expensive setups or unnecessary services if a simpler, affordable approach solves your problem and brings better return on investment.",
    icon: <VerifiedOutlinedIcon sx={{ fontSize: 22, color: "#183D35" }} />,
  },
  {
    title: "100% Asset & Code Ownership",
    desc: "You own all design files, ad accounts, websites, and code from day one. No monthly agency hostage fees or proprietary lock-ins ever.",
    icon: <LockOutlinedIcon sx={{ fontSize: 22, color: "#183D35" }} />,
  },
  {
    title: "Direct Phone & Team Access",
    desc: "You speak directly with the real marketers, designers, and developers working on your project, not a salesperson or remote call center.",
    icon: <SupportAgentOutlinedIcon sx={{ fontSize: 22, color: "#183D35" }} />,
  },
];

const faqs = [
  {
    q: "I am not comfortable with technology or digital marketing. Can your team still help me?",
    a: "Yes, 100%! Most of our clients are business owners who prefer to focus on running their day-to-day operations. Whether it's ranking on Google Maps, setting up Instagram ads, or building a website, we handle all the technical work. We explain everything in simple, everyday language so you always feel confident and in control.",
  },
  {
    q: "Can you handle our marketing, social media, and website together?",
    a: "Yes! That is one of our biggest strengths. Instead of hiring separate agencies for social media, ads, and your website, Aetibar handles everything together under one roof. This ensures your digital marketing, social media posts, ads, and website all look completely consistent and work as one unified system.",
  },
  {
    q: "Will customer inquiries come directly to my email and phone?",
    a: "Yes! On every website, ad campaign, and social media channel we manage, we configure direct phone call buttons and instant lead forms. Whenever an interested customer reaches out, you receive their notification and details immediately on your phone and email.",
  },
  {
    q: "Do I own my website and ad accounts after completion?",
    a: "Yes, completely. Once the work is completed, all website source files, domain logins, and Google/Meta ad accounts belong 100% to you. We never hold your digital assets hostage or charge monthly fees to access what is rightfully yours.",
  },
  {
    q: "How do we choose which service to start with?",
    a: "It depends on what your business needs most right now. If you need a solid online foundation, start with a Custom Business Website. If you want steady organic reach, start with Search Engine Optimization (SEO). If you need immediate customer inquiries, start with Google & Meta Ads or full Digital Marketing. Reach out to us via our contact form or phone, and we'll give you honest advice on what will bring the fastest return.",
  },
  {
    q: "How long does a typical project take?",
    a: "A standard business website or SEO setup takes 1 to 3 weeks. Targeted ad campaigns can go live within 2 to 4 days. In our very first chat, we give you a clear, fixed timeline so you know exactly when to expect results.",
  },
];

export default function ServicesPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [expandedFaq, setExpandedFaq] = useState<number | false>(false);

  const filteredServices =
    selectedCategory === "all"
      ? allServicesData
      : allServicesData.filter((s) => s.category === selectedCategory);

  const heroHighlights = [
    {
      value: "No Jargon",
      title: "Plain, Simple English",
      desc: "We explain strategies and milestones in everyday language with zero confusing marketing buzzwords.",
      icon: <VerifiedOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "100%",
      title: "Full Code & Asset Ownership",
      desc: "You own all design files, logos, code, domains, logins, and accounts completely from day one.",
      icon: <LockOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "Direct",
      title: "Direct Phone & Team Access",
      desc: "You communicate directly with the actual specialists executing your work, not middlemen.",
      icon: <SupportAgentOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "Fixed",
      title: "Clear Upfront Pricing",
      desc: "Agreed scopes, honest advice, and transparent budgets without recurring hostage fees.",
      icon: <SpeedOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
  ];

  return (
    <Box sx={{ bgcolor: "#FFFFFF", color: "#183D35", minHeight: "100vh" }}>
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
          {/* Status Pill Badge */}
          <Box sx={{ mb: 3 }}>
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
              }}
            >
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
                Branding &bull; Marketing &bull; Websites &bull; Automation
              </Typography>
            </Box>
          </Box>

          {/* Left-Aligned Hero Content */}
          <Box sx={{ maxWidth: "980px", mb: { xs: 6, md: 8 } }}>
            {/* H1 Title with DM Serif Font */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "2.35rem", sm: "3.25rem", md: "4.15rem" },
                fontWeight: 400,
                lineHeight: { xs: 1.15, md: 1.1 },
                letterSpacing: "-0.015em",
                color: "#FFFFFF",
                mb: 2.5,
              }}
            >
              Complete Digital Services to Build, Brand &amp;{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                Grow Your Business Online
              </Box>
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.08rem" },
                lineHeight: 1.75,
                color: "rgba(216, 229, 213, 0.85)",
                maxWidth: "860px",
                mb: 4,
              }}
            >
              You don&apos;t need five different agencies to succeed. We handle professional graphic design and brand logos, targeted social media marketing, Google SEO rankings, high-converting websites and mobile apps, and smart AI automation. Everything is explained in plain, simple English with fixed pricing and friendly guidance.
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
                href="#services-list"
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
                View All 7 Services
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
      {/* 2. SERVICES SHOWCASE WITH CATEGORY FILTER (CENTER-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="services-list"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: "#F7F7F2",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          {/* Section Header */}
          <Box sx={{ maxWidth: { xs: "100%", md: "960px" }, mx: "auto", textAlign: "center", mb: { xs: 5, md: 7 } }}>
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
              OUR FULL RANGE OF SERVICES
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.75rem", sm: "2.35rem", md: "2.85rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: 1.2,
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              Explore Every Way We Help Your Business Grow
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                lineHeight: 1.75,
                color: "#52525B",
                maxWidth: 760,
                mx: "auto",
                mb: 4,
              }}
            >
              From building memorable brand identities and managing social media, to ranking high on Google, running profitable ad campaigns, creating modern websites, and automating office tasks—we have you covered.
            </Typography>

            {/* Interactive Category Filter Pills */}
            <Box
              sx={{
                display: "inline-flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 1,
                p: 0.6,
                bgcolor: "#FFFFFF",
                borderRadius: { xs: "16px", sm: "9999px" },
                border: "1px solid rgba(24, 61, 53, 0.08)",
                boxShadow: "0 2px 8px rgba(24, 61, 53, 0.04)",
              }}
            >
              {[
                { id: "all", label: "All Services (6)" },
                { id: "marketing", label: "Marketing, SEO & Ads (3)" },
                { id: "websites-apps", label: "Websites & Mobile Apps (2)" },
                { id: "automation", label: "Smart AI Automation (1)" },
              ].map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <Button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id as CategoryType)}
                    sx={{
                      borderRadius: "9999px",
                      px: { xs: 2, sm: 2.5 },
                      py: 0.8,
                      fontSize: { xs: "0.8rem", sm: "0.85rem" },
                      fontWeight: isActive ? 700 : 500,
                      textTransform: "none",
                      color: isActive ? "#FFFFFF" : "#183D35",
                      bgcolor: isActive ? "#183D35" : "transparent",
                      boxShadow: isActive ? "0 4px 12px rgba(24, 61, 53, 0.25)" : "none",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: isActive ? "#183D35" : "rgba(24, 61, 53, 0.06)",
                      },
                    }}
                  >
                    {tab.label}
                  </Button>
                );
              })}
            </Box>
          </Box>

          {/* Service Cards Grid with Animated Stagger */}
          <Grid container spacing={3.5} sx={{ alignItems: "stretch" }}>
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => {
                const serviceIndex = allServicesData.findIndex((s) => s.id === service.id);
                const displayNum = String(serviceIndex + 1).padStart(2, "0");

                return (
                  <Grid size={{ xs: 12, md: 6, lg: 4 }} key={service.id}>
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.5,
                        delay: (idx % 3) * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{ height: "100%" }}
                    >
                      <Box
                        sx={{
                          bgcolor: "#FFFFFF",
                          p: { xs: 3.5, sm: 4 },
                          borderRadius: "22px",
                          border: "1px solid rgba(24, 61, 53, 0.08)",
                          boxShadow: "0 4px 20px rgba(24, 61, 53, 0.03)",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          position: "relative",
                          overflow: "hidden",
                          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "3px",
                            bgcolor: "#3D765D",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                          },
                          "&:hover": {
                            transform: "translateY(-6px)",
                            borderColor: "#3D765D",
                            boxShadow:
                              "0 20px 40px -15px rgba(24, 61, 53, 0.1), 0 0 0 1px rgba(61, 118, 93, 0.25)",
                            "&::before": {
                              opacity: 1,
                            },
                            "& .card-icon-container": {
                              bgcolor: "#183D35",
                              color: "#FFFFFF",
                              transform: "scale(1.05)",
                            },
                            "& .card-cta-btn": {
                              bgcolor: "#183D35",
                              color: "#FFFFFF",
                              borderColor: "#183D35",
                              "& .MuiSvgIcon-root": {
                                transform: "translateX(5px)",
                              },
                            },
                          },
                        }}
                      >
                        <Box>
                          {/* Top Header Row: Icon + Badge + Index */}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              mb: 3,
                            }}
                          >
                            <Box
                              className="card-icon-container"
                              sx={{
                                width: 52,
                                height: 52,
                                borderRadius: "14px",
                                bgcolor: "#D8E5D5",
                                color: "#183D35",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.3s ease",
                              }}
                            >
                              {service.icon}
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                              <Box
                                sx={{
                                  px: 1.5,
                                  py: 0.4,
                                  borderRadius: "9999px",
                                  bgcolor: "rgba(61, 118, 93, 0.08)",
                                  border: "1px solid rgba(61, 118, 93, 0.2)",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: "0.7rem",
                                    fontWeight: 700,
                                    color: "#3D765D",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.06em",
                                    fontFamily: "monospace",
                                  }}
                                >
                                  {service.badge}
                                </Typography>
                              </Box>

                              <Typography
                                sx={{
                                  fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                                  fontSize: "1.25rem",
                                  color: "rgba(24, 61, 53, 0.25)",
                                  fontWeight: 400,
                                  lineHeight: 1,
                                }}
                              >
                                {displayNum}
                              </Typography>
                            </Box>
                          </Box>

                          {/* Title & Subtitle */}
                          <Typography
                            variant="h3"
                            sx={{
                              fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                              fontSize: "1.35rem",
                              fontWeight: 400,
                              letterSpacing: "-0.015em",
                              color: "#183D35",
                              lineHeight: 1.25,
                              mb: 0.8,
                            }}
                          >
                            {service.title}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: "0.875rem",
                              fontWeight: 600,
                              color: "#3D765D",
                              lineHeight: 1.45,
                              mb: 1.8,
                            }}
                          >
                            {service.subtitle}
                          </Typography>

                          {/* Plain English Explanation */}
                          <Typography
                            sx={{
                              fontSize: "0.875rem",
                              lineHeight: 1.65,
                              color: "#52525B",
                              mb: 2.5,
                            }}
                          >
                            {service.simpleExplanation}
                          </Typography>

                          {/* What You Get / Benefits Checklist Box */}
                          <Box
                            sx={{
                              p: 2.2,
                              borderRadius: "14px",
                              bgcolor: "#F7F7F2",
                              border: "1px solid rgba(24, 61, 53, 0.06)",
                              mb: 2.2,
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                color: "#3D765D",
                                fontFamily: "monospace",
                                mb: 1.5,
                              }}
                            >
                              WHAT YOU GET:
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                              {service.benefits.map((b, bIdx) => (
                                <Box
                                  key={bIdx}
                                  sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 1.2,
                                  }}
                                >
                                  <Box
                                    sx={{
                                      width: 18,
                                      height: 18,
                                      borderRadius: "50%",
                                      bgcolor: "#D8E5D5",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      flexShrink: 0,
                                      mt: 0.2,
                                    }}
                                  >
                                    <CheckIcon sx={{ fontSize: 11, color: "#183D35" }} />
                                  </Box>
                                  <Typography
                                    sx={{
                                      fontSize: "0.825rem",
                                      color: "#3F3F46",
                                      lineHeight: 1.5,
                                    }}
                                  >
                                    {b}
                                  </Typography>
                                </Box>
                              ))}
                            </Box>
                          </Box>

                          {/* Best For Callout Strip */}
                          {service.bestFor && (
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 1,
                                px: 1.6,
                                py: 1.1,
                                borderRadius: "10px",
                                bgcolor: "rgba(61, 118, 93, 0.06)",
                                borderLeft: "3px solid #3D765D",
                                mb: 2.5,
                              }}
                            >
                              <Typography sx={{ fontSize: "0.8rem", color: "#52525B", lineHeight: 1.5 }}>
                                <strong style={{ color: "#183D35", fontWeight: 600 }}>Best for:</strong>{" "}
                                {service.bestFor}
                              </Typography>
                            </Box>
                          )}
                        </Box>

                        {/* Card Footer: Button to Explore */}
                        <Box sx={{ pt: 1 }}>
                          <Link href={service.href} style={{ textDecoration: "none", display: "block" }}>
                            <Button
                              className="card-cta-btn"
                              variant="outlined"
                              fullWidth
                              endIcon={
                                <ArrowForwardIcon
                                  sx={{ fontSize: 16, transition: "transform 0.25s ease" }}
                                />
                              }
                              sx={{
                                py: 1.2,
                                px: 2.5,
                                borderRadius: "12px",
                                borderColor: "rgba(24, 61, 53, 0.18)",
                                color: "#183D35",
                                bgcolor: "#F7F7F2",
                                fontWeight: 600,
                                fontSize: "0.875rem",
                                textTransform: "none",
                                transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
                              }}
                            >
                              Explore {service.title}
                            </Button>
                          </Link>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                );
              })}
            </AnimatePresence>
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 3. THE AETIBAR ADVANTAGE (LEFT-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="why-choose-us"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#FFFFFF",
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
              THE AETIBAR STANDARD
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
              Why Business Owners Feel Confident Choosing Us
            </Typography>

            <Typography
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "#52525B",
              }}
            >
              We believe in genuine long-term relationships, clear transparency, and direct communication. Here is what makes working with Aetibar different.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {trustPoints.map((pt, idx) => (
              <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                <Box
                  sx={{
                    p: { xs: 3.5, sm: 4 },
                    borderRadius: "18px",
                    bgcolor: "#F7F7F2",
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    display: "flex",
                    gap: 2.5,
                    alignItems: "flex-start",
                    height: "100%",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#3D765D",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: "14px",
                      bgcolor: "#D8E5D5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {pt.icon}
                  </Box>

                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        fontSize: "1.2rem",
                        fontWeight: 400,
                        letterSpacing: "-0.015em",
                        color: "#183D35",
                        mb: 0.8,
                      }}
                    >
                      {pt.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        lineHeight: 1.65,
                        color: "#52525B",
                      }}
                    >
                      {pt.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 4. FREQUENTLY ASKED QUESTIONS (CENTER-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="faqs"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#F7F7F2",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "780px", mb: { xs: 5, md: 6 }, textAlign: "center", mx: "auto" }}>
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
              COMMON QUESTIONS
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
              Questions You Might Have Answered in Plain English
            </Typography>

            <Typography
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "#52525B",
                mx: "auto",
              }}
            >
              Everything you want to know about our services, process, ownership, and how we work.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: "860px", mx: "auto" }}>
            {faqs.map((faq, idx) => (
              <Accordion
                key={idx}
                expanded={expandedFaq === idx}
                onChange={() => setExpandedFaq(expandedFaq === idx ? false : idx)}
                sx={{
                  bgcolor: "#FFFFFF",
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
                    {faq.q}
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
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 5. READY TO GROW / CONVERSION CTA (LEFT-ALIGNED WITH DM SERIF) */}
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
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 1.8,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "rgba(61, 118, 93, 0.28)",
                border: "1px solid rgba(216, 229, 213, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  color: "#D8E5D5",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                Start Your Project With Complete Confidence
              </Typography>
            </Box>

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
              Let&apos;s Talk About Your Business Goals{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                in Plain, Simple English
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
              Tell us what you want to achieve—whether that is a modern brand identity, more phone inquiries from Google, a fast website, or automating repetitive office tasks. We will give you honest, practical guidance without sales pressure or confusing jargon.
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
                Contact Us for Free Advice
              </Button>

             
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
