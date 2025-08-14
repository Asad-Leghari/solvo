import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import HeadingButton from "../HeadingButton";
import Image from "next/image";
import images from "@/assets/images";

const reviewsData = [
  {
    title: "Solvo's Premium",
    heading: (
      <>
        What our{" "}
        <span style={{ color: "#0273BD" }}>
          Clients Say <br />
        </span>
      </>
    ),
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    clientName: "John Doe",
    designation: "Founder & CEO",
    image: images.FFPic,
  },
  {
    title: "Solvo's Premium",
    heading: (
      <>
        Hear from our{" "}
        <span style={{ color: "#0273BD" }}>
          Happy Clients <br />
        </span>
      </>
    ),
    description:
      "Our collaboration with Solvo was exceptional. The team understood our vision and " +
      "delivered beyond expectations. Their professionalism and quality of work are unmatched.",
    clientName: "Jane Smith",
    designation: "Co-Founder",
    image: images.FFPic,
  },
  {
    title: "Solvo's Premium",
    heading: (
      <>
        Why clients{" "}
        <span style={{ color: "#0273BD" }}>
          Trust Us <br />
        </span>
      </>
    ),
    description:
      "Working with Solvo has been a seamless experience. From planning to execution, " +
      "they've been transparent, innovative, and reliable every step of the way.",
    clientName: "Michael Johnson",
    designation: "Managing Director",
    image: images.FFPic,
  },
];

const Reviews = () => {
  return (
    <Grid
      container
      flexDirection={"row"}
      justifyContent={"center"}
      width={"100%"}
      sx={{
        bgcolor: "#E6FBFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Spiral */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%) scaleX(-1)", // flip horizontally
          width: "400px", // smaller size
          height: "400px",
          backgroundImage: `url(${images.Spiral.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.3, // make it faint
          pointerEvents: "none", // so it doesn't block clicks
        }}
      />
      {/* Scroll container */}
      <Box
        sx={{
          overflowY: "auto",
          maxHeight: "500px",
          width: "100%",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#E6FBFF",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#0273BD",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#015a94",
          },
          "&::-webkit-scrollbar-button:single-button": {
            display: "none",
            width: 0,
            height: 0,
          },
          /* Firefox */
          // scrollbarWidth: "thin",
          scrollbarColor: "#0273BD #E6FBFF",
        }}
      >
        {reviewsData.map((review, index) => (
          <Container
            key={index}
            maxWidth="xl"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "40px", md: "0px" },
              justifyContent: "center",
              py: "93.5px",
              borderBottom:
                index !== reviewsData.length - 1 ? "1px solid #ccc" : "none",
            }}
          >
            <Grid
              container
              flexDirection={"column"}
              gap={"16px"}
              flex={1}
              justifyContent={"space-between"}
            >
              <HeadingButton title={review.title} />
              <Typography variant="h4" textAlign={"start"}>
                {review.heading}
              </Typography>
              <Typography
                variant="h6"
                textAlign={"justify"}
                pb={"20px"}
                width={"100%"}
              >
                {review.description}
              </Typography>
              <Box>
                <Typography variant="h4" textAlign={"start"}>
                  {review.clientName}
                </Typography>
                <Typography variant="h5" textAlign={"start"} color="#0273BD">
                  {review.designation}
                </Typography>
              </Box>
            </Grid>
            <Grid
              container
              flexDirection={"row"}
              flex={1}
              gap={"10px"}
              justifyContent={{ xs: "center", md: "end" }}
              alignItems={"center"}
              pr={{ xs: "0px", md: "50px" }}
            >
              <Image
                src={review.image}
                alt="Client"
                width={250}
                height={250}
                style={{
                  objectFit: "contain",
                  width: "250px",
                  height: "250px",
                }}
              />
            </Grid>
          </Container>
        ))}
      </Box>
    </Grid>
  );
};

export default Reviews;
