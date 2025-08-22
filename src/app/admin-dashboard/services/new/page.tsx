"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ServiceForm from "@/presentation/admin-dashboard/form/ServiceForm";

export default function NewServicePage() {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Create New Service
      </Typography>
      <ServiceForm />
    </Container>
  );
}
