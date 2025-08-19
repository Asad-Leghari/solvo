import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import images from "@/assets/images";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const WelcomeSection = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 8,
        backgroundColor: "#FF000019",
        mt: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // border: "2px solid black",
      }}
    >
      <Grid
        container
        spacing={15}
        alignItems="center"
        justifyContent={"center"}
        // sx={{ bgColor: "#FF6F91" }}
      >
        {/* LEFT SIDE - TEXT */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: 650 }}>
            {" "}
            {/* 👈 keeps text wrapped */}
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
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Your Vision, Our Expertise
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: "text.secondary",
                mb: 3,
              }}
            >
              At SOLVO Engineers, We Commit To Delivering Innovative, Focused
              And Personalized Engineering Services That Would Bring The Best
              Results Eliminating The Challenges Of Modern Industries. With Our
              Expertise And Advanced Technology, We Ensure To Transform Your
              Vision Into Real-Time, Functional, And High-Performance Solutions.
            </Typography>
            {/* Buttons like in your screenshot */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                endIcon={<ArrowRightIcon />}
                sx={{
                  width: "30%",
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

        {/* RIGHT SIDE - GREY PLACEHOLDER */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Image
            src={images.services.clientimage}
            alt={"title"}
            width={300}
            height={280}
            style={{
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeSection;
