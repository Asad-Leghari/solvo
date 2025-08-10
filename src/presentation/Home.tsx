import { Grid } from "@mui/material";
import React, { useState } from "react";
import Navbar from "@/components/core/Navbar";
import Hero from "@/components/home/hero-section/Hero";

const Home = () => {
  return (
    <Grid container flexDirection={"column"} width={"100%"} height={"100%"}>
      <Hero />
    </Grid>
  );
};

export default Home;
