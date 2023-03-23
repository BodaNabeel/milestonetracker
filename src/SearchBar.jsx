import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { DataContext } from "./DataStore";
export default function SearchBar({ searchFieldQuery, setSearchFieldQuery }) {
  const { movies, updateMovies } = useContext(DataContext);
  const [APIquery, setAPIquery] = useState();
  const [data, setData] = useState();
  const baseURLforShow = `https://api.themoviedb.org/3/search/tv?api_key=30d24f251c62092cc350130a6f881fec&language=en-US&page=1&query=${APIquery}`;
  const baseURLforMovie = `https://api.themoviedb.org/3/search/movie?api_key=30d24f251c62092cc350130a6f881fec&language=en-US&query=${APIquery}`;
  const baseURLforBook = `https://www.googleapis.com/books/v1/volumes?q=${APIquery}&key=AIzaSyBAa6_wmFuqCdHBHF-45FsfTOhaFoPjHQA&maxResults=10`;
  const [movieData, setMovieData] = useState();
  const [seriesData, setSeriesData] = useState();
  const [bookData, setBookData] = useState();

  const handleSearch = (event) => {
    if (event.key == "Enter") {
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
    if (data) {
      axios.get(baseURLforMovie).then((response) => {
        let APIdata = response.data;
        if(APIdata.results.length > 0) {
          setMovieData(APIdata);
          updateMovies(APIdata)
        } else null
        // APIdata.results.length > 0 ? setMovieData(APIdata) : null;
      });
      axios.get(baseURLforShow).then((response) => {
        let APIdata = response.data;
        APIdata.results.length > 0 ? setSeriesData(APIdata) : null;
      });
      axios.get(baseURLforBook).then((response) => {
        let APIData = response.data;
        setBookData(APIData);
      });
    }
  }, [data]);

  useEffect(() => {
    if (movieData) {
      console.log("Movie: ", movieData);
    }
  }, [movieData]);
  useEffect(() => {
    if (seriesData) {
      console.log("Show:", seriesData);
    }
  }, [seriesData]);
  useEffect(() => {
    if (bookData) {
      console.log("Book", bookData);
    }
  }, [bookData]);

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
