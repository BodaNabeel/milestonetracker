import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

function MobileViewTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      allowScrollButtonsMobile
      scrollButtons
      variant="scrollable"
    >
      <Tab label="All" />
      <Tab label="Movies" />
      <Tab label="Series" />
      <Tab label="Books" />
      <Tab label="Games" />
    </Tabs>
  );
}

function DesktopViewTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs value={value} onChange={handleChange} centered>
      <Tab label="All" />
      <Tab label="Movies" />
      <Tab label="Series" />
      <Tab label="Books" />
      <Tab label="Games" />
    </Tabs>
  );
}

export default function ScrollableTabsButtonForce() {
  const vw = useMediaQuery("(max-width: 600px)");

  return (
    <Box sx={{ maxWidth: { s: 320, md: "100%" }, bgcolor: "background.paper" }}>
      {vw ? <MobileViewTabs /> : <DesktopViewTabs />}
    </Box>
  );
}
