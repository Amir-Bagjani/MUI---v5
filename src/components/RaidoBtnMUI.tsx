import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

const RaidoBtnMUI = () => {
  const [value, setValue] = useState("0-2");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  console.log(value)

  return (
    <Stack spacing={2} display="block">
      <Box>
        <FormControl>
          <FormLabel id="job-experiance-group-label">
            Years of experiance
          </FormLabel>
          <RadioGroup
            name="job-experiance-group"
            aria-labelledby="job-experiance-group-label"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel control={<Radio />} value="0-2" label="0-2" />
            <FormControlLabel control={<Radio />} value="3-5" label="3-5" />
            <FormControlLabel control={<Radio />} value="6-10" label="6-10" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel id="job-experiance-group-label">
            Years of experiance
          </FormLabel>
          <RadioGroup
            name="job-experiance-group"
            aria-labelledby="job-experiance-group-label"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel control={<Radio />} value="0-2" label="0-2" />
            <FormControlLabel control={<Radio />} value="3-5" label="3-5" />
            <FormControlLabel control={<Radio />} value="6-10" label="6-10" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel id="job-experiance-group-label">
            Years of experiance
          </FormLabel>
          <RadioGroup
            name="job-experiance-group"
            aria-labelledby="job-experiance-group-label"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel control={<Radio color="secondary" size="small" />} value="0-2" label="0-2" />
            <FormControlLabel control={<Radio color="secondary" size="small" />} value="3-5" label="3-5" />
            <FormControlLabel control={<Radio color="secondary" size="small" />} value="6-10" label="6-10" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl error>
          <FormLabel id="job-experiance-group-label">
            Years of experiance
          </FormLabel>
          <RadioGroup
            name="job-experiance-group"
            aria-labelledby="job-experiance-group-label"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel control={<Radio size="small" />} value="0-2" label="0-2" />
            <FormControlLabel control={<Radio size="small" />} value="3-5" label="3-5" />
            <FormControlLabel control={<Radio size="small" />} value="6-10" label="6-10" />
          </RadioGroup>
          <FormHelperText>Please select your job experiacne</FormHelperText>
        </FormControl>
      </Box>
      
    </Stack>
  );
};

export default RaidoBtnMUI;
