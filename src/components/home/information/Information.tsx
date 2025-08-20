"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import images from "@/assets/images";
import { slidesData } from "@/domain/home";
import NewSlideCard from "./NewSlideCard";

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
import HeadingButton from "../HeadingButton";

const Information = () => {
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
      gap={"10px"}
      bgcolor={"#ffffff"}
      borderRadius={"0 0 29px 29px"}
      sx={{
        // boxShadow: "0px 24px 34px rgba(0, 0, 0, 0.11)",
        zIndex: 3,
        px: { xs: 2, md: "60px", xl: "300px" },
      }}
      width={"99vw"}
    >
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        gap={"10px"}
        mt={"40px"}
      >
        <HeadingButton title="Case Studies" />
      </Grid>
      <Box
        sx={{
          width: "100%",
          // overflow: "hidden",
          borderRadius: "12px",
          // border: "1px solid red",
          position: "relative",
        }}
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, FreeMode, Navigation]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="mySwiper"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <NewSlideCard currentSlide={slide} />;
            </SwiperSlide>
          ))}
        </Swiper>
        {/* toleft top */}
        <Box>
          <Image
            src={images.home.LTI}
            alt="img"
            width={300}
            height={300}
            style={{
              position: "absolute",
              top: 0,
              left: "0px",
              width: "150px",
              height: "150px",
              opacity: 1,
            }}
          />
        </Box>

        {/* right top  */}
        <Box>
          <Image
            src={images.home.RTI}
            alt="img"
            width={300}
            height={300}
            style={{
              position: "absolute",
              top: "-50px",
              right: "0",
              opacity: 1,
            }}
          />
        </Box>

        {/* left bot */}
        <Box>
          <Image
            src={images.home.LBI}
            alt="img"
            width={300}
            height={300}
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "250px",
              height: "250px",
            }}
          />
        </Box>
      </Box>
      <Grid
        container
        flexDirection={"column"}
        width={"100%"}
        gap={"36px"}
        // border={"1px solid red"}
      >
        <Grid container justifyContent="end" alignItems="center" gap="20px">
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
            <ArrowForwardIcon sx={{ fontSize: { xs: 18, md: "inherit" } }} />
          </Button>
        </Grid>
        <Grid
          container
          flexDirection={"row"}
          justifyContent={"space-between"}
          gap={"50px"}
          size={12}
        >
          {slidesData.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                flex: 1,
                height: "8px",
                borderRadius: "8px",
                bgcolor: idx === activeIndex ? "#0273BD" : "#DFE8FC",
              }}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Information;
