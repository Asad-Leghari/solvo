"use client";

import { Box, TextField, Button } from "@mui/material";
import { useBlogStore } from "@/application/stores/blog/useBlogStore";
import React, { useState, useRef } from "react";
import Editor, { EditorRef } from "../editor/Editor";

interface BlogFormProps {
  onClose?: () => void;
}

const BlogForm = ({ onClose }: BlogFormProps) => {
  const { createBlog, loading } = useBlogStore();
  const editorRef = useRef<EditorRef>(null);

  const [blogForm, setBlogForm] = useState({
    title: "",
    description: "", // stores JSON string from Editor.js
    image: "",
    category: "",
    createdBy: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogForm({ ...blogForm, [e.target.name]: e.target.value });
  };

  const handleDescriptionChange = (value: string) => {
    setBlogForm({ ...blogForm, description: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Optionally save latest editor content before submit
    if (editorRef.current) {
      const savedData = await editorRef.current.save();
      blogForm.description = JSON.stringify(savedData);
    }

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
        maxWidth: "700px",
        mx: "auto", // centers horizontally
        p: 2,
      }}
    >
      <TextField
        label="Title"
        name="title"
        value={blogForm.title}
        onChange={handleChange}
        fullWidth
        size="small"
        required
        InputProps={{
          sx: {
            borderRadius: "12px",
            bgcolor: "#fafafa",
            "&:hover": { bgcolor: "#f0f0f0" },
            "&.Mui-focused": {
              bgcolor: "white",
              boxShadow: "0 0 0 2px rgba(0,0,0,0.2)",
            },
          },
        }}
      />

      <Box
        sx={{
          borderRadius: "12px",
          bgcolor: "#fafafa",
          p: 1,
          minHeight: "200px",
        }}
      >
        <Editor
          ref={editorRef}
          value={blogForm.description}
          onChange={handleDescriptionChange}
          placeholder="Write your blog content here..."
        />
      </Box>

      <TextField
        label="Image URL"
        name="image"
        value={blogForm.image}
        onChange={handleChange}
        fullWidth
        size="small"
        required
        InputProps={{
          sx: {
            borderRadius: "12px",
            bgcolor: "#fafafa",
            "&:hover": { bgcolor: "#f0f0f0" },
            "&.Mui-focused": {
              bgcolor: "white",
              boxShadow: "0 0 0 2px rgba(0,0,0,0.2)",
            },
          },
        }}
      />
      <TextField
        label="Category"
        name="category"
        value={blogForm.category}
        onChange={handleChange}
        fullWidth
        size="small"
        required
        InputProps={{
          sx: {
            borderRadius: "12px",
            bgcolor: "#fafafa",
            "&:hover": { bgcolor: "#f0f0f0" },
            "&.Mui-focused": {
              bgcolor: "white",
              boxShadow: "0 0 0 2px rgba(0,0,0,0.2)",
            },
          },
        }}
      />
      <TextField
        label="Created By"
        name="createdBy"
        value={blogForm.createdBy}
        onChange={handleChange}
        fullWidth
        size="small"
        required
        InputProps={{
          sx: {
            borderRadius: "12px",
            bgcolor: "#fafafa",
            "&:hover": { bgcolor: "#f0f0f0" },
            "&.Mui-focused": {
              bgcolor: "white",
              boxShadow: "0 0 0 2px rgba(0,0,0,0.2)",
            },
          },
        }}
      />

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
