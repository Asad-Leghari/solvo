"use client";

import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { clientLogos } from "@/domain/home";
import Image from "next/image";

const OurTechnology = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",

        // border: "1px solid red",
        width: "100%",
      }}
    >
      {/* Heading */}
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        gap="10px"
        pt={"60px"}
        sx={{
          px: { xs: 2, xl: "0px" },
        }}
        width={"100%"}
      >
        <Typography variant="h5">
          Our <span style={{ color: "#0273bd" }}>Technology</span>
        </Typography>
      </Grid>

      {/* Scrolling Logos */}
      <Grid
        container
        sx={{
          overflow: "hidden",
          position: "relative",
          width: { xs: "90vw", sm: "70vw" },
          // border: "1px solid red",
          pt: "50px",
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
            minWidth: "fit-content",
          }}
        >
          {[...clientLogos, ...clientLogos, ...clientLogos].map(
            (logo, index) => {
              return (
                <Image
                  key={`${logo.id}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="client-logo"
                />
              );
            }
          )}
        </Grid>

        <style jsx global>{`
          .client-logo {
            object-fit: contain;
            max-height: 60px;
            // max-width: 120px;
          }
          @media (max-width: 600px) {
            .client-logo {
              max-height: 40px; /* smaller height for mobile */
              max-width: 80px; /* smaller width for mobile */
            }
          }

          @keyframes scrollLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.3333%);
            }
          }
        `}</style>
      </Grid>

      {/* Divider */}
      <Divider sx={{ width: "60%", bgcolor: "#E0E0E0", mt: "20px" }} />
    </Box>
  );
};

export default OurTechnology;
