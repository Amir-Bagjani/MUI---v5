import { Box } from "@mui/material";

const BoxMUI = () => {
  return (
    <>
      <Box>This is div component</Box>
      <Box component={"span"}>This is span component</Box>
      <Box component={"section"} color="primary.light">
        This is section component
      </Box>
      <Box component={"section"} color="primary.main">
        This is section component
      </Box>
      <Box component={"section"} color="primary.dark">
        This is section component
      </Box>
      <Box
        component={"section"}
        sx={{
          backgroundColor: "warning.light",
        }}
      >
        This is section component
      </Box>
      <Box
        component={"section"}
        sx={{
          backgroundColor: "warning.main",
        }}
      >
        This is section component
      </Box>
      <Box
        component={"section"}
        sx={{
          backgroundColor: "warning.dark",
        }}
      >
        This is section component
      </Box>
      <Box
        sx={{
          backgroundColor: "warning.dark",
          width: "300px",
          height: "300px",
          padding: "20px",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        This is section component
      </Box>
      <Box component={"button"}>Button</Box>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        width="100px"
        height="100px"
        bgcolor={"error.light"}
        p={2}
      >asdasdsa</Box>
    </>
  );
};

export default BoxMUI;
