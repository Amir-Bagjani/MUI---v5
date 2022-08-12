import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Edit } from "@mui/icons-material";

const SpeedDialMUI = () => {
  return (
    <>
      <SpeedDial
        ariaLabel="Navigation speed dial"
        sx={{ position: `absolute`, bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          icon={<FileCopyIcon />}
          tooltipTitle="Copy"
          tooltipOpen
        />
        <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
      </SpeedDial>
      <SpeedDial
        ariaLabel="Navigation speed dial"
        sx={{ position: `absolute`, bottom: 16, left: 16 }}
        icon={<SpeedDialIcon openIcon={<Edit />} />}
      >
        <SpeedDialAction
          icon={<FileCopyIcon />}
          tooltipTitle="Copy"
          tooltipPlacement="right"
          tooltipOpen
        />
        <SpeedDialAction
          icon={<SaveIcon />}
          tooltipTitle="Save"
          tooltipOpen
          tooltipPlacement="right"
        />
        <SpeedDialAction
          icon={<PrintIcon />}
          tooltipTitle="Print"
          tooltipOpen
          tooltipPlacement="right"
        />
        <SpeedDialAction
          icon={<ShareIcon />}
          tooltipTitle="Share"
          tooltipOpen
          tooltipPlacement="right"
        />
      </SpeedDial>
    </>
  );
};

export default SpeedDialMUI;
