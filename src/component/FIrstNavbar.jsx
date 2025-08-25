import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';

const navLinkStyle = {
  fontWeight: 500,
  transition: 'color 0.3s',
  cursor: 'pointer',
  '&:hover': {
    color: '#54BD95',
  },
  '&:active': {
    color: '#2e7d32',
  },
};

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const links = ['Home', 'Product', 'FAQ', 'Blog', 'About Us'];

  return (
    <AppBar
      position="static"
      elevation={0.9}
      sx={{
        backgroundColor: 'transparent',
        px: 5,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'nowrap',
          overflowX: 'auto',
        }}
      >
        {/* Logo */}
        <Typography variant="h6" sx={{ color: '#54BD95', flexShrink: 0, marginRight:'70px'}}>
          BICCAS
        </Typography>

        {/* Navigation Links */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mx: 1,
            flexShrink: 0,
          }}
        >
          {links.map((link) => (
            <Link
              key={link}
              href="#"
              underline={activeLink === link ? 'underline' : 'none'}
              sx={{
                ...navLinkStyle,
                color: activeLink === link ? '#54BD95' : 'black',
                fontSize: activeLink === link ? '16px' : '14px',
                alignSelf: 'center',
              }}
              onClick={(e) => {
                e.preventDefault(); // prevent page reload
                setActiveLink(link);
              }}
            >
              {link}
            </Link>
          ))}
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexShrink: 0,
          }}
        >
          <Button variant="text" sx={{ color: '#54BD95' }}>
            Sign in
          </Button>
          <Button variant="contained" sx={{ backgroundColor: '#54BD95' }}>
            Sign up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
