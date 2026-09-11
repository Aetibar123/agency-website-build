"use client";
import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const serviceLinks = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile App Development", href: "/services/mobile-app-development" },
  { name: "AI Automation", href: "/services/ai-automation" },
  { name: "Search Engine Optimization", href: "/services/search-engine-optimization" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Graphic & Brand Design", href: "/services/graphic-design" },
];

const companyLinks = [
  { name: "Selected Work", href: "/portfolio" },
  { name: "About the Studio", href: "/about" },
  { name: "Insights & Journal", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#F2F0EB",
        color: "#111215",
        pt: { xs: 10, md: 14 },
        pb: 6,
        borderTop: "1px solid rgba(17, 18, 21, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ mb: { xs: 8, md: 12 } }}>
          {/* Col 1: Logo & Brand Statement */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              component={Link}
              href="/"
              sx={{
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#0E172A",
                textDecoration: "none",
                fontSize: "1.4rem",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                mb: 2.5,
              }}
            >
              AETIBAR
              <Box
                component="span"
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#0E7490",
                  display: "inline-block",
                }}
              />
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#4A4D57",
                lineHeight: 1.75,
                fontSize: "0.95rem",
                maxWidth: 420,
                mb: 3,
              }}
            >
              Aetibar is an engineering and creative studio building custom digital products,
              intelligent AI workflows, and strategic growth infrastructure for ambitious businesses.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  color: "#0E7490",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  fontSize: "0.75rem",
                  mb: 0.5,
                }}
              >
                STUDIO LOCATION
              </Typography>
              <Typography variant="body2" sx={{ color: "#111215", fontWeight: 600 }}>
                Udaipur, Rajasthan, India &bull; Serving Clients Globally
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                component="a"
                href="https://x.com/Aetibar_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aetibar on X"
                sx={{
                  color: "#0E172A",
                  bgcolor: "#FAF9F5",
                  border: "1px solid rgba(17, 18, 21, 0.08)",
                  "&:hover": {
                    bgcolor: "#0E172A",
                    color: "#FFFFFF",
                  },
                }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/aetibar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aetibar on LinkedIn"
                sx={{
                  color: "#0E172A",
                  bgcolor: "#FAF9F5",
                  border: "1px solid rgba(17, 18, 21, 0.08)",
                  "&:hover": {
                    bgcolor: "#0E172A",
                    color: "#FFFFFF",
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/aetibar_information/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aetibar on Instagram"
                sx={{
                  color: "#0E172A",
                  bgcolor: "#FAF9F5",
                  border: "1px solid rgba(17, 18, 21, 0.08)",
                  "&:hover": {
                    bgcolor: "#0E172A",
                    color: "#FFFFFF",
                  },
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Col 2: Services Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3.5 }}>
            <Typography
              variant="caption"
              sx={{
                color: "#0E7490",
                fontWeight: 700,
                letterSpacing: "0.1em",
                display: "block",
                mb: 2.5,
              }}
            >
              SERVICES & PRACTICES
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {serviceLinks.map((link) => (
                <Typography
                  key={link.name}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: "#4A4D57",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "color 0.2s ease, transform 0.2s ease",
                    "&:hover": {
                      color: "#0E172A",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  {link.name}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Col 3: Company Links & Direct Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3.5 }}>
            <Typography
              variant="caption"
              sx={{
                color: "#0E7490",
                fontWeight: 700,
                letterSpacing: "0.1em",
                display: "block",
                mb: 2.5,
              }}
            >
              COMPANY & CONTACT
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
              {companyLinks.map((link) => (
                <Typography
                  key={link.name}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: "#4A4D57",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "color 0.2s ease, transform 0.2s ease",
                    "&:hover": {
                      color: "#0E172A",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  {link.name}
                </Typography>
              ))}
            </Box>

            <Box sx={{ pt: 2, borderTop: "1px solid rgba(17, 18, 21, 0.08)" }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#5E6068",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  display: "block",
                  mb: 0.5,
                }}
              >
                DIRECT INQUIRIES
              </Typography>
              <Typography
                component="a"
                href="mailto:hello.aetibar@gmail.com"
                sx={{
                  color: "#0E172A",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  "&:hover": {
                    color: "#0E7490",
                  },
                }}
              >
                hello.aetibar@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar: Copyright & Legal */}
        <Box
          sx={{
            pt: 4,
            borderTop: "1px solid rgba(17, 18, 21, 0.08)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#5E6068", fontSize: "0.85rem" }}>
            &copy; {new Date().getFullYear()} Aetibar Information &amp; Technologies. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography
              component={Link}
              href="/privacy-policy"
              sx={{
                color: "#5E6068",
                fontSize: "0.85rem",
                textDecoration: "none",
                "&:hover": { color: "#0E172A" },
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              component={Link}
              href="/terms-of-service"
              sx={{
                color: "#5E6068",
                fontSize: "0.85rem",
                textDecoration: "none",
                "&:hover": { color: "#0E172A" },
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
