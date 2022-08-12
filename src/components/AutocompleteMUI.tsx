import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
    id: number;
    label: string;
}

const skills = ["HTML", "CSS", "JavaScript", "Vue", "React", "Angular"];
const sillOptions: Skill[] = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}))



const AutocompleteMUI = () => {
  const [value, setValue] = useState<string | null>(null);
  const [label, setLabel] = useState<Skill | null>(null);
  const [labels, setLabels] = useState<Skill[] | undefined>(undefined);

  console.log({label});
  console.log({value});
  console.log({labels});
  

  const handleChange = (_e: React.ChangeEvent<{}>, newVlaue: string | null) => {
    setValue(newVlaue);
  };

  const handleSkillsChange = (_e: React.ChangeEvent<{}>, newVlaue: Skill | null) => {
    setLabel(newVlaue);
  };

  const handleMultiple = (_e: React.ChangeEvent<{}>, newVlaue: Skill[] | undefined) => {
    setLabels(newVlaue);
  };

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(props) => <TextField {...props} label="skills" />}
        value={value}
        onChange={handleChange}
      />
      <Autocomplete
        options={sillOptions}
        renderInput={(props) => <TextField {...props} label="skills" />}
        value={label}
        onChange={handleSkillsChange}
      />
      <Autocomplete
        options={sillOptions}
        getOptionLabel={(option) => option.label}
        renderInput={(props) => <TextField {...props} label="skills" />}
        onChange={handleMultiple}
        value={labels??[]}
        multiple
      />
      <Autocomplete
        options={skills}
        renderInput={(props) => <TextField {...props} label="skills" />}
        value={value}
        freeSolo
        onChange={handleChange}
      />
    </Stack>
  );
};

export default AutocompleteMUI;
