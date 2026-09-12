"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from "@mui/icons-material/Language";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";

const solutionItems = [
  {
    title: "Digital Presence",
    desc: "Websites designed around customer discovery and action",
    path: "/solutions/business-websites",
    icon: <LanguageIcon sx={{ fontSize: 18, color: "#EA580C" }} />,
  },
  {
    title: "Customer & Lead Systems",
    desc: "Intake pipelines, customer portals, and follow-up flows",
    path: "/solutions/customer-lead-systems",
    icon: <HubOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />,
  },
  {
    title: "Internal Business Tools",
    desc: "Custom operational dashboards and workflow applications",
    path: "/solutions/internal-business-tools",
    icon: <DashboardCustomizeOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />,
  },
  {
    title: "AI & Automation",
    desc: "Practical workflow automation and data integrations",
    path: "/solutions/ai-automation",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsAnchor, setSolutionsAnchor] = useState<null | HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenSolutions = (event: React.MouseEvent<HTMLElement>) => {
    setSolutionsAnchor(event.currentTarget);
  };

  const handleCloseSolutions = () => {
    setSolutionsAnchor(null);
  };

  const isSolutionsActive = pathname.startsWith("/solutions");

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          right: 0,
          bgcolor: scrolled
            ? "rgba(255, 255, 255, 0.92)"
            : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid",
          borderColor: scrolled ? "rgba(226, 232, 240, 0.8)" : "transparent",
          transition: "all 0.25s ease-in-out",
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              height: { xs: 68, md: 80 },
              px: { xs: 1.5, sm: 2, md: 3 },
            }}
          >
            {/* Brand Logo */}
            <Typography
              component={Link}
              href="/"
              sx={{
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#0E172A",
                textDecoration: "none",
                fontSize: { xs: "1.25rem", md: "1.45rem" },
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
              }}
            >
              AETIBAR
              <Box
                component="span"
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  bgcolor: "#EA580C",
                  display: "inline-block",
                }}
              />
            </Typography>

            {/* Desktop Navigation Links */}
            <Box
              component="nav"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: { md: 3.5, lg: 4.5 },
              }}
            >
              {/* Solutions Dropdown Trigger */}
              <Box
                onMouseEnter={handleOpenSolutions}
                sx={{ position: "relative", display: "inline-block" }}
              >
                <Button
                  component={Link}
                  href="/solutions"
                  onClick={(e) => {
                    // allows click navigation to /solutions overview
                  }}
                  endIcon={
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: "1.1rem !important",
                        transition: "transform 0.2s",
                        transform: Boolean(solutionsAnchor) ? "rotate(180deg)" : "none",
                      }}
                    />
                  }
                  sx={{
                    color: isSolutionsActive ? "#0E172A" : "#525760",
                    fontWeight: isSolutionsActive ? 700 : 500,
                    fontSize: "0.9375rem",
                    textTransform: "none",
                    p: 0,
                    minWidth: "auto",
                    "&:hover": {
                      color: "#0E172A",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  Solutions
                </Button>

                <Menu
                  anchorEl={solutionsAnchor}
                  open={Boolean(solutionsAnchor)}
                  onClose={handleCloseSolutions}
                  slotProps={{
                    list: {
                      onMouseLeave: handleCloseSolutions,
                      sx: { p: 1.5, minWidth: 320 },
                    },
                    paper: {
                      elevation: 0,
                      sx: {
                        mt: 1.5,
                        borderRadius: "16px",
                        border: "1px solid rgba(226, 232, 240, 0.9)",
                        boxShadow: "0 16px 40px rgba(14, 23, 42, 0.08)",
                        bgcolor: "#FFFFFF",
                        overflow: "visible",
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "left", vertical: "top" }}
                  anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                >
                  <Box sx={{ px: 1.5, py: 1, mb: 0.5 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        color: "#EA580C",
                        textTransform: "uppercase",
                        fontSize: "0.7rem",
                      }}
                    >
                      Solution Areas
                    </Typography>
                  </Box>

                  {solutionItems.map((item) => (
                    <MenuItem
                      key={item.path}
                      component={Link}
                      href={item.path}
                      onClick={handleCloseSolutions}
                      sx={{
                        borderRadius: "8px",
                        py: 1.25,
                        px: 1.5,
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                        "&:hover": {
                          bgcolor: "rgba(234, 88, 12, 0.06)",
                        },
                      }}
                    >
                      <Box sx={{ mt: 0.3 }}>{item.icon}</Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            color: "#0E172A",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            fontSize: "0.75rem",
                            color: "#64748B",
                            display: "block",
                            lineHeight: 1.3,
                          }}
                        >
                          {item.desc}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}

                  <Divider sx={{ my: 1, borderColor: "rgba(17, 18, 21, 0.06)" }} />

                  <MenuItem
                    component={Link}
                    href="/solutions"
                    onClick={handleCloseSolutions}
                    sx={{
                      borderRadius: "8px",
                      py: 1,
                      px: 1.5,
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#EA580C",
                      fontWeight: 600,
                      fontSize: "0.825rem",
                    }}
                  >
                    <span>Overview: All Solution Areas</span>
                    <ArrowForwardIcon sx={{ fontSize: 14 }} />
                  </MenuItem>
                </Menu>
              </Box>

              {/* Core Nav Links */}
              {[
                { name: "How We Help", path: "/how-we-help" },
                { name: "How We Work", path: "/how-we-work" },
                { name: "Our Work", path: "/work" },
                { name: "Insights", path: "/blog" },
                { name: "About", path: "/about" },
              ].map((item) => {
                const isActive =
                  item.path === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.path);

                return (
                  <Typography
                    key={item.name}
                    component={Link}
                    href={item.path}
                    sx={{
                      color: isActive ? "#0E172A" : "#525760",
                      fontWeight: isActive ? 700 : 500,
                      fontSize: "0.9375rem",
                      textDecoration: "none",
                      position: "relative",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "#0E172A",
                      },
                      ...(isActive && {
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: -6,
                          left: 0,
                          width: "100%",
                          height: 2,
                          bgcolor: "#EA580C",
                          borderRadius: 1,
                        },
                      }),
                    }}
                  >
                    {item.name}
                  </Typography>
                );
              })}
            </Box>

            {/* Desktop CTA & Mobile Menu Toggle */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                  color: "#FFFFFF",
                  px: 3,
                  py: 1.1,
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  borderRadius: "9999px",
                  boxShadow: "0 4px 14px rgba(234, 88, 12, 0.28)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                    boxShadow: "0 6px 20px rgba(234, 88, 12, 0.4)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Let&apos;s Talk
              </Button>

              <IconButton
                aria-label="Toggle navigation menu"
                onClick={handleDrawerToggle}
                sx={{
                  display: { md: "none" },
                  color: "#0E172A",
                  p: 1,
                  border: "1px solid rgba(17, 18, 21, 0.1)",
                  borderRadius: 2,
                  bgcolor: "#FFFFFF",
                }}
              >
                <MenuIcon fontSize="small" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: 380 },
            bgcolor: "#FFFFFF",
            p: { xs: 3, sm: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pb: 3,
              borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#0E172A",
                fontSize: "1.25rem",
              }}
            >
              AETIBAR<Box component="span" sx={{ color: "#EA580C" }}>.</Box>
            </Typography>
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="Close navigation"
              sx={{
                color: "#0E172A",
                border: "1px solid rgba(17, 18, 21, 0.1)",
                borderRadius: "50%",
                p: 0.8,
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <List sx={{ pt: 3, display: "flex", flexDirection: "column", gap: 0.5 }}>
            <ListItem
              component={Link}
              href="/solutions"
              onClick={handleDrawerToggle}
              sx={{
                textDecoration: "none",
                px: 1,
                py: 1.25,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "1.15rem", fontWeight: 700, color: "#0E172A" }}>
                Solutions
              </Typography>
              <ArrowForwardIcon sx={{ fontSize: 16, color: "#94A3B8" }} />
            </ListItem>

            {/* Sub items for Solutions in mobile */}
            <Box sx={{ pl: 2, pr: 1, pb: 1, display: "flex", flexDirection: "column", gap: 0.8 }}>
              {solutionItems.map((sub) => (
                <Typography
                  key={sub.path}
                  component={Link}
                  href={sub.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    color: pathname === sub.path ? "#EA580C" : "#64748B",
                    fontWeight: pathname === sub.path ? 600 : 500,
                    py: 0.5,
                  }}
                >
                  &bull; {sub.title}
                </Typography>
              ))}
            </Box>

            <Divider sx={{ my: 1, borderColor: "rgba(17, 18, 21, 0.06)" }} />

            {[
              { name: "How We Help", path: "/how-we-help" },
              { name: "How We Work", path: "/how-we-work" },
              { name: "Our Work", path: "/work" },
              { name: "Insights", path: "/blog" },
              { name: "About", path: "/about" },
            ].map((item) => {
              const isActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);

              return (
                <ListItem
                  key={item.name}
                  component={Link}
                  href={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    textDecoration: "none",
                    px: 1,
                    py: 1.25,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid rgba(17, 18, 21, 0.04)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.15rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#EA580C" : "#0E172A",
                    }}
                  >
                    {item.name}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Box sx={{ pt: 3, borderTop: "1px solid rgba(17, 18, 21, 0.08)" }}>
          <Button
            component={Link}
            href="/contact"
            onClick={handleDrawerToggle}
            fullWidth
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              py: 1.5,
              fontSize: "0.95rem",
              fontWeight: 700,
              background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
              color: "#FFFFFF",
              borderRadius: "9999px",
              mb: 2.5,
              boxShadow: "0 4px 14px rgba(234, 88, 12, 0.3)",
            }}
          >
            Let&apos;s Talk
          </Button>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "#64748B",
              fontWeight: 600,
              letterSpacing: "0.05em",
              mb: 0.5,
              textTransform: "uppercase",
              fontSize: "0.725rem",
            }}
          >
            Start with the problem
          </Typography>
          <Typography
            component="a"
            href="mailto:hello.aetibar@gmail.com"
            sx={{
              color: "#0E172A",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
            }}
          >
            hello.aetibar@gmail.com
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
