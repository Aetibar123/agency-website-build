import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import SolutionsCta from "../../../components/solutions/SolutionsCta";

export const metadata: Metadata = {
  title: "Internal Business Tools | Custom Dashboards & Operations ERPs | Aetibar",
  description:
    "Replace fragile spreadsheets with custom operational dashboards, field service dispatch applications, and margin-protected quoting engines tailored to your team.",
  alternates: {
    canonical: "https://www.aetibar.in/solutions/internal-business-tools",
  },
  openGraph: {
    title: "Internal Business Tools | Aetibar",
    description:
      "Replace fragile spreadsheets with role-based operational dispatch, job tracking, and margin-protected quotation engines.",
    url: "https://www.aetibar.in/solutions/internal-business-tools",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Internal Business Tools",
      },
    ],
  },
};

const toolTypes = [
  {
    title: "Operations Dashboards",
    desc: "Single-pane-of-glass consoles tracking order statuses, project bottlenecks, active jobs, and daily staff assignments in real time.",
    icon: <DashboardCustomizeOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Service & Task Management",
    desc: "Purpose-built job tracking with role permissions—letting dispatchers assign work, technicians update progress, and managers audit completion.",
    icon: <FactCheckOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Scheduling & Dispatch Systems",
    desc: "Drag-and-drop calendar dispatch interfaces with mobile field views, digital sign-offs, and automated route notifications.",
    icon: <CalendarMonthOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Quotation & Invoicing Engines",
    desc: "Margin-aware calculation tools that store dynamic cost tables and generate itemized, branded PDF proposals and invoices with a single click.",
    icon: <ReceiptLongOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Custom Admin & Role Portals",
    desc: "Secure web portals tailored to internal departments, replacing shared spreadsheets with audited, role-restricted access.",
    icon: <AdminPanelSettingsOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
];

const telemetryStats = [
  { value: "14+", label: "Spreadsheets Replaced", desc: "Single central database replaces brittle file chaos" },
  { value: "100%", label: "Margin Guard Floor", desc: "Automated calculations eliminate under-priced bids" },
  { value: "0ms", label: "Double Booking Risk", desc: "Atomic database locking guarantees schedule accuracy" },
  { value: "100%", label: "Software Ownership", desc: "Zero monthly per-user tax as your headcount grows" },
];

export default function InternalBusinessToolsPage() {
  return (
    <main>
      {/* 1. Hero */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 16, sm: 18, md: 22 },
          pb: { xs: 10, md: 14 },
          background:
            "radial-gradient(120% 75% at 50% 0%, rgba(249, 115, 22, 0.09) 0%, rgba(251, 146, 60, 0.03) 45%, #FFFFFF 85%)",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(24, 24, 27, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 24, 27, 0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center" }}>
            {/* Status Pill */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 2.2,
                py: 0.8,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                backdropFilter: "blur(12px)",
                mb: 3.5,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#F97316",
                  boxShadow: "0 0 10px #F97316",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.825rem" },
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#EA580C",
                  textTransform: "uppercase",
                }}
              >
                SOLUTION DOMAIN 03 &bull; OPERATIONAL BACKBONE
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", sm: "3.4rem", md: "4.2rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.035em",
                lineHeight: { xs: 1.15, md: 1.08 },
                mb: 3,
              }}
            >
              Custom tools built around how your team{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                actually operates.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#52525B",
                lineHeight: 1.8,
                maxWidth: 760,
                mx: "auto",
                mb: 5,
              }}
            >
              When your core business runs on 15 shared spreadsheets, dropped tasks and double-bookings become inevitable.
              We engineer custom operational dashboards, dispatch apps, and quotation engines that give your team total clarity.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 2,
                mb: 6,
              }}
            >
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                    color: "#FFFFFF",
                    px: { xs: 3.5, sm: 4.5 },
                    py: { xs: 1.5, sm: 1.6 },
                    borderRadius: "9999px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    boxShadow: "0 10px 28px rgba(234, 88, 12, 0.35)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 14px 34px rgba(234, 88, 12, 0.5)",
                    },
                  }}
                >
                  Design Your Internal System
                </Button>
              </Link>

              <Link href="/solutions" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#18181B",
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1.5, sm: 1.6 },
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    border: "1px solid rgba(24, 24, 27, 0.18)",
                    bgcolor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(8px)",
                    "&:hover": {
                      bgcolor: "#FAF8F5",
                      borderColor: "rgba(24, 24, 27, 0.35)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  All 4 Solutions
                </Button>
              </Link>
            </Box>

            {/* Quick Telemetry */}
            <Grid
              container
              spacing={2}
              sx={{
                p: 2.5,
                borderRadius: "20px",
                bgcolor: "#FAF8F5",
                border: "1px solid rgba(228, 228, 231, 0.9)",
                textAlign: "center",
              }}
            >
              {telemetryStats.map((stat, idx) => (
                <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                  <Box sx={{ p: 1 }}>
                    <Typography sx={{ fontSize: { xs: "1.3rem", sm: "1.6rem" }, fontWeight: 700, color: "#18181B" }}>
                      {stat.value}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", mb: 0.5 }}>
                      {stat.label}
                    </Typography>
                    <Typography sx={{ fontSize: "0.75rem", color: "#71717A" }}>
                      {stat.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 2. When Generic Off-The-Shelf SaaS Fails */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 0.6,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  mb: 2.5,
                }}
              >
                <StorageOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#EA580C",
                  }}
                >
                  ENGINEERED VS GENERIC
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.6rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  mb: 2.5,
                }}
              >
                Why generic SaaS rarely solves custom operational friction.
              </Typography>
              <Typography sx={{ color: "#52525B", lineHeight: 1.8, mb: 3 }}>
                Commercial SaaS tools are built to satisfy 10,000 generic companies at once. They force your team to adjust
                your real-world processes to match their rigid data structures.
              </Typography>
              <Typography sx={{ color: "#52525B", lineHeight: 1.8, mb: 4 }}>
                A custom internal tool from Aetibar is designed backwards from your daily operational reality: your exact
                status stages, your specific customer tiers, and your team&apos;s physical constraints.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                  "Zero per-user monthly license taxes that penalize team growth",
                  "Built for your exact terminology, statuses, and handoff rules",
                  "Integrates directly with your existing website, warehouse, or accounting APIs",
                  "Secure PostgreSQL database with fine-grained role permissions and full audit logs",
                ].map((item, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <CheckCircleOutlinedIcon sx={{ color: "#EA580C", fontSize: 20 }} />
                    <Typography sx={{ fontSize: "0.95rem", color: "#18181B", fontWeight: 600 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                sx={{
                  p: { xs: 4, sm: 5 },
                  borderRadius: "24px",
                  bgcolor: "#18181B",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "-20%",
                    right: "-20%",
                    width: "300px",
                    height: "300px",
                    background: "radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                  }}
                />

                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#FB923C",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      mb: 1.5,
                    }}
                  >
                    Real Application &bull; Logix Driver App &amp; Dispatch Tower
                  </Typography>

                  <Typography sx={{ fontSize: "1.5rem", fontWeight: 600, color: "#FFFFFF", mb: 2 }}>
                    Replaced 3 hours of daily phone check-ins with digital sign-offs
                  </Typography>

                  <Typography sx={{ fontSize: "0.95rem", color: "#A1A1AA", lineHeight: 1.75, mb: 4 }}>
                    For an interstate logistics firm, we built an offline-first mobile driver application paired with a
                    centralized dispatcher console. It completely eliminated lost paper delivery receipts, prevented
                    scheduling conflicts, and gave managers real-time fleet visibility.
                  </Typography>

                  <Link href="/portfolio" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                        color: "#FFFFFF",
                        px: 3.5,
                        py: 1.35,
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        borderRadius: "9999px",
                      }}
                    >
                      View Case Study
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. Systems We Frequently Engineer */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FAF8F5", borderTop: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                MODULAR CAPABILITIES
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Systems We Frequently Build
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Engineered with clean React/Next.js interfaces, resilient PostgreSQL databases, and offline-capable mobile views.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {toolTypes.map((item, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "20px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#EA580C",
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 30px rgba(24, 24, 27, 0.05)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      bgcolor: "rgba(249, 115, 22, 0.08)",
                      border: "1px solid rgba(249, 115, 22, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontSize: "1.2rem", fontWeight: 700, color: "#18181B", mb: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. Flagship CTA */}
      <SolutionsCta
        badge="OPERATIONAL BACKBONE"
        headline="Ready to replace fragile spreadsheets with a custom system?"
        description="Book a 30-minute operational workflow audit. We will inspect your current team handoffs and map out a single centralized system."
        primaryButtonText="Schedule Architecture Diagnostic"
        secondaryButtonText="All Solution Domains"
        primaryLink="/contact"
        secondaryLink="/solutions"
      />
    </main>
  );
}
