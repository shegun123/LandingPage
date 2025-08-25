import React, { useState } from 'react';
import DrawerComp from '../DrawerComp';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  useMediaQuery,
  useTheme
} from '@mui/material';

const NavBar = ({ links }) => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" 
        elevation={0}
        sx={{ backgroundColor:"transparent",px: 12,}}
        color="primary">
      <Toolbar sx={{ display: 'flex', alignItems: 'center'}}>

         {/* Logo */}
         <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#54BD95'}}>
           BISSCO
         </Typography>

         {/* Tabs - Only show when not isMatch (i.e., on large screens) */}
         {!isMatch && (
          <Tabs
          
            value={value}
            onChange={(e, val) => setValue(val)}
            indicatorColor="secondary"
            textColor="inherit"
            
            sx={{
              marginLeft: 2,
              '& .MuiTab-root': { fontWeight: 500 },
              marginLeft:'auto',
              color:'#A6A6A6'
            }}
          >
            {links.map((link, index) => (
              <Tab key={index} label={link} />
            ))}
          </Tabs>
        )}

        {/* Right-side content: Drawer (mobile) or buttons (desktop) */}
        <Box sx={{ display: 'flex', marginLeft: 'auto' }}>
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              
              <Button sx={{ ml: 1, color:'#A6A6A6' }}>
                Login
              </Button>
              <Button variant="contained" color="secondary"
              sx={{backgroundColor:"#54BD95", borderRadius:'10px', fontSize:'16px'}}>
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
