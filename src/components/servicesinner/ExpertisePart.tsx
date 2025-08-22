import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import images from "@/assets/images";

const ExpertisePart: React.FC = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: "60px", xl: "300px", lg: "60px" },
        py: 10,
        backgroundColor: "#88D8E833",
        width: "100%",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 2,
        }}
      >
        Our Expertise in Finite Element Analysis (EFA)
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: "black",
          mb: 8,
          maxWidth: "700px",
          mx: "auto",
        }}
      >
        We specialize in analyzing product performance under real-world
        conditions, ensuring reliability and cost-efficiency through innovative
        engineering.
      </Typography>

      {/* Boxes */}
      <Grid container spacing={2} justifyContent="center">
        {[
          "Design Optimization",
          "Design Optimization",
          "Design Optimization",
          "Design Optimization",
        ].map((title, index) => (
          <Grid
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "292px" }, // responsive width
                maxWidth: "292px",
                height: "230px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                p: 4,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Idea image */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  mb: 2,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={images.idea}
                  alt="Idea"
                  width={32}
                  height={32}
                  style={{ objectFit: "contain" }}
                />
              </Box>

              {/* Heading */}
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", color: "black" }}
              >
                {title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExpertisePart;
