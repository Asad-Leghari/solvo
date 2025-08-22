"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import UserForm from "@/presentation/admin-dashboard/form/UserForm";

export default function NewUserPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Create New User
      </Typography>
      <UserForm />
    </Container>
  );
}
