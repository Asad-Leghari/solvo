import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import images from "@/assets/images";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const WelcomeSection = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, xl: "300px", lg: "90px" }, // ✅ responsive padding
        py: 8,
        backgroundColor: "#FEF7FF", // ✅ new background
        mt: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        {/* LEFT SIDE - TEXT */}
        <Grid
          container
          sx={{
            width: { xs: "100%", md: "650px" }, // ✅ fixed width on web, full width on mobile
            height: { xs: "auto", md: "420px" }, // ✅ fixed height only on web
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Welcome to SOLVO Engineers <br />{" "}
              <span style={{ color: "#1976d2" }}>
                our Partner In Serving Best Engineering Solutions
              </span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: "black",
                mb: 3,
              }}
            >
              At SOLVO Engineers, We Commit To Delivering Innovative, Focused
              And Personalized Engineering Services That Would Bring The Best
              Results Eliminating The Challenges Of Modern Industries. With Our
              Expertise And Advanced Technology, We Ensure To Transform Your
              Vision Into Real-Time, Functional, And High-Performance Solutions.
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                endIcon={<ArrowRightIcon />}
                sx={{
                  width: { xs: "auto", md: "30%" }, // ✅ auto on mobile, fixed on web
                  height: "40px",
                  borderRadius: "12px",
                  textTransform: "capitalize",
                  mb: "20px",
                }}
              >
                View
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* RIGHT SIDE - IMAGE */}
        <Grid
          container
          sx={{
            width: { xs: "100%", md: "423px" }, // ✅ fixed width on web
            height: { xs: "auto", md: "366px" }, // ✅ fixed height on web
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={images.services.clientimage}
            alt={"title"}
            width={423}
            height={366}
            style={{
              objectFit: "cover",
              borderRadius: "12px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeSection;
