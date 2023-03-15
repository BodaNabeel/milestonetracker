import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
export default function SearchBar({ searchFieldQuery, setSearchFieldQuery }) {
  const [data, setData] = useState(0);
  const baseURLforShow = `https://api.themoviedb.org/3/search/tv?api_key=30d24f251c62092cc350130a6f881fec&language=en-US&page=1&query=${data}`;
  const baseURLforMovie = `https://api.themoviedb.org/3/search/movie?api_key=30d24f251c62092cc350130a6f881fec&language=en-US&query=${data}`;
  const [movieData, setMovieData] = useState(null);
  const handleSearch = (event) => {
    if (event.charCode === 13 || event.keyCode == 13) {
      setData(event.target.value);
      setSearchFieldQuery("");
      event.target.blur();
    }
  };
  const manageQuery = (event) => {
    setSearchFieldQuery(event.target.value);
  };
  useEffect(() => {
    if (data === 0) {
      console.log("Data hasn't fetched yet.");
    } else {
      console.log(data, "Data fetched from API");
    }
  }, [data]);
  useEffect(() => {
    axios.get(baseURLforMovie).then((response) => {
      setMovieData(response.data);
      console.log(movieData);
    });
  }, [data]);

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
