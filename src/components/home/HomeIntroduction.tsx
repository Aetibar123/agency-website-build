"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

const pillars = [
  {
    icon: <CodeIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
    title: "Web & App Development",
    desc: "Business websites, e-commerce stores, and mobile applications designed to help your business build a strong online presence, reach more customers, and make it easier for people to connect with your business."
  },
  {
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
    title: "AI Automation & AI Integration",
    desc: "AI automation and AI integration solutions that work with the tools you already use, reduce repetitive work, and make everyday business tasks easier, faster, and more efficient."
  },
  {
    icon: <CampaignOutlinedIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
    title: "Digital Marketing",
    desc: "SEO, social media marketing, and paid advertising to help your business get found online, grow your social media presence, reach more potential customers, and improve your search visibility in your area."
  },
];

export default function HomeIntroduction() {
  return (
    <Box
      component="section"
      id="introduction"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "#FAF8F5",
        borderTop: "1px solid rgba(228, 228, 231, 0.8)",
        borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.5,
              borderRadius: "9999px",
              bgcolor: "rgba(249, 115, 22, 0.08)",
              border: "1px solid rgba(249, 115, 22, 0.25)",
              mb: 2.5,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: "#EA580C",
                textTransform: "uppercase",
              }}
            >
              Who We Are
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.75rem", md: "3.25rem" },
              fontWeight: 700,
              color: "#18181B",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              mb: 2.5,
            }}
          >
            Digital Solutions for Real Business Needs
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.05rem", sm: "1.15rem" },
              lineHeight: 1.8,
              color: "#52525B",
              fontWeight: 400,
            }}
          >
            Aetibar helps businesses build websites and apps, automate everyday tasks, and reach more customers through digital marketing. We create practical solutions based on what your business needs, with a focus on making your work easier and helping your business grow.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {pillars.map((pillar, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx}>
              <Box
                sx={{
                  bgcolor: "#FFFFFF",
                  p: { xs: 3.5, sm: 4 },
                  borderRadius: "16px",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 2px 8px rgba(24, 24, 27, 0.02)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 24px -6px rgba(24, 24, 27, 0.06)",
                    borderColor: "rgba(249, 115, 22, 0.4)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "12px",
                    bgcolor: "rgba(249, 115, 22, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                  }}
                >
                  {pillar.icon}
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#18181B",
                    mb: 1.5,
                  }}
                >
                  {pillar.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: "#52525B",
                  }}
                >
                  {pillar.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
