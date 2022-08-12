import { Stack, ToggleButtonGroup, ToggleButton } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import React, { useState } from "react";

const ToggleButonMUI = () => {
  const [align, setAlign] = useState<string>("left");
  const [formats, setFormats] = useState<string[]>([]);

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlign(newAlignment);
  };

  const handleFormatsChange = (
    _event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  return (
    <Stack spacing={5}>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text alignment"
          value={align}
          exclusive
          onChange={handleChange}
          size="small"
        >
          <ToggleButton value="left" aria-label="left alignment">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="center">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right alignment">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formating"
          value={formats}
          onChange={handleFormatsChange}
          size="large"
          color="success"
          orientation="vertical"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon  />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon  />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFillIcon  />
            <ArrowDropDownIcon   />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

    </Stack>
  );
};

export default ToggleButonMUI;
