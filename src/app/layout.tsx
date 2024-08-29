import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CssVarsProvider } from "@mui/material";
import MuiThemeProvider from "@/libs/providers/MUI/MuiThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App ",
  description: " todo app for interview ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
