import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const HeroSection = () => {
  return (
    <Grid
      container
      sx={{
        backgroundImage:
          "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
        flexDirection: "column",
        pt: "100px",
        px: { xs: 2, lg: "300px" },
        // border: "2px solid black",
        pb: "150px",
        alignItems: "center",
        justifyContent: "center",
        gap: "25px",
      }}
    >
      <Typography
        variant="h3"
        className="text-[24px] md:text-[57px] leading-8 text-center !my-8"
      >
        Our <span className="text-primary">Services</span>
      </Typography>
      <Typography variant="h6" textAlign={"center"}>
        Unleash your genius and maximize your potential <br /> Unleash your
        genius and maximize your potential
      </Typography>
      <Button
        variant="contained"
        endIcon={<ArrowRightIcon />}
        sx={{
          width: "fit-content",
          height: "40px",
          borderRadius: "12px",
          textTransform: "capitalize",
          mb: "20px",
        }}
      >
        Let's Connect
      </Button>
    </Grid>
  );
};

export default HeroSection;
