import Contact from "@/components/home/contact/Contact";
import HeroSection from "@/components/ourproject/HeroSection";
import ProjectCards from "@/components/ourproject/ProjectCards";
import OurTechnology from "@/components/Services/OurTechnology";
import { Grid } from "@mui/material";

const OurProject = () => {
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
      <ProjectCards />
      <OurTechnology />
      <Contact displayBottomImage={false} />
    </Grid>
  );
};

export default OurProject;
