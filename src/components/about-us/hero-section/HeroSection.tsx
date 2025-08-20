import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent={"start"}
      gap={"28px"}
      sx={{
        backgroundImage:
          "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
        width: "100%",
        paddingBottom: "200px",
        py: "100px",
        px: { xs: 2, xl: "300px" },
      }}
      height={"734px"}
      className="flex flex-col items-center justify-center py-16"
    >
      <Typography variant="h4">
        What is <span className="text-primary">Solvo Engineering</span>
      </Typography>
      <Typography variant="h6" textAlign={"center"}>
        Solvo Engineering is CAE consultant firm specializing in FEA, CFD
        simulations and CAD modeling. We pride ourselves on delivering
        exceptional lifecycle solutions customization to meet the precise needs
        of our clients.
      </Typography>
      <Button variant="contained">let's Connect</Button>
    </Grid>
  );
};

export default HeroSection;
