"use client";
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BoltIcon from "@mui/icons-material/Bolt";
import Link from "next/link";

interface InteractiveScopeEstimatorProps {
  serviceTitle: string;
  serviceSlug: string;
}

const scopeOptions = [
  { id: "new-build", label: "New Project From Scratch", defaultWeeks: "6-8 Weeks" },
  { id: "redesign", label: "Full Redesign & Re-platform", defaultWeeks: "4-6 Weeks" },
  { id: "audit-opt", label: "Performance & Code Optimization", defaultWeeks: "2-4 Weeks" },
  { id: "enterprise", label: "Scalable Custom Platform", defaultWeeks: "8-12 Weeks" },
];

const focusOptions = [
  { id: "speed", label: "Sub-Second Speed & SEO", badge: "Core Web Vitals 100/100" },
  { id: "conversion", label: "High-Converting UI/UX", badge: "Optimized Conversion Funnel" },
  { id: "custom-api", label: "Complex APIs & Automations", badge: "Resilient Microservices" },
];

const timelineOptions = [
  { id: "fast", label: "Fast-Track Sprint", duration: "4-6 Weeks" },
  { id: "standard", label: "Standard Sprint", duration: "8-10 Weeks" },
  { id: "flexible", label: "Ongoing Dedicated Team", duration: "Continuous Partnership" },
];

