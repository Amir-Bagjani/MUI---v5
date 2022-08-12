import { Box, Stack, styled } from "@mui/material";


const StyledBox = styled(Box)(({theme}) => ({
  width: 100,
  height: 100,
  backgroundColor: theme.status.danger,
}))
const StyledBoxA = styled(Box)(({theme}) => ({
  width: 100,
  height: 100,
  backgroundColor: theme.palette.primary.light,
}))
const StyledBoxTwo = styled(Box)(({theme}) => ({
  width: 100,
  height: 100,
  backgroundColor: theme.palette.projectMainColor?.main,
}))
const StyledBoxThree = styled(Box)(({theme}) => ({
  width: 100,
  height: 100,
  backgroundColor: theme.palette.projectMainColor?.light,
}))
const StyledBoxFour = styled(Box)(({theme}) => ({
  width: 100,
  height: 100,
  backgroundColor: theme.palette.projectMainColor?.veryLight,
}))
const StyledBoxFive = styled(Box)(({theme}) => ({
  width: 100,
  height: 100,
  backgroundColor: theme.palette.projectMainColor?.veryDark,
}))

const ResponsiveMUI = () => {
  return (
    <Stack spacing={3}>
      <Box
        sx={{
          height: 200,
          width: { xs: 100, sm: 300, md: 500, lg: 700 },
          bgcolor: "primary.main",
        }}
      />
      <Box
        sx={{
          height: 200,
          width: { xs: 100, sm: 300, md: 500, lg: 700 },
          bgcolor: "primary.light",
        }}
      />
      <Box
        sx={{
          height: 200,
          width: { xs: 100, sm: 300, md: 500, lg: 700 },
          bgcolor: "primary.dark",
        }}
      />
      <StyledBox />
      <StyledBoxA />
      <StyledBoxTwo />
      <StyledBoxThree />
      <StyledBoxFour />
      <StyledBoxFive />
    </Stack>
  );
};

export default ResponsiveMUI;
