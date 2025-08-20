import images from "@/assets/images";
import {
  footer_company,
  footer_resources,
  footer_solutions,
} from "@/domain/footer";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <Box
      p={{ xs: "50px 0px", md: "100px 0px 50px 0px" }}
      sx={{
        backgroundImage:
          "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
        // bgcolor: "#333",
        // color: "white",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, md: "60px", xl: "300px" },
        }}
      >
        <Grid container flexDirection={"column"} gap={"24px"}>
          <Grid
            container
            flexDirection={{ xs: "column", lg: "row" }}
            gap={"34px"}
            flexWrap={"nowrap"}
            justifyContent={"space-between"}
          >
            <Grid
              container
              flexDirection={"column"}
              gap={"10px"}
              flex={1}
              justifyContent={"space-between"}
            >
              <Image
                src={images.Logo}
                alt="logo"
                width={155}
                height={60}
                objectFit="contain"
              />
              <Typography variant="body1" textAlign={"justify"} flex={1}>
                Solvo Engineers is an expert engineering consultation firm
                specializing in Finite Element Analysis (FEA), Computational
                Fluid Dynamics (CFD) and Computer-Aided Design (CAD) modelling
                services. With a focus on delivering precise and efficient
                solutions, our team of professional licensed engineers providing
                accurate
              </Typography>
            </Grid>
            <Grid container flexDirection={"column"} gap={"24px"} flex={1.5}>
              <Grid
                container
                flexDirection={{ xs: "column", md: "row" }}
                gap={"24px"}
                justifyContent={"space-around"}
              >
                <Grid container flexDirection={"column"} gap={"16px"}>
                  <Typography variant="h6" fontWeight={600}>
                    Company
                  </Typography>
                  {footer_company.map((item) => {
                    return (
                      <Typography variant="body1" key={item.id}>
                        <Link
                          href={item.href}
                          style={{ textDecoration: "none" }}
                        >
                          {item.label}
                        </Link>
                      </Typography>
                    );
                  })}
                </Grid>
                <Grid container flexDirection={"column"} gap={"16px"}>
                  <Typography variant="h6" fontWeight={600}>
                    Solutions
                  </Typography>
                  {footer_solutions.map((item) => {
                    return (
                      <Typography variant="body1" key={item.id}>
                        <Link
                          href={item.href}
                          style={{ textDecoration: "none" }}
                        >
                          {item.label}
                        </Link>
                      </Typography>
                    );
                  })}
                </Grid>
                <Grid container flexDirection={"column"} gap={"16px"}>
                  <Typography variant="h6" fontWeight={600}>
                    Resources
                  </Typography>
                  {footer_resources.map((item) => {
                    return (
                      <Typography variant="body1" key={item.id}>
                        <Link
                          href={item.href}
                          style={{ textDecoration: "none" }}
                        >
                          {item.label}
                        </Link>
                      </Typography>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider sx={{ bgcolor: "#CAC4D0" }} />
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            display={{ xs: "none", md: "flex" }}
          >
            <Typography variant="h6">Privacy Policy</Typography>
            <Grid
              container
              flexDirection={"row"}
              alignItems={"center"}
              gap={"8px"}
            >
              <Typography variant="h6">All right reserved</Typography>
              <CopyrightIcon />
              <Typography variant="h6">Solvo Engineering 2025</Typography>
            </Grid>
            <Grid
              container
              flexDirection={"row"}
              gap={"10px"}
              justifyContent={{ xs: "start", md: "end" }}
            >
              <IconButton
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                  borderRadius: "8px",
                  bgcolor: "white",
                  color: "#0273BD",
                  position: "relative",
                  overflow: "hidden",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "#0273BD",
                    borderRadius: "inherit",
                    transform: "scale(0)",
                    transformOrigin: "center",
                    transition: "transform 0.4s ease-in-out",
                    zIndex: 0,
                  },
                  "&:hover::before": {
                    transform: "scale(1)",
                  },

                  // icon styles
                  "& .MuiSvgIcon-root": {
                    position: "relative",
                    zIndex: 1,
                    transition: "color 0.4s ease-in-out",
                  },
                  "&:hover .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                  borderRadius: "8px",
                  bgcolor: "white",
                  color: "#0273BD",
                  position: "relative",
                  overflow: "hidden",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "#0273BD",
                    borderRadius: "inherit",
                    transform: "scale(0)",
                    transformOrigin: "center",
                    transition: "transform 0.4s ease-in-out",
                    zIndex: 0,
                  },
                  "&:hover::before": {
                    transform: "scale(1)",
                  },

                  // icon styles
                  "& .MuiSvgIcon-root": {
                    position: "relative",
                    zIndex: 1,
                    transition: "color 0.4s ease-in-out",
                  },
                  "&:hover .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                  borderRadius: "8px",
                  bgcolor: "white",
                  color: "#0273BD",
                  position: "relative",
                  overflow: "hidden",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "#0273BD",
                    borderRadius: "inherit",
                    transform: "scale(0)",
                    transformOrigin: "center",
                    transition: "transform 0.4s ease-in-out",
                    zIndex: 0,
                  },
                  "&:hover::before": {
                    transform: "scale(1)",
                  },

                  // icon styles
                  "& .MuiSvgIcon-root": {
                    position: "relative",
                    zIndex: 1,
                    transition: "color 0.4s ease-in-out",
                  },
                  "&:hover .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                <XIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: "fit-content",
                  height: "fit-content",
                  borderRadius: "8px",
                  bgcolor: "white",
                  color: "#0273BD",
                  position: "relative",
                  overflow: "hidden",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "#0273BD",
                    borderRadius: "inherit",
                    transform: "scale(0)",
                    transformOrigin: "center",
                    transition: "transform 0.4s ease-in-out",
                    zIndex: 0,
                  },
                  "&:hover::before": {
                    transform: "scale(1)",
                  },

                  // icon styles
                  "& .MuiSvgIcon-root": {
                    position: "relative",
                    zIndex: 1,
                    transition: "color 0.4s ease-in-out",
                  },
                  "&:hover .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            display={{ xs: "flex", md: "none" }}
          >
            <Typography variant="h6">Privacy Policy</Typography>
            <Typography variant="h6">Term of service</Typography>
            <Grid
              container
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"8px"}
              width={"100%"}
            >
              <Typography variant="h6">All right reserved</Typography>
              <CopyrightIcon />
              <Typography variant="h6">Solvo Engineering 2025</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
