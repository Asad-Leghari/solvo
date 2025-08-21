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
  TextField,
  IconButton,
  Drawer,
  Switch,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import BuildIcon from "@mui/icons-material/Build";
import ArticleIcon from "@mui/icons-material/Article";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");

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
        <Button
          startIcon={<BuildIcon />}
          sx={{
            justifyContent: "flex-start",
            textTransform: "none",
            color: "#333",
            borderRadius: "8px",
            px: 2,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
          fullWidth
        >
          Services
        </Button>

        <Button
          startIcon={<GroupIcon />}
          sx={{
            justifyContent: "flex-start",
            textTransform: "none",
            color: "#333",
            borderRadius: "8px",
            px: 2,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
          fullWidth
        >
          Users
        </Button>

        <Button
          startIcon={<ArticleIcon />}
          sx={{
            justifyContent: "flex-start",
            textTransform: "none",
            color: "#333",
            borderRadius: "8px",
            px: 2,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
          fullWidth
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
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
        }}
      >
        {sidebarContent}
      </Box>

      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {sidebarContent}
      </Drawer>

      <Box
        sx={{
          flex: 1,
          p: { xs: 1, sm: 2, md: 3 },
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              onClick={() => setSidebarOpen(true)}
              sx={{ display: { md: "none" } }}
              size="small"
            >
              <MenuIcon fontSize={isMobile ? "small" : "medium"} />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
              }}
            >
              Admin Dashboard
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "6px",
                borderColor: "#ddd",
                color: "#333",
                bgcolor: "white",
                "&:hover": { bgcolor: "#f5f5f5" },
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                py: { xs: 0.5, sm: 1 },
              }}
            >
              API Preview
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: "6px",
                bgcolor: "#111",
                "&:hover": { bgcolor: "#333" },
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                py: { xs: 0.5, sm: 1 },
              }}
              onClick={() => setFormOpen(true)}
            >
              + New record
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
            mb: 2,
            px: 1,
            py: 0.5,
          }}
        >
          <SearchIcon
            sx={{ color: "#777", fontSize: { xs: "1rem", sm: "1.25rem" } }}
          />
          <TextField
            placeholder={isMobile ? "Search..." : "Search..."}
            variant="standard"
            InputProps={{
              disableUnderline: true,
              sx: { fontSize: { xs: "0.875rem", sm: "1rem" } },
            }}
            sx={{ flex: 1, ml: 1 }}
          />
        </Box>

        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "8px",
            border: "1px solid #ddd",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            width: "100%",
            overflow: "hidden", // prevent outer scroll
          }}
        >
          {/* Scrollable wrapper for mobile only */}
          <Box
            sx={{
              width: "100%",
              overflowX: { xs: "auto", sm: "visible" }, // ✅ horizontal scroll on mobile
              WebkitOverflowScrolling: "touch", // smooth scroll on mobile
            }}
          >
            <Table
              sx={{
                minWidth: { xs: 400, sm: "100%" }, // ensure table is wider than container on mobile
                "& th": {
                  bgcolor: "#fafafa",
                  fontWeight: 600,
                  borderBottom: "1px solid #eee",
                  whiteSpace: "nowrap",
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  px: { xs: 0.5, sm: 1 },
                },
                "& td": {
                  borderBottom: "1px solid #f0f0f0",
                  whiteSpace: "nowrap",
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  px: { xs: 0.5, sm: 1 },
                },
                "& tr:hover": {
                  bgcolor: "#f9f9f9",
                },
              }}
              size="small"
            >
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <input
                      type="checkbox"
                      style={{ width: "14px", height: "14px" }}
                    />
                  </TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Avatar</TableCell>
                  {!isMobile && (
                    <>
                      <TableCell>Email Visibility</TableCell>
                      <TableCell>Verified</TableCell>
                      <TableCell>Created</TableCell>
                      <TableCell>Updated</TableCell>
                    </>
                  )}
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    colSpan={isMobile ? 4 : 10}
                    align="center"
                    sx={{ py: 3 }}
                  >
                    No records found.
                    <Box>
                      <Button
                        variant="outlined"
                        sx={{
                          mt: 1,
                          textTransform: "none",
                          borderRadius: "6px",
                          borderColor: "#ddd",
                          color: "#333",
                          bgcolor: "white",
                          "&:hover": { bgcolor: "#f5f5f5" },
                          fontSize: { xs: "0.75rem", sm: "0.875rem" },
                        }}
                        onClick={() => setFormOpen(true)}
                      >
                        + New record
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>

        <Typography
          variant="caption"
          sx={{
            mt: 1,
            display: "block",
            color: "#777",
            fontSize: { xs: "0.7rem", sm: "0.875rem" },
          }}
        >
          Total found: 0
        </Typography>
      </Box>

      <Drawer
        anchor="right"
        open={formOpen}
        onClose={() => setFormOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: "85%", sm: "60%", md: "500px" },
            maxWidth: "500px",
            p: { xs: 2, sm: 3 },
            bgcolor: "#fafafa",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 600,
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
          }}
        >
          Create New Record
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <TextField label="ID" variant="outlined" fullWidth size="small" />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            size="small"
          />
          <TextField
            label="Email Visibility"
            variant="outlined"
            select
            fullWidth
            size="small"
          >
            <MenuItem value="public">Public</MenuItem>
            <MenuItem value="private">Private</MenuItem>
          </TextField>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
              Verified
            </Typography>
            <Switch size="small" />
          </Box>
          <TextField label="Name" variant="outlined" fullWidth size="small" />
          <TextField
            label="Avatar URL"
            variant="outlined"
            fullWidth
            size="small"
          />
          <TextField
            label="Created Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            size="small"
          />
          <TextField
            label="Updated Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            size="small"
          />
        </Box>

        <Box sx={{ display: "flex", gap: 1, mt: 3 }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              bgcolor: "#111",
              "&:hover": { bgcolor: "#333" },
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              py: { xs: 0.5, sm: 0.75 },
            }}
            fullWidth
          >
            Save
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              borderColor: "#ddd",
              color: "#333",
              "&:hover": { bgcolor: "#f5f5f5" },
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              py: { xs: 0.5, sm: 0.75 },
            }}
            onClick={() => setFormOpen(false)}
            fullWidth
          >
            Cancel
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default AdminDashboard;
