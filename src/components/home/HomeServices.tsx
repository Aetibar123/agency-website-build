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
    badge: "Web Development",
    title: "Websites Built Around Your Business",
    desc: "Professional business websites and online stores that make it easy for customers to understand what you offer and get in touch.",
    details:
      "Whether you need a simple business website, an online store, or a more customized web platform, we build it around your business requirements. We focus on clear information, easy navigation, useful customer actions, and a solid foundation for future growth.",
    bullets: [
      "Business websites & online stores",
      "Custom customer portals & booking systems",
      "Clear navigation and customer enquiry paths",
      "SEO-ready website foundations",
    ],
    href: "/services/web-development-company-in-udaipur",
    icon: <LanguageIcon sx={{ fontSize: 26, color: "#D8E5D5" }} />,
  },

  {
    badge: "Mobile Apps",
    title: "Mobile Apps for Customers & Teams",
    desc: "Custom iOS and Android apps that help customers use your services and teams manage work while on the go.",
    details:
      "We develop mobile applications around specific business needs, from customer-facing apps for bookings and orders to internal tools for field teams, job management, and data collection. Where required, apps can also support offline work and synchronization.",
    bullets: [
      "iOS & Android applications",
      "Customer booking, ordering & service apps",
      "Field team & job management tools",
      "Offline data capture & synchronization",
    ],
    href: "/services/mobile-app-development-company-in-udaipur",
    icon: <PhoneIphoneIcon sx={{ fontSize: 26, color: "#D8E5D5" }} />,
  },

  {
    badge: "Search Engine Optimization",
    title: "SEO That Helps Customers Find You",
    desc: "Improve your visibility on Google so people searching for your products or services can discover your business.",
    details:
      "We improve the parts of your website and online presence that help search engines understand your business. Our SEO work can include technical improvements, keyword research, local search optimization, Google Business Profile work, and useful content.",
    bullets: [
      "Technical & on-page SEO",
      "Local SEO & Google Business Profile",
      "Keyword research & content optimization",
      "Search performance reporting",
    ],
    href: "/services/seo-service-in-udaipur",
    icon: <SearchIcon sx={{ fontSize: 26, color: "#D8E5D5" }} />,
  },

  {
    badge: "Paid Advertising",
    title: "Google & Meta Ads for Your Business",
    desc: "Reach relevant audiences through targeted advertising on Google, Instagram, and Facebook with controlled budgets.",
    details:
      "We plan and manage paid campaigns based on your business goals, target audience, location, and available budget. Campaigns are monitored and adjusted over time, with conversion tracking where the required setup is available.",
    bullets: [
      "Google Search & Call campaigns",
      "Instagram & Facebook advertising",
      "Keyword & audience targeting",
      "Conversion tracking & performance reporting",
    ],
    href: "/services/performance-marketing-company-in-udaipur",
    icon: <AdsClickOutlinedIcon sx={{ fontSize: 26, color: "#D8E5D5" }} />,
  },

  {
    badge: "Social Media Marketing",
    title: "A Consistent Social Media Presence",
    desc: "Keep your business active and professional on social media with planned content, branded visuals, and clear messaging.",
    details:
      "We handle the ongoing work behind your social media presence, including content planning, captions, branded posts, and publishing. The focus is on communicating what your business offers clearly and giving customers a reason to stay engaged.",
    bullets: [
      "Monthly content planning",
      "Branded posts, carousels & reels",
      "Instagram, Facebook & LinkedIn",
      "Publishing & performance reporting",
    ],
    href: "/services/social-media-marketing-service-in-udaipur",
    icon: <ShareOutlinedIcon sx={{ fontSize: 26, color: "#D8E5D5" }} />,
  },

  {
    badge: "AI Automation",
    title: "Automate Repetitive Business Work",
    desc: "Reduce manual work by connecting your everyday tools and automating repetitive tasks where it makes sense.",
    details:
      "We create practical workflows that can move information between the tools your business already uses, such as WhatsApp, Gmail, Google Sheets, CRMs, and other software. AI can be added where it genuinely improves the workflow.",
    bullets: [
      "Lead routing & follow-up workflows",
      "Email, spreadsheet & CRM automation",
      "Document & invoice data extraction",
      "AI-assisted customer support & responses",
    ],
    href: "/services/ai-automation-company-in-udaipur",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 26, color: "#D8E5D5" }} />,
  },
];



const automationService = {

badge: "Efficiency & Automation",

title: "AI & Business Workflow Automation",

desc: "Reduce repetitive data entry, follow-ups, and routine customer communication so your team can focus on more important work.",

details:
  "If your team spends too much time moving customer information between forms, spreadsheets, emails, or other tools, we can automate those steps. We connect the software your business already uses—such as WhatsApp, Gmail, Google Sheets, and CRMs—so information can move between systems and routine tasks can happen automatically.",

bullets: [
  "New enquiries automatically routed to the right person or channel",
  "Customer details synced between forms, spreadsheets, and business tools",
  "Automated follow-ups and responses for routine customer questions",
  "AI-assisted workflows for documents, customer support, and repetitive tasks",
],

href: "/services/ai-automation-company-in-udaipur",


  icon: <SmartToyOutlinedIcon sx={{ fontSize: 30, color: "#D8E5D5" }} />,
};

