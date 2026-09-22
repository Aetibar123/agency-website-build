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

const services = [
  {
    title: "Web Development",
    desc: "Business websites, e-commerce websites, and custom web applications.",
    details:
      "We create websites that help your business showcase its services, connect with customers, generate inquiries, and sell products online.",
    href: "/services/web-development",
    icon: <LanguageIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },

  {
    title: "App Development",
    desc: "Mobile apps built to support your business and serve your customers.",
    details:
      "We build Android and iOS apps that make it easier for your customers to use your services, access your products, and interact with your business on their mobile phons.",
    href: "/services/app-development",
    icon: <PhoneIphoneIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },

  {
    title: "AI Automation & Integration",
    desc: "AI solutions that connect with the tools you already use and simplify everyday work.",
    details:
      "We help reduce repetitive work, connect your existing business tools, and make everyday tasks easier, faster, and more efficient.",
    href: "/services/ai-automation",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },

  {
    title: "SEO Services",
    desc: "SEO services to improve your website visibility and help more customers find your business.",
    details:
      "We improve your website's search visibility, help you reach more people on Google, and strengthen your presence in your local area.",
    href: "/services/seo",
    icon: <SearchIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },

  {
    title: "Social Media Marketing",
    desc: "Social media marketing to grow your online presence and connect with your audience.",
    details:
      "We help manage your social media presence, plan useful content, grow your social media accounts organically, and keep your business connected with potential customers.",
    href: "/services/social-media-marketing",
    icon: <ShareOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
  },

  {
    title: "Paid Advertising",
    desc: "Google Ads and Meta Ads to reach the right audience and attract potential customers.",
    details:
      "We create and manage Google and Meta ads to help your business reach the right customers, attract more potential buyers, and increase sales.",
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
              Our Core Services
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
            What We Can Help You With
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.05rem", sm: "1.15rem" },
              lineHeight: 1.8,
              color: "#52525B",
              fontWeight: 400,
            }}
          >
            Explore our web development, mobile app development, AI automation, SEO, social media marketing, and paid advertising services—all designed to meet different digital needs of your business.
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {services.map((service, idx) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
              <Box
                sx={{
                  bgcolor: "#FAF8F5",
                  p: { xs: 3.5, sm: 4 },
                  borderRadius: "16px",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 14px 30px -8px rgba(24, 24, 27, 0.08)",
                    borderColor: "#EA580C",
                  },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "12px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
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
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "#18181B",
                      mb: 1.5,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.95rem",
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
                      mb: 3,
                    }}
                  >
                    {service.details}
                  </Typography>
                </Box>

                <Box sx={{ pt: 2, borderTop: "1px solid rgba(228, 228, 231, 0.8)" }}>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
