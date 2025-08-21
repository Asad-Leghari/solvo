"use client";

import React, { useEffect } from "react";
import {
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Typography,
} from "@mui/material";
import useUsersStore from "../../../application/stores/users/UsersStore";

const UsersTable = () => {
  const { users, loading, error, fetchUsers } = useUsersStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading)
    return (
      <TableRow>
        <TableCell colSpan={4} align="center">
          <CircularProgress />
        </TableCell>
      </TableRow>
    );

  if (error)
    return (
      <TableRow>
        <TableCell colSpan={4} align="center">
          <Typography color="error">{error}</Typography>
        </TableCell>
      </TableRow>
    );

  if (users.length === 0)
    return (
      <TableRow>
        <TableCell colSpan={4} align="center">
          No users found.
        </TableCell>
      </TableRow>
    );

  return (
    <>
      {users.map((user) => (
        <TableRow
          key={user.id}
          sx={{
            "&:hover": { bgcolor: "#f5f5f5" },
            cursor: "pointer",
          }}
        >
          <TableCell sx={{ fontWeight: 500, fontSize: "0.875rem", px: 2 }}>
            {user.id}
          </TableCell>
          <TableCell sx={{ fontWeight: 500, fontSize: "0.875rem", px: 2 }}>
            {user.username}
          </TableCell>
          <TableCell sx={{ fontWeight: 500, fontSize: "0.875rem", px: 2 }}>
            {user.email}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default UsersTable;
