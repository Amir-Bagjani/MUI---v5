import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";

const DrawerMUI = () => {
    const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <>
    <IconButton edge="end" onClick={() => setOpenSidebar(true)}>
        <Menu />
    </IconButton>
      <Drawer open={openSidebar} anchor="left" onClick={() => setOpenSidebar(false)}>
        <Box p={2} width="250px" role="presentation" textAlign={"center"}>
          <Typography variant="h5" component={"h5"}>
            Sidebar
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerMUI;
