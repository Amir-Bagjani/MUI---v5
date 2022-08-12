import { Paper, Stack, Box } from "@mui/material";
import "../paper.css";

const PaperMUI = () => {
  return (
    <Stack display="flex" direction={"row"} spacing={2}>
      <Box sx={{"& > *": {m: 2}}}>
        <Paper elevation={5} sx={{ width: "100px", height: "100px" }}></Paper>
        <Paper elevation={3} sx={{ width: "100px", height: "100px" }}></Paper>
        <Paper elevation={0} sx={{ width: "100px", height: "100px" }}></Paper>
      </Box>
      <Box sx={{"& > *": {m: 2}}}>
        <Paper elevation={24} sx={{ width: "100px", height: "100px" }}></Paper>
        <Paper sx={{ width: "100px", height: "100px" }}></Paper>
        <Paper
          variant="outlined"
          sx={{ width: "100px", height: "100px" }}
        ></Paper>
      </Box>
    </Stack>
  );
};

export default PaperMUI;
