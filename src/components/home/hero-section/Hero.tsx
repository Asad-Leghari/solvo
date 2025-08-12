"use client";

import images from "@/assets/images";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingButton from "@/components/home/HeadingButton";
import { heroCTAButtons } from "@/domain";
import CTAButton from "./CTABtn";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <Grid
          container
          flexDirection={{ xs: "column", md: "row" }}
          gap={"12px"}
          px={"175px"}
          pt={"63px"}
          pb={"40px"}
          width={"100%"}
          sx={{
            backgroundImage:
              "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
          }}
        >
          <Grid
            container
            flexDirection={{ xs: "column", md: "row" }}
            gap={"12px"}
            justifyContent={"center"}
            flexWrap={"nowrap"}
            height={"375px"}
          >
            <Grid
              container
              flexDirection={"column"}
              flexWrap={"nowrap"}
              flex={1}
            >
              <Grid container flexDirection={"column"} gap={"8px"}>
                <HeadingButton title="Our Most In-Demand CFD Services" />
                <Typography variant="h3" fontWeight={600}>
                  Computation Fluid <br /> Dynamics-CFD
                </Typography>
              </Grid>
              <Grid container flexDirection={"column"} gap={"25px"}>
                <Grid
                  container
                  flexDirection={"column"}
                  flexWrap={"nowrap"}
                  mt={"26px"}
                >
                  <Grid
                    container
                    flexDirection={"row"}
                    justifyContent={"start"}
                    flexWrap={"nowrap"}
                    gap={"12px"}
                  >
                    {heroCTAButtons.slice(0, 2).map((button) => (
                      <CTAButton key={button.id} title={button.title} />
                    ))}
                  </Grid>
                  <Grid
                    container
                    flexDirection={"row"}
                    justifyContent={"start"}
                    flexWrap={"nowrap"}
                    gap={"22px"}
                  >
                    {heroCTAButtons.slice(2, 4).map((button) => (
                      <CTAButton key={button.id} title={button.title} />
                    ))}
                  </Grid>
                </Grid>
                <Grid container flexDirection={"row"} gap={"10px"}>
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
                    }}
                    endIcon={<ArrowRightIcon sx={{ color: "white" }} />}
                  >
                    Place your order
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#ffffff",
                      color: "#0273BD",
                      textTransform: "capitalize",
                      height: "42px",
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                    endIcon={<ArrowRightIcon sx={{ color: "#0273BD" }} />}
                  >
                    Our Services
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid flex={1} sx={{ position: "relative" }}>
              {/* Spiral behind (first in DOM) */}
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                <Image
                  src={images.Spiral}
                  alt="Spiral"
                  width={500}
                  height={500}
                  style={{
                    objectFit: "contain",
                    width: "1000px",
                    height: "600px",
                    position: "absolute",
                    top: "-45%",
                    left: "5%",
                  }}
                />
              </Box>

              {/* Hero in front */}
              <Image
                src={images.Hero}
                alt="Hero"
                width={539}
                height={334}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                  position: "relative", // keeps it above without breaking layout
                  zIndex: 1,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        <Grid
          container
          flexDirection={{ xs: "column", md: "row" }}
          gap={"12px"}
          px={"175px"}
          pt={"63px"}
          pb={"40px"}
          width={"100%"}
          sx={{
            backgroundImage:
              "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
          }}
        >
          <Grid
            container
            flexDirection={{ xs: "column", md: "row" }}
            gap={"12px"}
            justifyContent={"center"}
            flexWrap={"nowrap"}
            height={"375px"}
          >
            <Grid
              container
              flexDirection={"column"}
              flexWrap={"nowrap"}
              flex={1}
            >
              <Grid container flexDirection={"column"} gap={"8px"}>
                <HeadingButton title="Our Most In-Demand CFD Services" />
                <Typography variant="h3" fontWeight={600}>
                  Computation Fluid <br /> Dynamics-CFD
                </Typography>
              </Grid>
              <Grid container flexDirection={"column"} gap={"25px"}>
                <Grid
                  container
                  flexDirection={"column"}
                  flexWrap={"nowrap"}
                  mt={"26px"}
                >
                  <Grid
                    container
                    flexDirection={"row"}
                    justifyContent={"start"}
                    flexWrap={"nowrap"}
                    gap={"12px"}
                  >
                    {heroCTAButtons.slice(0, 2).map((button) => (
                      <CTAButton key={button.id} title={button.title} />
                    ))}
                  </Grid>
                  <Grid
                    container
                    flexDirection={"row"}
                    justifyContent={"start"}
                    flexWrap={"nowrap"}
                    gap={"22px"}
                  >
                    {heroCTAButtons.slice(2, 4).map((button) => (
                      <CTAButton key={button.id} title={button.title} />
                    ))}
                  </Grid>
                </Grid>
                <Grid container flexDirection={"row"} gap={"10px"}>
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
                    }}
                    endIcon={<ArrowRightIcon sx={{ color: "white" }} />}
                  >
                    Place your order
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#ffffff",
                      color: "#0273BD",
                      textTransform: "capitalize",
                      height: "42px",
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                    endIcon={<ArrowRightIcon sx={{ color: "#0273BD" }} />}
                  >
                    Our Services
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid flex={1} sx={{ position: "relative" }}>
              {/* Spiral behind (first in DOM) */}
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                <Image
                  src={images.Spiral}
                  alt="Spiral"
                  width={500}
                  height={500}
                  style={{
                    objectFit: "contain",
                    width: "1000px",
                    height: "600px",
                    position: "absolute",
                    top: "-45%",
                    left: "5%",
                  }}
                />
              </Box>

              {/* Hero in front */}
              <Image
                src={images.Hero}
                alt="Hero"
                width={539}
                height={334}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                  position: "relative", // keeps it above without breaking layout
                  zIndex: 1,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        <Grid
          container
          flexDirection={{ xs: "column", md: "row" }}
          gap={"12px"}
          px={"175px"}
          pt={"63px"}
          pb={"40px"}
          width={"100%"}
          sx={{
            backgroundImage:
              "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
          }}
        >
          <Grid
            container
            flexDirection={{ xs: "column", md: "row" }}
            gap={"12px"}
            justifyContent={"center"}
            flexWrap={"nowrap"}
            height={"375px"}
          >
            <Grid
              container
              flexDirection={"column"}
              flexWrap={"nowrap"}
              flex={1}
            >
              <Grid container flexDirection={"column"} gap={"8px"}>
                <HeadingButton title="Our Most In-Demand CFD Services" />
                <Typography variant="h3" fontWeight={600}>
                  Computation Fluid <br /> Dynamics-CFD
                </Typography>
              </Grid>
              <Grid container flexDirection={"column"} gap={"25px"}>
                <Grid
                  container
                  flexDirection={"column"}
                  flexWrap={"nowrap"}
                  mt={"26px"}
                >
                  <Grid
                    container
                    flexDirection={"row"}
                    justifyContent={"start"}
                    flexWrap={"nowrap"}
                    gap={"12px"}
                  >
                    {heroCTAButtons.slice(0, 2).map((button) => (
                      <CTAButton key={button.id} title={button.title} />
                    ))}
                  </Grid>
                  <Grid
                    container
                    flexDirection={"row"}
                    justifyContent={"start"}
                    flexWrap={"nowrap"}
                    gap={"22px"}
                  >
                    {heroCTAButtons.slice(2, 4).map((button) => (
                      <CTAButton key={button.id} title={button.title} />
                    ))}
                  </Grid>
                </Grid>
                <Grid container flexDirection={"row"} gap={"10px"}>
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
                    }}
                    endIcon={<ArrowRightIcon sx={{ color: "white" }} />}
                  >
                    Place your order
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#ffffff",
                      color: "#0273BD",
                      textTransform: "capitalize",
                      height: "42px",
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                    endIcon={<ArrowRightIcon sx={{ color: "#0273BD" }} />}
                  >
                    Our Services
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid flex={1} sx={{ position: "relative" }}>
              {/* Spiral behind (first in DOM) */}
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                <Image
                  src={images.Spiral}
                  alt="Spiral"
                  width={500}
                  height={500}
                  style={{
                    objectFit: "contain",
                    width: "1000px",
                    height: "600px",
                    position: "absolute",
                    top: "-45%",
                    left: "5%",
                  }}
                />
              </Box>

              {/* Hero in front */}
              <Image
                src={images.Hero}
                alt="Hero"
                width={539}
                height={334}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                  position: "relative", // keeps it above without breaking layout
                  zIndex: 1,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
