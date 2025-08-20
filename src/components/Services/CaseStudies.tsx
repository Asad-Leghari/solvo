"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import HeadingButton from "../home/HeadingButton";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Image from "next/image";
import images from "@/assets/images";
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

const slidesData = [
  {
    title:
      "FEA Analysis to Enhancing Stiffness and Fatigue Life of Rubber-to-Metal Bonded Parts",
    description:
      "Our team conducted a detailed Finite Element Analysis (FEA) to optimize the stiffness and extend the fatigue life of rubber-to-metal bonded components. Through fea simulations and material behavior studies, we identified critical stress regions, implemented design improvements, and ensured long term performance under real world loading conditions.",
    buttonText: "View Case Study",
    image: images.case_studies.CS1,
    width: "450px",
    height: "250px",
    logo: images.case_studies.BP,
    lwidth: "250px",
    lheight: "74px",
  },
  {
    title:
      "CFD Analysis and Airflow Optimization for Industrial Dehydrator System",
    description:
      "Using Computational Fluid Dynamics (CFD) simulations, we analyzed and optimized airflow patterns within an industrial dehydrator system. The study identified bottlenecks, improved airflow, heat distribution and enhanced overall drying efficiency resulting in better product quality and reduced energy consumption.",
    buttonText: "View Case Study",
    image: images.case_studies.CS2,
    width: "450px",
    height: "250px",
    logo: images.CSImage,
    lwidth: "250px",
    lheight: "74px",
  },
  {
    title:
      "Design Optimizing and CFD Analysis for Radial Vortex Flow Controls Device (VFC)",
    description:
      "We have performed advanced Computational Fluid Dynamics (CFD) analysis to optimize the design of a radial vortex flow control device. By refining flow paths and reducing pressure losses, we enhanced hydraulic efficiency, improved operational stability and ensured reliable performance under varying system conditions.",
    buttonText: "View Case Study",
    image: images.case_studies.CS3,
    width: "450px",
    height: "250px",
    logo: images.case_studies.Logo3,
    lwidth: "250px",
    lheight: "74px",
  },
];

const CaseStudies = () => {
  const swiperRef = useRef<SwiperCore>(null); // Reference to Swiper instance
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextSlide = () => {
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
    <Grid
      container
      flexDirection={"column"}
      alignItems={"center"}
      width={"99vw"}
      sx={{
        backgroundImage:
          "linear-gradient(0deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 100%, rgba(136, 216, 232, 0.53) 100%)",
      }}
      gap={"20px"}
    >
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        gap={"10px"}
        mt={"40px"}
      >
        <HeadingButton title="Case Studies" />
        <Typography variant="h5" textAlign={"center"}>
          Details of{" "}
          <span style={{ color: "#0273BD" }}>
            Our Products <br />
          </span>
        </Typography>
        <Typography variant="body1" textAlign={"center"}>
          See how Solvo Products has helped its clients achieve their vision{" "}
          <br /> of digital innovation.
        </Typography>
      </Grid>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination, FreeMode, Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box display="flex" justifyContent="center" px={{ xs: 2 }}>
              <Grid
                size={12}
                container
                flexDirection={{ xs: "column", md: "row" }}
                border={"1px solid #0273BD"}
                p={{ xs: "8px", md: "50px" }}
                borderRadius={"8px"}
                sx={{
                  width: "1129px", // ✅ fixed width
                  height: "550px", // ✅ fixed height
                  position: "relative",
                }}
              >
                {/* Left Content */}
                <Grid
                  flexDirection={"column"}
                  container
                  gap={"24px"}
                  width={"100%"}
                  size={{ xs: 12, lg: 7 }}
                  justifyContent={"space-between"}
                >
                  <Image
                    src={slide.logo}
                    alt="cs-image"
                    width={150}
                    height={74}
                    style={{
                      width: slide.lwidth,
                      height: slide.lheight,
                      objectFit: "contain",
                    }}
                  />
                  <Typography variant="h5" fontWeight={600} textAlign={"left"}>
                    {slide.title}
                  </Typography>
                  <Typography variant="body1" textAlign={"left"}>
                    {slide.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#0273BD",
                      color: "white",
                      textTransform: "capitalize",
                      height: "42px",
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: "14px",
                      width: "fit-content",
                      mt: 1,
                    }}
                    endIcon={<ArrowRightIcon sx={{ color: "white" }} />}
                  >
                    {slide.buttonText}
                  </Button>
                </Grid>

                {/* Right Image */}
                <Grid
                  size={{ xs: 12, lg: 5 }}
                  container
                  justifyContent={{ xs: "center", md: "end" }}
                  alignItems="center"
                >
                  <Image
                    src={slide.image}
                    alt="Description"
                    width={250}
                    height={250}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: slide.height,
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
        ))}
        {/* Owl Carousel style dots */}
        {/* Owl Carousel style dots + nav buttons */}
        <Box
          sx={{
            // width: "1123px",
            display: "flex",
            alignItems: "center",
            // border: "2px solid black",
            justifyContent: "center",
            py: "20px",
            position: "relative",
            zIndex: "99999999",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "1123px",
              // maxWidth: "1129px", // ✅ match the case study box width
            }}
          >
            {/* ✅ Dots aligned with start of the box */}
            <Grid
              container
              gap="6px"
              justifyContent="flex-start"
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
                      height: { xs: "10px", md: "12px" },
                      transition: "all 0.3s ease",
                      width: isActive
                        ? { xs: "55px", md: "100px" }
                        : { xs: "10px", md: "12px" },
                    }}
                  />
                );
              })}
            </Grid>

            {/* ✅ Buttons aligned with end of the box */}
            <Grid
              container
              justifyContent="flex-end"
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
                  width: { xs: 32, md: "fit-content" },
                  height: { xs: 32, md: "fit-content" },
                  minWidth: { xs: 32, md: "unset" },
                }}
                onClick={handlePrevSlide}
              >
                <ArrowBackIcon sx={{ fontSize: { xs: 18, md: "auto" } }} />
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
                  width: { xs: 32, md: "fit-content" },
                  height: { xs: 32, md: "fit-content" },
                  minWidth: { xs: 32, md: "unset" },
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

export default CaseStudies;
