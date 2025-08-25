import React from "react";
import { Grid, Typography, Box } from "@mui/material";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const DetailsPart: React.FC = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: "40px", xl: "300px", lg: 2 },
        py: 10,
        backgroundColor: "#f9f9f9",
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
        display: "flex",
        // border: "2px solid black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        // border={"2px solid black"}
        gap="100px"
      >
        {/* Grid 1 */}
        <Grid
          container
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent="center"
          flexWrap="nowrap"
          gap={{ xs: "20px", md: "300px" }}
          width="100%"
        >
          <Grid
            container
            flexDirection="column"
            justifyContent="center"
            gap="20px"
            height="100%"
            flex={1}
            sx={{
              maxWidth: { xs: "100%", md: "500px" },
              overflowWrap: "break-word",
              wordWrap: "break-word",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Finite Element Analysis (EFA)
            </Typography>
            <Typography variant="body1">
              Enhancing Designs With FEA And Strategic Sourcing. Finite Element
              Analysis (FEA) allows engineers to test how products perform under
              stress, heat, or other real-world conditions. This process helps
              identify weaknesses and make improvements early, saving time and
              money. Additionally, combining FEA with strategic sourcing ensures
              that materials and components are reliable and cost-effective.
              Together, these methods create products that meet performance
              standards while staying within budget.
            </Typography>
          </Grid>

          <Grid container flex={1} justifyContent="start">
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "500px" },
                height: { xs: "250px", sm: "300px", md: "400px" },
                maxWidth: "500px",
                backgroundColor: "#ccc",
                borderRadius: "29px",
                minWidth: "0px", // Added to prevent collapsing on mobile
              }}
            />
          </Grid>
        </Grid>

        {/* Grid 2 */}
        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          flexWrap="nowrap"
          gap={{ xs: "20px", md: "300px" }}
          width="100%"
        >
          <Grid container flex={1} justifyContent="start">
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "500px" },
                height: { xs: "250px", sm: "300px", md: "400px" },
                maxWidth: "500px",
                backgroundColor: "#ccc",
                borderRadius: "29px",
                minWidth: "0px", // Added to prevent collapsing on mobile
              }}
            />
          </Grid>

          <Grid
            container
            flexDirection="column"
            justifyContent="center"
            gap="20px"
            height="100%"
            flex={1}
            sx={{
              maxWidth: { xs: "100%", md: "500px" },
              overflowWrap: "break-word",
              wordWrap: "break-word",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Finite Element Analysis (EFA)
            </Typography>
            <Typography variant="body1">
              Enhancing Designs With FEA And Strategic Sourcing. Finite Element
              Analysis (FEA) allows engineers to test how products perform under
              stress, heat, or other real-world conditions. This process helps
              identify weaknesses and make improvements early, saving time and
              money. Additionally, combining FEA with strategic sourcing ensures
              that materials and components are reliable and cost-effective.
              Together, these methods create products that meet performance
              standards while staying within budget.
            </Typography>
          </Grid>
        </Grid>

        {/* Grid 3 */}
        <Grid
          container
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          flexWrap="nowrap"
          gap={{ xs: "20px", md: "300px" }}
          width="100%"
        >
          <Grid
            container
            flexDirection="column"
            justifyContent="center"
            gap="20px"
            height="100%"
            flex={1}
            sx={{
              maxWidth: { xs: "100%", md: "500px" },
              overflowWrap: "break-word",
              wordWrap: "break-word",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Finite Element Analysis (EFA)
            </Typography>
            <Typography variant="body1">
              Enhancing Designs With FEA And Strategic Sourcing Finite Element
              Analysis (FEA) Allows Engineers To Test How Products Perform Under
              Stress, Heat, Or Other Real-World Conditions. This Process Helps
              Identify Weaknesses And Make Improvements Early, Saving Time And
              Money. Additionally, Combining FEA With Strategic Sourcing Ensures
              That Materials And Components Are Reliable And Cost-Effective.
              Together, These Methods Create Products That Meet Performance
              Standards While Staying Within Budget.
            </Typography>
          </Grid>

          <Grid container flex={1} justifyContent="start">
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "500px" },
                height: { xs: "250px", sm: "300px", md: "400px" },
                maxWidth: "500px",
                backgroundColor: "#ccc",
                borderRadius: "29px",
                border: "1px solid #bbb",
                minWidth: "0px", // Changed from "auto" to prevent collapsing
                // flexShrink: 0,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsPart;
