import { Box, Grid } from "@mui/material";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Grid
      container
      flexDirection={"column"}
      minHeight={`calc(100vh - 64px)`}
      size={12}
      width={"100%"}
    >
      <Navbar />
      <Box flex={1}>{children}</Box>
      <Footer />/
    </Grid>
  );
}
