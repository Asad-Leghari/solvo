import { Grid } from "@mui/material";
import React from "react";
import Hero from "@/components/home/hero-section/Hero";
import Clients from "@/components/home/clients/Clients";
import Services from "@/components/home/services/Services";
import CaseStudies from "@/components/home/case-studies/CaseStudies";
import Reviews from "@/components/home/reviews/Reviews";
import Information from "@/components/home/information/Information";
import Contact from "@/components/home/contact/Contact";

const Home = () => {
  return (
    <Grid
      container
      flexDirection={"column"}
      width={"100%"}
      flexWrap={"nowrap"}
      bgcolor={"#FEF7FF"}
      size={12}
    >
      <Hero />
      <Clients />
      <Services />
      {/* <CaseStudies /> */}
      <Reviews />
      <Information />
      <Contact />
    </Grid>
  );
};

export default Home;
