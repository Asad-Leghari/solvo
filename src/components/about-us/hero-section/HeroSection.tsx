"use client";
import images from "@/assets/images";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
      sx={{
        height: "604px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "100px",
        backgroundImage:
          "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
        position: "relative",
      }}
    >
      <div className="absolute top-0 left-0 h-[247px] w-[106px] overflow-hidden z-0">
        <Image
          src={images.bgdots.src}
          alt="Background Image"
          height={500}
          width={500}
          className="h-[247px] w-[106px] absolute left-5 top-0 z-0 hidden md:block"
        />
      </div>

      <Stack
        sx={{ width: "100%", alignItems: "center" }}
        spacing={3}
        paddingRight={isSmall ? 1 : 15}
        paddingLeft={isSmall ? 1 : 15}
      >
        <Typography variant="h4">
          What is <span className="text-primary">Solvo Engineering</span>
        </Typography>
        <Typography variant="h6" textAlign={"center"}>
          Solvo Engineering is CAE consultant firm specializing in FEA, CFD
          simulations and CAD modeling. We pride ourselves on delivering
          exceptional lifecycle solutions customization to meet the precise
          needs of our clients.
        </Typography>
        <Button variant="contained">{`let's Connect`}</Button>
      </Stack>
      {/* Responsive Video */}
      <Stack
        sx={{
          width: "100%",
          // maxWidth: "1123px",
          height: "587px",
          borderRadius: "20px",
          overflow: "hidden",
          position: "absolute",
          top: "450px",
          zIndex: 10,
          alignItems: "center",
        }}
        padding={"20px"}
      >
        <video
          src="/videos/video.mp4"
          controls
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: isSmall ? "100%" : "1109px",
            height: isSmall ? "220px" : "420px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </Stack>

      <div className="absolute right-0 bottom-0 h-[348px] w-[360px] overflow-hidden z-0">
        <div className="relative h-full w-full">
          <Image
            src={images.bgdotsTilted.src}
            alt="Background Image"
            height={500}
            width={500}
            className="h-[348px] w-[360px] absolute right-0 -bottom-40 z-0 hidden md:block"
          />
        </div>
      </div>
    </Stack>
  );
};

export default HeroSection;
