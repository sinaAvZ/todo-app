"use client";
import React, { ReactNode } from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/joy";

const MuiThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
