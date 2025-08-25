"use client";

import React, { useState } from "react";
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
import images from "@/assets/images";
// import ourprojectsvg from "@/assets/images/Services/our project section.svg";
import Image from "next/image";

interface Project {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

// Duplicate projects to have 9 items
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
  {
    category: "All Categories",
    title: "Advanced Machine Learning Techniques in 2025",
    description:
      "Lorem Ipsum text goes here for ML project description for demo purpose.",
    author: "Aisha Khan",
    date: "August 01, 2025",
  },
  {
    category: "All Categories",
    title: "Cloud Computing Trends for Modern Applications",
    description:
      "Lorem Ipsum text goes here for cloud project description for demo purpose.",
    author: "Ali Raza",
    date: "August 05, 2025",
  },
  {
    category: "All Categories",
    title: "Next Gen Web Development Tools Overview",
    description:
      "Lorem Ipsum text goes here for web dev project description for demo purpose.",
    author: "Sara Ahmed",
    date: "August 10, 2025",
  },
  {
    category: "All Categories",
    title: "AI in Healthcare: Modern Applications",
    description:
      "Lorem Ipsum text goes here for AI healthcare project description.",
    author: "Mohsin Ali",
    date: "August 15, 2025",
  },
  {
    category: "All Categories",
    title: "Mobile App Design Trends in 2025",
    description:
      "Lorem Ipsum text goes here for mobile app project description.",
    author: "Zara Khan",
    date: "August 18, 2025",
  },
  {
    category: "All Categories",
    title: "Cybersecurity Strategies for Startups",
    description:
      "Lorem Ipsum text goes here for cybersecurity project description.",
    author: "Omar Farooq",
    date: "August 20, 2025",
  },
];

const ProjectsSection = () => {
  const [page, setPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(projects.length / cardsPerPage);

  const handleNext = () => {
    setPage((prev) => (prev + 1 < totalPages ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  // Slice projects for current page
  const visibleProjects = projects.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <Box
      sx={{
        px: { xs: 2, md: "60px", xl: "300px" },
        py: 8,
        width: "100%",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: "0rem",
          zIndex: 0,
          display: { xs: "none", md: "block" },
        }}
      >
        <Image
          src={images.ourprojectsvg}
          alt="Background Left"
          height={500}
          width={500}
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        Our <span style={{ color: "#1976d2" }}>Projects</span>
      </Typography>
      <Typography variant="body1" sx={{ color: "black", mb: 6 }}>
        See how Solvo Products has helped its clients achieve their vision of
        digital innovation.
      </Typography>

      <Grid
        container
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="center"
        gap={"20px"}
      >
        {visibleProjects.map((project, index) => (
          <Grid flex={1} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                p: 1,
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#e0e0e0",
                  height: 160,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />
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

      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 6 }}
      >
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

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            onClick={handlePrev}
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
            onClick={handleNext}
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
