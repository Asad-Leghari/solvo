import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import HeadingButton from "../HeadingButton";
import Image from "next/image";
import images from "@/assets/images";

const Reviews = () => {
  return (
    <Grid
      container
      flexDirection={"row"}
      justifyContent={"center"}
      width={"100%"}
      sx={{
        bgcolor: "#E6FBFF",
      }}
      px={"175px"}
      py={"110px"}
      gap={"10px"}
    >
      <Grid container flexDirection={"column"} gap={"16px"} flex={1}>
        <HeadingButton title="Solvo's Premium" />
        <Typography variant="h4" textAlign={"start"}>
          What our{" "}
          <span style={{ color: "#0273BD" }}>
            Our Clients Say <br />
          </span>
        </Typography>
        <Typography variant="body1">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </Typography>
        <Box>
          <Typography variant="h4" textAlign={"start"}>
            Client Name
          </Typography>
          <Typography variant="h5" textAlign={"start"} color="#0273BD">
            Founder & Co-Founder
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        flexDirection={"row"}
        flex={1}
        gap={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src={images.FFPic}
          alt="Description"
          width={316}
          height={316}
          style={{
            objectFit: "contain",
            width: "316px",
            height: "316px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Reviews;
