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
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion, AnimatePresence } from "framer-motion";

// Comprehensive categories covering all digital services
type CategoryType = "all" | "branding" | "marketing" | "websites-apps" | "automation";

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
    id: "graphic-design-branding",
    category: "branding",
    badge: "Branding & Visuals",
    title: "Graphic Design & Brand Identity",
    subtitle: "Memorable logos, brand colors, UI/UX design & marketing graphics",
    simpleExplanation:
      "First impressions happen in seconds. We design eye-catching logos, professional color palettes, social media graphics, product packaging, and clean UI/UX designs that make your business look established, premium, and trustworthy to buyers.",
    href: "/services/social-media-marketing",
    icon: <PaletteOutlinedIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
    benefits: [
      "Custom logo design with complete brand color and font guidelines",
      "Clean UI/UX design for websites and mobile apps that are easy to use",
      "High-converting social media post templates, banners, and advertising creatives",
      "Print-ready business cards, brochures, flyers, and product packaging",
    ],
    bestFor: "Businesses wanting to build instant trust and stand out with a premium brand look.",
  },
  {
    id: "social-media-marketing",
    category: "marketing",
    badge: "Audience & Trust",
    title: "Social Media Marketing & Management",
    subtitle: "Keep your Instagram, Facebook & LinkedIn active, modern, and engaging",
    simpleExplanation:
      "Before hiring you or buying from you, customers check your social media to see if your company is active and genuine. We plan, write, and design attractive posts and reels every month so your brand looks modern while you focus on your business.",
    href: "/services/social-media-marketing",
    icon: <ShareOutlinedIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
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
    href: "/services/seo",
    icon: <SearchIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
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
    title: "Targeted Paid Advertising (Google & Meta Ads)",
    subtitle: "Google & Instagram ads focused on real phone calls and inquiries",
    simpleExplanation:
      "Advertising shouldn't feel like gambling your hard-earned money. We set up precise Google Search Ads and Instagram/Facebook campaigns that show your business only to people who want to buy right now, with strict daily budgets so you never overspend.",
    href: "/services/paid-advertising",
    icon: <AdsClickOutlinedIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
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
    href: "/services/web-development",
    icon: <LanguageIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
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
    href: "/services/app-development",
    icon: <PhoneIphoneIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
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
    href: "/services/ai-automation",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
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
    desc: "You don't need five different agencies. We handle branding, social media, Google SEO, paid advertising, websites, and automation under one roof.",
    icon: <CampaignOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Honest & Practical Advice First",
    desc: "We never recommend expensive setups or unnecessary services if a simpler, affordable approach solves your problem and brings better return on investment.",
    icon: <VerifiedOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "100% Asset & Code Ownership",
    desc: "You own all design files, logos, ad accounts, websites, and code from day one. No monthly agency hostage fees or proprietary lock-ins ever.",
    icon: <LockOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Direct WhatsApp & Phone Access",
    desc: "You speak directly with the real designers, marketers, and developers working on your project, not a salesperson or remote call center.",
    icon: <SupportAgentOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
];

