import React from 'react'
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import { NotificationType } from '../types';

interface IProps {
   open: boolean;
   anchorEl: Element | null;
   handleClose: () => void;
   menuItem: NotificationType[]
}

const StyledMenu = styled((props: MenuProps) => (
   <Menu
      elevation={0}
      {...props}
      anchorOrigin={{
         horizontal: 'left',
         vertical: "bottom"
      }}
      transformOrigin={{
         horizontal: 'left',
         vertical: 0,
      }}
   />
))(({ theme }) => ({
   '& .MuiPaper-root': {
      color:
         theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow: '0 0 9px 0px rgba(0, 0, 0, 0.18)',
      '& .MuiMenuItem-root': {
         '&:active': {
            backgroundColor: alpha(
               theme.palette.primary.light,
               theme.palette.action.selectedOpacity,
            ),
         },
      },
   },
}))

export const CommonMenu: React.FC<IProps> = React.memo(({ open, anchorEl, handleClose, menuItem }) => {
   return (
      <StyledMenu
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}

      >
         {menuItem.map(item => (
            <MenuItem key={item.id} onClick={handleClose}>{item.label}</MenuItem>
         ))}
      </StyledMenu>
   )
})
