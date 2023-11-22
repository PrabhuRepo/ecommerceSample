import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import CategoriesMenu from './categoriesMenu';

const Header = () => {

  const [drawerOpen, setDrawerOpen] = React.useState(false)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>{setDrawerOpen(true)}}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={()=>{setDrawerOpen(false)}}
          >
           <CategoriesMenu />
          </Drawer>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ecommerce
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header