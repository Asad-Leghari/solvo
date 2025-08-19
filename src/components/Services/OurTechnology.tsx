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
        gap: { xs: "24px", md: "40px" }, // responsive gap
        width: "100%",
        px: { xs: 2, sm: 4, md: 6, lg: 10 }, // responsive page padding
      }}
    >
      {/* Heading */}
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        gap={{ xs: "8px", md: "16px" }}
        pt={{ xs: "40px", md: "60px" }}
        width="100%"
      >
        <h1 className="text-[20px] sm:text-[32px] md:text-[48px] leading-tight text-center">
          Our <span style={{ color: "#0273bd" }}>Technology</span>
        </h1>
      </Grid>

      {/* Scrolling Logos */}
      <Grid
        container
        sx={{
          overflow: "hidden",
          position: "relative",
          width: { xs: "95vw", sm: "85vw", md: "75vw", lg: "70vw" },
          pt: { xs: "30px", md: "50px" },
        }}
      >
        <Grid
          container
          alignItems="center"
          wrap="nowrap"
          sx={{
            display: "flex",
            gap: { xs: 3, sm: 4, md: 6 },
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
          }
          @media (max-width: 900px) {
            .client-logo {
              max-height: 50px;
              max-width: 100px;
            }
          }
          @media (max-width: 600px) {
            .client-logo {
              max-height: 40px;
              max-width: 80px;
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
      <Divider
        sx={{
          width: { xs: "80%", md: "60%" },
          bgcolor: "#E0E0E0",
          mt: { xs: "16px", md: "20px" },
        }}
      />
    </Box>
  );
};

export default OurTechnology;
