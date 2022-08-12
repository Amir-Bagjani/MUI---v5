import { Stack, Box, Divider } from "@mui/material";

const StackMUI = () => {
  return (
    <Stack
      sx={{ border: `1px solid` }}
      spacing={2}
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box width="100px" height="100px" bgcolor="success.light"></Box>
      <Box
        sx={{ width: `100px`, height: `100px`, bgcolor: `primary.dark` }}
      ></Box>
    </Stack>
  );
};

export default StackMUI;
