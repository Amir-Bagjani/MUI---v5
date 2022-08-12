import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import { ExpandMore } from "@mui/icons-material";

const heights = [
  150, 100, 45, 70, 120, 75, 50, 110, 150, 30, 50, 180, 140, 160, 200,
];

const MasonryMUI = () => {
  return (
    <Stack spacing={20}>
      <Box width="500px" height="400px">
        <Masonry columns={4} spacing={1}>
          {heights.map((height, ind) => (
            <Paper
              key={ind}
              variant={"outlined"}
              sx={{
                border: "1px solid divider",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height,
              }}
            >
              {ind}
            </Paper>
          ))}
        </Masonry>
      </Box>
      <Box width="500px" height="400px">
        <Masonry columns={4} spacing={1}>
          {heights.map((height, ind) => (
            <Paper
              key={ind}
              variant={"outlined"}
              sx={{ border: "1px solid divider" }}
            >
              <Accordion sx={{minHeight: height}}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>Acordion index - {ind}</Typography>
                </AccordionSummary>
                <AccordionDetails>Content - {ind}</AccordionDetails>
              </Accordion>
            </Paper>
          ))}
        </Masonry>
      </Box>
    </Stack>
  );
};

export default MasonryMUI;
