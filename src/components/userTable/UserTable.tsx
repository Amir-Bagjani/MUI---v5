import React from 'react'
import { Box } from "@mui/material"
import { BasicSnackbar, BasicTable } from '../common';
import { GridColDef } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';



const getComments = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/comments');
   const data = await res.json();
   return data
}

const columns: GridColDef[] = [
   { field: 'id', headerName: 'User ID', width: 100 },
   { field: 'name', headerName: 'Full name', width: 250 },
   { field: 'email', headerName: 'Email', width: 250 },
   { field: 'body', headerName: 'Username', width: 300 },
]

export const UserTable = () => {
   const { data: comments, isLoading, isError } = useQuery(['comments'], getComments);

   return (
      <>
         <BasicTable
            columns={columns}
            rows={comments ?? []}
            loading={isLoading}
            checkboxSelection
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            pageSize={5}
            sx={{ height: "calc(100vh - 16rem)" }}
         />

         <BasicSnackbar
            open={isError}
            severity="error"
            message="Something went wrong!"
         />
      </>
   )
}
