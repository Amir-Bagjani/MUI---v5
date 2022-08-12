import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const CheckBoxMUI = () => {
  const [state, setState] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.checked);
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const index = skills.indexOf(value);
    if (index === -1) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  console.log({ skills });

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox checked={state} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          checked={state}
          onChange={handleChange}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          color="secondary"
          inputProps={{ "aria-label": "controlled checkbox" }}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              value={"html"}
              control={
                <Checkbox
                  onChange={handleSkillChange}
                  checked={skills.includes("html")}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value={"css"}
              control={
                <Checkbox
                  onChange={handleSkillChange}
                  checked={skills.includes("css")}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value={"javascript"}
              control={
                <Checkbox
                  onChange={handleSkillChange}
                  checked={skills.includes("javascript")}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl error={skills.length < 2}>
          <FormLabel>Skills (Pick two atleast)</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              value={"html"}
              control={
                <Checkbox
                  onChange={handleSkillChange}
                  checked={skills.includes("html")}
                  size="small"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value={"css"}
              control={
                <Checkbox
                  onChange={handleSkillChange}
                  checked={skills.includes("css")}
                  size="small"
                  color="secondary"
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value={"javascript"}
              control={
                <Checkbox
                  onChange={handleSkillChange}
                  checked={skills.includes("javascript")}
                  size="small"
                  color="secondary"
                />
              }
            />
          </FormGroup>
          {skills.length < 2 && (
            <FormHelperText>"Please select two skills"</FormHelperText>
          )}
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value={"html"}
              control={
                <Checkbox
                  onChange={handleSkillChange}
                  checked={skills.includes("html")}
                  size="small"
                  color="success"
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value={"css"}
              control={
                <Checkbox
                  onChange={handleSkillChange}
                  checked={skills.includes("css")}
                  size="small"
                  color="success"
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              value={"javascript"}
              control={
                <Checkbox
                  onChange={handleSkillChange}
                  checked={skills.includes("javascript")}
                  size="small"
                  color="success"
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default CheckBoxMUI;
