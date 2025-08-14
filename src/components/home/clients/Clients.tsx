"use client";

import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import HeadingButton from "../HeadingButton";
import { clientLogos } from "@/domain/home";
import Image from "next/image";

const Clients = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {/* Heading */}
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        gap="10px"
        pt={"60px"}
      >
        <HeadingButton title="Our Best Clients" />
        <Typography variant="h5">
          Trusted by{" "}
          <span style={{ color: "#0273BD" }}>3,000+ globally companies.</span>
        </Typography>
      </Grid>

      {/* Scrolling Logos */}
      <Grid
        container
        sx={{
          overflow: "hidden",
          position: "relative",
          width: "72vw",
        }}
      >
        <Grid
          container
          alignItems="center"
          wrap="nowrap"
          sx={{
            display: "flex",
            gap: 6,
            animation: "scrollLeft 30s linear infinite",
            minWidth: "fit-content", // ⬅️ ensures content doesn't shrink
          }}
        >
          {/* Duplicate twice for loop */}
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <Image
              key={`${logo.id}-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 100}
              height={logo.height || 40}
              style={{
                objectFit: "contain",
                maxHeight: "60px", // prevents stretching
                maxWidth: "120px",
              }}
            />
          ))}
        </Grid>

        {/* Global Keyframes */}
        <style jsx global>{`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </Grid>

      {/* Divider */}
      <Divider sx={{ width: "100%", bgcolor: "#E0E0E0", mt: "20px" }} />
    </Container>
  );
};

export default Clients;
