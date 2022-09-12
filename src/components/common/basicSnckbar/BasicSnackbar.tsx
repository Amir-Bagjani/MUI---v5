import React from 'react'
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


interface IProps extends Omit<SnackbarProps, "onClose"> {
   onClose?: (event?: React.SyntheticEvent | Event, reason?: string) => void;
   severity?: AlertProps["severity"];
   message?: string;
}


const StyledMuiAlert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
   return <MuiAlert elevation={6} variant="filled" ref={ref} {...props} />
})

export const BasicSnackbar: React.FC<IProps> = ({ onClose, severity, message, ...rest }) => {
   return (
      <>
         <Snackbar autoHideDuration={6000} onClose={onClose} {...rest}>
            <StyledMuiAlert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
               {message}
            </StyledMuiAlert>
         </Snackbar>
      </>
   )
}
