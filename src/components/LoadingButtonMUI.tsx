import { Stack } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { Search } from "@mui/icons-material"
const LoadingButtonMUI = () => {
  return (
    <Stack spacing={2} direction="row">
        <LoadingButton variant="outlined">submit</LoadingButton>
        <LoadingButton variant="contained">submit</LoadingButton>
        <LoadingButton loading variant="outlined">submit</LoadingButton>
        <LoadingButton loading variant="contained">submit</LoadingButton>
        <LoadingButton loading loadingIndicator="Loading..." variant="contained">fetch data</LoadingButton>
        <LoadingButton loading  loadingPosition="start" startIcon={<Search />} variant="outlined">fetch </LoadingButton>
    </Stack>
  )
}

export default LoadingButtonMUI