"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Drawer,
  useMediaQuery,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BuildIcon from "@mui/icons-material/Build";
import GroupIcon from "@mui/icons-material/Group";
import ArticleIcon from "@mui/icons-material/Article";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import UsersTable from "./tabs/UsersSection";
import BlogsTable from "./tabs/BlogsSection";
import ServicesTable from "./tabs/ServicesSection";
import { useBlogStore } from "@/application/stores/blog/useBlogStore";
import ServiceForm from "./form/ServiceForm";
import UserForm from "./form/UserForm";
import BlogForm from "./form/BlogForm";
import Link from "next/link";

const AdminDashboard = () => {
  const { createBlog } = useBlogStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"services" | "users" | "blogs">(
    "services"
  );
  const [blogForm, setBlogForm] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    createdBy: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlogForm({
      ...blogForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    if (activeTab === "blogs") {
      await createBlog(blogForm); // 🔥 create post
      setBlogForm({
        title: "",
        description: "",
        image: "",
        category: "",
        createdBy: "",
      });
    }
    setFormOpen(false);
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  const renderTableBody = () => {
    switch (activeTab) {
      case "services":
        return <ServicesTable />;
      case "users":
        return <UsersTable />;
      case "blogs":
        return <BlogsTable />;
      default:
        return null;
    }
  };

  const sidebarContent = (
    <Box
      sx={{
        width: 240,
        backgroundColor: "#fff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "1px solid #eee",
        p: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
        {/* <Button
          startIcon={<BuildIcon />}
          sx={{
            justifyContent: "flex-start",
            textTransform: "none",
            color: activeTab === "services" ? "#111" : "#333",
            fontWeight: activeTab === "services" ? 600 : 400,
            borderRadius: "8px",
            px: 2,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
          fullWidth
          onClick={() => setActiveTab("services")}
        >
          Services
        </Button> */}

        <Button
          startIcon={<GroupIcon />}
          sx={{
            justifyContent: "flex-start",
            textTransform: "none",
            color: activeTab === "users" ? "#111" : "#333",
            fontWeight: activeTab === "users" ? 600 : 400,
            borderRadius: "8px",
            px: 2,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
          fullWidth
          onClick={() => setActiveTab("users")}
        >
          Users
        </Button>

        <Button
          startIcon={<ArticleIcon />}
          sx={{
            justifyContent: "flex-start",
            textTransform: "none",
            color: activeTab === "blogs" ? "#111" : "#333",
            fontWeight: activeTab === "blogs" ? 600 : 400,
            borderRadius: "8px",
            px: 2,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
          fullWidth
          onClick={() => setActiveTab("blogs")}
        >
          Blogs
        </Button>
      </Box>

      <Box
        sx={{
          width: 40,
          height: 40,
          bgcolor: "#e0e0e0",
          borderRadius: "50%",
          alignSelf: "center",
          mb: 2,
        }}
      />
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f9fafa" }}>
      {/* Sidebar for desktop */}
      <Box
        sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column" }}
      >
        {sidebarContent}
      </Box>

      {/* Sidebar Drawer for mobile */}
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {sidebarContent}
      </Drawer>

      {/* Main content */}
      <Box sx={{ flex: 1, p: { xs: 1, sm: 2, md: 3 }, overflow: "hidden" }}>
        {/* Header */}
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              onClick={() => setSidebarOpen(true)}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Admin Dashboard /{" "}
              <Box component="span" sx={{ fontWeight: 400 }}>
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </Box>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "6px",
                borderColor: "#ddd",
                color: "#333",
                bgcolor: "white",
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              API Preview
            </Button>

            {/* REPLACED MODAL BUTTONS WITH LINK BUTTONS */}
            <Link href="/admin-dashboard/blog/new" passHref>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "6px",
                  bgcolor: "#111",
                  "&:hover": { bgcolor: "#333" },
                }}
              >
                + New Blog
              </Button>
            </Link>

            <Link href="/admin-dashboard/user/new" passHref>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "6px",
                  bgcolor: "#111",
                  "&:hover": { bgcolor: "#333" },
                }}
              >
                + New User
              </Button>
            </Link>

            <Link href="/admin-dashboard/services/new" passHref>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "6px",
                  bgcolor: "#111",
                  "&:hover": { bgcolor: "#333" },
                }}
              >
                + New Service
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Table wrapper with scroll */}
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: 1,
            border: "1px solid #ddd",
            overflow: "auto", // scroll only table
            maxHeight: "70vh", // table body scrollable
            maxWidth: { md: "600px", xs: "400px", lg: "1070px", xl: "100%" },
          }}
        >
          <Table
            stickyHeader
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <TableHead sx={{ borderRadius: "20px" }}>
              <TableRow
                sx={{
                  background: "linear-gradient(135deg, #f9fafb83, #eaeaea59)",
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: 700,
                    color: "#222",
                    fontSize: "0.95rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    borderBottom: "2px solid #ddd",
                    py: 2,
                  }}
                >
                  ID
                </TableCell>

                {activeTab === "services" && (
                  <>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#222",
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#222",
                      }}
                    >
                      Description
                    </TableCell>
                  </>
                )}

                {activeTab === "users" && (
                  <>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#222",
                      }}
                    >
                      Username
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#222",
                      }}
                    >
                      Email
                    </TableCell>
                  </>
                )}

                {activeTab === "blogs" && (
                  <>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#222",
                      }}
                    >
                      Title
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#222",
                      }}
                    >
                      Description
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#222",
                      }}
                    >
                      Image
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#222",
                      }}
                    >
                      Category
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#222",
                      }}
                    >
                      Created By
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#222",
                      }}
                    >
                      Created At
                    </TableCell>
                  </>
                )}
              </TableRow>
            </TableHead>

            <TableBody
              sx={{
                "& .MuiTableRow-root": {
                  transition: "all 0.25s ease-in-out",
                },
                "& .MuiTableRow-root:nth-of-type(odd)": {
                  bgcolor: "#fcfcfc",
                },
                "& .MuiTableRow-root:hover": {
                  bgcolor: "#f5faff",
                  transform: "scale(1.002)",
                },
                "& .MuiTableCell-root": {
                  borderBottom: "1px solid #eee",
                  color: "#333",
                  fontSize: "0.9rem",
                  py: 1.5,
                  px: 2,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "200px",
                },
              }}
            >
              {renderTableBody()}
            </TableBody>
          </Table>
        </Box>
      </Box>

      {/* Drawer for new record */}
      {/* Modal for new record */}
      <Dialog
        open={formOpen}
        onClose={() => setFormOpen(false)}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: "16px",
            p: 2,
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 700,
            textAlign: "center",
            fontSize: "1.3rem",
            pb: 1,
          }}
        >
          Create New {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}{" "}
          Record
        </DialogTitle>

        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 1,
            }}
          >
            {activeTab === "services" && (
              <ServiceForm onClose={() => setFormOpen(false)} />
            )}
            {activeTab === "users" && (
              <UserForm onClose={() => setFormOpen(false)} />
            )}
            {activeTab === "blogs" && (
              <BlogForm onClose={() => setFormOpen(false)} />
            )}
          </Box>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => setFormOpen(false)}
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              color: "#555",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminDashboard;
