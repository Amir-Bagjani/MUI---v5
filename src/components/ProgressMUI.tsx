import { Stack, CircularProgress, LinearProgress } from "@mui/material"

const ProgressMUI = () => {
  return (
    <Stack spacing={2}>
        <CircularProgress />
        <CircularProgress color="warning" />
        <CircularProgress variant="determinate" value={65} />
        <LinearProgress />
        <LinearProgress color="warning" />
        <LinearProgress variant="determinate" value={65} />

    </Stack>
  )
}

export default ProgressMUI