import images from "@/assets/images";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface BgSectionProps {
  heading: string;
  text: string;
}

const BgSection = ({ heading, text }: BgSectionProps) => {
  return (
    <section className="bg-primary text-white !py-32 flex flex-col items-center justify-center relative overflow-hidden">
      <Image
        src={images.bgsectionleft.src}
        alt="Background Image"
        height={500}
        width={500}
        className="object-cover absolute left-0 top-16 z-0 hidden md:block"
      />
      <Stack
        sx={{ width: "60%", alignItems: "center", justifyContent: "center" }}
        gap={"10px"}
      >
        <Typography variant="h4">{heading}</Typography>
        <Typography variant="body1" textAlign={"center"}>
          {text}
        </Typography>
      </Stack>
      <Image
        src={images.bgsectionright.src}
        alt="Background Image"
        height={500}
        width={500}
        className="object-cover absolute right-0 top-16 z-0 hidden md:block"
      />
    </section>
  );
};

export default BgSection;
