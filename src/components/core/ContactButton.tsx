"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const ContactButton = ({ href, children }: Props) => {
  const router = useRouter();
  return (
    <Button
      variant="text"
      onClick={() => router.push(href)}
      sx={{
        bgcolor: "#6750A4",
        color: "#ffffff",
        borderRadius: "12px",
        fontWeight: 500,
        textTransform: "capitalize",
      }}
    >
      {children}
    </Button>
  );
};

export default ContactButton;
