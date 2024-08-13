"use client";

import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { Grid, useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useMemo, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
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
import Link from "next/link";

import styles from "./header.module.css";
import globals from "@/app/globals.module.css";
import LocaleButton from "./locale-button";
// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
  window?: () => Window;
};

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about-us",
  },
  {
    label: "Project Cases",
    href: "/project-cases/internal-management-system-for-tourism",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact us",
    href: "/contact-us",
  },
];
export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const route = useRouter();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("md"));
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component="img"
        alt="auth"
        src={"/logo/logo_single.svg"}
        sx={{
          my: 2,
          mx: "auto",
          display: "block",
          width: { xs: 40, md: 70 },
          height: { xs: 40, md: 70 },
        }}
      />

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Typography
              variant="body1"
              fontWeight="light"
              component={Link}
              href={item.href}
              color="inherit"
              sx={{ textDecoration: "none" }}
            >
              {item.label}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const [pageYOffset, setPageYOffset] = useState(0);
  const isScrolled = useMemo(() => pageYOffset > 10, [pageYOffset]);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setPageYOffset((prev) => scrollTop || prev);
      setScrollDir(() => (scrollTop > pageYOffset ? "down" : "up"));
    };

    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, [pageYOffset]);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const renderLogo = (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Box
        component="img"
        alt="auth"
        src="/assets/small_logo.svg"
        sx={{
          cursor: "pointer",
          display: "block",
          width: { xs: 40 },
          height: { xs: 40 },
        }}
      />
      <Typography
        fontSize="18px"
        fontWeight={700}
        letterSpacing="1.5px"
        display={{ xs: "none", md: "block" }}
        sx={{
          transition: "color 200ms",
          color: isScrolled ? "var(--primary-dark)" : "var(--primary-light)",
        }}
      >
        ANDERSEN
      </Typography>
    </Stack>
  );

  const renderNavToggler = (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="end"
      onClick={handleDrawerToggle}
      sx={{ color: "black", mr: 2, display: { md: "none" } }}
    >
      <Iconify icon="mdi:menu" />
    </IconButton>
  );

  const renderDesktopNav = (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        {navItems.map((item, index) => (
          <Typography
            component={Link}
            href={item.href}
            className={styles.desktop_link}
            fontSize={{ xs: "14px", md: "16px" }}
            fontWeight="light"
            key={index}
          >
            {item.label}
          </Typography>
        ))}
        <Divider
          orientation="vertical"
          sx={{ height: 25, alignSelf: "center" }}
          flexItem
        />
        <LocaleButton />
        <button
          className={`${globals.button} ${globals.button_outlined}`}
          style={{ minWidth: "110px", padding: "10px 18px", fontSize: "14px" }}
        >
          Contact us
        </button>
      </Stack>
    </Box>
  );

  const renderMobileNav = (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          sx={{
            bgcolor: isScrolled ? "var(--primary-light)" : "#0003",
            color: isScrolled ? "var(--primary-dark)" : "var(--primary-light)",
            transform:
              scrollDir === "down" ? "translateY(-100%)" : "translateY(0)",
            transition:
              "color 200ms, background-color 200ms, transform 200ms 200ms",
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
            className={`${globals.card_container} ${styles.toolbar}`}
          >
            {renderLogo}
            {renderNavToggler}
            {renderDesktopNav}
          </Toolbar>
        </AppBar>
        {renderMobileNav}
      </Box>
    </>
  );
}
