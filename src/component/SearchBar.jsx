import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { DataContext } from "../data/DataContext";
import {useNavigate} from "react-router-dom"
export default function SearchBar({
  searchFieldQuery,
  setSearchFieldQuery,
  setIsHome,
}) {
  const { setQuery } = useContext(DataContext);
  const navigate = useNavigate()
  const handleSearch = (event) => {
    if (event.key == "Enter") {
      let searchQuery = event.target.value;
      let res = searchQuery.replace(/ /, "+");
      setQuery(res);
      navigate(`/${res}`)
      setSearchFieldQuery("");
      event.target.blur();
      setIsHome(false);
    }
  };
  const manageQuery = (event) => {
    setSearchFieldQuery(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        sx={{
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              border: "none",
            },
          },
          margin: "0 10px",
          border: "1px solid #EEEEEE",
          borderRadius: "8px",
          background: "#F8F8F8",
        }}
        size="small"
        onKeyDown={handleSearch}
        placeholder="search movie/book/game"
        fullWidth
        value={searchFieldQuery}
        onChange={manageQuery}
        id="fullWidth"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
