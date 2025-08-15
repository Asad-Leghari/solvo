"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import HeadingButton from "../HeadingButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import images from "@/assets/images";
import { slidesData } from "@/domain/home";

const Information = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length
    );
  };

  const currentSlide = slidesData[activeSlide];

  return (
    <Grid
      container
      flexDirection={"column"}
      alignItems={"start"}
      gap={"10px"}
      bgcolor={"#ffffff"}
      borderRadius={"0 0 29px 29px"}
      sx={{
        boxShadow: "0px 24px 34px rgba(0, 0, 0, 0.11)",
        zIndex: 3,
        backgroundImage: `url(${images.InfoBg2.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          py: "50px",
        }}
      >
        <HeadingButton title={currentSlide.headingButtonTitle} />
        <Typography variant="h4" textAlign={"start"} mt={"8px"}>
          {currentSlide.heading}{" "}
          <span style={{ color: "#0273BD" }}>{currentSlide.highlight}</span>
        </Typography>
        <Grid
          container
          flexDirection={"row"}
          justifyContent={{ xs: "center", md: "space-between" }}
          size={12}
          mt={"10px"}
          sx={{
            backgroundImage: `url(${images.InfoBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid
            container
            flexDirection={"column"}
            gap={"8px"}
            flex={1}
            alignItems={{ xs: "center", md: "start" }}
          >
            <Typography variant="h6" width={"100%"}>
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
                  startIcon={<ArrowForwardIcon sx={{ color: "black" }} />}
                >
                  {button}
                </Button>
              ))}
            </Grid>
            <Image
              src={currentSlide.leftSection.image}
              alt=""
              width={250}
              height={350}
              style={{ objectFit: "contain" }}
            />
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
              alignItems={"center"}
            >
              <Typography variant="h6" textAlign={"left"} width={"100%"}>
                {currentSlide.rightSection.title}
              </Typography>
              <Grid container flexDirection={"row"} gap={"16px"}>
                {currentSlide.rightSection.buttons.map((button, idx) => (
                  <Button
                    key={idx}
                    variant="text"
                    sx={{ color: "black" }}
                    startIcon={<ArrowForwardIcon sx={{ color: "black" }} />}
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
              >
                <Image
                  src={currentSlide.rightSection.image}
                  alt=""
                  width={350}
                  height={350}
                  style={{ objectFit: "contain" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
      </Container>
    </Grid>
  );
};

export default Information;