const faqs = [
  {
    q: "I am not comfortable with technology or digital marketing. Can your team still help me?",
    a: "Yes, 100%! Most of our clients are business owners who prefer to focus on running their day-to-day operations. Whether it's designing a logo, ranking on Google Maps, setting up Instagram ads, or building a website, we handle all the technical work. We explain everything in simple, everyday language so you always feel confident and in control.",
  },
  {
    q: "Can you handle our branding, social media, and website together?",
    a: "Yes! That is one of our biggest strengths. Instead of hiring one designer for a logo, another agency for social media, and a separate developer for your website, Aetibar handles everything together. This ensures your logo, brand colors, social media posts, ads, and website all look completely consistent and work as one unified system.",
  },
  {
    q: "Will customer inquiries come directly to my WhatsApp and phone?",
    a: "Yes! On every website, ad campaign, and social media channel we manage, we configure direct WhatsApp chat buttons, one-tap phone call buttons, and instant lead forms. Whenever an interested customer reaches out, you receive their notification and details immediately on your phone.",
  },
  {
    q: "Do I own my logo designs, website, and ad accounts after completion?",
    a: "Yes, completely. Once the work is completed, all graphic files (high-resolution and editable vectors), website source files, domain logins, and Google/Meta ad accounts belong 100% to you. We never hold your digital assets hostage or charge monthly fees to access what is rightfully yours.",
  },
  {
    q: "How do we choose which service to start with?",
    a: "It depends on what your business needs most right now. If you need a trustworthy look, start with Graphic Design & Brand Identity. If you need a central place to send clients, build a Fast Business Website. If you want immediate customer inquiries, start with Google & Meta Ads. Send us a message on WhatsApp, and we'll give you honest advice on what will bring the fastest return.",
  },
  {
    q: "How long does a typical project take?",
    a: "Logo design and brand identity usually takes 3 to 7 days. A standard business website or SEO setup takes 1 to 3 weeks. Targeted ad campaigns can go live within 2 to 4 days. In our very first chat, we give you a clear, fixed timeline so you know exactly when to expect results.",
  },
];

