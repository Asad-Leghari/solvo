import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import HeadingButton from "../HeadingButton";
import { clientLogos } from "@/domain/home";
import Image from "next/image";

const Clients = () => {
  return (
    <Grid container flexDirection={"column"} alignItems={"center"} gap={"10px"}>
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        gap={"10px"}
      >
        <HeadingButton title="Our Best Clients" />
        <Typography variant="h6">
          Trusted by{" "}
          <span style={{ color: "#0273BD" }}>3,000+ globally companies.</span>
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        size={12}
      >
        {clientLogos.map((logo) => {
          return <Image src={logo.src} alt={logo.alt} key={logo.id} />;
        })}
      </Grid>
      <Divider sx={{ width: "100%", bgcolor: "#E0E0E0", mt: "20px" }} />
    </Grid>
  );
};

export default Clients;
