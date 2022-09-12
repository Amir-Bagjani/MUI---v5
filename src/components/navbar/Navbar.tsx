import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { useNavigate } from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { mainNavbaritems } from './consts';

import { navbarStyles } from './styles';
import React from 'react';


export const Navbar = React.memo(() => {
   const navigate = useNavigate()

   return (
      <Drawer
         sx={navbarStyles.drawer}
         variant="permanent"
         anchor="left"
      >
         <Toolbar />
         <Divider sx={navbarStyles.divider} />
         <List>
            {mainNavbaritems.map((item) => (
               <ListItem
                  key={item.id}
                  disablePadding
                  sx={navbarStyles.listItem}
                  onClick={() => navigate(item.path)}
               >
                  <ListItemButton>
                     <ListItemIcon sx={navbarStyles.icon}>
                        {item.icon}
                     </ListItemIcon>
                     <ListItemText
                        sx={navbarStyles.text}
                        primary={item.title}
                     />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Drawer>
   )
})

