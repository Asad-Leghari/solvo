import { CFD } from "@/domain/home";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import images from "@/assets/images";

const Tabs = () => {
  return (
    <Grid
      container
      flexDirection={"column"}
      gap={"16px"}
      size={12}
      px={"108px"}
      pt={"0px"}
    >
      <Grid container flexDirection={"row"} gap={"10px"} size={12}>
        <Button
          variant="outlined"
          sx={{
            border: "1px solid #E0E0E0",
            bgcolor: "#F2F3F5",
            color: "black",
          }}
        >
          CFD
        </Button>
        <Button
          variant="outlined"
          sx={{
            border: "1px solid #E0E0E0",
            bgcolor: "#F2F3F5",
            color: "black",
          }}
        >
          CAD
        </Button>
        <Button
          variant="outlined"
          sx={{
            border: "1px solid #E0E0E0",
            bgcolor: "#F2F3F5",
            color: "black",
          }}
        >
          FEA
        </Button>
      </Grid>
      <Grid container flexDirection={"row"} gap={"40px"} size={12}>
        <Grid
          container
          flexDirection={"column"}
          gap={"10px"}
          size={4}
          alignItems={"center"}
        >
          {CFD.map((item) => (
            <Button
              key={item.id}
              variant="outlined"
              startIcon={
                <Image src={item.img} alt={item.title} width={20} height={20} />
              }
              sx={{
                border: "1px solid #BDBCC7",
                fontSize: "16px",
                fontWeight: 500,
                color: item.id === 1 ? "white" : "black",
                bgcolor: item.id === 1 ? "#007BFF" : "white",
                textTransform: "capitalize",
                height: "50px",
                borderRadius: "8px",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              {item.title}
            </Button>
          ))}
        </Grid>
        <Grid
          flex={1}
          container
          flexDirection={"row"}
          justifyContent={"center"}
        >
          <Grid
            size={12}
            container
            flexDirection={"row"}
            border={"1px solid #BDBCC7"}
            p={"16px"}
            borderRadius={"8px"}
          >
            <Grid flexDirection={"column"} container gap={"16px"} size={7}>
              <Typography variant="h6" fontWeight={600}>
                Solvo’s Premium EFA, CFD & CAD <br /> Modeling Services
              </Typography>
              <Typography variant="body1" textAlign={"justify"}>
                Delivering presision and innovation with our premium customer
                engineering solutions, Delivering presision and innovation with
                our premium customer engineering solutions, Delivering presision
                and innovation with our premium customer engineering solutions,
                Delivering presision and innovation with our premium customer
                engineering solutions.{" "}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#0273BD",
                  color: "white",
                  textTransform: "capitalize",
                  height: "42px",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "14px",
                  width: "fit-content",
                }}
                endIcon={<ArrowRightIcon sx={{ color: "white" }} />}
              >
                Our More Services
              </Button>
            </Grid>
            <Grid
              size={5}
              container
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={images.FFPic}
                alt="Description"
                width={250}
                height={250}
                style={{
                  objectFit: "contain",
                  width: "250px",
                  height: "250px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Tabs;
