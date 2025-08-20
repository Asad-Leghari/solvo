import React from "react";
import HeadingButton from "../HeadingButton";
import { Box, Button, Grid, Typography } from "@mui/material";
import images from "@/assets/images";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const SlideCard = ({ currentSlide }: any) => {
  return (
    <>
      <HeadingButton title={currentSlide.headingButtonTitle} />
      <Typography variant="h5" textAlign={"start"} mt={"8px"}>
        {currentSlide.heading}{" "}
        <span style={{ color: "#0273BD" }}>{currentSlide.highlight}</span>
      </Typography>
      <Grid
        container
        flexDirection={"row"}
        justifyContent={{ xs: "center", md: "space-between" }}
        size={12}
        mt={"10px"}
        sx={{ position: "relative" }}
      >
        <Grid
          container
          flexDirection={"column"}
          gap={"8px"}
          flex={1.5}
          alignItems={{ xs: "center", md: "start" }}
        >
          <Typography variant="h6" width={"100%"} fontWeight={600}>
            {currentSlide.leftSection.title}
          </Typography>
          <Grid
            container
            flexDirection={"row"}
            gap={{ xs: "8px", md: "16px" }}
            width={"100%"}
          >
            {currentSlide.leftSection.buttons.map((button: any, idx: any) => (
              <Button
                key={idx}
                variant="text"
                sx={{ color: "black" }}
                startIcon={<CheckCircleOutlineIcon sx={{ color: "#0273BD" }} />}
              >
                {button}
              </Button>
            ))}
          </Grid>
          <Box py={2}>
            <img
              src={currentSlide.leftSection.image.src}
              alt=""
              style={{
                objectFit: "contain",
                zIndex: 222,
                width: "260px",
                height: "260px",
              }}
            />
          </Box>
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
            alignItems={"start"}
            width={"100%"}
            height={"100%"}
          >
            <Grid
              container
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Typography
                variant="h6"
                textAlign={"left"}
                width={"100%"}
                flex={1}
                fontWeight={600}
              >
                {currentSlide.rightSection.title}
              </Typography>
            </Grid>
            <Grid container flexDirection={"row"} gap={"16px"}>
              {currentSlide.rightSection.buttons.map(
                (button: any, idx: any) => (
                  <Button
                    key={idx}
                    variant="text"
                    sx={{ color: "black" }}
                    startIcon={
                      <CheckCircleOutlineIcon sx={{ color: "#0273BD" }} />
                    }
                  >
                    {button}
                  </Button>
                )
              )}
            </Grid>
            <Grid
              container
              flexDirection={"row"}
              justifyContent={"start"}
              size={12}
              py={2}
            >
              <img
                src={currentSlide.rightSection.image.src}
                alt=""
                style={{
                  objectFit: "contain",
                  zIndex: 222,
                  width:
                    currentSlide.rightSection.image === images.home.CH2
                      ? "400px"
                      : "260px",
                  height: "260px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            width: "100%",
            zIndex: -1,
          }}
        >
          <img
            src={images.home.DL.src}
            alt="mid line"
            // width={300}
            // height={300}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Grid>
    </>
  );
};

export default SlideCard;
