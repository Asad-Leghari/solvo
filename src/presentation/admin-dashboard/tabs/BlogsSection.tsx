"use client";

import React, { useEffect } from "react";
import { TableRow, TableCell, CircularProgress } from "@mui/material";
import { useBlogStore } from "@/application/stores/blog/useBlogStore";

const BlogsTable = () => {
  const { blogs, loading, error, fetchBlogs } = useBlogStore();

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  if (loading)
    return (
      <TableRow>
        <TableCell colSpan={10} align="center">
          <CircularProgress />
        </TableCell>
      </TableRow>
    );

  if (error)
    return (
      <TableRow>
        <TableCell colSpan={10} align="center">
          {error}
        </TableCell>
      </TableRow>
    );

  if (!blogs || blogs.length === 0)
    return (
      <TableRow>
        <TableCell colSpan={10} align="center">
          No blogs found.
        </TableCell>
      </TableRow>
    );

  return (
    <>
      {blogs.map((b) => (
        <TableRow key={b.id}>
          <TableCell>{b.id}</TableCell>
          <TableCell>{b.title}</TableCell>
          <TableCell>{b.description}</TableCell>
          <TableCell>{b.image}</TableCell>
          <TableCell>{b.category}</TableCell>
          <TableCell>{b.createdBy}</TableCell>
          <TableCell>{b.username}</TableCell>
          <TableCell>
            {b.createdAt ? new Date(b.createdAt).toLocaleDateString() : "—"}
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default BlogsTable;
