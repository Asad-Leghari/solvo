import { Box, Container, Grid, Typography } from "@mui/material";
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
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "40px", md: "0px" },
          justifyContent: "center",
          py: "93.5px",
        }}
      >
        <Grid
          container
          flexDirection={"column"}
          gap={"16px"}
          flex={1}
          justifyContent={"space-between"}
        >
          <HeadingButton title="Solvo's Premium" />
          <Typography variant="h4" textAlign={"start"}>
            What our{" "}
            <span style={{ color: "#0273BD" }}>
              Clients Say <br />
            </span>
          </Typography>
          <Typography
            variant="h6"
            textAlign={"justify"}
            pb={"20px"}
            width={"100%"}
          >
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and orem Ipsum is simply dummy text of the printing and typesetting
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
          justifyContent={{ xs: "center", md: "end" }}
          alignItems={"center"}
          pr={{ xs: "0px", md: "50px" }}
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
      </Container>
    </Grid>
  );
};

export default Reviews;
