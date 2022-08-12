import { Box, TextField, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";

const SelectMUI = () => {
  const [country, setCountry] = useState<string>("");
  const [countries, setCountries] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value as string);
  };

  const handleChangeConuntries = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  console.log({ countries });

  return (
    <Stack spacing={2} display="block">
      <Box width="250px">
        <TextField
          value={country}
          onChange={handleChange}
          label="select country"
          select
          fullWidth
        >
          <MenuItem value="IR">Iran</MenuItem>
          <MenuItem value="CA">Canada</MenuItem>
          <MenuItem value="US">America</MenuItem>
        </TextField>
      </Box>
      <Box width="250px">
        <TextField
          value={countries}
          onChange={handleChangeConuntries}
          label="select country"
          select
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="warning"
          helperText="Please select your country"
        >
          <MenuItem value="IR">Iran</MenuItem>
          <MenuItem value="CA">Canada</MenuItem>
          <MenuItem value="US">America</MenuItem>
        </TextField>
      </Box>
      <Box width="250px">
        <TextField
          value={country}
          onChange={handleChange}
          label="select country"
          select
          fullWidth
          SelectProps={{
            native: true,
          }}
        >
          <option value="IR">Iran</option>
          <option value="CA">Canada</option>
          <option value="US">America</option>
        </TextField>
      </Box>
    </Stack>
  );
};

export default SelectMUI;
