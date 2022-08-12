import { Bluetooth, Mail, Wifi } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
  ListSubheader,
  Switch,
} from "@mui/material";
import { useState } from "react";

const ListMUI = () => {
  const [settings, setSettings] = useState<string[]>([]);

  console.log({ settings });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const index = settings.indexOf(value);
    if (index === -1) {
      setSettings([...settings, value]);
    } else {
      setSettings(settings.filter((setting) => setting !== value));
    }
  };

  return (
    <Stack spacing={4}>
      <Box width={400} bgcolor="#efefef">
        <List>
          <ListItem>
            <ListItemText primary="List Item 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="List Item 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary="List Item 3" />
          </ListItem>
        </List>
      </Box>
      <Box width={400} bgcolor="#efefef">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="List Item 1" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="List Item 2" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="List Item 3" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box width={400} bgcolor="#efefef">
        <List>
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="List Item 1" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="List Item 2" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="List Item 3" />
          </ListItem>
        </List>
      </Box>
      <Box width={400} bgcolor="#efefef">
        <List>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List Item 1"
              secondary="This is secondary line"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List Item 2"
              secondary="This is secondary line"
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary="List Item 3"
              secondary="This is secondary line"
            />
          </ListItem>
        </List>
      </Box>
      <Box width={400} sx={{ border: `1px solid rgba(0, 0, 0, 0.1)` }}>
        <List subheader={<ListSubheader>Setting</ListSubheader>}>
          <ListItem>
            <ListItemIcon>
              <Wifi />
            </ListItemIcon>
            <ListItemText primary="Wi-Fi" />
            <Switch
              checked={settings.includes("wifi")}
              value="wifi"
              edge="end"
              onChange={handleChange}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Bluetooth />
            </ListItemIcon>
            <ListItemText primary="Bluetooth" />
            <Switch
              checked={settings.includes("bluetooth")}
              value="bluetooth"
              edge="end"
              onChange={handleChange}
            />
          </ListItem>
        </List>
      </Box>
    </Stack>
  );
};

export default ListMUI;
