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
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import images from "@/assets/images";
import Image from "next/image";

const Contact = () => {
  return (
    <Box
      py={"100px"}
      bgcolor={"#ffffff"}
      boxShadow={"0px 24px 34px rgba(0, 0, 0, 0.11)"}
      borderRadius={"0 0 29px 29px"}
    >
      <Container maxWidth="xl">
        <Grid container flexDirection={"column"} gap={"40px"}>
          <Grid container flexDirection={"row"} gap={"40px"}>
            <Grid container flexDirection={"column"} flex={1} gap={"10px"}>
              <HeadingButton title="Solvo's Premium" />
              <Typography variant="h4" textAlign={"start"} fontWeight={600}>
                How Can We <span style={{ color: "#0273BD" }}>Help You?</span>
              </Typography>
              <Grid
                container
                flexDirection={"column"}
                gap={"10px"}
                p={"20px"}
                border={"1px solid #608EF1"}
                borderRadius={"20px"}
              >
                <Grid flexDirection={"row"} container gap={"10px"}>
                  <Grid flexDirection={"column"} container flex={1}>
                    <Typography variant="h6" fontWeight={600}>
                      I am Looking For
                    </Typography>
                    <TextField variant="outlined" placeholder="CFD" />
                  </Grid>
                  <Grid flexDirection={"column"} container flex={1}>
                    <Typography variant="h6" fontWeight={600}>
                      Services I Need
                    </Typography>
                    <TextField variant="outlined" placeholder="CFD Analysis" />
                  </Grid>
                  <Grid flexDirection={"column"} container flex={1}>
                    <Typography variant="h6" fontWeight={600}>
                      Preferable Software
                    </Typography>
                    <TextField variant="outlined" placeholder="Ansys" />
                  </Grid>
                </Grid>
                <Grid flexDirection={"row"} container gap={"10px"}>
                  <Grid flexDirection={"column"} container flex={1}>
                    <Typography variant="h6" fontWeight={600}>
                      Full Name
                    </Typography>
                    <TextField variant="outlined" placeholder="John Doe" />
                  </Grid>
                  <Grid flexDirection={"column"} container flex={1}>
                    <Typography variant="h6" fontWeight={600}>
                      Email
                    </Typography>
                    <TextField
                      variant="outlined"
                      placeholder="John@gmail.com"
                    />
                  </Grid>
                  <Grid flexDirection={"column"} container flex={1}>
                    <Typography variant="h6" fontWeight={600}>
                      Estimated Budget
                    </Typography>
                    <TextField variant="outlined" placeholder="$500" />
                  </Grid>
                </Grid>
                <Grid flexDirection={"column"} container size={12}>
                  <Typography variant="h6" fontWeight={600}>
                    Your Message
                  </Typography>
                  <TextField
                    multiline
                    maxRows={10}
                    minRows={10}
                    placeholder="This is a message"
                  />
                </Grid>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="This project requires an NDA"
                  sx={{ color: "#0273BD" }}
                />
                <Grid container flexDirection={"column"} gap={"0px"}>
                  <Typography variant="h6">Upload Documents</Typography>
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
                    textTransform: "capitalize",
                    mt: "10px",
                  }}
                >
                  Send Us a Message
                </Button>
              </Grid>
            </Grid>
            <Paper
              elevation={4}
              sx={{
                borderRadius: "29px",
                width: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
              }}
            >
              <Grid
                container
                flexDirection={"column"}
                gap={"10px"}
                p={"20px"}
                height={"fit-content"}
              >
                <Typography variant="h5" textAlign={"start"}>
                  We’re just a{" "}
                  <span style={{ color: "#0273BD" }}>message away!</span>
                </Typography>
                <Grid container flexDirection={"row"} gap={"10px"}>
                  <CheckCircleOutlineIcon />
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
                  <CheckCircleOutlineIcon />
                  <Typography variant="body1">
                    You’ll be talking to CAE Engineers (no account managers).
                  </Typography>
                </Grid>
              </Grid>
              <Grid container flex={1}>
                <Image
                  src={images.ContactImg}
                  alt="contact-img"
                  width={400}
                  height={600}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    borderRadius: "0 0 29px 29px",
                  }}
                />
              </Grid>
            </Paper>
          </Grid>
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"space-between"}
            bgcolor={"#0273BD"}
            p={"45px"}
            borderRadius={"24px"}
          >
            <Image
              src={images.ContactFooterImg}
              alt="contact-footer-img"
              width={200}
              height={330}
              objectFit="contain"
            />
            <Grid
              flex={1}
              container
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"20px"}
            >
              <Typography variant="h4" color="white" textAlign={"center"}>
                Discover your potential in a <br /> supportive, growth-focused{" "}
                <br />
                environment.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ffffff",
                  color: "black",
                  textTransform: "capitalize",
                  height: "52px",
                  borderRadius: "12px",
                  width: "154px",
                }}
              >
                Apply For Job
              </Button>
            </Grid>
            <Image
              src={images.ContactFooterImg}
              alt="contact-footer-img"
              width={200}
              height={330}
              objectFit="contain"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
