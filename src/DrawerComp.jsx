import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton
} from '@mui/material';

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  // 👇 This array contains both labels and their icons
  const pages = [
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'About', icon: <InfoIcon /> },
    { label: 'Services', icon: <BuildIcon /> },
    { label: 'Contact', icon: <ContactMailIcon /> },
    { label: 'FAQ', icon: <InfoIcon /> },
    { label: 'Blog', icon: <BuildIcon /> },
    { label: 'Login', icon: <HomeIcon /> },
    { label: 'Logout', icon: <ContactMailIcon /> }
  ];

  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton onClick={() => (setOpenDrawer(false))} key={index}>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <IconButton onClick={() => setOpenDrawer(true)} color="inherit">
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
