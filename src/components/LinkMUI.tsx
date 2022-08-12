import { Stack, Link, Typography } from "@mui/material";

const LinkMUI = () => {
  return (
    <Stack m={2} spacing={2} direction="row">
      <Link href="#">Home</Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
      <Link href="#" underline="hover">
        Underline
      </Link>
      <Link href="#" variant="h5" color="secondary">
        variant h5
      </Link>
      <Typography variant={"body1"}>
        <Link  href="#">variant body1 with typography component</Link>
      </Typography >
      <Typography variant={"body1"} >
        <Link  href="#">variant body1 with typography component</Link>
      </Typography>
    </Stack>
  );
};

export default LinkMUI;
