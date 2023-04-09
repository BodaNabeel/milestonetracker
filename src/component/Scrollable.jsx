import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

export default function ScrollableTabsButtonForce({
  labelNumber,
  setLabelNumber,
}) {
  const vw = useMediaQuery("(max-width: 600px)");
  const handleChange = (event, newValue) => {
    setLabelNumber(newValue);
  };
  return (
    <Box sx={{ maxWidth: { s: 320, md: "100%" }, bgcolor: "background.paper" }}>
      <Tabs
        value={labelNumber}
        onChange={handleChange}
        allowScrollButtonsMobile={vw ? true : false}
        centered={vw ? false : true}
        scrollButtons={vw ? true : false}
        variant={vw ? "scrollable" : ""}
      >
        <Tab value={0} label="All" />
        <Tab value={1} label="Books" />
        <Tab value={2} label="Movies" />
        <Tab value={3} label="Series" />
        <Tab value={4} label="Games" />
      </Tabs>
    </Box>
  );
}
