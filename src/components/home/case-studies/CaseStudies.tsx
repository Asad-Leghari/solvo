"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import HeadingButton from "../HeadingButton";
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
      "CFD Analysis of Supersonic Tandem vs. Single Wing Configurations in Aircraft",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " +
      "standard dummy text ever since the 1500s",
    buttonText: "View Case Study",
    image: images.FFPic,
  },
  {
    title:
      "Thermal Simulation of Compact Heat Exchanger Designs for Energy Systems",
    description:
      "Sample filler text serving only as layout content for design purposes. Placeholder text remains consistent with the " +
      "format and style used across the application sections",
    buttonText: "View Case Study",
    image: images.FFPic,
  },
  {
    title:
      "Structural Stress Testing of Bridge Components Using FEA Techniques",
    description:
      "This example content acts purely as non-functional text to preserve visual alignment. It mirrors the spacing and " +
      "line usage applied within this interface design template",
    buttonText: "View Case Study",
    image: images.FFPic,
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
      width={"100%"}
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
        <Typography variant="h6" textAlign={"center"}>
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
            <Box
              // maxWidth="xl"
              px={"300px"}
            >
              <Grid
                size={12}
                container
                flexDirection={{ xs: "column", md: "row" }}
                border={"1px solid #0273BD"}
                p={{ xs: "8px", md: "50px" }}
                marginBottom={"80px"}
                borderRadius={"8px"}
                gap={{ xs: "40px", md: "0px" }}
                sx={{
                  minHeight: "400px", // Ensure consistent minimum height
                  alignItems: "stretch", // Stretch content to fill height
                }}
              >
                <Grid
                  flexDirection={"column"}
                  container
                  gap={"24px"}
                  width={"100%"}
                  flex={1}
                  justifyContent={"space-between"}
                >
                  <div className="cs-image-container">
                    <Image
                      src={images.CSImage.src}
                      alt="cs-image"
                      width={200}
                      height={74}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "200px",
                        maxHeight: "74px",
                      }}
                    />
                    <style jsx>{`
                      .cs-image-container {
                        width: 200px;
                        height: 74px;
                      }

                      @media (max-width: 768px) {
                        .cs-image-container {
                          width: 175px;
                          height: 65px;
                        }
                      }
                    `}</style>
                  </div>
                  <Typography variant="h4" fontWeight={600} textAlign={"left"}>
                    {slide.title.split("<br />").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Typography>
                  <Typography variant="h6" textAlign={"justify"}>
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
                    }}
                    endIcon={<ArrowRightIcon sx={{ color: "white" }} />}
                  >
                    {slide.buttonText}
                  </Button>
                </Grid>
                <Grid
                  flex={1}
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
                      width: "250px",
                      height: "250px",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
        ))}
        {/* Owl Carousel style dots */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -60,
            paddingBottom: 20,
            position: "relative",
            zIndex: "99999999",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "1440px", // limit width on large screens
              px: { xs: 2, md: 5 },
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
                      height: { xs: "10px", md: "12px" },
                      transition: "all 0.3s ease",
                      width: isActive
                        ? { xs: "55px", md: "100px" } // active: 55px mobile, 100px desktop
                        : { xs: "10px", md: "12px" }, // inactive: 10px mobile, 12px desktop
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
        </div>
      </Swiper>
    </Grid>
  );
};

export default CaseStudies;
