import { Snackbar, Button, AlertProps } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import React, { useState } from "react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert {...props} ref={ref} />
));

const SnackbarMUI = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (e: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clikcaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>show toast</Button>
      <Snackbar
        message="form submitted successfully"
        autoHideDuration={2000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
      />
      <Snackbar
        message="form submitted successfully"
        autoHideDuration={2000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      />
      <Snackbar
        autoHideDuration={2000}
        open={open}
        onClose={handleClose}
      >
        <Alert onClose={handleClose}  severity="success">
            Form submitted successfully
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackbarMUI;
