import { createTheme } from "@mui/material";

const materialTheme:any = createTheme({
  palette: {
    primary: {
      main: "#1976D2", // Primary Blue
    },
    secondary: {
      main: "#26A69A", // Secondary Teal
    },
    background: {
      default: "#000000", // Black (Parent background)
      paper: "#121212", // Charcoal (Secondary background)
    },
    text: {
    
      primary: "#FFFFFF", // White (Primary text)
      secondary: "#E8E8E8", // Light Gray (Secondary text)
    },
    error: {
      main: "#D32F2F", // Error Red
    },
    success: {
      main: "#388E3C", // Success Green
    },
    warning: {
      main: "#F57C00", // Warning Orange
    },
    divider: "#282828", // Medium Gray (Dividers, borders)
  },
});

export default materialTheme;
