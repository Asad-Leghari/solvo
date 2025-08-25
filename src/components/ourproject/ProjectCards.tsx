"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = Array.from({ length: 9 }, () => ({
  title: "The Best Tools and Frameworks for Data Analysis in 2025",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
}));

const ProjectCards = () => {
  const [page, setPage] = useState(1);
  const totalPages = 4;

  const chunkedProjects = [];
  for (let i = 0; i < projects.length; i += 3) {
    chunkedProjects.push(projects.slice(i, i + 3));
  }

  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.25)", // heavier bottom shadow
        borderRadius: 3,
        mb: 6, // margin bottom for spacing
      }}
    >
      <Box
        sx={{
          px: { xs: 2, md: "60px", xl: "300px" },
          py: 8,
          width: "100%",
        }}
      >
        {chunkedProjects.map((row, rowIndex) => (
          <Grid
            container
            key={rowIndex}
            spacing={4}
            justifyContent="center"
            sx={{
              mb: rowIndex !== chunkedProjects.length - 1 ? 4 : 0,
              flexWrap: "wrap",
            }}
          >
            {row.map((project, index) => (
              <Box
                key={index}
                sx={{
                  flex: {
                    xs: "1 1 100%",
                    md: "1 1 calc(33.33% - 32px)",
                  },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    // height: 500,
                    borderRadius: 3,
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    p: 1.25,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: 321,
                      backgroundColor: "#e0e0e0",
                      borderRadius: 2,
                      mb: 1.25,
                    }}
                  />

                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      p: 0,
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: "bold", mb: 0 }}
                      gutterBottom={false}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 0 }}
                      gutterBottom={false}
                    >
                      {project.description}
                    </Typography>
                  </Box>
                </Card>
              </Box>
            ))}
          </Grid>
        ))}

        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              onClick={() => setPage(i + 1)}
              variant="contained"
              sx={{
                minWidth: 40,
                height: 40,
                bgcolor: page === i + 1 ? "#1976d2" : "white",
                color: page === i + 1 ? "white" : "#1976d2",
                border: "1px solid #1976d2",
                borderRadius: "8px",
                fontWeight: 600,
              }}
            >
              {i + 1}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCards;
