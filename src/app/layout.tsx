import type { Metadata } from "next";
import "./globals.css";
import SolvoTheme from "@/application/contexts/SolvoTheme";
import { Box, Grid } from "@mui/material";
import Navbar from "@/components/core/Navbar";

export const metadata: Metadata = {
  title: "Solvo Engineers",
  description: "Engineering Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SolvoTheme>
          <Grid
            container
            flexDirection={"column"}
            minHeight={`calc(100vh - 64px)`}
            size={12}
          >
            <Navbar />
            <Box flex={1}>{children}</Box>
          </Grid>
        </SolvoTheme>
      </body>
    </html>
  );
}
