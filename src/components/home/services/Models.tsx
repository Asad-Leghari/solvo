import { models } from "@/domain/home";
import { Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Models = () => {
  return (
    <Grid
      container
      flexDirection={"row"}
      justifyContent={"space-between"}
      size={12}
      // px={"108px"}
    >
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        width={"300px"}
        p={1}
        gap={"10px"}
      >
        <Image
          src={models[0].image}
          alt={models[0].title}
          width={200}
          height={200}
          style={{
            objectFit: "contain",
          }}
        />
        <Typography variant="h5" textAlign={"center"} fontWeight={600}>
          Computational Fluid <br /> Dynamics (CFD)
        </Typography>
        <Divider sx={{ width: "100%" }} />
        <Typography variant="body1" textAlign={"center"}>
          {models[0].description}
        </Typography>
      </Grid>
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        width={"300px"}
        p={1}
        gap={"10px"}
      >
        <Image
          src={models[1].image}
          alt={models[1].title}
          width={200}
          height={200}
          style={{
            objectFit: "contain",
          }}
        />
        <Typography variant="h5" textAlign={"center"} fontWeight={600}>
          2D/3D Modeling & <br /> Rendering (CAD)
        </Typography>
        <Divider sx={{ width: "100%" }} />
        <Typography variant="body1" textAlign={"center"}>
          {models[1].description}
        </Typography>
      </Grid>
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        width={"300px"}
        p={1}
        gap={"10px"}
      >
        <Image
          src={models[2].image}
          alt={models[2].title}
          width={200}
          height={200}
          style={{
            objectFit: "contain",
          }}
        />
        <Typography variant="h5" textAlign={"center"} fontWeight={600}>
          Finite Element <br /> Analysis (FEA)
        </Typography>
        <Divider sx={{ width: "100%" }} />
        <Typography variant="body1" textAlign={"center"}>
          {models[2].description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Models;
