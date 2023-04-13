import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [books, setBooks] = useState([]);
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState();
  const [storedMovies, setStoredMovies] = useState([]);
  const [storedSeries, setStoredSeries] = useState([]);
  const [storedBooks, setStoredBooks] = useState([]);
  const [completedBooks, setcompletedBooks] = useState(['1', '2']);
  const [completedMovies, setCompletedMovies] = useState(['1', '2']);
  const [completedSeries, setCompletedSeries] = useState(['1', '2']);
  const [clickedButtonsList, setClickedButtonsList] = useState([]);
  const baseURLforShow = `https://api.themoviedb.org/3/search/tv?api_key=30d24f251c62092cc350130a6f881fec&language=en-US&page=1&query=${query}`;
  const baseURLforMovie = `https://api.themoviedb.org/3/search/movie?api_key=30d24f251c62092cc350130a6f881fec&language=en-US&query=${query}`;
  const baseURLforBook = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBAa6_wmFuqCdHBHF-45FsfTOhaFoPjHQA&maxResults=10`;
  const CompletedPendingData = {
    books: [
      "Books",
      completedBooks.length,
      storedBooks.length - completedBooks.length,
    ],
    movies: [
      "Movies",
      completedMovies.length,
      storedMovies.length - completedMovistoredMovies.length,
    ],
    books: [
      "Series",
      completedSeries.length,
      storedSeries.length - completedSeries.length,
    ],
    // games: ["Games", completedGames.length, storedGames.length - completedGames.length ]
  };
  useEffect(() => {
    if (query) {
      axios.get(baseURLforMovie).then((response) => {
        let APIdata = response.data;
        if (APIdata.results.length > 0) {
          updateMovies(APIdata);
        } else updateMovies([]);
      });
      axios.get(baseURLforShow).then((response) => {
        let APIdata = response.data;
        APIdata.results.length > 0 ? updateSeries(APIdata) : updateSeries([]);
      });
      axios.get(baseURLforBook).then((response) => {
        let APIdata = response.data;
        APIdata.items.length > 0 ? updateBooks(APIdata) : updateBooks([]);
      });
    }
  }, [query]);

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
        storedSeries,
        setStoredSeries,
        storedBooks,
        setStoredBooks,
        storedMovies,
        setStoredMovies,
        clickedButtonsList,
        setClickedButtonsList,
        completedBooks,
        completedMovies,
        completedSeries,
        CompletedPendingData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
