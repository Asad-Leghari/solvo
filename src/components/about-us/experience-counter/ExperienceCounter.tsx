import { Box, Divider, Stack, Typography } from "@mui/material";
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
  return (
    <>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={23} padding={5}>
        {metrics.map((metric, index) => (
          <Box
            key={index}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Typography fontSize={"36px"} color="#0273BD">
              {metric.value}
            </Typography>
            <Typography variant="body1">{metric.label}</Typography>
          </Box>
        ))}
      </Stack>
      <Box className="w-full flex justify-center">
        <Divider sx={{ width: "60%", bgcolor: "#E0E0E0", mt: "20px" }} />
      </Box>
    </>
  );
};

export default ExperienceCounter;
