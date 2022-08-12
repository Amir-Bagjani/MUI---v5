import {
  Box,
  FormControlLabel,
  Switch,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";

const SwitchMUI = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [colors, setColors] = useState<string[]>(["red"]);

  console.log({ colors });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(e.target.checked);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const index = colors.indexOf(value);
    if (index === -1) {
      setColors([...colors, value]);
    } else {
      setColors(colors.filter((color) => color !== value));
    }
  };

  return (
    <>
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={<Switch checked={darkMode} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={
            <Switch
              size="small"
              color="error"
              checked={darkMode}
              onChange={handleChange}
            />
          }
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Colors</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="Red"
              value={"red"}
              control={
                <Switch
                  onChange={handleColorChange}
                  size="small"
                  color="error"
                  checked={colors.includes("red")}
                />
              }
            />
            <FormControlLabel
              label="Green"
              value={"green"}
              control={
                <Switch
                  onChange={handleColorChange}
                  size="small"
                  color="success"
                  checked={colors.includes("green")}
                />
              }
            />
            <FormControlLabel
              label="yellow"
              value={"yellow"}
              control={
                <Switch
                  onChange={handleColorChange}
                  size="small"
                  color="warning"
                  checked={colors.includes("yellow")}
                />
              }
            />
            <FormControlLabel
              label="blue"
              value={"blue"}
              control={
                <Switch
                  onChange={handleColorChange}
                  size="small"
                  checked={colors.includes("blue")}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default SwitchMUI;
