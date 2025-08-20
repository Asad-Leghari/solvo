import React from "react";
import { Button, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
        width: "100%",
      }}
      className="flex flex-col items-center justify-center min-h-[50vh]" // made section tall
    >
      <Typography
        variant="h3"
        // className="text-[24px] md:text-[57px] leading-8 text-center !my-8"
      >
        Our <span className="text-primary">Services</span>
      </Typography>
      <Typography
        variant="h6"
        className="text-center w-[90%] md:w-[60%] mx-auto !mb-8"
      >
        Unleash your genius and maximize your potential <br /> Unleash your
        genius and maximize your potential
      </Typography>
      <Button
        variant="contained"
        endIcon={<ArrowRightIcon />}
        sx={{
          width: "fit-content",
          height: "40px",
          borderRadius: "12px",
          textTransform: "capitalize",
          mb: "20px",
        }}
      >
        Let's Connect
      </Button>
    </div>
  );
};

export default HeroSection;
