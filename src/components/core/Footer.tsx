import images from "@/assets/images";
import {
  footer_company,
  footer_resources,
  footer_solutions,
} from "@/domain/footer";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box
      p={"50px"}
      sx={{
        backgroundImage:
          "linear-gradient(181deg, #FFFFFF 27%, rgba(136, 216, 232, 0.2) 80%, rgba(136, 216, 232, 0.53) 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container flexDirection={"column"} gap={"24px"}>
          <Grid
            container
            flexDirection={"row"}
            gap={"34px"}
            flexWrap={"nowrap"}
            justifyContent={"space-between"}
          >
            <Grid container flexDirection={"column"} gap={"20px"} flex={1}>
              <Image
                src={images.Logo}
                alt="logo"
                width={155}
                height={60}
                objectFit="contain"
              />
              <Typography variant="body1" textAlign={"justify"}>
                Solvo Engineers is an expert engineering consultation firm
                specializing in Finite Element Analysis (FEA), Computational
                Fluid Dynamics (CFD) and Computer-Aided Design (CAD) modelling
                services. With a focus on delivering precise and efficient
                solutions, our team of professional licensed engineers providing
                accurate and effective solutions. We are dedicated to offering
                advanced simulation driven insights that enable clients to
                promote innovation, reducing prototyping cost, design
                optimization, and simplify the process of developing new
                products.
              </Typography>
            </Grid>
            <Grid container flexDirection={"column"} gap={"24px"} flex={1}>
              <Grid
                container
                flexDirection={"row"}
                gap={"24px"}
                justifyContent={"space-between"}
              >
                <Grid container flexDirection={"column"} gap={"16px"}>
                  <Typography variant="h6" fontWeight={600}>
                    Company
                  </Typography>
                  {footer_company.map((item) => {
                    return (
                      <Typography variant="body1" key={item.id} color="black">
                        <Link
                          href={item.href}
                          style={{ textDecoration: "none", color: "black" }}
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
                      <Typography variant="body1" key={item.id} color="black">
                        <Link
                          href={item.href}
                          style={{ textDecoration: "none", color: "black" }}
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
                      <Typography variant="body1" key={item.id} color="black">
                        <Link
                          href={item.href}
                          style={{ textDecoration: "none", color: "black" }}
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
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
