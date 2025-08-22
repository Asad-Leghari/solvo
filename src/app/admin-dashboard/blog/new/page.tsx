"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import BlogForm from "@/presentation/admin-dashboard/form/BlogForm";

export default function NewBlogPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Create New Blog
      </Typography>
      <BlogForm />
    </Container>
  );
}
