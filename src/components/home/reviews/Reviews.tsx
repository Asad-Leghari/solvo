import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import HeadingButton from "../HeadingButton";
import Image from "next/image";
import images from "@/assets/images";
import SlidesComponent from "./SlidesComponent";

export const reviewsData = [
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
      "It was a great experience working with Muhammad on my business project related to classic acoustics. He carefully reviewed the work we shared, improved it by fixing errors, and clearly explained each step of his process. His clarity and reliability made collaboration smooth, even with our time difference. It was my first time on this platform and he was very patient throughout. I would definitely recommend him!. . It was my first time on this platform and he was very patient throughout. I would definitely recommend him! . It was my first time on this platform and he was very patient throughout. I would definitely recommend him!",
    clientName: "Serrena Alen",
    designation: "Founder & CEO at Airvitalize",
    image: images.reviews.R1,
  },
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
      "It was an absolute pleasure to work with Muhammad! He had excellent communication throughout the process, ensuring everything was clear and addressing any questions quickly. His understanding and flexibility made working together very easy. The work was delivered earlier than expected and of high quality. Would definitely recommend . It was my first time on this platform and he was very patient throughout. I would definitely recommend him! . It was my first time on this platform and he was very patient throughout. I would definitely recommend him! . It was my first time on this platform and he was very patient throughout. I would definitely recommend him!",
    clientName: "Jane Smith",
    designation: "Co-Founder",
    image: images.reviews.R2,
  },
  {
    title: "Solvo's Premium 3",
    heading: (
      <>
        What our{" "}
        <span style={{ color: "#0273BD" }}>
          Clients Say <br />
        </span>
      </>
    ),
    description: `Solvo Engineers did an excellent job on our CFD project for airflow optimization in a dust catcher device. They carefully analyzed the design, improved efficiency by addressing critical flow issues, and clearly explained every step of their process. Their expertise and responsiveness made collaboration very smooth and effective. The work was delivered with precision and high quality. I would definitely recommend them!"`,
    clientName: "33 Jane Smith",
    designation: "Co-Founder",
    image: images.reviews.R3,
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
          top: "40%",
          left: "0px",
          transform: "translateY(-50%) scaleX(-1)", // flip horizontally
          // width: "800px", // smaller size
          height: "800px",
          backgroundImage: `url(${images.Spiral.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.15, // make it faint
          pointerEvents: "none", // so it doesn't block clicks
        }}
      />
      <SlidesComponent />
    </Grid>
  );
};

export default Reviews;
