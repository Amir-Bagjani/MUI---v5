import React from 'react'
import { Grid, Skeleton } from '@mui/material';
import { BasicSnackbar, CommonButton, GridContainer } from '../../components';



export const Storage = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const handleClick = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = React.useCallback((event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }, []);

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false)
    }, 3000);

    return () => clearTimeout(timer);
  }, [])


  return (
    <GridContainer>
      {loading && <Skeleton>
        <CommonButton variant="outlined" onClick={handleClick}>
          Open success snackbar
        </CommonButton>
      </Skeleton>}
      {!loading && <CommonButton variant="outlined" onClick={handleClick}>
        Open success snackbar
      </CommonButton>}
      <BasicSnackbar
        open={open}
        onClose={handleClose}
        severity="success"
        message='This is a success message!'
      />
    </GridContainer>
  )
}
