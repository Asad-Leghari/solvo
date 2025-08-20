import React from "react";
import Image from "next/image";
import { Grid, Typography, Button, Box, Paper } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import images from "@/assets/images";

const DetailsSection: React.FC = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 10 },
        py: 10,
        backgroundColor: "#f9f9f9",
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
        display: "flex",
      }}
    >
      <Grid container spacing={6} justifyContent="center">
        {/* 1️⃣ Image Left - Text Right */}
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={6}
            direction={{ xs: "column-reverse", md: "row" }}
            alignItems="center"
          >
            {/* Image */}
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  width: "100%",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                <Box sx={{ position: "relative", width: "100%", height: 220 }}>
                  <Image
                    src={images.services.EFA1}
                    alt="Finite Element Analysis"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Paper>
            </Grid>
            {/* Text */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box sx={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Finite Element Analysis{" "}
                  <Box component="span" color="primary.main" fontWeight="bold">
                    (EFA)
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 2, color: "text.secondary", lineHeight: 1.6 }}
                >
                  Optimize designs and ensure structural integrity with precise
                  and efficient simulation techniques.
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  endIcon={<ArrowRightIcon />}
                  sx={{ borderRadius: "12px", textTransform: "capitalize" }}
                >
                  Read More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* 2️⃣ Text Left - Image Right */}
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={6}
            direction={{ xs: "column-reverse", md: "row-reverse" }} // 🔥 Text first on mobile
            alignItems="center"
          >
            {/* Image */}
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  width: "100%",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                <Box sx={{ position: "relative", width: "100%", height: 220 }}>
                  <Image
                    src={images.services.CFD1}
                    alt="Computational Fluid Dynamics"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Paper>
            </Grid>
            {/* Text */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box sx={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Computational Fluid Dynamics{" "}
                  <Box component="span" color="primary.main" fontWeight="bold">
                    (CFD)
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 2, color: "text.secondary", lineHeight: 1.6 }}
                >
                  Analyze fluid dynamics and thermal processes to enhance
                  performance and energy efficiency.
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  endIcon={<ArrowRightIcon />}
                  sx={{ borderRadius: "12px", textTransform: "capitalize" }}
                >
                  Read More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* 3️⃣ Image Left - Text Right */}
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={6}
            direction={{ xs: "column-reverse", md: "row" }} // 🔥 Text first on mobile
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  width: "100%",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                <Box sx={{ position: "relative", width: "100%", height: 220 }}>
                  <Image
                    src={images.services.CAD1}
                    alt="2D/3D Computer Aided Design"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box sx={{ wordBreak: "break-word", overflowWrap: "anywhere" }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  2D/3D Computer Aided Design{" "}
                  <Box component="span" color="primary.main" fontWeight="bold">
                    (CAD)
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 2, color: "text.secondary", lineHeight: 1.6 }}
                >
                  Transform concepts into accurate CAD model with seamless
                  integration and practical solutions.
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  endIcon={<ArrowRightIcon />}
                  sx={{ borderRadius: "12px", textTransform: "capitalize" }}
                >
                  Read More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsSection;
