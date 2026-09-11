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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const navItems = [
  { name: "Services", path: "/services", num: "01" },
  { name: "Work", path: "/portfolio", num: "02" },
  { name: "About", path: "/about", num: "03" },
  { name: "Insights", path: "/blog", num: "04" },
  { name: "Contact", path: "/contact", num: "05" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
            ? "rgba(250, 249, 245, 0.92)"
            : "rgba(250, 249, 245, 0.65)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid",
          borderColor: scrolled ? "rgba(17, 18, 21, 0.08)" : "transparent",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              height: { xs: 68, md: 80 },
              px: { xs: 1, md: 3 },
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
                fontSize: { xs: "1.2rem", md: "1.4rem" },
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              AETIBAR
              <Box
                component="span"
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#0E7490",
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
                gap: 4.5,
              }}
            >
              {navItems.map((item) => {
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
                      color: isActive ? "#0E172A" : "#5E6068",
                      fontWeight: isActive ? 600 : 500,
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
                          height: 1.5,
                          bgcolor: "#0E7490",
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

            {/* CTA & Mobile Menu Toggle */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  bgcolor: "#0E172A",
                  color: "#FFFFFF",
                  px: 2.5,
                  py: 1.1,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  borderRadius: "6px",
                  "&:hover": {
                    bgcolor: "#1E293B",
                  },
                }}
              >
                Start a Project
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
            bgcolor: "#FAF9F5",
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
                fontSize: "1.2rem",
              }}
            >
              AETIBAR<Box component="span" sx={{ color: "#0E7490" }}>.</Box>
            </Typography>
            <IconButton
              onClick={handleDrawerToggle}
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

          <List sx={{ pt: 4, display: "flex", flexDirection: "column", gap: 1 }}>
            {navItems.map((item) => {
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
                    py: 1.5,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid rgba(17, 18, 21, 0.04)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.25rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#0E172A" : "#3B3D44",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#9A9AA0",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.num}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Box sx={{ pt: 4, borderTop: "1px solid rgba(17, 18, 21, 0.08)" }}>
          <Button
            component={Link}
            href="/contact"
            onClick={handleDrawerToggle}
            fullWidth
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              py: 1.6,
              fontSize: "1rem",
              fontWeight: 600,
              bgcolor: "#0E172A",
              color: "#FFFFFF",
              borderRadius: "8px",
              mb: 3,
            }}
          >
            Start a Project
          </Button>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "#5E6068",
              fontWeight: 500,
              letterSpacing: "0.05em",
              mb: 0.5,
            }}
          >
            Direct Inquiry
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
