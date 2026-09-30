import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EA580C", // Rich Ember Orange
      light: "#FB923C", // Warm Sunset Amber
      dark: "#C2410C", // Deep Burnt Orange
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#18181B", // Warm Obsidian Slate
      light: "#27272A",
      dark: "#09090B",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF", // Clean modern crisp canvas
      paper: "#FFFFFF",
    },
    text: {
      primary: "#18181B", // Deep Warm Slate
      secondary: "#52525B", // Neutral Warm Grey
    },
    divider: "rgba(228, 228, 231, 0.8)",
  },
  typography: {
    fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: { fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.18, textWrap: "balance" as any },
    h2: { fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.2, textWrap: "balance" as any },
    h3: { fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.3, textWrap: "balance" as any },
    h4: { fontWeight: 500, letterSpacing: "-0.015em", textWrap: "balance" as any },
    h5: { fontWeight: 500, letterSpacing: "-0.01em", textWrap: "balance" as any },
    h6: { fontWeight: 500, textWrap: "balance" as any },
    body1: { fontSize: "1.0625rem", lineHeight: 1.75, letterSpacing: "-0.005em" },
    body2: { fontSize: "0.9375rem", lineHeight: 1.65 },
    caption: { letterSpacing: "0.08em", textTransform: "uppercase" },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          textWrap: "balance",
        },
        h2: {
          textWrap: "balance",
        },
        h3: {
          textWrap: "balance",
        },
        h4: {
          textWrap: "balance",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 22px",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        },
        contained: {
          backgroundColor: "#EA580C",
          color: "#FFFFFF",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#C2410C",
            boxShadow: "0 6px 20px rgba(234, 88, 12, 0.25)",
            transform: "translateY(-1px)",
          },
        },
        outlined: {
          borderColor: "rgba(24, 24, 27, 0.2)",
          color: "#18181B",
          "&:hover": {
            borderColor: "#EA580C",
            backgroundColor: "rgba(249, 115, 22, 0.04)",
            transform: "translateY(-1px)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(17, 18, 21, 0.04)",
          border: "1px solid #E6E3DA",
          backgroundColor: "#FFFFFF",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        },
      },
    },
  },
});