export default function HomeServices() {
  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: "#183D35",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(216, 229, 213, 0.12)",
        borderBottom: "1px solid rgba(216, 229, 213, 0.12)",
      }}
    >
      {/* Background Decorative Ambient Glows matching Web Dev Hero */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          right: "5%",
          width: 650,
          height: 650,
          background: "radial-gradient(circle, rgba(61, 118, 93, 0.3) 0%, rgba(24, 61, 53, 0) 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: 550,
          height: 550,
          background: "radial-gradient(circle, rgba(216, 229, 213, 0.1) 0%, rgba(24, 61, 53, 0) 70%)",
          filter: "blur(80px)",
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
                bgcolor: "rgba(61, 118, 93, 0.28)",
                border: "1px solid rgba(216, 229, 213, 0.25)",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(12px)",
                mb: 2.5,
              }}
            >
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#D8E5D5", boxShadow: "0 0 10px #D8E5D5" }}
              />
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#D8E5D5",
                  textTransform: "uppercase",
                }}
              >
                OUR FULL-SERVICE DIGITAL CAPABILITIES
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: { xs: "1.9rem", sm: "2.35rem", md: "2.8rem", lg: "3.2rem" },
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: { xs: 1.2, md: 1.15 },
                letterSpacing: "-0.025em",
                textWrap: "balance",
                mb: 2.2,
              }}
            >
              Complete Digital Services to Build,{" "}
              <Box
                component="span"
                sx={{
                  display: "inline",
                  fontStyle: "italic",
                  color: "#D8E5D5",
                }}
              >
                Market &amp; Automate Your Business.
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.125rem" },
                lineHeight: 1.7,
                color: "rgba(216, 229, 213, 0.85)",
                fontWeight: 400,
                maxWidth: { xs: "100%", md: 740, lg: 780 },
                mx: "auto",
              }}
            >
              From website development and branding to SEO, paid advertising, and AI automation, Aetibar brings essential digital services together under one roof.
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
                    bgcolor: "rgba(255, 255, 255, 0.04)",
                    p: { xs: 3.5, sm: 4 },
                    borderRadius: { xs: "20px", md: "24px" },
                    border: "1px solid rgba(216, 229, 213, 0.14)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.5)",
                      borderColor: "rgba(216, 229, 213, 0.38)",
                      bgcolor: "rgba(255, 255, 255, 0.07)",
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
                          bgcolor: "rgba(216, 229, 213, 0.1)",
                          border: "1px solid rgba(216, 229, 213, 0.2)",
                          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
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
                          color: "#D8E5D5",
                          bgcolor: "rgba(216, 229, 213, 0.12)",
                          border: "1px solid rgba(216, 229, 213, 0.25)",
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
                        fontFamily: '"DM Serif Display", serif',
                        fontSize: { xs: "1.25rem", sm: "1.35rem" },
                        fontWeight: 400,
                        letterSpacing: "-0.015em",
                        color: "#FFFFFF",
                        mb: 1,
                        lineHeight: 1.3,
                        textWrap: "balance",
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#D8E5D5",
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
                        color: "rgba(216, 229, 213, 0.8)",
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
                              bgcolor: "rgba(216, 229, 213, 0.15)",
                              color: "#D8E5D5",
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
                              color: "rgba(255, 255, 255, 0.88)",
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

                  <Box sx={{ pt: 2, borderTop: "1px solid rgba(216, 229, 213, 0.12)" }}>
                    <Link href={service.href} style={{ textDecoration: "none" }}>
                      <Button
                        variant="text"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                        sx={{
                          p: 0,
                          color: "#D8E5D5",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          textTransform: "none",
                          "&:hover": {
                            color: "#FFFFFF",
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
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  p: { xs: 3.5, sm: 4.5, md: 5 },
                  borderRadius: { xs: "20px", md: "28px" },
                  border: "1.5px solid rgba(216, 229, 213, 0.25)",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
                  backdropFilter: "blur(12px)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "rgba(216, 229, 213, 0.45)",
                    boxShadow: "0 20px 45px -10px rgba(0, 0, 0, 0.5)",
                    transform: "translateY(-3px)",
                    bgcolor: "rgba(255, 255, 255, 0.08)",
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
                          bgcolor: "rgba(216, 229, 213, 0.1)",
                          border: "1px solid rgba(216, 229, 213, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
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
                          color: "#D8E5D5",
                          bgcolor: "rgba(216, 229, 213, 0.12)",
                          border: "1px solid rgba(216, 229, 213, 0.25)",
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
                        fontFamily: '"DM Serif Display", serif',
                        fontSize: { xs: "1.45rem", sm: "1.65rem", md: "1.85rem" },
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                        color: "#FFFFFF",
                        mb: 1.2,
                        lineHeight: 1.25,
                      }}
                    >
                      {automationService.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "#D8E5D5",
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
                        color: "rgba(216, 229, 213, 0.85)",
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
                          bgcolor: "#D8E5D5",
                          color: "#183D35",
                          px: 3.5,
                          py: 1.2,
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          borderRadius: "9999px",
                          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                          textTransform: "none",
                          "&:hover": {
                            bgcolor: "#FFFFFF",
                            color: "#183D35",
                            boxShadow: "0 8px 25px rgba(216, 229, 213, 0.4)",
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
                        bgcolor: "rgba(0, 0, 0, 0.2)",
                        p: { xs: 3, sm: 3.5 },
                        borderRadius: "20px",
                        border: "1px solid rgba(216, 229, 213, 0.15)",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          color: "#D8E5D5",
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
                              bgcolor: "rgba(216, 229, 213, 0.15)",
                              color: "#D8E5D5",
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
                              color: "rgba(255, 255, 255, 0.9)",
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
