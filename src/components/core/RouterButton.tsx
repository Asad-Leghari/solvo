"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const RouterButton = ({ href, children }: Props) => {
  const router = useRouter();
  return (
    <Button
      variant="text"
      onClick={() => router.push(href)}
      sx={{
        textTransform: "capitalize",
        color: "black",
        fontWeight: 500,
      }}
    >
      {children}
    </Button>
  );
};

export default RouterButton;
