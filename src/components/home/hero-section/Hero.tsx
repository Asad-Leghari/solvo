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
import React from "react";
import HeadingButton from "@/components/home/HeadingButton";
import { heroCTAButtons } from "@/domain";
import CTAButton from "./CTABtn";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Hero = () => {
  return (
    <Grid
      container
      flexDirection={"column"}
      gap={"12px"}
      px={"175px"}
      pt={"63px"}
      pb={"40px"}
      width={"100%"}
      height={"fit-content"}
      sx={{
        backgroundImage:
          "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
      }}
    >
      <Grid
        container
        flexDirection={"row"}
        gap={"12px"}
        justifyContent={"center"}
        flexWrap={"nowrap"}
        height={"375px"}
      >
        <Grid container flexDirection={"column"} flexWrap={"nowrap"} flex={1}>
          <Grid container flexDirection={"column"} gap={"8px"}>
            <HeadingButton title="Our Most In-Demand CFD Services" />
            <Typography variant="h2" fontWeight={600}>
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
        <Grid flex={1}>
          <Image
            src={images.Hero}
            alt="Hero"
            width={539}
            height={334}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid container flexDirection={"row"}>
        <Grid container flexDirection={"row"}>
          <IconButton>
            <CircleOutlinedIcon sx={{ fontSize: "20px" }} />
          </IconButton>
          <IconButton>
            <CircleIcon sx={{ color: "#0273BD", fontSize: "20px" }} />
          </IconButton>
          <IconButton
            sx={{
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                height: "12px",
                width: "70px",
                bgcolor: "transparent",
                border: "1px solid #0273BD",
                borderRadius: "12px",
              }}
            />
          </IconButton>
        </Grid>
        <Grid
          container
          flexDirection={"row"}
          flex={1}
          justifyContent={"end"}
          gap={"14px"}
          mr={"160px"}
        >
          <IconButton
            sx={{
              bgcolor: "white",
              color: "#0273BD",
              height: "40px",
              width: "40px",
              borderRadius: "8px",
            }}
          >
            <WestOutlinedIcon sx={{ fontSize: "20px" }} />
          </IconButton>
          <IconButton
            sx={{
              bgcolor: "#0273BD",
              color: "white",
              height: "40px",
              width: "40px",
              borderRadius: "8px",
            }}
          >
            <EastOutlinedIcon sx={{ color: "white", fontSize: "20px" }} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
