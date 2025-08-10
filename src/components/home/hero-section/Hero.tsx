import images from "@/assets/images";
import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import HeadingButton from "@/components/home/HeadingButton";

const Hero = () => {
  return (
    <Grid container flexDirection={"column"} height={"555px"} gap={"12px"}>
      <Grid
        container
        flexDirection={"row"}
        gap={"12px"}
        justifyContent={"center"}
      >
        <Grid container flexDirection={"column"}>
          <HeadingButton title="Our Most In-Demand CFD Services" />
        </Grid>
        <Image src={images.Hero} alt="Hero" width={539} height={334} />
      </Grid>
      <Grid container>bottom section</Grid>
    </Grid>
  );
};

export default Hero;
