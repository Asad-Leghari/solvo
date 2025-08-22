"use client";
import {
  Box,
  Grid,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import HeadingButton from "../HeadingButton";
import Image from "next/image";
import { slidesData } from "@/domain/home";
import { reviewsData } from "./Reviews";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const SlidesComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState<any>("left");
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const handleNextSlide = () => {
    setDirection("left");
    setActiveSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setDirection("right");
    setActiveSlide(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length
    );
  };

  const currentSlide = reviewsData[activeSlide];

  return (
    <Grid
      container
      flexDirection={isSmall ? "column" : "row"}
      gap={"10px"}
      width={"100%"}
      flexWrap={"nowrap"}
      // border={"1px solid red"}
      sx={{px: { xs: 2, md: "60px", xl: "300px" }}}
    >
      <Slide
        key={activeSlide}
        in={true}
        direction={direction}
        mountOnEnter
        unmountOnExit
        timeout={1500}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "40px", md: "0px" },
            width: "100%",
          }}
        >
          {/* Text Section */}
          <Stack
            gap={"10px"}
            flex={1.5}
            justifyContent={"start"}
            // height={"450px"}
          >
            <HeadingButton title={currentSlide.title} />
            <Typography variant="h5">{currentSlide.heading}</Typography>
            <Typography variant="body1" py={"10px"}>
              {currentSlide.description}
            </Typography>
            <Box>
              <Typography variant="h6" fontWeight={600} mt={"10px"}>
                {currentSlide.clientName}
              </Typography>
              <Typography variant="body1" fontWeight={500} color="#0273BD">
                {currentSlide.designation}
              </Typography>
            </Box>
          </Stack>

          {/* Image Section */}
          <Stack
            flexDirection={"row"}
            flex={1}
            justifyContent={{ xs: "center", md: "end" }}
            alignItems={"center"}
            pr={{ xs: "0px", md: "50px" }}
          >
            <Image
              src={currentSlide.image}
              alt="Client"
              width={300}
              height={300}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </Stack>
        </Box>
      </Slide>

      {/* Indicators */}
      <Grid
        container
        flexDirection={isSmall ? "row" : "column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"0px"}
      >
        {!isSmall ? (
          <ArrowDropUpIcon
            sx={{ fontSize: "28px", color: "#0273BD", cursor: "pointer" }}
            onClick={handlePrevSlide}
          />
        ) : (
          <ArrowLeftIcon
            sx={{ fontSize: "28px", color: "#0273BD", cursor: "pointer" }}
            onClick={handlePrevSlide}
          />
        )}

        <Grid
          container
          flexDirection={isSmall ? "row" : "column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"8px"}
        >
          {slidesData.map((_, idx) => (
            <Box
              key={idx}
              onClick={() => setActiveSlide(idx)}
              sx={{
                width: isSmall ? "85px" : "8px",
                height: isSmall ? "8px" : "85px",
                borderRadius: "8px",
                bgcolor: idx === activeSlide ? "#0273BD" : "#DFE8FC",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </Grid>

        {!isSmall ? (
          <ArrowDropDownIcon
            sx={{ fontSize: "28px", color: "#0273BD", cursor: "pointer" }}
            onClick={handleNextSlide}
          />
        ) : (
          <ArrowRightIcon
            sx={{ fontSize: "28px", color: "#0273BD", cursor: "pointer" }}
            onClick={handleNextSlide}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default SlidesComponent;
