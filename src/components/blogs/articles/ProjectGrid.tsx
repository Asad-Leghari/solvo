import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

export interface Project {
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => (
  <Grid
    container
    flexDirection={{ xs: "column", lg: "row" }}
    justifyContent="space-between"
    gap={"20px"}
  >
    {projects.map((project, index) => (
      <Grid flex={1} key={index}>
        <Card
          sx={{
            borderRadius: 3,
            p: 1,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            height: "100%",
            position: "relative",
          }}
        >
          <Link
            href={`/blogs/123`}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                backgroundColor: "#e0e0e0",
                height: 160,
                borderRadius: 3,
              }}
            />
          </Link>
          <CardContent
            sx={{
              textAlign: "left",
              mb: 4,
              height: "fit-content",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#1976d2", fontWeight: "500" }}
            >
              {project.category}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1, mb: 1 }}>
              {project.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
              {project.description}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              position: "absolute",
              bottom: 8,
              left: 16,
            }}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: "#bdbdbd" }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {project.author}
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {project.date}
              </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
    ))}
  </Grid>
);
