import BgSection from "@/components/about-us/bg-section";
import ExperienceCounter from "@/components/about-us/experience-counter";
import HeroSection from "@/components/about-us/hero-section";
import OurCoreValue from "@/components/about-us/our-core-value";
import OurTechnology from "@/components/about-us/our-technology";
import WhoWeAre from "@/components/about-us/who-we-are";
import Contact from "@/components/home/contact/Contact";
import Reviews from "@/components/home/reviews/Reviews";
import { Grid } from "@mui/material";
import React from "react";

const AboutUs = () => {
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
      <WhoWeAre />
      <BgSection
        heading="Our Mission"
        text="To be the leading CAE consulting firm, driving innovation and excellence to empower businesses, startups globally with advanced engineering solutions and technologies.To be the leading CAE consulting firm, driving innovation and excellence to empower businesses, startups globally with advanced engineering solutions and technologies."
      />
      <Reviews />
      <ExperienceCounter />
      <OurCoreValue />
      <BgSection
        heading="Our Vision"
        text={`We are committed to offer top-notch CAE engineering services while fostering a culture of innovation, collaboration. Our success is measured by our client’s progress and our employee’s well-being.`}
      />
      <OurTechnology />
      <Contact displayBottomImage={false} />
    </Grid>
  );
};

export default AboutUs;
