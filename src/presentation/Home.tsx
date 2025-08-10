import { Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import Navbar from "@/components/core/Navbar";
import Hero from "@/components/home/hero-section/Hero";
import Clients from "@/components/home/clients/Clients";
import Services from "@/components/home/services/Services";

const Home = () => {
  return (
    <Grid container flexDirection={"column"} width={"100%"} height={"100%"}>
      <Hero />
      <Grid
        container
        flexDirection={"column"}
        sx={{ bgcolor: "white", borderRadius: "60px 60px 0px 0px" }}
        mt={"-50px"}
        mx={"0px"}
        px={"67px"}
        py={"60px"}
      >
        <Clients />
        <Services />
      </Grid>
    </Grid>
  );
};

export default Home;
