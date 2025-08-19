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

interface ContactProps {
  displayBottomImage?: boolean;
}

const Contact = ({ displayBottomImage = true }: ContactProps) => {
  return (
    <Box
      py={"100px"}
      bgcolor={"#ffffff"}
      boxShadow={"0px 24px 34px rgba(0, 0, 0, 0.11)"}
      borderRadius={"0 0 29px 29px"}
      zIndex={2}
      pt={"100px"}
    >
      <Container maxWidth="xl">
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
              p={"30px 20px"}
              borderRadius={"20px"}
            >
              <HeadingButton title="Solvo's Premium" />
              <Typography variant="h5" textAlign={"start"} fontWeight={600}>
                How Can We <span style={{ color: "#0273BD" }}>Help You?</span>
              </Typography>
              <Grid
                container
                flexDirection={"column"}
                gap={"20px"}
                // width={"100%"}
              >
                <Grid
                  container
                  flexDirection={"column"}
                  gap={"40px"}
                  justifyContent={"space-around"}
                  // width={"100%"}
                  py={"20px"}
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
                        I am Looking For
                      </Typography>
                      <TextField variant="standard" placeholder="CFD" />
                    </Grid>
                    <Grid
                      flexDirection={"column"}
                      container
                      flex={1}
                      gap={"16px"}
                    >
                      <Typography variant="body1" fontWeight={600}>
                        Services I Need
                      </Typography>
                      <TextField
                        variant="standard"
                        placeholder="CFD Analysis"
                      />
                    </Grid>
                    <Grid
                      flexDirection={"column"}
                      container
                      flex={1}
                      gap={"16px"}
                    >
                      <Typography variant="body1" fontWeight={600}>
                        Preferable Software
                      </Typography>
                      <TextField variant="standard" placeholder="Ansys" />
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
                        Full Name
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
                        Email
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
                        Estimated Budget
                      </Typography>
                      <TextField variant="standard" placeholder="$500" />
                    </Grid>
                  </Grid>
                  <Grid
                    flexDirection={"column"}
                    container
                    size={12}
                    gap={"16px"}
                  >
                    <Typography variant="body1" fontWeight={600}>
                      Your Message
                    </Typography>
                    <TextField
                      variant="standard"
                      multiline
                      maxRows={3}
                      placeholder="This is a message"
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
                maxWidth: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
              }}
            >
              <Grid
                container
                flexDirection={"column"}
                gap={"10px"}
                p={"30px 20px 40px 20px"}
                // height={"fit-content"}
              >
                <Typography variant="h4" textAlign={"start"}>
                  We’re just a{" "}
                  <span style={{ color: "#0273BD" }}>message away!</span>
                </Typography>
                <Grid container flexDirection={"row"} gap={"10px"} mt={2}>
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
              <Grid container height={"100%"}>
                <Image
                  src={images.ContactImg}
                  alt="contact-img"
                  width={400}
                  height={600}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "485px",
                    borderRadius: "0 0 29px 29px",
                  }}
                />
              </Grid>
            </Paper>
          </Grid>
          {displayBottomImage && (
            <Grid
              container
              flexDirection={{ xs: "column", md: "row" }}
              justifyContent={"space-between"}
              bgcolor={"#0273BD"}
              p={{ xs: "8px", sm: "45px 100px" }}
              gap={{ xs: "20px", md: "0px" }}
              borderRadius={"24px"}
            >
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Image
                  src={images.ContactFooterImg}
                  alt="contact-footer-img"
                  width={200}
                  height={330}
                  objectFit="contain"
                />
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Image
                  src={images.ContactFooterImg90}
                  alt="contact-footer-img"
                  width={200}
                  height={200}
                  objectFit="contain"
                  style={{ width: "100%" }}
                />
              </Box>
              <Grid
                flex={1}
                container
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"20px"}
              >
                <Typography
                  variant="h4"
                  color="white"
                  textAlign={"center"}
                  display={{ xs: "none", md: "block" }}
                >
                  Discover your potential in a <br /> supportive, growth-focused{" "}
                  <br />
                  environment.
                </Typography>
                <Typography
                  variant="h4"
                  color="white"
                  textAlign={"center"}
                  display={{ xs: "block", md: "none" }}
                >
                  Discover your potential in a supportive, growth-focused
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
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Image
                  src={images.ContactFooterImg}
                  alt="contact-footer-img"
                  width={200}
                  height={330}
                  objectFit="contain"
                />
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Image
                  src={images.ContactFooterImg90}
                  alt="contact-footer-img"
                  width={200}
                  height={200}
                  objectFit="contain"
                  style={{ width: "100%" }}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
