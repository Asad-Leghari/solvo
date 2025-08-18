"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeadingButton from "../HeadingButton";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { slidesData } from "@/domain/home";
import { reviewsData } from "./Reviews";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SlidesComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveSlide((prev) => (prev + 1) % slidesData.length);
  //   }, 7000);

  //   return () => clearInterval(interval);
  // }, []);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length
    );
  };

  const currentSlide = reviewsData[activeSlide];

  return (
    <Grid
      container
      flexDirection={"row"}
      gap={"10px"}
      width={"100%"}
      flexWrap={"nowrap"}
      py={2}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "40px", md: "0px" },
          width: "100%",
          // border: "1px solid red",
        }}
      >
        {/* Animate Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide} // important for animation
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ display: "flex", width: "100%" }}
          >
            {/* Text Section */}
            <Grid
              container
              flexDirection={"column"}
              gap={"40px"}
              flex={1.5}
              justifyContent={"start"}
              height={"450px"}
            >
              <HeadingButton title={currentSlide.title} />
              <Typography variant="h5">{currentSlide.heading}</Typography>
              <Typography variant="body1">
                {currentSlide.description}
              </Typography>
              <Box>
                <Typography variant="h5">{currentSlide.clientName}</Typography>
                <Typography variant="h6" color="#0273BD">
                  {currentSlide.designation}
                </Typography>
              </Box>
            </Grid>

            {/* Image Section */}
            <Grid
              container
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
                style={{
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Indicators */}
      <Grid
        container
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"16px"}
      >
        <ArrowDropUpIcon
          sx={{ fontSize: "28px", color: "#0273BD", cursor: "pointer" }}
          onClick={() => handlePrevSlide}
        />
        {slidesData.map((_, idx) => (
          <Box
            key={idx}
            onClick={() => setActiveSlide(idx)}
            sx={{
              width: "8px",
              height: "70px",
              borderRadius: "8px",
              bgcolor: idx === activeSlide ? "#0273BD" : "#DFE8FC",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
        <ArrowDropDownIcon
          sx={{ fontSize: "28px", color: "#0273BD", cursor: "pointer" }}
          onClick={handleNextSlide}
        />
      </Grid>
    </Grid>
  );
};

export default SlidesComponent;
