import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography, Grid, Chip, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ViewKanbanOutlinedIcon from "@mui/icons-material/ViewKanbanOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";

export const metadata: Metadata = {
  title: "Customer & Lead Systems | Purpose-Built Inquiry & Follow-Up Workflows",
  description:
    "Not every business needs a bloated CRM. We engineer streamlined lead intake pipelines, custom customer portals, and automated follow-ups tailored to your exact sales workflow.",
  alternates: {
    canonical: "https://www.aetibar.in/solutions/customer-lead-systems",
  },
};

const practicalSystems = [
  {
    title: "Unified Multi-Channel Intake Pipelines",
    tagline: "One central queue for forms, emails & WhatsApp",
    icon: <HubOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
    desc: "Instead of leads scattering across sales reps' individual phones and emails, inquiries are ingested via webhooks into a single accountable triage queue with automated ownership assignment.",
  },
  {
    title: "Lightweight Sales Dashboards",
    tagline: "Stage visibility without 200 unnecessary CRM fields",
    icon: <ViewKanbanOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
    desc: "Traditional enterprise CRMs demand 20 minutes of data entry per lead. We design visual kanban pipelines tracking only the exact milestones your team needs: Qualified, Quoted, Pending Approval, Closed.",
  },
  {
    title: "Automated Follow-Up Sequences",
    tagline: "Never let a qualified quote go cold",
    icon: <NotificationsActiveOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
    desc: "When a proposal is delivered, automated reminder webhooks trigger courteous check-ins after 72 hours, prompting prospects to book a consultation or clarify questions without manual salesperson effort.",
  },
  {
    title: "Customer Self-Service Portals",
    tagline: "Give clients transparent tracking & file access",
    icon: <ContactSupportOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
    desc: "For recurring service clients, a secure web portal where they can view ongoing project milestones, review uploaded deliverables, and submit change requests cuts incoming support calls by 70%.",
  },
];

export default function CustomerLeadSystemsPage() {
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
              label="Solution Area &bull; Lead & Client Operations"
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
              Systems that turn scattered inquiries into structured relationships.
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
              When inquiries arrive across WhatsApp, emails, and phone calls, follow-ups slip through the cracks. We engineer lead pipelines, follow-up automations, and customer portals tailored to how you actually sell.
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
              Streamline Your Lead Pipeline
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* The Truth About CRMs */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFFFFF", borderBottom: "1px solid rgba(17, 18, 21, 0.06)" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              p: { xs: 3.5, sm: 5 },
              borderRadius: "16px",
              bgcolor: "#FAF9F5",
              border: "1px solid rgba(14, 116, 144, 0.2)",
            }}
          >
            <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "#0E7490", textTransform: "uppercase", letterSpacing: "0.06em", mb: 1 }}>
              Our Honest Perspective
            </Typography>
            <Typography variant="h3" sx={{ fontSize: { xs: "1.35rem", md: "1.6rem" }, fontWeight: 600, color: "#0E172A", mb: 2 }}>
              Not every business needs a complex, enterprise CRM.
            </Typography>
            <Typography sx={{ color: "#475569", lineHeight: 1.75, fontSize: "0.95rem" }}>
              Too many agencies convince small and mid-sized companies to pay thousands for Salesforce or HubSpot. Months later, sales reps abandon the platform because logging a single phone call requires 12 mandatory dropdown menus. The best lead system is the one your team actually enjoys using. Sometimes that&apos;s an integrated lightweight dashboard; sometimes it&apos;s an automated WhatsApp-to-email bridge. The right system depends entirely on your workflow.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Systems We Build */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FAF9F5" }}>
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
              Practical Lead Systems Built For Real Teams
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.75 }}>
              Engineered around high responsiveness, zero lost messages, and clear commercial visibility.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {practicalSystems.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <Box
                  sx={{
                    p: { xs: 3.5, sm: 4.5 },
                    borderRadius: "16px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(17, 18, 21, 0.08)",
                    height: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "10px",
                        bgcolor: "rgba(14, 116, 144, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "1.2rem", fontWeight: 600, color: "#0E172A" }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontSize: "0.8rem", color: "#0E7490", fontWeight: 700 }}>
                        {item.tagline}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7 }}>
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
