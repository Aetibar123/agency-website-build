import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0E7490", // Refined deep teal accent (from Aetibar logo wordmark)
      light: "#06B6D4",
      dark: "#155E75",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#0E172A", // Midnight Navy (from Aetibar logo icon)
      light: "#1E293B",
      dark: "#020617",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FAF9F5", // Warm off-white / ivory canvas
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111215", // Deep Charcoal
      secondary: "#5E6068", // Warm Slate
    },
    divider: "rgba(17, 18, 21, 0.08)",
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08 },
    h2: { fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.15 },
    h3: { fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.25 },
    h4: { fontWeight: 700, letterSpacing: "-0.015em" },
    h5: { fontWeight: 600, letterSpacing: "-0.01em" },
    h6: { fontWeight: 600 },
    body1: { fontSize: "1.0625rem", lineHeight: 1.75, letterSpacing: "-0.005em" },
    body2: { fontSize: "0.9375rem", lineHeight: 1.65 },
    caption: { letterSpacing: "0.08em", textTransform: "uppercase" },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 22px",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        },
        containedPrimary: {
          backgroundColor: "#0E172A",
          color: "#FFFFFF",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#1E293B",
            boxShadow: "0 6px 20px rgba(14, 23, 42, 0.15)",
            transform: "translateY(-1px)",
          },
        },
        outlinedPrimary: {
          borderColor: "#D5D2C9",
          color: "#111215",
          "&:hover": {
            borderColor: "#0E172A",
            backgroundColor: "rgba(14, 23, 42, 0.03)",
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