export default function InteractiveScopeEstimator({
  serviceTitle,
  serviceSlug,
}: InteractiveScopeEstimatorProps) {
  const [selectedScope, setSelectedScope] = useState(scopeOptions[0].id);
  const [selectedFocus, setSelectedFocus] = useState(focusOptions[0].id);
  const [selectedTimeline, setSelectedTimeline] = useState(timelineOptions[0].id);

  const activeScopeObj = scopeOptions.find((s) => s.id === selectedScope) || scopeOptions[0];
  const activeFocusObj = focusOptions.find((f) => f.id === selectedFocus) || focusOptions[0];
  const activeTimelineObj = timelineOptions.find((t) => t.id === selectedTimeline) || timelineOptions[0];

  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
        p: { xs: 4, sm: 5, md: 6 },
        borderRadius: "16px",
        border: "1px solid rgba(17, 18, 21, 0.08)",
        boxShadow: "0 16px 40px rgba(17, 18, 21, 0.04)",
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 5, maxWidth: "700px" }}>
        <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 1.5 }}>
          <BoltIcon sx={{ color: "#0E7490", fontSize: 20 }} />
          <Typography
            variant="caption"
            sx={{
              color: "#0E7490",
              fontWeight: 700,
              letterSpacing: "0.12em",
            }}
          >
            INTERACTIVE SCOPE &amp; TIMELINE ESTIMATOR
          </Typography>
        </Box>
        <Typography
          variant="h3"
          sx={{
            color: "#0E172A",
            fontSize: { xs: "1.6rem", sm: "2rem", md: "2.3rem" },
            fontWeight: 800,
            letterSpacing: "-0.025em",
            mb: 1.5,
          }}
        >
          Plan Your {serviceTitle} Scope
        </Typography>
        <Typography variant="body1" sx={{ color: "#4A4D57", lineHeight: 1.7, fontSize: "0.98rem" }}>
          Select your project type and requirements below to see recommended sprint structures,
          estimated delivery timelines, and dedicated practitioner allocations.
        </Typography>
      </Box>

      {/* Interactive Controls & Live Blueprint */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1.3fr 1fr" },
          gap: { xs: 5, lg: 6 },
          alignItems: "stretch",
        }}
      >
        {/* Left Side: Selectors */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {/* Step 1: Project Scope */}
          <Box>
            <Typography
              sx={{
                color: "#0E172A",
                fontWeight: 700,
                fontSize: "0.95rem",
                mb: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  bgcolor: "#0E7490",
                  color: "#FFFFFF",
                  fontSize: "0.72rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                1
              </Box>
              Select Project Type
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 1.5 }}>
              {scopeOptions.map((opt) => {
                const isSelected = selectedScope === opt.id;
                return (
                  <Box
                    key={opt.id}
                    component="button"
                    onClick={() => setSelectedScope(opt.id)}
                    sx={{
                      p: 2,
                      textAlign: "left",
                      borderRadius: "8px",
                      border: "1px solid",
                      borderColor: isSelected ? "#0E7490" : "rgba(17, 18, 21, 0.1)",
                      bgcolor: isSelected ? "rgba(14, 116, 144, 0.05)" : "#FAF9F5",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "#0E7490",
                        bgcolor: isSelected ? "rgba(14, 116, 144, 0.08)" : "#FFFFFF",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: isSelected ? "#0E7490" : "#0E172A",
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {opt.label}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Step 2: Primary Focus */}
          <Box>
            <Typography
              sx={{
                color: "#0E172A",
                fontWeight: 700,
                fontSize: "0.95rem",
                mb: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  bgcolor: "#0E7490",
                  color: "#FFFFFF",
                  fontSize: "0.72rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                2
              </Box>
              Primary Technical Focus
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 1.5 }}>
              {focusOptions.map((opt) => {
                const isSelected = selectedFocus === opt.id;
                return (
                  <Box
                    key={opt.id}
                    component="button"
                    onClick={() => setSelectedFocus(opt.id)}
                    sx={{
                      p: 2,
                      textAlign: "left",
                      borderRadius: "8px",
                      border: "1px solid",
                      borderColor: isSelected ? "#0E7490" : "rgba(17, 18, 21, 0.1)",
                      bgcolor: isSelected ? "rgba(14, 116, 144, 0.05)" : "#FAF9F5",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "#0E7490",
                        bgcolor: isSelected ? "rgba(14, 116, 144, 0.08)" : "#FFFFFF",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: isSelected ? "#0E7490" : "#0E172A",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {opt.label}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Step 3: Target Timeline */}
          <Box>
            <Typography
              sx={{
                color: "#0E172A",
                fontWeight: 700,
                fontSize: "0.95rem",
                mb: 1.5,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  bgcolor: "#0E7490",
                  color: "#FFFFFF",
                  fontSize: "0.72rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                3
              </Box>
              Deployment Velocity
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 1.5 }}>
              {timelineOptions.map((opt) => {
                const isSelected = selectedTimeline === opt.id;
                return (
                  <Box
                    key={opt.id}
                    component="button"
                    onClick={() => setSelectedTimeline(opt.id)}
                    sx={{
                      p: 2,
                      textAlign: "left",
                      borderRadius: "8px",
                      border: "1px solid",
                      borderColor: isSelected ? "#0E7490" : "rgba(17, 18, 21, 0.1)",
                      bgcolor: isSelected ? "rgba(14, 116, 144, 0.05)" : "#FAF9F5",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "#0E7490",
                        bgcolor: isSelected ? "rgba(14, 116, 144, 0.08)" : "#FFFFFF",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: isSelected ? "#0E7490" : "#0E172A",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                      }}
                    >
                      {opt.label}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        {/* Right Side: Live Project Blueprint Card */}
        <Box
          sx={{
            bgcolor: "#FAF9F5",
            p: { xs: 3.5, sm: 4 },
            borderRadius: "12px",
            border: "1px solid rgba(14, 116, 144, 0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: "#0E7490",
                fontWeight: 800,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                display: "block",
                mb: 1.5,
              }}
            >
              ESTIMATED PROJECT BLUEPRINT
            </Typography>

            <Typography
              sx={{
                color: "#0E172A",
                fontSize: "1.3rem",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                mb: 2.5,
              }}
            >
              {activeScopeObj.label}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3.5 }}>
              <Box sx={{ pb: 1.5, borderBottom: "1px solid rgba(17, 18, 21, 0.06)" }}>
                <Typography variant="caption" sx={{ color: "#5E6068", fontWeight: 600 }}>
                  ESTIMATED DELIVERY TIMELINE
                </Typography>
                <Typography sx={{ color: "#0E172A", fontWeight: 700, fontSize: "1.05rem" }}>
                  {activeTimelineObj.duration}
                </Typography>
              </Box>

              <Box sx={{ pb: 1.5, borderBottom: "1px solid rgba(17, 18, 21, 0.06)" }}>
                <Typography variant="caption" sx={{ color: "#5E6068", fontWeight: 600 }}>
                  TECHNICAL PILLAR &amp; FOCUS
                </Typography>
                <Typography sx={{ color: "#0E7490", fontWeight: 700, fontSize: "0.95rem" }}>
                  {activeFocusObj.badge}
                </Typography>
              </Box>

              <Box sx={{ pb: 1.5, borderBottom: "1px solid rgba(17, 18, 21, 0.06)" }}>
                <Typography variant="caption" sx={{ color: "#5E6068", fontWeight: 600 }}>
                  DEDICATED PRACTITIONERS
                </Typography>
                <Typography sx={{ color: "#0E172A", fontWeight: 600, fontSize: "0.9rem" }}>
                  Direct senior engineer + dedicated UI/UX product designer
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <CheckCircleIcon sx={{ color: "#0E7490", fontSize: 18 }} />
              <Typography sx={{ color: "#2C2E35", fontWeight: 600, fontSize: "0.85rem" }}>
                100% intellectual property &amp; code ownership
              </Typography>
            </Box>
          </Box>

          <Button
            component={Link}
            href={`/contact?service=${serviceSlug}&scope=${selectedScope}&focus=${selectedFocus}`}
            variant="contained"
            fullWidth
            endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
            sx={{
              bgcolor: "#0E172A",
              color: "#FFFFFF",
              py: 1.5,
              fontSize: "0.92rem",
              fontWeight: 700,
              borderRadius: "6px",
              boxShadow: "0 6px 20px rgba(14, 23, 42, 0.12)",
              "&:hover": {
                bgcolor: "#1E293B",
                transform: "translateY(-2px)",
              },
            }}
          >
            Discuss This Scope With Our Team
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
