import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";

const TextFieldMUI = () => {
  const [show, setShow] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField variant="outlined" label="name" />
        <TextField variant="filled" label="name" />
        <TextField variant="standard" label="name" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField size="small" variant="outlined" label="name small size" />
        <TextField size="small" variant="filled" label="name small size" />
        <TextField size="small" variant="standard" label="name small size" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          size="small"
          color="success"
          variant="outlined"
          label="name small size"
        />
        <TextField
          size="small"
          color="secondary"
          variant="filled"
          label="name small size"
        />
        <TextField
          size="small"
          color="warning"
          variant="standard"
          label="name small size"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          size="small"
          required
          color="success"
          variant="outlined"
          label="name small size with required"
        />
        <TextField
          size="small"
          required
          color="secondary"
          variant="filled"
          label="name small size with required"
        />
        <TextField
          size="small"
          required
          color="warning"
          variant="standard"
          label="name small size with required"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          variant="outlined"
          label="name"
          helperText="do not share you passwprd"
        />
        <TextField
          variant="filled"
          label="name"
          helperText="do not share you passwprd"
        />
        <TextField
          variant="standard"
          label="name"
          helperText="do not share you passwprd"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          size="small"
          type={"password"}
          variant="outlined"
          label="password"
        />
        <TextField
          size="small"
          variant="outlined"
          InputProps={{ readOnly: true }}
          label="read only"
        />
        <TextField
          size="small"
          disabled
          variant="outlined"
          label="name small size"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          size="small"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          label="amount"
        />
        <TextField
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
          label="weight"
        />
        <TextField
          size="small"
          type={show ? "text" : "password"}
          helperText="Enter your password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="do not show password"
                  size="small"
                  onClick={() => setShow((p) => !p)}
                >
                  {show ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          label="name"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          size="small"
          required
          error={!name}
          helperText={name ? "Please do not share your name" : "Please enter your name"}
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          size="small"
          required
          error={!name}
          helperText={name ? "  " : "Please enter your name"}
          label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Stack>
    </Stack>
  );
};

export default TextFieldMUI;
