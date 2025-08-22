"use client";
import images from "@/assets/images";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

const WhoWeAre = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        // border:"2px solid red"
      }}
    >

      {/* Content Section */}
      <Stack
        direction={isSmall ? "column" : "row"}
        sx={{
          width: "100%",
          // maxWidth: "1050px",
          // px: { xs: 2, xl: "300px" },
          mt: { xs: "80px", md: "280px" },
          alignItems: "center",
          justifyContent: isSmall ? "center" : "center",
          px: { xs: 2, md: "60px", xl: "300px" }
        }}
        mb={"50px"}
      >
        <Stack sx={{ width:  "100%", marginTop:"50px" }} >
          <Typography variant="h5">
            Who We{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Are
            </Box>
          </Typography>
          <Typography variant="body1">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`}
            <br />
            <br />
            {`Printer took a galley of type and orem Ipsum is simply dummy text of the printing and typesetting industry.`}
          </Typography>
        </Stack>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Image
            src={images.whoweare.src}
            alt="Who We Are"
            width={isSmall ? 700 : 450}
            height={isSmall ? 700 : 450}
            style={{
              objectFit: "cover",
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default WhoWeAre;
