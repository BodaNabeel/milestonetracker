import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
export default function SearchBar({ searchFieldQuery, setSearchFieldQuery }) {
  const [APIquery, setAPIquery] = useState();
  const [data, setData] = useState(0);
  const baseURLforShow = `https://api.themoviedb.org/3/search/tv?api_key=30d24f251c62092cc350130a6f881fec&language=en-US&page=1&query=${APIquery}`;
  const baseURLforMovie = `https://api.themoviedb.org/3/search/movie?api_key=30d24f251c62092cc350130a6f881fec&language=en-US&query=${APIquery}`;
  const [movieData, setMovieData] = useState(null);
  const handleSearch = (event) => {
    if (event.charCode === 13 || event.keyCode == 13) {
      let searchQuery = event.target.value;
      setData(searchQuery);
      setSearchFieldQuery("");
      event.target.blur();

      let res = searchQuery.replace(/ /, "+");
      setAPIquery(res);
    }
  };
  const manageQuery = (event) => {
    setSearchFieldQuery(event.target.value);
  };
  useEffect(() => {
    if (data !== 0) {
      axios.get(baseURLforMovie).then((response) => {
        let APIdata = response.data;
        setMovieData(APIdata);
        console.log(APIquery);
      });
    }
  }, [data]);

  useEffect(() => {
    if (movieData) {
      console.log(movieData);
    }
  }, [movieData]);

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
