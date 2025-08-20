"use client";
import React from "react";
import HeadingButton from "../HeadingButton";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import images from "@/assets/images";
import Image from "next/image";
import SelectInput from "./SelectInput";

interface ContactProps {
  displayBottomImage?: boolean;
}

const Contact = ({ displayBottomImage = true }: ContactProps) => {
  const [FormInfo, setFormInfo] = React.useState({
    lookingFor: [],
    services: [],
    software: [],
    budgets: [],
  });

  const LookingFor = [
    "Start a new project",
    "Revamp existing job",
    "Consulation",
    "Dedicated Team",
  ];

  const Services = [
    "FEA Analysis",
    "CFD Analysis",
    "CAD Design",
    "Design Optimization",
  ];

  const budgets = [
    "> 5000 USD",
    "5000 USD - 25000 USD",
    "25000 USD - 75000 USD",
    "< 100000 USD",
  ];

  const Software = ["Ansys", "Solidworks", "Comsol", "Abaqus", "Inventor"];

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const { name, value } = event.target;

    setFormInfo((prev) => ({
      ...prev, // ✅ keep the rest of formInfo
      [name]: typeof value === "string" ? value.split(",") : value,
    }));
  };
  return (
    <Box
      p={"50px 0 20px 0"}
      bgcolor={"#ffffff"}
      // boxShadow={"0px 24px 34px rgba(0, 0, 0, 0.11)"}
      borderRadius={"0 0 29px 29px"}
      zIndex={2}
    >
      <Box
        sx={{
          px: { xs: 2, xl: "300px", lg: "100px" },
          width: "100%",
        }}
      >
        <Grid
          container
          flexDirection={"column"}
          alignItems={"start"}
          gap={"10px"}
          pb={"10px"}
        >
          <HeadingButton title="Solvo's Premium" />
          <Typography variant="h5" textAlign={"start"} fontWeight={600}>
            How Can We <span style={{ color: "#0273BD" }}>Help You?</span>
          </Typography>
        </Grid>
        <Grid container flexDirection={"column"} gap={"40px"}>
          <Grid
            container
            flexDirection={{ xs: "column", lg: "row" }}
            alignItems={{ xs: "center", lg: "start" }}
            gap={"40px"}
          >
            <Grid
              container
              flexDirection={"column"}
              flex={1}
              gap={"30px"}
              width={"100%"}
              border={"1px solid #608EF1"}
              p={"40px 20px"}
              borderRadius={"20px"}
            >
              <Grid
                container
                flexDirection={"column"}
                gap={"20px"}
                // width={"100%"}
              >
                <Grid
                  container
                  flexDirection={"column"}
                  gap={"20px"}
                  justifyContent={"space-around"}
                  // width={"100%"}
                  // py={"20px"}
                >
                  <Grid
                    flexDirection={{ xs: "column", lg: "row" }}
                    container
                    gap={"10px"}
                  >
                    <Grid
                      flexDirection={"column"}
                      container
                      flex={1}
                      gap={"16px"}
                    >
                      <Typography variant="body1" fontWeight={600}>
                        I am Looking For <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <SelectInput
                        value={FormInfo.lookingFor}
                        name={"lookingFor"}
                        onChange={handleChange}
                        options={LookingFor}
                        placeholder="start a new project"
                      />
                    </Grid>
                    <Grid
                      flexDirection={"column"}
                      container
                      flex={1}
                      gap={"16px"}
                    >
                      <Typography variant="body1" fontWeight={600}>
                        Services I Need <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <SelectInput
                        value={FormInfo.services}
                        onChange={handleChange}
                        options={Services}
                        placeholder="CFD Analysis"
                        name={"services"}
                      />
                    </Grid>
                    <Grid
                      flexDirection={"column"}
                      container
                      flex={1}
                      gap={"16px"}
                    >
                      <Typography variant="body1" fontWeight={600}>
                        Preferable Software{" "}
                        <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <SelectInput
                        value={FormInfo.software}
                        onChange={handleChange}
                        options={Software}
                        placeholder="Ansys"
                        name={"software"}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    flexDirection={{ xs: "column", lg: "row" }}
                    container
                    gap={"10px"}
                  >
                    <Grid
                      flexDirection={"column"}
                      container
                      flex={1}
                      gap={"16px"}
                    >
                      <Typography variant="body1" fontWeight={600}>
                        Full Name <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <TextField variant="standard" placeholder="John Doe" />
                    </Grid>
                    <Grid
                      flexDirection={"column"}
                      container
                      flex={1}
                      gap={"16px"}
                    >
                      <Typography variant="body1" fontWeight={600}>
                        Email <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <TextField
                        variant="standard"
                        placeholder="John@gmail.com"
                      />
                    </Grid>
                    <Grid
                      flexDirection={"column"}
                      container
                      flex={1}
                      gap={"16px"}
                    >
                      <Typography variant="body1" fontWeight={600}>
                        Estimated Budget <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <SelectInput
                        value={FormInfo.budgets}
                        onChange={handleChange}
                        options={budgets}
                        placeholder="> $5000"
                        name={"budgets"}
                        multiple
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    flexDirection={"column"}
                    container
                    size={12}
                    gap={"16px"}
                  >
                    <Typography variant="body1" fontWeight={600}>
                      Your Message <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                      variant="outlined"
                      multiline
                      minRows={5}
                      maxRows={5}
                      placeholder="This is a message"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px", // affects the input wrapper
                          "& fieldset": {
                            borderRadius: "12px", // affects the outline itself
                          },
                          "&:hover fieldset": {
                            borderColor: "#005BA6", // optional: custom hover color
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#005BA6", // optional: focus color
                          },
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="This project requires an NDA"
                  sx={{ color: "#0273BD" }}
                />
                <Grid container flexDirection={"column"} gap={"0px"}>
                  <Typography variant="body1" fontWeight={600}>
                    Upload Documents (Optional)
                  </Typography>
                  <Grid
                    container
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"end"}
                  >
                    <Typography variant="body1" color="#797979">
                      Choose file to upload
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#FA8301",
                        color: "white",
                        borderRadius: "12px",
                      }}
                    >
                      Browse File
                    </Button>
                  </Grid>
                  <Divider sx={{ mt: "8px", bgcolor: "black" }} />
                </Grid>
                <Button
                  variant="contained"
                  endIcon={<ArrowRightIcon />}
                  sx={{
                    width: "fit-content",
                    height: "40px",
                    borderRadius: "12px",
                    textTransform: "none",
                    mt: "10px",
                  }}
                >
                  Send us a message
                </Button>
              </Grid>
            </Grid>
            <Paper
              elevation={4}
              sx={{
                borderRadius: "20px",
                maxWidth: "360px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
              }}
            >
              <Grid
                container
                flexDirection={"column"}
                gap={"10px"}
                p={"30px 20px 20px 20px"}
                // height={"fit-content"}
              >
                <Typography variant="h5" textAlign={"start"}>
                  We’re just a{" "}
                  <span style={{ color: "#0273BD" }}>message away!</span>
                </Typography>
                <Grid
                  container
                  flexDirection={"row"}
                  gap={"10px"}
                  mt={2}
                  flexWrap={"nowrap"}
                >
                  <CheckCircleOutlineIcon sx={{ color: "#0273BD" }} />
                  <Typography variant="body1">
                    We will respond to you within 24 hours
                  </Typography>
                </Grid>
                <Grid
                  container
                  flexDirection={"row"}
                  gap={"10px"}
                  flexWrap={"nowrap"}
                >
                  <CheckCircleOutlineIcon sx={{ color: "#0273BD" }} />
                  <Typography variant="body1">
                    You’ll be talking to CAE Engineers (no account managers).
                  </Typography>
                </Grid>
              </Grid>
              <Grid container height={"100%"}>
                <Image
                  src={images.ContactImg}
                  alt="contact-img"
                  width={400}
                  height={600}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "510px",
                    borderRadius: "0 0 20px 20px",
                  }}
                />
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
