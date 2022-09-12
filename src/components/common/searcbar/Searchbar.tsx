import React from 'react'
import { InputBase, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

interface IProps {
   placeholder?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const Searchbar: React.FC<IProps> = ({ placeholder, onChange }) => {
   return (
      <Stack display="flex" direction="row" alignItems="center" flex={1} >
         <SearchIcon />
         <InputBase
            fullWidth
            placeholder={placeholder}
            onChange={onChange}
            sx={{
               '& .MuiInputBase-input': {
                  minWidth: "3rem",
                  '&::placeholder': {
                     fontSize: "0.875rem"
                  },
               },
               ml: "0.5rem",
               mr: "0.5rem",
            }}
         />
      </Stack>
   )
}
