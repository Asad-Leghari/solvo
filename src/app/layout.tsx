import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SolvoTheme from "@/application/contexts/SolvoTheme";
import { Box, Grid } from "@mui/material";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";

export const metadata: Metadata = {
  title: "Solvo Engineers",
  description: "Engineering Agency",
};

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <SolvoTheme>
          <Grid
            container
            flexDirection={"column"}
            minHeight={`calc(100vh - 64px)`}
            size={12}
            width={"100%"}
          >
            <Navbar />
            <Box flex={1}>{children}</Box>
            <Footer />
          </Grid>
        </SolvoTheme>
      </body>
    </html>
  );
}
