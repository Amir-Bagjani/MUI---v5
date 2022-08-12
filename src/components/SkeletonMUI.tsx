import { Stack, Box, Skeleton, Avatar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const SkeletonMUI = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() =>{
            setLoading(false);
        }, 3000)
    }, [])


  return (
    <Box width="250px">
        {loading && <Skeleton variant="rectangular" animation="wave" width="100%" height="150px" />}
        {!loading && <img src='https://source.unsplash.com/random/256x144' alt="skeleton" width="100%" height="150"/>}
        <Stack mt={2} width={"100%"} direction="row" justifyContent={"space-between"} alignItems="center">
            {loading && <Skeleton variant="circular" width="40px" height="40px" animation="wave"/>}
            {!loading && <Avatar color="error">LA</Avatar>}
            <Stack spacing={1} width="80%">
                {loading && <>
                <Typography variant="body1"><Skeleton width="100%" animation="wave"/> </Typography>
                <Typography variant="body2"><Skeleton width="50%" animation="wave"/> </Typography>
                </>}
                {!loading && <>
                <Typography variant="body1">React Tip Everyday </Typography>
                <Typography variant="body2">Louis Hamilton </Typography>
                </>}
            </Stack>
        </Stack>
    </Box>
    // <Stack spacing={2} width="250px">
    //   <Stack spacing={1}>
    //     <Skeleton />
    //     <Skeleton variant="circular" width="40px" height={40} />
    //     <Skeleton variant="rectangular" width="250" height={120} />
    //   </Stack>
    //   <Stack spacing={1}>
    //     <Skeleton animation="wave" />
    //     <Skeleton animation="wave" variant="circular" width="40px" height={40} />
    //     <Skeleton animation="wave" variant="rectangular" width="250" height={120} />
    //   </Stack>
    //   <Stack spacing={1}>
    //     <Skeleton animation={false} />
    //     <Skeleton animation={false} variant="circular" width="40px" height={40} />
    //     <Skeleton animation={false} variant="rectangular" width="250" height={120} />
    //   </Stack>
    // </Stack>
  );
};

export default SkeletonMUI;
