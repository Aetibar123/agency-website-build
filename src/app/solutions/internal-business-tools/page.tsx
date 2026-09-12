import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography, Grid, Chip, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

export const metadata: Metadata = {
  title: "Internal Business Tools | Custom Dashboards & Operations Systems",
  description:
    "We build custom operational dashboards, field service dispatch applications, and order workflows that fit how your team actually works, replacing fragile spreadsheets.",
  alternates: {
    canonical: "https://www.aetibar.in/solutions/internal-business-tools",
  },
};

const toolTypes = [
  {
    title: "Operations Dashboards",
    desc: "Single-pane-of-glass consoles tracking order statuses, project bottlenecks, active jobs, and daily staff assignments in real time.",
    icon: <DashboardCustomizeOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
  },
  {
    title: "Service & Task Management",
    desc: "Purpose-built job tracking with role permissions — letting dispatchers assign work, technicians update progress, and managers audit completion.",
    icon: <FactCheckOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
  },
  {
    title: "Scheduling & Dispatch Systems",
    desc: "Drag-and-drop calendar dispatch interfaces with mobile field views, digital sign-offs, and automated route notifications.",
    icon: <CalendarMonthOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
  },
  {
    title: "Quotation & Invoicing Engines",
    desc: "Margin-aware calculation tools that store dynamic cost tables and generate itemized, branded PDF proposals and invoices with a single click.",
    icon: <ReceiptLongOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
  },
  {
    title: "Custom Admin & Role Portals",
    desc: "Secure web portals tailored to internal departments, replacing shared spreadsheets with audited, role-restricted access.",
    icon: <AdminPanelSettingsOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
  },
];

export default function InternalBusinessToolsPage() {
  return (
    <main>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 16, md: 22 },
          pb: { xs: 10, md: 14 },
          bgcolor: "#FAF9F5",
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 860, mx: "auto", textAlign: "center" }}>
            <Chip
              label="Solution Area &bull; Operational Infrastructure"
              size="small"
              sx={{
                bgcolor: "rgba(14, 116, 144, 0.08)",
                color: "#0E7490",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                borderRadius: "6px",
                mb: 3,
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" },
                fontWeight: 600,
                color: "#0E172A",
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
                mb: 3,
              }}
            >
              Custom tools built around how your team actually operates.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#475569",
                lineHeight: 1.8,
                maxWidth: 720,
                mx: "auto",
                mb: 5,
              }}
            >
              When your core business runs on 15 shared spreadsheets, dropped tasks and double-bookings become inevitable. We engineer custom operational dashboards, dispatch apps, and quotation engines that give your team total clarity.
            </Typography>

            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />
                }
              sx={{
                bgcolor: "#0E172A",
                color: "#FFFFFF",
                px: 4,
                py: 1.6,
                fontWeight: 700,
                fontSize: "0.95rem",
                borderRadius: "8px",
                boxShadow: "none",
                "&:hover": { bgcolor: "#1E293B" },
              }}
            >
              Design Your Internal System
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* When Off-the-Shelf Fails */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.85rem", sm: "2.4rem" },
                  fontWeight: 600,
                  color: "#0E172A",
                  letterSpacing: "-0.03em",
                  mb: 2.5,
                }}
              >
                Why generic SaaS rarely solves custom operational friction.
              </Typography>
              <Typography sx={{ color: "#475569", lineHeight: 1.8, mb: 3 }}>
                Commercial SaaS tools are built to satisfy 10,000 generic companies at once. They force your team to adjust your real-world processes to match their rigid data structures.
              </Typography>
              <Typography sx={{ color: "#475569", lineHeight: 1.8, mb: 4 }}>
                A custom internal tool from Aetibar is designed backwards from your daily operational reality: your exact status stages, your specific customer tiers, and your team&apos;s physical constraints.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                  "Zero per-user monthly license taxes that penalize team growth",
                  "Built for your exact terminology, statuses, and handoff rules",
                  "Integrates directly with your existing website, warehouse, or accounting APIs",
                  "Secure database with fine-grained role permissions and full audit logs",
                ].map((item, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                    <CheckCircleOutlinedIcon sx={{ color: "#0E7490", fontSize: 18 }} />
                    <Typography sx={{ fontSize: "0.9rem", color: "#334155", fontWeight: 600 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 5 },
                  borderRadius: "16px",
                  bgcolor: "#FAF9F5",
                  border: "1px solid rgba(14, 116, 144, 0.2)",
                  boxShadow: "0 16px 40px rgba(14, 23, 42, 0.04)",
                }}
              >
                <Typography sx={{ fontSize: "1.25rem", fontWeight: 800, color: "#0E172A", mb: 2 }}>
                  Real Application: Logix Driver App & Dispatch Tower
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7, mb: 3 }}>
                  For an interstate logistics firm, we built an offline-first mobile driver application paired with a centralized dispatcher console. It completely replaced 3 hours of daily phone check-ins and gave the company instant digital proof-of-delivery upon completion.
                </Typography>
                <Link href="/work" style={{ textDecoration: "none" }}>
              <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />
                }
                  sx={{
                    color: "#0E172A",
                    borderColor: "rgba(14, 23, 42, 0.2)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    borderRadius: "6px",
                  }}
                >
                  View Case Study
              </Button>
            </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Systems We Engineer */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FAF9F5", borderTop: "1px solid rgba(17, 18, 21, 0.06)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 780, mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem" },
                fontWeight: 600,
                color: "#0E172A",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Systems We Frequently Build
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.75 }}>
              Engineered with clean React/Next.js interfaces, resilient databases, and intuitive mobile views.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {toolTypes.map((item, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "14px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(17, 18, 21, 0.08)",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      bgcolor: "rgba(14, 116, 144, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontSize: "1.15rem", fontWeight: 600, color: "#0E172A", mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.6 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
