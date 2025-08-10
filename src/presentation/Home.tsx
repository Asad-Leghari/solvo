import { Grid } from "@mui/material";
import React, { useState } from "react";
import Navbar from "@/components/core/Navbar";
import Hero from "@/components/home/hero-section/Hero";

const Home = () => {
  return (
    <Grid container flexDirection={"column"}>
      <Hero />
    </Grid>
  );
};

export default Home;
