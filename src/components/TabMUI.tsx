import { Box, Tab, Stack } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import { Favorite, Home, ShoppingCart } from "@mui/icons-material";

const TabMUI = () => {
  const [value, setValue] = useState("1");
  const [valueS, setValueS] = useState("1");

  const handleChange = (_e: React.SyntheticEvent | Event, newValue: string) => {
    setValue(newValue);
  };
  const handleChangeS = (_e: React.SyntheticEvent | Event, newValue: string) => {
    setValueS(newValue);
  };

  return (
    <Stack spacing={2}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList aria-label="tab simple" onChange={handleChange}>
            <Tab label="Tab one" value="1" />
            <Tab label="Tab two" value="2" />
            <Tab label="Tab three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">This is page tab one</TabPanel>
        <TabPanel value="2">This is page tab two</TabPanel>
        <TabPanel value="3">This is page tab three</TabPanel>
      </TabContext>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="tab simple"
            onChange={handleChange}
            textColor={"secondary"}
            indicatorColor="secondary"
          >
            <Tab label="Tab one" value="1" />
            <Tab label="Tab two" value="2" />
            <Tab label="Tab three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">This is page tab one</TabPanel>
        <TabPanel value="2">This is page tab two</TabPanel>
        <TabPanel value="3">This is page tab three</TabPanel>
      </TabContext>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="tab simple"
            onChange={handleChange}
            textColor={"secondary"}
            indicatorColor="secondary"
            centered
          >
            <Tab label="Tab one" value="1" />
            <Tab label="Tab two" value="2" />
            <Tab label="Tab three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">This is page tab one</TabPanel>
        <TabPanel value="2">This is page tab two</TabPanel>
        <TabPanel value="3">This is page tab three</TabPanel>
      </TabContext>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="tab simple"
            onChange={handleChange}
            textColor={"secondary"}
            indicatorColor="secondary"
            centered
          >
            <Tab label="home" value="1" icon={<Home />} />
            <Tab label="cart" value="2" icon={<ShoppingCart />} />
            <Tab label="favorite" value="3" icon={<Favorite />} />
          </TabList>
        </Box>
        <TabPanel value="1">This is home page</TabPanel>
        <TabPanel value="2">This is cart page</TabPanel>
        <TabPanel value="3">This is favorite page</TabPanel>
      </TabContext>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="tab simple"
            onChange={handleChange}
            textColor={"secondary"}
            indicatorColor="secondary"
            centered
          >
            <Tab label="home" value="1" icon={<Home />} iconPosition="start" />
            <Tab
              label="cart"
              value="2"
              icon={<ShoppingCart />}
              iconPosition="start"
            />
            <Tab
              label="favorite"
              value="3"
              icon={<Favorite />}
              iconPosition="start"
            />
          </TabList>
        </Box>
        <TabPanel value="1">This is home page</TabPanel>
        <TabPanel value="2">This is cart page</TabPanel>
        <TabPanel value="3">This is favorite page</TabPanel>
      </TabContext>
      <TabContext value={valueS}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: 500 }}>
          <TabList
            aria-label="tab simple"
            onChange={handleChangeS}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Tab one" value="1" />
            <Tab label="Tab two" value="2" />
            <Tab label="Tab three" value="3" />
            <Tab label="Tab four" value="4" />
            <Tab label="Tab five" value="5" />
            <Tab label="Tab six" value="6" />
            <Tab label="Tab seven" value="7" />
          </TabList>
        </Box>
        <TabPanel value="1">This is page tab one</TabPanel>
        <TabPanel value="2">This is page tab two</TabPanel>
        <TabPanel value="3">This is page tab three</TabPanel>
        <TabPanel value="4">This is page tab four</TabPanel>
        <TabPanel value="5">This is page tab five</TabPanel>
        <TabPanel value="6">This is page tab six</TabPanel>
        <TabPanel value="7">This is page tab seven</TabPanel>
      </TabContext>
    </Stack>
  );
};

export default TabMUI;
