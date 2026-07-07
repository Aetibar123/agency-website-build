import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6E41E2", // Premium Deep Purple
      light: "#9A73F0",
      dark: "#4A25A9",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#111827", // Rich Dark for text headings
    },
    background: {
      default: "#FFFFFF", // Pure White background
      paper: "#F9FAFB", // Off-white for cards and sections
    },
    text: {
      primary: "#1F2937",
      secondary: "#4B5563",
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.01em" },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    body1: { fontSize: "1.125rem", lineHeight: 1.7 },
    body2: { fontSize: "1rem", lineHeight: 1.6 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          padding: "12px 24px",
          "&.MuiButton-containedPrimary": {
            boxShadow: "0 4px 14px 0 rgba(110, 65, 226, 0.39)",
            "&:hover": {
              boxShadow: "0 6px 20px rgba(110, 65, 226, 0.23)",
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)",
          border: "1px solid rgba(110, 65, 226, 0.1)",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 20px 40px -10px rgba(110, 65, 226, 0.15)",
          },
        },
      },
    },
  },
});
