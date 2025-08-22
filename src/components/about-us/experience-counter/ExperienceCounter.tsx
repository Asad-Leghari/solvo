"use client";
import { Box, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const metrics = [
  {
    value: "10",
    label: "Years of Experience",
  },
  {
    value: "35",
    label: "Countries Served",
  },
  {
    value: "210",
    label: "Expert Freelancers",
  },
  {
    value: "900+",
    label: "Projects Completed",
  },
];

const ExperienceCounter = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={isSmall ? "center" :"space-between"}
        // gap={15}
        paddingTop={3}
        paddingBottom={3}
        // paddingLeft={12}
        // paddingRight={12}
        width={"100%"}
        sx={{px: { xs: 2, md: "60px", xl: "300px" }}}
      >
        {metrics.map((metric, index) => (
          <Stack
            key={index}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack width={"100%"} alignItems={"center"}>
              <Typography variant="h4" color="#0273BD">
              {metric.value}
            </Typography>
            </Stack>
            <Stack width={"100%"} textAlign={"center"}>
              <Typography variant="p">{metric.label}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
      <Box className="w-full flex justify-center">
        <Divider sx={{ width: "50%", bgcolor: "#E0E0E0", mt: "20px" }} />
      </Box>
    </>
  );
};  

export default ExperienceCounter;
