"use client";
import { Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import images from "@/assets/images";
import EastOutlinedIcon from "@mui/icons-material/CheckCircleOutline";

type CTAButtonProps = {
  title: string;
};

const CTAButton = ({ title }: CTAButtonProps) => {
  return (
    <Button
      variant="text"
      startIcon={<EastOutlinedIcon sx={{ color: "#0273BD" }} />}
      sx={{
        color: "black",
        // border: "none",
        // width: "fit-content",
        flex: 1,
        fontWeight: 600,
        // fontSize: "16px",
        textTransform: "capitalize",
        textAlign: "left",
        justifyContent: "left",
        // border: "1px solid red",
      }}
    >
      {title}
    </Button>
  );
};

export default CTAButton;
