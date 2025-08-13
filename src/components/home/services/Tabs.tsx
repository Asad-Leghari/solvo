"use client";

import { CFD } from "@/domain/home";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import images from "@/assets/images";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<"CFD" | "CAD" | "FEA">("CFD");
  const [selectedCFD, setSelectedCFD] = useState<number | null>(1); // default selected id = 1

  return (
    <Grid
      container
      flexDirection={"column"}
      gap={"16px"}
      size={12}
      // px={"108px"}
      pt={"0px"}
    >
      {/* Top Tab Buttons */}
      <Grid container flexDirection={"row"} gap={"10px"} size={12}>
        {["CFD", "CAD", "FEA"].map((tab) => (
          <Button
            key={tab}
            variant="outlined"
            onClick={() => setSelectedTab(tab as "CFD" | "CAD" | "FEA")}
            sx={{
              border: "1px solid #E0E0E0",
              bgcolor: selectedTab === tab ? "#007BFF" : "#F2F3F5",
              color: selectedTab === tab ? "white" : "black",
              fontWeight: selectedTab === tab ? 600 : 400,
              textTransform: "capitalize",
            }}
          >
            {tab}
          </Button>
        ))}
      </Grid>

      {/* Main Content */}
      <Grid container flexDirection={"row"} gap={"40px"} size={12}>
        {/* Left Tab Content */}
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
              onClick={() => setSelectedCFD(item.id)}
              variant="outlined"
              startIcon={
                <Image src={item.img} alt={item.title} width={20} height={20} />
              }
              sx={{
                border: "1px solid #BDBCC7",
                fontSize: "16px",
                fontWeight: 500,
                color: selectedCFD === item.id ? "white" : "black",
                bgcolor: selectedCFD === item.id ? "#007BFF" : "white",
                textTransform: "capitalize",
                height: "60px",
                borderRadius: "8px",
                justifyContent: "flex-start",
                width: "100%",
                "&:hover": {
                  bgcolor: selectedCFD === item.id ? "#007BFF" : "#f5f5f5",
                },
              }}
            >
              {item.title}
            </Button>
          ))}
        </Grid>

        {/* Right Description + Image */}
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
            <Grid
              flexDirection={"column"}
              container
              gap={"16px"}
              size={7}
              justifyContent={"space-between"}
            >
              <Typography variant="h5" fontWeight={600}>
                Solvo’s Premium EFA, CFD & CAD <br /> Modeling Services
              </Typography>
              <Typography variant="h6" textAlign={"justify"}>
                Delivering presision and innovation with our premium customer
                engineering solutions, Delivering presision and innovation with
                our premium customer engineering solutions, Delivering presision
                and innovation with our premium customer engineering solutions,
                Delivering presision and innovation with our premium customer
                engineering solutions.
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
