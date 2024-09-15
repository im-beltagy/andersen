"use client";

import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
} from "@mui/material";
import Iconify from "../iconify/iconify";
import { useRouter } from "next/navigation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
  window?: () => Window;
};

const customTheme = createTheme({
  typography: {
    fontWeightRegular: 500,
  },
  palette: {
    primary: {
      main: "#ffdb00",
    },
  },
});
export default function Footer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navItems = [
    "Tech Stack",
    "Industries",
    "Services",
    "Company",
    "Case studies",
  ];
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const theme = useTheme();

  const route = useRouter();
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          sx={{
            zIndex: 0,
            color: "#fff",
            bgcolor: "#020D1C",
            position: "relative",
            top: "auto",
            bottom: 0,
          }}
        >
          <Toolbar sx={{ py: 11, display: "flex", flexDirection: "column" }}>
            <Grid container justifyContent="center">
              <Grid
                container
                spacing={1}
              >
              </Grid>
            </Grid>
          </Toolbar>
          <Toolbar sx={{ mb: 11, display: "flex", flexDirection: "column" }}>
            <Container>

              <Divider
                sx={{ borderTop: 0.1, borderRadius: 20 }}
                color="grey"
                orientation="vertical"
                variant="middle"
                flexItem
              />
              <Box sx={{ width: "100%" }}>
                <Typography
                  fontWeight="regular"
                  component="div"
                  sx={{ my: 3, fontSize: { xs: 18, md: 22 } }}
                >
                  Kontakt
                </Typography>
                <Grid container spacing={1} justifyContent="start">
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Iconify
                        width={30}
                        height={30}
                        icon="gridicons:phone"
                        sx={{ color: (theme) => theme.palette.primary.main }}
                      />
                      <Typography
                        fontWeight="regular"
                        component="div"
                        sx={{
                          my: 3,
                          unicodeBidi: "embed",
                          direction: "ltr",
                          color: "#fff",
                          ml: 1,
                          fontSize: {
                            xs: 13,
                            md: 15,
                          },
                        }}
                      >
                        +49 176 2283 66 20
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Iconify
                        width={30}
                        height={30}
                        icon="mingcute:mail-line"
                        sx={{ color: (theme) => theme.palette.primary.main }}
                      />
                      <Typography
                        fontWeight="regular"
                        component="div"
                        sx={{
                          my: 3,
                          unicodeBidi: "embed",
                          direction: "ltr",
                          color: "#fff",
                          ml: 1,
                          fontSize: {
                            xs: 13,
                            md: 15,
                          },
                        }}
                      >
                        info@webizi.de
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Toolbar>

          <Toolbar
            sx={{
              bgcolor: "#020303",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Container>
              <Grid
                container
                spacing={1}
                sx={{ my: 1 }}
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography sx={{ my: 0.5, fontSize: 12 }} color="#ccc">
                      ©2024 Webizi Alle Rechte vorbehalten.
                    </Typography>
                    <Typography
                      fontWeight="bold"
                      sx={{
                        mx: 0.3,
                        my: 0.5,
                        fontSize: 12,
                        borderBottom: 1,
                        cursor: "pointer",
                        ":hover": {
                          color: (theme) => theme.palette.primary.main,
                        },
                      }}
                      color="white"
                    >
                      Datenschutz
                    </Typography>
                    <Typography sx={{ my: 0.5, fontSize: 12 }} color="#ccc">
                      ,
                    </Typography>
                    <Typography
                      fontWeight="bold"
                      sx={{
                        mx: 0.3,
                        my: 0.5,
                        fontSize: 12,
                        borderBottom: 1,
                        cursor: "pointer",
                        ":hover": {
                          color: (theme) => theme.palette.primary.main,
                        },
                      }}
                      color="white"
                    >
                      Cookies
                    </Typography>
                    <Typography sx={{ my: 0.5, fontSize: 12 }} color="#ccc">
                      &
                    </Typography>
                    <Typography
                        fontWeight="bold"
                        sx={{
                          mx: 0.3,
                          my: 0.5,
                          fontSize: 12,
                          borderBottom: 1,
                          cursor: "pointer",
                          ":hover": {
                            color: (theme) => theme.palette.primary.main,
                          },
                        }}
                        color="white"
                    >
                      Impressum
                    </Typography>
                  </Box>

                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                      <Box component="span">
                        <Iconify
                          icon="uil:instagram-alt"
                          sx={{
                            ":hover": {
                              color: (theme) => theme.palette.primary.main,
                            },
                            width: 25,
                            height: 25,
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
