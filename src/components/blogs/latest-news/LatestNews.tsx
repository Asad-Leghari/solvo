"use client";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ProjectGrid } from "../articles/ProjectGrid";

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

const LatestNews = () => {
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
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-[24px] leading-[32px] text-primary text-center">
        Solvo Engineers{" "}
        <span className="text-black">Latest news and updates</span>
      </h1>

      <ProjectGrid projects={visibleProjects} />
    </div>
  );
};

export default LatestNews;
