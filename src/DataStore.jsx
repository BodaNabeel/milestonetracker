import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

// const [APIdata, setAPIdata] = useState()
export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [books, setBooks] = useState([]);
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState();

  const baseURLforShow = `https://api.themoviedb.org/3/search/tv?api_key=30d24f251c62092cc350130a6f881fec&language=en-US&page=1&query=${query}`;
  const baseURLforMovie = `https://api.themoviedb.org/3/search/movie?api_key=30d24f251c62092cc350130a6f881fec&language=en-US&query=${query}`;
  const baseURLforBook = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBAa6_wmFuqCdHBHF-45FsfTOhaFoPjHQA&maxResults=10`;
  // useEffect(() => {
  //   // Fetch data from APIs and update state
  // }, []);
  useEffect(() => {
    if (query) {
      axios.get(baseURLforMovie).then((response) => {
        let APIdata = response.data;
        if (APIdata.results.length > 0) {
          // setMovieData(APIdata);
          updateMovies(APIdata);
        } else null;
        // APIdata.results.length > 0 ? setMovieData(APIdata) : null;
      });
      axios.get(baseURLforShow).then((response) => {
        let APIdata = response.data;
        APIdata.results.length > 0 ? updateSeries(APIdata) : null;
      });
      axios.get(baseURLforBook).then((response) => {
        let APIData = response.data;
        updateBooks(APIData);
      });
    }
  }, [query]);

  // useEffect(() => {
  //   if (movieData) {
  //     console.log("Movie: ", movieData);
  //   }
  // }, [movieData]);
  // useEffect(() => {
  //   if (seriesData) {
  //     console.log("Show:", seriesData);
  //   }
  // }, [seriesData]);
  // useEffect(() => {
  //   if (bookData) {
  //     console.log("Book", bookData);
  //   }
  // }, [bookData]);
  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };

  const updateSeries = (newSeries) => {
    setSeries(newSeries);
  };

  const updateBooks = (newBooks) => {
    setBooks(newBooks);
  };

  const updateGames = (newGames) => {
    setGames(newGames);
  };
  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <DataContext.Provider
      value={{
        movies,
        series,
        books,
        games,
        query,
        updateMovies,
        updateSeries,
        updateBooks,
        updateGames,
        setQuery,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
