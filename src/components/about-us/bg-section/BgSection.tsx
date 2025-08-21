"use client";
import images from "@/assets/images";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

interface BgSectionProps {
  heading: string;
  text: string;
}

const BgSection = ({ heading, text }: BgSectionProps) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 8, 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: "4rem",
          zIndex: 0,
          display: { xs: "none", md: "block" },
        }}
      >
        <Image
          src={images.bgsectionleft.src}
          alt="Background Left"
          height={500}
          width={500}
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Stack
        sx={{
          width: isSmall ? "100%" : "60%",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography variant="h4">{heading}</Typography>
        <Typography variant="body1">{text}</Typography>
      </Stack>

      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: "4rem",
          zIndex: 0,
          display: { xs: "none", md: "block" },
        }}
      >
        <Image
          src={images.bgsectionright.src}
          alt="Background Right"
          height={500}
          width={500}
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default BgSection;
