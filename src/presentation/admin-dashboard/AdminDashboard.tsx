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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CollectionsIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

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
      {/* Sidebar Links */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
        <Button
          startIcon={<CollectionsIcon />}
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
          Collections
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
          startIcon={<SettingsIcon />}
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
          Settings
        </Button>
      </Box>

      {/* Avatar */}
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
      {/* Sidebar Desktop */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
        }}
      >
        {sidebarContent}
      </Box>

      {/* Sidebar Mobile (Drawer) */}
      <Drawer
        anchor="left"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {sidebarContent}
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flex: 1, p: { xs: 2, md: 3 } }}>
        {/* Top Bar (mobile gets menu button) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Mobile Menu Button */}
            <IconButton
              onClick={() => setSidebarOpen(true)}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Collections / users
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
              }}
              onClick={() => setFormOpen(true)}
            >
              + New record
            </Button>
          </Box>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "white",
            border: "1px solid #ddd",
            borderRadius: "6px",
            mb: 3,
            px: 2,
            py: 0.5,
          }}
        >
          <SearchIcon sx={{ color: "#777" }} />
          <TextField
            placeholder='Search term or filter like created > "2022-01-01"...'
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{ flex: 1, ml: 1 }}
          />
        </Box>

        {/* Table */}
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "6px",
            border: "1px solid #ddd",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            overflowX: "auto", // ✅ scrollable on mobile
          }}
        >
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <input type="checkbox" />
                </TableCell>
                <TableCell>id</TableCell>
                <TableCell>email</TableCell>
                <TableCell>emailVisibility</TableCell>
                <TableCell>verified</TableCell>
                <TableCell>name</TableCell>
                <TableCell>avatar</TableCell>
                <TableCell>created</TableCell>
                <TableCell>updated</TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={10} align="center" sx={{ py: 4 }}>
                  No records found.
                  <Box>
                    <Button
                      variant="outlined"
                      sx={{
                        mt: 2,
                        textTransform: "none",
                        borderRadius: "6px",
                        borderColor: "#ddd",
                        color: "#333",
                        bgcolor: "white",
                        "&:hover": { bgcolor: "#f5f5f5" },
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

        {/* Footer */}
        <Typography
          variant="caption"
          sx={{ mt: 2, display: "block", color: "#777" }}
        >
          Total found: 0
        </Typography>
      </Box>

      {/* Right Side Drawer (Form) */}
      <Drawer
        anchor="right"
        open={formOpen}
        onClose={() => setFormOpen(false)}
        PaperProps={{
          sx: { width: { xs: "100%", sm: "500px" }, p: 3, bgcolor: "#fafafa" },
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Create New Record
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="ID" variant="outlined" fullWidth />
          <TextField label="Email" type="email" variant="outlined" fullWidth />
          <TextField
            label="Email Visibility"
            variant="outlined"
            select
            fullWidth
          >
            <MenuItem value="public">Public</MenuItem>
            <MenuItem value="private">Private</MenuItem>
          </TextField>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography>Verified</Typography>
            <Switch />
          </Box>
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Avatar URL" variant="outlined" fullWidth />
          <TextField
            label="Created Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <TextField
            label="Updated Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              bgcolor: "#111",
              "&:hover": { bgcolor: "#333" },
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
