"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SearchIcon from "@mui/icons-material/Search";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import { motion } from "framer-motion";

const coreServices = [
  {
    badge: "Visual Identity",
    title: "Graphic Design & Brand Identity",
    desc: "Create immediate market trust with distinctive logos, visual standards & sales decks.",
    details:
      "First impressions happen in seconds. We design memorable company logos, comprehensive brand guidelines, product packaging, and modern UI/UX design that position your business as an established industry leader.",
    bullets: [
      "Bespoke logo design & brand style guides",
      "High-impact social templates, banners & ads",
      "Print-ready brochures, flyers & packaging",
      "Intuitive UI/UX design for web & mobile apps",
    ],
    href: "/services/social-media-marketing-company-in-udaipur",
    icon: <PaletteOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    badge: "Web Platforms",
    title: "Custom Web Development",
    desc: "Fast, mobile-optimized business sites and digital storefronts that turn clicks into clients.",
    details:
      "Your website is your 24/7 digital office or showroom. We engineer responsive company websites and e-commerce stores that load in under a second on phones, communicate your value clearly, and make contacting you effortless.",
    bullets: [
      "Sub-second load speeds on phones & desktops",
      "Direct WhatsApp integration & click-to-call buttons",
      "E-commerce catalogs with easy checkout & payments",
      "Complete ownership of source code, domains & data",
    ],
    href: "/services/web-development-company-in-udaipur",
    icon: <LanguageIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    badge: "iOS & Android",
    title: "Mobile App Development",
    desc: "Purpose-built iPhone & Android applications for customers and field operations.",
    details:
      "Put your business directly in your customer's pocket. We create intuitive cross-platform apps with snappy user experiences, offline support, user accounts, and push notifications for appointments, orders, or service tracking.",
    bullets: [
      "Unified codebase for both Apple & Android phones",
      "Push alerts for appointment reminders & offers",
      "Frictionless booking, ordering & user portals",
      "Complete launch support on App Store & Google Play",
    ],
    href: "/services/app-development-company-in-udaipur",
    icon: <PhoneIphoneIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    badge: "Organic Search",
    title: "SEO & Search Engine Rankings",
    desc: "Capture ready-to-buy prospects when they search on Google for your products or services.",
    details:
      "When local buyers search Google for what you offer, your company should appear first. We optimize technical website structure and Google Business profiles so prospective customers discover you organically without paying for every click.",
    bullets: [
      "Top visibility on Google Maps & local search queries",
      "Targeted keywords focused on commercial buyer intent",
      "Mobile speed improvements search algorithms favor",
      "Clear monthly analytics tracking traffic & rankings",
    ],
    href: "/services/seo-company-in-udaipur",
    icon: <SearchIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    badge: "Paid Campaigns",
    title: "Targeted Paid Advertising",
    desc: "High-precision Google Search & Meta ad campaigns engineered for positive ROI.",
    details:
      "Never gamble marketing capital on empty clicks. We launch targeted Google Search Ads and Instagram/Facebook campaigns shown only to active buyers in your chosen area, with strict daily budgets that keep you in complete control.",
    bullets: [
      "Targeted search ads connecting with active buyers",
      "Precision Instagram & Facebook lead campaigns",
      "Strict daily budget caps with zero surprise spend",
      "Tracked conversions: verified phone calls & lead forms",
    ],
    href: "/services/paid-advertising-company-in-udaipur",
    icon: <AdsClickOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    badge: "Brand Engagement",
    title: "Social Media Marketing & Management",
    desc: "Build buyer confidence and community trust through active, engaging social channels.",
    details:
      "Before buying, prospective customers check your social pages to verify that your company is genuine and active. We plan, write, and produce attractive monthly posts and reels that tell your brand story while you focus on operations.",
    bullets: [
      "Monthly content calendar planned & approved in advance",
      "Branded graphics, carousels & short-form video reels",
      "Fosters customer loyalty, authority & follower growth",
      "Content designed to turn casual scrollers into clients",
    ],
    href: "/services/social-media-marketing-company-in-udaipur",
    icon: <ShareOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
];

const automationService = {
  badge: "Efficiency & Automation",
  title: "AI & Smart Workflow Automation",
  desc: "Free your team from repetitive paperwork, manual data entry, and routine customer messages.",
  details:
    "Stop wasting hours typing customer details into spreadsheets or replying to the exact same routine questions. We connect your daily business tools—like WhatsApp, Gmail, and Google Sheets—so customer leads are logged automatically and follow-ups happen without delay.",
  bullets: [
    "New inquiries routed straight to personal WhatsApp immediately",
    "Customer details & orders auto-synced into Google Sheets",
    "24/7 instant automated replies to common customer questions",
    "Eliminates repetitive manual paperwork and human typing errors",
  ],
  href: "/services/ai-automation-company-in-udaipur",
  icon: <SmartToyOutlinedIcon sx={{ fontSize: 30, color: "#EA580C" }} />,
};

export default function HomeServices() {
  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Ambient Warm Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box sx={{ maxWidth: { xs: "100%", sm: 800, md: 880 }, mx: "auto", textAlign: "center", mb: { xs: 6, md: 7.5 } }}>
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
                boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                backdropFilter: "blur(12px)",
                mb: 2.5,
              }}
            >
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316", boxShadow: "0 0 10px #F97316" }}
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
                OUR FULL-SERVICE DIGITAL CAPABILITIES
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.65rem", sm: "2.15rem", md: "2.5rem", lg: "2.75rem" },
                fontWeight: 700,
                color: "#18181B",
                lineHeight: { xs: 1.25, md: 1.2 },
                letterSpacing: "-0.03em",
                textWrap: "balance",
                mb: 2.2,
              }}
            >
              Complete Digital Services to Build,{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Market &amp; Automate Your Business.
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.125rem" },
                lineHeight: 1.7,
                color: "#52525B",
                fontWeight: 400,
                maxWidth: { xs: "100%", md: 740, lg: 780 },
                mx: "auto",
              }}
            >
              You don&apos;t need five different agencies. From establishing a memorable brand look and launching a fast website to ranking on Google, running profitable ads, and automating daily busywork—we deliver practical results under one roof.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3.5}>
          {coreServices.map((service, idx) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: (idx % 3) * 0.16 + Math.floor(idx / 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    bgcolor: "#FAF8F5",
                    p: { xs: 3.5, sm: 4 },
                    borderRadius: { xs: "20px", md: "24px" },
                    border: "1px solid rgba(24, 24, 27, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 2px 8px rgba(24, 24, 27, 0.02)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 18px 36px -12px rgba(234, 88, 12, 0.12)",
                      borderColor: "rgba(234, 88, 12, 0.4)",
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
                          width: 48,
                          height: 48,
                          borderRadius: "14px",
                          bgcolor: "#FFFFFF",
                          border: "1px solid rgba(24, 24, 27, 0.08)",
                          boxShadow: "0 2px 6px rgba(24, 24, 27, 0.03)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          fontFamily: "monospace",
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          color: "#EA580C",
                          bgcolor: "rgba(249, 115, 22, 0.08)",
                          border: "1px solid rgba(249, 115, 22, 0.2)",
                          px: 1.5,
                          py: 0.4,
                          borderRadius: "9999px",
                        }}
                      >
                        {service.badge}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "1.15rem", sm: "1.2rem", md: "1.25rem" },
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        color: "#18181B",
                        mb: 1,
                        lineHeight: 1.35,
                        textWrap: "balance",
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#EA580C",
                        mb: 1.4,
                        lineHeight: 1.45,
                      }}
                    >
                      {service.desc}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        lineHeight: 1.65,
                        color: "#52525B",
                        mb: 2.5,
                      }}
                    >
                      {service.details}
                    </Typography>

                    <Box sx={{ mb: 3, display: "flex", flexDirection: "column", gap: 1 }}>
                      {service.bullets.map((b, bIdx) => (
                        <Box key={bIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                          <Box
                            sx={{
                              width: 16,
                              height: 16,
                              borderRadius: "50%",
                              bgcolor: "rgba(234, 88, 12, 0.1)",
                              color: "#EA580C",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.7rem",
                              fontWeight: 800,
                              flexShrink: 0,
                              mt: 0.2,
                            }}
                          >
                            ✓
                          </Box>
                          <Typography
                            sx={{
                              fontSize: "0.825rem",
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

                  <Box sx={{ pt: 2, borderTop: "1px solid rgba(24, 24, 27, 0.06)" }}>
                    <Link href={service.href} style={{ textDecoration: "none" }}>
                      <Button
                        variant="text"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                        sx={{
                          p: 0,
                          color: "#18181B",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          textTransform: "none",
                          "&:hover": {
                            color: "#EA580C",
                            bgcolor: "transparent",
                            "& .MuiButton-endIcon": {
                              transform: "translateX(4px)",
                            },
                          },
                          "& .MuiButton-endIcon": {
                            transition: "transform 0.2s ease",
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}

          {/* Featured Automation Powerhouse Card */}
          <Grid size={{ xs: 12 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box
                sx={{
                  bgcolor: "#FAF8F5",
                  p: { xs: 3.5, sm: 4.5, md: 5 },
                  borderRadius: { xs: "20px", md: "28px" },
                  border: "1.5px solid rgba(249, 115, 22, 0.25)",
                  boxShadow: "0 4px 20px rgba(249, 115, 22, 0.06)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "rgba(234, 88, 12, 0.5)",
                    boxShadow: "0 20px 40px -10px rgba(234, 88, 12, 0.15)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <Grid container spacing={{ xs: 3, md: 4 }} sx={{ alignItems: "center" }}>
                  <Grid size={{ xs: 12, md: 7 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "14px",
                          bgcolor: "#FFFFFF",
                          border: "1px solid rgba(24, 24, 27, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 6px rgba(24, 24, 27, 0.03)",
                        }}
                      >
                        {automationService.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          fontFamily: "monospace",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "#EA580C",
                          bgcolor: "rgba(249, 115, 22, 0.1)",
                          border: "1px solid rgba(249, 115, 22, 0.25)",
                          px: 1.8,
                          py: 0.5,
                          borderRadius: "9999px",
                        }}
                      >
                        {automationService.badge}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.65rem" },
                        fontWeight: 700,
                        letterSpacing: "-0.025em",
                        color: "#18181B",
                        mb: 1.2,
                        lineHeight: 1.3,
                      }}
                    >
                      {automationService.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "#EA580C",
                        mb: 1.8,
                        lineHeight: 1.5,
                      }}
                    >
                      {automationService.desc}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        color: "#52525B",
                        mb: 3,
                      }}
                    >
                      {automationService.details}
                    </Typography>

                    <Link href={automationService.href} style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                        sx={{
                          background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                          color: "#FFFFFF",
                          px: 3.5,
                          py: 1.2,
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          borderRadius: "9999px",
                          boxShadow: "0 6px 20px rgba(234, 88, 12, 0.3)",
                          textTransform: "none",
                          "&:hover": {
                            background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                            boxShadow: "0 8px 25px rgba(234, 88, 12, 0.4)",
                          },
                        }}
                      >
                        Explore AI Automation Services
                      </Button>
                    </Link>
                  </Grid>

                  <Grid size={{ xs: 12, md: 5 }}>
                    <Box
                      sx={{
                        bgcolor: "#FFFFFF",
                        p: { xs: 3, sm: 3.5 },
                        borderRadius: "20px",
                        border: "1px solid rgba(24, 24, 27, 0.08)",
                        boxShadow: "0 4px 15px rgba(24, 24, 27, 0.03)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          color: "#18181B",
                          letterSpacing: "0.02em",
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                        }}
                      >
                        How Automation Saves Your Business Time:
                      </Typography>
                      {automationService.bullets.map((b, bIdx) => (
                        <Box key={bIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.4 }}>
                          <Box
                            sx={{
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              bgcolor: "rgba(234, 88, 12, 0.12)",
                              color: "#EA580C",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.75rem",
                              fontWeight: 800,
                              flexShrink: 0,
                              mt: 0.2,
                            }}
                          >
                            ✓
                          </Box>
                          <Typography
                            sx={{
                              fontSize: "0.85rem",
                              color: "#3F3F46",
                              fontWeight: 500,
                              lineHeight: 1.55,
                            }}
                          >
                            {b}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
