import React from "react";
import Image from "next/image";
import { Grid, Typography, Button, Box, Paper } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import images from "@/assets/images";

const DetailsSection: React.FC = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, xl: "300px" },
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
        flexDirection={"column"}
        gap={"100px"}
        size={12}
      >
        <Grid
          container
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Grid container flex={1}>
            <Image
              src={images.services.EFA1}
              alt="Finite Element Analysis"
              style={{
                objectFit: "contain",
                width: "480px",
                height: "265px",
                borderRadius: "29px",
              }}
              width={300}
              height={300}
            />
          </Grid>
          <Grid
            container
            flexDirection={"column"}
            justifyContent={"center"}
            gap={"20px"}
            height={"100%"}
            width={"480px"}
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
        <Grid
          container
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Grid
            container
            flexDirection={"column"}
            justifyContent={"center"}
            gap={"20px"}
            height={"100%"}
            width={"480px"}
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
          <Grid container height={"100%"} width={"480px"}>
            <Image
              src={images.services.EFA1}
              alt="Finite Element Analysis"
              style={{
                objectFit: "contain",
                width: "480px",
                height: "265px",
                borderRadius: "29px",
              }}
              width={300}
              height={300}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Grid container flex={1}>
            <Image
              src={images.services.EFA1}
              alt="Finite Element Analysis"
              style={{
                objectFit: "contain",
                width: "480px",
                height: "265px",
                borderRadius: "29px",
              }}
              width={300}
              height={300}
            />
          </Grid>
          <Grid
            container
            flexDirection={"column"}
            justifyContent={"center"}
            gap={"20px"}
            height={"100%"}
            width={"480px"}
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
