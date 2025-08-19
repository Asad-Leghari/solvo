"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import HeadingButton from "../HeadingButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import images from "@/assets/images";
import { slidesData } from "@/domain/home";
import HelpIcon from "@mui/icons-material/Help";
import { motion, AnimatePresence } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Information = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNextSlide = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setDirection(-1);
    setActiveSlide(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const currentSlide = slidesData[activeSlide];

  return (
    <Grid
      container
      flexDirection={"column"}
      alignItems={"center"}
      gap={"10px"}
      bgcolor={"#ffffff"}
      borderRadius={"0 0 29px 29px"}
      sx={{
        boxShadow: "0px 24px 34px rgba(0, 0, 0, 0.11)",
        zIndex: 3,
        px: { xs: 2, lg: "300px" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          py: "50px",
          width: "100%",
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeSlide} // Important: re-mounts on slide change
            custom={direction} // Pass direction to variants
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <HeadingButton title={currentSlide.headingButtonTitle} />
            <Typography variant="h5" textAlign={"start"} mt={"8px"}>
              {currentSlide.heading}{" "}
              <span style={{ color: "#0273BD" }}>{currentSlide.highlight}</span>
            </Typography>
            <Grid
              container
              flexDirection={"row"}
              justifyContent={{ xs: "center", md: "space-between" }}
              size={12}
              mt={"10px"}
              sx={{ position: "relative" }}
            >
              <Grid
                container
                flexDirection={"column"}
                gap={"8px"}
                flex={1.5}
                alignItems={{ xs: "center", md: "start" }}
              >
                <Typography variant="h6" width={"100%"} fontWeight={600}>
                  {currentSlide.leftSection.title}
                </Typography>
                <Grid
                  container
                  flexDirection={"row"}
                  gap={{ xs: "8px", md: "16px" }}
                  width={"100%"}
                >
                  {currentSlide.leftSection.buttons.map((button, idx) => (
                    <Button
                      key={idx}
                      variant="text"
                      sx={{ color: "black" }}
                      startIcon={
                        <CheckCircleOutlineIcon sx={{ color: "#0273BD" }} />
                      }
                    >
                      {button}
                    </Button>
                  ))}
                </Grid>
                <Box py={2}>
                  <img
                    src={currentSlide.leftSection.image.src}
                    alt=""
                    style={{
                      objectFit: "contain",
                      zIndex: 222,
                      width: "260px",
                      height: "260px",
                    }}
                  />
                </Box>
              </Grid>
              <Grid
                container
                flexDirection={"column"}
                gap={"8px"}
                flex={1}
                alignItems={"end"}
                display={{ xs: "none", md: "flex" }}
              >
                <Grid
                  container
                  flexDirection={"column"}
                  gap={"8px"}
                  alignItems={"start"}
                  width={"100%"}
                  height={"100%"}
                >
                  <Grid
                    container
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      variant="h6"
                      textAlign={"left"}
                      width={"100%"}
                      flex={1}
                      fontWeight={600}
                    >
                      {currentSlide.rightSection.title}
                    </Typography>
                  </Grid>
                  <Grid container flexDirection={"row"} gap={"16px"}>
                    {currentSlide.rightSection.buttons.map((button, idx) => (
                      <Button
                        key={idx}
                        variant="text"
                        sx={{ color: "black" }}
                        startIcon={
                          <CheckCircleOutlineIcon sx={{ color: "#0273BD" }} />
                        }
                      >
                        {button}
                      </Button>
                    ))}
                  </Grid>
                  <Grid
                    container
                    flexDirection={"row"}
                    justifyContent={"start"}
                    size={12}
                    py={2}
                  >
                    <img
                      src={currentSlide.rightSection.image.src}
                      alt=""
                      style={{
                        objectFit: "contain",
                        zIndex: 222,
                        width:
                          currentSlide.rightSection.image === images.home.CH2
                            ? "400px"
                            : "260px",
                        height: "260px",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Box
                sx={{
                  position: "absolute",
                  top: "30%",
                  width: "100%",
                  zIndex: -1,
                }}
              >
                <img
                  src={images.home.DL.src}
                  alt="mid line"
                  // width={300}
                  // height={300}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Grid>
          </motion.div>
        </AnimatePresence>
        <Grid container flexDirection={"column"} width={"100%"} gap={"36px"}>
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            gap={"8px"}
            width={"100%"}
          >
            <Button
              variant="contained"
              sx={{
                width: "fit-content",
                height: "42px",
                bgcolor: "#FFFFFF",
                color: "primary.main",
              }}
              onClick={handlePrevSlide}
            >
              <ArrowBackIcon />
            </Button>
            <Button
              variant="contained"
              sx={{ width: "fit-content", height: "42px" }}
              onClick={handleNextSlide}
            >
              <ArrowForwardIcon />
            </Button>
          </Grid>
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"space-between"}
            gap={"10px"}
            size={12}
          >
            {slidesData.map((_, idx) => (
              <Box
                key={idx}
                sx={{
                  flex: 1,
                  height: "8px",
                  borderRadius: "8px",
                  bgcolor: idx === activeSlide ? "#0273BD" : "#DFE8FC",
                }}
              />
            ))}
          </Grid>
        </Grid>
      </Box>
      {/* top right */}
      <Box>
        <Image
          src={images.home.LTI}
          alt="img"
          width={300}
          height={300}
          style={{
            position: "absolute",
            top: 0,
            left: "200px",
            width: "300px",
            height: "300px",
            opacity: 0.5,
          }}
        />
      </Box>

      {/* top left */}
      <Box>
        <Image
          src={images.home.RTI}
          alt="img"
          width={300}
          height={300}
          style={{
            position: "absolute",
            top: 0,
            right: "200px",
            opacity: 0.5,
          }}
        />
      </Box>

      {/* bot right */}
      <Box>
        <Image
          src={images.home.LBI}
          alt="img"
          width={300}
          height={300}
          style={{
            position: "absolute",
            bottom: 0,
            left: "200px",
            width: "250px",
            height: "250px",
          }}
        />
      </Box>
    </Grid>
  );
};

export default Information;
