"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Chip,
  Alert,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const improvementOptions = [
  "Lead Intake & Multi-Channel Inquiries",
  "Internal Operations & Task Tracking",
  "Customer Journey & Business Website",
  "Repetitive Data Entry & Automations",
  "Quote & Estimate Generation",
  "Other Workflow Friction",
];

const currentManagementOptions = [
  "WhatsApp & Direct Phone Calls",
  "Shared Spreadsheets (Excel / Google Sheets)",
  "Scattered Email Inboxes",
  "Multiple Disconnected SaaS Apps",
  "Pen, Paper & Clipboards",
  "Existing Custom Software",
];

export default function ContactDiagnosticForm() {
  const [selectedImprovement, setSelectedImprovement] = useState<string[]>([]);
  const [selectedManagement, setSelectedManagement] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [website, setWebsite] = useState("");
  const [details, setDetails] = useState("");
  const [currentTools, setCurrentTools] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleImprovement = (opt: string) => {
    setSelectedImprovement((prev) =>
      prev.includes(opt) ? prev.filter((i) => i !== opt) : [...prev, opt]
    );
  };

  const toggleManagement = (opt: string) => {
    setSelectedManagement((prev) =>
      prev.includes(opt) ? prev.filter((i) => i !== opt) : [...prev, opt]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 14 }, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, lg: 8 }}>
          {/* Left: The Diagnostic Form */}
          <Grid size={{ xs: 12, lg: 7.5 }}>
            <Box
              sx={{
                bgcolor: "#FAF8F5",
                borderRadius: "24px",
                p: { xs: 3.5, sm: 5 },
                border: "1px solid rgba(249, 115, 22, 0.25)",
                boxShadow: "0 12px 40px rgba(24, 24, 27, 0.04)",
              }}
            >
              {submitted ? (
                <Box sx={{ py: 6, textAlign: "center" }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      bgcolor: "rgba(234, 88, 12, 0.1)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    <CheckCircleOutlinedIcon sx={{ color: "#EA580C", fontSize: 36 }} />
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: "1.75rem", fontWeight: 700, color: "#18181B", mb: 1.5 }}>
                    Diagnostic Received.
                  </Typography>
                  <Typography sx={{ color: "#52525B", maxWidth: 480, mx: "auto", mb: 4, lineHeight: 1.7 }}>
                    An engineer will review your inputs and follow up at <strong>{email}</strong> within 1 business day with targeted questions or next steps.
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => setSubmitted(false)}
                    sx={{
                      color: "#18181B",
                      borderColor: "rgba(24, 24, 27, 0.2)",
                      borderRadius: "9999px",
                    }}
                  >
                    Submit Another Inquiry
                  </Button>
                </Box>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "1.5rem", sm: "1.85rem" },
                      fontWeight: 700,
                      color: "#18181B",
                      letterSpacing: "-0.02em",
                      mb: 1,
                    }}
                  >
                    Beginning the Business Discussion
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem", color: "#71717A", mb: 4, lineHeight: 1.6 }}>
                    Fill in what you can. The more context you provide about your daily workflow, the more useful our initial response will be.
                  </Typography>

                  {/* Section 1: Who You Are */}
                  <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "#EA580C", textTransform: "uppercase", letterSpacing: "0.06em", mb: 2 }}>
                    01 &bull; About Your Business
                  </Typography>

                  <Grid container spacing={2.5} sx={{ mb: 4 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        required
                        fullWidth
                        label="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="outlined"
                        size="medium"
                        sx={{ bgcolor: "#FFFFFF", borderRadius: "10px" }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        required
                        fullWidth
                        label="Business / Organization Name"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        variant="outlined"
                        size="medium"
                        sx={{ bgcolor: "#FFFFFF", borderRadius: "10px" }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Website or Social Profile (Optional)"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://yourcompany.com"
                        variant="outlined"
                        size="medium"
                        sx={{ bgcolor: "#FFFFFF", borderRadius: "10px" }}
                      />
                    </Grid>
                  </Grid>

                  {/* Section 2: What are you trying to improve? */}
                  <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "#EA580C", textTransform: "uppercase", letterSpacing: "0.06em", mb: 1.5 }}>
                    02 &bull; What are you trying to improve?
                  </Typography>
                  <Typography sx={{ fontSize: "0.825rem", color: "#71717A", mb: 2 }}>
                    Select the key operational areas where friction or delays occur:
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                    {improvementOptions.map((opt) => {
                      const selected = selectedImprovement.includes(opt);
                      return (
                        <Chip
                          key={opt}
                          label={opt}
                          onClick={() => toggleImprovement(opt)}
                          clickable
                          sx={{
                            bgcolor: selected ? "#18181B" : "#FFFFFF",
                            color: selected ? "#FB923C" : "#52525B",
                            fontWeight: 600,
                            fontSize: "0.8rem",
                            border: "1px solid",
                            borderColor: selected ? "#EA580C" : "rgba(228, 228, 231, 0.9)",
                            "&:hover": {
                              borderColor: "#EA580C",
                            },
                          }}
                        />
                      );
                    })}
                  </Box>

                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Briefly describe what is currently slowing down work or confusing customers"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    sx={{ bgcolor: "#FFFFFF", mb: 4, borderRadius: "10px" }}
                  />

                  {/* Section 3: How do you currently manage this? */}
                  <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "#EA580C", textTransform: "uppercase", letterSpacing: "0.06em", mb: 1.5 }}>
                    03 &bull; How do you currently manage this?
                  </Typography>
                  <Typography sx={{ fontSize: "0.825rem", color: "#71717A", mb: 2 }}>
                    Where does this information live today?
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                    {currentManagementOptions.map((opt) => {
                      const selected = selectedManagement.includes(opt);
                      return (
                        <Chip
                          key={opt}
                          label={opt}
                          onClick={() => toggleManagement(opt)}
                          clickable
                          sx={{
                            bgcolor: selected ? "#18181B" : "#FFFFFF",
                            color: selected ? "#FB923C" : "#52525B",
                            fontWeight: 600,
                            fontSize: "0.8rem",
                            border: "1px solid",
                            borderColor: selected ? "#EA580C" : "rgba(228, 228, 231, 0.9)",
                            "&:hover": {
                              borderColor: "#EA580C",
                            },
                          }}
                        />
                      );
                    })}
                  </Box>

                  <TextField
                    fullWidth
                    label="What specific tools or software do you currently use? (Optional)"
                    placeholder="e.g. Google Sheets, Trello, WhatsApp Business, QuickBooks"
                    value={currentTools}
                    onChange={(e) => setCurrentTools(e.target.value)}
                    sx={{ bgcolor: "#FFFFFF", mb: 4, borderRadius: "10px" }}
                  />

                  {/* Section 4: Contact Information */}
                  <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "#EA580C", textTransform: "uppercase", letterSpacing: "0.06em", mb: 2 }}>
                    04 &bull; Your Direct Contact
                  </Typography>

                  <Grid container spacing={2.5} sx={{ mb: 4 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        required
                        fullWidth
                        type="email"
                        label="Work Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        size="medium"
                        sx={{ bgcolor: "#FFFFFF", borderRadius: "10px" }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Phone Number / WhatsApp (Optional)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        variant="outlined"
                        size="medium"
                        sx={{ bgcolor: "#FFFFFF", borderRadius: "10px" }}
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                      color: "#FFFFFF",
                      px: 4.5,
                      py: 1.6,
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      borderRadius: "9999px",
                      boxShadow: "0 10px 28px rgba(234, 88, 12, 0.35)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Send Context to Senior Engineers
                  </Button>
                </form>
              )}
            </Box>
          </Grid>

          {/* Right: Direct Studio Context */}
          <Grid size={{ xs: 12, lg: 4.5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {/* How We Handle Discussions */}
              <Box
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                }}
              >
                <Typography sx={{ fontSize: "1.15rem", fontWeight: 700, color: "#18181B", mb: 2 }}>
                  What happens next?
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {[
                    "An engineer reviews your operational workflow and current tools.",
                    "We formulate 2 to 3 targeted questions to clarify your bottleneck.",
                    "We schedule a 30-minute diagnostic discussion—no sales pressure, just system architecture.",
                    "If we cannot genuinely solve your problem, we will tell you directly.",
                  ].map((step, idx) => (
                    <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}>
                      <CheckCircleOutlinedIcon sx={{ color: "#EA580C", fontSize: 18, mt: 0.2 }} />
                      <Typography sx={{ fontSize: "0.85rem", color: "#52525B", lineHeight: 1.6 }}>
                        {step}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Direct Details Card */}
              <Box
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                }}
              >
                <Typography sx={{ fontSize: "1.15rem", fontWeight: 700, color: "#18181B", mb: 2.5 }}>
                  Direct Studio Details
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <EmailOutlinedIcon sx={{ color: "#EA580C", fontSize: 22, mt: 0.2 }} />
                    <Box>
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase" }}>
                        Direct Email
                      </Typography>
                      <Typography
                        component="a"
                        href="mailto:hello.aetibar@gmail.com"
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "#18181B",
                          textDecoration: "none",
                          "&:hover": { color: "#EA580C" },
                        }}
                      >
                        hello.aetibar@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <LocationOnOutlinedIcon sx={{ color: "#EA580C", fontSize: 22, mt: 0.2 }} />
                    <Box>
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase" }}>
                        Studio Headquarters
                      </Typography>
                      <Typography sx={{ fontSize: "0.9rem", color: "#18181B", fontWeight: 600 }}>
                        Udaipur, Rajasthan, India
                      </Typography>
                      <Typography sx={{ fontSize: "0.8rem", color: "#71717A" }}>
                        Serving clients across India &amp; internationally
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <AccessTimeOutlinedIcon sx={{ color: "#EA580C", fontSize: 22, mt: 0.2 }} />
                    <Box>
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase" }}>
                        Response Time
                      </Typography>
                      <Typography sx={{ fontSize: "0.9rem", color: "#18181B", fontWeight: 600 }}>
                        Within 1 business day
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
