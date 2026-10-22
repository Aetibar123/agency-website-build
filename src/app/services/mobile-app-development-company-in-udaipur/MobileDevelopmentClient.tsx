"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { workProjects } from "../../../data/workData";
import HomeScrollProgress from "../../../components/home/HomeScrollProgress";

export default function MobileDevelopmentClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | false>(false);

  const heroHighlights = [
    {
      value: "Fixed",
      title: "Clear Upfront Pricing",
      desc: "No hidden surprises. We agree on deliverables, milestones, and price before any work starts.",
      icon: <VerifiedOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "< 1s",
      title: "Ultra-Fast on Phones",
      desc: "Pages load in a fraction of a second on smartphones so impatient customers never leave.",
      icon: <SpeedOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "100%",
      title: "Full Code Ownership",
      desc: "You own all code, domains, logins, and accounts completely with zero proprietary lock-in.",
      icon: <LockOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
    {
      value: "Direct",
      title: "Direct Inbound Leads",
      desc: "New inquiries land directly on your phone and email in seconds so you never miss a sale.",
      icon: <PhoneInTalkOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
    },
  ];

  const whoIsItFor = [
    {
      title: "Field Teams & Drivers",
      desc: "Technicians, inspectors, and drivers who need simple mobile tools to log work, capture photos, update job status, and collect signatures while working on-site.",
    },
    {
      title: "Retailers & Consumer Brands",
      desc: "Businesses looking to give customers a convenient way to browse products, place repeat orders, receive updates, and complete payments from their phones.",
    },
    {
      title: "Businesses Moving Beyond Paper & WhatsApp",
      desc: "Companies that rely on paper records, WhatsApp updates, or repeated phone calls and want a more organized way to collect, share, and manage information.",
    },
    {
      title: "Founders Launching an App Idea",
      desc: "Entrepreneurs who want to turn a mobile app idea into a working product for both iPhone and Android, with a development approach suited to their features and budget.",
    },
  ];

  const problemsAddressed = [
    {
      problem: "Your field team struggles to work when there is little or no mobile signal",
      howWeHelp:
        "For workflows that need offline access, we can build apps that store forms, photos, signatures, and other required information on the device and synchronize the data when an internet connection becomes available again.",
    },
    {
      problem: "You need an app for both iPhone and Android without maintaining completely separate products",
      howWeHelp:
        "We can use a suitable cross-platform development approach where the project requirements allow it, helping your business share the core application across iOS and Android while keeping the experience appropriate for each platform.",
    },
    {
      problem: "Paper records and scattered WhatsApp updates make it difficult to verify completed work",
      howWeHelp:
        "We can replace manual records with digital forms, photo capture, signatures, job-status updates, and centralized data so your office team has a clearer view of field activity.",
    },
    {
      problem: "Complicated mobile screens make apps difficult for field staff to use",
      howWeHelp:
        "We design mobile workflows around the tasks your team actually performs, using clear navigation, readable information, straightforward forms, and focused actions that make the app easier to use in real working conditions.",
    },
  ];

  const deliverables = [
    {
      title: "iPhone & Android Apps",
      desc: "Custom mobile applications designed for iOS and Android, with a consistent experience across supported devices.",
      items: [
        "Cross-platform development from a shared codebase where suitable for the project",
        "Touch-friendly navigation and focused mobile workflows",
        "Camera, GPS, notifications, and local device storage where required",
        "Performance optimization and testing across relevant devices and screen sizes",
      ],
    },
    {
      title: "Field Operations & Driver Mobile Tools",
      desc: "Practical mobile tools for delivery drivers, field technicians, warehouse workers, and other teams working away from the office.",
      items: [
        "Offline data capture and synchronization for workflows that need to work without an internet connection",
        "Digital signature collection and photo-based delivery or job verification",
        "Job status updates with location and timestamps where required",
        "Push notifications for dispatch updates, task assignments, and important alerts",
      ],
    },
    {
      title: "Customer-Facing & Self-Service Apps",
      desc: "Mobile apps that give customers a convenient way to browse, book, order, pay, and manage their interactions with your business.",
      items: [
        "Phone, email, or OTP-based authentication with profile management",
        "Product catalogs, appointment booking, ordering, and other self-service workflows",
        "Payment integration with supported providers and methods such as UPI and cards",
        "Order status, booking updates, and relevant push notifications",
      ],
    },
    {
      title: "Business System & CRM Integrations",
      desc: "Connect your mobile application with the business systems your team already uses so information can move between field staff, customers, and your office.",
      items: [
        "API-based integration with websites, CRMs, inventory systems, and other supported software",
        "Role-based access for different staff members and user types",
        "Automated notifications and workflow updates when defined actions are completed",
        "Local data handling and synchronization logic for workflows that need reliable offline operation",
      ],
    },
    {
      title: "App Store & Google Play Publishing",
      desc: "Support with preparing and submitting your application to the Apple App Store and Google Play, including the assets and information required for launch.",
      items: [
        "Guidance for setting up your official Apple and Google developer accounts",
        "App icons, screenshots, store listing content, and required submission information",
        "Test builds and beta testing through the relevant platform tools",
        "Submission support and assistance with addressing store review feedback where required",
      ],
    },
  ];

  const benefits = [
    {
      title: "Build for iPhone & Android More Efficiently",
      desc: "A suitable cross-platform approach can allow your core application to be developed and maintained across iOS and Android without managing completely separate codebases.",
    },
    {
      title: "Keep Field Work Moving Without Internet",
      desc: "For workflows that require offline support, the app can capture relevant information on the device and synchronize it when connectivity becomes available again.",
    },
    {
      title: "Keep Your Office & Field Teams Connected",
      desc: "Mobile updates can flow back to your central system, giving office teams a clearer view of job progress, customer activity, deliveries, and other field operations.",
    },
    {
      title: "Maintain Control of Your App",
      desc: "We can publish the application through your own Apple and Google developer accounts and provide the agreed project code and assets, helping your business retain control of its mobile product.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Requirements & Workflow Review",
      desc: "We understand your business, users, current processes, and the problems the app needs to solve, then define the key features, screens, and integrations required.",
    },
    {
      num: "02",
      title: "User Flow & Screen Design",
      desc: "We map the main user journeys and create clear mobile screen designs so you can review the experience and provide feedback before development begins.",
    },
    {
      num: "03",
      title: "App Development & Integration",
      desc: "We build the mobile application and connect the required backend services, APIs, databases, authentication, notifications, and device features such as camera or location.",
    },
    {
      num: "04",
      title: "Testing on Real Devices",
      desc: "We test the application across relevant iOS and Android devices and check important workflows such as connectivity changes, data synchronization, permissions, notifications, and device-specific behavior.",
    },
    {
      num: "05",
      title: "Store Submission & Handover",
      desc: "We prepare the required store assets, help submit the app to Apple and Google, address relevant review feedback, and provide the agreed project files and guidance for your team.",
    },
  ];

  const faqs = [
    {
      question: "How much does a mobile app development company in Udaipur charge?",
      answer:
        "Mobile app development costs depend on features, design, integrations, and backend complexity. Aetibar provides a project-specific quote after understanding your requirements.",
    },
    {
      question: "How long does it take to develop a custom mobile app?",
      answer:
        "Development time depends on the app's features, complexity, integrations, and testing requirements. Aetibar defines a realistic timeline after reviewing the project scope.",
    },
    {
      question: "Do you develop apps for both Android and iOS?",
      answer:
        "Yes, we can develop Android and iOS apps using cross-platform technologies such as React Native where suitable. The technology choice depends on your requirements, budget, and platform-specific features.",
    },
    {
      question: "What do I need before starting a mobile app development project?",
      answer:
        "You should have an idea of your target users, business goals, and essential app features. Aetibar can help define the functionality and technical requirements before development begins.",
    },
    {
      question: "Can a mobile app connect to my existing website or business software?",
      answer:
        "Yes, apps can integrate with websites, CRMs, databases, payment gateways, and other business tools when suitable APIs or integration methods are available. Feasibility depends on your existing systems and requirements.",
    },
    {
      question: "Will my mobile app work without an internet connection?",
      answer:
        "Offline functionality can be developed for supported features, such as viewing saved information or filling out forms. Available features and data synchronization depend on the app's requirements.",
    },
    {
      question: "Can you publish my app on Google Play and the Apple App Store?",
      answer:
        "Yes, we can assist with app preparation, store submissions, and technical review requirements. Publication depends on meeting Google and Apple's policies and receiving their approval.",
    },
    {
      question: "Will I own my mobile app and its source code?",
      answer:
        "Ownership and source code handover are defined in the project agreement. We recommend keeping developer accounts and important project assets under your business's control.",
    },
    {
      question: "Do you provide mobile app maintenance after launch?",
      answer:
        "Post-launch support may include bug fixes, compatibility updates, security maintenance, and performance improvements. Maintenance scope and recurring costs are agreed upon before development begins.",
    },
    {
      question: "Can you add new features to my mobile app as my business grows?",
      answer:
        "Yes, existing apps can be extended with features such as payments, notifications, user roles, and reporting, subject to technical feasibility. The cost and development effort depend on the requested changes.",
    },
    {
      question: "Does Aetibar provide mobile app development services in Udaipur?",
      answer:
        "Aetibar offers mobile app development solutions tailored to business requirements, including app functionality, integrations, and platform selection. The recommended approach depends on your goals, users, and project scope.",
    },
  ];

  const relevantProjects = workProjects.filter((p) =>
    ["mobile-booking-app", "field-service-mobile-app"].includes(p.slug)
  );

  return (
    <Box sx={{ bgcolor: "#FFFFFF", color: "#183D35", minHeight: "100vh" }}>
      <HomeScrollProgress />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (LEFT-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 15, sm: 18, md: 21 },
          pb: { xs: 8, md: 12 },
          bgcolor: "#183D35",
          color: "#FFFFFF",
          borderBottom: "1px solid rgba(216, 229, 213, 0.12)",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          {/* Breadcrumb Navigation */}
          <Box sx={{ mb: 4, display: "flex", justifyContent: "flex-start" }}>
            <Link
              href="/services"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#D8E5D5",
                fontSize: "0.85rem",
                fontWeight: 600,
                padding: "6px 14px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(216, 229, 213, 0.2)",
                transition: "all 0.2s ease",
              }}
            >
              <ArrowBackIcon sx={{ fontSize: 16, color: "#D8E5D5" }} />
              <span>All Services</span>
            </Link>
          </Box>

          {/* Left-Aligned Hero Content */}
          <Box sx={{ maxWidth: "980px", mb: { xs: 6, md: 8 } }}>
            {/* Pill Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(61, 118, 93, 0.28)",
                border: "1px solid rgba(216, 229, 213, 0.25)",
                mb: 3,
              }}
            >
              <PhoneIphoneIcon sx={{ fontSize: 18, color: "#D8E5D5" }} />
              <Typography
                sx={{
                  color: "#D8E5D5",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                Custom Mobile App Development
              </Typography>
            </Box>

            {/* H1 Title with DM Serif Font */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.35rem" },
                fontWeight: 400,
                lineHeight: { xs: 1.15, md: 1.1 },
                letterSpacing: "-0.015em",
                color: "#FFFFFF",
                mb: 2.5,
              }}
            >
              App Development Company in Udaipur —{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                Custom Apps for iPhone &amp; Android
              </Box>
            </Typography>

            {/* Tagline with DM Serif Font */}
            <Typography
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.15rem", sm: "1.3rem", md: "1.45rem" },
                fontWeight: 400,
                color: "#D8E5D5",
                lineHeight: 1.5,
                mb: 2,
                maxWidth: "860px",
              }}
            >
              Practical iOS and Android apps designed to help your customers stay connected with your business and your teams work more efficiently on the go.
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                lineHeight: 1.75,
                color: "rgba(216, 229, 213, 0.85)",
                maxWidth: "760px",
                mb: 4,
              }}
            >
              As a best app development company in Udaipur, we build custom mobile applications around your business requirements—from customer-facing apps for services, bookings, and orders to internal tools for field teams, job management, and data collection. Where your workflow requires it, we can also support features such as offline data capture and synchronization.
            </Typography>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  bgcolor: "#3D765D",
                  color: "#FFFFFF",
                  px: { xs: 3, sm: 3.8 },
                  py: 1.4,
                  fontSize: "0.925rem",
                  fontWeight: 600,
                  borderRadius: "12px",
                  boxShadow: "none",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#D8E5D5",
                    color: "#183D35",
                  },
                }}
              >
                Get a Free Consultation
              </Button>

              <Button
                component="a"
                href="#deliverables"
                variant="outlined"
                sx={{
                  borderColor: "rgba(216, 229, 213, 0.35)",
                  bgcolor: "rgba(255, 255, 255, 0.04)",
                  color: "#FFFFFF",
                  px: { xs: 3, sm: 3.5 },
                  py: 1.4,
                  fontSize: "0.925rem",
                  fontWeight: 600,
                  borderRadius: "12px",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#D8E5D5",
                    bgcolor: "rgba(216, 229, 213, 0.1)",
                  },
                }}
              >
                What&apos;s Included
              </Button>
            </Box>
          </Box>

          {/* Hero Highlights Grid */}
          <Grid container spacing={2.5}>
            {heroHighlights.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "18px",
                    p: { xs: 3, sm: 3.5 },
                    border: "1px solid rgba(216, 229, 213, 0.15)",
                    backdropFilter: "blur(8px)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "rgba(216, 229, 213, 0.45)",
                      bgcolor: "rgba(255, 255, 255, 0.08)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 24px -8px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: "12px",
                          bgcolor: "rgba(216, 229, 213, 0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                          fontSize: "1.35rem",
                          color: "#D8E5D5",
                          fontWeight: 400,
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        fontSize: "1.15rem",
                        fontWeight: 400,
                        color: "#FFFFFF",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        lineHeight: 1.6,
                        color: "rgba(216, 229, 213, 0.8)",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 2. WHO BENEFITS MOST (CENTER-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="who-is-it-for"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: "780px",
              mb: { xs: 5, md: 6 },
              textAlign: "center",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.8,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "#D8E5D5",
                color: "#183D35",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2,
              }}
            >
              WHO BENEFITS MOST
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.55rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              Who Is This Service For?
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7, mx: "auto" }}>
              Built for businesses that want structured, dependable, and high-performing mobile solutions.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {whoIsItFor.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#F7F7F2",
                    borderRadius: "18px",
                    p: { xs: 3, sm: 3.5 },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#3D765D",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        fontSize: "1.2rem",
                        fontWeight: 400,
                        letterSpacing: "-0.015em",
                        color: "#183D35",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        color: "#52525B",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 3. CHALLENGES WE ADDRESS (LEFT-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="problems-addressed"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#F7F7F2",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "780px", mb: { xs: 5, md: 6 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.8,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "#D8E5D5",
                color: "#183D35",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2,
              }}
            >
              CHALLENGES WE ADDRESS
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.55rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              Problems We Address
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Eliminating offline data loss, dual-codebase maintenance headaches, and complicated workflows.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {problemsAddressed.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: "20px",
                    p: { xs: 3.5, sm: 4 },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#3D765D",
                      boxShadow: "0 10px 30px -10px rgba(24, 61, 53, 0.08)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2.5 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.5 }}>
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          bgcolor: "rgba(220, 38, 38, 0.1)",
                          color: "#DC2626",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          flexShrink: 0,
                          mt: 0.2,
                        }}
                      >
                        ✕
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                          fontSize: "1.15rem",
                          fontWeight: 400,
                          color: "#183D35",
                          lineHeight: 1.35,
                        }}
                      >
                        {item.problem}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      pt: 2.5,
                      borderTop: "1px solid rgba(24, 61, 53, 0.06)",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          bgcolor: "#D8E5D5",
                          color: "#183D35",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          mt: 0.2,
                        }}
                      >
                        <CheckIcon sx={{ fontSize: 14 }} />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          color: "#52525B",
                          lineHeight: 1.65,
                        }}
                      >
                        {item.howWeHelp}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 4. END-TO-END DELIVERABLES (CENTER-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="deliverables"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "960px" },
              mb: { xs: 5, md: 6 },
              textAlign: "center",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.8,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "#D8E5D5",
                color: "#183D35",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2,
              }}
            >
              END-TO-END DELIVERABLES
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.55rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              What You Get with Our App Development
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7, mx: "auto" }}>
              Concrete deliverables, store-ready builds, and complete operational clarity.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {deliverables.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#F7F7F2",
                    borderRadius: "20px",
                    p: { xs: 3, sm: 3.5 },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#3D765D",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        fontSize: "1.25rem",
                        fontWeight: 400,
                        color: "#183D35",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        color: "#52525B",
                        lineHeight: 1.6,
                        mb: 2.5,
                      }}
                    >
                      {item.desc}
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                      {item.items.map((sub, sIdx) => (
                        <Box
                          key={sIdx}
                          sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}
                        >
                          <CheckCircleOutlinedIcon
                            sx={{ fontSize: 16, color: "#3D765D", mt: 0.2, flexShrink: 0 }}
                          />
                          <Typography sx={{ fontSize: "0.825rem", color: "#52525B", lineHeight: 1.5 }}>
                            {sub}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 5. THE AETIBAR ADVANTAGE (LEFT-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="benefits"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#F7F7F2",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "780px", mb: { xs: 5, md: 6 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.8,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "#D8E5D5",
                color: "#183D35",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2,
              }}
            >
              THE AETIBAR ADVANTAGE
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.55rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              Why Businesses Choose Aetibar
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Cross-platform efficiency, reliable offline functionality, and full source code ownership.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {benefits.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: "18px",
                    p: { xs: 3, sm: 3.5 },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#3D765D",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        fontSize: "1.2rem",
                        fontWeight: 400,
                        letterSpacing: "-0.015em",
                        color: "#183D35",
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        color: "#52525B",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 6. OUR METHODOLOGY (CENTER-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="process"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: "780px",
              mb: { xs: 5, md: 6 },
              textAlign: "center",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.8,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "#D8E5D5",
                color: "#183D35",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2,
              }}
            >
              OUR METHODOLOGY
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.55rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              How We Take Your App from Concept to Launch
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7, mx: "auto" }}>
              A structured 5-step process ensuring total transparency and dependable delivery.
            </Typography>
          </Box>

          <Grid container spacing={2.5}>
            {processSteps.map((step, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#F7F7F2",
                    borderRadius: "18px",
                    p: { xs: 3, sm: 3.5 },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#3D765D",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                      fontSize: "2rem",
                      color: "#3D765D",
                      lineHeight: 1,
                      mb: 2,
                    }}
                  >
                    {step.num}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                      fontSize: "1.15rem",
                      fontWeight: 400,
                      color: "#183D35",
                      mb: 1,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "#52525B",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 7. PROVEN TRACK RECORD (LEFT-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      {relevantProjects.length > 0 && (
        <Box
          component="section"
          id="projects"
          sx={{
            py: { xs: 8, md: 11 },
            bgcolor: "#F7F7F2",
            borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ maxWidth: "780px", mb: { xs: 5, md: 6 } }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.8,
                  py: 0.5,
                  borderRadius: "9999px",
                  bgcolor: "#D8E5D5",
                  color: "#183D35",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                  mb: 2,
                }}
              >
                PROVEN TRACK RECORD
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                  fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.55rem" },
                  fontWeight: 400,
                  color: "#183D35",
                  lineHeight: 1.25,
                  letterSpacing: "-0.015em",
                  mb: 1.5,
                }}
              >
                Recent App Development Projects
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Explore how we helped brands build high-performing digital platforms.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {relevantProjects.map((project) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={project.slug}>
                  <Box
                    component={Link}
                    href={`/work/${project.slug}`}
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      borderRadius: "18px",
                      overflow: "hidden",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(24, 61, 53, 0.08)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "#3D765D",
                        boxShadow: "0 14px 28px -10px rgba(24, 61, 53, 0.12)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: 190,
                        width: "100%",
                        bgcolor: "#D8E5D5",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: "#3D765D",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            fontFamily: "monospace",
                            mb: 0.8,
                          }}
                        >
                          {project.clientType}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                            fontSize: "1.15rem",
                            fontWeight: 400,
                            letterSpacing: "-0.015em",
                            color: "#183D35",
                            lineHeight: 1.35,
                            mb: 1,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.85rem",
                            color: "#52525B",
                            lineHeight: 1.55,
                          }}
                        >
                          {project.summary}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}

      {/* ========================================================================= */}
      {/* 8. FREQUENTLY ASKED QUESTIONS (CENTER-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="faqs"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: "780px",
              mb: { xs: 5, md: 6 },
              textAlign: "center",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.8,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "#D8E5D5",
                color: "#183D35",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2,
              }}
            >
              FREQUENTLY ASKED QUESTIONS
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.55rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                mb: 1.5,
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7, mx: "auto" }}>
              Straightforward answers about process, platforms, store approvals, and timelines.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: "860px", mx: "auto" }}>
            {faqs.map((faq, idx) => (
              <Accordion
                key={idx}
                expanded={expandedFaq === idx}
                onChange={() => setExpandedFaq(expandedFaq === idx ? false : idx)}
                sx={{
                  bgcolor: "#F7F7F2",
                  borderRadius: "14px !important",
                  mb: 2,
                  border: "1px solid rgba(24, 61, 53, 0.08)",
                  boxShadow: "none",
                  "&:before": { display: "none" },
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#183D35" }} />}
                  sx={{
                    px: { xs: 2.5, sm: 3.5 },
                    py: 1,
                    "& .MuiAccordionSummary-content": { my: 1 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      fontWeight: 400,
                      color: "#183D35",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: { xs: 2.5, sm: 3.5 }, pt: 0, pb: 2.5 }}>
                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#52525B",
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 9. READY TO BUILD / CONVERSION CTA (LEFT-ALIGNED WITH DM SERIF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="cta"
        sx={{
          py: { xs: 9, md: 12 },
          bgcolor: "#183D35",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "860px" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.85rem", sm: "2.5rem", md: "3.2rem" },
                fontWeight: 400,
                lineHeight: { xs: 1.25, md: 1.18 },
                letterSpacing: "-0.015em",
                color: "#FFFFFF",
                mb: 2,
              }}
            >
              Ready to Build a Mobile App That{" "}
              <Box component="span" sx={{ color: "#D8E5D5", fontStyle: "italic" }}>
                Fits Your Business?
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.98rem", sm: "1.08rem" },
                lineHeight: 1.75,
                color: "#D8E5D5",
                mb: 4,
                maxWidth: "740px",
              }}
            >
              Tell us about your app idea, customer needs, or field workflow. We&apos;ll understand your requirements and discuss the right features, development approach, integrations, and a realistic implementation plan.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  bgcolor: "#3D765D",
                  color: "#FFFFFF",
                  px: 4,
                  py: 1.5,
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  borderRadius: "12px",
                  boxShadow: "none",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#D8E5D5",
                    color: "#183D35",
                  },
                }}
              >
                Get a Free Consultation
              </Button>

             
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
