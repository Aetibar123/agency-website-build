"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const solutionLinks = [
  { name: "Digital Presence", href: "/solutions/business-websites" },
  { name: "Customer & Lead Systems", href: "/solutions/customer-lead-systems" },
  { name: "Internal Business Tools", href: "/solutions/internal-business-tools" },
  { name: "AI & Automation", href: "/solutions/ai-automation" },
];

const companyLinks = [
  { name: "How We Help", href: "/how-we-help" },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Our Work", href: "/work" },
  { name: "Insights", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#F2EFE9",
        color: "#111215",
        pt: { xs: 10, md: 14 },
        pb: 6,
        borderTop: "1px solid rgba(17, 18, 21, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ mb: { xs: 8, md: 10 } }}>
          {/* Col 1: Brand Statement */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              component={Link}
              href="/"
              sx={{
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#0E172A",
                textDecoration: "none",
                fontSize: "1.45rem",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                mb: 2.5,
              }}
            >
              AETIBAR
              <Box
                component="span"
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  bgcolor: "#0E7490",
                  display: "inline-block",
                }}
              />
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#475569",
                lineHeight: 1.8,
                fontSize: "0.95rem",
                maxWidth: 380,
                mb: 3,
              }}
            >
              Building practical digital systems around how businesses actually work. We diagnose friction, connect fragmented workflows, and engineer purpose-built tools.
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  color: "#0E7490",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  fontSize: "0.725rem",
                  mb: 0.5,
                }}
              >
                STUDIO LOCATION
              </Typography>
              <Typography variant="body2" sx={{ color: "#0E172A", fontWeight: 600 }}>
                Udaipur, Rajasthan, India &bull; Serving Clients Globally
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  color: "#0E7490",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  fontSize: "0.725rem",
                  mb: 0.5,
                }}
              >
                DIRECT CONTACT
              </Typography>
              <Typography
                component="a"
                href="mailto:hello.aetibar@gmail.com"
                sx={{
                  color: "#0E172A",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  "&:hover": { color: "#0E7490" },
                }}
              >
                hello.aetibar@gmail.com
              </Typography>
            </Box>
          </Grid>

          {/* Col 2: Solutions */}
          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#0E172A",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontSize: "0.775rem",
                mb: 3,
              }}
            >
              Solutions
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
              {solutionLinks.map((item) => (
                <Typography
                  key={item.name}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: "#525760",
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    transition: "color 0.2s ease, transform 0.2s ease",
                    display: "inline-block",
                    "&:hover": {
                      color: "#0E172A",
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
          <Grid size={{ xs: 12, sm: 6, md: 2.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#0E172A",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontSize: "0.775rem",
                mb: 3,
              }}
            >
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
              {companyLinks.map((item) => (
                <Typography
                  key={item.name}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: "#525760",
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    transition: "color 0.2s ease, transform 0.2s ease",
                    display: "inline-block",
                    "&:hover": {
                      color: "#0E172A",
                      transform: "translateX(2px)",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Col 4: Contact Callout */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#0E172A",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontSize: "0.775rem",
                mb: 3,
              }}
            >
              Start a Conversation
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#525760",
                lineHeight: 1.7,
                fontSize: "0.925rem",
                mb: 3,
              }}
            >
              Tell us how your business operates today and where manual work is slowing you down. We start with the problem, not the sales pitch.
            </Typography>

            <Button
              component={Link}
              href="/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                bgcolor: "#0E172A",
                color: "#FFFFFF",
                px: 3,
                py: 1.25,
                fontWeight: 600,
                fontSize: "0.875rem",
                borderRadius: "6px",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "#1E293B",
                  boxShadow: "0 4px 14px rgba(14, 23, 42, 0.12)",
                },
              }}
            >
              Let&apos;s Talk
            </Button>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
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
          <Typography
            variant="caption"
            sx={{
              color: "#64748B",
              fontSize: "0.825rem",
            }}
          >
            &copy; {new Date().getFullYear()} Aetibar Technologies. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography
              component={Link}
              href="/privacy-policy"
              sx={{
                color: "#64748B",
                fontSize: "0.825rem",
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
                color: "#64748B",
                fontSize: "0.825rem",
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
