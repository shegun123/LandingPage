// import React, { useState } from 'react';
import DrawerComp from "../DrawerComp";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  Link,
  Stack,
} from "@mui/material";

const NavBar = () => {
  return (
    <>
      <AppBar sx={{ bgcolor: "transparent", boxShadow: "0" }}>
        <Toolbar>
          <Box sx={{ display: "flex", width: "100%", alignItems: "center", gap:"339px"  }}>
            <Typography
              style={{
                color: "#54BD95",
                fontSize: "50px",
                marginLeft: "100px",
              
              }}
            >
              Biccas
            </Typography>
            <Box>
              <Stack direction="row" spacing={2} alignItems="center">
                
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#A6A6A6",
                    fontWeight: "bold",
                    "&:hover": {
                      textDecoration: "underline",
                      color: "#A6A6A6"
                    },
                  }}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#A6A6A6",
                    fontWeight: "bold",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Product
                </Link>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#A6A6A6",
                    fontWeight: "bold",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  FAQ
                </Link>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#A6A6A6",
                    fontWeight: "bold",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#A6A6A6",
                    fontWeight: "bold",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  About
                </Link>
              </Stack>

            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "auto",
                marginRight: "130px",
                
              }}
            >
              <Button
              sx={{
                size:"16px",
                color:"#A6A6A6"
              }}>Login</Button>
              
              <Button variant="contained" 
              sx={{backgroundColor:"#54BD95",
                borderRadius:"10px",
                color:"#F8F8FA"
              }}>Sign UP</Button>
            </Box>
          </Box>
        </Toolbar>
        
      </AppBar>
    </>
  );
};

export default NavBar;
