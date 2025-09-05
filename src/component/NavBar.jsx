import React from "react";
import Drawer from "./Drawer";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Link,
  Stack,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: "transparent", boxShadow: "none" }}
      >
        <Toolbar
          sx={{ justifyContent: "space-between"}}
        >
          {/* Logo */}
          <Typography
            sx={{ color: "#54BD95", fontSize: "30px", fontWeight: "bold" }}
          >
            Biccas
          </Typography>

          {/* Desktop Links */}

          <Box sx={{display:{xs:'none', md:'flex'}}}>
            <Button sx={{ color: "#54BD95" }}>Home</Button>
            <Button sx={{ color: "#54BD95" }}>Product</Button>
            <Button sx={{ color: "#54BD95" }}>FAQ</Button>
            <Button sx={{ color: "#54BD95" }}>Blog</Button>
            <Button sx={{ color: "#54BD95" }}>About US</Button>
          </Box>

          {/* Auth Buttons OR Drawer Toggle */}
          {isMobile ? (
            <Drawer />
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button sx={{color:"#A6A6A6"}}>Login</Button>
              <Button variant="contained" sx={{ color: "#F8F8FA", background:' #54BD95'  }}>
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
