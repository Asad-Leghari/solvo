"use client";
import React, { useEffect, useState } from "react";
import {
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
} from "@mui/material";

interface Service {
  id: string;
  name: string;
  description: string;
}

const dummyServices: Service[] = [
  {
    id: "1",
    name: "Web Development",
    description: "Full stack web development service",
  },
  {
    id: "2",
    name: "UI/UX Design",
    description: "User interface and experience design",
  },
  {
    id: "3",
    name: "Mobile App Development",
    description: "iOS and Android apps",
  },
  {
    id: "4",
    name: "SEO Optimization",
    description: "Improve your website ranking",
  },
];

const ServicesTable = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call delay
    const fetchServices = async () => {
      try {
        setLoading(true);
        await new Promise((res) => setTimeout(res, 1000)); // simulate delay
        setServices(dummyServices);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading)
    return (
      <TableRow>
        <TableCell colSpan={10} align="center">
          <CircularProgress />
        </TableCell>
      </TableRow>
    );

  if (services.length === 0)
    return (
      <TableRow>
        <TableCell colSpan={10} align="center">
          No services found.
        </TableCell>
      </TableRow>
    );

  return (
    <>
      {services.map((s) => (
        <TableRow key={s.id}>
          <TableCell>{s.id}</TableCell>
          <TableCell>{s.name}</TableCell>
          <TableCell>{s.description}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default ServicesTable;
