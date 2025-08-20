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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "20px",
        border: "1px solid red",
      }}
    >
      {/* Responsive Video */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1123px",
          height: "587px",
          borderRadius: "20px",
          overflow: "hidden",
          position: "absolute",
          top: "-336px",
          zIndex: 10,
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
            width: "100%",
            height: isSmall ? "220px" : "420px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </Box>

      {/* Content Section */}
      <Stack
        direction={isSmall ? "column" : "row"}
        sx={{
          width: "100%",
          maxWidth: "1050px",
          mt: { xs: "80px", md: "310px" },
          alignItems: "center",
          justifyContent: isSmall ? "center" : "space-between",
        }}
      >
        <Stack>
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
            width={800}
            height={800}
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
