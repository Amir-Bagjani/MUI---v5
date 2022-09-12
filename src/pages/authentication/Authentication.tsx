import { useState, useCallback } from "react";
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton, Stack, Typography, Box } from '@mui/material';
import { BasicCard, CommonButton, GridContainer, NewUserModal, Searchbar } from '../../components';

import { IUser } from "../../models";

const keys = ["email", "userId", "phoneNumber"];

export const Authentication = () => {
   const [open, setOpen] = useState(false);
   const [users, setUsers] = useState<IUser[]>([]);
   const [query, setQuery] = useState("");

   const handleClose = useCallback(() => setOpen(false), []);

   const addNewUser = useCallback((newUser: IUser) => {
      setUsers(p => [
         ...p, newUser
      ])
   }, [])

   const search = useCallback((data: IUser[]) => {
      return data.filter(user => keys.some(key => user[key as (keyof IUser)].toString().toLowerCase().includes(query)))
   }, [query])

   const getHeader = useCallback(() => {

      return (
         <Stack
            display="flex"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            p="0.3rem 1.5rem"
            bgcolor="whitesmoke"
            sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
         >
            <Searchbar
               placeholder='Search by email address, phone number, or user UID'
               onChange={(e) => setQuery(e.target.value)}
            />
            <Stack display="flex" direction="row" alignItems="center" flexWrap="nowrap">
               <CommonButton size="large" variant='contained' onClick={() => setOpen(true)}>
                  add user
               </CommonButton>
               <IconButton sx={{ ml: "0.5rem" }}>
                  <RefreshIcon />
               </IconButton>
            </Stack>
         </Stack>
      )
   }, [])


   const getContent = useCallback((data: IUser[]) => {
      return (<>
         {data.length > 0 && (
            data.map(item => (
               <Box key={item.userId} mb={2}>
                  <Typography fontSize="0.875rem">Email: {item.email}</Typography>
                  <Typography fontSize="0.875rem">Phone number: {item.phoneNumber}</Typography>
                  <Typography fontSize="0.875rem">User ID: {item.userId}</Typography>
               </Box>
            )))}
         {
            data.length === 0 && (<Typography
               align='center'
               m="3rem 1rem"
               color="GrayText"
            >
               No user for this project yet!
            </Typography>)
         }

      </>)
   }, [])

   return (
      <GridContainer>
         <Box
            mx="auto"
            sx={{ width: "80%" }}
         >
            <BasicCard cardHeader={getHeader()} cardContent={getContent(search(users))} />
         </Box>
         <NewUserModal open={open} onClose={handleClose} addNewUser={addNewUser} />
      </GridContainer>
   )
}

