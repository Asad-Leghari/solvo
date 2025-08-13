"use client";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useGlobal from "../stores/useGlobal";

let darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

darkTheme = responsiveFontSizes(darkTheme);

let lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

lightTheme = responsiveFontSizes(lightTheme);

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
