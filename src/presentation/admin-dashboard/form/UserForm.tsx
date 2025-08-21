"use client";

import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import useUsersStore from "../../../application/stores/users/UsersStore";

interface UserFormProps {
  onClose?: () => void; // allow closing drawer
}

const UserForm = ({ onClose }: UserFormProps) => {
  const { createUser, loading } = useUsersStore();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser(formData);
    setFormData({ username: "", email: "", password: "" });
    onClose?.(); // close drawer after save
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        // maxWidth: 400,
        width: "100%",
        mx: "auto",
        p: 2,
      }}
    >
      {[
        { label: "Username", name: "username", type: "text" },
        { label: "Email", name: "email", type: "email" },
        { label: "Password", name: "password", type: "password" },
      ].map((field) => (
        <TextField
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
          value={(formData as any)[field.name]}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          size="small"
          required
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

export default UserForm;
