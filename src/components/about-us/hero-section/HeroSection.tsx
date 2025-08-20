import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <Grid
      sx={{
        height: "604px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "100px",
        backgroundImage:
          "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
        px: { xs: 2, xl: "300px" },
      }}
    >
      <Stack sx={{ width: "100%", alignItems: "center" }} spacing={3}>
        <Typography variant="h4">
          What is <span className="text-primary">Solvo Engineering</span>
        </Typography>
        <Typography variant="h6" textAlign={"center"}>
          Solvo Engineering is CAE consultant firm specializing in FEA, CFD
          simulations and CAD modeling. We pride ourselves on delivering
          exceptional lifecycle solutions customization to meet the precise
          needs of our clients.
        </Typography>
        <Button variant="contained">let's Connect</Button>
      </Stack>
    </Grid>
  );
};

export default HeroSection;
