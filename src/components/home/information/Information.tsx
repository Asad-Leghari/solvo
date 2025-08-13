import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import HeadingButton from "../HeadingButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import images from "@/assets/images";

const Information = () => {
  return (
    <Grid
      container
      flexDirection={"column"}
      alignItems={"start"}
      gap={"10px"}
      bgcolor={"#ffffff"}
      borderRadius={"0 0 29px 29px"}
      sx={{ boxShadow: "0px 24px 34px rgba(0, 0, 0, 0.11)", zIndex: 3 }}
    >
      <Container maxWidth="xl" sx={{ py: "50px" }}>
        <HeadingButton title="Case Studies" />
        <Typography variant="h4" textAlign={"start"} mt={"8px"}>
          Our Customer{" "}
          <span style={{ color: "#0273BD" }}>
            Simulation Process <br />
          </span>
        </Typography>
        <Grid
          container
          flexDirection={"row"}
          justifyContent={{ xs: "center", md: "space-between" }}
          size={12}
          mt={"10px"}
        >
          <Grid
            container
            flexDirection={"column"}
            gap={"8px"}
            flex={1}
            alignItems={{ xs: "center", md: "start" }}
          >
            <Typography variant="h6" width={"100%"}>
              Information Gathering & Requirement
            </Typography>
            <Grid
              container
              flexDirection={"row"}
              gap={{ xs: "8px", md: "16px" }}
              width={"100%"}
            >
              <Button
                variant="text"
                sx={{ color: "black" }}
                startIcon={<ArrowForwardIcon sx={{ color: "black" }} />}
              >
                Team Assembly
              </Button>
              <Button
                variant="text"
                sx={{ color: "black" }}
                startIcon={<ArrowForwardIcon sx={{ color: "black" }} />}
              >
                Responsibility
              </Button>
            </Grid>
            <Image
              src={images.Info1}
              alt=""
              width={250}
              height={350}
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid
            container
            flexDirection={"column"}
            gap={"8px"}
            flex={1}
            alignItems={"end"}
            display={{ xs: "none", md: "flex" }}
          >
            <Grid
              container
              flexDirection={"column"}
              gap={"8px"}
              alignItems={"center"}
            >
              <Typography variant="h6" textAlign={"left"} width={"100%"}>
                Assigning Roles & Responsibilities
              </Typography>
              <Grid container flexDirection={"row"} gap={"16px"}>
                <Button
                  variant="text"
                  sx={{ color: "black" }}
                  startIcon={<ArrowForwardIcon sx={{ color: "black" }} />}
                >
                  Consultation
                </Button>
                <Button
                  variant="text"
                  sx={{ color: "black" }}
                  startIcon={<ArrowForwardIcon sx={{ color: "black" }} />}
                >
                  Requirement Specifications
                </Button>
              </Grid>
              <Grid
                container
                flexDirection={"row"}
                justifyContent={"start"}
                size={12}
              >
                <Image
                  src={images.Info2}
                  alt=""
                  width={350}
                  height={350}
                  style={{ objectFit: "contain" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container flexDirection={"column"} width={"100%"} gap={"36px"}>
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            gap={"8px"}
            width={"100%"}
          >
            <Button
              variant="contained"
              sx={{
                width: "fit-content",
                height: "42px",
                bgcolor: "#FFFFFF",
                color: "primary.main",
              }}
            >
              <ArrowBackIcon />
            </Button>
            <Button
              variant="contained"
              sx={{ width: "fit-content", height: "42px" }}
            >
              <ArrowForwardIcon />
            </Button>
          </Grid>
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"space-between"}
            gap={"10px"}
            size={12}
          >
            <Box
              sx={{
                flex: 1,
                height: "8px",
                borderRadius: "8px",
                bgcolor: "#0273BD",
              }}
            />
            <Box
              sx={{
                flex: 1,
                height: "8px",
                borderRadius: "8px",
                bgcolor: "#DFE8FC",
              }}
            />
            <Box
              sx={{
                flex: 1,
                height: "8px",
                borderRadius: "8px",
                bgcolor: "#DFE8FC",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Information;
