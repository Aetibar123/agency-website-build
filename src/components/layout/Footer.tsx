"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const serviceLinks = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "App Development", href: "/services/app-development" },
  { name: "AI Automation & Integration", href: "/services/ai-automation" },
  { name: "SEO Services", href: "/services/seo" },
  { name: "Social Media Marketing", href: "/services/social-media-marketing" },
  { name: "Paid Advertising", href: "/services/paid-advertising" },
];

const companyLinks = [
  { name: "Our Work", href: "/work" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/aetibar",
    icon: <LinkedInIcon sx={{ fontSize: 16 }} />,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/Aetibar_",
    icon: <TwitterIcon sx={{ fontSize: 16 }} />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aetibar_information/",
    icon: <InstagramIcon sx={{ fontSize: 16 }} />,
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#FAF8F5",
        color: "#18181B",
        pt: { xs: 8, sm: 10, md: 12 },
        pb: { xs: 5, md: 6 },
        borderTop: "1px solid rgba(228, 228, 231, 0.9)",
        width: "100%",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2.5, sm: 3, md: 4 } }}>
        {/* ========================================================================= */}
        {/* MAIN BALANCED GRID                                                        */}
        {/* ========================================================================= */}
        <Grid container spacing={{ xs: 5, sm: 6, lg: 8 }} sx={{ mb: { xs: 7, md: 10 } }}>
          {/* Col 1: Brand & Studio Identity */}
          <Grid size={{ xs: 12, md: 4.5, lg: 5 }}>
            <Box sx={{ maxWidth: 440 }}>
              {/* Brand Logo */}
              <Typography
                component={Link}
                href="/"
                sx={{
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "#18181B",
                  textDecoration: "none",
                  fontSize: { xs: "1.35rem", md: "1.5rem" },
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.8,
                  mb: 2,
                }}
              >
                AETIBAR
                <Box
                  component="span"
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "#EA580C",
                    boxShadow: "0 0 10px rgba(234, 88, 12, 0.6)",
                    display: "inline-block",
                  }}
                />
              </Typography>

              {/* Tagline / Mission */}
              <Typography
                sx={{
                  fontSize: { xs: "0.88rem", sm: "0.92rem" },
                  color: "#52525B",
                  lineHeight: 1.75,
                  mb: 3,
                }}
              >
                Building practical digital systems around how businesses actually work. We engineer
                purpose-built websites, custom operational software, and practical AI automation.
              </Typography>

              {/* Location & Direct Availability Pill */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.8,
                  py: 0.6,
                  borderRadius: "9999px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  boxShadow: "0 1px 4px rgba(24, 24, 27, 0.02)",
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    bgcolor: "#16A34A",
                    boxShadow: "0 0 6px #16A34A",
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    color: "#52525B",
                    fontWeight: 600,
                  }}
                >
                  Udaipur, Rajasthan &bull; Serving Clients Globally
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Col 2: Services */}
          <Grid size={{ xs: 6, sm: 4, md: 2.5, lg: 2.3 }}>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#18181B",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2.5,
              }}
            >
              SERVICES
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.6 }}>
              {serviceLinks.map((item) => (
                <Typography
                  key={item.name}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: "#52525B",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    lineHeight: 1.4,
                    transition: "color 0.2s ease, transform 0.2s ease",
                    display: "inline-block",
                    "&:hover": {
                      color: "#EA580C",
                      transform: "translateX(2px)",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Col 3: Company */}
          <Grid size={{ xs: 6, sm: 4, md: 2.5, lg: 2.3 }}>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#18181B",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2.5,
              }}
            >
              COMPANY
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.6 }}>
              {companyLinks.map((item) => (
                <Typography
                  key={item.name}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: "#52525B",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    lineHeight: 1.4,
                    transition: "color 0.2s ease, transform 0.2s ease",
                    display: "inline-block",
                    "&:hover": {
                      color: "#EA580C",
                      transform: "translateX(2px)",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Col 4: Direct Contact & Socials */}
          <Grid size={{ xs: 12, sm: 4, md: 2.5, lg: 2.4 }}>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#18181B",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2.5,
              }}
            >
              CONNECT
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.6 }}>
              {/* Direct Email */}
              <Typography
                component="a"
                href="mailto:hello.aetibar@gmail.com"
                sx={{
                  color: "#18181B",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  wordBreak: "break-all",
                  transition: "color 0.2s ease",
                  "&:hover": { color: "#EA580C" },
                }}
              >
                hello.aetibar@gmail.com
              </Typography>

              {/* Start Project Link */}
              <Typography
                component={Link}
                href="/contact"
                sx={{
                  color: "#EA580C",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.6,
                  transition: "gap 0.2s ease",
                  "&:hover": {
                    gap: 1,
                  },
                }}
              >
                <span>Start a Project</span>
                <ArrowForwardRoundedIcon sx={{ fontSize: 15 }} />
              </Typography>

              {/* Social Channels Strip */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, pt: 1 }}>
                {socialLinks.map((social) => (
                  <Typography
                    key={social.name}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Aetibar on ${social.name}`}
                    sx={{
                      color: "#71717A",
                      display: "inline-flex",
                      alignItems: "center",
                      transition: "color 0.2s ease, transform 0.2s ease",
                      "&:hover": {
                        color: "#EA580C",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {social.icon}
                  </Typography>
                ))}
              </Box>

              <Typography
                sx={{
                  fontSize: "0.78rem",
                  color: "#71717A",
                  lineHeight: 1.5,
                  mt: 0.5,
                }}
              >
                Senior engineer response within 24 business hours.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* ========================================================================= */}
        {/* BOTTOM LEGAL & COPYRIGHT BAR (Clean & Grounded)                           */}
        {/* ========================================================================= */}
        <Box
          sx={{
            pt: 3.5,
            borderTop: "1px solid rgba(228, 228, 231, 0.8)",
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: "#71717A",
              fontSize: { xs: "0.78rem", sm: "0.82rem" },
            }}
          >
            &copy; {new Date().getFullYear()} Aetibar Technologies. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
            <Typography
              component={Link}
              href="/privacy-policy"
              sx={{
                color: "#71717A",
                fontSize: { xs: "0.78rem", sm: "0.82rem" },
                textDecoration: "none",
                transition: "color 0.2s ease",
                "&:hover": { color: "#EA580C" },
              }}
            >
              Privacy Policy
            </Typography>

            <Box sx={{ width: 3, height: 3, borderRadius: "50%", bgcolor: "#D4D4D8", flexShrink: 0 }} />

            <Typography
              component={Link}
              href="/terms-of-service"
              sx={{
                color: "#71717A",
                fontSize: { xs: "0.78rem", sm: "0.82rem" },
                textDecoration: "none",
                transition: "color 0.2s ease",
                "&:hover": { color: "#EA580C" },
              }}
            >
              Terms of Service
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
