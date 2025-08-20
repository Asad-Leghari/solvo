import images from "@/assets/images";
import { navbarItems } from "@/domain";
import { Divider, Grid, IconButton } from "@mui/material";
import Image from "next/image";

import React from "react";
import RouterButton from "./RouterButton";
import ContactButton from "./ContactButton";
import ToggleThemeBtn from "./ToggleThemeBtn";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <>
      <Grid
        container
        flexDirection={"row"}
        px={{ xs: "8px", lg: "20px" }}
        py={"16px"}
        alignItems={"center"}
        size={12}
      >
        <Image src={images.Logo} alt="Logo" width={136} height={50} />
        <Grid
          container
          flexDirection={"row"}
          flex={1}
          justifyContent={"end"}
          gap={"27px"}
          display={{ xs: "none", md: "flex" }}
        >
          {navbarItems.map((item) => (
            <RouterButton key={item.label} href={item.href}>
              {item.label}
            </RouterButton>
          ))}
          <ContactButton href="/contact">Contact Us</ContactButton>
          {/* <ToggleThemeBtn /> */}
        </Grid>
        <Grid
          container
          flexDirection={"row"}
          flex={1}
          justifyContent={"end"}
          gap={"27px"}
          display={{ xs: "flex", md: "none" }}
        >
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Divider sx={{ width: "100%", bgcolor: "#E0E0E0" }} />
    </>
  );
};

export default Navbar;
