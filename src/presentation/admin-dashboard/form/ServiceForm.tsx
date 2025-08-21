"use client";

import { Box, TextField } from "@mui/material";

const ServiceForm = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      <TextField label="ID" variant="outlined" fullWidth size="small" />
      <TextField label="Name" variant="outlined" fullWidth size="small" />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        size="small"
      />
    </Box>
  );
};

export default ServiceForm;