export default function ServicesPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");

  const filteredServices =
    selectedCategory === "all"
      ? allServicesData
      : allServicesData.filter((s) => s.category === selectedCategory);

  return (
    <Box sx={{ bgcolor: "#FFFFFF", color: "#18181B", minHeight: "100vh", overflow: "hidden" }}>
      {/* SECTION 1: HERO */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 15, sm: 18, md: 22 },
          pb: { xs: 10, md: 14 },
          background:
            "radial-gradient(120% 75% at 50% 0%, rgba(249, 115, 22, 0.09) 0%, rgba(251, 146, 60, 0.03) 45%, #FFFFFF 85%)",
          borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Subtle Warm Ambient Glowing Orbs */}
        <Box
          component={motion.div}
          animate={{ scale: [1, 1.18, 1], opacity: [0.25, 0.42, 0.25] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          sx={{
            position: "absolute",
            top: "-15%",
            right: "-5%",
            width: "520px",
            height: "520px",
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />
        <Box
          component={motion.div}
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.35, 0.18] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
          sx={{
            position: "absolute",
            top: "20%",
            left: "-10%",
            width: "480px",
            height: "480px",
            background: "radial-gradient(circle, rgba(251, 146, 60, 0.14) 0%, transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          <Box sx={{ maxWidth: 960, mx: "auto" }}>
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.4,
                  px: { xs: 2, sm: 2.4 },
                  py: 0.7,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                  backdropFilter: "blur(12px)",
                  mb: 3,
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "#F97316",
                    boxShadow: "0 0 10px #F97316",
                    flexShrink: 0,
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
                  Branding &bull; Marketing &bull; Websites &bull; Automation
                </Typography>
              </Box>
            </motion.div>

            {/* Main Headline Covering All Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "1.65rem", sm: "2.25rem", md: "2.85rem", lg: "3.25rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.25, md: 1.18 },
                  letterSpacing: { xs: "-0.02em", md: "-0.035em" },
                  maxWidth: { xs: "100%", md: 1040, lg: 1160 },
                  mx: "auto",
                  textWrap: "balance",
                  mb: 2.5,
                }}
              >
                Complete Digital Services to Build, Brand &amp;{" "}
                <Box
                  component="span"
                  sx={{
                    display: "inline",
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Grow Your Business Online.
                </Box>
              </Typography>
            </motion.div>

            {/* Subheadline in Clear, Everyday Plain English */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.025rem", sm: "1.15rem", md: "1.2rem" },
                  lineHeight: 1.8,
                  color: "#52525B",
                  maxWidth: 850,
                  mx: "auto",
                  mb: 4.5,
                  fontWeight: 400,
                }}
              >
                You don&apos;t need five different agencies to succeed. We handle professional graphic design and brand logos, targeted social media marketing, Google SEO rankings, high-converting websites and mobile apps, and smart AI automation. Everything is explained in plain, simple English with fixed pricing and friendly guidance.
              </Typography>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 2,
                  alignItems: "center",
                  mb: 5,
                }}
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                      sx={{
                        background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                        color: "#FFFFFF",
                        px: { xs: 3.5, sm: 4.5 },
                        py: { xs: 1.4, sm: 1.6 },
                        fontSize: { xs: "0.95rem", sm: "1rem" },
                        fontWeight: 700,
                        borderRadius: "9999px",
                        boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.38)",
                        textTransform: "none",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                          boxShadow: "0 15px 30px -5px rgba(234, 88, 12, 0.5)",
                        },
                      }}
                    >
                      Get a Free Consultation
                    </Button>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="#services-list" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#18181B",
                        borderColor: "rgba(24, 24, 27, 0.2)",
                        bgcolor: "rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(10px)",
                        px: { xs: 3.5, sm: 4 },
                        py: { xs: 1.4, sm: 1.55 },
                        fontSize: { xs: "0.95rem", sm: "1rem" },
                        fontWeight: 600,
                        borderRadius: "9999px",
                        boxShadow: "0 2px 8px rgba(24, 24, 27, 0.04)",
                        textTransform: "none",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          borderColor: "#EA580C",
                          bgcolor: "rgba(249, 115, 22, 0.04)",
                          color: "#EA580C",
                        },
                      }}
                    >
                      View All 7 Services
                    </Button>
                  </Link>
                </motion.div>
              </Box>
            </motion.div>

            {/* Quick Reassurance Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.6 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: { xs: 1.5, sm: 3 },
                  pt: 2,
                  borderTop: "1px solid rgba(24, 24, 27, 0.08)",
                }}
              >
                {[
                  "No Complicated Tech Jargon",
                  "100% Asset & Code Ownership",
                  "Direct WhatsApp & Phone Support",
                  "Clear Upfront Pricing",
                ].map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "#3F3F46",
                    }}
                  >
                    <CheckCircleOutlinedIcon sx={{ fontSize: 17, color: "#EA580C" }} />
                    <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* SECTION 2: SERVICES SHOWCASE WITH BALANCED CATEGORY FILTER */}
      <Box component="section" id="services-list" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box sx={{ maxWidth: 860, mx: "auto", textAlign: "center", mb: { xs: 5, md: 7 } }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 2.2,
                  py: 0.6,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  mb: 2,
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316" }}
                />
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#EA580C",
                    textTransform: "uppercase",
                  }}
                >
                  Our Full Range of Services
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.25, md: 1.18 },
                  letterSpacing: "-0.03em",
                  maxWidth: { xs: "100%", md: 980, lg: 1100 },
                  mx: "auto",
                  textWrap: "balance",
                  mb: 2,
                }}
              >
                Explore Every Way We Help{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Your Business Grow
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1rem", sm: "1.125rem" },
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
                  p: 0.8,
                  bgcolor: "#FFFFFF",
                  borderRadius: { xs: "16px", sm: "9999px" },
                  border: "1px solid rgba(24, 24, 27, 0.08)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                }}
              >
                {[
                  { id: "all", label: "All Services (7)" },
                  { id: "branding", label: "Design & Branding (1)" },
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
                        px: { xs: 2, sm: 2.6 },
                        py: 0.8,
                        fontSize: { xs: "0.825rem", sm: "0.875rem" },
                        fontWeight: isActive ? 700 : 500,
                        textTransform: "none",
                        color: isActive ? "#FFFFFF" : "#52525B",
                        bgcolor: isActive ? "#EA580C" : "transparent",
                        boxShadow: isActive ? "0 4px 14px rgba(234, 88, 12, 0.3)" : "none",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          bgcolor: isActive ? "#C2410C" : "rgba(249, 115, 22, 0.08)",
                          color: isActive ? "#FFFFFF" : "#EA580C",
                        },
                      }}
                    >
                      {tab.label}
                    </Button>
                  );
                })}
              </Box>
            </Box>
          </motion.div>

          {/* Service Cards Grid with Animated Stagger */}
          <Grid container spacing={3.5}>
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={service.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.75,
                      delay: (idx % 3) * 0.14,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ height: "100%" }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#FFFFFF",
                        p: { xs: 3.5, sm: 4 },
                        borderRadius: { xs: "20px", md: "24px" },
                        border: "1px solid rgba(24, 24, 27, 0.08)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: "0 2px 8px rgba(24, 24, 27, 0.02)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          transform: "translateY(-6px)",
                          boxShadow: "0 20px 40px -12px rgba(234, 88, 12, 0.16)",
                          borderColor: "rgba(234, 88, 12, 0.45)",
                          "& .service-icon-box": {
                            bgcolor: "rgba(249, 115, 22, 0.14)",
                            transform: "scale(1.08)",
                          },
                        },
                      }}
                    >
                      {/* Top Header Row: Icon & Badge */}
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 3,
                          }}
                        >
                          <Box
                            className="service-icon-box"
                            sx={{
                              width: 56,
                              height: 56,
                              borderRadius: "16px",
                              bgcolor: "#FFFFFF",
                              border: "1px solid rgba(24, 24, 27, 0.08)",
                              boxShadow: "0 2px 8px rgba(24, 24, 27, 0.04)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.3s ease",
                            }}
                          >
                            {service.icon}
                          </Box>

                          <Box
                            sx={{
                              px: 1.6,
                              py: 0.4,
                              borderRadius: "9999px",
                              bgcolor: "rgba(249, 115, 22, 0.1)",
                              border: "1px solid rgba(249, 115, 22, 0.2)",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "0.725rem",
                                fontWeight: 700,
                                color: "#EA580C",
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                              }}
                            >
                              {service.badge}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Title & Subtitle */}
                        <Typography
                          variant="h3"
                          sx={{
                            fontSize: "1.35rem",
                            fontWeight: 600,
                            letterSpacing: "-0.02em",
                            color: "#18181B",
                            mb: 1,
                          }}
                        >
                          {service.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "0.925rem",
                            fontWeight: 600,
                            color: "#EA580C",
                            lineHeight: 1.5,
                            mb: 2,
                          }}
                        >
                          {service.subtitle}
                        </Typography>

                        {/* Plain English Explanation */}
                        <Typography
                          sx={{
                            fontSize: "0.92rem",
                            lineHeight: 1.7,
                            color: "#52525B",
                            mb: 3,
                          }}
                        >
                          {service.simpleExplanation}
                        </Typography>

                        {/* What You Get / Benefits Checklist */}
                        <Box
                          sx={{
                            pt: 2.5,
                            mb: 3,
                            borderTop: "1px solid rgba(24, 24, 27, 0.06)",
                            display: "flex",
                            flexDirection: "column",
                            gap: 1.25,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.78rem",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                              color: "#71717A",
                              mb: 0.5,
                            }}
                          >
                            What You Get:
                          </Typography>
                          {service.benefits.map((b, bIdx) => (
                            <Box
                              key={bIdx}
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 1.2,
                              }}
                            >
                              <CheckCircleOutlinedIcon
                                sx={{
                                  fontSize: 16,
                                  color: "#EA580C",
                                  mt: 0.35,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                sx={{
                                  fontSize: "0.85rem",
                                  color: "#3F3F46",
                                  fontWeight: 500,
                                  lineHeight: 1.5,
                                }}
                              >
                                {b}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>

                      {/* Card Footer: Button to Explore */}
                      <Box sx={{ pt: 2.5, borderTop: "1px solid rgba(24, 24, 27, 0.06)" }}>
                        <Link href={service.href} style={{ textDecoration: "none" }}>
                          <Button
                            variant="contained"
                            fullWidth
                            endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                            sx={{
                              background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                              color: "#FFFFFF",
                              py: 1.25,
                              fontWeight: 700,
                              fontSize: "0.875rem",
                              borderRadius: "9999px",
                              textTransform: "none",
                              boxShadow: "0 4px 12px rgba(234, 88, 12, 0.22)",
                              transition: "all 0.25s ease",
                              "&:hover": {
                                background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                                boxShadow: "0 8px 20px rgba(234, 88, 12, 0.35)",
                                "& .MuiButton-endIcon": {
                                  transform: "translateX(4px)",
                                },
                              },
                              "& .MuiButton-endIcon": {
                                transition: "transform 0.2s ease",
                              },
                            }}
                          >
                            Explore {service.title}
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
        </Container>
      </Box>

      {/* SECTION 3: WHY BUSINESSES TRUST AETIBAR */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          bgcolor: "#FAFAFA",
          borderTop: "1px solid rgba(24, 24, 27, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 2.2,
                  py: 0.6,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#EA580C",
                    textTransform: "uppercase",
                  }}
                >
                  The Aetibar Standard
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.25, md: 1.18 },
                  letterSpacing: "-0.03em",
                  maxWidth: { xs: "100%", md: 980, lg: 1100 },
                  mx: "auto",
                  textWrap: "balance",
                  mb: 2,
                }}
              >
                Why Business Owners{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Feel Confident Choosing Us
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1rem", sm: "1.125rem" },
                  lineHeight: 1.75,
                  color: "#52525B",
                  maxWidth: 720,
                  mx: "auto",
                }}
              >
                We believe in genuine long-term relationships, clear transparency, and direct communication. Here is what makes working with Aetibar different.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3.5}>
            {trustPoints.map((pt, idx) => (
              <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.75,
                    delay: idx * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      p: { xs: 3.5, sm: 4 },
                      borderRadius: "20px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                      display: "flex",
                      gap: 2.5,
                      alignItems: "flex-start",
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 14px 28px -8px rgba(234, 88, 12, 0.12)",
                        borderColor: "rgba(234, 88, 12, 0.4)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        bgcolor: "rgba(249, 115, 22, 0.08)",
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
                          fontSize: "1.15rem",
                          fontWeight: 600,
                          color: "#18181B",
                          mb: 1,
                        }}
                      >
                        {pt.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          lineHeight: 1.7,
                          color: "#52525B",
                        }}
                      >
                        {pt.desc}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SECTION 4: FREQUENTLY ASKED QUESTIONS (HUMAN & ACCESSIBLE) */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          bgcolor: "#FFFFFF",
          borderTop: "1px solid rgba(24, 24, 27, 0.06)",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 2.2,
                  py: 0.6,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#EA580C",
                    textTransform: "uppercase",
                  }}
                >
                  Common Questions
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.9rem", sm: "2.6rem", md: "3rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.2, md: 1.15 },
                  letterSpacing: "-0.03em",
                  mb: 2,
                }}
              >
                Questions You Might Have{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Answered in Plain English
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", sm: "1.05rem" },
                  lineHeight: 1.75,
                  color: "#52525B",
                }}
              >
                Everything you want to know about our services, process, ownership, and how we work.
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Accordion
                  elevation={0}
                  disableGutters
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: "16px !important",
                    border: "1px solid rgba(24, 24, 27, 0.08)",
                    overflow: "hidden",
                    "&:before": { display: "none" },
                    boxShadow: "0 2px 6px rgba(24, 24, 27, 0.02)",
                    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                    "&:hover": {
                      borderColor: "rgba(234, 88, 12, 0.35)",
                      boxShadow: "0 6px 18px rgba(234, 88, 12, 0.08)",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#EA580C" }} />}
                    sx={{
                      px: { xs: 2.5, sm: 3.5 },
                      py: 1.5,
                      "& .MuiAccordionSummary-content": { my: 1 },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "0.95rem", sm: "1.05rem" },
                        fontWeight: 600,
                        color: "#18181B",
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.q}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{
                      px: { xs: 2.5, sm: 3.5 },
                      pt: 0,
                      pb: 3,
                      borderTop: "1px solid rgba(24, 24, 27, 0.04)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.925rem",
                        color: "#52525B",
                        lineHeight: 1.75,
                      }}
                    >
                      {faq.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* SECTION 5: HIGH-IMPACT WARM SUNSET CTA BANNER */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          bgcolor: "#FFFFFF",
          position: "relative",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              sx={{
                maxWidth: 1040,
                mx: "auto",
                textAlign: "center",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                p: { xs: 3.5, sm: 6, md: 9 },
                background: "linear-gradient(145deg, #18181B 0%, #0F0E0E 60%, #201A18 100%)",
                borderRadius: { xs: "24px", md: "36px" },
                boxShadow: "0 30px 80px -20px rgba(24, 24, 27, 0.5)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glowing Warm Orbs inside Dark Banner */}
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.42, 0.25] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                sx={{
                  position: "absolute",
                  top: "-25%",
                  right: "-10%",
                  width: "440px",
                  height: "440px",
                  background: "radial-gradient(circle, rgba(249, 115, 22, 0.32) 0%, transparent 70%)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                sx={{
                  position: "absolute",
                  bottom: "-25%",
                  left: "-10%",
                  width: "440px",
                  height: "440px",
                  background: "radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                {/* Status Pill */}
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1.2,
                    px: 2.2,
                    py: 0.6,
                    borderRadius: "9999px",
                    bgcolor: "rgba(249, 115, 22, 0.2)",
                    border: "1px solid rgba(251, 146, 60, 0.4)",
                    mb: 3.5,
                  }}
                >
                  <Box
                    component={motion.div}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#FB923C", boxShadow: "0 0 10px #FB923C" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      color: "#FB923C",
                      textTransform: "uppercase",
                    }}
                  >
                    Start Your Project With Complete Confidence
                  </Typography>
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                    fontWeight: 600,
                    color: "#FFFFFF",
                    lineHeight: { xs: 1.25, md: 1.18 },
                    letterSpacing: "-0.03em",
                    maxWidth: { xs: "100%", md: 980, lg: 1100 },
                    mx: "auto",
                    textWrap: "balance",
                    mb: 2,
                  }}
                >
                  Let&apos;s Talk About Your Business Goals{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    in Plain, Simple English
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.15rem" },
                    color: "rgba(255, 255, 255, 0.8)",
                    maxWidth: 680,
                    mx: "auto",
                    lineHeight: 1.8,
                    mb: 4.5,
                    fontWeight: 400,
                  }}
                >
                  Tell us what you want to achieve—whether that is a modern brand identity, more phone inquiries from Google, a fast website, or automating repetitive office tasks. We will give you honest, practical guidance without sales pressure or confusing jargon.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/contact" style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                        sx={{
                          background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                          color: "#FFFFFF",
                          px: { xs: 3.5, sm: 4.5 },
                          py: { xs: 1.4, sm: 1.6 },
                          fontSize: { xs: "0.95rem", sm: "1rem" },
                          fontWeight: 700,
                          borderRadius: "9999px",
                          boxShadow: "0 10px 25px rgba(234, 88, 12, 0.4)",
                          textTransform: "none",
                          "&:hover": {
                            background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                            boxShadow: "0 15px 30px rgba(234, 88, 12, 0.55)",
                          },
                        }}
                      >
                        Contact Us for Free Advice
                      </Button>
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="https://wa.me/917878891515?text=Hello%20Aetibar,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="outlined"
                        startIcon={<WhatsAppIcon sx={{ fontSize: 20, color: "#25D366" }} />}
                        sx={{
                          color: "#FFFFFF",
                          borderColor: "rgba(255, 255, 255, 0.25)",
                          bgcolor: "rgba(255, 255, 255, 0.05)",
                          backdropFilter: "blur(10px)",
                          px: { xs: 3.5, sm: 4 },
                          py: { xs: 1.4, sm: 1.55 },
                          fontSize: { xs: "0.95rem", sm: "1rem" },
                          fontWeight: 600,
                          borderRadius: "9999px",
                          textTransform: "none",
                          "&:hover": {
                            borderColor: "#25D366",
                            bgcolor: "rgba(37, 211, 102, 0.1)",
                            color: "#FFFFFF",
                          },
                        }}
                      >
                        Chat on WhatsApp
                      </Button>
                    </Link>
                  </motion.div>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
