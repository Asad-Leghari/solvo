import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import AuthImage from "@/assets/authimage/d96f193e8cf558d5264a6161d800a658fcaaea02.jpg";

const Login = () => {
  return (
    <Box sx={{ width: "100vw", display: "flex" }}>
      <Stack sx={{ width: "50%" }}>
        <Image
          src={AuthImage}
          alt="Auth"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Stack>
      <Stack sx={{ width: "50%"}} alignItems={"center"} justifyContent={"center"} >
        <Stack width={"500px"}  sx={{backgroundColor:"#E9EFF0"}} padding={4} spacing={3} borderRadius={"12px"}>
          <Stack alignItems={"center"}>
            <Typography variant="h5" fontWeight={600} color="#000000">LOGIN TO SOLVO</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body1" color="#000000" fontWeight={600}>Username or Email</Typography>
            <TextField placeholder="enter email or username"/>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body1" color="#000000" fontWeight={600}>Password</Typography>
            <TextField type="password" placeholder="password"/>
          </Stack>
          <Stack alignItems={"center"} >
            <Button sx={{textTransform:"capitalize", color:"#FFFFFF", backgroundColor:"#006874", width:"125px", borderRadius:"12px"}}>Login</Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Login;
