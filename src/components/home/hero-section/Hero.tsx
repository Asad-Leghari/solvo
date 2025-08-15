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
    heading: "Computation Fluid <br /> Dynamics - CFD",
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
    heroImage: images.CFD,
  },
  {
    headingButtonTitle: "Our Most In-Demand FEA Services",
    heading: "Finite Element<br /> Analysis - FEA",

    heroCTAButtons: [
      { id: 1, title: "Fatigue and Durability Testing" },
      { id: 2, title: "Fluid Structure Interaction (FSI)" },
      { id: 3, title: "Structural Stress Analysis" },
      { id: 4, title: "VOF - Multiphase Analysis" },
    ],
    mainButtons: [
      { title: "Place Your Order", variant: "blue" },
      { title: "Our Services", variant: "white" },
    ],
    spiralImage: images.Spiral,
    heroImage: images.FEA,
  },
  {
    headingButtonTitle: "Our Most In-Demand PFO Services",
    heading: "2D/3D CAD Modeling & <br /> Rendering",
    heroCTAButtons: [
      { id: 1, title: "3D Product Design and Visualization" },
      { id: 2, title: "Reverse Engineering" },
      { id: 3, title: "Mechanical Part Design" },
      { id: 4, title: "Sheet Metal Design" },
    ],
    mainButtons: [
      { title: "Place Your Order", variant: "blue" },
      { title: "Our Services", variant: "white" },
    ],
    spiralImage: images.Spiral,
    heroImage: images.CAD,
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
        style={{
          backgroundImage:
            "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Grid
              container
              flexDirection={{ xs: "column", md: "row" }}
              gap={"12px"}
              width={"100%"}
              // sx={{
              //   backgroundImage:
              //     "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
              // }}
              // border={"1px solid red"}
              mb={"30px"}
            >
              <Box
                sx={{
                  pt: { xs: "63px", md: "63px" },
                  px: { xs: "10px", lg: "300px" },
                }}
                width={"100%"}
              >
                <Grid
                  container
                  flexDirection={{ xs: "column", lg: "row" }}
                  gap={"12px"}
                  justifyContent={"center"}
                  flexWrap={"nowrap"}
                  size={12}
                >
                  <Grid
                    container
                    flexDirection={"column"}
                    flexWrap={"nowrap"}
                    flex={1}
                  >
                    <Grid container flexDirection={"column"} gap={"8px"}>
                      <HeadingButton title={slide.headingButtonTitle} />
                      <Typography
                        variant="h3"
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
                        // border={"1px solid red"}
                        size={12}
                      >
                        <Grid
                          container
                          flexDirection={"row"}
                          justifyContent={"start"}
                          // gap={"12px"}
                        >
                          {slide.heroCTAButtons.slice(0, 2).map((button) => (
                            <CTAButton key={button.id} title={button.title} />
                          ))}
                        </Grid>
                        <Grid
                          container
                          flexDirection={"row"}
                          justifyContent={"start"}
                          // gap={{ xs: "12px", sm: "22px" }}
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
                        right: 0,
                      }}
                    />
                    <Box
                      sx={{
                        padding: "10px",
                        borderRadius: "12px",
                        bgcolor: "#ffffff",
                        zIndex: 9999,
                        border: "1px solid #0273BD",
                        height: "334px",
                      }}
                    >
                      <Image
                        src={slide.heroImage}
                        alt="Hero"
                        width={539}
                        height={334}
                        style={{
                          objectFit: "contain",
                          width: "539px",
                          height: "100%",
                          position: "relative",
                          zIndex: 1,
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </SwiperSlide>
        ))}
        {/* Owl Carousel style dots */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: "99999999",
            px: { xs: 2, md: "300px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              zIndex: 999999999,
              justifyContent: "space-between",
              // mt: { xs: -5, md: -12 },
              paddingBottom: { xs: 3, md: 10 },
              width: "100%",
            }}
          >
            <Grid
              container
              gap="6px"
              justifyContent="center"
              alignItems="center"
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
                      height: "10px",
                      transition: "all 0.3s ease",
                      width: isActive
                        ? { xs: "55px", md: "100px" } // active: 55px mobile, 100px desktop
                        : { xs: "10px", md: "10px" }, // inactive: 10px mobile, 12px desktop
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
                  width: { xs: 32, md: "fit-content" }, // 32px on mobile, auto on larger
                  height: { xs: 32, md: "fit-cotent" }, // 32px on mobile, auto on larger
                  minWidth: { xs: 32, md: "unset" }, // prevent MUI's default min width
                }}
                onClick={handlePrevSlide}
              >
                <ArrowBackIcon sx={{ fontSize: { xs: 18, md: "inherit" } }} />
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
                  width: { xs: 32, md: "fit-content" }, // 32px on mobile, auto on larger
                  height: { xs: 32, md: "fit-cotent" }, // 32px on mobile, auto on larger
                  minWidth: { xs: 32, md: "unset" }, // prevent MUI's default min width
                }}
                onClick={handleNextSlide}
              >
                <ArrowForwardIcon
                  sx={{ fontSize: { xs: 18, md: "inherit" } }}
                />
              </Button>
            </Grid>
          </Box>
        </Box>
      </Swiper>
    </Grid>
  );
};

export default Hero;
