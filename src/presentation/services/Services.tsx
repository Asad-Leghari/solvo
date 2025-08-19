import ClientFocusedSection from "@/components/Services/ClientFocusedSection";
import DetailsSection from "@/components/Services/DetailsSection";
import HeroSection from "@/components/Services/HeroSection";
import ProjectsSection from "@/components/Services/ProjectsSection";
import WelcomeSection from "@/components/Services/WelcomeSection";
import OurTechnology from "@/components/Services/OurTechnology";
import CaseStudies from "@/components/Services/CaseStudies";
import Contact from "@/components/home/contact/Contact";
import { Grid } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <Grid
      container
      flexDirection={"column"}
      width={"100%"}
      flexWrap={"nowrap"}
      // bgcolor={"#FEF7FF"}
      size={12}
    >
      <HeroSection />
      <DetailsSection />
      <ClientFocusedSection />
      <OurTechnology />
      <WelcomeSection />
      <CaseStudies />
      <ProjectsSection />
      <Contact displayBottomImage={false} />
    </Grid>
  );
};

export default Services;
