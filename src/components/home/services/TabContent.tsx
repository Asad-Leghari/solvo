import images from "@/assets/images";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  title: string;
  description: string;
  img: string | StaticImport;
  btnContent: string;
  imgWidth?: string;
  imgHeight?: string;
};

const TabContent = (props: Props) => {
  const { title, description, img, btnContent, imgWidth, imgHeight } = props;
  return (
    <Grid
      size={12}
      container
      flexDirection={{ xs: "column", md: "row" }}
      gap={{ xs: "40px", md: "0px" }}
      border={"1px solid #BDBCC7"}
      p={"16px"}
      borderRadius={"8px"}
      sx={{
        minHeight: "400px", // <-- lock height so it doesn't shrink
      }}
    >
      <Grid
        flexDirection={"column"}
        container
        gap={"16px"}
        size={{ xs: 12, lg: 7 }}
        justifyContent={"space-between"}
      >
        <div>
          <Typography variant="h5" fontWeight={600} textAlign="start">
            {title}
          </Typography>
          <div
            style={{
              opacity: 0,
            }}
          >
            xyz
          </div>
          <Typography variant="body1" textAlign={"left"}>
            {description}
          </Typography>
        </div>
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
          {btnContent}
        </Button>
      </Grid>
      <Grid
        size={{ xs: 12, lg: 5 }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={img}
          alt="Description"
          width={250}
          height={250}
          style={{
            objectFit: "contain",
            width: imgWidth ? imgWidth : "250px",
            height: imgHeight ? imgHeight : "250px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default TabContent;
