"use client";

import { Box, TextField, Button } from "@mui/material";

const ServiceForm = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
      {[
        { label: "ID", name: "id", type: "text" },
        { label: "Name", name: "name", type: "text" },
        { label: "Description", name: "description", type: "text" },
      ].map((field) => (
        <TextField
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
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
      ))}
    </Box>
  );
};

export default ServiceForm;
