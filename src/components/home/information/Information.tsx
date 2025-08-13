import { Grid, Typography } from "@mui/material";
import React from "react";
import HeadingButton from "../HeadingButton";

const Information = () => {
  return (
    <Grid container flexDirection={"column"} alignItems={"start"} gap={"10px"}>
      <HeadingButton title="Case Studies" />
      <Typography variant="h5" textAlign={"center"}>
        Details of{" "}
        <span style={{ color: "#0273BD" }}>
          Our Products <br />
        </span>
      </Typography>
    </Grid>
  );
};

export default Information;
