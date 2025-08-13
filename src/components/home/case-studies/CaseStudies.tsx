"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import HeadingButton from "../HeadingButton";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import Image from "next/image";
import images from "@/assets/images";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const CaseStudies = () => {
  return (
    <Grid
      container
      flexDirection={"column"}
      alignItems={"center"}
      width={"100%"}
      // px={"175px"}
      // pb={"40px"}
      sx={{
        // backgroundImage:
        //   "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
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
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Container maxWidth="xl">
            <Grid
              size={12}
              container
              flexDirection={{ xs: "column", md: "row" }}
              border={"1px solid #0273BD"}
              p={{ xs: "8px", md: "50px" }}
              marginBottom={"80px"}
              borderRadius={"8px"}
              gap={{ xs: "40px", md: "0px" }}
            >
              <Grid
                flexDirection={"column"}
                container
                gap={"24px"}
                width={"100%"}
                flex={1}
                justifyContent={"space-between"}
              >
                <Typography variant="h4" fontWeight={600} textAlign={"left"}>
                  CFD Analysis of Supersonic Tandem <br /> vs. Single Wing
                  Configurations in Aircraft <br /> Design
                </Typography>
                <Typography variant="h6" textAlign={"justify"}>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and orem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type
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
                  View Case Study
                </Button>
              </Grid>
              <Grid
                flex={1}
                container
                justifyContent={{ xs: "center", md: "end" }}
                alignItems="center"
                //   border={"1px solid black"}
              >
                <Image
                  src={images.FFPic}
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
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container maxWidth="xl">
            <Grid
              size={12}
              container
              flexDirection={{ xs: "column", md: "row" }}
              border={"1px solid #0273BD"}
              p={{ xs: "8px", md: "50px" }}
              marginBottom={"80px"}
              borderRadius={"8px"}
              gap={{ xs: "40px", md: "0px" }}
            >
              <Grid
                flexDirection={"column"}
                container
                gap={"24px"}
                width={"100%"}
                flex={1}
                justifyContent={"space-between"}
              >
                <Typography variant="h4" fontWeight={600} textAlign={"left"}>
                  CFD Analysis of Supersonic Tandem <br /> vs. Single Wing
                  Configurations in Aircraft <br /> Design
                </Typography>
                <Typography variant="h6" textAlign={"justify"}>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and orem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type
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
                  View Case Study
                </Button>
              </Grid>
              <Grid
                flex={1}
                container
                justifyContent={{ xs: "center", md: "end" }}
                alignItems="center"
                //   border={"1px solid black"}
              >
                <Image
                  src={images.FFPic}
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
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container maxWidth="xl">
            <Grid
              size={12}
              container
              flexDirection={{ xs: "column", md: "row" }}
              border={"1px solid #0273BD"}
              p={{ xs: "8px", md: "50px" }}
              marginBottom={"80px"}
              borderRadius={"8px"}
              gap={{ xs: "40px", md: "0px" }}
            >
              <Grid
                flexDirection={"column"}
                container
                gap={"24px"}
                width={"100%"}
                flex={1}
                justifyContent={"space-between"}
              >
                <Typography variant="h4" fontWeight={600} textAlign={"left"}>
                  CFD Analysis of Supersonic Tandem <br /> vs. Single Wing
                  Configurations in Aircraft <br /> Design
                </Typography>
                <Typography variant="h6" textAlign={"justify"}>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and orem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type
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
                  View Case Study
                </Button>
              </Grid>
              <Grid
                flex={1}
                container
                justifyContent={{ xs: "center", md: "end" }}
                alignItems="center"
                //   border={"1px solid black"}
              >
                <Image
                  src={images.FFPic}
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
          </Container>
        </SwiperSlide>
      </Swiper>
    </Grid>
  );
};

export default CaseStudies;
