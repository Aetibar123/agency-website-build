"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Web Development",
    desc: "Fast, mobile-friendly business websites engineered to turn visitors into paying clients.",
    details:
      "We build modern business websites, e-commerce stores, and customer portals. Every page is optimized for lightning-fast loading speeds, seamless mobile experience, and instant WhatsApp/call inquiry buttons so you capture every prospective client.",
    bullets: ["Mobile-first & SEO-ready structure", "Direct WhatsApp & form lead routing", "100% full source code ownership"],
    href: "/services/web-development",
    icon: <LanguageIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    title: "Mobile App Development",
    desc: "Intuitive iOS & Android apps that keep your customers connected to your business.",
    details:
      "Put your business directly into your customers' hands. We build custom mobile applications with smooth user interfaces, reliable offline functionality, push notifications, and secure checkout—making orders, bookings, and customer inquiries effortless.",
    bullets: ["Cross-platform iOS & Android", "Push notifications & account management", "Smooth, reliable performance"],
    href: "/services/app-development",
    icon: <PhoneIphoneIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    title: "AI Automation & Integration",
    desc: "Automate repetitive daily tasks and connect your business tools together.",
    details:
      "Stop wasting valuable hours copying data from forms into spreadsheets or sending manual follow-ups. We build practical AI automations that instantly route leads to your WhatsApp, sync orders into your CRM, and answer client queries around the clock.",
    bullets: ["Instant lead alerts on WhatsApp", "Automatic CRM & spreadsheet updates", "Save 10+ hours of team busywork weekly"],
    href: "/services/ai-automation",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    title: "SEO Services (Search Optimization)",
    desc: "Rank on the first page of Google when buyers search for your products or services.",
    details:
      "Get a steady stream of incoming inquiries without paying for every click. We optimize your website speed, on-page keywords, and Google Business Profile to attract high-intent customers actively searching to buy in your local area and beyond.",
    bullets: ["Google Business Profile & local SEO", "Keyword optimization for high-intent buyers", "Sustainable, long-term organic leads"],
    href: "/services/seo",
    icon: <SearchIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    title: "Social Media Marketing",
    desc: "Build genuine credibility, brand trust, and customer engagement on social platforms.",
    details:
      "An active, professional presence shows customers that your business is trusted and modern. We handle content planning, custom creative designs, and brand storytelling on Instagram, LinkedIn, and Facebook to turn casual viewers into loyal buyers.",
    bullets: ["Consistent, branded monthly content", "Customer trust & authority building", "Community & follower engagement"],
    href: "/services/social-media-marketing",
    icon: <ShareOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
  {
    title: "Targeted Paid Advertising",
    desc: "High-ROI Google & Meta ad campaigns focused on delivering real customer inquiries.",
    details:
      "Never waste money on ads that bring empty clicks. We create and manage laser-targeted Google Search Ads and Meta campaigns paired with high-converting landing pages, ensuring every marketing dollar directly drives genuine customer inquiries.",
    bullets: ["High-intent Google Search campaigns", "Targeted Instagram & Facebook ads", "Transparent conversion tracking & ROI"],
    href: "/services/paid-advertising",
    icon: <AdsClickOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },
];

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
          <Box sx={{ maxWidth: { xs: "100%", md: 960, lg: 1080 }, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                OUR CORE DIGITAL SERVICES
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                fontWeight: 600,
                color: "#18181B",
                lineHeight: { xs: 1.25, md: 1.18 },
                letterSpacing: "-0.035em",
                textWrap: "balance",
                mb: 2.5,
              }}
            >
              Everything Your Business Needs to Grow Online &amp;{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Win More Clients.
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                lineHeight: 1.75,
                color: "#52525B",
                fontWeight: 400,
                maxWidth: 860,
                mx: "auto",
              }}
            >
              From high-converting web and mobile app development to practical AI workflow automation, SEO services, and paid advertising—we provide end-to-end digital solutions designed to drive real business revenue.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3.5}>
          {services.map((service, idx) => (
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
                      width: 52,
                      height: 52,
                      borderRadius: "14px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                      boxShadow: "0 2px 6px rgba(24, 24, 27, 0.03)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.15rem", sm: "1.2rem", md: "1.25rem" },
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: "#18181B",
                      mb: 1.2,
                      lineHeight: 1.35,
                      textWrap: "balance",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.925rem",
                      fontWeight: 600,
                      color: "#EA580C",
                      mb: 1.5,
                      lineHeight: 1.5,
                    }}
                  >
                    {service.desc}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      color: "#52525B",
                      mb: 2.5,
                    }}
                  >
                    {service.details}
                  </Typography>

                  <Box sx={{ mb: 3, display: "flex", flexDirection: "column", gap: 1 }}>
                    {service.bullets.map((b, bIdx) => (
                      <Box key={bIdx} sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            bgcolor: "#EA580C",
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: "0.85rem",
                            color: "#3F3F46",
                            fontWeight: 500,
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
        </Grid>
      </Container>
    </Box>
  );
}
