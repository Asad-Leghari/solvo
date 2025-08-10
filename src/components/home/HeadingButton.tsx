"use client";
import { Button } from "@mui/material";
import React from "react";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import Image from "next/image";
import images from "@/assets/images";

type HeadingButtonProps = {
  title: string;
};

const HeadingButton = ({ title }: HeadingButtonProps) => {
  return (
    <Button
      variant="outlined"
      startIcon={
        <Image src={images.Zap} alt="zap-icon" width={18} height={18} />
      }
      sx={{
        bgcolor: "#D9FAB1",
        color: "black",
        border: "none",
        borderRadius: "25px",
      }}
    >
      {title}
    </Button>
  );
};

export default HeadingButton;
