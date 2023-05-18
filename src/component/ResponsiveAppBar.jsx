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
import {useNavigate} from "react-router-dom"
import handleSignOut from "./LogOutFunction";
import LogoutFunction from "./LogoutFunction";

export default function ResponsiveAppBar({
  searchFieldQuery,
  setSearchFieldQuery,
  setIsHome,
}) {
  const responsiveSearchBar = useMediaQuery("(min-width:701px)");
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "white",
          color: "black",
          boxShadow: "none",
          margin: 0,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <p onClick={() => navigate("/")}>Home</p>
          <Divider orientation="vertical" flexItem />
          {responsiveSearchBar ? (
            <SearchBar
              setIsHome={setIsHome}
              searchFieldQuery={searchFieldQuery}
              setSearchFieldQuery={setSearchFieldQuery}
            />
          ) : null}
          <p
          style={{
            cursor: "wait"
          }}
          >Buy me a coffee</p>
          <LogoutFunction/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
