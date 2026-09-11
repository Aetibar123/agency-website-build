"use client";
import React, { useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SearchIcon from "@mui/icons-material/Search";
import CampaignIcon from "@mui/icons-material/Campaign";
import PaletteIcon from "@mui/icons-material/Palette";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";

interface ServiceItem {
  num: string;
  slug: string;
  title: string;
  category: "ENGINEERING" | "INTELLIGENCE" | "GROWTH" | "DESIGN";
  categoryLabel: string;
  tagline: string;
  summary: string;
  techStack: string;
  benchmark: string;
  icon: React.ReactNode;
  deliverables: string[];
}

const servicesData: ServiceItem[] = [
  {
    num: "01",
    slug: "web-development",
    title: "Web Development & Engineering",
    category: "ENGINEERING",
    categoryLabel: "WEB & CLOUD PLATFORMS",
    tagline: "Fast, modern websites that convert visitors into loyal clients.",
    summary:
      "We build custom websites and web applications tailored to your business goals. Everything loads in under a second, looks stunning on mobile, and is 100% owned by you.",
    techStack: "Next.js • React • TypeScript",
    benchmark: "⚡ Under 1-sec load time • 100% code ownership",
    icon: <LanguageIcon sx={{ fontSize: 22 }} />,
    deliverables: [
      "Custom business websites & web platforms",
      "E-commerce stores with instant checkout",
      "Sub-second loading & mobile optimization",
      "Secure custom APIs & database setups",
    ],
  },
  {
    num: "02",
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    category: "ENGINEERING",
    categoryLabel: "IOS & ANDROID APPS",
    tagline: "Smooth mobile apps your customers love to open every day.",
    summary:
      "We build cross-platform mobile apps for iPhone and Android with native speed, offline reliability, delightful touch gestures, and full App Store guidance.",
    techStack: "React Native • Flutter • iOS & Android",
    benchmark: "📱 Smooth 60fps touch • Works offline seamlessly",
    icon: <PhoneIphoneIcon sx={{ fontSize: 22 }} />,
    deliverables: [
      "One unified codebase for iOS & Android",
      "Offline-first sync so apps never crash without signal",
      "Real-time location, push alerts & telemetry",
      "Complete App Store and Google Play publishing",
    ],
  },
  {
    num: "03",
    slug: "ai-automation",
    title: "Applied AI & Workflow Automation",
    category: "INTELLIGENCE",
    categoryLabel: "SMART AI TOOLS",
    tagline: "Automate repetitive tasks and save dozens of hours weekly.",
    summary:
      "Practical AI assistants and automated workflows that answer customer inquiries 24/7, search internal documentation, and eliminate manual copy-paste work.",
    techStack: "Claude 3.5 • GPT-4o • Vector Search",
    benchmark: "🛡️ 100% private data • Zero-hallucination accuracy",
    icon: <AutoAwesomeIcon sx={{ fontSize: 22 }} />,
    deliverables: [
      "24/7 AI customer support assistants",
      "Private document search & verified answers",
      "Automated lead routing & database workflows",
      "Safe AI guardrails with zero data leakage",
    ],
  },
  {
    num: "04",
    slug: "search-engine-optimization",
    title: "Technical SEO & Search Growth",
    category: "GROWTH",
    categoryLabel: "GOOGLE VISIBILITY",
    tagline: "Climb Google rankings and attract ready-to-buy leads.",
    summary:
      "Technical search optimization, speed fixes, and structured schema markup that help your business earn durable top rankings and high-intent organic customers.",
    techStack: "Google Search Console • Schema.org • Speed",
    benchmark: "📈 100/100 Google speed score • Safe 301 migrations",
    icon: <SearchIcon sx={{ fontSize: 22 }} />,
    deliverables: [
      "Technical audits & broken link remediation",
      "Safe 301 migrations with zero lost traffic",
      "Rich snippet Schema.org Google markup",
      "Sub-second Google Core Web Vitals speed",
    ],
  },
  {
    num: "05",
    slug: "digital-marketing",
    title: "Performance Marketing & Growth",
    category: "GROWTH",
    categoryLabel: "TARGETED CUSTOMER ACQUISITION",
    tagline: "Paid ad campaigns focused on real revenue and profit margins.",
    summary:
      "High-converting Google and Meta ad campaigns paired with automated email flows that turn casual clicks into repeat buyers—with transparent revenue attribution.",
    techStack: "Google Ads • Meta Ads • Klaviyo • GA4",
    benchmark: "🎯 ROAS-driven attribution • Margin-focused",
    icon: <CampaignIcon sx={{ fontSize: 22 }} />,
    deliverables: [
      "High-intent Google search & shopping ads",
      "Compelling visual ads on Instagram & Facebook",
      "Automated customer lifecycle email funnels",
      "Conversion rate A/B testing & analytics",
    ],
  },
  {
    num: "06",
    slug: "graphic-design",
    title: "Brand Systems & UI/UX Design",
    category: "DESIGN",
    categoryLabel: "BRAND & UI/UX DESIGN",
    tagline: "Memorable brand design that positions you as an industry leader.",
    summary:
      "Distinctive visual identities, logo systems, and intuitive Figma UI/UX designs that build instant trust and give your business unmistakable authority.",
    techStack: "Figma • Brand Guidelines • UI/UX Tokens",
    benchmark: "🎨 Figma component libraries • Timeless branding",
    icon: <PaletteIcon sx={{ fontSize: 22 }} />,
    deliverables: [
      "Complete visual brand identity & logo systems",
      "Modular Figma UI/UX design components",
      "Interactive clickable prototypes for your phone",
      "Marketing pitch decks & digital asset libraries",
    ],
  },
];

type FilterCategory = "ALL" | "ENGINEERING" | "INTELLIGENCE" | "GROWTH" | "DESIGN";

const filterTabs: { id: FilterCategory; label: string; count: number }[] = [
  { id: "ALL", label: "All Services", count: 6 },
  { id: "ENGINEERING", label: "Web & Mobile", count: 2 },
  { id: "INTELLIGENCE", label: "AI Automation", count: 1 },
  { id: "GROWTH", label: "SEO & Marketing", count: 2 },
  { id: "DESIGN", label: "Brand & Design", count: 1 },
];

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("ALL");

  const filteredServices =
    activeFilter === "ALL"
      ? servicesData
      : servicesData.filter((service) => service.category === activeFilter);

  return (
    <Box
      id="services"
      component="section"
      sx={{
        bgcolor: "#F2F0EB",
        py: { xs: 12, md: 18 },
        borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="caption"
            sx={{
              color: "#0E7490",
              fontWeight: 700,
              letterSpacing: "0.14em",
              display: "block",
              mb: 2,
            }}
          >
            WHAT WE DO &amp; HOW WE HELP
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "flex-end" },
              gap: 3,
              mb: 3,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#0E172A",
                fontSize: { xs: "2rem", sm: "2.75rem", md: "3.4rem" },
                fontWeight: 800,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
              }}
            >
              Digital Services.{" "}
              <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
              <Box component="span" sx={{ color: "#0E7490" }}>
                Built to Scale.
              </Box>
            </Typography>

            <Button
              component={Link}
              href="/services"
              variant="outlined"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                borderColor: "rgba(17, 18, 21, 0.2)",
                color: "#0E172A",
                px: 3,
                py: 1.2,
                fontWeight: 600,
                borderRadius: "6px",
                "&:hover": {
                  borderColor: "#0E172A",
                  bgcolor: "rgba(14, 23, 42, 0.04)",
                },
              }}
            >
              Explore All Services &amp; FAQs
            </Button>
          </Box>

          <Typography
            variant="body1"
            sx={{
              color: "#4A4D57",
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              lineHeight: 1.8,
              maxWidth: "840px",
            }}
          >
            We don&apos;t use confusing jargon or sell rigid one-size-fits-all packages. We partner with you
            to build fast, beautiful digital products that solve real business problems and create lasting value.
          </Typography>
        </Box>

        {/* Interactive Discipline Filter Tabs */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,
            mb: { xs: 6, md: 8 },
            pb: 2,
            borderBottom: "1px solid rgba(17, 18, 21, 0.1)",
          }}
        >
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <Box
                key={tab.id}
                component="button"
                onClick={() => setActiveFilter(tab.id)}
                sx={{
                  border: "1px solid",
                  borderColor: isSelected ? "#0E7490" : "rgba(17, 18, 21, 0.12)",
                  bgcolor: isSelected ? "#0E7490" : "#FFFFFF",
                  color: isSelected ? "#FFFFFF" : "#4A4D57",
                  px: 2.2,
                  py: 1,
                  borderRadius: "6px",
                  fontSize: "0.85rem",
                  fontWeight: isSelected ? 700 : 600,
                  letterSpacing: "0.02em",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "#0E7490",
                    color: isSelected ? "#FFFFFF" : "#0E172A",
                    bgcolor: isSelected ? "#0E7490" : "#FAF9F5",
                  },
                }}
              >
                <span>{tab.label}</span>
                <Box
                  component="span"
                  sx={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    px: 0.8,
                    py: 0.2,
                    borderRadius: "4px",
                    bgcolor: isSelected ? "rgba(255, 255, 255, 0.2)" : "rgba(17, 18, 21, 0.06)",
                    color: isSelected ? "#FFFFFF" : "#5E6068",
                    fontFamily: "monospace",
                  }}
                >
                  {tab.count}
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* 2-Column Human-Friendly Practice Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {filteredServices.map((service) => (
            <Grid size={{ xs: 12, lg: 6 }} key={service.slug}>
              <Box
                sx={{
                  bgcolor: "#FFFFFF",
                  borderRadius: "12px",
                  border: "1px solid rgba(17, 18, 21, 0.08)",
                  p: { xs: 3.5, sm: 4.5, md: 5 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  "&:hover": {
                    borderColor: "#0E7490",
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 36px rgba(14, 116, 144, 0.08)",
                    "& .action-arrow": {
                      transform: "translateX(6px)",
                      color: "#0E7490",
                    },
                  },
                }}
              >
                <Box>
                  {/* Card Header: Icon, Numeral, Category & Tech Stack */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      alignItems: { xs: "flex-start", sm: "center" },
                      gap: 1.5,
                      pb: 2.5,
                      borderBottom: "1px solid rgba(17, 18, 21, 0.06)",
                      mb: 3,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: "8px",
                          bgcolor: "rgba(14, 116, 144, 0.08)",
                          color: "#0E7490",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#5E6068",
                            fontWeight: 700,
                            fontSize: "0.75rem",
                            letterSpacing: "0.08em",
                          }}
                        >
                          SERVICE // {service.categoryLabel}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        px: 1.4,
                        py: 0.4,
                        borderRadius: "4px",
                        bgcolor: "rgba(14, 116, 144, 0.06)",
                        border: "1px solid rgba(14, 116, 144, 0.18)",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#0E7490",
                          fontWeight: 600,
                          fontSize: "0.72rem",
                          fontFamily: "monospace",
                        }}
                      >
                        {service.techStack}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Title & Philosophy */}
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#0E172A",
                      fontSize: { xs: "1.35rem", sm: "1.55rem", md: "1.7rem" },
                      fontWeight: 800,
                      letterSpacing: "-0.025em",
                      lineHeight: 1.25,
                      mb: 1.2,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#0E7490",
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {service.tagline}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#4A4D57",
                      lineHeight: 1.75,
                      fontSize: "0.95rem",
                      mb: 3.5,
                    }}
                  >
                    {service.summary}
                  </Typography>

                  {/* Structured Deliverables Grid */}
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#5E6068",
                        fontWeight: 700,
                        fontSize: "0.72rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        display: "block",
                        mb: 1.5,
                      }}
                    >
                      WHAT WE DELIVER
                    </Typography>

                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                        gap: 1.5,
                      }}
                    >
                      {service.deliverables.map((item, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1.2,
                          }}
                        >
                          <CheckCircleIcon
                            sx={{
                              color: "#0E7490",
                              fontSize: 16,
                              mt: "2px",
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              color: "#2C2E35",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                              lineHeight: 1.45,
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>

                {/* Card Footer: Benefit & Action */}
                <Box
                  sx={{
                    pt: 2.5,
                    borderTop: "1px solid rgba(17, 18, 21, 0.08)",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: 2,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#5E6068",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                    }}
                  >
                    {service.benchmark}
                  </Typography>

                  <Box
                    component={Link}
                    href={`/services/${service.slug}`}
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      textDecoration: "none",
                      color: "#0E172A",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "#0E7490",
                      },
                    }}
                  >
                    Explore Service
                    <ArrowForwardIcon
                      className="action-arrow"
                      sx={{ fontSize: 16, transition: "transform 0.25s ease" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Human-Centered Bottom Guarantee Banner */}
        <Box
          sx={{
            mt: { xs: 8, md: 12 },
            p: { xs: 3.5, sm: 4, md: 5 },
            bgcolor: "#FAF9F5",
            borderRadius: "12px",
            border: "1px solid rgba(17, 18, 21, 0.1)",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", lg: "center" },
            gap: 3,
          }}
        >
          <Box sx={{ maxWidth: "800px" }}>
            <Typography
              variant="caption"
              sx={{
                color: "#0E7490",
                fontWeight: 700,
                letterSpacing: "0.12em",
                display: "block",
                mb: 1,
              }}
            >
              STUDIO PROMISE // DIRECT COLLABORATION
            </Typography>
            <Typography
              sx={{
                color: "#0E172A",
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                fontWeight: 800,
                letterSpacing: "-0.02em",
                mb: 1,
              }}
            >
              You collaborate directly with the designers and engineers building your product.
            </Typography>
            <Typography variant="body2" sx={{ color: "#5E6068", lineHeight: 1.7 }}>
              No junior handoffs, no confusing technical jargon, and no cookie-cutter templates. We take the time
              to understand your vision and deliver digital products you&apos;ll be genuinely proud of.
            </Typography>
          </Box>

          <Button
            component={Link}
            href="/contact"
            variant="contained"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
            sx={{
              bgcolor: "#0E172A",
              color: "#FFFFFF",
              px: 3.5,
              py: 1.4,
              fontSize: "0.92rem",
              fontWeight: 600,
              borderRadius: "6px",
              flexShrink: 0,
              boxShadow: "0 6px 20px rgba(14, 23, 42, 0.12)",
              "&:hover": {
                bgcolor: "#1E293B",
                transform: "translateY(-2px)",
              },
            }}
          >
            Book a Free Discovery Call
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
