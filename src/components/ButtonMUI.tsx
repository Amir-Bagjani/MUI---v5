import { Button, Stack, IconButton, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const ButtonMUI = () => {
  return (
    <Stack spacing={3}>
      <Stack spacing={3} direction="row">
        <Button variant="text">text button</Button>
        <Button variant="text" href="https://google.com">
          link button
        </Button>
        <Button variant="outlined" href="https://google.com">
          outlined button
        </Button>
        <Button variant="contained">contained button</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
      </Stack>

      <Stack display="block" direction="row" spacing={2}>
        <Button variant="contained" size="small">
          small button
        </Button>
        <Button variant="contained" size="medium">
          medium button
        </Button>
        <Button variant="contained" size="large">
          large button
        </Button>
      </Stack>

      <Stack spacing={2} direction="row" display="block">
        <Button variant="contained" color="secondary" startIcon={<SendIcon />}>
          send
        </Button>
        <Button variant="contained" color="primary" endIcon={<SendIcon />}>
          send
        </Button>
        <Button variant="outlined" color="warning" endIcon={<SendIcon />}>
          send
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="warning"
          endIcon={<SendIcon />}
        >
          send
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="error"
          endIcon={<DeleteIcon />}
        >
          delete
        </Button>
      </Stack>

      <Stack spacing={2} direction="row" display="block">
        <IconButton aria-label="send" size="small">
          <SendIcon />
        </IconButton>
        <IconButton aria-label="send" size="large" color="success">
          <SendIcon />
        </IconButton>
        <IconButton aria-label="delete" color="error">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" disableElevation>
          primary
        </Button>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary" disableElevation>
          secondary
        </Button>
        <Button variant="outlined" color="success" disableElevation>
          success
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="primary"
          disableElevation
          disableRipple
        >
          primary
        </Button>
        <Button variant="contained" color="primary" disableRipple>
          primary
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          disableRipple
        >
          secondary
        </Button>
        <Button variant="outlined" color="success" disableElevation>
          success
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
      </Stack>

      <Stack direction="row" display="block" spacing={2}>
        <ButtonGroup
          variant="outlined"
          size="small"
          color="warning"
          aria-label="button group"
        >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" color="error" size="large">
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default ButtonMUI;
