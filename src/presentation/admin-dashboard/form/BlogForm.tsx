"use client";

import { Box, TextField, Button } from "@mui/material";
import { useBlogStore } from "@/application/stores/blog/useBlogStore";
import React, { useState } from "react";

interface BlogFormProps {
  onClose?: () => void;
}

const BlogForm = ({ onClose }: BlogFormProps) => {
  const { createBlog, loading } = useBlogStore();

  const [blogForm, setBlogForm] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    createdBy: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogForm({ ...blogForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBlog(blogForm);
    setBlogForm({
      title: "",
      description: "",
      image: "",
      category: "",
      createdBy: "",
    });
    onClose?.();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        // maxWidth: "100%",
        mx: "auto",
        p: 2,
      }}
    >
      {/** Sexy reusable style for all text fields */}
      {[
        { label: "Title", name: "title" },
        { label: "Description", name: "description" },
        { label: "Image URL", name: "image" },
        { label: "Category", name: "category" },
        { label: "Created By", name: "createdBy" },
      ].map((field) => (
        <TextField
          key={field.name}
          label={field.label}
          name={field.name}
          value={(blogForm as any)[field.name]}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          size="small"
          InputProps={{
            sx: {
              borderRadius: "12px",
              bgcolor: "#fafafa",
              "&:hover": {
                bgcolor: "#f0f0f0",
              },
              "&.Mui-focused": {
                bgcolor: "white",
                boxShadow: "0 0 0 2px rgba(0,0,0,0.2)",
              },
            },
          }}
        />
      ))}

      <Box sx={{ display: "flex", gap: 1.5, mt: 3 }}>
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          fullWidth
          sx={{
            bgcolor: "black",
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: "600",
            py: 1.2,
            "&:hover": { bgcolor: "#333" },
          }}
        >
          {loading ? "Creating..." : "Save"}
        </Button>
        <Button
          type="button"
          variant="outlined"
          fullWidth
          sx={{
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: "600",
            borderColor: "#ddd",
            color: "#333",
            py: 1.2,
            "&:hover": { bgcolor: "#f9f9f9" },
          }}
          onClick={onClose}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default BlogForm;
