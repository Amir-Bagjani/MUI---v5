import { Stack, Avatar, AvatarGroup } from "@mui/material";
import { red } from "@mui/material/colors";

const AvatarMUI = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Avatar>AB</Avatar>
        <Avatar>CV</Avatar>
        <Avatar>GT</Avatar>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: "info.light", width: 70, height: 70 }}>AB</Avatar>
        <Avatar sx={{ bgcolor: "info.light", width: 70, height: 70 }}>CV</Avatar>
        <Avatar sx={{ bgcolor: "info.light", width: 70, height: 70 }}>GT</Avatar>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar variant="circular" sx={{ bgcolor: "info.light", width: 50, height: 50 }}>AB</Avatar>
        <Avatar variant="rounded" sx={{ bgcolor: "info.light", width: 50, height: 50 }}>CV</Avatar>
        <Avatar variant="square" sx={{ bgcolor: "info.light", width: 50, height: 50 }}>GT</Avatar>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: "info.light" }}>AB</Avatar>
        <Avatar sx={{ bgcolor: "error.light" }}>CV</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>GT</Avatar>
        <Avatar
            src='https://randomuser.me/api/portraits/women/79.jpg'
            alt='Jane Doe'
          />
           <Avatar
            src='https://randomuser.me/api/portraits/men/51.jpg'
            alt='John Doe'
          />
      </Stack>
      <Stack direction="row" spacing={2}>
        <AvatarGroup max={3}>
        <Avatar
         src='https://randomuser.me/api/portraits/men/51.jpg'
         alt='John Doe'
       />
        <Avatar sx={{ bgcolor: "info.light" }}>AB</Avatar>
        <Avatar sx={{ bgcolor: "error.light" }}>CV</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>GT</Avatar>
        <Avatar
            src='https://randomuser.me/api/portraits/women/79.jpg'
            alt='Jane Doe'
          />
          </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={2}>
        <AvatarGroup max={4}>
        <Avatar
         src='https://randomuser.me/api/portraits/men/51.jpg'
         alt='John Doe'
       />
        <Avatar sx={{ bgcolor: "info.light" }}>AB</Avatar>
        <Avatar sx={{ bgcolor: "error.light" }}>CV</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>GT</Avatar>
        <Avatar
            src='https://randomuser.me/api/portraits/women/79.jpg'
            alt='Jane Doe'
          />
          </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={2}>
        <AvatarGroup max={4}>
        <Avatar
         src='https://randomuser.me/api/portraits/men/51.jpg'
         alt='John Doe'
       />
       <Avatar src="/broken-image.jpg" />
       <Avatar src="/broken-image.jpg" alt='John Doe' sx={{bgcolor: red[100]}}/>
       <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' />
        <Avatar sx={{ bgcolor: "info.light" }}>AB</Avatar>
        <Avatar sx={{ bgcolor: "error.light" }}>CV</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>GT</Avatar>
        <Avatar
            src='https://randomuser.me/api/portraits/women/79.jpg'
            alt='Jane Doe'
          />
          </AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default AvatarMUI;
