import { Grid, Box } from "@mui/material";

const GridMUI = () => {
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={1} mb={3}>
        <Grid item xs={6}>
          <Box bgcolor="info.light" p={2}>item 1</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="info.light" p={2}>item 2</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="info.light" p={2}>item 3</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="info.light" p={2}>item 4</Box>
        </Grid>
      </Grid>
      <Grid container spacing={1} mb={3}>
        <Grid item xs={3}>
          <Box bgcolor="info.light" p={2}>item 1</Box>
        </Grid>
        <Grid item xs={9}>
          <Box bgcolor="info.light" p={2}>item 2</Box>
        </Grid>
        <Grid item xs={9}>
          <Box bgcolor="info.light" p={2}>item 3</Box>
        </Grid>
        <Grid item xs={3}>
          <Box bgcolor="info.light" p={2}>item 4</Box>
        </Grid>
      </Grid>
      <Grid container spacing={1} mb={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <Box bgcolor="info.light" p={2}>item 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box bgcolor="info.light" p={2}>item 2</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box bgcolor="info.light" p={2}>item 3</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box bgcolor="info.light" p={2}>item 4</Box>
        </Grid>
      </Grid>
      <Grid container spacing={1} mb={3}>
        <Grid item xs>
          <Box bgcolor="info.light" p={2}>item 1</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="info.light" p={2}>item 2</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="info.light" p={2}>item 3</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="info.light" p={2}>item 4</Box>
        </Grid>
      </Grid>
      <Grid container spacing={1} mb={3}>
        <Grid item xs>
          <Box bgcolor="info.light" p={2}>item 1</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="info.light" p={2}>item 2</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="info.light" p={2}>item 3</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="info.light" p={2}>item 4</Box>
        </Grid>
      </Grid>
      <Grid container spacing={1} mb={3}>
        <Grid item xs>
          <Box bgcolor="info.light" p={2}>item 1</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="info.light" p={2}>item 2</Box>
        </Grid>
        <Grid item xs="auto">
          <Box bgcolor="info.light" p={2}>item 3</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="info.light" p={2}>item 4</Box>
        </Grid>
      </Grid>
      <Grid container spacing={1} mb={3}>
        <Grid item xs="auto">
          <Box bgcolor="info.light" p={2}>item 1</Box>
        </Grid>
        <Grid item xs="auto">
          <Box bgcolor="info.light" p={2}>item 2</Box>
        </Grid>
        <Grid item xs="auto">
          <Box bgcolor="info.light" p={2}>item 3</Box>
        </Grid>
        <Grid item xs="auto">
          <Box bgcolor="info.light" p={2}>item 4</Box>
        </Grid>
      </Grid>
      <Grid container spacing={1} mb={3}>
        <Grid item xs="auto" sm={4}>
          <Box sx={{width: {xs: "150px" , sm: "auto"}}} bgcolor="info.light" p={2}>item 1</Box>
        </Grid>
        <Grid item xs="auto" sm={4}>
          <Box sx={{width: {xs: "150px" , sm: "auto"}}} bgcolor="info.light" p={2}>item 2</Box>
        </Grid>
        <Grid item xs="auto" sm={4}>
          <Box sx={{width: {xs: "150px" , sm: "auto"}}} bgcolor="info.light" p={2}>item 3</Box>
        </Grid>
        <Grid item xs="auto" sm={4}>
          <Box sx={{width: {xs: "150px" , sm: "auto"}}} bgcolor="info.light" p={2}>item 4</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default GridMUI;
