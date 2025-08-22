// import CaseStudies from "@/components/Services/CaseStudies";

import Contact from "@/components/home/contact/Contact";
import OurTechnology from "@/components/Services/OurTechnology";
import ProjectsSection from "@/components/Services/ProjectsSection";
import DetailsPart from "@/components/servicesinner/DetailsPart";
import ExpertisePart from "@/components/servicesinner/ExpertisePart";
import HeroSection from "@/components/servicesinner/HeroSection";
import { Grid } from "@mui/material";

const ServicesInner = () => {
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
      <DetailsPart />
      <ExpertisePart />
      <OurTechnology />
      <ProjectsSection />

      <Contact displayBottomImage={false} />
    </Grid>
  );
};

export default ServicesInner;
