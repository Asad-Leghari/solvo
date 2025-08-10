import { Grid, Typography } from "@mui/material";
import React from "react";
import HeadingButton from "../HeadingButton";
import Models from "./Models";
import Tabs from "./Tabs";

const Services = () => {
  return (
    <Grid
      container
      flexDirection={"column"}
      alignItems={"center"}
      gap={"50px"}
      mt={"26px"}
    >
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        gap={"10px"}
      >
        <HeadingButton title="Our Best Services" />
        <Typography variant="h6" textAlign={"center"}>
          Run entire Engineering{" "}
          <span style={{ color: "#0273BD" }}>
            AI & Simulation <br /> Workflows
          </span>{" "}
          in your Browser
        </Typography>
      </Grid>
      <Models />
      <Tabs />
    </Grid>
  );
};

export default Services;
