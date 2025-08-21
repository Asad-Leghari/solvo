"use client";
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import images from "@/assets/images";
import Image from "next/image";

const coreValues = [
  {
    title: "Integrity",
    description:
      "Honesty & transparency are at the core of our operations, ensuring trust & reliability in every project we undertake.",
    icon: images.verified.src,
  },
  {
    title: "Innovation",
    description:
      "We continuously strive to incorporate the latest technologies & creative solutions to stay ahead in engineering excellence.",
    icon: images.idea.src,
  },
  {
    title: "Collaboration",
    description:
      "Our team works closely with clients & each other to foster a cooperative environment that promotes shared success.",
    icon: images.audience.src,
  },
  {
    title: "Quality",
    description:
      "We are committed to delivering top-notch engineering solutions that meet the highest standards of accuracy and performance.",
    icon: images.quality_assurance.src,
  },
  {
    title: "Client-Centricity",
    description:
      "Understanding and addressing the unique needs of our clients is our priority, ensuring personalized and effective solutions.",
    icon: images.handshake.src,
  },
  {
    title: "Continuous Improvement",
    description:
      "We embrace a culture of learning & development, always seeking ways to enhance our capabilities and services.",
    icon: images.verified.src,
  },
];

const OurCoreValue = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack width={"100%"} alignItems={"center"}  marginTop={2}>
      <Stack width={"100%"} alignItems={"center"}>
        <Typography variant="h5">
          Our <span style={{ color: "#0273BD" }}>Core Values</span>
        </Typography>
        <Stack
          direction={isSmall ? "column" : "row"}
          justifyContent={"center"}
          flexWrap={isSmall ? "nowrap" : "wrap"}
          marginTop={4}
        >
          {coreValues.map((value, idx) => {
            return (
              <Stack key={idx} margin={1}>
                <Card
                  sx={{
                    height: "325px",
                    width: "359px",
                    alignItems: "center",
                    padding: 3,
                    borderRadius: "19px",
                    boxShadow: "0px 4px 28px 0px #0000000F",
                  }}
                >
                  <Stack
                    width={"100%"}
                    height={"100%"}
                    alignItems={"center"}
                    spacing={2}
                    justifyContent={"center"}
                  >
                    <img
                      src={value.icon}
                      style={{ height: "60px", width: "60px" }}
                    />
                    <Typography variant="h5" fontWeight={400}>
                      {value.title}
                    </Typography>
                    <Typography variant="body1">{value.description}</Typography>
                  </Stack>
                </Card>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OurCoreValue;
