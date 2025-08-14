"use client";

import images from "@/assets/images";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
import HeadingButton from "@/components/home/HeadingButton";
import CTAButton from "./CTABtn";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, FreeMode, Navigation } from "swiper/modules";

export const slidesData = [
  {
    headingButtonTitle: "Our Most In-Demand CFD Services",
    heading: "Computation Fluid <br /> Dynamics-CFD",
    heroCTAButtons: [
      { id: 1, title: "Aerodynamic Analysis" },
      { id: 2, title: "Airflow Optimisation" },
      { id: 3, title: "VOF - MultiPhase Analysis" },
      { id: 4, title: "Thermal Managment" },
    ],
    mainButtons: [
      { title: "Place Your Order", variant: "blue" },
      { title: "Our Services", variant: "white" },
    ],
    spiralImage: images.Spiral,
    heroImage: images.Hero,
  },
  {
    headingButtonTitle: "Engineering Simulation Excellence",
    heading: "Finite Element <br /> Analysis - FEA",
    heroCTAButtons: [
      { id: 1, title: "Structural Analysis" },
      { id: 2, title: "Modal Analysis" },
      { id: 3, title: "Thermal Simulation" },
      { id: 4, title: "Fatigue Life Prediction" },
    ],
    mainButtons: [
      { title: "Get a Quote", variant: "blue" },
      { title: "Learn More", variant: "white" },
    ],
    spiralImage: images.Spiral,
    heroImage: images.Hero,
  },
  {
    headingButtonTitle: "Specialised Industrial Solutions",
    heading: "Process Flow <br /> Optimisation",
    heroCTAButtons: [
      { id: 1, title: "Piping Network Design" },
      { id: 2, title: "Fluid Mixing Simulation" },
      { id: 3, title: "Heat Exchanger Analysis" },
      { id: 4, title: "Pressure Drop Evaluation" },
    ],
    mainButtons: [
      { title: "Contact Us", variant: "blue" },
      { title: "Case Studies", variant: "white" },
    ],
    spiralImage: images.Spiral,
    heroImage: images.Hero,
  },
];

const Hero = () => {
  const swiperRef = useRef<SwiperCore>(null); // Reference to Swiper instance
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextSlide = () => {
    console.log("swiper current", swiperRef?.current);
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <Grid container size={12}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination, FreeMode, Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Grid
              container
              flexDirection={{ xs: "column", md: "row" }}
              gap={"12px"}
              width={"100%"}
              sx={{
                backgroundImage:
                  "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
              }}
            >
              <Container maxWidth="xl" sx={{ py: { xs: "63px", md: "63px" } }}>
                <Grid
                  container
                  flexDirection={{ xs: "column", lg: "row" }}
                  gap={"12px"}
                  justifyContent={"center"}
                  flexWrap={"nowrap"}
                  minHeight={"425px"}
                  size={12}
                >
                  <Grid container flexDirection={"column"} flexWrap={"nowrap"}>
                    <Grid container flexDirection={"column"} gap={"8px"}>
                      <HeadingButton title={slide.headingButtonTitle} />
                      <Typography
                        variant="h2"
                        fontWeight={600}
                        textAlign={"left"}
                        dangerouslySetInnerHTML={{ __html: slide.heading }}
                      />
                    </Grid>

                    <Grid container flexDirection={"column"} gap={"25px"}>
                      <Grid
                        container
                        flexDirection={"column"}
                        flexWrap={"nowrap"}
                        mt={"26px"}
                        gap={{ xs: "12px", sm: "0px" }}
                      >
                        <Grid
                          container
                          flexDirection={"row"}
                          justifyContent={"start"}
                          gap={"12px"}
                        >
                          {slide.heroCTAButtons.slice(0, 2).map((button) => (
                            <CTAButton key={button.id} title={button.title} />
                          ))}
                        </Grid>
                        <Grid
                          container
                          flexDirection={"row"}
                          justifyContent={"start"}
                          gap={{ xs: "12px", sm: "22px" }}
                        >
                          {slide.heroCTAButtons.slice(2, 4).map((button) => (
                            <CTAButton key={button.id} title={button.title} />
                          ))}
                        </Grid>
                      </Grid>

                      <Grid container flexDirection={"row"} gap={"10px"}>
                        {slide.mainButtons.map((btn, idx) => (
                          <Button
                            key={idx}
                            variant="contained"
                            sx={{
                              bgcolor:
                                btn.variant === "blue" ? "#0273BD" : "#ffffff",
                              color:
                                btn.variant === "blue" ? "white" : "#0273BD",
                              textTransform: "capitalize",
                              height: "42px",
                              borderRadius: "8px",
                              fontWeight: 600,
                            }}
                            endIcon={
                              <ArrowRightIcon
                                sx={{
                                  color:
                                    btn.variant === "blue"
                                      ? "white"
                                      : "#0273BD",
                                }}
                              />
                            }
                          >
                            {btn.title}
                          </Button>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    alignItems={"center"}
                    flex={1}
                    sx={{ position: "relative" }}
                    justifyContent={{ xs: "center", lg: "flex-end" }}
                  >
                    {/* <Image
                      src={slide.spiralImage}
                      alt="Spiral"
                      width={600}
                      height={600}
                      style={{
                        objectFit: "contain",
                        width: "1000px",
                        height: "850px",
                        position: "absolute",
                        top: "-75%",
                        left: "35%",
                        opacity: 0.5,
                      }}
                    /> */}
                    <Image
                      src={slide.spiralImage}
                      alt="Spiral"
                      width={600}
                      height={600}
                      className="spiral-image"
                      style={{
                        objectFit: "contain",
                        position: "absolute",
                        opacity: 0.5,
                      }}
                    />

                    <Image
                      src={slide.heroImage}
                      alt="Hero"
                      width={539}
                      height={334}
                      style={{
                        objectFit: "contain",
                        width: "600px",
                        height: "100%",
                        position: "relative",
                        zIndex: 1,
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Owl Carousel style dots */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid
                    container
                    gap="6px"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ width: "auto" }}
                  >
                    {slidesData.map((_, dotIndex) => {
                      const isActive = activeIndex === dotIndex;
                      return (
                        <Box
                          key={dotIndex}
                          onClick={() => {
                            swiperRef.current?.slideTo(dotIndex);
                            setActiveIndex(dotIndex);
                          }}
                          sx={{
                            cursor: "pointer",
                            bgcolor: isActive ? "#0273BD" : "transparent",
                            border: "1px solid #0273BD",
                            borderRadius: "999px",
                            height: "12px",
                            transition: "all 0.3s ease",
                            width: isActive ? "100px" : "12px",
                          }}
                        />
                      );
                    })}
                  </Grid>
                  {/* Navigation Buttons */}
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap="20px"
                    sx={{ mt: -2 }}
                  >
                    <Button
                      className="custom-swiper-prev-btn"
                      variant="contained"
                      sx={{
                        bgcolor: "white",
                        color: "#0273BD",
                        textTransform: "capitalize",
                        borderRadius: "8px",
                        fontWeight: 600,
                      }}
                      onClick={handlePrevSlide}
                    >
                      <ArrowBackIcon />
                    </Button>
                    <Button
                      className="custom-swiper-next-btn"
                      variant="contained"
                      sx={{
                        bgcolor: "#0273BD",
                        color: "white",
                        textTransform: "capitalize",
                        borderRadius: "8px",
                        fontWeight: 600,
                      }}
                      onClick={handleNextSlide}
                    >
                      <ArrowForwardIcon />
                    </Button>
                  </Grid>
                </Box>
              </Container>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};

export default Hero;
