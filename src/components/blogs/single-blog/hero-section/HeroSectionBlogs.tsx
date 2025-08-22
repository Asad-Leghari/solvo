import images from "@/assets/images";
import Image from "next/image";
import React from "react";
import ActiveLastBreadcrumb from "./BreadCrumbs";
import { Avatar, Box, Card, Typography } from "@mui/material";

const HeroSectionBlogs = () => {
  return (
    <section
      className="flex flex-col h-full w-full items-center justify-center !py-20 md:!py-40 gap-6 md:gap-10 relative overflow-hidden !px-3"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(136, 216, 232, 0.2) 47.74%, rgba(136, 216, 232, 0.533333) 88.56%)",
      }}
    >
      <Image
        src={images.bgdots.src}
        alt="Background Image"
        height={500}
        width={500}
        className="h-[247px] w-[106px] absolute left-5 top-0 z-0 hidden md:block"
      />

      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-start justify-center gap-16 !px-4">
          <ActiveLastBreadcrumb blogId="123" blogTitle="Blog Title" />
          <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1, mb: 1 }}>
            How Low-Code and AI Are Transforming Custom Software Development
            2025
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              bottom: 8,
              left: 16,
            }}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: "#bdbdbd" }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Author Name
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Date
              </Typography>
            </Box>
          </Box>
        </div>
        <Card className="!bg-[#d9d9d9] !rounded-2xl w-full md:w-[500px] h-[300px]"></Card>
      </div>

      <Image
        src={images.bgdotsTilted.src}
        alt="Background Image"
        height={500}
        width={500}
        className="h-[348px] w-[360px] absolute right-0 -bottom-40 z-0 hidden md:block"
      />
    </section>
  );
};

export default HeroSectionBlogs;
