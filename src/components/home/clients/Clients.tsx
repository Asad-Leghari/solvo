"use client";

import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import HeadingButton from "../HeadingButton";
import { clientLogos } from "@/domain/home";
import Image from "next/image";

const Clients = () => {
  return (
    <Grid container flexDirection="column" alignItems="center" gap="10px">
      {/* Heading */}
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        gap="10px"
        pt={"60px"}
      >
        <HeadingButton title="Our Best Clients" />
        <Typography variant="h6">
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
              style={{ objectFit: "contain" }}
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
    </Grid>
  );
};

export default Clients;
