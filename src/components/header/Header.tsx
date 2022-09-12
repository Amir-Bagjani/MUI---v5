import React from 'react'
import { Notification } from '../common/notification';
import { CommonButton } from '../common/commonButton';
import { useLocation } from 'react-router-dom';
import HelpIcon from '@mui/icons-material/Help';
import { Avatar, Box, IconButton, Stack, Tooltip, Typography } from '@mui/material';

import { headerStyle } from './styles';

const capitalizeStr = (str: string) => str.slice(1).charAt(0).toUpperCase() + str.slice(2)


export const Header = () => {
   const location = useLocation().pathname

   return (
      <Box width="100%" sx={headerStyle.wrapper}>
         <Stack
            display="flex"
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
         >
            <Typography
               variant='body2'
               fontWeight={600}
               color="wheat"
               mr="0.5rem"
               sx={{ cursor: 'pointer', '&:hover': {color: 'white'} }}>
               Go to Docs
            </Typography>
            <Notification
               style={{ color: "white", marginRight: '0.5rem' }}
            />
            <IconButton size='small'>
               <Avatar sx={{ width: 35, height: 35 }} alt="User" src="https://mui.com/static/images/avatar/1.jpg" />
            </IconButton>
         </Stack>
         <Stack
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
         >
            <Typography component="h1" variant='h5' color="white" fontWeight={700}>{capitalizeStr(location)}</Typography>
            <Box>
               <CommonButton 
               variant="outlined" 
               sx={{color: 'white', borderColor: 'white', '&:hover': {borderColor: 'white'}}}
               >web seup</CommonButton>
               <Tooltip title="Help">
                  <IconButton sx={{color: 'white', ml: '0.5rem'}}>
                     <HelpIcon />
                  </IconButton>
               </Tooltip>
            </Box>
         </Stack>
      </Box>
   )
}
