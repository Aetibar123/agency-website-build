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
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";

const serviceItems = [
  {
    title: "Web Development",
    desc: "Business websites, e-commerce, and custom web apps",
    path: "/services/web-development",
    icon: <LanguageIcon sx={{ fontSize: 18, color: "#EA580C" }} />,
  },
  {
    title: "App Development",
    desc: "Mobile applications for iOS & Android",
    path: "/services/app-development",
    icon: <PhoneIphoneIcon sx={{ fontSize: 18, color: "#EA580C" }} />,
  },
  {
    title: "AI Automation & Integration",
    desc: "Workflow automation and smart system integrations",
    path: "/services/ai-automation",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />,
  },
  {
    title: "SEO Services",
    desc: "Technical SEO and organic search visibility",
    path: "/services/seo",
    icon: <SearchIcon sx={{ fontSize: 18, color: "#EA580C" }} />,
  },
  {
    title: "Social Media Marketing",
    desc: "Content planning and active social management",
    path: "/services/social-media-marketing",
    icon: <ShareOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />,
  },
  {
    title: "Paid Advertising",
    desc: "Google Ads & Meta Ads campaign management",
    path: "/services/paid-advertising",
    icon: <AdsClickOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically close mobile menu when navigating to a new route
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleOpenServices = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchor(event.currentTarget);
  };

  const handleCloseServices = () => {
    setServicesAnchor(null);
  };

  const isServicesActive = pathname.startsWith("/services");

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
                gap: { md: 2, lg: 3.2, xl: 4.5 },
              }}
            >
              {/* Services Dropdown Trigger */}
              <Box
                onMouseEnter={handleOpenServices}
                sx={{ position: "relative", display: "inline-block" }}
              >
                <Button
                  component={Link}
                  href="/services"
                  endIcon={
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: "1.1rem !important",
                        transition: "transform 0.2s",
                        transform: Boolean(servicesAnchor) ? "rotate(180deg)" : "none",
                      }}
                    />
                  }
                  sx={{
                    color: isServicesActive ? "#0E172A" : "#525760",
                    fontWeight: isServicesActive ? 700 : 500,
                    fontSize: { md: "0.875rem", lg: "0.9375rem" },
                    textTransform: "none",
                    p: 0,
                    minWidth: "auto",
                    whiteSpace: "nowrap",
                    "&:hover": {
                      color: "#0E172A",
                      bgcolor: "transparent",
                    },
                  }}
                >
                  Services
                </Button>

                <Menu
                  anchorEl={servicesAnchor}
                  open={Boolean(servicesAnchor)}
                  onClose={handleCloseServices}
                  slotProps={{
                    list: {
                      onMouseLeave: handleCloseServices,
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
                      Our Services
                    </Typography>
                  </Box>

                  {serviceItems.map((item) => (
                    <MenuItem
                      key={item.path}
                      component={Link}
                      href={item.path}
                      onClick={handleCloseServices}
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
                    href="/services"
                    onClick={handleCloseServices}
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
                    <span>Overview: All Services</span>
                    <ArrowForwardIcon sx={{ fontSize: 14 }} />
                  </MenuItem>
                </Menu>
              </Box>

              {/* Core Nav Links */}
              {[
                { name: "Our Work", path: "/work" },
                { name: "How We Work", path: "/how-we-work" },
                { name: "About", path: "/about" },
                { name: "Blog", path: "/blog" },
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
                      fontSize: { md: "0.875rem", lg: "0.9375rem" },
                      textDecoration: "none",
                      position: "relative",
                      whiteSpace: "nowrap",
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
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 2 } }}>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                  color: "#FFFFFF",
                  px: { sm: 2.2, md: 2.5, lg: 3 },
                  py: { sm: 0.85, md: 1, lg: 1.1 },
                  fontSize: { sm: "0.8125rem", md: "0.85rem", lg: "0.875rem" },
                  fontWeight: 700,
                  borderRadius: "9999px",
                  boxShadow: "0 4px 14px rgba(234, 88, 12, 0.28)",
                  whiteSpace: "nowrap",
                  transition: "all 0.25s ease",
                  textTransform: "none",
                  "&:hover": {
                    background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                    boxShadow: "0 6px 20px rgba(234, 88, 12, 0.4)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Discuss Your Project
              </Button>

              <IconButton
                aria-label="Toggle navigation menu"
                onClick={handleDrawerToggle}
                sx={{
                  display: { md: "none" },
                  color: "#0E172A",
                  width: { xs: 40, sm: 44 },
                  height: { xs: 40, sm: 44 },
                  border: "1px solid rgba(17, 18, 21, 0.12)",
                  borderRadius: "12px",
                  bgcolor: "#FFFFFF",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "rgba(234, 88, 12, 0.08)",
                    borderColor: "#EA580C",
                    color: "#EA580C",
                  },
                  "&:active": {
                    transform: "scale(0.95)",
                  },
                }}
              >
                <MenuIcon sx={{ fontSize: { xs: 20, sm: 22 } }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer - Takes half view of screen on mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "50vw", sm: "50vw", md: 360 },
            maxWidth: { xs: "50vw", sm: "50vw", md: 360 },
            bgcolor: "#FFFFFF",
            p: { xs: 2, sm: 2.5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflowY: "auto",
            overflowX: "hidden",
            boxShadow: "-8px 0 32px rgba(14, 23, 42, 0.15)",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pb: { xs: 2, sm: 2.5 },
              borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#0E172A",
                fontSize: { xs: "1.05rem", sm: "1.2rem" },
                whiteSpace: "nowrap",
              }}
            >
              AETIBAR<Box component="span" sx={{ color: "#EA580C" }}>.</Box>
            </Typography>
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="Close navigation"
              sx={{
                color: "#0E172A",
                border: "1px solid rgba(17, 18, 21, 0.12)",
                borderRadius: "50%",
                width: { xs: 32, sm: 36 },
                height: { xs: 32, sm: 36 },
                p: 0,
                transition: "all 0.2s ease",
                "&:hover": {
                  bgcolor: "rgba(234, 88, 12, 0.08)",
                  borderColor: "#EA580C",
                  color: "#EA580C",
                },
                "&:active": {
                  transform: "scale(0.95)",
                },
              }}
            >
              <CloseIcon sx={{ fontSize: { xs: 16, sm: 18 } }} />
            </IconButton>
          </Box>

          <List disablePadding sx={{ pt: 2, display: "flex", flexDirection: "column", gap: 0.25 }}>
            <ListItem
              component={Link}
              href="/services"
              onClick={handleDrawerToggle}
              sx={{
                textDecoration: "none",
                px: { xs: 0.5, sm: 1 },
                py: { xs: 0.8, sm: 1.1 },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "8px",
                "&:hover": {
                  bgcolor: "rgba(234, 88, 12, 0.05)",
                },
              }}
            >
              <Typography sx={{ fontSize: { xs: "0.95rem", sm: "1.05rem" }, fontWeight: 700, color: "#0E172A" }}>
                Services
              </Typography>
              <ArrowForwardIcon sx={{ fontSize: { xs: 14, sm: 16 }, color: "#94A3B8" }} />
            </ListItem>

            {/* Sub items for Services in mobile */}
            <Box sx={{ pl: { xs: 1.25, sm: 2 }, pr: 0.5, pb: 0.5, display: "flex", flexDirection: "column", gap: 0.4 }}>
              {serviceItems.map((sub) => (
                <Typography
                  key={sub.path}
                  component={Link}
                  href={sub.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    textDecoration: "none",
                    fontSize: { xs: "0.78rem", sm: "0.85rem" },
                    color: pathname === sub.path ? "#EA580C" : "#64748B",
                    fontWeight: pathname === sub.path ? 600 : 500,
                    py: 0.35,
                    lineHeight: 1.3,
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "#EA580C",
                    },
                  }}
                >
                  &bull; {sub.title}
                </Typography>
              ))}
            </Box>

            <Divider sx={{ my: 0.75, borderColor: "rgba(17, 18, 21, 0.06)" }} />

            {[
              { name: "Our Work", path: "/work" },
              { name: "How We Work", path: "/how-we-work" },
              { name: "About", path: "/about" },
              { name: "Blog", path: "/blog" },
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
                    px: { xs: 0.5, sm: 1 },
                    py: { xs: 0.8, sm: 1.1 },
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "8px",
                    borderBottom: "1px solid rgba(17, 18, 21, 0.04)",
                    "&:hover": {
                      bgcolor: "rgba(234, 88, 12, 0.05)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "1.05rem" },
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

        <Box sx={{ pt: 2, mt: 2, borderTop: "1px solid rgba(17, 18, 21, 0.08)" }}>
          <Button
            component={Link}
            href="/contact"
            onClick={handleDrawerToggle}
            fullWidth
            variant="contained"
            endIcon={<ArrowForwardIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />}
            sx={{
              py: { xs: 1, sm: 1.25 },
              px: 1,
              fontSize: { xs: "0.825rem", sm: "0.9rem" },
              fontWeight: 700,
              background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
              color: "#FFFFFF",
              borderRadius: "9999px",
              boxShadow: "0 4px 12px rgba(234, 88, 12, 0.25)",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
              },
            }}
          >
            Discuss Your Project
          </Button>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "#64748B",
              fontWeight: 600,
              letterSpacing: "0.05em",
              mb: 0.25,
              textTransform: "uppercase",
              fontSize: { xs: "0.65rem", sm: "0.725rem" },
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
              fontSize: { xs: "0.75rem", sm: "0.85rem" },
              textDecoration: "none",
              display: "block",
              wordBreak: "break-all",
              lineHeight: 1.3,
            }}
          >
            hello.aetibar@gmail.com
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
