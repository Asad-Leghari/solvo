"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import images from "@/assets/images";
import { slidesData } from "@/domain/home";
import { motion, AnimatePresence } from "framer-motion";
import NewSlideCard from "./NewSlideCard";

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
            <NewSlideCard currentSlide={currentSlide} />
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
                  bgcolor: idx === activeSlide ? "#0273BD" : "#DFE8FC",
                }}
              />
            ))}
          </Grid>
        </Grid>
      </Box>
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
            left: "300px",
            width: "300px",
            height: "300px",
            opacity: 0.5,
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
            top: 0,
            right: "300px",
            opacity: 0.5,
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
            bottom: "100px",
            left: "300px",
            width: "250px",
            height: "250px",
          }}
        />
      </Box>
    </Grid>
  );
};

export default Information;
