"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeadingButton from "../HeadingButton";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { slidesData } from "@/domain/home";
import { reviewsData } from "./Reviews";

const SlidesComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
          py: "93.5px",
          width: "100%",
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
              flex={1}
              justifyContent={"start"}
              height={"450px"}
            >
              <HeadingButton title={currentSlide.title} />
              <Typography variant="h4">{currentSlide.heading}</Typography>
              <Typography variant="body1" pb={"20px"}>
                {currentSlide.description}
              </Typography>
              <Box>
                <Typography variant="h4">{currentSlide.clientName}</Typography>
                <Typography variant="h5" color="#0273BD">
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
                width={350}
                height={350}
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
        gap={"16px"}
      >
        {slidesData.map((_, idx) => (
          <Box
            key={idx}
            onClick={() => setActiveSlide(idx)}
            sx={{
              width: "8px",
              height: "110px",
              borderRadius: "8px",
              bgcolor: idx === activeSlide ? "#0273BD" : "#DFE8FC",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default SlidesComponent;
