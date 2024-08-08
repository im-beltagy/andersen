"use client";
import { createTheme } from "@mui/material/styles";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily, // Set Poppins as the default font family
  },

  // You can customize other parts of the theme as needed
});

const modifiedTheme = {
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      ...theme.palette.primary,
      light: "#ffe963",
      main: "#ffdb00",
      dark: "#f2cb00",
    },
  },
};

export default modifiedTheme;
