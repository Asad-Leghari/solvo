import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import images from "@/assets/images";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const WelcomeSection = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: "60px", xl: "300px" }, // ✅ responsive padding
        py: 8,
        backgroundColor: "#FEF7FF", // ✅ new background
        mt: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        flexDirection={{ xs: "column", xl: "row" }}
        container
        alignItems="center"
        justifyContent="center"
      >
        {/* LEFT SIDE - TEXT */}
        <Grid
          container
          sx={{
            flex: 1.5,
            height: { xs: "auto", md: "420px" }, // ✅ fixed height only on web
            display: "flex",
            alignItems: "center",
          }}
        >
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
            At SOLVO Engineers, We Commit To Delivering Innovative, Focused And
            Personalized Engineering Services That Would Bring The Best Results
            Eliminating The Challenges Of Modern Industries. With Our Expertise
            And Advanced Technology, We Ensure To Transform Your Vision Into
            Real-Time, Functional, And High-Performance Solutions.
          </Typography>

          {/* Buttons */}
          <Button
            variant="contained"
            endIcon={<ArrowRightIcon />}
            sx={{
              width: "fit-content", // ✅ auto on mobile, fixed on web
              height: "40px",
              borderRadius: "12px",
              textTransform: "capitalize",
              mb: "20px",
            }}
          >
            View
          </Button>
        </Grid>

        {/* RIGHT SIDE - IMAGE */}
        <Grid
          flex={1}
          sx={{
            height: { xs: "auto", lg: "356px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Image
            src={images.services.clientimage}
            alt="Client Solutions"
            width={368}
            height={356}
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
