"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Project {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

const projects: Project[] = [
  {
    category: "All Categories",
    title: "The Best Tools and Frameworks for Data Analysis in 2025",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    author: "Mohsin Ali",
    date: "July 12, 2025",
  },
  {
    category: "All Categories",
    title: "The Best Tools and Frameworks for Data Analysis in 2025",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    author: "Mohsin Ali",
    date: "July 12, 2025",
  },
  {
    category: "All Categories",
    title: "The Best Tools and Frameworks for Data Analysis in 2025",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    author: "Mohsin Ali",
    date: "July 12, 2025",
  },
];

const ProjectsSection = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 8 },
        py: 8,
        textAlign: "center",
        maxWidth: "1400px", // keeps cards from being too wide
        mx: "auto", // center container
      }}
    >
      {/* Section Title */}
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        Our <span style={{ color: "#1976d2" }}>Projects</span>
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", mb: 6 }}>
        See how Solvo Products has helped its clients achieve their vision of
        digital innovation.
      </Typography>

      {/* Projects Grid */}
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                p: 1,
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                height: "100%",
                maxWidth: 360, // makes each card narrower
                mx: "auto", // center cards inside grid
              }}
            >
              {/* Grey Placeholder */}
              <Box
                sx={{
                  backgroundColor: "#e0e0e0",
                  height: 160,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />

              {/* Card Content */}
              <CardContent sx={{ textAlign: "left" }}>
                <Typography
                  variant="caption"
                  sx={{ color: "#1976d2", fontWeight: "500" }}
                >
                  {project.category}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mt: 1, mb: 1 }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 3 }}
                >
                  {project.description}
                </Typography>

                {/* Author Info */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Avatar sx={{ width: 32, height: 32, bgcolor: "#bdbdbd" }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {project.author}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      {project.date}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Bottom Buttons */}
      {/* Bottom Buttons */}
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 6 }}
      >
        {/* Left Button */}
        <Button
          variant="contained"
          sx={{
            bgcolor: "#0273BD",
            color: "white",
            textTransform: "capitalize",
            borderRadius: "8px",
            fontWeight: 600,
            px: 3,
            py: 1,
          }}
        >
          View
        </Button>

        {/* Right Buttons (Prev & Next) */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            className="custom-swiper-prev-btn"
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "#0273BD",
              textTransform: "capitalize",
              borderRadius: "8px",
              fontWeight: 600,
              width: { xs: 32, md: "fit-content" },
              height: { xs: 32, md: "fit-content" },
              minWidth: { xs: 32, md: "unset" },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: { xs: 18, md: "inherit" } }} />
          </Button>
          <Button
            className="custom-swiper-next-btn"
            variant="contained"
            sx={{
              bgcolor: "#0273BD",
              color: "white",
              textTransform: "capitalize",
              borderRadius: "8px",
              fontWeight: 600,
              width: { xs: 32, md: "fit-content" },
              height: { xs: 32, md: "fit-content" },
              minWidth: { xs: 32, md: "unset" },
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: { xs: 18, md: "inherit" } }} />
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
