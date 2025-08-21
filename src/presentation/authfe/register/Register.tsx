"use client";
import { Box, Button, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import AuthImage from "@/assets/authimage/d96f193e8cf558d5264a6161d800a658fcaaea02.jpg";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import useAuthStore from "@/application/stores/authStore/auth";

const Register = () => {

  const {
    email,
    username,
    password,
    setEmail,
    setUsername,
    setPassword,
    registerUser,
    loading,
    error,
  } = useAuthStore();

  return (
    <Box sx={{ width: "100vw", display: "flex" }}>
      <Stack sx={{ width: "50%" }}>
        <Image
          src={AuthImage}
          alt="Auth"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Stack>
      <Stack sx={{ width: "50%" }} alignItems={"center"} justifyContent={"center"} >
        <Stack width={"500px"} sx={{ backgroundColor: "#E9EFF0" }} padding={4} spacing={3} borderRadius={"12px"}>
          <Stack alignItems={"center"}>
            <Typography variant="h5" fontWeight={600} color="#000000">REGISTER TO SOLVO</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body1" color="#000000" fontWeight={600}>Email</Typography>
            <TextField placeholder="enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body1" color="#000000" fontWeight={600}>Username</Typography>
            <TextField
              type="username"
              placeholder="enter username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {
                      username && (<IconButton
                        onClick={() => setUsername("")}
                        edge="end"
                      >
                        <CancelOutlinedIcon />
                      </IconButton>)
                    }
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body1" color="#000000" fontWeight={600}>Password</Typography>
            <TextField
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {
                      password && (<IconButton
                        onClick={() => setPassword("")}
                        edge="end"
                      >
                        <CancelOutlinedIcon />
                      </IconButton>)
                    }
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack alignItems={"center"} >
            <Button sx={{ textTransform: "capitalize", color: "#FFFFFF", backgroundColor: "#006874", width: "125px", borderRadius: "12px" }} onClick={registerUser} disabled={loading}>{
              loading ? "creating an account" : "Register"
            }</Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};


export default Register