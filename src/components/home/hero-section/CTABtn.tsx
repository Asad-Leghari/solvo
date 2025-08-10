"use client";
import { Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import images from "@/assets/images";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

type CTAButtonProps = {
  title: string;
};

const CTAButton = ({ title }: CTAButtonProps) => {
  return (
    <Button
      variant="text"
      startIcon={<EastOutlinedIcon />}
      sx={{
        color: "black",
        border: "none",
        width: "fit-content",
        fontWeight: 600,
        fontSize: "14px",
        textTransform: "capitalize",
      }}
    >
      {title}
    </Button>
  );
};

export default CTAButton;
