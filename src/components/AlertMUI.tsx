import { Face } from "@mui/icons-material";
import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import { useState } from "react";

const AlertMUI = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Stack spacing={2}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>This is <strong>success</strong> alert
      </Alert>
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small">
            retry
          </Button>
        }
      >
        This is error alert
      </Alert>
      <Alert severity="info" onClose={() => alert("onClose handler called")}>This is info alert</Alert>
      <Alert severity="warning">This is warning alert</Alert>
      <Alert severity="warning" icon={<Face />}>
        This is warning alert - custom icon
      </Alert>

      <Alert variant="outlined" severity="success">
        <AlertTitle>Success</AlertTitle>This is <strong>success</strong> alert
      </Alert>
      <Alert variant="outlined" severity="error">
        This is error alert
      </Alert>
      <Alert
        variant="outlined"
        severity="error"
        action={
          <Button color="inherit" size="small">
            retry
          </Button>
        }
      >
        This is error alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is info alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is warning alert
      </Alert>
      <Alert variant="outlined" severity="warning" icon={<Face />}>
        This is warning alert - custom icon
      </Alert>

      <Alert variant="filled" severity="success">
        <AlertTitle>Success</AlertTitle>This is <strong>success</strong> alert
      </Alert>
      <Alert variant="filled" severity="error">
        This is error alert
      </Alert>
      <Alert variant="filled" severity="info">
        This is info alert
      </Alert>
      <Alert variant="filled" severity="warning">
        This is warning alert
      </Alert>
      <Alert variant="filled" severity="warning" icon={<Face />}>
        This is warning alert - custom icon
      </Alert>
      {show && (
        <Alert
          severity="warning"
          icon={<Face />}
          onClose={() => setShow(false)}
        >
          This is warning alert - custom icon - closeable icon
        </Alert>
      )}
      <Button variant="outlined" onClick={() => setShow(true)}>
        {" "}
        show the alert
      </Button>
    </Stack>
  );
};

export default AlertMUI;
