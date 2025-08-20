import React from "react";
import Image from "next/image";
import { Grid, Typography, Button, Box } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import images from "@/assets/images";

const DetailsSection: React.FC = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, xl: "300px", lg: "100px" },
        py: 10,
        backgroundColor: "#f9f9f9",
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
        display: "flex",
      }}
    >
      <Grid
        container
        justifyContent="start"
        alignItems={"center"}
        flexDirection={"column"}
        gap={"100px"}
        size={12}
      >
        {/* grid 1 */}
        <Grid
          container
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent={"space-between"}
          flexWrap={"nowrap"}
          gap={{ xs: "20px", md: "120px" }}
        >
          <Grid container flex={1} justifyContent="center">
            <Image
              src={images.services.EFA1}
              alt="Finite Element Analysis"
              style={{
                objectFit: "contain",
                width: "100%", // ✅ responsive on mobile
                height: "auto", // ✅ keep ratio
                maxWidth: "480px", // ✅ same as web
                maxHeight: "265px", // ✅ same as web
                borderRadius: "29px",
              }}
              width={480}
              height={265}
            />
          </Grid>
          <Grid
            container
            flexDirection={"column"}
            justifyContent={"center"}
            gap={"20px"}
            height={"100%"}
            width={{ xs: "100%", md: "480px" }} // ✅ responsive text width
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Finite Element Analysis <br />
              <Box component="span" color="primary.main" fontWeight="bold">
                (EFA)
              </Box>
            </Typography>
            <Typography variant="body1">
              Optimize designs and ensure structural integrity with precise and
              efficient simulation techniques.
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowRightIcon />}
              sx={{
                borderRadius: "12px",
                textTransform: "capitalize",
                width: "fit-content",
              }}
            >
              Read More
            </Button>
          </Grid>
        </Grid>

        {/* grid 2 */}
        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent={"space-between"}
          flexWrap={"nowrap"}
          gap={{ xs: "20px", md: "120px" }}
        >
          <Grid
            container
            flexDirection={"column"}
            justifyContent={"center"}
            gap={"20px"}
            height={"100%"}
            width={{ xs: "100%", md: "480px" }} // ✅ responsive text width
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Finite Element Analysis <br />
              <Box component="span" color="primary.main" fontWeight="bold">
                (EFA)
              </Box>
            </Typography>
            <Typography variant="body1">
              Optimize designs and ensure structural integrity with precise and
              efficient simulation techniques.
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowRightIcon />}
              sx={{
                borderRadius: "12px",
                textTransform: "capitalize",
                width: "fit-content",
              }}
            >
              Read More
            </Button>
          </Grid>
          <Grid container justifyContent="center">
            <Image
              src={images.services.EFA1}
              alt="Finite Element Analysis"
              style={{
                objectFit: "contain",
                width: "100%", // ✅ responsive
                height: "auto",
                maxWidth: "480px", // ✅ web size
                maxHeight: "265px",
                borderRadius: "29px",
              }}
              width={480}
              height={265}
            />
          </Grid>
        </Grid>

        {/* grid 3 */}
        <Grid
          container
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent={"space-between"}
          flexWrap={"nowrap"}
          gap={{ xs: "20px", md: "120px" }}
        >
          <Grid container flex={1} justifyContent="center">
            <Image
              src={images.services.EFA1}
              alt="Finite Element Analysis"
              style={{
                objectFit: "contain",
                width: "100%", // ✅ responsive
                height: "auto",
                maxWidth: "480px", // ✅ web size
                maxHeight: "265px",
                borderRadius: "29px",
              }}
              width={480}
              height={265}
            />
          </Grid>
          <Grid
            container
            flexDirection={"column"}
            justifyContent={"center"}
            gap={"20px"}
            height={"100%"}
            width={{ xs: "100%", md: "480px" }} // ✅ responsive text width
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Finite Element Analysis <br />
              <Box component="span" color="primary.main" fontWeight="bold">
                (EFA)
              </Box>
            </Typography>
            <Typography variant="body1">
              Optimize designs and ensure structural integrity with precise and
              efficient simulation techniques.
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowRightIcon />}
              sx={{
                borderRadius: "12px",
                textTransform: "capitalize",
                width: "fit-content",
              }}
            >
              Read More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsSection;
