import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useState } from "react";

const DialogMui = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>open dialog box</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to submit the test? you will not be able to
            edit the test after submitting.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary">
            submit
          </Button>
          <Button variant="contained" color="error" onClick={() => setOpen(false)}>
            cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogMui;
