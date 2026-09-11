"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import Image from "next/image";

export default function SelectedWorkSection() {
  return (
    <Box
      id="selected-work"
      component="section"
      sx={{
        bgcolor: "#FAF9F5",
        py: { xs: 12, md: 18 },
        borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
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
            SELECTED WORK & CASE STUDIES
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "flex-end" },
              gap: 3,
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
              Real Projects.{" "}
              <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
              <Box component="span" sx={{ color: "#0E7490" }}>
                Measurable Impact.
              </Box>
            </Typography>

            <Button
              component={Link}
              href="/portfolio"
              variant="outlined"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                borderColor: "rgba(17, 18, 21, 0.2)",
                color: "#0E172A",
                px: 3,
                py: 1.2,
                fontWeight: 600,
                "&:hover": {
                  borderColor: "#0E172A",
                  bgcolor: "rgba(14, 23, 42, 0.04)",
                },
              }}
            >
              View Full Archive
            </Button>
          </Box>
        </Box>

        {/* PROJECT 01: Large Featured Case Study (Asymmetric Horizontal Split) */}
        <Box
          component={Link}
          href="/portfolio/nexus-ecommerce"
          sx={{
            display: "block",
            textDecoration: "none",
            bgcolor: "#FFFFFF",
            borderRadius: "12px",
            border: "1px solid rgba(17, 18, 21, 0.08)",
            overflow: "hidden",
            mb: { xs: 6, md: 8 },
            transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 20px 40px rgba(17, 18, 21, 0.06)",
              "& .project-img": {
                transform: "scale(1.03)",
              },
              "& .cta-arrow": {
                transform: "translateX(6px)",
                color: "#0E7490",
              },
            },
          }}
        >
          <Grid container sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 260, sm: 360, md: 480 },
                  width: "100%",
                  bgcolor: "#EBE8DF",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/portfolio/ecommerce.png"
                  alt="Custom Headless E-Commerce Platform"
                  fill
                  className="project-img"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  sizes="(max-width: 900px) 100vw, 60vw"
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(14, 23, 42, 0.04) 0%, rgba(14, 23, 42, 0.3) 100%)",
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ p: { xs: 4, sm: 5, md: 6 } }}>
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center", mb: 2 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#0E7490",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      fontSize: "0.75rem",
                    }}
                  >
                    CASE STUDY 01 &bull; WEB DEVELOPMENT
                  </Typography>
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    color: "#0E172A",
                    fontSize: { xs: "1.6rem", md: "2.1rem" },
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    mb: 2,
                  }}
                >
                  Custom Headless E-Commerce Platform
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    color: "#5E6068",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    mb: 2.5,
                  }}
                >
                  CLIENT: RETAIL INDUSTRY &bull; STACK: NEXT.JS &bull; REST APIS &bull; SSR
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#4A4D57",
                    lineHeight: 1.75,
                    fontSize: "1rem",
                    mb: 4,
                  }}
                >
                  Replaced an inflexible legacy storefront with a modern headless Next.js
                  architecture, decoupling product data management from frontend rendering to
                  deliver sub-second page loads and seamless cross-device purchasing.
                </Typography>

                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1.2,
                    color: "#0E172A",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                  }}
                >
                  Read Full Case Study
                  <ArrowForwardIcon
                    className="cta-arrow"
                    sx={{ fontSize: 18, transition: "all 0.25s ease" }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* PROJECTS 02 + 03: Asymmetric Duo Grid */}
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 6, md: 8 } }}>
          {/* Project 02 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={Link}
              href="/portfolio/logix-driver-app"
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                textDecoration: "none",
                bgcolor: "#FFFFFF",
                borderRadius: "12px",
                border: "1px solid rgba(17, 18, 21, 0.08)",
                overflow: "hidden",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 40px rgba(17, 18, 21, 0.06)",
                  "& .p2-img": {
                    transform: "scale(1.03)",
                  },
                  "& .p2-arrow": {
                    transform: "translateX(6px)",
                    color: "#0E7490",
                  },
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 240, sm: 300, md: 340 },
                  bgcolor: "#EBE8DF",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/portfolio/logix.png"
                  alt="Fleet Management Mobile Application"
                  fill
                  className="p2-img"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </Box>

              <Box sx={{ p: { xs: 3.5, sm: 4, md: 5 }, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#0E7490",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      fontSize: "0.75rem",
                      display: "block",
                      mb: 1.5,
                    }}
                  >
                    CASE STUDY 02 &bull; APP DEVELOPMENT
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      color: "#0E172A",
                      fontSize: { xs: "1.4rem", md: "1.65rem" },
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      mb: 1.5,
                      lineHeight: 1.25,
                    }}
                  >
                    Fleet Management Mobile Application
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      color: "#5E6068",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      mb: 2,
                    }}
                  >
                    CLIENT: LOGISTICS COMPANY &bull; OFFLINE-FIRST &bull; GPS TRACKING
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#4A4D57",
                      lineHeight: 1.75,
                      fontSize: "0.9375rem",
                      mb: 3,
                    }}
                  >
                    Engineered an offline-first cross-platform application with real-time GPS tracking,
                    barcode verification, and automated background data synchronization for drivers in
                    low-connectivity environments.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#0E172A",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                  }}
                >
                  View App Architecture
                  <ArrowForwardIcon className="p2-arrow" sx={{ fontSize: 16, transition: "all 0.25s ease" }} />
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Project 03 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={Link}
              href="/portfolio/ai-customer-support"
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                textDecoration: "none",
                bgcolor: "#FFFFFF",
                borderRadius: "12px",
                border: "1px solid rgba(17, 18, 21, 0.08)",
                overflow: "hidden",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 40px rgba(17, 18, 21, 0.06)",
                  "& .p3-img": {
                    transform: "scale(1.03)",
                  },
                  "& .p3-arrow": {
                    transform: "translateX(6px)",
                    color: "#0E7490",
                  },
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 240, sm: 300, md: 340 },
                  bgcolor: "#EBE8DF",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/portfolio/aiCostomer.png"
                  alt="AI Customer Support Automation Platform"
                  fill
                  className="p3-img"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </Box>

              <Box sx={{ p: { xs: 3.5, sm: 4, md: 5 }, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#0E7490",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      fontSize: "0.75rem",
                      display: "block",
                      mb: 1.5,
                    }}
                  >
                    CASE STUDY 03 &bull; AI AUTOMATION
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      color: "#0E172A",
                      fontSize: { xs: "1.4rem", md: "1.65rem" },
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      mb: 1.5,
                      lineHeight: 1.25,
                    }}
                  >
                    AI Customer Support Automation
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      color: "#5E6068",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      mb: 2,
                    }}
                  >
                    CLIENT: TECHFLOW SAAS &bull; RAG ARCHITECTURE &bull; WORKFLOW AUTOMATION
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#4A4D57",
                      lineHeight: 1.75,
                      fontSize: "0.9375rem",
                      mb: 3,
                    }}
                  >
                    Designed an enterprise RAG knowledge platform connected directly to verified business
                    documentation, automating 70%+ of repetitive support requests while preserving instant
                    human agent escalation.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#0E172A",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                  }}
                >
                  View AI Solution
                  <ArrowForwardIcon className="p3-arrow" sx={{ fontSize: 16, transition: "all 0.25s ease" }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* PROJECT 04: Panoramic Showcase (Enterprise SEO Migration) */}
        <Box
          component={Link}
          href="/portfolio/enterprise-seo-migration"
          sx={{
            display: "block",
            textDecoration: "none",
            bgcolor: "#F2F0EB",
            borderRadius: "12px",
            border: "1px solid rgba(17, 18, 21, 0.08)",
            p: { xs: 4, sm: 5, md: 7 },
            transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 20px 40px rgba(17, 18, 21, 0.06)",
              bgcolor: "#FFFFFF",
              "& .p4-arrow": {
                transform: "translateX(6px)",
                color: "#0E7490",
              },
            },
          }}
        >
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#0E7490",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  fontSize: "0.75rem",
                  display: "block",
                  mb: 1.5,
                }}
              >
                CASE STUDY 04 &bull; SEO & TECHNICAL MIGRATION
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  color: "#0E172A",
                  fontSize: { xs: "1.6rem", md: "2.2rem" },
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Enterprise SEO Site Migration for 500,000+ Pages
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#4A4D57",
                  lineHeight: 1.75,
                  fontSize: "1rem",
                  mb: 3,
                }}
              >
                Mapped and validated over 150,000 permanent 301 redirects, restructured schema hierarchy,
                and migrated National News Network onto Next.js SSR with zero search ranking drop and an
                18% organic lift within 60 days.
              </Typography>

              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  color: "#0E172A",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                }}
              >
                Explore Full Migration Breakdown
                <ArrowForwardIcon className="p4-arrow" sx={{ fontSize: 18, transition: "all 0.25s ease" }} />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 2.5,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    p: 3,
                    borderRadius: "8px",
                    border: "1px solid rgba(17, 18, 21, 0.08)",
                  }}
                >
                  <Typography sx={{ color: "#0E7490", fontWeight: 800, fontSize: "1.8rem", lineHeight: 1 }}>
                    500K+
                  </Typography>
                  <Typography sx={{ color: "#5E6068", fontSize: "0.85rem", fontWeight: 600, mt: 1 }}>
                    Indexed Pages Migrated
                  </Typography>
                </Box>

                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    p: 3,
                    borderRadius: "8px",
                    border: "1px solid rgba(17, 18, 21, 0.08)",
                  }}
                >
                  <Typography sx={{ color: "#0E7490", fontWeight: 800, fontSize: "1.8rem", lineHeight: 1 }}>
                    +18%
                  </Typography>
                  <Typography sx={{ color: "#5E6068", fontSize: "0.85rem", fontWeight: 600, mt: 1 }}>
                    Organic Search Lift
                  </Typography>
                </Box>

                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    p: 3,
                    borderRadius: "8px",
                    border: "1px solid rgba(17, 18, 21, 0.08)",
                  }}
                >
                  <Typography sx={{ color: "#0E7490", fontWeight: 800, fontSize: "1.8rem", lineHeight: 1 }}>
                    150K+
                  </Typography>
                  <Typography sx={{ color: "#5E6068", fontSize: "0.85rem", fontWeight: 600, mt: 1 }}>
                    Verified 301 Redirects
                  </Typography>
                </Box>

                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    p: 3,
                    borderRadius: "8px",
                    border: "1px solid rgba(17, 18, 21, 0.08)",
                  }}
                >
                  <Typography sx={{ color: "#0E7490", fontWeight: 800, fontSize: "1.8rem", lineHeight: 1 }}>
                    0%
                  </Typography>
                  <Typography sx={{ color: "#5E6068", fontSize: "0.85rem", fontWeight: 600, mt: 1 }}>
                    Organic Traffic Lost
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
