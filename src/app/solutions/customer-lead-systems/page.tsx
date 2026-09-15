import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import SolutionsCta from "../../../components/solutions/SolutionsCta";

export const metadata: Metadata = {
  title: "Customer & Lead Systems | Purpose-Built Inquiry Pipelines | Aetibar",
  description:
    "Consolidate WhatsApp, web form, and email inquiries into a single queue. Automated follow-ups, lightweight pipeline dashboards, and zero dropped leads.",
  alternates: {
    canonical: "https://www.aetibar.in/solutions/customer-lead-systems",
  },
  openGraph: {
    title: "Customer & Lead Systems | Aetibar",
    description:
      "Turn scattered inquiries across web, email, and WhatsApp into accountable revenue pipelines with sub-45s response automations.",
    url: "https://www.aetibar.in/solutions/customer-lead-systems",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Customer & Lead Systems",
      },
    ],
  },
};

const practicalSystems = [
  {
    title: "Unified Multi-Channel Intake Pipelines",
    tagline: "One central queue for forms, emails & WhatsApp",
    icon: <HubOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    desc: "Instead of leads scattering across sales reps' individual phones and personal inboxes, inquiries are ingested via webhooks into a single accountable triage queue with automated ownership assignment and instant SLA tracking.",
  },
  {
    title: "Lightweight Sales Dashboards",
    tagline: "Stage visibility without 200 unnecessary CRM fields",
    icon: <ViewKanbanOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    desc: "Traditional enterprise CRMs demand 20 minutes of manual logging per lead. We build visual kanban pipelines tracking only the exact milestones your team needs: Qualified, Quoted, Pending Approval, Closed.",
  },
  {
    title: "Automated Follow-Up Sequences",
    tagline: "Never let a qualified quote go cold",
    icon: <NotificationsActiveOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    desc: "When a proposal is delivered, automated reminder webhooks trigger courteous check-ins after 72 hours, prompting prospects to book a consultation or clarify questions without manual salesperson effort.",
  },
  {
    title: "Customer Self-Service Portals",
    tagline: "Transparent milestone tracking & document exchange",
    icon: <ContactSupportOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    desc: "For recurring service clients, a secure web portal where they can view ongoing project milestones, review uploaded deliverables, and submit change requests cuts incoming support calls by 70%.",
  },
];

const telemetryMetrics = [
  { value: "< 45s", label: "Average Response SLA", desc: "Immediate automated customer touchpoint" },
  { value: "0%", label: "Dropped Lead Ratio", desc: "Unified queue prevents lost WhatsApp messages" },
  { value: "+38%", label: "Quote-to-Close Rate", desc: "Automated follow-ups keep proposals top-of-mind" },
  { value: "0 Tax", label: "Per-Seat Licensing Tax", desc: "You own the platform without per-user fees" },
];

export default function CustomerLeadSystemsPage() {
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
                SOLUTION DOMAIN 02 &bull; INQUIRY INFRASTRUCTURE
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
              Systems that turn scattered inquiries into{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                accountable revenue.
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
              When inquiries arrive across WhatsApp, emails, and phone calls, follow-ups slip through the cracks.
              We engineer custom lead intake pipelines, automated follow-up triggers, and dedicated customer portals
              tailored to how your team actually sells.
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
                  Streamline Your Lead Pipeline
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

            {/* Telemetry Strip */}
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
              {telemetryMetrics.map((stat, idx) => (
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

      {/* 2. Honest Perspective: The Truth About CRMs */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              p: { xs: 4, sm: 6 },
              borderRadius: "24px",
              bgcolor: "#FAF8F5",
              border: "1px solid rgba(249, 115, 22, 0.25)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                color: "#EA580C",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              <BoltOutlinedIcon sx={{ fontSize: 16 }} />
              Our Honest Perspective
            </Box>

            <Typography variant="h2" sx={{ fontSize: { xs: "1.6rem", md: "2.1rem" }, fontWeight: 600, color: "#18181B", mb: 2 }}>
              Not every business needs an expensive enterprise CRM.
            </Typography>

            <Typography sx={{ color: "#52525B", lineHeight: 1.8, fontSize: "1rem" }}>
              Too many agencies convince mid-sized businesses to pay $1,500/month for Salesforce or HubSpot. Months later,
              sales reps abandon the tool because logging a single customer call requires filling 14 mandatory dropdowns.
              The best lead system is the one your team actually enjoys using: an automated WhatsApp-to-email queue, an instant
              qualification webhook, and a clean 4-stage pipeline that ensures zero inquiries ever get dropped.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 3. Practical Systems We Build */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FAF8F5" }}>
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
                CUSTOM LEAD MODULES
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
              Practical Lead Systems Built For Real Teams
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Engineered around high responsiveness, zero lost messages, and clear commercial visibility.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {practicalSystems.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <Box
                  sx={{
                    p: { xs: 3.5, sm: 4.5 },
                    borderRadius: "20px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#EA580C",
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 30px rgba(24, 24, 27, 0.05)",
                    },
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}>
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
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#18181B" }}>
                          {item.title}
                        </Typography>
                        <Typography sx={{ fontSize: "0.8rem", color: "#EA580C", fontWeight: 700 }}>
                          {item.tagline}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.75 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. Flagship CTA */}
      <SolutionsCta
        badge="INQUIRY ACCELERATION"
        headline="Stop letting high-value inquiries slip through the cracks."
        description="Schedule a 30-minute inquiry flow audit. We will map where your leads currently get delayed and engineer an automated response queue."
        primaryButtonText="Schedule Architecture Diagnostic"
        secondaryButtonText="All Solution Domains"
        primaryLink="/contact"
        secondaryLink="/solutions"
      />
    </main>
  );
}
