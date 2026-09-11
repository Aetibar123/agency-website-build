import React from "react";
import { Metadata } from "next";
import ContactHeroSection from "../../components/contact/ContactHeroSection";
import { Box, Container, Typography, IconButton } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const metadata: Metadata = {
  title: "Contact",

  description:
    "Get in touch with Aetibar for expert web development, mobile app development, AI automation, SEO, digital marketing, and brand design services.",

  keywords: [
    "Contact Aetibar",
    "Web Development Company in Udaipur",
    "Website Development Company",
    "Mobile App Development",
    "AI Automation",
    "SEO Services",
    "Digital Marketing Company in Udaipur",
    "Brand Design",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/contact",
  },

  openGraph: {
    title: "Contact Aetibar | Web Development & AI Studio",
    description:
      "Get in touch with Aetibar for web development, mobile apps, AI automation, SEO, and branding services.",
    url: "https://www.aetibar.in/contact",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aetibar Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Aetibar",
    description:
      "Contact Aetibar for professional web development and digital solutions.",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />

      {/* Direct Contact Channel Section (Light Architectural Surface) */}
      <Box
        sx={{
          bgcolor: "#FAF9F5",
          py: { xs: 10, md: 16 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ mb: 6 }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                bgcolor: "rgba(14, 116, 144, 0.08)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2.5,
              }}
            >
              <EmailOutlinedIcon sx={{ fontSize: 28, color: "#0E7490" }} />
            </Box>

            <Typography
              variant="h4"
              sx={{
                color: "#0E172A",
                fontWeight: 800,
                fontSize: { xs: "1.5rem", md: "1.8rem" },
                mb: 1.5,
              }}
            >
              Start a Conversation
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#5E6068",
                mb: 3.5,
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Have a technical specification, RFP, or rough project outline? Send your inquiry
              directly to our engineering lead:
            </Typography>

            <Typography
              variant="h4"
              component="a"
              href="mailto:hello.aetibar@gmail.com"
              sx={{
                display: "inline-block",
                color: "#0E172A",
                fontWeight: 800,
                fontSize: { xs: "1.3rem", sm: "1.7rem" },
                textDecoration: "none",
                borderBottom: "2px solid #0E7490",
                pb: 0.5,
                transition: "all 0.25s ease",
                "&:hover": {
                  color: "#0E7490",
                  transform: "translateY(-2px)",
                },
              }}
            >
              hello.aetibar@gmail.com
            </Typography>
          </Box>

          <Box sx={{ pt: 4, borderTop: "1px solid rgba(17, 18, 21, 0.08)" }}>
            <Typography
              variant="caption"
              sx={{
                color: "#5E6068",
                mb: 2.5,
                fontWeight: 700,
                letterSpacing: "0.1em",
                display: "block",
              }}
            >
              CONNECT WITH OUR STUDIO
            </Typography>

            <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center" }}>
              <IconButton
                component="a"
                href="https://x.com/Aetibar_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aetibar on X"
                sx={{
                  color: "#0E172A",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(17, 18, 21, 0.1)",
                  width: 46,
                  height: 46,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    bgcolor: "#0E172A",
                    color: "#FFFFFF",
                    transform: "translateY(-2px)",
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
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(17, 18, 21, 0.1)",
                  width: 46,
                  height: 46,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    bgcolor: "#0E172A",
                    color: "#FFFFFF",
                    transform: "translateY(-2px)",
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
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(17, 18, 21, 0.1)",
                  width: 46,
                  height: 46,
                  transition: "all 0.25s ease",
                  "&:hover": {
                    bgcolor: "#0E172A",
                    color: "#FFFFFF",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
