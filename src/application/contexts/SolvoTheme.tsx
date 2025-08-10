"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useGlobal from "../stores/useGlobal";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function SolvoTheme({
  children,
}: {
  children: React.ReactNode;
}) {
  const { DarkMode } = useGlobal();
  return (
    <ThemeProvider theme={DarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
