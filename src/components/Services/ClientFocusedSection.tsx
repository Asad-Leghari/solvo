import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Image from "next/image";
import images from "@/assets/images";

const ClientFocusedSection = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: "60px", xl: "300px" },
        py: 8,
        backgroundColor: "#88D8E833",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid
          flex={1.5}
          sx={{
            height: { xs: "auto", lg: "444px" },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Client-Focused <span style={{ color: "#1976d2" }}>Solutions</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Your Vision, Our Expertise
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: "black",
                mb: 3,
              }}
            >
              At Solvo Engineers, We prioritize your unique needs, delivering
              tailor-made solutions that align with your goals, from concepts to
              completion, our client-focused approach ensures:
              <br />
              <br />
              Innovative Designs That Solve Real-World Challenges.
              <br />
              Expert Support At Every Step Of The Project.
              <br />
              On-Time Delivery With Uncompromised Quality.
              <br />
              <span style={{ color: "#1976d2" }}>
                Ready to Take your projects to next level?
              </span>
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                endIcon={<ArrowRightIcon />}
                sx={{
                  width: "fit-content",
                  color: "white",
                  height: "40px",
                  borderRadius: "12px",
                  textTransform: "capitalize",
                  mb: "20px",
                }}
              >
                Learn More
              </Button>
              <Button
                variant="outlined"
                endIcon={<ArrowRightIcon />}
                sx={{
                  width: "fit-content",
                  height: "40px",
                  color: "#0273BD",
                  borderRadius: "12px",
                  textTransform: "capitalize",
                  mb: "20px",
                }}
              >
                Book a free Consultation
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid
          flex={1}
          sx={{
            height: { xs: "auto", lg: "356px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Image
            src={images.services.clientimage}
            alt="Client Solutions"
            width={368}
            height={356}
            style={{
              objectFit: "cover",
              borderRadius: "12px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClientFocusedSection;
