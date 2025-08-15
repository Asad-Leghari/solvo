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
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "24px", // Your custom left padding
          paddingRight: "24px", // Your custom right padding
          "@media (min-width:1536px)": {
            paddingLeft: "12px",
            paddingRight: "12px",
          },
        },
      },
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

let lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "24px", // Your custom left padding
          paddingRight: "24px", // Your custom right padding
        },
      },
    },
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
