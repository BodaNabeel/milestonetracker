import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import { Divider, useMediaQuery } from "@mui/material";

export default function TempBar() {
  const responsiveSearchBar = useMediaQuery("(min-width:701px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <p>Tracker Logo</p>
          <Divider orientation="vertical" flexItem />
          {responsiveSearchBar ? <SearchBar /> : null}
          {/* <SearchBar className="fullWidth-searchBar"/> */}
          <p>Buy me a coffee</p>
          <p>Logout</p>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
