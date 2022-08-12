import { Delete } from "@mui/icons-material";
import { Tooltip, IconButton, Stack } from "@mui/material";

const TooltipMUI = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Tooltip title="Delete icon" placement="left">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete icon" placement="top">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete icon" >
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete icon" placement="right">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete icon" placement="left" arrow>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete icon" placement="top" arrow>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete icon"  arrow>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete icon" placement="right" arrow>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete icon" placement="left" arrow enterDelay={500} leaveDelay={200} >
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete icon" placement="top" arrow enterDelay={500} leaveDelay={200} >
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete icon"  arrow enterDelay={500} leaveDelay={200} >
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete icon" placement="right" arrow enterDelay={500} leaveDelay={200} >
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default TooltipMUI;
