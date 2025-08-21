"use client";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ProjectGrid } from "./ProjectGrid";

interface Project {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

const categories = ["All Categories", "Category 2", "Category 3", "Category 4"];

// Duplicate projects to have 9 items
const projects: Project[] = [
  {
    category: "All Categories",
    title: "Top Data Tools and Platforms for Growth in 2025 Now",
    description:
      "Explore modern tools, platforms, and practices that support efficient data analysis and reporting workflows daily.",
    author: "Mohsin Ali",
    date: "July 12, 2025",
  },
  {
    category: "All Categories",
    title: "Cloud Computing Services Evolving Rapidly in 2025 Now",
    description:
      "Explore modern tools, platforms, and practices that support efficient data analysis and reporting workflows daily.",
    author: "Aisha Khan",
    date: "July 12, 2025",
  },
  {
    category: "All Categories",
    title: "Frontend Trends in Design and Development",
    description:
      "Explore modern tools, platforms, and practices that support efficient data analysis and reporting workflows daily.",
    author: "Ali Raza",
    date: "July 12, 2025",
  },
  {
    category: "All Categories",
    title: "Artificial Intelligence in Everyday Tools for 2025",
    description:
      "Explore modern tools, platforms, and practices that support efficient data analysis and reporting workflows daily.",
    author: "Sara Ahmed",
    date: "July 12, 2025",
  },
  {
    category: "All Categories",
    title: "Top Cybersecurity Tactics for Startups Entering 2025",
    description:
      "Explore modern tools, platforms, and practices that support efficient data analysis and reporting workflows daily.",
    author: "Zara Khan",
    date: "July 12, 2025",
  },
  {
    category: "All Categories",
    title: "User Experience and Mobile App Design Tips for 2025",
    description:
      "Explore modern tools, platforms, and practices that support efficient data analysis and reporting workflows daily.",
    author: "Omar Farooq",
    date: "July 12, 2025",
  },
  {
    category: "All Categories",
    title: "Modern Engineering Workflows with Best Tools in 2025",
    description:
      "Explore modern tools, platforms, and practices that support efficient data analysis and reporting workflows daily.",
    author: "Aisha Khan",
    date: "July 12, 2025",
  },
  {
    category: "All Categories",
    title: "Quantum Computing Gains Momentum in Market by 2025",
    description:
      "Explore modern tools, platforms, and practices that support efficient data analysis and reporting workflows daily.",
    author: "Mohsin Ali",
    date: "July 12, 2025",
  },
  {
    category: "All Categories",
    title: "Open Source Solutions Rising Fast in the Year 2025",
    description:
      "Explore modern tools, platforms, and practices that support efficient data analysis and reporting workflows daily.",
    author: "Sara Ahmed",
    date: "July 12, 2025",
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Articles = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

  // Filter projects based on tab index
  const filteredProjects =
    value === 0
      ? visibleProjects // All categories
      : visibleProjects.filter((p) => p.category === categories[value]);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="w-full text-[24px] leading-[32px] text-primary text-center md:text-left">
        Insights & <span className="text-black">Articles</span>
      </h1>

      <Box sx={{ width: "100%", mt: 2 }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            maxWidth: { xs: 320, md: "100%" },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="scrollable auto tabs example"
          >
            {categories.map((label, idx) => (
              <Tab key={idx} label={label} {...a11yProps(idx)} />
            ))}
          </Tabs>
        </Box>

        {categories.map((_, idx) => (
          <CustomTabPanel key={idx} value={value} index={idx}>
            <ProjectGrid
              projects={
                // idx === 0
                visibleProjects
                //   : visibleProjects.filter(
                //       (p) => p.category === categories[idx]
                //     )
              }
            />
          </CustomTabPanel>
        ))}
      </Box>

      <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
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
    </div>
  );
};

export default Articles;
